(function (global) {
  'use strict';

  var PRACTICE_STORAGE_KEY = 'ads_practice_state_v1';
  var VALID_TOOLS = ['flashcards', 'bugs', 'interview', 'duels', 'cases'];
  var memoryFallback = {};

  function safeGet(key) {
    try {
      if (global.localStorage) {
        return global.localStorage.getItem(key);
      }
    } catch (e) {}
    return Object.prototype.hasOwnProperty.call(memoryFallback, key)
      ? memoryFallback[key]
      : null;
  }

  function safeSet(key, value) {
    memoryFallback[key] = String(value);
    try {
      if (global.localStorage) {
        global.localStorage.setItem(key, String(value));
      }
    } catch (e) {}
  }

  function esc(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function defaultState() {
    return {
      flashcards: { step: 0, cards: {} },
      bugs: {},
      interviews: {},
      duels: { answered: 0, correct: 0, streak: 0, bestStreak: 0 },
      cases: {}
    };
  }

  function loadState() {
    var base = defaultState();
    try {
      var raw = safeGet(PRACTICE_STORAGE_KEY);
      if (!raw) return base;
      var p = JSON.parse(raw);
      if (!p || typeof p !== 'object') return base;
      return {
        flashcards: p.flashcards && typeof p.flashcards === 'object'
          ? {
              step: Number(p.flashcards.step) || 0,
              cards: p.flashcards.cards && typeof p.flashcards.cards === 'object' ? p.flashcards.cards : {}
            }
          : base.flashcards,
        bugs: p.bugs && typeof p.bugs === 'object' ? p.bugs : {},
        interviews: p.interviews && typeof p.interviews === 'object' ? p.interviews : {},
        duels: p.duels && typeof p.duels === 'object'
          ? {
              answered: Number(p.duels.answered) || 0,
              correct: Number(p.duels.correct) || 0,
              streak: Number(p.duels.streak) || 0,
              bestStreak: Number(p.duels.bestStreak) || 0
            }
          : base.duels,
        cases: p.cases && typeof p.cases === 'object' ? p.cases : {}
      };
    } catch (e) {
      return base;
    }
  }

  var pState = loadState();

  function saveState() {
    try {
      safeSet(PRACTICE_STORAGE_KEY, JSON.stringify(pState));
    } catch (e) {}
  }

  function getData() {
    return global.ADS_PRACTICE_DATA || {};
  }

  function unitBadgeClass(unit) {
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

  // Runtime de sesión por módulo
  var ui = {
    tool: 'flashcards',
    fc: {
      unit: 'all',
      mode: 'smart', // 'smart' | 'difficult'
      currentId: null,
      flipped: false,
      showHint: false,
      showDeckList: false
    },
    bugs: {
      diagramId: 'bug-uc',
      selectedSpot: null,
      wrongOpt: null,
      hintSpot: null
    },
    interview: {
      caseId: 'int-ferreteria',
      dragPhraseId: null
    },
    duels: {
      mode: 'compare', // 'compare' | 'game'
      pairFilter: 'all',
      queue: [],
      qIndex: 0,
      pickedSide: null
    },
    cases: {
      caseId: 'case-vet'
    }
  };

  var docKeyHandler = null;

  function unmount() {
    if (docKeyHandler && typeof document !== 'undefined') {
      document.removeEventListener('keydown', docKeyHandler);
      docKeyHandler = null;
    }
  }

  // =========================================================================
  // 1. FLASHCARDS INTELIGENTES (SRS)
  // =========================================================================
  function getMergedFlashcards() {
    var data = getData();
    var glossary = Array.isArray(global.ADS_GLOSSARY) ? global.ADS_GLOSSARY : [];
    var extra = Array.isArray(data.extraFlashcards) ? data.extraFlashcards : [];
    var seen = {};
    var deck = [];

    glossary.forEach(function (g, idx) {
      var key = String(g.term || '').toLowerCase().trim();
      if (!key || seen[key]) return;
      seen[key] = true;
      deck.push({
        id: 'gl-' + idx,
        unit: g.unit || 1,
        term: g.term,
        hint: 'Concepto clave del glosario · Unidad ' + (g.unit || 1),
        definition: g.definition,
        example: ''
      });
    });

    extra.forEach(function (c) {
      var key = String(c.term || '').toLowerCase().trim();
      if (!key || seen[key]) return;
      seen[key] = true;
      deck.push(c);
    });

    return deck;
  }

  function getFilteredDeck(deck) {
    var byUnit = ui.fc.unit === 'all'
      ? deck
      : deck.filter(function (c) { return Number(c.unit) === Number(ui.fc.unit); });

    if (ui.fc.mode === 'difficult') {
      var diff = byUnit.filter(function (c) {
        var r = pState.flashcards.cards[c.id];
        return r && (r.lastRating === 'again' || r.lastRating === 'hard' || r.lapses > 0);
      });
      return diff.length > 0 ? diff : [];
    }
    return byUnit;
  }

  function pickNextCardId(filteredDeck, avoidId) {
    if (!filteredDeck.length) return null;
    var step = pState.flashcards.step;
    var cardsMap = pState.flashcards.cards;

    var scored = filteredDeck.map(function (c, origIdx) {
      var rec = cardsMap[c.id];
      var isNew = !rec;
      var box = rec ? rec.box : 0;
      var dueStep = rec ? rec.nextDueStep : 0;
      var isDue = isNew || dueStep <= step;
      return {
        id: c.id,
        isNew: isNew,
        isDue: isDue,
        box: box,
        dueStep: dueStep,
        reviews: rec ? rec.reviews : 0,
        avoidPenalty: c.id === avoidId && filteredDeck.length > 1 ? 1 : 0,
        origIdx: origIdx
      };
    });

    scored.sort(function (a, b) {
      if (a.avoidPenalty !== b.avoidPenalty) return a.avoidPenalty - b.avoidPenalty;
      if (a.isDue !== b.isDue) return a.isDue ? -1 : 1;
      if (a.isDue && b.isDue) {
        // Priorizar falladas/box bajo primero, luego nuevas, luego por atraso
        if (a.box !== b.box) return a.box - b.box;
        if (a.isNew !== b.isNew) return a.isNew ? 1 : -1;
        if (a.dueStep !== b.dueStep) return a.dueStep - b.dueStep;
        return a.origIdx - b.origIdx;
      }
      if (a.dueStep !== b.dueStep) return a.dueStep - b.dueStep;
      return a.box - b.box;
    });

    return scored[0].id;
  }

  function rateCard(cardId, rating) {
    pState.flashcards.step += 1;
    var step = pState.flashcards.step;
    var prev = pState.flashcards.cards[cardId] || {
      box: 0,
      nextDueStep: 0,
      reviews: 0,
      lapses: 0,
      lastRating: null
    };

    var box = Number(prev.box) || 0;
    var lapses = Number(prev.lapses) || 0;
    var nextDueStep = step;

    if (rating === 'again') {
      box = 0;
      lapses += 1;
      nextDueStep = step + 2;
    } else if (rating === 'hard') {
      box = Math.max(1, box);
      nextDueStep = step + 5;
    } else {
      box = Math.min(4, box + 1);
      var gaps = [4, 9, 18, 35, 70];
      nextDueStep = step + gaps[box];
    }

    pState.flashcards.cards[cardId] = {
      box: box,
      nextDueStep: nextDueStep,
      reviews: (Number(prev.reviews) || 0) + 1,
      lapses: lapses,
      lastRating: rating
    };
    saveState();
  }

  function boxLabel(rec) {
    if (!rec) return 'Nueva';
    if (rec.box === 0) return 'En refuerzo';
    if (rec.box === 1) return 'Aprendiendo';
    if (rec.box === 2) return 'Conocida';
    return 'Dominada';
  }

  function renderFlashcardsView() {
    var fullDeck = getMergedFlashcards();
    var unitDeck = ui.fc.unit === 'all'
      ? fullDeck
      : fullDeck.filter(function (c) { return Number(c.unit) === Number(ui.fc.unit); });
    var activeDeck = getFilteredDeck(fullDeck);

    var cardsMap = pState.flashcards.cards;
    var step = pState.flashcards.step;
    var dueCount = 0;
    var masteredCount = 0;
    var hardCount = 0;

    unitDeck.forEach(function (c) {
      var r = cardsMap[c.id];
      if (!r || r.nextDueStep <= step) dueCount += 1;
      if (r && r.box >= 3) masteredCount += 1;
      if (r && (r.lastRating === 'again' || r.lastRating === 'hard' || r.lapses > 0)) hardCount += 1;
    });

    if (activeDeck.length > 0) {
      var existsInActive = activeDeck.some(function (c) { return c.id === ui.fc.currentId; });
      if (!existsInActive) {
        ui.fc.currentId = pickNextCardId(activeDeck, null);
        ui.fc.flipped = false;
        ui.fc.showHint = false;
      }
    } else {
      ui.fc.currentId = null;
    }

    var currentCard = activeDeck.filter(function (c) { return c.id === ui.fc.currentId; })[0] || null;
    var curRec = currentCard ? cardsMap[currentCard.id] : null;
    var unitChips = ['all', 1, 2, 3, 4, 5, 6].map(function (u) {
      var act = String(ui.fc.unit) === String(u);
      return '<button type="button" class="chip' + (act ? ' is-active' : '') + '" data-fc-unit="' + u + '">' + (u === 'all' ? 'Todas' : 'U' + u) + '</button>';
    }).join('');

    var cardHtml = '';
    if (!currentCard) {
      cardHtml =
        '<div class="empty-state">' +
        '  <p style="margin:0 0 0.75rem;"><strong>Todavía no hay tarjetas marcadas como "Dudé" o "Ni idea" en este filtro.</strong></p>' +
        '  <button type="button" class="btn btn-primary btn-sm" id="btn-fc-mode-smart">Volver al mazo inteligente</button>' +
        '</div>';
    } else {
      var isDueNow = !curRec || curRec.nextDueStep <= step;
      cardHtml =
        '<div class="fc-stage">' +
        '  <div class="fc-card' + (ui.fc.flipped ? ' is-flipped' : '') + '">' +
        '    <div class="fc-card-meta">' +
        '      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">' +
        '        <span class="badge ' + unitBadgeClass(currentCard.unit) + '">Unidad ' + currentCard.unit + '</span>' +
        '        <span class="badge">' + esc(boxLabel(curRec)) + '</span>' +
        (curRec && curRec.lapses > 0 ? '<span class="badge badge-danger">Fallos: ' + curRec.lapses + '</span>' : '') +
        (!isDueNow ? '<span class="badge badge-success">¡Al día! Adelantando repaso</span>' : '') +
        '      </div>' +
        '      <span style="font-size:0.8rem;color:var(--ink-secondary);">Repasos: ' + (curRec ? curRec.reviews : 0) + '</span>' +
        '    </div>' +
        '    <h3 class="fc-term">' + esc(currentCard.term) + '</h3>' +
        (ui.fc.showHint && currentCard.hint
          ? '<div class="fc-hint-box"><strong>Pista:</strong> ' + esc(currentCard.hint) + '</div>'
          : '') +
        (ui.fc.flipped
          ? '<div class="fc-answer-block anim-pop">' +
            '  <p class="fc-answer-def">' + esc(currentCard.definition) + '</p>' +
            (currentCard.example
              ? '<div class="fc-answer-ex"><strong>Ejemplo:</strong> ' + esc(currentCard.example) + '</div>'
              : '') +
            '</div>'
          : '<p style="margin:0.35rem 0 0;color:var(--ink-secondary);font-size:0.9rem;">Intentá definirlo mentalmente o en voz alta y luego da vuelta la tarjeta.</p>') +
        '    <div class="fc-card-actions">' +
        '      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">' +
        '        <button type="button" class="btn btn-primary" id="btn-fc-flip">' + (ui.fc.flipped ? 'Ocultar respuesta' : 'Ver definición') + '</button>' +
        (!ui.fc.flipped && currentCard.hint
          ? '<button type="button" class="btn btn-ghost btn-sm" id="btn-fc-hint">' + (ui.fc.showHint ? 'Ocultar pista' : 'Ver pista') + '</button>'
          : '') +
        '      </div>' +
        '      <button type="button" class="btn btn-secondary btn-sm" id="btn-fc-skip">Saltar →</button>' +
        '    </div>' +
        (ui.fc.flipped
          ? '<div class="fc-rating-row">' +
            '  <button type="button" class="fc-rate-btn" data-rate="again"><strong>Ni idea</strong><small>Vuelve en 2 tarjetas</small></button>' +
            '  <button type="button" class="fc-rate-btn" data-rate="hard"><strong>Dudé</strong><small>Vuelve en 5 tarjetas</small></button>' +
            '  <button type="button" class="fc-rate-btn" data-rate="good"><strong>Lo sé</strong><small>Se espacia según dominio</small></button>' +
            '</div>' +
            '<div class="fc-kbd-tip">Atajos: <strong>Espacio</strong> voltea · <strong>1</strong> Ni idea · <strong>2</strong> Dudé · <strong>3</strong> Lo sé</div>'
          : '<div class="fc-kbd-tip">Atajo: apretá <strong>Espacio</strong> para ver la definición</div>') +
        '  </div>' +
        '</div>';
    }

    var deckOverviewHtml = '';
    if (ui.fc.showDeckList) {
      deckOverviewHtml =
        '<div class="fc-deck-list">' +
        unitDeck.map(function (c) {
          var r = cardsMap[c.id];
          var cls = r && r.box >= 3 ? 'badge-success' : (r && r.lastRating === 'again' ? 'badge-danger' : '');
          return (
            '<div class="fc-deck-item">' +
            '  <span><strong>' + esc(c.term) + '</strong></span>' +
            '  <span class="badge ' + cls + '">' + esc(boxLabel(r)) + '</span>' +
            '</div>'
          );
        }).join('') +
        '</div>';
    }

    return (
      '<section class="practice-panel">' +
      '  <div class="practice-panel-head">' +
      '    <div>' +
      '      <h2>Glosario Vivo · Flashcards con Repetición Espaciada</h2>' +
      '      <p>Repasá ' + fullDeck.length + ' conceptos clave (glosario U1–U6 + términos técnicos de examen). Las tarjetas donde dudás o fallás vuelven mucho más seguido.</p>' +
      '    </div>' +
      '    <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">' +
      '      <button type="button" class="btn btn-ghost btn-sm" id="btn-fc-toggle-list">' + (ui.fc.showDeckList ? 'Ocultar lista' : 'Ver estado del mazo') + '</button>' +
      '      <button type="button" class="btn btn-danger-ghost btn-sm" id="btn-fc-reset">Reiniciar mazo</button>' +
      '    </div>' +
      '  </div>' +

      '  <div class="fc-toolbar">' +
      '    <div class="chip-group">' + unitChips + '</div>' +
      '    <div class="chip-group">' +
      '      <button type="button" class="chip' + (ui.fc.mode === 'smart' ? ' is-active' : '') + '" data-fc-mode="smart">Mazo inteligente</button>' +
      '      <button type="button" class="chip' + (ui.fc.mode === 'difficult' ? ' is-active' : '') + '" data-fc-mode="difficult">Solo difíciles (' + hardCount + ')</button>' +
      '    </div>' +
      '  </div>' +

      '  <div class="fc-stats-row">' +
      '    <div class="fc-stat-box"><div class="fc-stat-val">' + unitDeck.length + '</div><div class="fc-stat-lbl">Tarjetas en filtro</div></div>' +
      '    <div class="fc-stat-box"><div class="fc-stat-val">' + dueCount + '</div><div class="fc-stat-lbl">Pendientes ahora</div></div>' +
      '    <div class="fc-stat-box"><div class="fc-stat-val">' + hardCount + '</div><div class="fc-stat-lbl">Para reforzar</div></div>' +
      '    <div class="fc-stat-box"><div class="fc-stat-val">' + masteredCount + '</div><div class="fc-stat-lbl">Dominadas (Nivel ≥ 3)</div></div>' +
      '  </div>' +

      cardHtml +
      deckOverviewHtml +
      '</section>'
    );
  }

  // =========================================================================
  // 2. CAZADOR DE ERRORES EN DIAGRAMAS
  // =========================================================================
  function getBugProgress(diag) {
    var rec = pState.bugs[diag.id];
    if (!rec || typeof rec !== 'object') {
      return { found: [], safe: [] };
    }
    return {
      found: Array.isArray(rec.found) ? rec.found : [],
      safe: Array.isArray(rec.safe) ? rec.safe : []
    };
  }

  function renderBugsView() {
    var diagrams = Array.isArray(getData().bugDiagrams) ? getData().bugDiagrams : [];
    var diag = diagrams.filter(function (d) { return d.id === ui.bugs.diagramId; })[0] || diagrams[0];
    if (!diag) return '<div class="empty-state">No hay diagramas cargados.</div>';
    ui.bugs.diagramId = diag.id;

    var prog = getBugProgress(diag);
    var chips = diagrams.map(function (d) {
      var dp = getBugProgress(d);
      var act = d.id === diag.id;
      return (
        '<button type="button" class="chip' + (act ? ' is-active' : '') + '" data-bug-diag="' + esc(d.id) + '">' +
        esc(d.kind) + ' (' + dp.found.length + '/' + d.errorCount + ')' +
        '</button>'
      );
    }).join('');

    var spot = ui.bugs.selectedSpot && diag.spots ? diag.spots[ui.bugs.selectedSpot] : null;
    var diagBodyHtml = '';
    if (!spot) {
      diagBodyHtml =
        '<div style="color:var(--ink-secondary);font-size:0.9rem;line-height:1.5;">' +
        '  <p style="margin:0 0 0.6rem;"><strong>¿Cómo se juega?</strong></p>' +
        '  <p style="margin:0 0 0.5rem;">1. Observá el diagrama buscando fallas de notación, dirección de flechas, cardinalidad o violaciones de Caja Negra.</p>' +
        '  <p style="margin:0;">2. Hacé clic sobre el elemento sospechoso: si tiene error, elegí la justificación correcta para cazarlo.</p>' +
        '</div>';
    } else if (!spot.isError) {
      diagBodyHtml =
        '<span class="badge badge-success" style="align-self:flex-start;">✓ Elemento válido</span>' +
        '<h3>' + esc(spot.label) + '</h3>' +
        '<p style="margin:0;color:var(--ink);font-size:0.92rem;line-height:1.5;">' + esc(spot.okMsg) + '</p>';
    } else if (prog.found.indexOf(ui.bugs.selectedSpot) !== -1) {
      diagBodyHtml =
        '<span class="badge badge-success" style="align-self:flex-start;">✓ Error cazado</span>' +
        '<h3>' + esc(spot.label) + '</h3>' +
        '<div class="lab-status" style="margin-top:0;border-left-color:var(--success);background:var(--success-soft);color:var(--ink);">' +
        '  <strong>Corrección:</strong> ' + esc(spot.fixExplanation) +
        '</div>';
    } else {
      var optsHtml = spot.options.map(function (optText, idx) {
        var isWrong = ui.bugs.wrongOpt === idx;
        return (
          '<button type="button" class="bug-opt-btn' + (isWrong ? ' is-wrong' : '') + '" data-bug-opt="' + idx + '">' +
          esc(optText) +
          '</button>'
        );
      }).join('');
      diagBodyHtml =
        '<span class="badge badge-danger" style="align-self:flex-start;">⚠ Posible error detectado</span>' +
        '<h3>' + esc(spot.label) + '</h3>' +
        '<p style="margin:0;font-weight:700;font-size:0.94rem;">' + esc(spot.question) + '</p>' +
        '<div style="display:flex;flex-direction:column;gap:0.5rem;">' + optsHtml + '</div>' +
        (ui.bugs.wrongOpt !== null
          ? '<p style="margin:0;color:var(--danger);font-size:0.84rem;font-weight:600;">Esa justificación no es la correcta. Probá otra opción.</p>'
          : '');
    }

    var allFound = prog.found.length >= diag.errorCount;

    return (
      '<section class="practice-panel">' +
      '  <div class="practice-panel-head">' +
      '    <div>' +
      '      <h2>Cazador de Errores en Diagramas</h2>' +
      '      <p>' + esc(diag.subtitle) + '</p>' +
      '    </div>' +
      '    <span class="badge ' + (allFound ? 'badge-success' : 'badge-primary') + '">' + prog.found.length + ' / ' + diag.errorCount + ' errores cazados</span>' +
      '  </div>' +

      '  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.65rem;margin-bottom:1rem;">' +
      '    <div class="chip-group">' + chips + '</div>' +
      '    <div style="display:flex;gap:0.45rem;">' +
      '      <button type="button" class="btn btn-secondary btn-sm" id="btn-bug-hint"' + (allFound ? ' disabled' : '') + '>Pista visual</button>' +
      '      <button type="button" class="btn btn-ghost btn-sm" id="btn-bug-reset">Reiniciar diagrama</button>' +
      '    </div>' +
      '  </div>' +

      '  <div class="bug-layout">' +
      '    <div>' +
      '      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.4rem;margin-bottom:0.5rem;">' +
      '        <strong>' + esc(diag.title) + '</strong>' +
      '        <span class="badge">' + esc(diag.domain) + '</span>' +
      '      </div>' +
      '      <div class="bug-svg-wrap" id="bug-svg-container">' + diag.svg + '</div>' +
      '    </div>' +
      '    <aside class="bug-diag-panel">' +
      diagBodyHtml +
      (allFound
        ? '<div class="lab-status" style="margin-top:0.25rem;border-left-color:var(--success);"><strong>¡Diagrama limpio!</strong> Encontraste todos los errores conceptuales. Probá otro tipo de diagrama arriba.</div>'
        : '') +
      '    </aside>' +
      '  </div>' +
      '</section>'
    );
  }

  // =========================================================================
  // 3. SIMULADOR DE ENTREVISTA CON EL CLIENTE
  // =========================================================================
  var INTERVIEW_BUCKETS = [
    { cat: 'rf', title: 'Requerimiento Funcional (RF)', badge: 'Qué hace' },
    { cat: 'rnf', title: 'Req. No Funcional (RNF)', badge: 'Calidad / Restricción' },
    { cat: 'rn', title: 'Regla de Negocio (RN)', badge: 'Política / Cálculo' },
    { cat: 'ruido', title: 'Ruido / Ambigüedad', badge: 'A indagar o descartar' }
  ];

  function getInterviewState(caseId) {
    var rec = pState.interviews[caseId];
    if (!rec || typeof rec !== 'object') {
      return { assigned: {}, checked: false, bestScore: 0 };
    }
    return {
      assigned: rec.assigned && typeof rec.assigned === 'object' ? rec.assigned : {},
      checked: !!rec.checked,
      bestScore: Number(rec.bestScore) || 0
    };
  }

  function renderInterviewView() {
    var cases = Array.isArray(getData().clientInterviews) ? getData().clientInterviews : [];
    var cur = cases.filter(function (c) { return c.id === ui.interview.caseId; })[0] || cases[0];
    if (!cur) return '<div class="empty-state">No hay entrevistas cargadas.</div>';
    ui.interview.caseId = cur.id;

    var cState = getInterviewState(cur.id);
    var assignedMap = cState.assigned;
    var assignedCount = 0;
    var rightCount = 0;

    cur.phrases.forEach(function (ph) {
      if (assignedMap[ph.id]) {
        assignedCount += 1;
        if (assignedMap[ph.id] === ph.category) rightCount += 1;
      }
    });

    var caseChips = cases.map(function (c) {
      var cs = getInterviewState(c.id);
      var countDone = Object.keys(cs.assigned).length;
      return (
        '<button type="button" class="chip' + (c.id === cur.id ? ' is-active' : '') + '" data-int-case="' + esc(c.id) + '">' +
        esc(c.title.split('·')[0].trim()) + ' (' + countDone + '/' + c.phrases.length + ')' +
        '</button>'
      );
    }).join('');

    var poolPhrases = cur.phrases.filter(function (ph) { return !assignedMap[ph.id]; });
    var poolHtml = poolPhrases.length === 0
      ? '<div class="lab-status" style="margin-top:0.5rem;">Todas las frases fueron ubicadas en categorías. Apretá <strong>Corregir clasificación</strong> abajo para validar tu análisis.</div>'
      : '<div class="int-pool">' +
        poolPhrases.map(function (ph) {
          return (
            '<div class="int-phrase-card" draggable="true" data-phrase-id="' + esc(ph.id) + '">' +
            '  <p>“' + esc(ph.text) + '”</p>' +
            '  <div class="int-qtags">' +
            '    <button type="button" class="int-qtag" data-assign-phrase="' + esc(ph.id) + '" data-assign-cat="rf">RF</button>' +
            '    <button type="button" class="int-qtag" data-assign-phrase="' + esc(ph.id) + '" data-assign-cat="rnf">RNF</button>' +
            '    <button type="button" class="int-qtag" data-assign-phrase="' + esc(ph.id) + '" data-assign-cat="rn">Regla Neg.</button>' +
            '    <button type="button" class="int-qtag" data-assign-phrase="' + esc(ph.id) + '" data-assign-cat="ruido">Ruido</button>' +
            '  </div>' +
            '</div>'
          );
        }).join('') +
        '</div>';

    var catNameByKey = { rf: 'RF', rnf: 'RNF', rn: 'Regla de Negocio', ruido: 'Ruido / Ambigüedad' };
    var bucketsHtml = INTERVIEW_BUCKETS.map(function (b) {
      var placed = cur.phrases.filter(function (ph) { return assignedMap[ph.id] === b.cat; });
      var cardsHtml = placed.length === 0
        ? '<span style="font-size:0.82rem;color:var(--ink-secondary);">Arrastrá frases aquí o usá los botones rápidos.</span>'
        : placed.map(function (ph) {
            var isRight = ph.category === b.cat;
            var statusCls = cState.checked ? (isRight ? ' is-right' : ' is-wrong') : '';
            return (
              '<div class="int-placed-card' + statusCls + '" draggable="true" data-phrase-id="' + esc(ph.id) + '">' +
              '  <div class="int-placed-top">' +
              '    <span>“' + esc(ph.text) + '”</span>' +
              '    <button type="button" class="int-remove-btn" data-unassign-phrase="' + esc(ph.id) + '" title="Quitar de esta categoría">×</button>' +
              '  </div>' +
              (cState.checked
                ? '<div class="int-placed-exp"><strong>' + (isRight ? '✓ Correcto' : '✕ Va en ' + catNameByKey[ph.category]) + ':</strong> ' + esc(ph.explanation) + '</div>'
                : '') +
              '</div>'
            );
          }).join('');

      return (
        '<div class="int-bucket" data-cat="' + b.cat + '">' +
        '  <div class="int-bucket-head">' +
        '    <strong class="int-bucket-title">' + esc(b.title) + '</strong>' +
        '    <span class="badge">' + esc(b.badge) + '</span>' +
        '  </div>' +
        cardsHtml +
        '</div>'
      );
    }).join('');

    return (
      '<section class="practice-panel">' +
      '  <div class="practice-panel-head">' +
      '    <div>' +
      '      <h2>Simulador de Entrevista con el Cliente</h2>' +
      '      <p>Leé la transcripción desordenada y clasificá cada frase arrastrándola (o con los botones rápidos) antes de especificar requisitos.</p>' +
      '    </div>' +
      '    <span class="badge badge-primary">' + assignedCount + ' / ' + cur.phrases.length + ' clasificadas</span>' +
      '  </div>' +

      '  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.65rem;margin-bottom:1rem;">' +
      '    <div class="chip-group">' + caseChips + '</div>' +
      '    <button type="button" class="btn btn-ghost btn-sm" id="btn-int-reset">Reiniciar entrevista</button>' +
      '  </div>' +

      '  <div class="int-transcript-card">' +
      '    <div class="int-transcript-meta">' +
      '      <span class="badge badge-violet">Transcripción en bruto</span>' +
      '      <strong>' + esc(cur.client) + '</strong>' +
      '      <span style="color:var(--ink-secondary);font-size:0.86rem;">(' + esc(cur.role) + ')</span>' +
      '    </div>' +
      '    <p class="int-transcript-body">' + esc(cur.transcript) + '</p>' +
      '  </div>' +

      '  <div class="int-pool-wrap">' +
      '    <strong style="font-size:0.92rem;">Frases extraídas para clasificar (' + poolPhrases.length + ' pendientes):</strong>' +
      poolHtml +
      '  </div>' +

      '  <div class="int-buckets-grid">' + bucketsHtml + '</div>' +

      '  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;margin-top:1.15rem;">' +
      '    <button type="button" class="btn btn-primary" id="btn-int-check"' + (assignedCount === 0 ? ' disabled' : '') + '>Corregir clasificación</button>' +
      (cState.checked
        ? '<div class="badge ' + (rightCount === cur.phrases.length ? 'badge-success' : 'badge-warning') + '" style="font-size:0.9rem;padding:0.35rem 0.75rem;">Resultado: ' + rightCount + ' / ' + cur.phrases.length + ' correctas</div>'
        : '<span style="font-size:0.85rem;color:var(--ink-secondary);">Podés arrastrar tarjetas entre columnas o usar RF / RNF / Regla Neg. / Ruido.</span>') +
      '  </div>' +
      '</section>'
    );
  }

  // =========================================================================
  // 4. DUELOS X vs. Y
  // =========================================================================
  function getDuelScenarios(duelsList, pairFilter) {
    var list = pairFilter === 'all'
      ? duelsList
      : duelsList.filter(function (d) { return d.id === pairFilter; });
    var out = [];
    list.forEach(function (d) {
      (d.scenarios || []).forEach(function (sc) {
        out.push({ pair: d, scenario: sc });
      });
    });
    return out;
  }

  function ensureDuelQueue(duelsList) {
    var pool = getDuelScenarios(duelsList, ui.duels.pairFilter);
    var poolIds = pool.map(function (x) { return x.scenario.id; });
    var validQueue = ui.duels.queue.filter(function (id) { return poolIds.indexOf(id) !== -1; });
    if (validQueue.length !== poolIds.length) {
      ui.duels.queue = poolIds.slice();
      ui.duels.qIndex = 0;
      ui.duels.pickedSide = null;
    }
    return pool;
  }

  function renderDuelsView() {
    var duelsList = Array.isArray(getData().duels) ? getData().duels : [];
    var filterChips = [{ id: 'all', title: 'Todos (' + duelsList.length + ')' }]
      .concat(duelsList.map(function (d) { return { id: d.id, title: d.title }; }))
      .map(function (item) {
        var act = ui.duels.pairFilter === item.id;
        return '<button type="button" class="chip' + (act ? ' is-active' : '') + '" data-duel-filter="' + esc(item.id) + '">' + esc(item.title) + '</button>';
      }).join('');

    var bodyHtml = '';
    if (ui.duels.mode === 'compare') {
      var visiblePairs = ui.duels.pairFilter === 'all'
        ? duelsList
        : duelsList.filter(function (d) { return d.id === ui.duels.pairFilter; });

      bodyHtml =
        '<div class="duel-compare-list">' +
        visiblePairs.map(function (d) {
          return (
            '<article class="duel-pair-card">' +
            '  <div class="duel-pair-head">' +
            '    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem;">' +
            '      <span class="badge ' + unitBadgeClass(d.unit) + '">Unidad ' + d.unit + '</span>' +
            '      <h3 style="margin:0;font-size:1.1rem;">' + esc(d.title) + '</h3>' +
            '    </div>' +
            '    <button type="button" class="btn btn-secondary btn-sm" data-duel-play-pair="' + esc(d.id) + '">Jugar este duelo →</button>' +
            '  </div>' +
            '  <div class="duel-vs-cols">' +
            '    <div class="duel-side-box is-left">' +
            '      <h4>' + esc(d.left.name) + '</h4>' +
            '      <span class="badge badge-primary" style="align-self:flex-start;">' + esc(d.left.badge) + '</span>' +
            '      <p class="duel-side-meta">' + esc(d.left.summary) + '</p>' +
            '      <p class="duel-side-meta"><strong>Pregunta clave:</strong> ' + esc(d.left.keyQuestion) + '</p>' +
            '      <p class="duel-side-meta"><strong>Trampa común:</strong> ' + esc(d.left.trap) + '</p>' +
            '      <p class="duel-side-meta"><strong>Ej.:</strong> ' + esc(d.left.example) + '</p>' +
            '    </div>' +
            '    <div class="duel-vs-badge">VS</div>' +
            '    <div class="duel-side-box is-right">' +
            '      <h4>' + esc(d.right.name) + '</h4>' +
            '      <span class="badge badge-teal" style="align-self:flex-start;">' + esc(d.right.badge) + '</span>' +
            '      <p class="duel-side-meta">' + esc(d.right.summary) + '</p>' +
            '      <p class="duel-side-meta"><strong>Pregunta clave:</strong> ' + esc(d.right.keyQuestion) + '</p>' +
            '      <p class="duel-side-meta"><strong>Trampa común:</strong> ' + esc(d.right.trap) + '</p>' +
            '      <p class="duel-side-meta"><strong>Ej.:</strong> ' + esc(d.right.example) + '</p>' +
            '    </div>' +
            '  </div>' +
            '</article>'
          );
        }).join('') +
        '</div>';
    } else {
      var pool = ensureDuelQueue(duelsList);
      var curId = ui.duels.queue[ui.duels.qIndex % ui.duels.queue.length];
      var entry = pool.filter(function (x) { return x.scenario.id === curId; })[0] || pool[0];
      var accuracy = pState.duels.answered > 0
        ? Math.round((pState.duels.correct / pState.duels.answered) * 100) + '%'
        : '--';

      if (!entry) {
        bodyHtml = '<div class="empty-state">No hay escenarios disponibles para este duelo.</div>';
      } else {
        var sc = entry.scenario;
        var pair = entry.pair;
        var picked = ui.duels.pickedSide;
        var leftCls = '';
        var rightCls = '';
        if (picked !== null) {
          leftCls = sc.answer === 'left' ? ' is-correct' : (picked === 'left' ? ' is-wrong' : '');
          rightCls = sc.answer === 'right' ? ' is-correct' : (picked === 'right' ? ' is-wrong' : '');
        }

        bodyHtml =
          '<div class="duel-arena">' +
          '  <div class="duel-kpi-strip">' +
          '    <div class="fc-stat-box"><div class="fc-stat-val">' + pState.duels.correct + ' / ' + pState.duels.answered + '</div><div class="fc-stat-lbl">Aciertos (' + accuracy + ')</div></div>' +
          '    <div class="fc-stat-box"><div class="fc-stat-val">' + pState.duels.streak + '</div><div class="fc-stat-lbl">Racha actual</div></div>' +
          '    <div class="fc-stat-box"><div class="fc-stat-val">' + pState.duels.bestStreak + '</div><div class="fc-stat-lbl">Mejor racha</div></div>' +
          '  </div>' +
          '  <div class="duel-scenario-card">' +
          '    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;">' +
          '      <span class="badge ' + unitBadgeClass(pair.unit) + '">' + esc(pair.title) + '</span>' +
          '      <span style="font-size:0.82rem;color:var(--ink-secondary);">Escenario ' + ((ui.duels.qIndex % pool.length) + 1) + ' de ' + pool.length + '</span>' +
          '    </div>' +
          '    <p class="duel-scenario-text">' + esc(sc.text) + '</p>' +
          '    <div class="duel-choices-grid">' +
          '      <button type="button" class="duel-choice-btn' + leftCls + '" data-duel-pick="left"' + (picked !== null ? ' disabled' : '') + '>' +
          '        <strong style="font-size:1rem;">' + esc(pair.left.name) + '</strong>' +
          '        <small style="color:var(--ink-secondary);">' + esc(pair.left.badge) + '</small>' +
          '      </button>' +
          '      <button type="button" class="duel-choice-btn' + rightCls + '" data-duel-pick="right"' + (picked !== null ? ' disabled' : '') + '>' +
          '        <strong style="font-size:1rem;">' + esc(pair.right.name) + '</strong>' +
          '        <small style="color:var(--ink-secondary);">' + esc(pair.right.badge) + '</small>' +
          '      </button>' +
          '    </div>' +
          (picked !== null
            ? '<div class="lab-status anim-pop" style="margin-top:1rem;border-left-color:' + (picked === sc.answer ? 'var(--success)' : 'var(--danger)') + ';">' +
              '  <strong>' + (picked === sc.answer ? '✓ ¡Exacto!' : '✕ Ojo con esa confusión:') + '</strong> ' + esc(sc.why) +
              '</div>' +
              '<div style="display:flex;justify-content:flex-end;margin-top:0.85rem;">' +
              '  <button type="button" class="btn btn-primary" id="btn-duel-next">Siguiente escenario →</button>' +
              '</div>'
            : '') +
          '  </div>' +
          '</div>';
      }
    }

    return (
      '<section class="practice-panel">' +
      '  <div class="practice-panel-head">' +
      '    <div>' +
      '      <h2>Duelos “X vs. Y” · Confusiones Clásicas de Examen</h2>' +
      '      <p>Contrastá pares conceptuales que suelen confundirse en parciales y entrená distinguéndolos en escenarios concretos.</p>' +
      '    </div>' +
      '    <div class="chip-group">' +
      '      <button type="button" class="chip' + (ui.duels.mode === 'compare' ? ' is-active' : '') + '" data-duel-mode="compare">Tarjetas comparativas</button>' +
      '      <button type="button" class="chip' + (ui.duels.mode === 'game' ? ' is-active' : '') + '" data-duel-mode="game">Mini-juego rápido</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="chip-group" style="margin-bottom:1.1rem;">' + filterChips + '</div>' +
      bodyHtml +
      '</section>'
    );
  }

  // =========================================================================
  // 5. MINI CASOS DE ESTUDIO CON CHECKLIST Y SOLUCIÓN
  // =========================================================================
  function getCaseState(caseId) {
    var rec = pState.cases[caseId];
    if (!rec || typeof rec !== 'object') {
      return { checks: {}, notes: '', revealed: false };
    }
    return {
      checks: rec.checks && typeof rec.checks === 'object' ? rec.checks : {},
      notes: typeof rec.notes === 'string' ? rec.notes : '',
      revealed: !!rec.revealed
    };
  }

  function renderCasesView() {
    var list = Array.isArray(getData().caseStudies) ? getData().caseStudies : [];
    var cur = list.filter(function (c) { return c.id === ui.cases.caseId; })[0] || list[0];
    if (!cur) return '<div class="empty-state">No hay casos de estudio cargados.</div>';
    ui.cases.caseId = cur.id;

    var cs = getCaseState(cur.id);
    var checkedCount = cur.checklist.filter(function (it) { return !!cs.checks[it.id]; }).length;
    var pct = cur.checklist.length ? Math.round((checkedCount / cur.checklist.length) * 100) : 0;

    var caseChips = list.map(function (c) {
      var st = getCaseState(c.id);
      var cnt = c.checklist.filter(function (it) { return !!st.checks[it.id]; }).length;
      return (
        '<button type="button" class="chip' + (c.id === cur.id ? ' is-active' : '') + '" data-case-id="' + esc(c.id) + '">' +
        esc(c.title.split('(')[0].replace('Sistema de Gestión para ', '').replace('Plataforma de ', '').replace('Sistema de ', '').trim()) +
        ' (' + cnt + '/' + c.checklist.length + ')' +
        '</button>'
      );
    }).join('');

    var checklistHtml = cur.checklist.map(function (item) {
      var on = !!cs.checks[item.id];
      return (
        '<button type="button" class="case-check-item' + (on ? ' is-checked' : '') + '" data-case-chk="' + esc(item.id) + '">' +
        '  <span class="case-check-box">' + (on ? '✓' : '') + '</span>' +
        '  <span>' + esc(item.text) + '</span>' +
        '</button>'
      );
    }).join('');

    var solHtml = '';
    if (cs.revealed) {
      var sol = cur.solution;
      solHtml =
        '<div class="case-solution-card anim-pop">' +
        '  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;">' +
        '    <h3 style="margin:0;font-size:1.08rem;">Solución de referencia para comparar tu modelado</h3>' +
        '    <span class="badge badge-primary">' + esc(cur.units) + '</span>' +
        '  </div>' +
        '  <div class="case-sol-grid">' +
        '    <div class="case-sol-block"><h4>Actores identificados</h4><ul>' + sol.actors.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        '    <div class="case-sol-block"><h4>Casos de Uso sugeridos</h4><ul>' + sol.useCases.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        '    <div class="case-sol-block"><h4>Esqueleto Modelo de Dominio</h4><ul>' + sol.domainModel.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        '    <div class="case-sol-block"><h4>Reglas de Negocio y RNF / Criterios</h4><ul>' + sol.rnfAndRules.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        '  </div>' +
        '  <div class="case-sol-block" style="margin-top:0.85rem;border-color:var(--danger);">' +
        '    <h4 style="color:var(--danger);">Errores frecuentes de examen en este enunciado</h4>' +
        '    <ul>' + sol.commonMistakes.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        '  </div>' +
        '</div>';
    }

    return (
      '<section class="practice-panel">' +
      '  <div class="practice-panel-head">' +
      '    <div>' +
      '      <h2>Mini Casos de Estudio con Checklist de Autocorrección</h2>' +
      '      <p>Resolvé primero el enunciado en papel (actores, casos de uso, modelo de dominio y reglas) y luego contrastá con la checklist y la referencia.</p>' +
      '    </div>' +
      '    <span class="badge badge-primary">' + esc(cur.difficulty) + ' · ' + esc(cur.units) + '</span>' +
      '  </div>' +

      '  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.65rem;margin-bottom:1rem;">' +
      '    <div class="chip-group">' + caseChips + '</div>' +
      '    <button type="button" class="btn btn-ghost btn-sm" id="btn-case-reset">Reiniciar caso</button>' +
      '  </div>' +

      '  <div class="case-layout">' +
      '    <div class="case-box">' +
      '      <h3 style="margin:0;font-size:1.12rem;">' + esc(cur.title) + '</h3>' +
      '      <p class="case-statement">' + esc(cur.statement) + '</p>' +
      '      <strong style="font-size:0.88rem;color:var(--primary);">Qué modelar en papel antes de mirar la solución:</strong>' +
      '      <ol class="case-tasks-list">' + cur.paperTasks.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol>' +
      '      <label for="case-notes-input" style="display:flex;justify-content:space-between;font-size:0.82rem;font-weight:700;margin-bottom:0.35rem;">' +
      '        <span>Borrador rápido (opcional, guardado localmente)</span>' +
      '        <span id="case-notes-saved" style="color:var(--ink-secondary);font-weight:600;">Guardado automático</span>' +
      '      </label>' +
      '      <textarea id="case-notes-input" class="case-notes-area" placeholder="Ej.: Actores: Veterinario, Cajero... Clases: Dueño 1 — 1..* Mascota...">' + esc(cs.notes) + '</textarea>' +
      '    </div>' +

      '    <div class="case-box">' +
      '      <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.45rem;">' +
      '        <strong style="font-size:0.98rem;">Checklist de autocorrección</strong>' +
      '        <span class="badge ' + (checkedCount === cur.checklist.length ? 'badge-success' : '') + '">' + checkedCount + ' / ' + cur.checklist.length + ' (' + pct + '%)</span>' +
      '      </div>' +
      '      <div class="progress-track" style="margin-bottom:0.65rem;"><div class="progress-fill" style="width:' + pct + '%;background:var(--success);"></div></div>' +
      '      <div class="case-checklist">' + checklistHtml + '</div>' +
      '      <button type="button" class="btn ' + (cs.revealed ? 'btn-secondary' : 'btn-primary') + '" id="btn-case-reveal" style="width:100%;">' +
      (cs.revealed ? 'Ocultar solución de referencia' : 'Revelar solución de referencia para comparar') +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      solHtml +
      '</section>'
    );
  }

  // =========================================================================
  // SHELL GENERAL Y ROUTER INTERNO DE SUB-PÁGINAS
  // =========================================================================
  function render(tool) {
    if (VALID_TOOLS.indexOf(tool) !== -1) {
      ui.tool = tool;
    }
    var data = getData();
    var deck = getMergedFlashcards();
    var fcMastered = deck.filter(function (c) {
      var r = pState.flashcards.cards[c.id];
      return r && r.box >= 3;
    }).length;

    var bugDiags = Array.isArray(data.bugDiagrams) ? data.bugDiagrams : [];
    var bugsTotal = bugDiags.reduce(function (acc, d) { return acc + (d.errorCount || 0); }, 0);
    var bugsFound = bugDiags.reduce(function (acc, d) { return acc + getBugProgress(d).found.length; }, 0);

    var intList = Array.isArray(data.clientInterviews) ? data.clientInterviews : [];
    var intPerfect = intList.filter(function (c) {
      return getInterviewState(c.id).bestScore === c.phrases.length;
    }).length;

    var casesList = Array.isArray(data.caseStudies) ? data.caseStudies : [];
    var casesDone = casesList.filter(function (c) {
      var st = getCaseState(c.id);
      return c.checklist.every(function (chk) { return !!st.checks[chk.id]; });
    }).length;

    var tabs = [
      { id: 'flashcards', kicker: 'Mazo SRS', title: 'Flashcards Inteligentes', badge: fcMastered + '/' + deck.length + ' dom.' },
      { id: 'bugs', kicker: 'Ojo Clínico', title: 'Cazador de Errores', badge: bugsFound + '/' + bugsTotal + ' bugs' },
      { id: 'interview', kicker: 'Elicitación', title: 'Entrevista con Cliente', badge: intPerfect + '/' + intList.length + ' casos' },
      { id: 'duels', kicker: 'Examen', title: 'Duelos X vs. Y', badge: 'Racha máx. ' + pState.duels.bestStreak },
      { id: 'cases', kicker: 'Papel + Guía', title: 'Mini Casos de Estudio', badge: casesDone + '/' + casesList.length + ' completos' }
    ];

    var tabsHtml = tabs.map(function (t) {
      var act = ui.tool === t.id;
      return (
        '<a href="#practice?tool=' + t.id + '" class="practice-tab' + (act ? ' is-active' : '') + '" data-practice-tab="' + t.id + '">' +
        '  <div class="practice-tab-top">' +
        '    <span class="practice-tab-kicker">' + esc(t.kicker) + '</span>' +
        '    <span class="practice-tab-badge">' + esc(t.badge) + '</span>' +
        '  </div>' +
        '  <span class="practice-tab-title">' + esc(t.title) + '</span>' +
        '</a>'
      );
    }).join('');

    var subViewHtml = '';
    if (ui.tool === 'flashcards') {
      subViewHtml = renderFlashcardsView();
    } else if (ui.tool === 'bugs') {
      subViewHtml = renderBugsView();
    } else if (ui.tool === 'interview') {
      subViewHtml = renderInterviewView();
    } else if (ui.tool === 'duels') {
      subViewHtml = renderDuelsView();
    } else {
      subViewHtml = renderCasesView();
    }

    return (
      '<section class="practice-hero">' +
      '  <div class="practice-hero-inner">' +
      '    <span class="hero-eyebrow">Zona de Entrenamiento Activo · 5 Laboratorios de Examen</span>' +
      '    <h1>Entrenamiento Práctico U1–U6</h1>' +
      '    <p>Cinco páginas dedicadas para fijar vocabulario con repetición espaciada, detectar errores en diagramas, limpiar entrevistas ambiguas, distinguir pares conceptuales y autocorregir casos de parcial.</p>' +
      '  </div>' +
      '</section>' +
      '<nav class="practice-tabs" aria-label="Herramientas de entrenamiento">' + tabsHtml + '</nav>' +
      subViewHtml
    );
  }

  // =========================================================================
  // MOUNT & BINDINGS
  // =========================================================================
  function mount(container, tool) {
    unmount();
    if (!container) return;
    if (VALID_TOOLS.indexOf(tool) !== -1) {
      ui.tool = tool;
    }

    function refresh() {
      container.innerHTML = render(ui.tool);
      mount(container, ui.tool);
    }

    if (ui.tool === 'flashcards') {
      var flipBtn = container.querySelector('#btn-fc-flip');
      if (flipBtn) {
        flipBtn.addEventListener('click', function () {
          ui.fc.flipped = !ui.fc.flipped;
          refresh();
        });
      }
      var hintBtn = container.querySelector('#btn-fc-hint');
      if (hintBtn) {
        hintBtn.addEventListener('click', function () {
          ui.fc.showHint = !ui.fc.showHint;
          refresh();
        });
      }
      var skipBtn = container.querySelector('#btn-fc-skip');
      if (skipBtn) {
        skipBtn.addEventListener('click', function () {
          var filtered = getFilteredDeck(getMergedFlashcards());
          ui.fc.currentId = pickNextCardId(filtered, ui.fc.currentId);
          ui.fc.flipped = false;
          ui.fc.showHint = false;
          refresh();
        });
      }
      var smartFallback = container.querySelector('#btn-fc-mode-smart');
      if (smartFallback) {
        smartFallback.addEventListener('click', function () {
          ui.fc.mode = 'smart';
          refresh();
        });
      }
      var rateBtns = container.querySelectorAll('[data-rate]');
      for (var r = 0; r < rateBtns.length; r++) {
        rateBtns[r].addEventListener('click', function (ev) {
          if (!ui.fc.currentId) return;
          var rating = ev.currentTarget.getAttribute('data-rate');
          var prevId = ui.fc.currentId;
          rateCard(prevId, rating);
          var filtered = getFilteredDeck(getMergedFlashcards());
          ui.fc.currentId = pickNextCardId(filtered, prevId);
          ui.fc.flipped = false;
          ui.fc.showHint = false;
          refresh();
        });
      }
      var fcUnitBtns = container.querySelectorAll('[data-fc-unit]');
      for (var u = 0; u < fcUnitBtns.length; u++) {
        fcUnitBtns[u].addEventListener('click', function (ev) {
          var val = ev.currentTarget.getAttribute('data-fc-unit');
          ui.fc.unit = val === 'all' ? 'all' : Number(val);
          ui.fc.currentId = null;
          ui.fc.flipped = false;
          ui.fc.showHint = false;
          refresh();
        });
      }
      var fcModeBtns = container.querySelectorAll('[data-fc-mode]');
      for (var m = 0; m < fcModeBtns.length; m++) {
        fcModeBtns[m].addEventListener('click', function (ev) {
          ui.fc.mode = ev.currentTarget.getAttribute('data-fc-mode');
          ui.fc.currentId = null;
          ui.fc.flipped = false;
          ui.fc.showHint = false;
          refresh();
        });
      }
      var toggleListBtn = container.querySelector('#btn-fc-toggle-list');
      if (toggleListBtn) {
        toggleListBtn.addEventListener('click', function () {
          ui.fc.showDeckList = !ui.fc.showDeckList;
          refresh();
        });
      }
      var resetFcBtn = container.querySelector('#btn-fc-reset');
      if (resetFcBtn) {
        resetFcBtn.addEventListener('click', function () {
          pState.flashcards = { step: 0, cards: {} };
          saveState();
          ui.fc.currentId = null;
          ui.fc.flipped = false;
          ui.fc.showHint = false;
          refresh();
        });
      }

      if (typeof document !== 'undefined') {
        docKeyHandler = function (ev) {
          var modalRoot = document.getElementById('modal-root');
          if (modalRoot && modalRoot.innerHTML.trim() !== '') return;
          var tag = ev.target && ev.target.tagName ? ev.target.tagName.toLowerCase() : '';
          if (tag === 'input' || tag === 'textarea' || tag === 'select' || tag === 'button' || tag === 'a') return;

          if (ev.code === 'Space' || ev.key === ' ') {
            ev.preventDefault();
            if (ui.fc.currentId) {
              ui.fc.flipped = !ui.fc.flipped;
              refresh();
            }
          } else if (ui.fc.flipped && ui.fc.currentId && (ev.key === '1' || ev.key === '2' || ev.key === '3')) {
            var rateMap = { '1': 'again', '2': 'hard', '3': 'good' };
            var prevId = ui.fc.currentId;
            rateCard(prevId, rateMap[ev.key]);
            var filtered = getFilteredDeck(getMergedFlashcards());
            ui.fc.currentId = pickNextCardId(filtered, prevId);
            ui.fc.flipped = false;
            ui.fc.showHint = false;
            refresh();
          }
        };
        document.addEventListener('keydown', docKeyHandler);
      }
    } else if (ui.tool === 'bugs') {
      var diagrams = Array.isArray(getData().bugDiagrams) ? getData().bugDiagrams : [];
      var curDiag = diagrams.filter(function (d) { return d.id === ui.bugs.diagramId; })[0] || diagrams[0];
      var prog = curDiag ? getBugProgress(curDiag) : { found: [], safe: [] };

      var diagBtns = container.querySelectorAll('[data-bug-diag]');
      for (var d = 0; d < diagBtns.length; d++) {
        diagBtns[d].addEventListener('click', function (ev) {
          ui.bugs.diagramId = ev.currentTarget.getAttribute('data-bug-diag');
          ui.bugs.selectedSpot = null;
          ui.bugs.wrongOpt = null;
          ui.bugs.hintSpot = null;
          refresh();
        });
      }

      var hotspots = container.querySelectorAll('.bug-hotspot[data-spot]');
      for (var h = 0; h < hotspots.length; h++) {
        var hs = hotspots[h];
        var sid = hs.getAttribute('data-spot');
        if (prog.found.indexOf(sid) !== -1) hs.classList.add('is-found');
        if (prog.safe.indexOf(sid) !== -1) hs.classList.add('is-safe');
        if (ui.bugs.selectedSpot === sid) hs.classList.add('is-selected');
        if (ui.bugs.hintSpot === sid && prog.found.indexOf(sid) === -1) hs.classList.add('is-hinted');

        var selectSpot = function (spotId) {
          if (!curDiag || !curDiag.spots || !curDiag.spots[spotId]) return;
          ui.bugs.selectedSpot = spotId;
          ui.bugs.wrongOpt = null;
          if (ui.bugs.hintSpot === spotId) ui.bugs.hintSpot = null;
          if (!curDiag.spots[spotId].isError) {
            if (!pState.bugs[curDiag.id]) pState.bugs[curDiag.id] = { found: [], safe: [] };
            if (pState.bugs[curDiag.id].safe.indexOf(spotId) === -1) {
              pState.bugs[curDiag.id].safe.push(spotId);
              saveState();
            }
          }
          refresh();
        };

        hs.addEventListener('click', (function (capturedId) {
          return function (ev) {
            ev.stopPropagation();
            selectSpot(capturedId);
          };
        })(sid));
        hs.addEventListener('keydown', (function (capturedId) {
          return function (ev) {
            if (ev.key === 'Enter' || ev.key === ' ') {
              ev.preventDefault();
              selectSpot(capturedId);
            }
          };
        })(sid));
      }

      var optBtns = container.querySelectorAll('[data-bug-opt]');
      for (var o = 0; o < optBtns.length; o++) {
        optBtns[o].addEventListener('click', function (ev) {
          if (!curDiag || !ui.bugs.selectedSpot) return;
          var sp = curDiag.spots[ui.bugs.selectedSpot];
          if (!sp || !sp.isError) return;
          var idx = Number(ev.currentTarget.getAttribute('data-bug-opt'));
          if (idx === sp.correctIndex) {
            if (!pState.bugs[curDiag.id]) pState.bugs[curDiag.id] = { found: [], safe: [] };
            if (pState.bugs[curDiag.id].found.indexOf(ui.bugs.selectedSpot) === -1) {
              pState.bugs[curDiag.id].found.push(ui.bugs.selectedSpot);
              saveState();
            }
            ui.bugs.wrongOpt = null;
          } else {
            ui.bugs.wrongOpt = idx;
          }
          refresh();
        });
      }

      var hintBugBtn = container.querySelector('#btn-bug-hint');
      if (hintBugBtn && curDiag) {
        hintBugBtn.addEventListener('click', function () {
          var spotKeys = Object.keys(curDiag.spots || {});
          for (var k = 0; k < spotKeys.length; k++) {
            var sk = spotKeys[k];
            if (curDiag.spots[sk].isError && prog.found.indexOf(sk) === -1) {
              ui.bugs.hintSpot = sk;
              break;
            }
          }
          refresh();
        });
      }

      var resetBugBtn = container.querySelector('#btn-bug-reset');
      if (resetBugBtn && curDiag) {
        resetBugBtn.addEventListener('click', function () {
          pState.bugs[curDiag.id] = { found: [], safe: [] };
          saveState();
          ui.bugs.selectedSpot = null;
          ui.bugs.wrongOpt = null;
          ui.bugs.hintSpot = null;
          refresh();
        });
      }
    } else if (ui.tool === 'interview') {
      var cases = Array.isArray(getData().clientInterviews) ? getData().clientInterviews : [];
      var curInt = cases.filter(function (c) { return c.id === ui.interview.caseId; })[0] || cases[0];

      var assignPhrase = function (phraseId, cat) {
        if (!curInt || !phraseId || !cat) return;
        if (!pState.interviews[curInt.id]) {
          pState.interviews[curInt.id] = { assigned: {}, checked: false, bestScore: 0 };
        }
        pState.interviews[curInt.id].assigned[phraseId] = cat;
        pState.interviews[curInt.id].checked = false;
        saveState();
        refresh();
      };

      var intCaseBtns = container.querySelectorAll('[data-int-case]');
      for (var ic = 0; ic < intCaseBtns.length; ic++) {
        intCaseBtns[ic].addEventListener('click', function (ev) {
          ui.interview.caseId = ev.currentTarget.getAttribute('data-int-case');
          refresh();
        });
      }

      var qtags = container.querySelectorAll('[data-assign-phrase]');
      for (var qt = 0; qt < qtags.length; qt++) {
        qtags[qt].addEventListener('click', function (ev) {
          var pid = ev.currentTarget.getAttribute('data-assign-phrase');
          var cat = ev.currentTarget.getAttribute('data-assign-cat');
          assignPhrase(pid, cat);
        });
      }

      var unassignBtns = container.querySelectorAll('[data-unassign-phrase]');
      for (var ub = 0; ub < unassignBtns.length; ub++) {
        unassignBtns[ub].addEventListener('click', function (ev) {
          if (!curInt) return;
          var pid = ev.currentTarget.getAttribute('data-unassign-phrase');
          if (pState.interviews[curInt.id] && pState.interviews[curInt.id].assigned) {
            delete pState.interviews[curInt.id].assigned[pid];
            pState.interviews[curInt.id].checked = false;
            saveState();
            refresh();
          }
        });
      }

      var draggables = container.querySelectorAll('[data-phrase-id]');
      for (var dr = 0; dr < draggables.length; dr++) {
        draggables[dr].addEventListener('dragstart', function (ev) {
          var pid = ev.currentTarget.getAttribute('data-phrase-id');
          ui.interview.dragPhraseId = pid;
          if (ev.dataTransfer) {
            try {
              ev.dataTransfer.setData('text/plain', pid);
              ev.dataTransfer.effectAllowed = 'move';
            } catch (e) {}
          }
        });
      }

      var buckets = container.querySelectorAll('.int-bucket[data-cat]');
      for (var bk = 0; bk < buckets.length; bk++) {
        buckets[bk].addEventListener('dragover', function (ev) {
          ev.preventDefault();
          ev.currentTarget.classList.add('is-dragover');
        });
        buckets[bk].addEventListener('dragleave', function (ev) {
          ev.currentTarget.classList.remove('is-dragover');
        });
        buckets[bk].addEventListener('drop', function (ev) {
          ev.preventDefault();
          ev.currentTarget.classList.remove('is-dragover');
          var pid = ui.interview.dragPhraseId;
          if (ev.dataTransfer) {
            try {
              pid = ev.dataTransfer.getData('text/plain') || pid;
            } catch (e) {}
          }
          ui.interview.dragPhraseId = null;
          var cat = ev.currentTarget.getAttribute('data-cat');
          assignPhrase(pid, cat);
        });
      }

      var checkIntBtn = container.querySelector('#btn-int-check');
      if (checkIntBtn && curInt) {
        checkIntBtn.addEventListener('click', function () {
          if (!pState.interviews[curInt.id]) {
            pState.interviews[curInt.id] = { assigned: {}, checked: false, bestScore: 0 };
          }
          var rec = pState.interviews[curInt.id];
          rec.checked = true;
          var score = 0;
          curInt.phrases.forEach(function (ph) {
            if (rec.assigned[ph.id] === ph.category) score += 1;
          });
          if (score > (rec.bestScore || 0)) rec.bestScore = score;
          saveState();
          refresh();
        });
      }

      var resetIntBtn = container.querySelector('#btn-int-reset');
      if (resetIntBtn && curInt) {
        resetIntBtn.addEventListener('click', function () {
          pState.interviews[curInt.id] = { assigned: {}, checked: false, bestScore: 0 };
          saveState();
          refresh();
        });
      }
    } else if (ui.tool === 'duels') {
      var duelsList = Array.isArray(getData().duels) ? getData().duels : [];
      var dModeBtns = container.querySelectorAll('[data-duel-mode]');
      for (var dm = 0; dm < dModeBtns.length; dm++) {
        dModeBtns[dm].addEventListener('click', function (ev) {
          ui.duels.mode = ev.currentTarget.getAttribute('data-duel-mode');
          ui.duels.pickedSide = null;
          refresh();
        });
      }

      var dFilterBtns = container.querySelectorAll('[data-duel-filter]');
      for (var df = 0; df < dFilterBtns.length; df++) {
        dFilterBtns[df].addEventListener('click', function (ev) {
          ui.duels.pairFilter = ev.currentTarget.getAttribute('data-duel-filter');
          ui.duels.queue = [];
          ui.duels.qIndex = 0;
          ui.duels.pickedSide = null;
          refresh();
        });
      }

      var playPairBtns = container.querySelectorAll('[data-duel-play-pair]');
      for (var pp = 0; pp < playPairBtns.length; pp++) {
        playPairBtns[pp].addEventListener('click', function (ev) {
          ui.duels.pairFilter = ev.currentTarget.getAttribute('data-duel-play-pair');
          ui.duels.mode = 'game';
          ui.duels.queue = [];
          ui.duels.qIndex = 0;
          ui.duels.pickedSide = null;
          refresh();
        });
      }

      var pickBtns = container.querySelectorAll('[data-duel-pick]');
      for (var pk = 0; pk < pickBtns.length; pk++) {
        pickBtns[pk].addEventListener('click', function (ev) {
          if (ui.duels.pickedSide !== null) return;
          var side = ev.currentTarget.getAttribute('data-duel-pick');
          var pool = ensureDuelQueue(duelsList);
          var curId = ui.duels.queue[ui.duels.qIndex % ui.duels.queue.length];
          var entry = pool.filter(function (x) { return x.scenario.id === curId; })[0] || pool[0];
          if (!entry) return;
          ui.duels.pickedSide = side;
          pState.duels.answered += 1;
          if (side === entry.scenario.answer) {
            pState.duels.correct += 1;
            pState.duels.streak += 1;
            if (pState.duels.streak > pState.duels.bestStreak) {
              pState.duels.bestStreak = pState.duels.streak;
            }
          } else {
            pState.duels.streak = 0;
          }
          saveState();
          refresh();
        });
      }

      var nextDuelBtn = container.querySelector('#btn-duel-next');
      if (nextDuelBtn) {
        nextDuelBtn.addEventListener('click', function () {
          var pool = ensureDuelQueue(duelsList);
          if (pool.length > 0) {
            ui.duels.qIndex = (ui.duels.qIndex + 1) % pool.length;
          }
          ui.duels.pickedSide = null;
          refresh();
        });
      }
    } else if (ui.tool === 'cases') {
      var casesList = Array.isArray(getData().caseStudies) ? getData().caseStudies : [];
      var curCase = casesList.filter(function (c) { return c.id === ui.cases.caseId; })[0] || casesList[0];

      var caseBtns = container.querySelectorAll('[data-case-id]');
      for (var cb = 0; cb < caseBtns.length; cb++) {
        caseBtns[cb].addEventListener('click', function (ev) {
          ui.cases.caseId = ev.currentTarget.getAttribute('data-case-id');
          refresh();
        });
      }

      var chkBtns = container.querySelectorAll('[data-case-chk]');
      for (var ck = 0; ck < chkBtns.length; ck++) {
        chkBtns[ck].addEventListener('click', function (ev) {
          if (!curCase) return;
          var chkId = ev.currentTarget.getAttribute('data-case-chk');
          if (!pState.cases[curCase.id]) {
            pState.cases[curCase.id] = { checks: {}, notes: '', revealed: false };
          }
          var map = pState.cases[curCase.id].checks;
          map[chkId] = !map[chkId];
          saveState();
          refresh();
        });
      }

      var notesEl = container.querySelector('#case-notes-input');
      var savedHint = container.querySelector('#case-notes-saved');
      if (notesEl && curCase) {
        notesEl.addEventListener('input', function (ev) {
          if (!pState.cases[curCase.id]) {
            pState.cases[curCase.id] = { checks: {}, notes: '', revealed: false };
          }
          pState.cases[curCase.id].notes = ev.target.value;
          saveState();
          if (savedHint) savedHint.textContent = 'Guardado ✓';
        });
      }

      var revealBtn = container.querySelector('#btn-case-reveal');
      if (revealBtn && curCase) {
        revealBtn.addEventListener('click', function () {
          if (!pState.cases[curCase.id]) {
            pState.cases[curCase.id] = { checks: {}, notes: '', revealed: false };
          }
          pState.cases[curCase.id].revealed = !pState.cases[curCase.id].revealed;
          saveState();
          refresh();
        });
      }

      var resetCaseBtn = container.querySelector('#btn-case-reset');
      if (resetCaseBtn && curCase) {
        resetCaseBtn.addEventListener('click', function () {
          pState.cases[curCase.id] = { checks: {}, notes: '', revealed: false };
          saveState();
          refresh();
        });
      }
    }
  }

  global.ADS_PRACTICE = {
    validTools: VALID_TOOLS,
    render: render,
    mount: mount,
    unmount: unmount
  };
})(typeof window !== 'undefined' ? window : globalThis);
