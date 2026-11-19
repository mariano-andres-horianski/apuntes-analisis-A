(function (global) {
  'use strict';

  // =========================================================================
  // 1. Safe Storage & State
  // =========================================================================
  var STORAGE_KEY = 'ads_study_state_v1';
  var THEME_KEY = 'ads_theme_v1';
  var memoryFallback = {};

  function safeGetItem(key) {
    try {
      if (global.localStorage) {
        return global.localStorage.getItem(key);
      }
    } catch (e) {}
    return Object.prototype.hasOwnProperty.call(memoryFallback, key)
      ? memoryFallback[key]
      : null;
  }

  function safeSetItem(key, value) {
    memoryFallback[key] = String(value);
    try {
      if (global.localStorage) {
        global.localStorage.setItem(key, String(value));
      }
    } catch (e) {}
  }

  function defaultPersistentState() {
    return {
      quizHistory: [],
      wrongQuestionIds: [],
      exploredMaps: [],
      completedChapters: [],
      inquiryStatus: {},
      inquiryNotes: {}
    };
  }

  function loadPersistentState() {
    var base = defaultPersistentState();
    try {
      var raw = safeGetItem(STORAGE_KEY);
      if (!raw) return base;
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return base;
      return {
        quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory : [],
        wrongQuestionIds: Array.isArray(parsed.wrongQuestionIds) ? parsed.wrongQuestionIds : [],
        exploredMaps: Array.isArray(parsed.exploredMaps) ? parsed.exploredMaps : [],
        completedChapters: Array.isArray(parsed.completedChapters) ? parsed.completedChapters : [],
        inquiryStatus: parsed.inquiryStatus && typeof parsed.inquiryStatus === 'object' ? parsed.inquiryStatus : {},
        inquiryNotes: parsed.inquiryNotes && typeof parsed.inquiryNotes === 'object' ? parsed.inquiryNotes : {}
      };
    } catch (e) {
      return base;
    }
  }

  var state = loadPersistentState();

  function saveState() {
    try {
      safeSetItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  // =========================================================================
  // 2. Utilities & Data Accessors
  // =========================================================================
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function shuffleArray(list) {
    var arr = list.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function formatTime(totalSec) {
    var s = Math.max(0, Math.floor(totalSec || 0));
    var mins = Math.floor(s / 60);
    var secs = s % 60;
    return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  function getUnits() {
    return Array.isArray(global.ADS_UNITS) ? global.ADS_UNITS : [];
  }

  function getUnitMeta(unitId) {
    var units = getUnits();
    for (var i = 0; i < units.length; i++) {
      if (units[i].id === unitId) return units[i];
    }
    return null;
  }

  function getQuizPool() {
    return Array.isArray(global.ADS_QUIZ) ? global.ADS_QUIZ : [];
  }

  function getMapsPool() {
    return Array.isArray(global.ADS_MAPS) ? global.ADS_MAPS : [];
  }

  function getInquiryPool() {
    return Array.isArray(global.ADS_INQUIRY) ? global.ADS_INQUIRY : [];
  }

  function getGlossaryPool() {
    return Array.isArray(global.ADS_GLOSSARY) ? global.ADS_GLOSSARY : [];
  }

  function getJourneyPool() {
    return Array.isArray(global.ADS_JOURNEY) ? global.ADS_JOURNEY : [];
  }

  function unitBadgeClass(unit) {
    if (unit === 'integradora') return 'badge-primary';
    var map = {
      1: 'badge-primary',
      2: 'badge-teal',
      3: 'badge-violet',
      4: 'badge-warning',
      5: 'badge-success',
      6: 'badge-danger'
    };
    return map[unit] || 'badge-primary';
  }

  function unitLabel(unit) {
    return unit === 'integradora' ? 'Integradora U1–U6' : 'Unidad ' + unit;
  }

  function inquiryTypeLabel(type) {
    var map = {
      comprension: 'Comprensión',
      contraste: 'Contraste',
      caso: 'Caso práctico',
      integracion: 'Integración'
    };
    return map[type] || type;
  }

  // =========================================================================
  // 3. UI Runtime State (Non-persisted session state)
  // =========================================================================
  var runtime = {
    route: 'home',
    quiz: {
      phase: 'setup', // 'setup' | 'active' | 'review'
      setup: {
        mode: 'simulacro', // 'simulacro' | 'unidad' | 'errores'
        count: 20,
        unit: 1,
        shuffle: true,
        timed: true
      },
      session: null,
      reviewFilter: 'all', // 'all' | 'wrong' | 'correct' | 'flagged'
      timerId: null
    },
    maps: {
      unitFilter: 'integradora', // 'all' | 'integradora' | 1..6
      activeMapId: 'integ-hilos',
      activeNodeId: 'hilos',
      zoom: 100,
      fullscreen: false
    },
    journey: {
      chapterIndex: 0,
      checkSelections: {}
    },
    practice: {
      tool: 'flashcards'
    },
    inquiry: {
      unitFilter: 'all', // 'all' | 'integradora' | 1..6
      typeFilter: 'all', // 'all' | 'comprension' | 'contraste' | 'caso' | 'integracion'
      statusFilter: 'all', // 'all' | 'pendiente' | 'repasar' | 'dominada'
      search: '',
      openKeys: {}, // id -> boolean
      openNotes: {} // id -> boolean
    },
    glossary: {
      unitFilter: 'all',
      search: ''
    },
    oralItem: null,
    oralRevealed: false
  };

  // =========================================================================
  // 4. Toast & Modal Helpers
  // =========================================================================
  function showToast(message) {
    if (typeof document === 'undefined') return;
    var root = document.getElementById('toast-root');
    if (!root) return;
    var el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    root.appendChild(el);
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 2400);
  }

  function closeModal() {
    if (typeof document === 'undefined') return;
    var wasMapFullscreen = !!runtime.maps.fullscreen;
    runtime.maps.fullscreen = false;
    var root = document.getElementById('modal-root');
    if (root) root.innerHTML = '';
    if (wasMapFullscreen && runtime.route === 'maps') {
      render();
    }
  }

  function openModal(html) {
    if (typeof document === 'undefined') return;
    var root = document.getElementById('modal-root');
    if (!root) return;
    root.innerHTML =
      '<div class="modal-backdrop" id="modal-backdrop">' +
      '  <div class="modal-dialog" role="dialog" aria-modal="true">' +
      html +
      '  </div>' +
      '</div>';

    var backdrop = document.getElementById('modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', function (ev) {
        if (ev.target === backdrop) closeModal();
      });
    }
    var closeBtn = root.querySelector('[data-close-modal]');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
  }

  // =========================================================================
  // 5. Quiz Engine (Setup, Balanced Sampling, Shuffled Options, Review)
  // =========================================================================
  function stopQuizTimer() {
    if (runtime.quiz.timerId) {
      clearInterval(runtime.quiz.timerId);
      runtime.quiz.timerId = null;
    }
  }

  function buildBalancedSample(pool, totalCount) {
    var byUnit = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    pool.forEach(function (q) {
      if (byUnit[q.unit]) byUnit[q.unit].push(q);
    });
    var unitKeys = [1, 2, 3, 4, 5, 6];
    unitKeys.forEach(function (u) {
      byUnit[u] = shuffleArray(byUnit[u]);
    });

    var picked = [];
    var idx = 0;
    while (picked.length < totalCount && picked.length < pool.length) {
      var uKey = unitKeys[idx % unitKeys.length];
      if (byUnit[uKey].length > 0) {
        picked.push(byUnit[uKey].shift());
      }
      idx++;
      if (idx > pool.length * 4) break;
    }
    return picked;
  }

  function prepareQuizQuestions(rawQuestions, doShuffle) {
    var list = doShuffle ? shuffleArray(rawQuestions) : rawQuestions.slice();
    return list.map(function (q) {
      var optionObjects = q.options.map(function (optText, i) {
        return {
          text: optText,
          isCorrect: i === q.correctIndex
        };
      });
      if (doShuffle) {
        optionObjects = shuffleArray(optionObjects);
      }
      return {
        id: q.id,
        unit: q.unit,
        topic: q.topic,
        difficulty: q.difficulty,
        question: q.question,
        explanation: q.explanation,
        options: optionObjects,
        selectedIndex: null,
        flagged: false
      };
    });
  }

  function startQuizSession(customConfig) {
    stopQuizTimer();
    var pool = getQuizPool();
    var cfg = customConfig || runtime.quiz.setup;
    var selectedRaw = [];
    var label = '';

    if (cfg.mode === 'custom_retry' && Array.isArray(cfg.questionIds)) {
      var idSet = {};
      cfg.questionIds.forEach(function (id) { idSet[id] = true; });
      selectedRaw = pool.filter(function (q) { return !!idSet[q.id]; });
      label = 'Repaso de errores (' + selectedRaw.length + ')';
    } else if (cfg.mode === 'errores') {
      var wrongSet = {};
      state.wrongQuestionIds.forEach(function (id) { wrongSet[id] = true; });
      selectedRaw = pool.filter(function (q) { return !!wrongSet[q.id]; });
      label = 'Preguntas falladas (' + selectedRaw.length + ')';
    } else if (cfg.mode === 'unidad') {
      var targetUnit = Number(cfg.unit) || 1;
      selectedRaw = pool.filter(function (q) { return q.unit === targetUnit; });
      label = 'Unidad ' + targetUnit;
    } else {
      var count = Number(cfg.count) || 20;
      selectedRaw = buildBalancedSample(pool, count);
      label = 'Simulacro U1–U6 (' + selectedRaw.length + ' preg.)';
    }

    if (selectedRaw.length === 0) {
      showToast('No hay preguntas disponibles para ese modo.');
      return;
    }

    var prepared = prepareQuizQuestions(selectedRaw, !!cfg.shuffle);

    runtime.quiz.phase = 'active';
    runtime.quiz.reviewFilter = 'all';
    runtime.quiz.session = {
      label: label,
      mode: cfg.mode,
      timed: !!cfg.timed,
      startedAt: Date.now(),
      elapsedSec: 0,
      currentIndex: 0,
      questions: prepared,
      result: null
    };

    if (cfg.timed) {
      runtime.quiz.timerId = setInterval(function () {
        if (!runtime.quiz.session || runtime.quiz.phase !== 'active') {
          stopQuizTimer();
          return;
        }
        runtime.quiz.session.elapsedSec = Math.floor((Date.now() - runtime.quiz.session.startedAt) / 1000);
        var timerEl = document.getElementById('quiz-timer-display');
        if (timerEl) {
          timerEl.textContent = formatTime(runtime.quiz.session.elapsedSec);
        }
      }, 1000);
    }

    render();
  }

  function evaluateAndSubmitQuiz() {
    var session = runtime.quiz.session;
    if (!session) return;
    stopQuizTimer();
    session.elapsedSec = Math.floor((Date.now() - session.startedAt) / 1000);

    var score = 0;
    var total = session.questions.length;
    var unitStats = {};
    var wrongMap = {};
    state.wrongQuestionIds.forEach(function (id) { wrongMap[id] = true; });

    session.questions.forEach(function (q) {
      if (!unitStats[q.unit]) {
        unitStats[q.unit] = { total: 0, correct: 0 };
      }
      unitStats[q.unit].total += 1;

      var chosenOpt = q.selectedIndex !== null ? q.options[q.selectedIndex] : null;
      var isRight = !!(chosenOpt && chosenOpt.isCorrect);
      q.isRight = isRight;

      if (isRight) {
        score += 1;
        unitStats[q.unit].correct += 1;
        delete wrongMap[q.id];
      } else {
        wrongMap[q.id] = true;
      }
    });

    state.wrongQuestionIds = Object.keys(wrongMap);
    var pct = total > 0 ? Math.round((score / total) * 100) : 0;

    state.quizHistory.unshift({
      id: 'att-' + Date.now(),
      dateIso: new Date().toISOString(),
      mode: session.mode,
      label: session.label,
      score: score,
      total: total,
      pct: pct,
      elapsedSec: session.elapsedSec
    });
    if (state.quizHistory.length > 25) {
      state.quizHistory = state.quizHistory.slice(0, 25);
    }
    saveState();

    session.result = {
      score: score,
      total: total,
      pct: pct,
      unitStats: unitStats
    };
    runtime.quiz.phase = 'review';
    runtime.quiz.reviewFilter = 'all';
    closeModal();
    render();
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // =========================================================================
  // 6. Maps Helpers
  // =========================================================================
  function markMapExplored(mapId) {
    if (!mapId) return;
    if (state.exploredMaps.indexOf(mapId) === -1) {
      state.exploredMaps.push(mapId);
      saveState();
    }
  }

  function getFilteredMaps() {
    var all = getMapsPool();
    if (runtime.maps.unitFilter === 'all') return all;
    return all.filter(function (m) {
      return String(m.unit) === String(runtime.maps.unitFilter);
    });
  }

  function selectMap(mapId) {
    var all = getMapsPool();
    var target = null;
    for (var i = 0; i < all.length; i++) {
      if (all[i].id === mapId) {
        target = all[i];
        break;
      }
    }
    if (!target && all.length > 0) target = all[0];
    if (!target) return;
    runtime.maps.activeMapId = target.id;
    runtime.maps.activeNodeId = target.defaultNode || Object.keys(target.nodes || {})[0] || '';
    markMapExplored(target.id);
  }

  // =========================================================================
  // 7. Renderers: Home
  // =========================================================================
  function renderHome() {
    var units = getUnits();
    var quizCount = getQuizPool().length;
    var mapsCount = getMapsPool().length;
    var inquiryCount = getInquiryPool().length;

    var attempts = state.quizHistory.length;
    var avgPct = '--';
    if (attempts > 0) {
      var sum = state.quizHistory.reduce(function (acc, item) { return acc + item.pct; }, 0);
      avgPct = Math.round(sum / attempts) + '%';
    }
    var exploredCount = state.exploredMaps.length;
    var masteredCount = getInquiryPool().filter(function (item) {
      return state.inquiryStatus[item.id] === 'dominada';
    }).length;

    var unitsHtml = units.map(function (u) {
      var topicsHtml = u.keyTopics.slice(0, 3).map(function (t) {
        return '<li>' + escapeHtml(t) + '</li>';
      }).join('');
      return (
        '<article class="unit-card unit-accent-' + escapeHtml(u.accent) + '">' +
        '  <div>' +
        '    <div class="unit-card-head">' +
        '      <span class="unit-code">' + escapeHtml(u.code) + '</span>' +
        '      <span class="badge">12 preg. · 7 indag.</span>' +
        '    </div>' +
        '    <h3>' + escapeHtml(u.title) + '</h3>' +
        '    <p>' + escapeHtml(u.summary) + '</p>' +
        '    <ul class="unit-topics">' + topicsHtml + '</ul>' +
        '  </div>' +
        '  <div class="unit-actions">' +
        '    <a href="#journey?unit=' + u.id + '" class="btn btn-ghost btn-sm">Recorrido</a>' +
        '    <a href="#quiz?unit=' + u.id + '" class="btn btn-secondary btn-sm">Examen ' + escapeHtml(u.code) + '</a>' +
        '    <a href="#maps?unit=' + u.id + '" class="btn btn-ghost btn-sm">Mapas</a>' +
        '    <a href="#inquiry?unit=' + u.id + '" class="btn btn-ghost btn-sm">Indagación</a>' +
        '  </div>' +
        '</article>'
      );
    }).join('');

    var journeyCount = getJourneyPool().length;

    return (
      '<section class="blueprint-hero">' +
      '  <span class="hero-eyebrow">Análisis y Diseño de Sistemas A · Plataforma de Estudio Offline</span>' +
      '  <h1>Dominá la materia desde cero, con animaciones, exámenes y mapas</h1>' +
      '  <p class="hero-lead">Elegí cómo querés entrenar hoy a partir del apunte oficial (Unidades 1 a 6): recorré los temas desde el principio con simulaciones interactivas, evaluaciones multiple choice con autocorrección, diagramas SVG y preguntas de indagación.</p>' +
      '  <div class="kpi-strip">' +
      '    <div class="kpi-card"><div class="kpi-value">' + attempts + '</div><div class="kpi-label">Exámenes rendidos</div></div>' +
      '    <div class="kpi-card"><div class="kpi-value">' + avgPct + '</div><div class="kpi-label">Promedio general</div></div>' +
      '    <div class="kpi-card"><div class="kpi-value">' + exploredCount + ' / ' + mapsCount + '</div><div class="kpi-label">Mapas explorados</div></div>' +
      '    <div class="kpi-card"><div class="kpi-value">' + masteredCount + ' / ' + inquiryCount + '</div><div class="kpi-label">Preguntas dominadas</div></div>' +
      '  </div>' +
      '</section>' +

      '<section aria-label="Modos principales de estudio">' +
      '  <div class="section-heading">' +
      '    <div><h2>Elegí tu modo de estudio</h2><p>Cuatro herramientas complementarias para aprender desde cero, practicar, visualizar y argumentar cada unidad.</p></div>' +
      '  </div>' +
      '  <div class="pillars-grid">' +
      '    <article class="pillar-card">' +
      '      <div>' +
      '        <div class="pillar-icon" style="background:var(--success-soft);color:var(--success);">' +
      '          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
      '        </div>' +
      '        <h3>Aprender desde cero (Animado)</h3>' +
      '        <p>Recorrido guiado capítulo a capítulo desde la base de la materia hasta SDD con laboratorios interactivos y simulaciones en vivo.</p>' +
      '        <div class="pillar-meta">' +
      '          <span class="badge badge-success">' + journeyCount + ' capítulos</span>' +
      '          <span class="badge">8 animaciones interactivas</span>' +
      '        </div>' +
      '      </div>' +
      '      <a href="#journey" class="btn btn-primary">Comenzar recorrido →</a>' +
      '    </article>' +

      '    <article class="pillar-card">' +
      '      <div>' +
      '        <div class="pillar-icon" style="background:var(--primary-soft);color:var(--primary);">' +
      '          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' +
      '        </div>' +
      '        <h3>Exámenes Multiple Choice</h3>' +
      '        <p>Elegí simulacro integrador, examen por unidad o repaso exclusivo de tus errores. Las respuestas se revisan automáticamente recién al entregar.</p>' +
      '        <div class="pillar-meta">' +
      '          <span class="badge badge-primary">' + quizCount + ' preguntas</span>' +
      '          <span class="badge">Explicación del apunte</span>' +
      '        </div>' +
      '      </div>' +
      '      <a href="#quiz" class="btn btn-primary">Ir a Exámenes →</a>' +
      '    </article>' +

      '    <article class="pillar-card">' +
      '      <div>' +
      '        <div class="pillar-icon" style="background:var(--teal-soft);color:var(--teal);">' +
      '          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="10.5" y1="7.5" x2="6.5" y2="16.5"/><line x1="13.5" y1="7.5" x2="17.5" y2="16.5"/></svg>' +
      '        </div>' +
      '        <h3>Mapas Conceptuales y Gráficos</h3>' +
      '        <p>Explorá diagramas SVG interactivos de cada tema: TGS, Espacios, 3P+A, Ciclos, Entrevistas, Curva del Error, UP, FURPS+, SDD y más.</p>' +
      '        <div class="pillar-meta">' +
      '          <span class="badge badge-teal">' + mapsCount + ' diagramas</span>' +
      '          <span class="badge">Inspector + Zoom</span>' +
      '        </div>' +
      '      </div>' +
      '      <a href="#maps" class="btn btn-primary">Explorar Mapas →</a>' +
      '    </article>' +

      '    <article class="pillar-card">' +
      '      <div>' +
      '        <div class="pillar-icon" style="background:var(--violet-soft);color:var(--violet);">' +
      '          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
      '        </div>' +
      '        <h3>Indagación en Profundidad</h3>' +
      '        <p>Lista de preguntas abiertas para hacerte a vos mismo (comprensión, contraste, casos e integración), con pistas ocultas, repreguntas y notas.</p>' +
      '        <div class="pillar-meta">' +
      '          <span class="badge badge-violet">' + inquiryCount + ' preguntas</span>' +
      '          <span class="badge">Modo Oral al azar</span>' +
      '        </div>' +
      '      </div>' +
      '      <a href="#inquiry" class="btn btn-primary">Abrir Indagación →</a>' +
      '    </article>' +
      '  </div>' +
      '</section>' +

      '<section aria-label="Recorrido por Unidades">' +
      '  <div class="section-heading">' +
      '    <div><h2>Recorrido por Unidades (U1–U6)</h2><p>Entrá directamente a practicar o visualizar cualquier unidad del programa.</p></div>' +
      '  </div>' +
      '  <div class="units-grid">' + unitsHtml + '</div>' +
      '</section>'
    );
  }

  // =========================================================================
  // 8. Renderers: Quiz (Setup, Active, Review)
  // =========================================================================
  function renderQuiz() {
    if (runtime.quiz.phase === 'active' && runtime.quiz.session) {
      return renderQuizActive();
    }
    if (runtime.quiz.phase === 'review' && runtime.quiz.session) {
      return renderQuizReview();
    }
    return renderQuizSetup();
  }

  function renderQuizSetup() {
    var cfg = runtime.quiz.setup;
    var units = getUnits();
    var wrongCount = state.wrongQuestionIds.length;

    var countOptions = [10, 20, 30].map(function (c) {
      return (
        '<button type="button" class="chip' + (cfg.count === c ? ' is-active' : '') + '" data-quiz-count="' + c + '">' +
        c + ' preguntas</button>'
      );
    }).join('');

    var unitOptions = units.map(function (u) {
      return (
        '<button type="button" class="chip' + (cfg.unit === u.id ? ' is-active' : '') + '" data-quiz-unit="' + u.id + '">' +
        escapeHtml(u.code) + ' · ' + escapeHtml(u.shortTitle) + '</button>'
      );
    }).join('');

    var configControls = '';
    if (cfg.mode === 'simulacro') {
      configControls =
        '<div class="form-row">' +
        '  <span class="form-label">Cantidad de preguntas (balanceadas entre U1–U6)</span>' +
        '  <div class="chip-group">' + countOptions + '</div>' +
        '</div>';
    } else if (cfg.mode === 'unidad') {
      configControls =
        '<div class="form-row">' +
        '  <span class="form-label">Elegí la unidad a evaluar (12 preguntas c/u)</span>' +
        '  <div class="chip-group">' + unitOptions + '</div>' +
        '</div>';
    } else {
      configControls =
        '<div class="form-row">' +
        '  <p style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">Tenés <strong>' + wrongCount + '</strong> pregunta(s) marcada(s) como errónea(s) en intentos anteriores. Al responderlas bien se quitarán automáticamente de esta lista.</p>' +
        '</div>';
    }

    var historyHtml = '';
    if (state.quizHistory.length === 0) {
      historyHtml = '<div class="empty-state">Todavía no rendiste ningún examen. Configurá uno a la izquierda para empezar.</div>';
    } else {
      historyHtml = '<div class="history-list">' + state.quizHistory.slice(0, 8).map(function (h) {
        var badgeCls = h.pct >= 70 ? 'badge-success' : (h.pct >= 50 ? 'badge-warning' : 'badge-danger');
        return (
          '<div class="history-item">' +
          '  <div>' +
          '    <strong>' + escapeHtml(h.label) + '</strong>' +
          '    <div style="font-size:0.77rem;color:var(--ink-secondary);">' +
                 escapeHtml(h.score + '/' + h.total) + ' · ' + formatTime(h.elapsedSec) +
          '    </div>' +
          '  </div>' +
          '  <span class="badge ' + badgeCls + '">' + h.pct + '%</span>' +
          '</div>'
        );
      }).join('') + '</div>';
    }

    var canStart = cfg.mode !== 'errores' || wrongCount > 0;

    return (
      '<div class="page-header">' +
      '  <div><h1>Exámenes Multiple Choice</h1><p>Ponete a prueba sin pistas previas: la corrección automática se muestra únicamente cuando entregás el examen.</p></div>' +
      '</div>' +
      '<div class="quiz-setup-grid">' +
      '  <section class="panel">' +
      '    <h2 style="margin:0 0 1rem;font-size:1.15rem;">Configurar examen</h2>' +
      '    <div class="mode-cards">' +
      '      <button type="button" class="mode-option' + (cfg.mode === 'simulacro' ? ' is-selected' : '') + '" data-quiz-mode="simulacro">' +
      '        <strong>Simulacro completo</strong>' +
      '        <span>Mezcla equilibrada de todas las unidades U1–U6.</span>' +
      '      </button>' +
      '      <button type="button" class="mode-option' + (cfg.mode === 'unidad' ? ' is-selected' : '') + '" data-quiz-mode="unidad">' +
      '        <strong>Por Unidad</strong>' +
      '        <span>Las 12 preguntas específicas de la unidad elegida.</span>' +
      '      </button>' +
      '      <button type="button" class="mode-option' + (cfg.mode === 'errores' ? ' is-selected' : '') + '" data-quiz-mode="errores">' +
      '        <strong>Repasar errores (' + wrongCount + ')</strong>' +
      '        <span>Solo las preguntas que fallaste en exámenes previos.</span>' +
      '      </button>' +
      '    </div>' +
      configControls +
      '    <div class="toggle-list">' +
      '      <label class="toggle-item">' +
      '        <span>Mezclar orden de preguntas y opciones</span>' +
      '        <input type="checkbox" id="chk-quiz-shuffle"' + (cfg.shuffle ? ' checked' : '') + '>' +
      '      </label>' +
      '      <label class="toggle-item">' +
      '        <span>Mostrar cronómetro durante el examen</span>' +
      '        <input type="checkbox" id="chk-quiz-timed"' + (cfg.timed ? ' checked' : '') + '>' +
      '      </label>' +
      '    </div>' +
      '    <button type="button" class="btn btn-primary" id="btn-start-quiz"' + (canStart ? '' : ' disabled') + '>Comenzar examen</button>' +
      '  </section>' +

      '  <aside class="panel">' +
      '    <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.85rem;">' +
      '      <h2 style="margin:0;font-size:1.08rem;">Historial reciente</h2>' +
      (state.quizHistory.length > 0 || wrongCount > 0
        ? '<button type="button" class="btn btn-ghost btn-sm" id="btn-clear-quiz-stats">Limpiar historial</button>'
        : '') +
      '    </div>' +
      historyHtml +
      '  </aside>' +
      '</div>'
    );
  }

  function renderQuizActive() {
    var session = runtime.quiz.session;
    var q = session.questions[session.currentIndex];
    var total = session.questions.length;
    var answeredCount = session.questions.filter(function (item) {
      return item.selectedIndex !== null;
    }).length;
    var progressPct = Math.round(((session.currentIndex + 1) / total) * 100);
    var letters = ['A', 'B', 'C', 'D'];

    var optionsHtml = q.options.map(function (opt, idx) {
      var selected = q.selectedIndex === idx;
      return (
        '<button type="button" class="option-btn' + (selected ? ' is-selected' : '') + '" data-select-opt="' + idx + '">' +
        '  <span class="option-letter">' + letters[idx] + '</span>' +
        '  <span>' + escapeHtml(opt.text) + '</span>' +
        '</button>'
      );
    }).join('');

    var paletteHtml = session.questions.map(function (item, idx) {
      var cls = 'q-dot';
      if (item.selectedIndex !== null) cls += ' is-answered';
      if (idx === session.currentIndex) cls += ' is-current';
      if (item.flagged) cls += ' is-flagged';
      return '<button type="button" class="' + cls + '" data-jump-q="' + idx + '" title="Ir a pregunta ' + (idx + 1) + '">' + (idx + 1) + '</button>';
    }).join('');

    return (
      '<div class="quiz-topbar">' +
      '  <div>' +
      '    <span class="badge badge-primary">' + escapeHtml(session.label) + '</span>' +
      '    <span style="margin-left:0.6rem;font-size:0.88rem;color:var(--ink-secondary);">Respondidas: <strong>' + answeredCount + ' / ' + total + '</strong></span>' +
      '  </div>' +
      '  <div style="display:flex;align-items:center;gap:0.65rem;">' +
      (session.timed
        ? '<span class="badge" id="quiz-timer-display" style="font-family:var(--font-mono);">' + formatTime(session.elapsedSec) + '</span>'
        : '') +
      '    <button type="button" class="btn btn-ghost btn-sm" id="btn-abort-quiz">Salir</button>' +
      '    <button type="button" class="btn btn-primary btn-sm" id="btn-submit-quiz">Entregar examen</button>' +
      '  </div>' +
      '</div>' +

      '<div class="progress-track"><div class="progress-fill" style="width:' + progressPct + '%"></div></div>' +

      '<div class="quiz-active-layout">' +
      '  <article class="panel">' +
      '    <div class="question-meta">' +
      '      <span class="badge ' + unitBadgeClass(q.unit) + '">Unidad ' + q.unit + '</span>' +
      '      <span class="badge">' + escapeHtml(q.topic) + '</span>' +
      '      <span class="badge">' + escapeHtml(q.difficulty) + '</span>' +
      '      <span style="margin-left:auto;font-family:var(--font-mono);font-size:0.82rem;color:var(--ink-secondary);">Pregunta ' + (session.currentIndex + 1) + ' de ' + total + '</span>' +
      '    </div>' +
      '    <h2 class="question-text">' + escapeHtml(q.question) + '</h2>' +
      '    <div class="options-list">' + optionsHtml + '</div>' +
      '    <div class="quiz-nav-footer">' +
      '      <div style="display:flex;gap:0.5rem;">' +
      '        <button type="button" class="btn btn-secondary btn-sm" id="btn-prev-q"' + (session.currentIndex === 0 ? ' disabled' : '') + '>← Anterior</button>' +
      '        <button type="button" class="btn btn-secondary btn-sm" id="btn-next-q"' + (session.currentIndex === total - 1 ? ' disabled' : '') + '>Siguiente →</button>' +
      '      </div>' +
      '      <button type="button" class="btn ' + (q.flagged ? 'btn-primary' : 'btn-ghost') + ' btn-sm" id="btn-flag-q">' +
             (q.flagged ? 'Marcada con duda' : 'Marcar duda') + '</button>' +
      '    </div>' +
      '  </article>' +

      '  <aside class="panel">' +
      '    <strong style="font-size:0.9rem;">Navegador rápido</strong>' +
      '    <div class="q-grid-palette">' + paletteHtml + '</div>' +
      '    <div class="kbd-hints">' +
      '      Atajos: <code>1–4</code> elegir opción · <code>← / →</code> navegar · <code>F</code> marcar duda' +
      '    </div>' +
      '  </aside>' +
      '</div>'
    );
  }

  function renderQuizReview() {
    var session = runtime.quiz.session;
    var res = session.result;
    var filter = runtime.quiz.reviewFilter;
    var radius = 56;
    var circ = 2 * Math.PI * radius;
    var dashOffset = circ - (res.pct / 100) * circ;
    var ringColor = res.pct >= 70 ? 'var(--success)' : (res.pct >= 50 ? 'var(--warning)' : 'var(--danger)');

    var verdict =
      res.pct >= 85
        ? 'Excelente dominio: tenés muy claros los conceptos y distinciones del apunte.'
        : res.pct >= 65
          ? 'Buen nivel general. Repasá las preguntas falladas y sus mapas conceptuales.'
          : 'Conviene reforzar los fundamentos en Mapas e Indagación antes de volver a rendir.';

    var unitKeys = Object.keys(res.unitStats).sort();
    var breakdownHtml = unitKeys.map(function (uKey) {
      var st = res.unitStats[uKey];
      var uPct = Math.round((st.correct / st.total) * 100);
      return (
        '<div class="breakdown-item">' +
        '  <div style="display:flex;justify-content:space-between;font-size:0.84rem;font-weight:700;">' +
        '    <span>Unidad ' + escapeHtml(uKey) + '</span>' +
        '    <span>' + st.correct + '/' + st.total + ' (' + uPct + '%)</span>' +
        '  </div>' +
        '  <div class="breakdown-bar"><span style="width:' + uPct + '%"></span></div>' +
        '</div>'
      );
    }).join('');

    var wrongIds = session.questions.filter(function (q) { return !q.isRight; }).map(function (q) { return q.id; });
    var filtered = session.questions.filter(function (q) {
      if (filter === 'wrong') return !q.isRight;
      if (filter === 'correct') return q.isRight;
      if (filter === 'flagged') return q.flagged;
      return true;
    });

    var letters = ['A', 'B', 'C', 'D'];
    var cardsHtml = filtered.length === 0
      ? '<div class="empty-state">No hay preguntas que coincidan con este filtro.</div>'
      : filtered.map(function (q, idx) {
          var opts = q.options.map(function (opt, oIdx) {
            var isUser = q.selectedIndex === oIdx;
            var cls = 'review-option';
            var tag = '';
            if (opt.isCorrect) {
              cls += ' opt-correct';
              tag = isUser ? 'Tu respuesta · Correcta' : 'Respuesta correcta';
            } else if (isUser) {
              cls += ' opt-wrong';
              tag = 'Tu respuesta';
            }
            return (
              '<div class="' + cls + '">' +
              '  <span><strong>' + letters[oIdx] + '.</strong> ' + escapeHtml(opt.text) + '</span>' +
              (tag ? '<span style="font-size:0.76rem;font-weight:700;flex-shrink:0;">' + tag + '</span>' : '') +
              '</div>'
            );
          }).join('');

          return (
            '<article class="review-card ' + (q.isRight ? 'is-correct' : 'is-wrong') + '">' +
            '  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.5rem;">' +
            '    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">' +
            '      <span class="badge ' + (q.isRight ? 'badge-success' : 'badge-danger') + '">' + (q.isRight ? 'Correcta' : (q.selectedIndex === null ? 'Sin responder' : 'Incorrecta')) + '</span>' +
            '      <span class="badge ' + unitBadgeClass(q.unit) + '">Unidad ' + q.unit + '</span>' +
            '      <span class="badge">' + escapeHtml(q.topic) + '</span>' +
            (q.flagged ? '<span class="badge badge-warning">Marcada con duda</span>' : '') +
            '    </div>' +
            '    <a href="#maps?unit=' + q.unit + '" class="btn btn-ghost btn-sm">Ver mapa de esta unidad →</a>' +
            '  </div>' +
            '  <h3 style="margin:0.3rem 0 0.65rem;font-size:1.05rem;">' + (idx + 1) + '. ' + escapeHtml(q.question) + '</h3>' +
            opts +
            '  <div class="explanation-box"><strong>Explicación del apunte:</strong> ' + escapeHtml(q.explanation) + '</div>' +
            '</article>'
          );
        }).join('');

    return (
      '<section class="panel" style="margin-bottom:1.25rem;">' +
      '  <div class="review-summary">' +
      '    <div class="score-ring-wrap">' +
      '      <svg class="score-ring-svg" width="136" height="136" viewBox="0 0 136 136">' +
      '        <circle cx="68" cy="68" r="' + radius + '" fill="none" stroke="var(--surface-muted)" stroke-width="11"></circle>' +
      '        <circle cx="68" cy="68" r="' + radius + '" fill="none" stroke="' + ringColor + '" stroke-width="11" stroke-linecap="round" stroke-dasharray="' + circ.toFixed(1) + '" stroke-dashoffset="' + dashOffset.toFixed(1) + '"></circle>' +
      '      </svg>' +
      '      <div class="score-ring-text"><strong>' + res.pct + '%</strong><span>' + res.score + ' / ' + res.total + '</span></div>' +
      '    </div>' +
      '    <div>' +
      '      <span class="badge badge-primary" style="margin-bottom:0.45rem;">Revisión automática · ' + escapeHtml(session.label) + '</span>' +
      '      <h1 style="margin:0 0 0.4rem;font-size:1.45rem;">Resultado del examen</h1>' +
      '      <p style="margin:0 0 0.85rem;color:var(--ink-secondary);">' + escapeHtml(verdict) + ' Tiempo total: <strong>' + formatTime(session.elapsedSec) + '</strong>.</p>' +
      '      <div style="display:flex;flex-wrap:wrap;gap:0.55rem;">' +
      (wrongIds.length > 0
        ? '<button type="button" class="btn btn-primary btn-sm" id="btn-retry-wrong">Reintentar solo las incorrectas (' + wrongIds.length + ')</button>'
        : '') +
      '        <button type="button" class="btn btn-secondary btn-sm" id="btn-new-quiz">Nuevo examen</button>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="unit-breakdown">' + breakdownHtml + '</div>' +
      '</section>' +

      '<div class="chip-group" style="margin-bottom:1rem;">' +
      '  <button type="button" class="chip' + (filter === 'all' ? ' is-active' : '') + '" data-review-filter="all">Todas (' + session.questions.length + ')</button>' +
      '  <button type="button" class="chip' + (filter === 'wrong' ? ' is-active' : '') + '" data-review-filter="wrong">Incorrectas (' + wrongIds.length + ')</button>' +
      '  <button type="button" class="chip' + (filter === 'correct' ? ' is-active' : '') + '" data-review-filter="correct">Correctas (' + res.score + ')</button>' +
      '  <button type="button" class="chip' + (filter === 'flagged' ? ' is-active' : '') + '" data-review-filter="flagged">Marcadas</button>' +
      '</div>' +

      cardsHtml
    );
  }

  // =========================================================================
  // 9. Renderers: Maps & Graphic Explanations
  // =========================================================================
  function getZoomInnerStyle(zoom) {
    if (zoom >= 100) {
      return 'width:' + zoom + '%;min-width:' + Math.round(1040 * zoom / 100) + 'px;';
    }
    return 'width:' + zoom + '%;min-width:0;';
  }

  function getActiveMapContext() {
    var filtered = getFilteredMaps();
    if (filtered.length === 0) filtered = getMapsPool();

    var activeMap = null;
    for (var i = 0; i < filtered.length; i++) {
      if (filtered[i].id === runtime.maps.activeMapId) {
        activeMap = filtered[i];
        break;
      }
    }
    if (!activeMap) {
      activeMap = filtered[0];
      if (activeMap) {
        runtime.maps.activeMapId = activeMap.id;
        runtime.maps.activeNodeId = activeMap.defaultNode || Object.keys(activeMap.nodes || {})[0] || '';
      }
    }
    if (!activeMap) return null;

    var nodeKeys = Object.keys(activeMap.nodes || {});
    var currentNodeId = runtime.maps.activeNodeId;
    if (!activeMap.nodes[currentNodeId] && nodeKeys.length > 0) {
      currentNodeId = nodeKeys[0];
      runtime.maps.activeNodeId = currentNodeId;
    }
    var nodeData = activeMap.nodes[currentNodeId] || {};
    var nodePos = nodeKeys.indexOf(currentNodeId);

    return {
      filtered: filtered,
      activeMap: activeMap,
      nodeKeys: nodeKeys,
      currentNodeId: currentNodeId,
      nodeData: nodeData,
      nodePos: nodePos
    };
  }

  function stepActiveMapNode(delta) {
    var ctx = getActiveMapContext();
    if (!ctx || ctx.nodeKeys.length === 0) return;
    var nextIdx = (ctx.nodePos + delta + ctx.nodeKeys.length) % ctx.nodeKeys.length;
    runtime.maps.activeNodeId = ctx.nodeKeys[nextIdx];
  }

  function fitSvgTextsToBoxes(container) {
    if (!container || typeof container.querySelector !== 'function') return;
    var svg = container.querySelector('svg');
    if (!svg || typeof svg.querySelectorAll !== 'function') return;

    var rects = [];
    var rectEls = svg.querySelectorAll('rect');
    for (var r = 0; r < rectEls.length; r++) {
      var re = rectEls[r];
      var rw = parseFloat(re.getAttribute('width'));
      var rh = parseFloat(re.getAttribute('height'));
      if (rw > 0 && rh > 0) {
        rects.push({
          x: parseFloat(re.getAttribute('x')) || 0,
          y: parseFloat(re.getAttribute('y')) || 0,
          w: rw,
          h: rh
        });
      }
    }
    if (rects.length === 0) return;

    var texts = svg.querySelectorAll('text');
    for (var t = 0; t < texts.length; t++) {
      var tel = texts[t];
      if (typeof tel.getComputedTextLength !== 'function') continue;
      var tx = parseFloat(tel.getAttribute('x'));
      var ty = parseFloat(tel.getAttribute('y'));
      var fs = parseFloat(tel.getAttribute('font-size')) || 12;
      if (isNaN(tx) || isNaN(ty)) continue;

      var best = null;
      var bestArea = Infinity;
      var cy = ty - fs * 0.3;
      for (var k = 0; k < rects.length; k++) {
        var box = rects[k];
        if (tx >= box.x && tx <= box.x + box.w && cy >= box.y && cy <= box.y + box.h) {
          var area = box.w * box.h;
          if (area < bestArea) {
            bestArea = area;
            best = box;
          }
        }
      }
      if (!best) continue;

      var anchor = tel.getAttribute('text-anchor') || 'start';
      var pad = 8;
      var availW = 0;
      if (anchor === 'middle') {
        availW = Math.min(tx - (best.x + pad), (best.x + best.w - pad) - tx) * 2;
      } else if (anchor === 'end') {
        availW = tx - (best.x + pad);
      } else {
        availW = (best.x + best.w - pad) - tx;
      }
      if (availW <= 24) continue;

      try {
        var actualLen = tel.getComputedTextLength();
        if (actualLen > availW) {
          var nextFs = Math.max(8.5, Number((fs * (availW / actualLen) * 0.97).toFixed(2)));
          tel.setAttribute('font-size', String(nextFs));
        }
      } catch (e) {}
    }
  }

  function bindSvgNodesWithin(container, onSelect) {
    if (!container) return;
    var svgNodes = container.querySelectorAll('.svg-node');
    for (var n = 0; n < svgNodes.length; n++) {
      (function (el) {
        function activate() {
          runtime.maps.activeNodeId = el.getAttribute('data-node');
          onSelect();
        }
        if (el.getAttribute('data-node') === runtime.maps.activeNodeId) {
          el.classList.add('is-selected');
        } else {
          el.classList.remove('is-selected');
        }
        el.addEventListener('click', activate);
        el.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            activate();
          }
        });
      })(svgNodes[n]);
    }
  }

  function renderMaps() {
    var ctx = getActiveMapContext();
    if (!ctx) return '<div class="empty-state">No hay diagramas disponibles.</div>';

    var filtered = ctx.filtered;
    var activeMap = ctx.activeMap;
    var nodeKeys = ctx.nodeKeys;
    var currentNodeId = ctx.currentNodeId;
    var nodeData = ctx.nodeData;
    var nodePos = ctx.nodePos;

    markMapExplored(activeMap.id);

    var unitTabs = [
      { id: 'integradora', label: 'Integradora' },
      { id: 1, label: 'U1' },
      { id: 2, label: 'U2' },
      { id: 3, label: 'U3' },
      { id: 4, label: 'U4' },
      { id: 5, label: 'U5' },
      { id: 6, label: 'U6' },
      { id: 'all', label: 'Todos (14)' }
    ].map(function (tab) {
      var active = String(runtime.maps.unitFilter) === String(tab.id);
      return '<button type="button" class="chip' + (active ? ' is-active' : '') + '" data-map-unit="' + escapeHtml(tab.id) + '">' + escapeHtml(tab.label) + '</button>';
    }).join('');

    var mapSelector = filtered.map(function (m) {
      var active = m.id === activeMap.id;
      return '<button type="button" class="chip' + (active ? ' is-active' : '') + '" data-map-select="' + escapeHtml(m.id) + '">' + escapeHtml(m.title) + '</button>';
    }).join('');

    var bulletsHtml = Array.isArray(nodeData.bullets)
      ? '<ul class="inspector-bullets">' + nodeData.bullets.map(function (b) {
          return '<li>' + escapeHtml(b) + '</li>';
        }).join('') + '</ul>'
      : '';

    var nodeChipsHtml = nodeKeys.map(function (nk) {
      var nd = activeMap.nodes[nk] || {};
      var isAct = nk === currentNodeId;
      return '<button type="button" class="node-chip' + (isAct ? ' is-active' : '') + '" data-select-node="' + escapeHtml(nk) + '">' + escapeHtml(nd.title || nk) + '</button>';
    }).join('');

    var takeawaysHtml = Array.isArray(activeMap.takeaways)
      ? '<div class="takeaways-row">' + activeMap.takeaways.map(function (t) {
          return '<div class="takeaway-pill"><strong>Idea clave:</strong> ' + escapeHtml(t) + '</div>';
        }).join('') + '</div>'
      : '';

    var unitCrossLinks = activeMap.unit !== 'integradora'
      ? '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.85rem;">' +
        '  <a href="#quiz?unit=' + activeMap.unit + '" class="btn btn-secondary btn-sm">Practicar examen U' + activeMap.unit + '</a>' +
        '  <a href="#inquiry?unit=' + activeMap.unit + '" class="btn btn-ghost btn-sm">Ver indagación U' + activeMap.unit + '</a>' +
        '</div>'
      : '';

    return (
      '<div class="page-header">' +
      '  <div><h1>Mapas Conceptuales y Explicaciones Gráficas</h1><p>Hacé clic en cualquier bloque de los diagramas para inspeccionar su definición precisa, ejemplos y clave de examen.</p></div>' +
      '</div>' +

      '<div class="maps-toolbar">' +
      '  <div class="chip-group">' + unitTabs + '</div>' +
      '  <div class="chip-group">' + mapSelector + '</div>' +
      '</div>' +

      '<div class="maps-workspace">' +
      '  <div>' +
      '    <div class="diagram-stage-card">' +
      '      <div class="diagram-stage-header">' +
      '        <div>' +
      '          <div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.2rem;">' +
      '            <span class="badge ' + unitBadgeClass(activeMap.unit) + '">' + escapeHtml(unitLabel(activeMap.unit)) + '</span>' +
      '            <span class="badge">' + escapeHtml(activeMap.kind) + '</span>' +
      '          </div>' +
      '          <h2 style="margin:0;font-size:1.15rem;">' + escapeHtml(activeMap.title) + '</h2>' +
      '          <p style="margin:0.15rem 0 0;font-size:0.86rem;color:var(--ink-secondary);">' + escapeHtml(activeMap.subtitle) + '</p>' +
      '        </div>' +
      '        <div class="zoom-controls">' +
      '          <button type="button" class="btn btn-ghost btn-sm" id="btn-zoom-out" title="Alejar">−</button>' +
      '          <button type="button" class="btn btn-ghost btn-sm" id="btn-zoom-reset">' + runtime.maps.zoom + '%</button>' +
      '          <button type="button" class="btn btn-ghost btn-sm" id="btn-zoom-in" title="Acercar">+</button>' +
      '          <button type="button" class="btn btn-secondary btn-sm" id="btn-map-fullscreen" title="Ver en pantalla completa">Expandir</button>' +
      '        </div>' +
      '      </div>' +
      '      <div class="diagram-canvas-wrap">' +
      '        <div class="diagram-zoom-inner" id="diagram-zoom-inner" style="' + getZoomInnerStyle(runtime.maps.zoom) + '">' +
                 activeMap.svg +
      '        </div>' +
      '      </div>' +
      '      <div class="diagram-active-bar">' +
      '        <div class="diagram-active-info">' +
      '          <span class="badge badge-primary">' + escapeHtml(nodeData.badge || 'Nodo') + '</span>' +
      '          <strong>' + escapeHtml(nodeData.title || '') + '</strong>' +
      '          <span class="diagram-active-summary">' + escapeHtml(nodeData.summary || '') + '</span>' +
      '        </div>' +
      '        <div class="diagram-active-actions">' +
      '          <button type="button" class="btn btn-secondary btn-sm" id="btn-bar-prev" title="Nodo anterior">←</button>' +
      '          <button type="button" class="btn btn-secondary btn-sm" id="btn-bar-next" title="Siguiente nodo">→</button>' +
      '          <button type="button" class="btn btn-primary btn-sm" id="btn-scroll-inspector">Ver detalle ↓</button>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      takeawaysHtml +
      '  </div>' +

      '  <aside class="inspector-card" id="map-inspector-card">' +
      '    <div class="inspector-deck-grid">' +
      '      <div>' +
      '        <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">' +
      '          <span class="badge badge-primary">' + escapeHtml(nodeData.badge || 'Nodo') + '</span>' +
      '          <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--ink-muted);">Nodo ' + (nodePos + 1) + ' / ' + nodeKeys.length + '</span>' +
      '        </div>' +
      '        <h3>' + escapeHtml(nodeData.title || '') + '</h3>' +
      '        <p style="margin:0;font-size:0.94rem;color:var(--ink-secondary);">' + escapeHtml(nodeData.summary || '') + '</p>' +
      bulletsHtml +
      '      </div>' +
      '      <div>' +
      (nodeData.examTip
        ? '<div class="exam-tip-box"><strong>Clave de examen:</strong> ' + escapeHtml(nodeData.examTip) + '</div>'
        : '') +
      '        <div style="font-size:0.8rem;font-weight:700;color:var(--ink-secondary);margin-bottom:0.45rem;">Bloques de este diagrama</div>' +
      '        <div class="node-chip-list">' + nodeChipsHtml + '</div>' +
      '        <div class="inspector-nav">' +
      '          <button type="button" class="btn btn-secondary btn-sm" id="btn-node-prev">← Anterior</button>' +
      '          <button type="button" class="btn btn-secondary btn-sm" id="btn-node-next">Siguiente →</button>' +
      '        </div>' +
      unitCrossLinks +
      '      </div>' +
      '    </div>' +
      '  </aside>' +
      '</div>'
    );
  }

  function openMapFullscreenModal() {
    runtime.maps.fullscreen = true;
    renderMapFullscreenModal();
  }

  function renderMapFullscreenModal() {
    if (typeof document === 'undefined') return;
    var root = document.getElementById('modal-root');
    if (!root) return;
    var ctx = getActiveMapContext();
    if (!ctx) return;

    var activeMap = ctx.activeMap;
    var nodeData = ctx.nodeData;
    var nodePos = ctx.nodePos;
    var nodeKeys = ctx.nodeKeys;

    root.innerHTML =
      '<div class="map-fullscreen-backdrop" id="map-fullscreen-backdrop">' +
      '  <div class="map-fullscreen-dialog" role="dialog" aria-modal="true" aria-label="Vista ampliada del mapa">' +
      '    <div class="diagram-stage-header">' +
      '      <div>' +
      '        <div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.15rem;">' +
      '          <span class="badge ' + unitBadgeClass(activeMap.unit) + '">' + escapeHtml(unitLabel(activeMap.unit)) + '</span>' +
      '          <span class="badge">' + escapeHtml(activeMap.kind) + '</span>' +
      '        </div>' +
      '        <h2 style="margin:0;font-size:1.15rem;">' + escapeHtml(activeMap.title) + '</h2>' +
      '      </div>' +
      '      <div class="zoom-controls">' +
      '        <button type="button" class="btn btn-ghost btn-sm" id="btn-fs-zoom-out" title="Alejar">−</button>' +
      '        <button type="button" class="btn btn-ghost btn-sm" id="btn-fs-zoom-reset">' + runtime.maps.zoom + '%</button>' +
      '        <button type="button" class="btn btn-ghost btn-sm" id="btn-fs-zoom-in" title="Acercar">+</button>' +
      '        <button type="button" class="btn btn-secondary btn-sm" data-close-modal>Cerrar ✕</button>' +
      '      </div>' +
      '    </div>' +
      '    <div class="map-fullscreen-canvas">' +
      '      <div class="diagram-zoom-inner" id="fs-diagram-zoom-inner" style="' + getZoomInnerStyle(runtime.maps.zoom) + '">' +
               activeMap.svg +
      '      </div>' +
      '    </div>' +
      '    <div class="map-fullscreen-footer">' +
      '      <div style="flex:1;min-width:240px;">' +
      '        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.45rem;margin-bottom:0.25rem;">' +
      '          <span class="badge badge-primary">' + escapeHtml(nodeData.badge || 'Nodo') + '</span>' +
      '          <strong>' + escapeHtml(nodeData.title || '') + '</strong>' +
      '          <span style="font-family:var(--font-mono);font-size:0.76rem;color:var(--ink-muted);">(' + (nodePos + 1) + '/' + nodeKeys.length + ')</span>' +
      '        </div>' +
      '        <div style="font-size:0.86rem;color:var(--ink-secondary);">' + escapeHtml(nodeData.summary || '') +
      (nodeData.examTip ? ' · <strong>Clave:</strong> ' + escapeHtml(nodeData.examTip) : '') + '</div>' +
      '      </div>' +
      '      <div class="diagram-active-actions">' +
      '        <button type="button" class="btn btn-secondary btn-sm" id="btn-fs-node-prev">← Anterior</button>' +
      '        <button type="button" class="btn btn-secondary btn-sm" id="btn-fs-node-next">Siguiente →</button>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>';

    var backdrop = document.getElementById('map-fullscreen-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', function (ev) {
        if (ev.target === backdrop) closeModal();
      });
    }
    var closeBtn = root.querySelector('[data-close-modal]');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    var fsZoomIn = document.getElementById('btn-fs-zoom-in');
    var fsZoomOut = document.getElementById('btn-fs-zoom-out');
    var fsZoomReset = document.getElementById('btn-fs-zoom-reset');
    if (fsZoomIn) {
      fsZoomIn.addEventListener('click', function () {
        runtime.maps.zoom = Math.min(220, runtime.maps.zoom + 20);
        renderMapFullscreenModal();
      });
    }
    if (fsZoomOut) {
      fsZoomOut.addEventListener('click', function () {
        runtime.maps.zoom = Math.max(80, runtime.maps.zoom - 20);
        renderMapFullscreenModal();
      });
    }
    if (fsZoomReset) {
      fsZoomReset.addEventListener('click', function () {
        runtime.maps.zoom = 100;
        renderMapFullscreenModal();
      });
    }

    var fsPrev = document.getElementById('btn-fs-node-prev');
    var fsNext = document.getElementById('btn-fs-node-next');
    if (fsPrev) {
      fsPrev.addEventListener('click', function () {
        stepActiveMapNode(-1);
        renderMapFullscreenModal();
      });
    }
    if (fsNext) {
      fsNext.addEventListener('click', function () {
        stepActiveMapNode(1);
        renderMapFullscreenModal();
      });
    }

    var fsZoomWrap = document.getElementById('fs-diagram-zoom-inner');
    fitSvgTextsToBoxes(fsZoomWrap);
    bindSvgNodesWithin(fsZoomWrap, renderMapFullscreenModal);
  }

  function highlightActiveSvgNode() {
    if (typeof document === 'undefined') return;
    var nodes = document.querySelectorAll('#diagram-zoom-inner .svg-node');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.getAttribute('data-node') === runtime.maps.activeNodeId) {
        n.classList.add('is-selected');
      } else {
        n.classList.remove('is-selected');
      }
    }
  }

  // =========================================================================
  // 10. Renderers: Deep Inquiry
  // =========================================================================
  function getFilteredInquiry() {
    var pool = getInquiryPool();
    var q = runtime.inquiry.search.trim().toLowerCase();

    return pool.filter(function (item) {
      if (runtime.inquiry.unitFilter !== 'all' && String(item.unit) !== String(runtime.inquiry.unitFilter)) {
        return false;
      }
      if (runtime.inquiry.typeFilter !== 'all' && item.type !== runtime.inquiry.typeFilter) {
        return false;
      }
      var st = state.inquiryStatus[item.id] || 'pendiente';
      if (runtime.inquiry.statusFilter !== 'all' && st !== runtime.inquiry.statusFilter) {
        return false;
      }
      if (q) {
        var hay = (item.question + ' ' + item.whyItMatters + ' ' + item.keyPoints.join(' ') + ' ' + item.followUp).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  function renderInquiry() {
    var all = getInquiryPool();
    var filtered = getFilteredInquiry();
    var mastered = all.filter(function (it) { return state.inquiryStatus[it.id] === 'dominada'; }).length;
    var review = all.filter(function (it) { return state.inquiryStatus[it.id] === 'repasar'; }).length;
    var masteredPct = all.length > 0 ? Math.round((mastered / all.length) * 100) : 0;

    var unitChips = [
      { id: 'all', label: 'Todas' },
      { id: 1, label: 'U1' },
      { id: 2, label: 'U2' },
      { id: 3, label: 'U3' },
      { id: 4, label: 'U4' },
      { id: 5, label: 'U5' },
      { id: 6, label: 'U6' },
      { id: 'integradora', label: 'Integradoras' }
    ].map(function (c) {
      return '<button type="button" class="chip' + (String(runtime.inquiry.unitFilter) === String(c.id) ? ' is-active' : '') + '" data-inq-unit="' + escapeHtml(c.id) + '">' + escapeHtml(c.label) + '</button>';
    }).join('');

    var typeChips = [
      { id: 'all', label: 'Todos los tipos' },
      { id: 'comprension', label: 'Comprensión' },
      { id: 'contraste', label: 'Contraste' },
      { id: 'caso', label: 'Caso práctico' },
      { id: 'integracion', label: 'Integración' }
    ].map(function (c) {
      return '<button type="button" class="chip' + (runtime.inquiry.typeFilter === c.id ? ' is-active' : '') + '" data-inq-type="' + escapeHtml(c.id) + '">' + escapeHtml(c.label) + '</button>';
    }).join('');

    var statusChips = [
      { id: 'all', label: 'Todos los estados' },
      { id: 'pendiente', label: 'Pendientes' },
      { id: 'repasar', label: 'Repasar' },
      { id: 'dominada', label: 'Dominadas' }
    ].map(function (c) {
      return '<button type="button" class="chip' + (runtime.inquiry.statusFilter === c.id ? ' is-active' : '') + '" data-inq-status="' + escapeHtml(c.id) + '">' + escapeHtml(c.label) + '</button>';
    }).join('');

    var cardsHtml = filtered.length === 0
      ? '<div class="empty-state">No hay preguntas de indagación con esos filtros.</div>'
      : filtered.map(function (item) {
          var st = state.inquiryStatus[item.id] || 'pendiente';
          var keysOpen = !!runtime.inquiry.openKeys[item.id];
          var noteOpen = !!runtime.inquiry.openNotes[item.id];
          var savedNote = state.inquiryNotes[item.id] || '';

          var keyPointsHtml = item.keyPoints.map(function (kp) {
            return '<li>' + escapeHtml(kp) + '</li>';
          }).join('');

          return (
            '<article class="inquiry-card">' +
            '  <div class="inquiry-card-top">' +
            '    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">' +
            '      <span class="badge ' + unitBadgeClass(item.unit) + '">' + escapeHtml(unitLabel(item.unit)) + '</span>' +
            '      <span class="badge">' + escapeHtml(inquiryTypeLabel(item.type)) + '</span>' +
            (savedNote.trim() ? '<span class="badge badge-primary">Con nota</span>' : '') +
            '    </div>' +
            '    <div class="status-pills" role="group" aria-label="Estado de dominio">' +
            '      <button type="button" class="status-pill' + (st === 'pendiente' ? ' is-pendiente' : '') + '" data-set-inq-status="' + item.id + ':pendiente">Pendiente</button>' +
            '      <button type="button" class="status-pill' + (st === 'repasar' ? ' is-repasar' : '') + '" data-set-inq-status="' + item.id + ':repasar">Repasar</button>' +
            '      <button type="button" class="status-pill' + (st === 'dominada' ? ' is-dominada' : '') + '" data-set-inq-status="' + item.id + ':dominada">Dominada</button>' +
            '    </div>' +
            '  </div>' +
            '  <h3 class="inquiry-question">' + escapeHtml(item.question) + '</h3>' +
            '  <p class="inquiry-why"><strong>Por qué importa:</strong> ' + escapeHtml(item.whyItMatters) + '</p>' +
            '  <div class="accordion-group">' +
            '    <button type="button" class="accordion-btn" data-toggle-keys="' + item.id + '">' +
            '      <span>Ver puntos clave y pistas para autoevaluarte</span>' +
            '      <span>' + (keysOpen ? 'Ocultar ▲' : 'Mostrar ▼') + '</span>' +
            '    </button>' +
            (keysOpen
              ? '<div class="accordion-body">' +
                '  <ul style="margin:0;padding-left:1.2rem;">' + keyPointsHtml + '</ul>' +
                '  <div class="followup-box"><strong>Repregunta para profundizar:</strong> ' + escapeHtml(item.followUp) + '</div>' +
                '</div>'
              : '') +
            '    <button type="button" class="accordion-btn" data-toggle-note="' + item.id + '">' +
            '      <span>Mis notas / respuesta propia</span>' +
            '      <span>' + (noteOpen ? 'Cerrar ▲' : (savedNote.trim() ? 'Editar nota ▼' : 'Escribir ▼')) + '</span>' +
            '    </button>' +
            (noteOpen
              ? '<div class="accordion-body">' +
                '  <textarea class="note-textarea" data-inq-note="' + item.id + '" placeholder="Escribí tu propia explicación o ejemplo...">' + escapeHtml(savedNote) + '</textarea>' +
                '  <div style="font-size:0.76rem;color:var(--ink-muted);margin-top:0.35rem;">Se guarda automáticamente en este navegador.</div>' +
                '</div>'
              : '') +
            '  </div>' +
            '</article>'
          );
        }).join('');

    return (
      '<div class="page-header">' +
      '  <div>' +
      '    <h1>Preguntas de Indagación Profunda</h1>' +
      '    <p>Intentá responder primero con tus palabras antes de abrir las pistas. Marcá cuáles dominás y entrená en voz alta.</p>' +
      '  </div>' +
      '  <button type="button" class="btn btn-primary" id="btn-oral-mode">Modo Oral (Pregunta al azar)</button>' +
      '</div>' +

      '<section class="panel" style="margin-bottom:1.1rem;">' +
      '  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:0.75rem;margin-bottom:0.5rem;font-size:0.88rem;">' +
      '    <span>Progreso de dominio: <strong>' + mastered + ' / ' + all.length + ' dominadas</strong> · <strong>' + review + '</strong> para repasar</span>' +
      '    <span>Mostrando <strong>' + filtered.length + '</strong> pregunta(s)</span>' +
      '  </div>' +
      '  <div class="progress-track" style="margin-bottom:0;"><div class="progress-fill" style="width:' + masteredPct + '%;background:var(--success);"></div></div>' +
      '</section>' +

      '<section class="inquiry-controls">' +
      '  <input type="search" class="search-input" id="inp-inq-search" value="' + escapeHtml(runtime.inquiry.search) + '" placeholder="Buscar por palabra clave (ej. entropía, box, verificación, slicing, spec)...">' +
      '  <div class="chip-group">' + unitChips + '</div>' +
      '  <div class="chip-group">' + typeChips + '</div>' +
      '  <div class="chip-group">' + statusChips + '</div>' +
      '</section>' +

      '<div class="inquiry-grid">' + cardsHtml + '</div>'
    );
  }

  function openOralModal(item) {
    if (!item) return;
    runtime.oralItem = item;
    runtime.oralRevealed = false;
    renderOralModalContent();
  }

  function renderOralModalContent() {
    var item = runtime.oralItem;
    if (!item) return;
    var st = state.inquiryStatus[item.id] || 'pendiente';
    var keyPointsHtml = item.keyPoints.map(function (kp) {
      return '<li>' + escapeHtml(kp) + '</li>';
    }).join('');

    openModal(
      '<div class="modal-head">' +
      '  <div>' +
      '    <div style="display:flex;gap:0.4rem;margin-bottom:0.45rem;">' +
      '      <span class="badge ' + unitBadgeClass(item.unit) + '">' + escapeHtml(unitLabel(item.unit)) + '</span>' +
      '      <span class="badge">' + escapeHtml(inquiryTypeLabel(item.type)) + '</span>' +
      '    </div>' +
      '    <h2>Simulacro Oral</h2>' +
      '  </div>' +
      '  <button type="button" class="btn btn-ghost btn-sm" data-close-modal>Cerrar ✕</button>' +
      '</div>' +
      '<p style="font-size:1.12rem;font-weight:700;margin:0 0 0.5rem;">' + escapeHtml(item.question) + '</p>' +
      '<p style="font-size:0.88rem;color:var(--ink-secondary);margin:0 0 1.1rem;"><strong>Qué evalúa:</strong> ' + escapeHtml(item.whyItMatters) + '</p>' +
      (!runtime.oralRevealed
        ? '<button type="button" class="btn btn-primary" id="btn-oral-reveal">Revelar puntos clave y repregunta</button>'
        : '<div class="accordion-body" style="margin-bottom:1rem;">' +
          '  <ul style="margin:0;padding-left:1.2rem;">' + keyPointsHtml + '</ul>' +
          '  <div class="followup-box"><strong>Repregunta:</strong> ' + escapeHtml(item.followUp) + '</div>' +
          '</div>') +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;margin-top:1.15rem;padding-top:1rem;border-top:1px solid var(--border);">' +
      '  <div class="status-pills">' +
      '    <button type="button" class="status-pill' + (st === 'pendiente' ? ' is-pendiente' : '') + '" data-oral-status="pendiente">Pendiente</button>' +
      '    <button type="button" class="status-pill' + (st === 'repasar' ? ' is-repasar' : '') + '" data-oral-status="repasar">Repasar</button>' +
      '    <button type="button" class="status-pill' + (st === 'dominada' ? ' is-dominada' : '') + '" data-oral-status="dominada">Dominada</button>' +
      '  </div>' +
      '  <button type="button" class="btn btn-secondary btn-sm" id="btn-oral-next">Otra pregunta al azar →</button>' +
      '</div>'
    );

    var revealBtn = document.getElementById('btn-oral-reveal');
    if (revealBtn) {
      revealBtn.addEventListener('click', function () {
        runtime.oralRevealed = true;
        renderOralModalContent();
      });
    }
    var nextBtn = document.getElementById('btn-oral-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', pickRandomOralQuestion);
    }
    var statusBtns = document.querySelectorAll('[data-oral-status]');
    for (var i = 0; i < statusBtns.length; i++) {
      statusBtns[i].addEventListener('click', function (ev) {
        var newSt = ev.currentTarget.getAttribute('data-oral-status');
        state.inquiryStatus[item.id] = newSt;
        saveState();
        renderOralModalContent();
        if (runtime.route === 'inquiry') render();
      });
    }
  }

  function pickRandomOralQuestion() {
    var pool = getFilteredInquiry();
    if (pool.length === 0) pool = getInquiryPool();
    if (pool.length === 0) return;
    var candidates = pool.filter(function (x) {
      return !runtime.oralItem || pool.length === 1 || x.id !== runtime.oralItem.id;
    });
    var chosen = candidates[Math.floor(Math.random() * candidates.length)];
    openOralModal(chosen);
  }

  // =========================================================================
  // 11. Glossary Modal
  // =========================================================================
  function openGlossaryModal() {
    renderGlossaryModal();
  }

  function renderGlossaryModal() {
    var list = getGlossaryPool();
    var q = runtime.glossary.search.trim().toLowerCase();
    var uFilter = runtime.glossary.unitFilter;

    var filtered = list.filter(function (g) {
      if (uFilter !== 'all' && String(g.unit) !== String(uFilter)) return false;
      if (q) {
        var text = (g.term + ' ' + g.definition).toLowerCase();
        if (text.indexOf(q) === -1) return false;
      }
      return true;
    });

    var unitChips = ['all', 1, 2, 3, 4, 5, 6].map(function (u) {
      var label = u === 'all' ? 'Todas' : 'U' + u;
      return '<button type="button" class="chip' + (String(uFilter) === String(u) ? ' is-active' : '') + '" data-glos-unit="' + u + '">' + label + '</button>';
    }).join('');

    var itemsHtml = filtered.length === 0
      ? '<div class="empty-state">No se encontraron términos.</div>'
      : filtered.map(function (g) {
          return (
            '<div class="glossary-item">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">' +
            '    <strong>' + escapeHtml(g.term) + '</strong>' +
            '    <span class="badge ' + unitBadgeClass(g.unit) + '">U' + g.unit + '</span>' +
            '  </div>' +
            '  <div style="font-size:0.88rem;color:var(--ink-secondary);">' + escapeHtml(g.definition) + '</div>' +
            '</div>'
          );
        }).join('');

    openModal(
      '<div class="modal-head">' +
      '  <div><h2>Glosario de Análisis y Diseño A</h2><p style="margin:0.2rem 0 0;font-size:0.86rem;color:var(--ink-secondary);">' + list.length + ' conceptos esenciales del apunte.</p></div>' +
      '  <button type="button" class="btn btn-ghost btn-sm" data-close-modal>Cerrar ✕</button>' +
      '</div>' +
      '<input type="search" class="search-input" id="inp-glos-search" value="' + escapeHtml(runtime.glossary.search) + '" placeholder="Buscar término o definición..." style="margin-bottom:0.75rem;">' +
      '<div class="chip-group">' + unitChips + '</div>' +
      '<div class="glossary-list">' + itemsHtml + '</div>'
    );

    var inp = document.getElementById('inp-glos-search');
    if (inp) {
      inp.focus();
      inp.setSelectionRange(inp.value.length, inp.value.length);
      inp.addEventListener('input', function (ev) {
        runtime.glossary.search = ev.target.value;
        renderGlossaryModal();
      });
    }
    var chips = document.querySelectorAll('[data-glos-unit]');
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener('click', function (ev) {
        runtime.glossary.unitFilter = ev.currentTarget.getAttribute('data-glos-unit');
        renderGlossaryModal();
      });
    }
  }

  // =========================================================================
  // 11B. Guided Journey Renderer & Events
  // =========================================================================
  function unmountJourneyLabs() {
    if (global.ADS_JOURNEY_LABS && typeof global.ADS_JOURNEY_LABS.unmountLabs === 'function') {
      global.ADS_JOURNEY_LABS.unmountLabs();
    }
  }

  function unmountPractice() {
    if (global.ADS_PRACTICE && typeof global.ADS_PRACTICE.unmount === 'function') {
      global.ADS_PRACTICE.unmount();
    }
  }

  function renderJourney() {
    var chapters = getJourneyPool();
    if (chapters.length === 0) {
      return '<div class="empty-state">No hay capítulos cargados para el recorrido guiado.</div>';
    }
    var idx = Math.max(0, Math.min(chapters.length - 1, runtime.journey.chapterIndex || 0));
    runtime.journey.chapterIndex = idx;
    var ch = chapters[idx];

    var doneMap = {};
    state.completedChapters.forEach(function (id) { doneMap[id] = true; });
    var completedCount = chapters.filter(function (c) { return !!doneMap[c.id]; }).length;

    var stepperHtml = chapters.map(function (item, cIdx) {
      var cls = 'journey-step-btn';
      if (cIdx === idx) cls += ' is-active';
      if (doneMap[item.id]) cls += ' is-done';
      return (
        '<button type="button" class="' + cls + '" data-journey-step="' + cIdx + '">' +
        '  <span class="journey-step-num">' + (doneMap[item.id] ? '✓ ' : '') + 'Cap. ' + item.number + ' · U' + item.unit + '</span>' +
        '  <span class="journey-step-title">' + escapeHtml(item.title) + '</span>' +
        '</button>'
      );
    }).join('');

    var conceptsHtml = ch.concepts.map(function (c) {
      return (
        '<div class="journey-concept-card">' +
        '  <h3>' + escapeHtml(c.title) + '</h3>' +
        '  <p>' + escapeHtml(c.text) + '</p>' +
        '</div>'
      );
    }).join('');

    var labHtml = global.ADS_JOURNEY_LABS
      ? global.ADS_JOURNEY_LABS.renderLab(ch.labId)
      : '<div class="empty-state">Laboratorio no disponible.</div>';

    var qc = ch.quickCheck;
    var chosenIdx = Object.prototype.hasOwnProperty.call(runtime.journey.checkSelections, ch.id)
      ? runtime.journey.checkSelections[ch.id]
      : null;
    var letters = ['A', 'B', 'C', 'D'];
    var qcOptsHtml = qc.options.map(function (opt, oIdx) {
      var cls = 'option-btn';
      if (chosenIdx !== null) {
        if (oIdx === qc.correctIndex) cls += ' is-selected';
      }
      var extraStyle = '';
      if (chosenIdx !== null && oIdx === chosenIdx && oIdx !== qc.correctIndex) {
        extraStyle = ' style="border-color:var(--danger);background:var(--danger-soft);"';
      } else if (chosenIdx !== null && oIdx === qc.correctIndex) {
        extraStyle = ' style="border-color:var(--success);background:var(--success-soft);"';
      }
      return (
        '<button type="button" class="' + cls + '" data-journey-qc="' + oIdx + '"' + extraStyle + '>' +
        '  <span class="option-letter">' + letters[oIdx] + '</span>' +
        '  <span>' + escapeHtml(opt) + '</span>' +
        '</button>'
      );
    }).join('');

    var qcFeedbackHtml = '';
    if (chosenIdx !== null) {
      var isOk = chosenIdx === qc.correctIndex;
      qcFeedbackHtml =
        '<div class="explanation-box" style="background:' + (isOk ? 'var(--success-soft)' : 'var(--warning-soft)') + ';">' +
        '  <strong>' + (isOk ? '✓ ¡Correcto!' : 'Revisá ese punto:') + '</strong> ' + escapeHtml(qc.feedback) +
        '</div>';
    }

    var isDone = !!doneMap[ch.id];

    return (
      '<div class="page-header">' +
      '  <div>' +
      '    <h1>Aprender desde cero · Recorrido Guiado</h1>' +
      '    <p>Un camino paso a paso desde la Teoría General de Sistemas (U1) hasta Spec-Driven Development con IA (U6) con animaciones interactivas.</p>' +
      '  </div>' +
      '  <span class="badge badge-success" style="font-size:0.86rem;padding:0.4rem 0.85rem;">Progreso: ' + completedCount + ' / ' + chapters.length + ' capítulos</span>' +
      '</div>' +

      '<div class="journey-stepper" role="navigation" aria-label="Capítulos del recorrido">' + stepperHtml + '</div>' +

      '<section class="journey-hero">' +
      '  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;">' +
      '    <span class="badge ' + unitBadgeClass(ch.unit) + '">' + escapeHtml(ch.badge) + '</span>' +
      '    <button type="button" class="btn ' + (isDone ? 'btn-secondary' : 'btn-ghost') + ' btn-sm" id="btn-toggle-ch-done">' +
             (isDone ? '✓ Capítulo completado' : 'Marcar como completado') + '</button>' +
      '  </div>' +
      '  <h1>' + escapeHtml(ch.title) + '</h1>' +
      '  <p style="margin:0 0 0.75rem;color:var(--ink-secondary);font-weight:600;">' + escapeHtml(ch.subtitle) + '</p>' +
      '  <p class="journey-story">' + escapeHtml(ch.storyIntro) + '</p>' +
      '  <div class="journey-concepts-grid">' + conceptsHtml + '</div>' +
      '</section>' +

      '<section class="journey-lab-card">' +
      '  <div class="journey-lab-head">' +
      '    <h2>' + escapeHtml(ch.labTitle) + '</h2>' +
      '    <p>' + escapeHtml(ch.labHint) + '</p>' +
      '  </div>' +
      '  <div id="journey-lab-container">' + labHtml + '</div>' +
      '</section>' +

      '<section class="journey-check-card">' +
      '  <span class="badge badge-primary" style="margin-bottom:0.5rem;">Micro-chequeo de comprensión</span>' +
      '  <h3 style="margin:0 0 0.9rem;font-size:1.05rem;">' + escapeHtml(qc.prompt) + '</h3>' +
      '  <div class="options-list">' + qcOptsHtml + '</div>' +
      qcFeedbackHtml +
      '</section>' +

      '<div class="journey-footer-nav">' +
      '  <button type="button" class="btn btn-secondary" id="btn-journey-prev"' + (idx === 0 ? ' disabled' : '') + '>← Capítulo anterior</button>' +
      '  <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">' +
      '    <a href="#maps?unit=' + ch.unit + '" class="btn btn-ghost btn-sm">Ver mapa de Unidad ' + ch.unit + '</a>' +
      '    <a href="#quiz?unit=' + ch.unit + '" class="btn btn-ghost btn-sm">Examen de Unidad ' + ch.unit + '</a>' +
      '  </div>' +
      (idx < chapters.length - 1
        ? '<button type="button" class="btn btn-primary" id="btn-journey-next">Siguiente capítulo →</button>'
        : '<a href="#quiz" class="btn btn-primary">Ir al Simulacro Final →</a>') +
      '</div>'
    );
  }

  function bindJourneyEvents(main) {
    var chapters = getJourneyPool();
    var ch = chapters[runtime.journey.chapterIndex];
    if (!ch) return;

    var labContainer = document.getElementById('journey-lab-container');
    if (labContainer && global.ADS_JOURNEY_LABS) {
      global.ADS_JOURNEY_LABS.mountLab(ch.labId, labContainer);
      fitSvgTextsToBoxes(labContainer);
    }

    var stepBtns = main.querySelectorAll('[data-journey-step]');
    for (var i = 0; i < stepBtns.length; i++) {
      stepBtns[i].addEventListener('click', function (ev) {
        runtime.journey.chapterIndex = Number(ev.currentTarget.getAttribute('data-journey-step'));
        render();
        if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var qcBtns = main.querySelectorAll('[data-journey-qc]');
    for (var j = 0; j < qcBtns.length; j++) {
      qcBtns[j].addEventListener('click', function (ev) {
        var optIdx = Number(ev.currentTarget.getAttribute('data-journey-qc'));
        runtime.journey.checkSelections[ch.id] = optIdx;
        if (optIdx === ch.quickCheck.correctIndex && state.completedChapters.indexOf(ch.id) === -1) {
          state.completedChapters.push(ch.id);
          saveState();
        }
        render();
      });
    }

    var toggleDone = document.getElementById('btn-toggle-ch-done');
    if (toggleDone) {
      toggleDone.addEventListener('click', function () {
        var pos = state.completedChapters.indexOf(ch.id);
        if (pos === -1) {
          state.completedChapters.push(ch.id);
          showToast('Capítulo marcado como completado');
        } else {
          state.completedChapters.splice(pos, 1);
        }
        saveState();
        render();
      });
    }

    var prevBtn = document.getElementById('btn-journey-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (runtime.journey.chapterIndex > 0) {
          runtime.journey.chapterIndex -= 1;
          render();
          if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    var nextBtn = document.getElementById('btn-journey-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (runtime.journey.chapterIndex < chapters.length - 1) {
          runtime.journey.chapterIndex += 1;
          render();
          if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  // =========================================================================
  // 12. Router & Event Binding
  // =========================================================================
  function parseHash() {
    if (typeof window === 'undefined') return { route: 'home', params: {} };
    var raw = (window.location.hash || '#home').replace(/^#/, '');
    var parts = raw.split('?');
    var route = parts[0] || 'home';
    if (['home', 'journey', 'quiz', 'maps', 'inquiry', 'practice'].indexOf(route) === -1) route = 'home';

    var params = {};
    if (parts[1]) {
      parts[1].split('&').forEach(function (pair) {
        var kv = pair.split('=');
        if (kv[0]) params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
      });
    }
    return { route: route, params: params };
  }

  function applyHashRoute() {
    var parsed = parseHash();
    if (runtime.route === 'quiz' && parsed.route !== 'quiz') {
      stopQuizTimer();
    }
    if (runtime.route === 'journey' && parsed.route !== 'journey') {
      unmountJourneyLabs();
    }
    if (runtime.route === 'practice' && parsed.route !== 'practice') {
      unmountPractice();
    }
    runtime.route = parsed.route;

    if (parsed.route === 'practice' && parsed.params.tool) {
      var validPracticeTools = (global.ADS_PRACTICE && global.ADS_PRACTICE.validTools) || ['flashcards', 'bugs', 'interview', 'duels', 'cases'];
      if (validPracticeTools.indexOf(parsed.params.tool) !== -1) {
        runtime.practice.tool = parsed.params.tool;
      }
    }

    if (parsed.route === 'journey') {
      var chapters = getJourneyPool();
      if (parsed.params.chapter) {
        var cNum = Number(parsed.params.chapter);
        if (cNum >= 1 && cNum <= chapters.length) {
          runtime.journey.chapterIndex = cNum - 1;
        }
      } else if (parsed.params.unit) {
        var uNum = Number(parsed.params.unit);
        for (var ci = 0; ci < chapters.length; ci++) {
          if (chapters[ci].unit === uNum) {
            runtime.journey.chapterIndex = ci;
            break;
          }
        }
      }
    }

    if (parsed.route === 'quiz' && parsed.params.unit) {
      var u = Number(parsed.params.unit);
      if (u >= 1 && u <= 6) {
        runtime.quiz.phase = 'setup';
        runtime.quiz.setup.mode = 'unidad';
        runtime.quiz.setup.unit = u;
      }
    }

    if (parsed.route === 'maps') {
      if (parsed.params.id) {
        selectMap(parsed.params.id);
      } else if (parsed.params.unit) {
        var mUnit = parsed.params.unit === 'integradora' ? 'integradora' : Number(parsed.params.unit);
        runtime.maps.unitFilter = mUnit;
        var list = getFilteredMaps();
        if (list.length > 0) selectMap(list[0].id);
      }
    }

    if (parsed.route === 'inquiry' && parsed.params.unit) {
      runtime.inquiry.unitFilter = parsed.params.unit === 'integradora' ? 'integradora' : Number(parsed.params.unit) || 'all';
    }

    render();
  }

  function updateNavActiveState() {
    if (typeof document === 'undefined') return;
    var links = document.querySelectorAll('.nav-link[data-nav]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav') === runtime.route) {
        links[i].classList.add('is-active');
      } else {
        links[i].classList.remove('is-active');
      }
    }
  }

  function bindCurrentViewEvents() {
    if (typeof document === 'undefined') return;
    var main = document.getElementById('app-main');
    if (!main) return;

    if (runtime.route === 'journey') {
      bindJourneyEvents(main);
    } else if (runtime.route === 'quiz') {
      bindQuizEvents(main);
    } else if (runtime.route === 'maps') {
      bindMapsEvents(main);
    } else if (runtime.route === 'inquiry') {
      bindInquiryEvents(main);
    } else if (runtime.route === 'practice' && global.ADS_PRACTICE) {
      global.ADS_PRACTICE.mount(main, runtime.practice.tool);
    }
  }

  function bindQuizEvents(main) {
    var modeBtns = main.querySelectorAll('[data-quiz-mode]');
    for (var i = 0; i < modeBtns.length; i++) {
      modeBtns[i].addEventListener('click', function (ev) {
        runtime.quiz.setup.mode = ev.currentTarget.getAttribute('data-quiz-mode');
        render();
      });
    }
    var countBtns = main.querySelectorAll('[data-quiz-count]');
    for (var j = 0; j < countBtns.length; j++) {
      countBtns[j].addEventListener('click', function (ev) {
        runtime.quiz.setup.count = Number(ev.currentTarget.getAttribute('data-quiz-count'));
        render();
      });
    }
    var unitBtns = main.querySelectorAll('[data-quiz-unit]');
    for (var k = 0; k < unitBtns.length; k++) {
      unitBtns[k].addEventListener('click', function (ev) {
        runtime.quiz.setup.unit = Number(ev.currentTarget.getAttribute('data-quiz-unit'));
        render();
      });
    }

    var chkShuffle = document.getElementById('chk-quiz-shuffle');
    if (chkShuffle) {
      chkShuffle.addEventListener('change', function (ev) {
        runtime.quiz.setup.shuffle = !!ev.target.checked;
      });
    }
    var chkTimed = document.getElementById('chk-quiz-timed');
    if (chkTimed) {
      chkTimed.addEventListener('change', function (ev) {
        runtime.quiz.setup.timed = !!ev.target.checked;
      });
    }

    var startBtn = document.getElementById('btn-start-quiz');
    if (startBtn) {
      startBtn.addEventListener('click', function () {
        startQuizSession();
      });
    }

    var clearBtn = document.getElementById('btn-clear-quiz-stats');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        state.quizHistory = [];
        state.wrongQuestionIds = [];
        saveState();
        showToast('Historial de exámenes borrado');
        render();
      });
    }

    // Active quiz controls
    var optBtns = main.querySelectorAll('[data-select-opt]');
    for (var o = 0; o < optBtns.length; o++) {
      optBtns[o].addEventListener('click', function (ev) {
        var idx = Number(ev.currentTarget.getAttribute('data-select-opt'));
        var s = runtime.quiz.session;
        if (!s) return;
        s.questions[s.currentIndex].selectedIndex = idx;
        render();
      });
    }

    var jumpBtns = main.querySelectorAll('[data-jump-q]');
    for (var p = 0; p < jumpBtns.length; p++) {
      jumpBtns[p].addEventListener('click', function (ev) {
        var targetIdx = Number(ev.currentTarget.getAttribute('data-jump-q'));
        if (runtime.quiz.session) {
          runtime.quiz.session.currentIndex = targetIdx;
          render();
        }
      });
    }

    var prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var s = runtime.quiz.session;
        if (s && s.currentIndex > 0) {
          s.currentIndex -= 1;
          render();
        }
      });
    }
    var nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var s = runtime.quiz.session;
        if (s && s.currentIndex < s.questions.length - 1) {
          s.currentIndex += 1;
          render();
        }
      });
    }

    var flagBtn = document.getElementById('btn-flag-q');
    if (flagBtn) {
      flagBtn.addEventListener('click', function () {
        var s = runtime.quiz.session;
        if (!s) return;
        s.questions[s.currentIndex].flagged = !s.questions[s.currentIndex].flagged;
        render();
      });
    }

    var abortBtn = document.getElementById('btn-abort-quiz');
    if (abortBtn) {
      abortBtn.addEventListener('click', function () {
        stopQuizTimer();
        runtime.quiz.phase = 'setup';
        runtime.quiz.session = null;
        render();
      });
    }

    var submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
      submitBtn.addEventListener('click', function () {
        var s = runtime.quiz.session;
        if (!s) return;
        var unanswered = s.questions.filter(function (q) { return q.selectedIndex === null; }).length;
        if (unanswered > 0) {
          openModal(
            '<div class="modal-head">' +
            '  <h2>¿Entregar examen ahora?</h2>' +
            '  <button type="button" class="btn btn-ghost btn-sm" data-close-modal>Volver</button>' +
            '</div>' +
            '<p style="margin:0 0 1.2rem;color:var(--ink-secondary);">Todavía te quedan <strong>' + unanswered + '</strong> pregunta(s) sin responder (contarán como incorrectas).</p>' +
            '<div style="display:flex;justify-content:flex-end;gap:0.6rem;">' +
            '  <button type="button" class="btn btn-secondary" data-close-modal>Seguir respondiendo</button>' +
            '  <button type="button" class="btn btn-primary" id="btn-confirm-submit">Sí, entregar y corregir</button>' +
            '</div>'
          );
          var confirmBtn = document.getElementById('btn-confirm-submit');
          if (confirmBtn) confirmBtn.addEventListener('click', evaluateAndSubmitQuiz);
        } else {
          evaluateAndSubmitQuiz();
        }
      });
    }

    // Review controls
    var revFilters = main.querySelectorAll('[data-review-filter]');
    for (var rf = 0; rf < revFilters.length; rf++) {
      revFilters[rf].addEventListener('click', function (ev) {
        runtime.quiz.reviewFilter = ev.currentTarget.getAttribute('data-review-filter');
        render();
      });
    }

    var retryBtn = document.getElementById('btn-retry-wrong');
    if (retryBtn) {
      retryBtn.addEventListener('click', function () {
        var s = runtime.quiz.session;
        if (!s) return;
        var wrongIds = s.questions.filter(function (q) { return !q.isRight; }).map(function (q) { return q.id; });
        startQuizSession({
          mode: 'custom_retry',
          questionIds: wrongIds,
          shuffle: runtime.quiz.setup.shuffle,
          timed: runtime.quiz.setup.timed
        });
      });
    }

    var newQuizBtn = document.getElementById('btn-new-quiz');
    if (newQuizBtn) {
      newQuizBtn.addEventListener('click', function () {
        runtime.quiz.phase = 'setup';
        runtime.quiz.session = null;
        render();
      });
    }
  }

  function bindMapsEvents(main) {
    var unitBtns = main.querySelectorAll('[data-map-unit]');
    for (var i = 0; i < unitBtns.length; i++) {
      unitBtns[i].addEventListener('click', function (ev) {
        var raw = ev.currentTarget.getAttribute('data-map-unit');
        runtime.maps.unitFilter = (raw === 'all' || raw === 'integradora') ? raw : Number(raw);
        var filtered = getFilteredMaps();
        if (filtered.length > 0) selectMap(filtered[0].id);
        render();
      });
    }

    var selectBtns = main.querySelectorAll('[data-map-select]');
    for (var j = 0; j < selectBtns.length; j++) {
      selectBtns[j].addEventListener('click', function (ev) {
        selectMap(ev.currentTarget.getAttribute('data-map-select'));
        render();
      });
    }

    var zoomIn = document.getElementById('btn-zoom-in');
    var zoomOut = document.getElementById('btn-zoom-out');
    var zoomReset = document.getElementById('btn-zoom-reset');
    var fullscreenBtn = document.getElementById('btn-map-fullscreen');
    if (zoomIn) {
      zoomIn.addEventListener('click', function () {
        runtime.maps.zoom = Math.min(220, runtime.maps.zoom + 20);
        render();
      });
    }
    if (zoomOut) {
      zoomOut.addEventListener('click', function () {
        runtime.maps.zoom = Math.max(80, runtime.maps.zoom - 20);
        render();
      });
    }
    if (zoomReset) {
      zoomReset.addEventListener('click', function () {
        runtime.maps.zoom = 100;
        render();
      });
    }
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', openMapFullscreenModal);
    }

    var mainZoomWrap = document.getElementById('diagram-zoom-inner');
    fitSvgTextsToBoxes(mainZoomWrap);
    bindSvgNodesWithin(mainZoomWrap, render);

    var nodeChips = main.querySelectorAll('[data-select-node]');
    for (var nc = 0; nc < nodeChips.length; nc++) {
      nodeChips[nc].addEventListener('click', function (ev) {
        runtime.maps.activeNodeId = ev.currentTarget.getAttribute('data-select-node');
        render();
      });
    }

    var prevNode = document.getElementById('btn-node-prev');
    var nextNode = document.getElementById('btn-node-next');
    var barPrev = document.getElementById('btn-bar-prev');
    var barNext = document.getElementById('btn-bar-next');
    var scrollBtn = document.getElementById('btn-scroll-inspector');

    if (prevNode) prevNode.addEventListener('click', function () { stepActiveMapNode(-1); render(); });
    if (nextNode) nextNode.addEventListener('click', function () { stepActiveMapNode(1); render(); });
    if (barPrev) barPrev.addEventListener('click', function () { stepActiveMapNode(-1); render(); });
    if (barNext) barNext.addEventListener('click', function () { stepActiveMapNode(1); render(); });
    if (scrollBtn) {
      scrollBtn.addEventListener('click', function () {
        var insp = document.getElementById('map-inspector-card');
        if (insp && insp.scrollIntoView) {
          insp.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    highlightActiveSvgNode();
  }

  function bindInquiryEvents(main) {
    var searchInp = document.getElementById('inp-inq-search');
    if (searchInp) {
      searchInp.addEventListener('input', function (ev) {
        runtime.inquiry.search = ev.target.value;
        var caret = ev.target.selectionStart;
        render();
        var nextInp = document.getElementById('inp-inq-search');
        if (nextInp) {
          nextInp.focus();
          if (typeof caret === 'number') nextInp.setSelectionRange(caret, caret);
        }
      });
    }

    var unitBtns = main.querySelectorAll('[data-inq-unit]');
    for (var i = 0; i < unitBtns.length; i++) {
      unitBtns[i].addEventListener('click', function (ev) {
        var val = ev.currentTarget.getAttribute('data-inq-unit');
        runtime.inquiry.unitFilter = (val === 'all' || val === 'integradora') ? val : Number(val);
        render();
      });
    }

    var typeBtns = main.querySelectorAll('[data-inq-type]');
    for (var j = 0; j < typeBtns.length; j++) {
      typeBtns[j].addEventListener('click', function (ev) {
        runtime.inquiry.typeFilter = ev.currentTarget.getAttribute('data-inq-type');
        render();
      });
    }

    var stFilters = main.querySelectorAll('[data-inq-status]');
    for (var k = 0; k < stFilters.length; k++) {
      stFilters[k].addEventListener('click', function (ev) {
        runtime.inquiry.statusFilter = ev.currentTarget.getAttribute('data-inq-status');
        render();
      });
    }

    var statusPills = main.querySelectorAll('[data-set-inq-status]');
    for (var s = 0; s < statusPills.length; s++) {
      statusPills[s].addEventListener('click', function (ev) {
        var parts = ev.currentTarget.getAttribute('data-set-inq-status').split(':');
        state.inquiryStatus[parts[0]] = parts[1];
        saveState();
        render();
      });
    }

    var toggleKeys = main.querySelectorAll('[data-toggle-keys]');
    for (var tk = 0; tk < toggleKeys.length; tk++) {
      toggleKeys[tk].addEventListener('click', function (ev) {
        var id = ev.currentTarget.getAttribute('data-toggle-keys');
        runtime.inquiry.openKeys[id] = !runtime.inquiry.openKeys[id];
        render();
      });
    }

    var toggleNotes = main.querySelectorAll('[data-toggle-note]');
    for (var tn = 0; tn < toggleNotes.length; tn++) {
      toggleNotes[tn].addEventListener('click', function (ev) {
        var id = ev.currentTarget.getAttribute('data-toggle-note');
        runtime.inquiry.openNotes[id] = !runtime.inquiry.openNotes[id];
        render();
      });
    }

    var noteBoxes = main.querySelectorAll('[data-inq-note]');
    for (var nb = 0; nb < noteBoxes.length; nb++) {
      noteBoxes[nb].addEventListener('input', function (ev) {
        var id = ev.currentTarget.getAttribute('data-inq-note');
        state.inquiryNotes[id] = ev.target.value;
        saveState();
      });
      noteBoxes[nb].addEventListener('blur', function () {
        showToast('Nota guardada');
      });
    }

    var oralBtn = document.getElementById('btn-oral-mode');
    if (oralBtn) {
      oralBtn.addEventListener('click', pickRandomOralQuestion);
    }
  }

  // =========================================================================
  // 13. Theme Toggle & Global Keyboard Shortcuts
  // =========================================================================
  function getTheme() {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    safeSetItem(THEME_KEY, theme);
    var iconEl = document.getElementById('theme-icon');
    if (iconEl) {
      iconEl.innerHTML = theme === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  function render() {
    if (typeof document === 'undefined') return;
    unmountJourneyLabs();
    unmountPractice();
    updateNavActiveState();
    var main = document.getElementById('app-main');
    if (!main) return;

    if (runtime.route === 'maps') {
      main.classList.add('is-maps-wide');
    } else {
      main.classList.remove('is-maps-wide');
    }

    if (runtime.route === 'maps' || runtime.route === 'journey' || runtime.route === 'practice') {
      main.classList.add('is-wide');
    } else {
      main.classList.remove('is-wide');
    }

    if (runtime.route === 'home') {
      main.innerHTML = renderHome();
    } else if (runtime.route === 'journey') {
      main.innerHTML = renderJourney();
    } else if (runtime.route === 'quiz') {
      main.innerHTML = renderQuiz();
    } else if (runtime.route === 'maps') {
      main.innerHTML = renderMaps();
    } else if (runtime.route === 'inquiry') {
      main.innerHTML = renderInquiry();
    } else if (runtime.route === 'practice') {
      main.innerHTML = global.ADS_PRACTICE ? global.ADS_PRACTICE.render(runtime.practice.tool) : '';
    }

    bindCurrentViewEvents();
  }

  function init() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    applyTheme(getTheme());

    var themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
      });
    }

    var glossaryBtn = document.getElementById('btn-open-glossary');
    if (glossaryBtn) {
      glossaryBtn.addEventListener('click', openGlossaryModal);
    }

    window.addEventListener('hashchange', applyHashRoute);

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        closeModal();
        return;
      }

      var modalRoot = document.getElementById('modal-root');
      if (modalRoot && modalRoot.innerHTML.trim() !== '') return;

      var tag = ev.target && ev.target.tagName ? ev.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      if (runtime.route === 'quiz' && runtime.quiz.phase === 'active' && runtime.quiz.session) {
        var s = runtime.quiz.session;
        var q = s.questions[s.currentIndex];
        if (ev.key >= '1' && ev.key <= '4') {
          var optIdx = Number(ev.key) - 1;
          if (optIdx < q.options.length) {
            q.selectedIndex = optIdx;
            render();
          }
        } else if (ev.key === 'ArrowLeft' && s.currentIndex > 0) {
          s.currentIndex -= 1;
          render();
        } else if (ev.key === 'ArrowRight' && s.currentIndex < s.questions.length - 1) {
          s.currentIndex += 1;
          render();
        } else if (ev.key === 'f' || ev.key === 'F') {
          q.flagged = !q.flagged;
          render();
        }
      }
    });

    applyHashRoute();
  }

  // Export testable helpers cleanly without breaking browser execution
  global.ADS_APP = {
    escapeHtml: escapeHtml,
    formatTime: formatTime,
    buildBalancedSample: buildBalancedSample,
    prepareQuizQuestions: prepareQuizQuestions,
    safeGetItem: safeGetItem,
    safeSetItem: safeSetItem
  };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})(typeof window !== 'undefined' ? window : globalThis);
