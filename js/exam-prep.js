(function (global) {
  'use strict';

  var STORAGE_KEY = 'ads_exam_prep_state_v1';
  var VALID_TABS = ['guide', 'questions', 'drills'];
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
      studiedGuides: [],
      qStatus: {},
      qDrafts: {},
      qRubric: {},
      qRevealed: {},
      tgsAnswers: {},
      tgsChecked: {},
      rfPicked: {},
      rfChecked: false,
      furpsAnswers: {},
      furpsChecked: false
    };
  }

  function loadState() {
    var base = defaultState();
    try {
      var raw = safeGet(STORAGE_KEY);
      if (!raw) return base;
      var p = JSON.parse(raw);
      if (!p || typeof p !== 'object') return base;
      return {
        studiedGuides: Array.isArray(p.studiedGuides) ? p.studiedGuides : [],
        qStatus: p.qStatus && typeof p.qStatus === 'object' ? p.qStatus : {},
        qDrafts: p.qDrafts && typeof p.qDrafts === 'object' ? p.qDrafts : {},
        qRubric: p.qRubric && typeof p.qRubric === 'object' ? p.qRubric : {},
        qRevealed: p.qRevealed && typeof p.qRevealed === 'object' ? p.qRevealed : {},
        tgsAnswers: p.tgsAnswers && typeof p.tgsAnswers === 'object' ? p.tgsAnswers : {},
        tgsChecked: p.tgsChecked && typeof p.tgsChecked === 'object' ? p.tgsChecked : {},
        rfPicked: p.rfPicked && typeof p.rfPicked === 'object' ? p.rfPicked : {},
        rfChecked: !!p.rfChecked,
        furpsAnswers: p.furpsAnswers && typeof p.furpsAnswers === 'object' ? p.furpsAnswers : {},
        furpsChecked: !!p.furpsChecked
      };
    } catch (e) {
      return base;
    }
  }

  var epState = loadState();

  function saveState() {
    try {
      safeSet(STORAGE_KEY, JSON.stringify(epState));
    } catch (e) {}
  }

  function getData() {
    return global.ADS_EXAM_PREP_DATA || {};
  }

  var ui = {
    tab: 'guide',
    guideId: 'g1-tgs',
    examSet: 'all', // 'all' | '1' | '2' | '3'
    statusFilter: 'all', // 'all' | 'pendiente' | 'repasar' | 'lista'
    focusQ: null,
    tgsSysId: 'telefonia',
    ucFormat: '1col' // '1col' | '2col'
  };

  var activeKeyHandler = null;

  function unmount() {
    if (activeKeyHandler && typeof document !== 'undefined') {
      document.removeEventListener('keydown', activeKeyHandler);
    }
    activeKeyHandler = null;
    if (typeof document !== 'undefined') {
      var lbHost = document.querySelector('#ep-lightbox-host');
      if (lbHost) lbHost.innerHTML = '';
    }
  }

  function getVisuals() {
    return global.ADS_EXAM_PREP_VISUALS || {};
  }

  function renderSectionVisual(guideId, secIdx) {
    var key = guideId + ':' + secIdx;
    var v = getVisuals()[key];
    if (!v || !v.svg) return '';
    var allowedAccents = ['primary', 'teal', 'violet', 'warning', 'success', 'danger'];
    var accent = allowedAccents.indexOf(v.accent) !== -1 ? v.accent : 'primary';
    return (
      '<figure class="ep-visual-card" data-accent="' + accent + '">' +
      '  <div class="ep-visual-head">' +
      '    <div class="ep-visual-meta">' +
      '      <span class="ep-visual-kicker">' + esc(v.kicker) + '</span>' +
      '      <strong class="ep-visual-title">' + esc(v.title) + '</strong>' +
      '    </div>' +
      '    <button type="button" class="ep-visual-zoom-btn" data-ep-zoom="' + esc(key) + '" aria-label="Ampliar diagrama: ' + esc(v.title) + '">Ampliar ⤢</button>' +
      '  </div>' +
      '  <div class="ep-visual-stage">' + v.svg + '</div>' +
      (v.caption ? '  <figcaption class="ep-visual-caption">' + esc(v.caption) + '</figcaption>' : '') +
      '</figure>'
    );
  }

  // =========================================================================
  // TAB 1: GUÍA TEÓRICA POR EJE
  // =========================================================================
  function renderTableHtml(table) {
    if (!table || !Array.isArray(table.headers) || !Array.isArray(table.rows)) return '';
    var ths = table.headers.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('');
    var trs = table.rows.map(function (row) {
      return '<tr>' + row.map(function (cell) { return '<td>' + esc(cell) + '</td>'; }).join('') + '</tr>';
    }).join('');
    return (
      '<div class="ep-table-wrap">' +
      '  <table class="ep-table">' +
      '    <thead><tr>' + ths + '</tr></thead>' +
      '    <tbody>' + trs + '</tbody>' +
      '  </table>' +
      '</div>'
    );
  }

  function renderGuideTab() {
    var data = getData();
    var guides = Array.isArray(data.guides) ? data.guides : [];
    var questions = Array.isArray(data.questions) ? data.questions : [];
    if (!guides.length) return '<div class="empty-state">No hay ejes cargados.</div>';

    var curIndex = 0;
    for (var i = 0; i < guides.length; i++) {
      if (guides[i].id === ui.guideId) {
        curIndex = i;
        break;
      }
    }
    var g = guides[curIndex];
    ui.guideId = g.id;
    var isStudied = epState.studiedGuides.indexOf(g.id) !== -1;

    var navHtml = guides.map(function (item) {
      var act = item.id === g.id;
      var done = epState.studiedGuides.indexOf(item.id) !== -1;
      return (
        '<button type="button" class="ep-axis-btn' + (act ? ' is-active' : '') + '" data-ep-guide="' + esc(item.id) + '">' +
        '  <div class="ep-axis-head">' +
        '    <span>Eje ' + item.num + ' · ' + esc(item.units) + '</span>' +
        '    <span class="badge ' + (done ? 'badge-success' : '') + '">' + (done ? 'Estudiado ✓' : item.coversQuestions.length + ' preg.') + '</span>' +
        '  </div>' +
        '  <span class="ep-axis-title">' + esc(item.title) + '</span>' +
        '</button>'
      );
    }).join('');

    var sectionsHtml = g.sections.map(function (sec, secIdx) {
      var bulletsHtml = Array.isArray(sec.bullets) && sec.bullets.length
        ? '<ul class="ep-section-bullets">' + sec.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>'
        : '';
      return (
        '<article class="ep-section-block">' +
        '  <h3>' + esc(sec.heading) + '</h3>' +
        (sec.body ? '<p>' + esc(sec.body) + '</p>' : '') +
        bulletsHtml +
        (sec.table ? renderTableHtml(sec.table) : '') +
        (sec.callout ? '<div class="ep-callout">' + esc(sec.callout) + '</div>' : '') +
        '</article>' +
        renderSectionVisual(g.id, secIdx)
      );
    }).join('');

    var linkedQs = g.coversQuestions.map(function (qid) {
      return questions.filter(function (q) { return q.id === qid; })[0];
    }).filter(Boolean);

    var linkedHtml = linkedQs.map(function (q) {
      var shortPrompt = q.prompt.length > 68 ? q.prompt.slice(0, 68) + '…' : q.prompt;
      return (
        '<a href="#exam-prep?tab=questions&amp;q=' + esc(q.id) + '" class="ep-q-jump">' +
        '  <span class="badge badge-primary">' + esc(q.code) + '</span>' +
        '  <span>' + esc(shortPrompt) + '</span>' +
        '</a>'
      );
    }).join('');

    return (
      '<div class="ep-guide-layout">' +
      '  <aside class="ep-axis-nav" aria-label="Ejes temáticos de parcial">' + navHtml + '</aside>' +
      '  <section class="ep-lesson-card">' +
      '    <div class="ep-lesson-head">' +
      '      <div>' +
      '        <span class="badge badge-primary">Eje ' + g.num + ' de ' + guides.length + ' · ' + esc(g.units) + '</span>' +
      '        <h2>' + esc(g.title) + '</h2>' +
      '        <p>' + esc(g.subtitle) + '</p>' +
      '      </div>' +
      '      <button type="button" class="btn ' + (isStudied ? 'btn-secondary' : 'btn-primary') + ' btn-sm" id="btn-ep-toggle-guide">' +
      (isStudied ? '✓ Eje estudiado' : 'Marcar eje como estudiado') +
      '      </button>' +
      '    </div>' +
      sectionsHtml +
      '    <div class="ep-linked-qs">' +
      '      <strong style="font-size:0.92rem;">Preguntas reales de examen que ya podés responder con este eje:</strong>' +
      '      <div class="ep-linked-list">' + linkedHtml + '</div>' +
      '    </div>' +
      '    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:0.65rem;margin-top:1.15rem;">' +
      '      <button type="button" class="btn btn-secondary btn-sm" id="btn-ep-prev-guide"' + (curIndex === 0 ? ' disabled' : '') + '>← Eje anterior</button>' +
      (curIndex < guides.length - 1
        ? '<button type="button" class="btn btn-primary btn-sm" id="btn-ep-next-guide">Siguiente eje →</button>'
        : '<a href="#exam-prep?tab=questions" class="btn btn-primary btn-sm">Practicar las 19 preguntas →</a>') +
      '    </div>' +
      '  </section>' +
      '  <div id="ep-lightbox-host"></div>' +
      '</div>'
    );
  }

  // =========================================================================
  // TAB 2: BANCO DE 19 PREGUNTAS REALES
  // =========================================================================
  function getQuestionStatus(qId) {
    return epState.qStatus[qId] || 'pendiente';
  }

  function renderQuestionsTab() {
    var data = getData();
    var allQs = Array.isArray(data.questions) ? data.questions : [];
    var filtered = allQs.filter(function (q) {
      if (ui.examSet !== 'all' && String(q.examSet) !== String(ui.examSet)) return false;
      if (ui.statusFilter !== 'all' && getQuestionStatus(q.id) !== ui.statusFilter) return false;
      return true;
    });

    var setChips = [
      { id: 'all', label: 'Todas (' + allQs.length + ')' },
      { id: '1', label: 'Parcial 1 (9)' },
      { id: '2', label: 'Parcial 2 (5)' },
      { id: '3', label: 'Parcial 3 (5)' }
    ].map(function (c) {
      return '<button type="button" class="chip' + (ui.examSet === c.id ? ' is-active' : '') + '" data-ep-set="' + c.id + '">' + esc(c.label) + '</button>';
    }).join('');

    var statusChips = [
      { id: 'all', label: 'Todos los estados' },
      { id: 'pendiente', label: 'Pendiente' },
      { id: 'repasar', label: 'Repasar' },
      { id: 'lista', label: 'Lista ✓' }
    ].map(function (c) {
      return '<button type="button" class="chip' + (ui.statusFilter === c.id ? ' is-active' : '') + '" data-ep-stfilter="' + c.id + '">' + esc(c.label) + '</button>';
    }).join('');

    var cardsHtml = '';
    if (!filtered.length) {
      cardsHtml = '<div class="empty-state">No hay preguntas con los filtros actuales.</div>';
    } else {
      cardsHtml = '<div class="ep-q-list">' + filtered.map(function (q) {
        var st = getQuestionStatus(q.id);
        var draft = epState.qDrafts[q.id] || '';
        var revealed = !!epState.qRevealed[q.id];
        var focused = ui.focusQ === q.id;
        var stBadgeCls = st === 'lista' ? 'badge-success' : (st === 'repasar' ? 'badge-warning' : '');

        var rubricHtml = q.rubric.map(function (rb, rIdx) {
          var rk = q.id + ':' + rIdx;
          var checked = !!epState.qRubric[rk];
          return (
            '<button type="button" class="ep-rubric-item' + (checked ? ' is-checked' : '') + '" data-ep-rubric="' + esc(rk) + '">' +
            '  <span class="ep-rubric-chk">' + (checked ? '✓' : '') + '</span>' +
            '  <span>' + esc(rb) + '</span>' +
            '</button>'
          );
        }).join('');

        var answerHtml = '';
        if (revealed) {
          answerHtml =
            '<div class="ep-answer-box">' +
            '  <p><strong>Respuesta modelo de examen:</strong> ' + esc(q.answerLead) + '</p>' +
            '  <ul>' + q.answerPoints.map(function (pt) { return '<li>' + esc(pt) + '</li>'; }).join('') + '</ul>' +
            (q.answerExample ? '<p style="margin:0;"><strong>Clave / ejemplo:</strong> ' + esc(q.answerExample) + '</p>' : '') +
            (q.pitfall ? '<div class="ep-pitfall-box"><strong>Ojo en el parcial:</strong> ' + esc(q.pitfall) + '</div>' : '') +
            '</div>';
        }

        return (
          '<article class="ep-q-card' + (focused ? ' is-focused' : '') + '" id="ep-q-' + esc(q.id) + '">' +
          '  <div class="ep-q-head">' +
          '    <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">' +
          '      <span class="badge badge-primary">' + esc(q.code) + '</span>' +
          '      <span class="badge">' + esc(q.topic) + '</span>' +
          '      <span class="badge ' + stBadgeCls + '">' + (st === 'lista' ? 'Lista ✓' : (st === 'repasar' ? 'A repasar' : 'Pendiente')) + '</span>' +
          '    </div>' +
          '    <button type="button" class="btn btn-ghost btn-sm" data-ep-open-guide="' + esc(q.guideId) + '">Ir al eje teórico →</button>' +
          '  </div>' +
          '  <h3 class="ep-q-prompt">' + esc(q.prompt) + '</h3>' +
          '  <div class="ep-q-work-grid">' +
          '    <div>' +
          '      <label for="draft-' + esc(q.id) + '" style="display:flex;justify-content:space-between;font-size:0.8rem;font-weight:700;margin-bottom:0.32rem;">' +
          '        <span>Tu borrador de respuesta</span>' +
          '        <span id="draft-saved-' + esc(q.id) + '" style="color:var(--ink-secondary);font-weight:600;">Autoguardado</span>' +
          '      </label>' +
          '      <textarea id="draft-' + esc(q.id) + '" class="ep-q-draft" data-ep-draft="' + esc(q.id) + '" placeholder="Escribí tu respuesta con tus palabras antes de mirar la guía modelo...">' + esc(draft) + '</textarea>' +
          '    </div>' +
          '    <div class="ep-rubric-box">' +
          '      <strong style="font-size:0.82rem;">Qué exige la consigna (rúbrica):</strong>' +
          '      <div class="ep-rubric-list">' + rubricHtml + '</div>' +
          '    </div>' +
          '  </div>' +
          '  <div class="ep-q-actions">' +
          '    <button type="button" class="btn ' + (revealed ? 'btn-secondary' : 'btn-primary') + ' btn-sm" data-ep-reveal="' + esc(q.id) + '">' +
          (revealed ? 'Ocultar respuesta modelo' : 'Ver respuesta modelo y trampa típica') +
          '    </button>' +
          '    <div class="chip-group">' +
          '      <button type="button" class="chip' + (st === 'pendiente' ? ' is-active' : '') + '" data-ep-qstatus="' + esc(q.id) + ':pendiente">Pendiente</button>' +
          '      <button type="button" class="chip' + (st === 'repasar' ? ' is-active' : '') + '" data-ep-qstatus="' + esc(q.id) + ':repasar">Repasar</button>' +
          '      <button type="button" class="chip' + (st === 'lista' ? ' is-active' : '') + '" data-ep-qstatus="' + esc(q.id) + ':lista">Lista ✓</button>' +
          '    </div>' +
          '  </div>' +
          answerHtml +
          '</article>'
        );
      }).join('') + '</div>';
    }

    return (
      '<section class="ep-q-panel">' +
      '  <div class="ep-q-toolbar">' +
      '    <div class="chip-group">' + setChips + '</div>' +
      '    <div class="chip-group">' + statusChips + '</div>' +
      '  </div>' +
      cardsHtml +
      '</section>'
    );
  }

  // =========================================================================
  // TAB 3: TALLERES INTERACTIVOS DE PARCIAL
  // =========================================================================
  function renderDrillsTab() {
    var drills = getData().drills || {};

    // Taller 1: Clasificador TGS 5 criterios
    var tgsCriteria = drills.tgsCriteria || [];
    var tgsSystems = drills.tgsSystems || [];
    var curSys = tgsSystems.filter(function (s) { return s.id === ui.tgsSysId; })[0] || tgsSystems[0];
    var sysChips = tgsSystems.map(function (s) {
      var chk = !!epState.tgsChecked[s.id];
      return (
        '<button type="button" class="chip' + (curSys && s.id === curSys.id ? ' is-active' : '') + '" data-ep-tgs-sys="' + esc(s.id) + '">' +
        esc(s.name.split('(')[0].trim()) + (chk ? ' ✓' : '') +
        '</button>'
      );
    }).join('');

    var tgsHtml = '';
    if (curSys) {
      var pickedMap = epState.tgsAnswers[curSys.id] || {};
      var checked = !!epState.tgsChecked[curSys.id];
      var tgsScore = 0;

      var rowsHtml = tgsCriteria.map(function (crit) {
        var val = pickedMap[crit.key] || null;
        var ok = val && val === curSys.expected[crit.key];
        if (checked && ok) tgsScore += 1;
        var rowCls = checked ? (ok ? ' is-ok' : ' is-fail') : '';
        var optBtns = crit.options.map(function (opt) {
          return (
            '<button type="button" class="chip' + (val === opt ? ' is-active' : '') + '" data-ep-tgs-crit="' + esc(crit.key) + '" data-ep-tgs-val="' + esc(opt) + '">' +
            esc(opt) +
            '</button>'
          );
        }).join('');

        return (
          '<div class="ep-tgs-row' + rowCls + '">' +
          '  <strong>' + esc(crit.label) + '</strong>' +
          '  <div class="chip-group">' + optBtns + '</div>' +
          (checked
            ? '<div class="ep-tgs-reason"><strong>' + (ok ? '✓ Correcto' : '✕ Esperado: ' + esc(curSys.expected[crit.key])) + ':</strong> ' + esc(curSys.reasons[crit.key]) + '</div>'
            : '') +
          '</div>'
        );
      }).join('');

      var pickedCount = tgsCriteria.filter(function (c) { return !!pickedMap[c.key]; }).length;
      tgsHtml =
        '<article class="ep-drill-card">' +
        '  <div class="ep-drill-head">' +
        '    <div>' +
        '      <h2>Taller 1 · Clasificador TGS de 5 Criterios (Entrena Set 1 · P6)</h2>' +
        '      <p>Clasificá el Sistema de Telefonía, el Sistema Respiratorio y dos sistemas extra con justificación automática.</p>' +
        '    </div>' +
        '    <span class="badge badge-primary">' + (checked ? tgsScore + ' / 5 correctos' : pickedCount + ' / 5 elegidos') + '</span>' +
        '  </div>' +
        '  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:0.65rem;">' +
        '    <div class="chip-group">' + sysChips + '</div>' +
        '    <button type="button" class="btn btn-ghost btn-sm" id="btn-ep-tgs-reset">Reiniciar sistema</button>' +
        '  </div>' +
        '  <div class="lab-status" style="margin-top:0.75rem;"><strong>' + esc(curSys.name) + ':</strong> ' + esc(curSys.note) + '</div>' +
        '  <div class="ep-tgs-grid">' + rowsHtml + '</div>' +
        '  <div style="margin-top:0.85rem;display:flex;align-items:center;gap:0.75rem;">' +
        '    <button type="button" class="btn btn-primary btn-sm" id="btn-ep-tgs-check"' + (pickedCount < tgsCriteria.length ? ' disabled' : '') + '>Corregir clasificación</button>' +
        (pickedCount < tgsCriteria.length ? '<span style="font-size:0.84rem;color:var(--ink-secondary);">Elegí los 5 criterios para habilitar la corrección.</span>' : '') +
        '  </div>' +
        '</article>';
    }

    // Taller 2: Armador de RF "Completo"
    var clauses = drills.rfCompleteClauses || [];
    var rfCorrectCount = 0;
    var rfListHtml = clauses.map(function (cl) {
      var picked = !!epState.rfPicked[cl.id];
      var rightDecision = picked === cl.required;
      if (epState.rfChecked && rightDecision) rfCorrectCount += 1;

      var cls = 'ep-rf-card';
      if (epState.rfChecked) {
        cls += rightDecision ? ' is-right' : ' is-wrong';
      } else if (picked) {
        cls += ' is-picked';
      }

      return (
        '<button type="button" class="' + cls + '" data-ep-rf-pick="' + esc(cl.id) + '">' +
        '  <div class="ep-rf-top">' +
        '    <span>' + esc(cl.text) + '</span>' +
        '    <span class="badge ' + (picked ? 'badge-primary' : '') + '">' + (picked ? 'Incluido ✓' : 'Omitido') + '</span>' +
        '  </div>' +
        (epState.rfChecked
          ? '<div style="font-size:0.8rem;line-height:1.4;color:var(--ink);"><strong>' + (rightDecision ? '✓ Decisión correcta' : '✕ Ojo') + ':</strong> ' + esc(cl.reason) + '</div>'
          : '') +
        '</button>'
      );
    }).join('');

    var rfDrillHtml =
      '<article class="ep-drill-card">' +
      '  <div class="ep-drill-head">' +
      '    <div>' +
      '      <h2>Taller 2 · Qué Documentar en un RF “Completo” (Entrena Set 3 · P4)</h2>' +
      '      <p>Marcá SOLO los elementos que deben documentarse en el análisis para considerar completo un Requerimiento Funcional y evitá las trampas de diseño técnico.</p>' +
      '    </div>' +
      '    <span class="badge ' + (epState.rfChecked && rfCorrectCount === clauses.length ? 'badge-success' : 'badge-primary') + '">' +
      (epState.rfChecked ? rfCorrectCount + ' / ' + clauses.length + ' aciertos' : clauses.filter(function (c) { return !!epState.rfPicked[c.id]; }).length + ' seleccionados') +
      '    </span>' +
      '  </div>' +
      '  <div class="ep-rf-list">' + rfListHtml + '</div>' +
      '  <div style="display:flex;flex-wrap:wrap;gap:0.6rem;">' +
      '    <button type="button" class="btn btn-primary btn-sm" id="btn-ep-rf-check">Evaluar mi plantilla RF</button>' +
      '    <button type="button" class="btn btn-ghost btn-sm" id="btn-ep-rf-reset">Reiniciar selección</button>' +
      '  </div>' +
      '</article>';

    // Taller 3A: Comparador interactivo de Formatos de Caso de Uso Completo (Set 1 P7)
    var uc = drills.useCaseFormats || {};
    var ucBodyHtml = '';
    if (ui.ucFormat === '1col') {
      ucBodyHtml =
        '<div class="ep-table-wrap">' +
        '  <table class="ep-table">' +
        '    <thead><tr><th>Escenario Principal · Formato 1 Columna (Narrativo secuencial)</th></tr></thead>' +
        '    <tbody>' + (uc.oneCol || []).map(function (st) { return '<tr><td>' + esc(st) + '</td></tr>'; }).join('') + '</tbody>' +
        '  </table>' +
        '</div>';
    } else {
      ucBodyHtml =
        '<div class="ep-table-wrap">' +
        '  <table class="ep-table">' +
        '    <thead><tr><th>Acciones del Actor</th><th>Responsabilidad del Sistema (Caja Negra)</th></tr></thead>' +
        '    <tbody>' + (uc.twoCol || []).map(function (row) {
          return '<tr><td>' + esc(row.actor) + '</td><td>' + esc(row.system) + '</td></tr>';
        }).join('') + '</tbody>' +
        '  </table>' +
        '</div>';
    }

    var ucDrillHtml =
      '<article class="ep-drill-card">' +
      '  <div class="ep-drill-head">' +
      '    <div>' +
      '      <h2>Taller 3 · Formatos de Caso de Uso Completo (Entrena Set 1 · P7)</h2>' +
      '      <p>Alterná el mismo contrato completo entre formato de 1 columna y de 2 columnas para observar la frontera Actor / Sistema.</p>' +
      '    </div>' +
      '    <div class="chip-group">' +
      '      <button type="button" class="chip' + (ui.ucFormat === '1col' ? ' is-active' : '') + '" data-ep-uc-fmt="1col">Formato 1 Columna</button>' +
      '      <button type="button" class="chip' + (ui.ucFormat === '2col' ? ' is-active' : '') + '" data-ep-uc-fmt="2col">Formato 2 Columnas</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="ep-uc-header-grid">' +
      '    <div class="ep-uc-meta-box"><strong>Caso de Uso:</strong> ' + esc(uc.title) + '<br><strong>Actores:</strong> ' + esc(uc.actor) + '</div>' +
      '    <div class="ep-uc-meta-box"><strong>Precondición:</strong> ' + esc(uc.pre) + '<br><strong>Postcondición:</strong> ' + esc(uc.post) + '</div>' +
      '  </div>' +
      ucBodyHtml +
      '  <div class="ep-uc-header-grid" style="margin-top:0.85rem;margin-bottom:0;">' +
      '    <div class="ep-uc-meta-box"><strong>Extensiones / Alternativos:</strong><br>' + esc(uc.extensions) + '</div>' +
      '    <div class="ep-uc-meta-box"><strong>Requisitos Especiales:</strong><br>' + esc(uc.specialReqs) + '</div>' +
      '  </div>' +
      '</article>';

    // Taller 4: Clasificador rápido FURPS+ (Set 2 P3)
    var furpsItems = drills.furpsItems || [];
    var furpsLetters = ['F', 'U', 'R', 'P', 'S', '+'];
    var furpsOk = 0;
    var furpsHtmlList = furpsItems.map(function (it) {
      var val = epState.furpsAnswers[it.id] || null;
      var ok = val === it.expected;
      if (epState.furpsChecked && ok) furpsOk += 1;
      var cls = 'ep-furps-row' + (epState.furpsChecked ? (ok ? ' is-ok' : ' is-fail') : '');
      var btns = furpsLetters.map(function (lt) {
        return '<button type="button" class="chip' + (val === lt ? ' is-active' : '') + '" data-ep-furps-id="' + esc(it.id) + '" data-ep-furps-val="' + lt + '">' + lt + '</button>';
      }).join('');

      return (
        '<div class="' + cls + '">' +
        '  <div class="ep-furps-top">' +
        '    <span style="font-size:0.9rem;font-weight:600;max-width:65ch;">' + esc(it.text) + '</span>' +
        '    <div class="chip-group">' + btns + '</div>' +
        '  </div>' +
        (epState.furpsChecked
          ? '<div style="font-size:0.83rem;color:var(--ink);"><strong>' + (ok ? '✓ Correcto' : '✕ Corresponde a ' + esc(it.expected)) + ':</strong> ' + esc(it.reason) + '</div>'
          : '') +
        '</div>'
      );
    }).join('');

    var furpsCountPicked = furpsItems.filter(function (it) { return !!epState.furpsAnswers[it.id]; }).length;
    var furpsDrillHtml =
      '<article class="ep-drill-card">' +
      '  <div class="ep-drill-head">' +
      '    <div>' +
      '      <h2>Taller 4 · Clasificador FURPS+ (Entrena Set 2 · P3)</h2>' +
      '      <p>Asigná cada requerimiento real a su letra exacta del modelo FURPS+ (F, U, R, P, S o +).</p>' +
      '    </div>' +
      '    <span class="badge badge-primary">' + (epState.furpsChecked ? furpsOk + ' / ' + furpsItems.length + ' correctos' : furpsCountPicked + ' / ' + furpsItems.length + ' asignados') + '</span>' +
      '  </div>' +
      '  <div class="ep-furps-list">' + furpsHtmlList + '</div>' +
      '  <div style="display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:0.9rem;">' +
      '    <button type="button" class="btn btn-primary btn-sm" id="btn-ep-furps-check"' + (furpsCountPicked < furpsItems.length ? ' disabled' : '') + '>Corregir FURPS+</button>' +
      '    <button type="button" class="btn btn-ghost btn-sm" id="btn-ep-furps-reset">Reiniciar FURPS+</button>' +
      '  </div>' +
      '</article>';

    return '<div class="ep-drills-stack">' + tgsHtml + rfDrillHtml + ucDrillHtml + furpsDrillHtml + '</div>';
  }

  // =========================================================================
  // RENDER SHELL
  // =========================================================================
  function render(tab, focusQ) {
    if (VALID_TABS.indexOf(tab) !== -1) {
      ui.tab = tab;
    }
    if (focusQ) {
      ui.focusQ = focusQ;
      ui.examSet = 'all';
      ui.statusFilter = 'all';
    }

    var data = getData();
    var guides = Array.isArray(data.guides) ? data.guides : [];
    var questions = Array.isArray(data.questions) ? data.questions : [];
    var readyCount = questions.filter(function (q) { return getQuestionStatus(q.id) === 'lista'; }).length;
    var tgsDone = (data.drills && Array.isArray(data.drills.tgsSystems) ? data.drills.tgsSystems : []).filter(function (s) {
      return !!epState.tgsChecked[s.id];
    }).length;

    var tabs = [
      { id: 'guide', kicker: 'Teoría orientada a examen', title: 'Guía por Ejes (5 bloques)', badge: epState.studiedGuides.length + '/' + guides.length + ' ejes' },
      { id: 'questions', kicker: 'Consignas verbatim', title: '19 Preguntas Reales de Parcial', badge: readyCount + '/' + questions.length + ' listas' },
      { id: 'drills', kicker: 'Práctica guiada', title: 'Talleres TGS, RF, CU y FURPS+', badge: tgsDone + '/4 sist. TGS' }
    ];

    var tabsHtml = tabs.map(function (t) {
      var act = ui.tab === t.id;
      return (
        '<a href="#exam-prep?tab=' + t.id + '" class="ep-tab' + (act ? ' is-active' : '') + '">' +
        '  <div class="ep-tab-top">' +
        '    <span class="ep-tab-kicker">' + esc(t.kicker) + '</span>' +
        '    <span class="ep-tab-badge">' + esc(t.badge) + '</span>' +
        '  </div>' +
        '  <span class="ep-tab-title">' + esc(t.title) + '</span>' +
        '</a>'
      );
    }).join('');

    var bodyHtml = '';
    if (ui.tab === 'guide') {
      bodyHtml = renderGuideTab();
    } else if (ui.tab === 'questions') {
      bodyHtml = renderQuestionsTab();
    } else {
      bodyHtml = renderDrillsTab();
    }

    return (
      '<section class="ep-hero">' +
      '  <div class="ep-hero-inner">' +
      '    <span class="hero-eyebrow">Preparación Integral de Parciales y Finales · 19 Preguntas Reales</span>' +
      '    <h1>Guía Completa de Parciales</h1>' +
      '    <p>Todo lo necesario para responder con solvencia las preguntas reales de examen: teoría estructurada en 5 ejes, ejemplos con justificación, trampas frecuentes, tus borradores guardados y talleres interactivos.</p>' +
      '  </div>' +
      '</section>' +
      '<nav class="ep-tabs" aria-label="Secciones de preparación de parciales">' + tabsHtml + '</nav>' +
      bodyHtml
    );
  }

  // =========================================================================
  // MOUNT & EVENT BINDING
  // =========================================================================
  function mount(container, tab, focusQ) {
    unmount();
    if (!container) return;
    if (VALID_TABS.indexOf(tab) !== -1) ui.tab = tab;
    if (focusQ) ui.focusQ = focusQ;

    function refresh() {
      container.innerHTML = render(ui.tab, null);
      mount(container, ui.tab, null);
    }

    if (ui.tab === 'guide') {
      var guides = (getData().guides || []);
      var guideBtns = container.querySelectorAll('[data-ep-guide]');
      for (var i = 0; i < guideBtns.length; i++) {
        guideBtns[i].addEventListener('click', function (ev) {
          ui.guideId = ev.currentTarget.getAttribute('data-ep-guide');
          refresh();
        });
      }

      var toggleGuideBtn = container.querySelector('#btn-ep-toggle-guide');
      if (toggleGuideBtn) {
        toggleGuideBtn.addEventListener('click', function () {
          var pos = epState.studiedGuides.indexOf(ui.guideId);
          if (pos === -1) epState.studiedGuides.push(ui.guideId);
          else epState.studiedGuides.splice(pos, 1);
          saveState();
          refresh();
        });
      }

      var prevBtn = container.querySelector('#btn-ep-prev-guide');
      if (prevBtn) {
        prevBtn.addEventListener('click', function () {
          for (var gi = 0; gi < guides.length; gi++) {
            if (guides[gi].id === ui.guideId && gi > 0) {
              ui.guideId = guides[gi - 1].id;
              refresh();
              break;
            }
          }
        });
      }

      var nextBtn = container.querySelector('#btn-ep-next-guide');
      if (nextBtn) {
        nextBtn.addEventListener('click', function () {
          for (var gi = 0; gi < guides.length; gi++) {
            if (guides[gi].id === ui.guideId && gi < guides.length - 1) {
              ui.guideId = guides[gi + 1].id;
              refresh();
              break;
            }
          }
        });
      }

      var lbHost = container.querySelector('#ep-lightbox-host');
      function closeLightbox() {
        if (lbHost) lbHost.innerHTML = '';
        if (activeKeyHandler && typeof document !== 'undefined' && typeof document.removeEventListener === 'function') {
          document.removeEventListener('keydown', activeKeyHandler);
        }
        activeKeyHandler = null;
      }

      var zoomBtns = container.querySelectorAll('[data-ep-zoom]');
      for (var z = 0; z < zoomBtns.length; z++) {
        zoomBtns[z].addEventListener('click', function (ev) {
          var key = ev.currentTarget.getAttribute('data-ep-zoom');
          var v = getVisuals()[key];
          if (!v || !lbHost) return;
          closeLightbox();
          var allowedAccents = ['primary', 'teal', 'violet', 'warning', 'success', 'danger'];
          var accent = allowedAccents.indexOf(v.accent) !== -1 ? v.accent : 'primary';
          var zoomSvg = String(v.svg || '').replace(/epv-/g, 'epv-lb-');
          lbHost.innerHTML =
            '<div class="ep-lightbox-backdrop" id="ep-lightbox-backdrop">' +
            '  <div class="ep-lightbox-dialog ep-visual-card" data-accent="' + accent + '" role="dialog" aria-modal="true" aria-label="' + esc(v.title) + '">' +
            '    <div class="ep-visual-head">' +
            '      <div class="ep-visual-meta">' +
            '        <span class="ep-visual-kicker">' + esc(v.kicker) + ' · Vista ampliada</span>' +
            '        <strong class="ep-visual-title">' + esc(v.title) + '</strong>' +
            '      </div>' +
            '      <button type="button" class="btn btn-secondary btn-sm" id="btn-ep-close-zoom" aria-label="Cerrar diagrama ampliado">Cerrar ✕</button>' +
            '    </div>' +
            '    <div class="ep-visual-stage ep-lightbox-stage">' + zoomSvg + '</div>' +
            (v.caption ? '    <p class="ep-visual-caption" style="margin:0;">' + esc(v.caption) + '</p>' : '') +
            '  </div>' +
            '</div>';

          var closeBtn = lbHost.querySelector('#btn-ep-close-zoom');
          if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

          var backdrop = lbHost.querySelector('#ep-lightbox-backdrop');
          if (backdrop) {
            backdrop.addEventListener('click', function (bev) {
              if (bev.target === backdrop) closeLightbox();
            });
          }

          if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
            activeKeyHandler = function (kev) {
              if (kev.key === 'Escape') {
                closeLightbox();
              }
            };
            document.addEventListener('keydown', activeKeyHandler);
          }
        });
      }
    } else if (ui.tab === 'questions') {
      var setBtns = container.querySelectorAll('[data-ep-set]');
      for (var s = 0; s < setBtns.length; s++) {
        setBtns[s].addEventListener('click', function (ev) {
          ui.examSet = ev.currentTarget.getAttribute('data-ep-set');
          ui.focusQ = null;
          refresh();
        });
      }

      var stFilterBtns = container.querySelectorAll('[data-ep-stfilter]');
      for (var sf = 0; sf < stFilterBtns.length; sf++) {
        stFilterBtns[sf].addEventListener('click', function (ev) {
          ui.statusFilter = ev.currentTarget.getAttribute('data-ep-stfilter');
          ui.focusQ = null;
          refresh();
        });
      }

      var draftAreas = container.querySelectorAll('[data-ep-draft]');
      for (var da = 0; da < draftAreas.length; da++) {
        draftAreas[da].addEventListener('input', function (ev) {
          var qid = ev.currentTarget.getAttribute('data-ep-draft');
          epState.qDrafts[qid] = ev.target.value;
          saveState();
          var savedEl = container.querySelector('#draft-saved-' + qid);
          if (savedEl) savedEl.textContent = 'Guardado ✓';
        });
      }

      var rubricBtns = container.querySelectorAll('[data-ep-rubric]');
      for (var rb = 0; rb < rubricBtns.length; rb++) {
        rubricBtns[rb].addEventListener('click', function (ev) {
          var key = ev.currentTarget.getAttribute('data-ep-rubric');
          epState.qRubric[key] = !epState.qRubric[key];
          saveState();
          refresh();
        });
      }

      var revealBtns = container.querySelectorAll('[data-ep-reveal]');
      for (var rv = 0; rv < revealBtns.length; rv++) {
        revealBtns[rv].addEventListener('click', function (ev) {
          var qid = ev.currentTarget.getAttribute('data-ep-reveal');
          epState.qRevealed[qid] = !epState.qRevealed[qid];
          saveState();
          refresh();
        });
      }

      var qStatusBtns = container.querySelectorAll('[data-ep-qstatus]');
      for (var qs = 0; qs < qStatusBtns.length; qs++) {
        qStatusBtns[qs].addEventListener('click', function (ev) {
          var parts = ev.currentTarget.getAttribute('data-ep-qstatus').split(':');
          epState.qStatus[parts[0]] = parts[1];
          saveState();
          refresh();
        });
      }

      var openGuideBtns = container.querySelectorAll('[data-ep-open-guide]');
      for (var og = 0; og < openGuideBtns.length; og++) {
        openGuideBtns[og].addEventListener('click', function (ev) {
          ui.guideId = ev.currentTarget.getAttribute('data-ep-open-guide');
          ui.tab = 'guide';
          ui.focusQ = null;
          refresh();
        });
      }

      if (ui.focusQ) {
        var targetCard = container.querySelector('#ep-q-' + ui.focusQ);
        if (targetCard && typeof targetCard.scrollIntoView === 'function') {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    } else if (ui.tab === 'drills') {
      // Taller 1: TGS
      var sysBtns = container.querySelectorAll('[data-ep-tgs-sys]');
      for (var sb = 0; sb < sysBtns.length; sb++) {
        sysBtns[sb].addEventListener('click', function (ev) {
          ui.tgsSysId = ev.currentTarget.getAttribute('data-ep-tgs-sys');
          refresh();
        });
      }

      var critBtns = container.querySelectorAll('[data-ep-tgs-crit]');
      for (var cb = 0; cb < critBtns.length; cb++) {
        critBtns[cb].addEventListener('click', function (ev) {
          var crit = ev.currentTarget.getAttribute('data-ep-tgs-crit');
          var val = ev.currentTarget.getAttribute('data-ep-tgs-val');
          if (!epState.tgsAnswers[ui.tgsSysId]) epState.tgsAnswers[ui.tgsSysId] = {};
          epState.tgsAnswers[ui.tgsSysId][crit] = val;
          epState.tgsChecked[ui.tgsSysId] = false;
          saveState();
          refresh();
        });
      }

      var tgsCheckBtn = container.querySelector('#btn-ep-tgs-check');
      if (tgsCheckBtn) {
        tgsCheckBtn.addEventListener('click', function () {
          epState.tgsChecked[ui.tgsSysId] = true;
          saveState();
          refresh();
        });
      }

      var tgsResetBtn = container.querySelector('#btn-ep-tgs-reset');
      if (tgsResetBtn) {
        tgsResetBtn.addEventListener('click', function () {
          epState.tgsAnswers[ui.tgsSysId] = {};
          epState.tgsChecked[ui.tgsSysId] = false;
          saveState();
          refresh();
        });
      }

      // Taller 2: RF Completo
      var rfBtns = container.querySelectorAll('[data-ep-rf-pick]');
      for (var rf = 0; rf < rfBtns.length; rf++) {
        rfBtns[rf].addEventListener('click', function (ev) {
          var cid = ev.currentTarget.getAttribute('data-ep-rf-pick');
          epState.rfPicked[cid] = !epState.rfPicked[cid];
          epState.rfChecked = false;
          saveState();
          refresh();
        });
      }

      var rfCheckBtn = container.querySelector('#btn-ep-rf-check');
      if (rfCheckBtn) {
        rfCheckBtn.addEventListener('click', function () {
          epState.rfChecked = true;
          saveState();
          refresh();
        });
      }

      var rfResetBtn = container.querySelector('#btn-ep-rf-reset');
      if (rfResetBtn) {
        rfResetBtn.addEventListener('click', function () {
          epState.rfPicked = {};
          epState.rfChecked = false;
          saveState();
          refresh();
        });
      }

      // Taller 3: Formato Caso de Uso
      var ucBtns = container.querySelectorAll('[data-ep-uc-fmt]');
      for (var uc = 0; uc < ucBtns.length; uc++) {
        ucBtns[uc].addEventListener('click', function (ev) {
          ui.ucFormat = ev.currentTarget.getAttribute('data-ep-uc-fmt');
          refresh();
        });
      }

      // Taller 4: FURPS+
      var furpsBtns = container.querySelectorAll('[data-ep-furps-id]');
      for (var fb = 0; fb < furpsBtns.length; fb++) {
        furpsBtns[fb].addEventListener('click', function (ev) {
          var fid = ev.currentTarget.getAttribute('data-ep-furps-id');
          var fval = ev.currentTarget.getAttribute('data-ep-furps-val');
          epState.furpsAnswers[fid] = fval;
          epState.furpsChecked = false;
          saveState();
          refresh();
        });
      }

      var furpsCheckBtn = container.querySelector('#btn-ep-furps-check');
      if (furpsCheckBtn) {
        furpsCheckBtn.addEventListener('click', function () {
          epState.furpsChecked = true;
          saveState();
          refresh();
        });
      }

      var furpsResetBtn = container.querySelector('#btn-ep-furps-reset');
      if (furpsResetBtn) {
        furpsResetBtn.addEventListener('click', function () {
          epState.furpsAnswers = {};
          epState.furpsChecked = false;
          saveState();
          refresh();
        });
      }
    }
  }

  global.ADS_EXAM_PREP = {
    validTabs: VALID_TABS,
    render: render,
    mount: mount,
    unmount: unmount
  };
})(typeof window !== 'undefined' ? window : globalThis);
