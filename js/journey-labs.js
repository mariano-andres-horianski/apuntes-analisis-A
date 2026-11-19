(function (global) {
  'use strict';

  var activeIntervals = [];
  var activeTimeouts = [];

  function registerInterval(fn, ms) {
    var id = setInterval(fn, ms);
    activeIntervals.push(id);
    return id;
  }

  function registerTimeout(fn, ms) {
    var id = setTimeout(fn, ms);
    activeTimeouts.push(id);
    return id;
  }

  function unmountLabs() {
    while (activeIntervals.length) {
      clearInterval(activeIntervals.pop());
    }
    while (activeTimeouts.length) {
      clearTimeout(activeTimeouts.pop());
    }
  }

  function esc(str) {
    return String(str === null || str === undefined ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // =========================================================================
  // LAB 1: Sistema Abierto, Entropía, Homeostasis y Especialización (U1)
  // =========================================================================
  function renderLab1() {
    return (
      '<div class="lab-stage">' +
      '  <div class="lab-controls">' +
      '    <button type="button" class="btn btn-secondary btn-sm" id="l1-btn-datos">Enviar Datos Aislados</button>' +
      '    <button type="button" class="btn btn-primary btn-sm" id="l1-btn-info">Procesar Información Estructurada</button>' +
      '    <button type="button" class="btn btn-ghost btn-sm" id="l1-btn-perturb">Simular Perturbación</button>' +
      '    <label class="lab-switch"><input type="checkbox" id="l1-chk-fb" checked> <span>Retroalimentación / Homeostasis</span></label>' +
      '  </div>' +
      '  <div class="lab-slider-row">' +
      '    <label for="l1-spec"><strong>Especialización del sistema:</strong> <span id="l1-spec-val">35%</span></label>' +
      '    <input type="range" id="l1-spec" min="10" max="95" value="35">' +
      '  </div>' +
      '  <div class="lab-svg-wrap" id="l1-svg-box">' +
      '    <svg viewBox="0 0 860 272" role="img" aria-label="Simulación animada de sistema abierto y retroalimentación">' +
      '      <defs>' +
      '        <marker id="lab-arr-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path></marker>' +
      '        <marker id="lab-arr-1t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="var(--teal)"></path></marker>' +
      '      </defs>' +
      '      <rect x="18" y="14" width="824" height="244" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="6 4"></rect>' +
      '      <text x="34" y="36" font-size="11.5" font-weight="700" fill="var(--ink-secondary)">ENTORNO / SUPRASISTEMA</text>' +
      '      <g id="l1-system-frame">' +
      '        <rect id="l1-border-rect" x="150" y="48" width="560" height="126" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2.2"></rect>' +
      '        <text x="430" y="66" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)" letter-spacing="0.05em">SISTEMA (FRONTERA)</text>' +
      '        <rect x="172" y="78" width="144" height="74" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
      '        <text x="244" y="109" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">ENTRADAS</text>' +
      '        <text id="l1-in-txt" x="244" y="131" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Señales del entorno</text>' +
      '        <line class="anim-flow" x1="316" y1="115" x2="355" y2="115" stroke="var(--primary)" stroke-width="2.5" marker-end="url(#lab-arr-1)"></line>' +
      '        <rect id="l1-conv-rect" x="358" y="78" width="144" height="74" rx="10" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
      '        <text x="430" y="109" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--teal)">CONVERSIÓN</text>' +
      '        <text id="l1-conv-txt" x="430" y="131" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Agrega valor</text>' +
      '        <line class="anim-flow" x1="502" y1="115" x2="541" y2="115" stroke="var(--primary)" stroke-width="2.5" marker-end="url(#lab-arr-1)"></line>' +
      '        <rect id="l1-out-rect" x="544" y="78" width="144" height="74" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
      '        <text x="616" y="109" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--success)">SALIDAS</text>' +
      '        <text id="l1-out-txt" x="616" y="131" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Resultado útil</text>' +
      '      </g>' +
      '      <line id="l1-in-arrow" class="anim-flow" x1="36" y1="115" x2="169" y2="115" stroke="var(--primary)" stroke-width="2.5" marker-end="url(#lab-arr-1)"></line>' +
      '      <text x="92" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-secondary)">Del entorno</text>' +
      '      <line id="l1-out-arrow" class="anim-flow" x1="688" y1="115" x2="821" y2="115" stroke="var(--primary)" stroke-width="2.5" marker-end="url(#lab-arr-1)"></line>' +
      '      <text x="768" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink-secondary)">Al entorno</text>' +
      '      <g id="l1-fb-path">' +
      '        <path class="anim-flow l1-fb-line" d="M 768 115 L 768 216 L 558 216" fill="none" stroke="var(--teal)" stroke-width="2.6" stroke-linejoin="round" marker-end="url(#lab-arr-1t)"></path>' +
      '        <circle cx="768" cy="115" r="4.2" fill="var(--teal)"></circle>' +
      '        <path class="anim-flow l1-fb-line" d="M 305 216 L 92 216 L 92 119" fill="none" stroke="var(--teal)" stroke-width="2.6" stroke-linejoin="round" marker-end="url(#lab-arr-1t)"></path>' +
      '      </g>' +
      '      <rect x="305" y="198" width="250" height="36" rx="18" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
      '      <text id="l1-fb-txt" x="430" y="220" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--teal)">Retroalimentación activa</text>' +
      '    </svg>' +
      '  </div>' +
      '  <div class="lab-meters">' +
      '    <div class="lab-meter">' +
      '      <div class="lab-meter-head"><span>Nivel de Entropía (desorden)</span><strong id="l1-ent-val">30%</strong></div>' +
      '      <div class="progress-track"><div class="progress-fill" id="l1-ent-bar" style="width:30%;background:var(--warning);"></div></div>' +
      '    </div>' +
      '    <div class="lab-meter">' +
      '      <div class="lab-meter-head"><span>Adaptabilidad al cambio</span><strong id="l1-adp-val">65%</strong></div>' +
      '      <div class="progress-track"><div class="progress-fill" id="l1-adp-bar" style="width:65%;background:var(--success);"></div></div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="lab-status" id="l1-status">Sistema abierto estable. Probá enviar datos o simular una perturbación del entorno.</div>' +
      '</div>'
    );
  }

  function mountLab1(container) {
    var entropy = 30;
    var spec = 35;
    var fbOn = true;

    var entVal = container.querySelector('#l1-ent-val');
    var entBar = container.querySelector('#l1-ent-bar');
    var adpVal = container.querySelector('#l1-adp-val');
    var adpBar = container.querySelector('#l1-adp-bar');
    var specVal = container.querySelector('#l1-spec-val');
    var statusEl = container.querySelector('#l1-status');
    var inTxt = container.querySelector('#l1-in-txt');
    var outTxt = container.querySelector('#l1-out-txt');
    var fbPath = container.querySelector('#l1-fb-path');
    var fbLines = container.querySelectorAll('.l1-fb-line');
    var fbTxt = container.querySelector('#l1-fb-txt');
    var frame = container.querySelector('#l1-system-frame');

    function updateUI(msg) {
      entropy = Math.max(8, Math.min(96, entropy));
      var adapt = Math.max(5, Math.min(95, 100 - spec));
      entVal.textContent = entropy + '%';
      entBar.style.width = entropy + '%';
      entBar.style.background = entropy >= 65 ? 'var(--danger)' : (entropy >= 35 ? 'var(--warning)' : 'var(--success)');
      adpVal.textContent = adapt + '%';
      adpBar.style.width = adapt + '%';
      adpBar.style.background = adapt <= 30 ? 'var(--danger)' : (adapt <= 55 ? 'var(--warning)' : 'var(--success)');
      specVal.textContent = spec + '%';
      fbPath.style.opacity = fbOn ? '1' : '0.22';
      for (var i = 0; i < fbLines.length; i++) {
        fbLines[i].style.animationPlayState = fbOn ? 'running' : 'paused';
      }
      fbTxt.textContent = fbOn ? 'Retroalimentación activa' : 'Retroalimentación apagada';
      if (msg) statusEl.textContent = msg;
    }

    container.querySelector('#l1-btn-datos').addEventListener('click', function () {
      entropy += 22;
      inTxt.textContent = 'Símbolos sin contexto';
      outTxt.textContent = 'Salida ambigua';
      updateUI('Los datos aislados sin procesamiento ni contexto suben la entropía e incertidumbre.');
    });

    container.querySelector('#l1-btn-info').addEventListener('click', function () {
      entropy -= 25;
      inTxt.textContent = 'Datos validados';
      outTxt.textContent = 'Información útil';
      updateUI('Información estructurada (con significado, vigencia y validez) reduce la entropía del sistema.');
    });

    container.querySelector('#l1-btn-perturb').addEventListener('click', function () {
      frame.classList.remove('anim-shake');
      void frame.offsetWidth;
      frame.classList.add('anim-shake');

      if (fbOn) {
        var extraWear = spec > 70 ? 15 : 5;
        entropy = Math.min(90, entropy + 28);
        updateUI('Perturbación detectada: la retroalimentación está ajustando entradas para recuperar homeostasis...');
        registerTimeout(function () {
          entropy = Math.max(15, entropy - (26 - extraWear / 2));
          outTxt.textContent = spec > 70 ? 'Equilibrio lento' : 'Equilibrio restaurado';
          updateUI(spec > 70
            ? 'Equilibrio parcialmente recuperado: al ser tan especializado (' + spec + '%), le cuesta adaptarse.'
            : 'Homeostasis lograda: el lazo de retroalimentación estabilizó el sistema.');
        }, 750);
      } else {
        entropy += 32;
        outTxt.textContent = 'Desvío sin control';
        updateUI('Sin retroalimentación el sistema no corrige sus entradas: la entropía sigue creciendo.');
      }
    });

    container.querySelector('#l1-chk-fb').addEventListener('change', function (ev) {
      fbOn = !!ev.target.checked;
      updateUI(fbOn ? 'Retroalimentación encendida: el sistema ahora observa sus salidas.' : 'Retroalimentación desactivada: modo abierto sin autorregulación.');
    });

    container.querySelector('#l1-spec').addEventListener('input', function (ev) {
      spec = Number(ev.target.value);
      updateUI(spec >= 75
        ? 'Principio 1 de sistemas automatizados: a mayor especialización, menor adaptabilidad ante cambios.'
        : 'Especialización moderada: conserva margen para adaptarse a nuevas reglas.');
    });

    updateUI();
  }

  // =========================================================================
  // LAB 2: Separar el QUÉ del CÓMO y Product-Market Fit (U1)
  // =========================================================================
  function renderLab2() {
    return (
      '<div class="lab-stage">' +
      '  <div class="lab-controls">' +
      '    <button type="button" class="btn btn-primary btn-sm" id="l2-btn-mode">Modo actual: Caja Negra (sin tech)</button>' +
      '    <button type="button" class="btn btn-secondary btn-sm" id="l2-btn-platform">Cambiar tecnología (Web → Móvil)</button>' +
      '    <button type="button" class="btn btn-secondary btn-sm" id="l2-btn-discovery">Hacer Discovery primero</button>' +
      '    <button type="button" class="btn btn-ghost btn-sm" id="l2-btn-skip">Saltar directo a programar</button>' +
      '  </div>' +
      '  <div class="lab-svg-wrap">' +
      '    <svg viewBox="0 0 860 250" role="img" aria-label="Separación entre Problem Space y Solution Space">' +
      '      <defs>' +
      '        <marker id="lab-arr-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="var(--success)"></path></marker>' +
      '        <marker id="lab-arr-2d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="var(--danger)"></path></marker>' +
      '      </defs>' +
      '      <g id="l2-prob-group">' +
      '        <rect id="l2-prob-box" x="20" y="24" width="286" height="196" rx="14" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="2.2"></rect>' +
      '        <text x="38" y="52" font-size="11.5" font-weight="700" fill="var(--violet)">PROBLEM SPACE (EL QUÉ)</text>' +
      '        <text x="38" y="76" font-size="14" font-weight="700" fill="var(--ink)">Documento de Requisitos</text>' +
      '        <text id="l2-req-l1" x="38" y="106" font-size="11.5" fill="var(--ink-secondary)">• El cliente consulta su saldo</text>' +
      '        <text id="l2-req-l2" x="38" y="128" font-size="11.5" fill="var(--ink-secondary)">• Sin mencionar BD ni lenguaje</text>' +
      '        <text id="l2-req-badge" x="38" y="196" font-size="12" font-weight="700" fill="var(--success)">✓ Mantenible e intacto</text>' +
      '      </g>' +
      '      <line id="l2-bridge-left" class="anim-flow" x1="306" y1="122" x2="357" y2="122" stroke="var(--success)" stroke-width="2.5" marker-end="url(#lab-arr-2)"></line>' +
      '      <line id="l2-bridge-right" class="anim-flow" x1="500" y1="122" x2="551" y2="122" stroke="var(--success)" stroke-width="2.5" marker-end="url(#lab-arr-2)"></line>' +
      '      <g id="l2-broken-mark" opacity="0">' +
      '        <circle cx="430" cy="122" r="13" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="1.8"></circle>' +
      '        <text x="430" y="127" text-anchor="middle" font-size="13" font-weight="700" fill="var(--danger)">✕</text>' +
      '      </g>' +
      '      <g id="l2-pmf-group" transform="translate(0, 0)">' +
      '        <rect id="l2-pmf-box" x="360" y="84" width="140" height="76" rx="12" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect>' +
      '        <text x="430" y="108" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Product-</text>' +
      '        <text x="430" y="125" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Market Fit</text>' +
      '        <text id="l2-pmf-txt" x="430" y="146" text-anchor="middle" font-size="11" font-weight="600" fill="var(--success)">Alineado</text>' +
      '      </g>' +
      '      <rect id="l2-sol-box" x="554" y="24" width="286" height="196" rx="14" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2.2"></rect>' +
      '      <text x="572" y="52" font-size="11.5" font-weight="700" fill="var(--primary)">SOLUTION SPACE (EL CÓMO)</text>' +
      '      <text x="572" y="76" font-size="14" font-weight="700" fill="var(--ink)">Diseño e Implementación</text>' +
      '      <text id="l2-sol-l1" x="572" y="106" font-size="11.5" fill="var(--ink-secondary)">Plataforma: Web + SQL</text>' +
      '      <text id="l2-sol-l2" x="572" y="128" font-size="11.5" fill="var(--ink-secondary)">Arquitectura en capas</text>' +
      '      <text id="l2-sol-badge" x="572" y="196" font-size="12" font-weight="700" fill="var(--primary)">Construye lo validado</text>' +
      '    </svg>' +
      '  </div>' +
      '  <div class="lab-status" id="l2-status">Requisitos aislados en Caja Negra: el QUÉ no depende de decisiones tecnológicas.</div>' +
      '</div>'
    );
  }

  function mountLab2(container) {
    var blackBox = true;
    var mobile = false;
    var btnMode = container.querySelector('#l2-btn-mode');
    var reqL2 = container.querySelector('#l2-req-l2');
    var reqBadge = container.querySelector('#l2-req-badge');
    var probGroup = container.querySelector('#l2-prob-group');
    var probBox = container.querySelector('#l2-prob-box');
    var solL1 = container.querySelector('#l2-sol-l1');
    var solBadge = container.querySelector('#l2-sol-badge');
    var pmfGroup = container.querySelector('#l2-pmf-group');
    var pmfBox = container.querySelector('#l2-pmf-box');
    var pmfTxt = container.querySelector('#l2-pmf-txt');
    var bridgeLeft = container.querySelector('#l2-bridge-left');
    var bridgeRight = container.querySelector('#l2-bridge-right');
    var brokenMark = container.querySelector('#l2-broken-mark');
    var statusEl = container.querySelector('#l2-status');

    function setBridgeState(aligned) {
      pmfGroup.setAttribute('transform', aligned ? 'translate(0, 0)' : 'translate(0, 62)');
      pmfBox.setAttribute('fill', aligned ? 'var(--success-soft)' : 'var(--danger-soft)');
      pmfBox.setAttribute('stroke', aligned ? 'var(--success)' : 'var(--danger)');
      brokenMark.setAttribute('opacity', aligned ? '0' : '1');
      var arrows = [bridgeLeft, bridgeRight];
      for (var i = 0; i < arrows.length; i++) {
        arrows[i].setAttribute('stroke', aligned ? 'var(--success)' : 'var(--danger)');
        arrows[i].setAttribute('marker-end', aligned ? 'url(#lab-arr-2)' : 'url(#lab-arr-2d)');
        arrows[i].style.opacity = aligned ? '1' : '0.45';
        arrows[i].style.animationPlayState = aligned ? 'running' : 'paused';
      }
    }

    btnMode.addEventListener('click', function () {
      blackBox = !blackBox;
      btnMode.textContent = blackBox ? 'Modo actual: Caja Negra (sin tech)' : 'Modo actual: Tech mezclada en reqs.';
      reqL2.textContent = blackBox ? '• Sin mencionar BD ni lenguaje' : '• “Usar tabla SQL en pantalla Web”';
      reqBadge.textContent = blackBox ? '✓ Mantenible e intacto' : '⚠ Acoplado al CÓMO';
      reqBadge.setAttribute('fill', blackBox ? 'var(--success)' : 'var(--warning)');
      statusEl.textContent = blackBox
        ? 'Bien: el análisis describe el problema como caja negra.'
        : 'Riesgo: mezclaste detalles de implementación dentro del Espacio del Problema.';
    });

    container.querySelector('#l2-btn-platform').addEventListener('click', function () {
      mobile = !mobile;
      solL1.textContent = mobile ? 'Plataforma: App Móvil + NoSQL' : 'Plataforma: Web + SQL';
      if (blackBox) {
        probBox.setAttribute('stroke', 'var(--success)');
        reqBadge.textContent = '✓ Requisitos intactos';
        reqBadge.setAttribute('fill', 'var(--success)');
        statusEl.textContent = 'Cambió la tecnología, pero los requisitos como Caja Negra sobrevivieron sin romperse.';
      } else {
        probGroup.classList.remove('anim-shake');
        void probGroup.offsetWidth;
        probGroup.classList.add('anim-shake');
        probBox.setAttribute('stroke', 'var(--danger)');
        reqBadge.textContent = '✕ Documentación rota';
        reqBadge.setAttribute('fill', 'var(--danger)');
        statusEl.textContent = 'Al haber mezclado Web/SQL en los requisitos, el cambio de plataforma dejó obsoleta tu documentación.';
      }
    });

    container.querySelector('#l2-btn-discovery').addEventListener('click', function () {
      setBridgeState(true);
      pmfTxt.textContent = '✓ Market Fit alto';
      pmfTxt.setAttribute('fill', 'var(--success)');
      solBadge.textContent = 'Resuelve necesidad real';
      solBadge.setAttribute('fill', 'var(--success)');
      statusEl.textContent = 'Con Product Discovery primero, la solución construida alinea con las necesidades reales del mercado.';
    });

    container.querySelector('#l2-btn-skip').addEventListener('click', function () {
      setBridgeState(false);
      pmfTxt.textContent = '✕ Desalineado';
      pmfTxt.setAttribute('fill', 'var(--danger)');
      solBadge.textContent = 'Producto equivocado';
      solBadge.setAttribute('fill', 'var(--danger)');
      statusEl.textContent = 'Saltar directo a entregar sin research construye un software que nadie necesita (fracaso de Market Fit).';
    });
  }

  // =========================================================================
  // LAB 3: Modelo 3P+A y Reproductor Animado de Ciclos (U2)
  // =========================================================================
  function renderLab3() {
    return (
      '<div class="lab-dual-grid">' +
      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel A · Cimiento 3P+A</div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l3-arch-ok">Cambio con Arq. Sólida</button>' +
      '      <button type="button" class="btn btn-danger-ghost btn-sm" id="l3-arch-weak">Cambio con Arq. Débil</button>' +
      '    </div>' +
      '    <div class="lab-svg-wrap">' +
      '      <svg viewBox="0 0 420 230" role="img" aria-label="Estabilidad del modelo 3P+A frente a cambios">' +
      '        <g id="l3-pillars">' +
      '          <rect x="28" y="28" width="110" height="96" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>' +
      '          <text x="83" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">PROYECTO</text>' +
      '          <text x="83" y="88" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Plan y control</text>' +
      '          <rect x="154" y="28" width="110" height="96" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
      '          <text x="209" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--violet)">PROCESO</text>' +
      '          <text x="209" y="88" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Marco de tareas</text>' +
      '          <rect x="280" y="28" width="110" height="96" rx="10" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.8"></rect>' +
      '          <text x="335" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--warning)">PRODUCTO</text>' +
      '          <text x="335" y="88" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Alcance y valor</text>' +
      '        </g>' +
      '        <rect id="l3-arch-base" x="24" y="142" width="372" height="64" rx="12" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2.2"></rect>' +
      '        <text id="l3-arch-txt" x="210" y="170" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--teal)">ARQUITECTURA (Cimiento Base)</text>' +
      '        <text id="l3-arch-sub" x="210" y="191" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Soporta los componentes ante cambios</text>' +
      '      </svg>' +
      '    </div>' +
      '    <div class="lab-status" id="l3-arch-status">La arquitectura es inherente a todo proyecto y define su viabilidad ante cambios.</div>' +
      '  </div>' +

      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel B · Reproductor de Ciclos</div>' +
      '    <div class="chip-group" style="margin-bottom:0.65rem;">' +
      '      <button type="button" class="chip is-active" data-l3-cycle="cascada">Cascada</button>' +
      '      <button type="button" class="chip" data-l3-cycle="thebox">The Box (7)</button>' +
      '      <button type="button" class="chip" data-l3-cycle="lean">Lean (7)</button>' +
      '      <button type="button" class="chip" data-l3-cycle="diamante">Doble Diamante</button>' +
      '    </div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l3-play">▶ Reproducir</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" id="l3-step">Paso siguiente →</button>' +
      '    </div>' +
      '    <div class="lab-cycle-track" id="l3-cycle-track"></div>' +
      '    <div class="lab-svg-wrap lab-cycle-stage-wrap">' +
      '      <svg id="l3-cycle-svg" viewBox="0 0 420 210" role="img" aria-label="Ilustración animada de la etapa actual del ciclo de vida"></svg>' +
      '    </div>' +
      '    <div class="lab-status" id="l3-cycle-desc"></div>' +
      '  </div>' +
      '</div>'
    );
  }

  function mountLab3(container) {
    var pillars = container.querySelector('#l3-pillars');
    var base = container.querySelector('#l3-arch-base');
    var archTxt = container.querySelector('#l3-arch-txt');
    var archSub = container.querySelector('#l3-arch-sub');
    var archStatus = container.querySelector('#l3-arch-status');

    container.querySelector('#l3-arch-ok').addEventListener('click', function () {
      pillars.setAttribute('transform', 'rotate(0)');
      base.setAttribute('fill', 'var(--teal-soft)');
      base.setAttribute('stroke', 'var(--teal)');
      archTxt.textContent = 'ARQUITECTURA SÓLIDA';
      archSub.textContent = 'Absorbe el cambio sin colapsar';
      archStatus.textContent = 'Con una arquitectura sólida, proyecto, proceso y producto evolucionan de manera controlada.';
    });

    container.querySelector('#l3-arch-weak').addEventListener('click', function () {
      pillars.setAttribute('transform', 'translate(14, 10) rotate(5 210 100)');
      base.setAttribute('fill', 'var(--danger-soft)');
      base.setAttribute('stroke', 'var(--danger)');
      archTxt.textContent = '¡ARQUITECTURA DÉBIL!';
      archSub.textContent = 'El producto colapsa frente a un cambio';
      archStatus.textContent = 'Si la arquitectura es débil, modificar un requisito desestabiliza costos, tiempos y el producto completo.';
    });

    var toneMap = {
      primary: { accent: 'var(--primary)', soft: 'var(--primary-soft)' },
      teal: { accent: 'var(--teal)', soft: 'var(--teal-soft)' },
      violet: { accent: 'var(--violet)', soft: 'var(--violet-soft)' },
      warning: { accent: 'var(--warning)', soft: 'var(--warning-soft)' },
      success: { accent: 'var(--success)', soft: 'var(--success-soft)' },
      danger: { accent: 'var(--danger)', soft: 'var(--danger-soft)' }
    };

    function renderL3StageArt(artKey, accent, soft) {
      switch (artKey) {
        case 'clipboard':
          return (
            '<rect x="20" y="18" width="40" height="48" rx="6" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2"></rect>' +
            '<rect x="30" y="13" width="20" height="9" rx="3" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.6"></rect>' +
            '<path d="M 27 33 L 30 36 L 36 30" fill="none" stroke="var(--success)" stroke-width="2" stroke-linecap="round"></path>' +
            '<line x1="40" y1="34" x2="53" y2="34" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"></line>' +
            '<path d="M 27 44 L 30 47 L 36 41" fill="none" stroke="var(--success)" stroke-width="2" stroke-linecap="round"></path>' +
            '<line x1="40" y1="45" x2="53" y2="45" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="27" y1="55" x2="53" y2="55" stroke="var(--border-strong)" stroke-width="2" stroke-linecap="round"></line>'
          );
        case 'magnifier':
          return (
            '<rect x="16" y="20" width="34" height="42" rx="5" fill="var(--surface-elevated)" stroke="var(--border-strong)" stroke-width="1.8"></rect>' +
            '<line x1="23" y1="30" x2="43" y2="30" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="23" y1="39" x2="39" y2="39" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="23" y1="48" x2="36" y2="48" stroke="var(--border-strong)" stroke-width="2" stroke-linecap="round"></line>' +
            '<circle cx="47" cy="41" r="14" fill="' + soft + '" stroke="' + accent + '" stroke-width="2.4"></circle>' +
            '<line x1="57" y1="51" x2="66" y2="60" stroke="' + accent + '" stroke-width="3.2" stroke-linecap="round"></line>'
          );
        case 'blueprint':
          return (
            '<rect x="16" y="18" width="48" height="44" rx="6" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="1.8"></rect>' +
            '<rect x="22" y="24" width="36" height="10" rx="3" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.4"></rect>' +
            '<rect x="22" y="42" width="15" height="14" rx="3" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.4"></rect>' +
            '<rect x="43" y="42" width="15" height="14" rx="3" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.4"></rect>' +
            '<line x1="30" y1="34" x2="30" y2="42" stroke="' + accent + '" stroke-width="1.6"></line>' +
            '<line x1="50" y1="34" x2="50" y2="42" stroke="' + accent + '" stroke-width="1.6"></line>'
          );
        case 'code':
          return (
            '<rect x="15" y="20" width="50" height="40" rx="6" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2"></rect>' +
            '<line x1="15" y1="30" x2="65" y2="30" stroke="' + accent + '" stroke-width="1.4"></line>' +
            '<circle cx="22" cy="25" r="2" fill="var(--danger)"></circle>' +
            '<circle cx="28" cy="25" r="2" fill="var(--warning)"></circle>' +
            '<circle cx="34" cy="25" r="2" fill="var(--success)"></circle>' +
            '<polyline points="30,38 23,44 30,50" fill="none" stroke="' + accent + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></polyline>' +
            '<polyline points="50,38 57,44 50,50" fill="none" stroke="' + accent + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></polyline>' +
            '<line x1="43" y1="37" x2="37" y2="51" stroke="var(--teal)" stroke-width="2.2" stroke-linecap="round"></line>'
          );
        case 'shield_warn':
          return (
            '<path d="M 40 16 L 60 24 L 60 41 C 60 53 49 61 40 65 C 31 61 20 53 20 41 L 20 24 Z" fill="' + soft + '" stroke="' + accent + '" stroke-width="2.2" stroke-linejoin="round"></path>' +
            '<line x1="40" y1="30" x2="40" y2="45" stroke="' + accent + '" stroke-width="3" stroke-linecap="round"></line>' +
            '<circle cx="40" cy="53" r="2.2" fill="' + accent + '"></circle>'
          );
        case 'target_bulb':
          return (
            '<circle cx="40" cy="42" r="22" fill="none" stroke="var(--border-strong)" stroke-width="1.4" stroke-dasharray="4 3"></circle>' +
            '<path d="M 31 38 C 31 30 49 30 49 38 C 49 43 45 45 45 50 L 35 50 C 35 45 31 43 31 38 Z" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="2"></path>' +
            '<line x1="35" y1="54" x2="45" y2="54" stroke="' + accent + '" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="37" y1="58" x2="43" y2="58" stroke="' + accent + '" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="40" y1="16" x2="40" y2="23" stroke="var(--warning)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="21" y1="24" x2="26" y2="29" stroke="var(--warning)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="59" y1="24" x2="54" y2="29" stroke="var(--warning)" stroke-width="2" stroke-linecap="round"></line>'
          );
        case 'interview':
          return (
            '<circle cx="26" cy="36" r="7" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2"></circle>' +
            '<path d="M 15 58 C 15 49 37 49 37 58" fill="' + soft + '" stroke="' + accent + '" stroke-width="2" stroke-linecap="round"></path>' +
            '<circle cx="54" cy="36" r="7" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="2"></circle>' +
            '<path d="M 43 58 C 43 49 65 49 65 58" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2" stroke-linecap="round"></path>' +
            '<rect x="27" y="16" width="26" height="14" rx="6" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="1.6"></rect>' +
            '<circle cx="35" cy="23" r="1.4" fill="' + accent + '"></circle>' +
            '<circle cx="40" cy="23" r="1.4" fill="' + accent + '"></circle>' +
            '<circle cx="45" cy="23" r="1.4" fill="' + accent + '"></circle>'
          );
        case 'value_gem':
          return (
            '<polygon points="26,24 54,24 64,38 40,62 16,38" fill="' + soft + '" stroke="' + accent + '" stroke-width="2.2" stroke-linejoin="round"></polygon>' +
            '<polyline points="16,38 64,38" fill="none" stroke="' + accent + '" stroke-width="1.6"></polyline>' +
            '<polyline points="26,24 34,38 40,62 46,38 54,24" fill="none" stroke="' + accent + '" stroke-width="1.5"></polyline>' +
            '<line x1="40" y1="14" x2="40" y2="19" stroke="var(--warning)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="63" y1="20" x2="59" y2="24" stroke="var(--warning)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="17" y1="20" x2="21" y2="24" stroke="var(--warning)" stroke-width="2" stroke-linecap="round"></line>'
          );
        case 'check_wrench':
          return (
            '<circle cx="36" cy="40" r="19" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2.2"></circle>' +
            '<polyline points="27,40 34,47 46,33" fill="none" stroke="var(--success)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></polyline>' +
            '<circle cx="57" cy="54" r="9" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.8"></circle>' +
            '<line x1="53" y1="54" x2="61" y2="54" stroke="' + accent + '" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="57" y1="50" x2="57" y2="58" stroke="' + accent + '" stroke-width="2" stroke-linecap="round"></line>'
          );
        case 'cycle_deploy':
          return (
            '<rect x="24" y="25" width="32" height="30" rx="6" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2"></rect>' +
            '<polyline points="32,40 38,46 49,34" fill="none" stroke="var(--success)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></polyline>' +
            '<path d="M 16 37 A 25 25 0 0 1 60 25" fill="none" stroke="' + accent + '" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></path>' +
            '<path d="M 64 43 A 25 25 0 0 1 20 55" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></path>'
          );
        case 'compass_goal':
          return (
            '<circle cx="40" cy="40" r="23" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2.2"></circle>' +
            '<circle cx="40" cy="40" r="16" fill="' + soft + '" stroke="' + accent + '" stroke-width="1" stroke-dasharray="3 3"></circle>' +
            '<polygon points="40,26 46,44 40,40 34,44" fill="' + accent + '"></polygon>' +
            '<polygon points="40,54 35,44 40,40 45,44" fill="var(--ink-secondary)" fill-opacity="0.45"></polygon>'
          );
        case 'radar_light':
          return (
            '<circle cx="40" cy="40" r="23" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="1.8"></circle>' +
            '<circle cx="40" cy="40" r="14" fill="none" stroke="' + accent + '" stroke-width="1.3" stroke-dasharray="3 3"></circle>' +
            '<line x1="40" y1="40" x2="57" y2="26" stroke="' + accent + '" stroke-width="2.4" stroke-linecap="round"></line>' +
            '<circle cx="53" cy="30" r="3.5" fill="var(--success)"></circle>' +
            '<circle cx="40" cy="40" r="3" fill="' + accent + '"></circle>'
          );
        case 'mvp_flask':
          return (
            '<path d="M 34 18 L 46 18 L 46 31 L 60 56 C 61 59 59 62 55 62 L 25 62 C 21 62 19 59 20 56 L 34 31 Z" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2.2" stroke-linejoin="round"></path>' +
            '<path d="M 26 49 L 54 49 L 58 58 L 22 58 Z" fill="' + soft + '"></path>' +
            '<circle cx="36" cy="43" r="2.5" fill="' + accent + '"></circle>' +
            '<circle cx="44" cy="38" r="2" fill="var(--success)"></circle>' +
            '<line x1="31" y1="18" x2="49" y2="18" stroke="' + accent + '" stroke-width="2.4" stroke-linecap="round"></line>'
          );
        case 'build_blocks':
          return (
            '<rect x="18" y="44" width="20" height="16" rx="4" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.8"></rect>' +
            '<rect x="42" y="44" width="20" height="16" rx="4" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.8"></rect>' +
            '<rect x="30" y="23" width="20" height="16" rx="4" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2.2"></rect>' +
            '<line x1="40" y1="39" x2="28" y2="44" stroke="' + accent + '" stroke-width="1.5"></line>' +
            '<line x1="40" y1="39" x2="52" y2="44" stroke="' + accent + '" stroke-width="1.5"></line>'
          );
        case 'rocket':
          return (
            '<path d="M 40 16 C 49 24 51 37 48 50 L 32 50 C 29 37 31 24 40 16 Z" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2.2" stroke-linejoin="round"></path>' +
            '<circle cx="40" cy="33" r="4.5" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.8"></circle>' +
            '<polygon points="32,42 22,52 32,50" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.6" stroke-linejoin="round"></polygon>' +
            '<polygon points="48,42 58,52 48,50" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.6" stroke-linejoin="round"></polygon>' +
            '<path d="M 35 53 L 40 65 L 45 53" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.8" stroke-linejoin="round"></path>'
          );
        case 'metrics_chart':
          return (
            '<line x1="18" y1="58" x2="62" y2="58" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"></line>' +
            '<line x1="18" y1="20" x2="18" y2="58" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"></line>' +
            '<rect x="24" y="42" width="8" height="16" rx="2" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.4"></rect>' +
            '<rect x="37" y="34" width="8" height="24" rx="2" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.4"></rect>' +
            '<rect x="50" y="24" width="8" height="34" rx="2" fill="' + accent + '"></rect>' +
            '<polyline points="23,36 39,27 56,19" fill="none" stroke="var(--teal)" stroke-width="2.2" stroke-linecap="round"></polyline>'
          );
        case 'loop_arrows':
          return (
            '<path d="M 40 18 A 22 22 0 1 1 20 49" fill="none" stroke="' + accent + '" stroke-width="2.5" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></path>' +
            '<path d="M 18 39 A 22 22 0 0 1 36 18" fill="none" stroke="var(--teal)" stroke-width="2.5" stroke-linecap="round"></path>' +
            '<circle cx="40" cy="40" r="8" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.8"></circle>'
          );
        case 'diverge_rays':
          return (
            '<circle cx="20" cy="40" r="5" fill="' + accent + '"></circle>' +
            '<line x1="25" y1="38" x2="56" y2="21" stroke="' + accent + '" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></line>' +
            '<line x1="25" y1="40" x2="58" y2="40" stroke="' + accent + '" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></line>' +
            '<line x1="25" y1="42" x2="56" y2="59" stroke="' + accent + '" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></line>' +
            '<circle cx="62" cy="20" r="4" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.6"></circle>' +
            '<circle cx="64" cy="40" r="4" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.6"></circle>' +
            '<circle cx="62" cy="60" r="4" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.6"></circle>'
          );
        case 'converge_focus':
          return (
            '<circle cx="19" cy="21" r="4" fill="var(--ink-secondary)" fill-opacity="0.45"></circle>' +
            '<circle cx="18" cy="40" r="4" fill="var(--ink-secondary)" fill-opacity="0.45"></circle>' +
            '<circle cx="19" cy="59" r="4" fill="var(--ink-secondary)" fill-opacity="0.45"></circle>' +
            '<line x1="24" y1="22" x2="52" y2="38" stroke="' + accent + '" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></line>' +
            '<line x1="23" y1="40" x2="51" y2="40" stroke="' + accent + '" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></line>' +
            '<line x1="24" y1="58" x2="52" y2="42" stroke="' + accent + '" stroke-width="2" stroke-linecap="round" marker-end="url(#l3c-arr-act)"></line>' +
            '<circle cx="60" cy="40" r="7" fill="' + soft + '" stroke="' + accent + '" stroke-width="2.2"></circle>'
          );
        case 'agile_sprout':
          return (
            '<rect x="17" y="21" width="22" height="16" rx="4" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.8"></rect>' +
            '<rect x="43" y="21" width="22" height="16" rx="4" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>' +
            '<rect x="30" y="45" width="22" height="16" rx="4" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.8"></rect>' +
            '<path d="M 39 29 L 43 29" stroke="' + accent + '" stroke-width="1.8"></path>' +
            '<path d="M 54 37 L 48 45" stroke="var(--teal)" stroke-width="1.8"></path>' +
            '<path d="M 30 49 L 25 37" stroke="var(--success)" stroke-width="1.8"></path>'
          );
        case 'ship_spark':
        default:
          return (
            '<rect x="20" y="26" width="40" height="34" rx="7" fill="var(--surface-elevated)" stroke="' + accent + '" stroke-width="2.2"></rect>' +
            '<line x1="20" y1="36" x2="60" y2="36" stroke="' + accent + '" stroke-width="1.6"></line>' +
            '<polyline points="32,48 38,53 49,42" fill="none" stroke="var(--success)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></polyline>' +
            '<path d="M 56 14 L 58 19 L 63 21 L 58 23 L 56 28 L 54 23 L 49 21 L 54 19 Z" fill="var(--warning)"></path>'
          );
      }
    }

    function renderL3CycleVisual(cycleKey, stepIdx, stepObj, total) {
      var tone = toneMap[stepObj.tone] || toneMap.primary;
      var accent = tone.accent;
      var soft = tone.soft;
      var defs =
        '<defs>' +
        '  <marker id="l3c-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="var(--border-strong)"></path></marker>' +
        '  <marker id="l3c-arr-act" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="' + accent + '"></path></marker>' +
        '</defs>';

      var left = '';
      var i;

      if (cycleKey === 'cascada') {
        left += '<text x="126" y="25" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-secondary)">CASCADA · FLUJO SECUENCIAL</text>';
        var wLabels = ['1. Req.', '2. Anál.', '3. Diseño', '4. Código', '5. Pruebas'];
        for (i = 0; i < 4; i++) {
          var sx = 86 + i * 36;
          var sy = 47 + i * 28;
          var ex = 104 + i * 36;
          var ey = 62 + i * 28;
          var activeEdge = i + 1 === stepIdx;
          left += '<path' + (activeEdge ? ' class="anim-flow"' : '') + ' d="M ' + sx + ' ' + sy + ' L ' + ex + ' ' + sy + ' L ' + ex + ' ' + ey + '" fill="none" stroke="' + (activeEdge ? accent : 'var(--border-strong)') + '" stroke-width="' + (activeEdge ? '2' : '1.5') + '" stroke-linejoin="round" marker-end="url(#' + (activeEdge ? 'l3c-arr-act' : 'l3c-arr') + ')"></path>';
        }
        for (i = 0; i < 5; i++) {
          var bx = 14 + i * 36;
          var by = 36 + i * 28;
          var isCur = i === stepIdx;
          left += '<rect x="' + bx + '" y="' + by + '" width="72" height="22" rx="6" fill="' + (isCur ? soft : 'var(--surface-elevated)') + '" stroke="' + (isCur ? accent : 'var(--border-strong)') + '" stroke-width="' + (isCur ? '2' : '1.2') + '"></rect>';
          left += '<text x="' + (bx + 36) + '" y="' + (by + 14.5) + '" text-anchor="middle" font-size="9.5" font-weight="' + (isCur ? '700' : '600') + '" fill="' + (isCur ? accent : 'var(--ink-secondary)') + '">' + wLabels[i] + '</text>';
        }
        left += '<text x="126" y="192" text-anchor="middle" font-size="9" font-weight="600" fill="var(--ink-secondary)">↓ Unidireccional · retorno costoso</text>';
      } else if (cycleKey === 'thebox') {
        left += '<text x="126" y="25" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-secondary)">THE BOX · CICLO DE 7 ETAPAS</text>';
        var rcx = 128;
        var rcy = 114;
        var rad = 62;
        var nStep = (Math.PI * 2) / 7;
        var aPad = 0.258;
        for (i = 0; i < 7; i++) {
          var a1 = -Math.PI / 2 + i * nStep + aPad;
          var a2 = -Math.PI / 2 + (i + 1) * nStep - 0.285;
          var ax1 = (rcx + rad * Math.cos(a1)).toFixed(1);
          var ay1 = (rcy + rad * Math.sin(a1)).toFixed(1);
          var ax2 = (rcx + rad * Math.cos(a2)).toFixed(1);
          var ay2 = (rcy + rad * Math.sin(a2)).toFixed(1);
          var nextIdx = (i + 1) % 7;
          var activeArc = nextIdx === stepIdx;
          left += '<path' + (activeArc ? ' class="anim-flow"' : '') + ' d="M ' + ax1 + ' ' + ay1 + ' A ' + rad + ' ' + rad + ' 0 0 1 ' + ax2 + ' ' + ay2 + '" fill="none" stroke="' + (activeArc ? accent : 'var(--border-strong)') + '" stroke-width="' + (activeArc ? '2.2' : '1.5') + '" marker-end="url(#' + (activeArc ? 'l3c-arr-act' : 'l3c-arr') + ')"></path>';
        }
        for (i = 0; i < 7; i++) {
          var ang = -Math.PI / 2 + i * nStep;
          var nx = (rcx + rad * Math.cos(ang)).toFixed(1);
          var ny = (rcy + rad * Math.sin(ang)).toFixed(1);
          var isBoxCur = i === stepIdx;
          if (i === 2) {
            left += '<circle cx="' + nx + '" cy="' + ny + '" r="17.5" fill="none" stroke="var(--teal)" stroke-width="1.2" stroke-dasharray="3 2"></circle>';
          }
          left += '<circle cx="' + nx + '" cy="' + ny + '" r="14" fill="' + (isBoxCur ? soft : 'var(--surface-elevated)') + '" stroke="' + (isBoxCur ? accent : (i === 2 ? 'var(--teal)' : 'var(--border-strong)')) + '" stroke-width="' + (isBoxCur ? '2.2' : '1.3') + '"></circle>';
          left += '<text x="' + nx + '" y="' + (Number(ny) + 4) + '" text-anchor="middle" font-size="11" font-weight="700" fill="' + (isBoxCur ? accent : 'var(--ink-secondary)') + '">' + (i + 1) + '</text>';
        }
        var boxSub = stepIdx === 2 ? '★ Agrega valor' : (stepIdx === 6 ? '↻ Evoluciona' : 'Ciclo continuo');
        left += '<text x="128" y="109" text-anchor="middle" font-size="11.5" font-weight="700" fill="' + accent + '">Paso ' + (stepIdx + 1) + ' / 7</text>';
        left += '<text x="128" y="125" text-anchor="middle" font-size="9" font-weight="600" fill="var(--ink-secondary)">' + boxSub + '</text>';
      } else if (cycleKey === 'lean') {
        left += '<text x="126" y="25" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-secondary)">LEAN · VALIDAR ANTES DE CONSTRUIR</text>';
        var leanNodes = [
          { x: 36, y: 72, r: 13, lbl: 'Outc.', lx: 36, ly: 50 },
          { x: 92, y: 72, r: 13, lbl: 'Disc.', lx: 92, ly: 50 },
          { x: 148, y: 72, r: 13, lbl: 'Valid.', lx: 148, ly: 50 },
          { x: 212, y: 92, r: 18, lbl: 'Build ★', lx: 212, ly: 65 },
          { x: 186, y: 156, r: 13, lbl: 'Launch', lx: 186, ly: 183 },
          { x: 111, y: 156, r: 13, lbl: 'Eval.', lx: 111, ly: 183 },
          { x: 36, y: 156, r: 13, lbl: 'Iterar', lx: 36, ly: 183 }
        ];
        for (i = 0; i < 7; i++) {
          var p1 = leanNodes[i];
          var ni = (i + 1) % 7;
          var p2 = leanNodes[ni];
          var dx = p2.x - p1.x;
          var dy = p2.y - p1.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          var x1 = (p1.x + (dx / dist) * (p1.r + 2)).toFixed(1);
          var y1 = (p1.y + (dy / dist) * (p1.r + 2)).toFixed(1);
          var x2 = (p2.x - (dx / dist) * (p2.r + 4)).toFixed(1);
          var y2 = (p2.y - (dy / dist) * (p2.r + 4)).toFixed(1);
          var activeLeanEdge = ni === stepIdx;
          left += '<line' + (activeLeanEdge ? ' class="anim-flow"' : '') + ' x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (activeLeanEdge ? accent : 'var(--border-strong)') + '" stroke-width="' + (activeLeanEdge ? '2.2' : '1.5') + '" marker-end="url(#' + (activeLeanEdge ? 'l3c-arr-act' : 'l3c-arr') + ')"></line>';
        }
        for (i = 0; i < 7; i++) {
          var ln = leanNodes[i];
          var isLCur = i === stepIdx;
          if (i === 3) {
            left += '<circle cx="' + ln.x + '" cy="' + ln.y + '" r="21.5" fill="none" stroke="var(--warning)" stroke-width="1.2" stroke-dasharray="3 2"></circle>';
          }
          left += '<circle cx="' + ln.x + '" cy="' + ln.y + '" r="' + ln.r + '" fill="' + (isLCur ? soft : 'var(--surface-elevated)') + '" stroke="' + (isLCur ? accent : (i === 3 ? 'var(--warning)' : 'var(--border-strong)')) + '" stroke-width="' + (isLCur ? '2.2' : '1.3') + '"></circle>';
          left += '<text x="' + ln.x + '" y="' + (ln.y + 4) + '" text-anchor="middle" font-size="' + (i === 3 ? '12' : '10.5') + '" font-weight="700" fill="' + (isLCur ? accent : 'var(--ink-secondary)') + '">' + (i + 1) + '</text>';
          left += '<text x="' + ln.lx + '" y="' + ln.ly + '" text-anchor="middle" font-size="8.5" font-weight="' + (isLCur ? '700' : '600') + '" fill="' + (isLCur ? accent : 'var(--ink-secondary)') + '">' + ln.lbl + '</text>';
        }
        left += '<text x="114" y="118" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-secondary)">MVP → Medir → Aprender</text>';
      } else {
        left += '<text x="126" y="25" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-secondary)">DOBLE DIAMANTE · AGILIDAD MODERNA</text>';
        left += '<text x="74" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="var(--violet)">PROBLEMA</text>';
        left += '<text x="178" y="47" text-anchor="middle" font-size="9" font-weight="700" fill="var(--teal)">SOLUCIÓN</text>';
        var tris = [
          { pts: '22,113 74,56 74,170', edge1: '22,113 74,56', edge2: '22,113 74,170', lx: 55, mode: 'Diverge', mx: 48 },
          { pts: '74,56 126,113 74,170', edge1: '74,56 126,113', edge2: '74,170 126,113', lx: 93, mode: 'Converge', mx: 100 },
          { pts: '126,113 178,56 178,170', edge1: '126,113 178,56', edge2: '126,113 178,170', lx: 159, mode: 'Diverge', mx: 152 },
          { pts: '178,56 230,113 178,170', edge1: '178,56 230,113', edge2: '178,170 230,113', lx: 197, mode: 'Converge', mx: 204 }
        ];
        for (i = 0; i < 4; i++) {
          var tr = tris[i];
          var isDCur = i === stepIdx;
          left += '<polygon points="' + tr.pts + '" fill="' + (isDCur ? soft : 'var(--surface-elevated)') + '" stroke="' + (isDCur ? accent : 'var(--border-strong)') + '" stroke-width="' + (isDCur ? '2.2' : '1.3') + '" stroke-linejoin="round"></polygon>';
          if (isDCur) {
            left += '<polyline class="anim-flow" points="' + tr.edge1 + '" fill="none" stroke="' + accent + '" stroke-width="2.4"></polyline>';
            left += '<polyline class="anim-flow" points="' + tr.edge2 + '" fill="none" stroke="' + accent + '" stroke-width="2.4"></polyline>';
          }
          left += '<text x="' + tr.lx + '" y="117" text-anchor="middle" font-size="11.5" font-weight="700" fill="' + (isDCur ? accent : 'var(--ink-secondary)') + '">' + (i + 1) + '</text>';
          left += '<text x="' + tr.mx + '" y="189" text-anchor="middle" font-size="8.5" font-weight="' + (isDCur ? '700' : '600') + '" fill="' + (isDCur ? accent : 'var(--ink-secondary)') + '">' + tr.mode + '</text>';
        }
      }

      var divider = '<line x1="248" y1="18" x2="248" y2="192" stroke="var(--border-strong)" stroke-dasharray="4 4"></line>';
      var rightCard =
        '<g class="anim-pop">' +
        '  <rect x="256" y="12" width="156" height="186" rx="12" fill="var(--surface)" stroke="' + accent + '" stroke-width="1.8"></rect>' +
        '  <text x="334" y="31" text-anchor="middle" font-size="9" font-weight="700" fill="' + accent + '">ETAPA ' + (stepIdx + 1) + ' DE ' + total + '</text>' +
        '  <circle cx="334" cy="88" r="42" fill="' + soft + '" stroke="' + accent + '" stroke-opacity="0.3"></circle>' +
        '  <g transform="translate(294, 48)">' + renderL3StageArt(stepObj.art, accent, soft) + '</g>' +
        '  <text x="334" y="151" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">' + esc(stepObj.artTitle) + '</text>' +
        '  <rect x="272" y="162" width="124" height="22" rx="11" fill="' + soft + '" stroke="' + accent + '" stroke-width="1.2"></rect>' +
        '  <text x="334" y="176.5" text-anchor="middle" font-size="9.5" font-weight="700" fill="' + accent + '">' + esc(stepObj.tag) + '</text>' +
        '</g>';

      return defs + left + divider + rightCard;
    }

    var cycles = {
      cascada: [
        { name: '1. Requerimientos', artTitle: 'Requerimientos', tag: 'Secuencial', tone: 'primary', art: 'clipboard', desc: 'Se relevan de inicio de forma secuencial.' },
        { name: '2. Análisis', artTitle: 'Análisis', tag: 'Problem Space', tone: 'violet', art: 'magnifier', desc: 'Se formalizan necesidades antes de diseñar.' },
        { name: '3. Diseño', artTitle: 'Diseño Técnico', tag: 'Solution Space', tone: 'teal', art: 'blueprint', desc: 'Se define la solución técnica completa.' },
        { name: '4. Código', artTitle: 'Codificación', tag: 'Implementación', tone: 'primary', art: 'code', desc: 'Implementación sin volver atrás fácilmente.' },
        { name: '5. Pruebas', artTitle: 'Pruebas Tardías', tag: 'Alto Costo Error', tone: 'danger', art: 'shield_warn', desc: 'Testing tardío; costoso si hubo errores al inicio.' }
      ],
      thebox: [
        { name: '1. Problemas', artTitle: 'Problemas', tag: 'Oportunidades', tone: 'violet', art: 'target_bulb', desc: 'Identificación de problemas, oportunidades y objetivos.' },
        { name: '2. Req. Humanos', artTitle: 'Req. Humanos', tag: 'Elicitación', tone: 'primary', art: 'interview', desc: 'Relevamiento/elicitación con los usuarios.' },
        { name: '3. Necesidades (Valor)', artTitle: 'Necesidades', tag: '★ Agrega Valor', tone: 'teal', art: 'value_gem', desc: '¡Aquí se agrega valor real validando utilidad en el Problem Space!' },
        { name: '4. Diseño', artTitle: 'Diseño Sistema', tag: 'Solution Space', tone: 'primary', art: 'blueprint', desc: 'Diseño del sistema recomendado.' },
        { name: '5. Desarrollo', artTitle: 'Desarrollo', tag: 'Código + Docs', tone: 'teal', art: 'code', desc: 'Programación y documentación del software.' },
        { name: '6. Pruebas', artTitle: 'Pruebas', tag: 'Mantenimiento', tone: 'warning', art: 'check_wrench', desc: 'Prueba y mantenimiento.' },
        { name: '7. Implementación', artTitle: 'Implementación', tag: 'Evolución ↻', tone: 'success', art: 'cycle_deploy', desc: 'Evaluación en uso y vuelta al paso 1 (evolución).' }
      ],
      lean: [
        { name: '1. Business Outcome', artTitle: 'Business Outcome', tag: 'Meta Negocio', tone: 'violet', art: 'compass_goal', desc: 'Objetivo de negocio que se espera lograr.' },
        { name: '2. Discover', artTitle: 'Discover', tag: 'Liviano', tone: 'primary', art: 'radar_light', desc: 'Discovery rápido y liviano asumiendo necesidades.' },
        { name: '3. Validate', artTitle: 'Validate', tag: 'Hipótesis · MVP', tone: 'teal', art: 'mvp_flask', desc: 'Validación temprana de hipótesis con MVPs.' },
        { name: '4. Build', artTitle: 'Build', tag: 'Foco Recursos', tone: 'warning', art: 'build_blocks', desc: 'Aquí se concentra el grueso de los recursos.' },
        { name: '5. Launch', artTitle: 'Launch', tag: 'Salida Masiva', tone: 'primary', art: 'rocket', desc: 'Lanzamiento masivo de la funcionalidad.' },
        { name: '6. Evaluate', artTitle: 'Evaluate', tag: 'Medir Mercado', tone: 'success', art: 'metrics_chart', desc: 'Medir la respuesta real del mercado.' },
        { name: '7. Iterar', artTitle: 'Iterar', tag: 'Nuevo Ciclo ↻', tone: 'violet', art: 'loop_arrows', desc: 'Volver a definir un nuevo Business Outcome.' }
      ],
      diamante: [
        { name: '1. Descubrir (Diverge)', artTitle: 'Descubrir', tag: 'Diverge · DT', tone: 'violet', art: 'diverge_rays', desc: 'Design Thinking abre el universo del problema.' },
        { name: '2. Definir (Converge)', artTitle: 'Definir', tag: 'Converge · QUÉ', tone: 'primary', art: 'converge_focus', desc: 'Acota exactamente cuál es el problema a resolver.' },
        { name: '3. Desarrollar (Diverge)', artTitle: 'Desarrollar', tag: 'Diverge · Lean', tone: 'teal', art: 'agile_sprout', desc: 'Lean + Agile exploran y construyen las cosas correctas.' },
        { name: '4. Entregar (Converge)', artTitle: 'Entregar', tag: 'Converge · IA', tone: 'success', art: 'ship_spark', desc: 'Especificación y entrega continua funcionando (IA acelera prototipos).' }
      ]
    };

    var curCycle = 'cascada';
    var curStep = 0;
    var playing = false;
    var timer = null;
    var track = container.querySelector('#l3-cycle-track');
    var cycleSvg = container.querySelector('#l3-cycle-svg');
    var descEl = container.querySelector('#l3-cycle-desc');
    var playBtn = container.querySelector('#l3-play');

    function startPlayTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      timer = registerInterval(function () {
        curStep = (curStep + 1) % cycles[curCycle].length;
        renderTrack();
      }, 2250);
    }

    function renderTrack() {
      var list = cycles[curCycle];
      track.innerHTML = list.map(function (st, idx) {
        return '<button type="button" class="lab-cycle-step' + (idx === curStep ? ' is-active' : '') + '" data-l3-step="' + idx + '">' + esc(st.name) + '</button>';
      }).join('');
      var stepBtns = track.querySelectorAll('[data-l3-step]');
      for (var k = 0; k < stepBtns.length; k++) {
        stepBtns[k].addEventListener('click', function (ev) {
          curStep = Number(ev.currentTarget.getAttribute('data-l3-step'));
          if (playing) startPlayTimer();
          renderTrack();
        });
      }
      cycleSvg.innerHTML = renderL3CycleVisual(curCycle, curStep, list[curStep], list.length);
      descEl.textContent = list[curStep].desc;
    }

    function stopPlay() {
      playing = false;
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      playBtn.textContent = '▶ Reproducir';
    }

    var cycleBtns = container.querySelectorAll('[data-l3-cycle]');
    for (var i = 0; i < cycleBtns.length; i++) {
      cycleBtns[i].addEventListener('click', function (ev) {
        stopPlay();
        for (var j = 0; j < cycleBtns.length; j++) cycleBtns[j].classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
        curCycle = ev.currentTarget.getAttribute('data-l3-cycle');
        curStep = 0;
        renderTrack();
      });
    }

    container.querySelector('#l3-step').addEventListener('click', function () {
      curStep = (curStep + 1) % cycles[curCycle].length;
      if (playing) startPlayTimer();
      renderTrack();
    });

    playBtn.addEventListener('click', function () {
      if (playing) {
        stopPlay();
      } else {
        playing = true;
        playBtn.textContent = '⏸ Pausar';
        startPlayTimer();
      }
    });

    renderTrack();
  }

  // =========================================================================
  // LAB 4: Simulador de Entrevistas y Compuerta V&V (U3)
  // =========================================================================
  function renderLab4() {
    var demands = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.demands) || [];
    var dBtns = demands.map(function (d, i) {
      return '<button type="button" class="chip' + (i === 0 ? ' is-active' : '') + '" data-l4-dem="' + esc(d.id) + '">' + esc(d.label) + '</button>';
    }).join('');

    return (
      '<div class="lab-dual-grid">' +
      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel A · Simulador de Entrevistas</div>' +
      '    <div class="chip-group" style="margin-bottom:0.65rem;">' +
      '      <button type="button" class="chip is-active" data-l4-shape="piramide">Pirámide</button>' +
      '      <button type="button" class="chip" data-l4-shape="embudo">Embudo</button>' +
      '      <button type="button" class="chip" data-l4-shape="rombo">Rombo</button>' +
      '    </div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l4-sim-int">▶ Simular entrevista</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" id="l4-next-int">Siguiente pregunta</button>' +
      '    </div>' +
      '    <div class="lab-svg-wrap">' +
      '      <svg id="l4-shape-svg" viewBox="0 0 360 190" role="img" aria-label="Forma animada de entrevista"></svg>' +
      '    </div>' +
      '    <div class="lab-status" id="l4-int-status"></div>' +
      '  </div>' +

      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel B · Compuerta Verificación vs. Validación</div>' +
      '    <div class="chip-group" style="margin-bottom:0.75rem;">' + dBtns + '</div>' +
      '    <div class="lab-quote" id="l4-dem-quote"></div>' +
      '    <div class="lab-gates-row">' +
      '      <div class="lab-gate-card" id="l4-gate-verif">' +
      '        <strong>1. Verificación</strong>' +
      '        <small>¿Construimos correctamente? (formato, sin contradicciones)</small>' +
      '        <div class="lab-gate-badge" id="l4-verif-res"></div>' +
      '      </div>' +
      '      <div class="lab-gate-card" id="l4-gate-valid">' +
      '        <strong>2. Validación</strong>' +
      '        <small>¿Construimos la cosa correcta? (lo que necesita el usuario)</small>' +
      '        <div class="lab-gate-badge" id="l4-valid-res"></div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="lab-status" id="l4-dem-verdict"></div>' +
      '  </div>' +
      '</div>'
    );
  }

  function mountLab4(container) {
    var interviews = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.interviews) || {};
    var demands = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.demands) || [];
    var shape = 'piramide';
    var band = 0;
    var intTimer = null;

    var svgEl = container.querySelector('#l4-shape-svg');
    var intStatus = container.querySelector('#l4-int-status');

    function drawShape() {
      var data = interviews[shape];
      var polys = {
        piramide: [
          '180,16 144,68 216,68',
          '144,72 108,124 252,124 216,72',
          '108,128 72,176 288,176 252,128'
        ],
        embudo: [
          '72,16 288,16 252,68 108,68',
          '108,72 252,72 216,124 144,124',
          '144,128 216,128 180,176'
        ],
        rombo: [
          '180,16 116,68 244,68',
          '116,72 244,72 244,124 116,124',
          '116,128 244,128 180,176'
        ]
      };
      var labels = shape === 'piramide'
        ? ['Cerrada / Bipolar', 'Cerrada acotada', 'Abierta + Sondeo']
        : (shape === 'embudo' ? ['Abierta amplia', 'Sondeo', 'Cerrada / Bipolar'] : ['Cerrada inicial', 'Abierta central', 'Cerrada final']);
      var ys = [52, 103, 154];

      var html = polys[shape].map(function (pts, idx) {
        var act = idx === band;
        return (
          '<polygon points="' + pts + '" fill="' + (act ? 'var(--primary-soft)' : 'var(--surface)') + '" stroke="' + (act ? 'var(--primary)' : 'var(--border-strong)') + '" stroke-width="' + (act ? '2.5' : '1.4') + '"></polygon>' +
          '<text x="180" y="' + ys[idx] + '" text-anchor="middle" font-size="11.5" font-weight="' + (act ? '700' : '600') + '" fill="' + (act ? 'var(--primary)' : 'var(--ink-secondary)') + '">' + esc(labels[idx]) + '</text>'
        );
      }).join('');
      svgEl.innerHTML = html;

      var st = data.steps[band];
      intStatus.innerHTML = '<strong>Paso ' + (band + 1) + ' (' + esc(st.qType) + '):</strong> ' + esc(st.text);
    }

    var shapeBtns = container.querySelectorAll('[data-l4-shape]');
    for (var i = 0; i < shapeBtns.length; i++) {
      shapeBtns[i].addEventListener('click', function (ev) {
        if (intTimer) { clearInterval(intTimer); intTimer = null; }
        for (var j = 0; j < shapeBtns.length; j++) shapeBtns[j].classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
        shape = ev.currentTarget.getAttribute('data-l4-shape');
        band = 0;
        drawShape();
      });
    }

    container.querySelector('#l4-next-int').addEventListener('click', function () {
      band = (band + 1) % 3;
      drawShape();
    });

    container.querySelector('#l4-sim-int').addEventListener('click', function () {
      if (intTimer) clearInterval(intTimer);
      band = 0;
      drawShape();
      var count = 0;
      intTimer = registerInterval(function () {
        count++;
        band = count % 3;
        drawShape();
        if (count >= 2) {
          clearInterval(intTimer);
          intTimer = null;
        }
      }, 1400);
    });

    // Panel B: Demands V&V
    var quoteEl = container.querySelector('#l4-dem-quote');
    var vRes = container.querySelector('#l4-verif-res');
    var valRes = container.querySelector('#l4-valid-res');
    var gVer = container.querySelector('#l4-gate-verif');
    var gVal = container.querySelector('#l4-gate-valid');
    var verdEl = container.querySelector('#l4-dem-verdict');

    function showDemand(demId) {
      var d = demands.filter(function (x) { return x.id === demId; })[0] || demands[0];
      if (!d) return;
      quoteEl.textContent = d.quote;
      vRes.textContent = d.passesVerif ? '✓ Pasa' : '✕ Falla';
      valRes.textContent = d.passesValid ? '✓ Pasa' : '✕ Falla';
      gVer.className = 'lab-gate-card ' + (d.passesVerif ? 'is-ok' : 'is-fail');
      gVal.className = 'lab-gate-card ' + (d.passesValid ? 'is-ok' : 'is-fail');
      verdEl.textContent = d.verdict;
    }

    var demBtns = container.querySelectorAll('[data-l4-dem]');
    for (var k = 0; k < demBtns.length; k++) {
      demBtns[k].addEventListener('click', function (ev) {
        for (var m = 0; m < demBtns.length; m++) demBtns[m].classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
        showDemand(ev.currentTarget.getAttribute('data-l4-dem'));
      });
    }

    drawShape();
    if (demands[0]) showDemand(demands[0].id);
  }

  // =========================================================================
  // LAB 5: Propagación 1x -> 100x+ y Matriz Impacto vs Esfuerzo (U3)
  // =========================================================================
  function renderLab5() {
    var items = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.matrixItems) || [];
    var itemBtns = items.map(function (it, idx) {
      return '<button type="button" class="chip' + (idx === 0 ? ' is-active' : '') + '" data-l5-item="' + esc(it.id) + '">' + esc(it.title) + '</button>';
    }).join('');

    return (
      '<div class="lab-dual-grid">' +
      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel A · Propagación de Errores (1x → 100x+)</div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l5-step-err">▶ Avanzar fase</button>' +
      '      <button type="button" class="btn btn-ghost btn-sm" id="l5-reset-err">Reiniciar</button>' +
      '      <label class="lab-switch"><input type="checkbox" id="l5-early-vv"> <span>Activar V&amp;V temprana</span></label>' +
      '    </div>' +
      '    <div class="lab-err-bars" id="l5-bars"></div>' +
      '    <div class="lab-status" id="l5-err-status"></div>' +
      '  </div>' +

      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel B · Matriz Impacto vs. Esfuerzo</div>' +
      '    <div class="chip-group" style="margin-bottom:0.75rem;">' + itemBtns + '</div>' +
      '    <div class="lab-matrix-2x2">' +
      '      <div class="lab-quad" data-quad="Ganancias rápidas"><strong>Ganancias rápidas</strong><small>Alto Imp. / Bajo Esf.</small></div>' +
      '      <div class="lab-quad" data-quad="Grandes proyectos"><strong>Grandes proyectos</strong><small>Alto Imp. / Alto Esf.</small></div>' +
      '      <div class="lab-quad" data-quad="Actividades menores"><strong>Actividades menores</strong><small>Bajo Imp. / Bajo Esf.</small></div>' +
      '      <div class="lab-quad" data-quad="Tareas ingratas"><strong>Tareas ingratas</strong><small>Bajo Imp. / Alto Esf.</small></div>' +
      '    </div>' +
      '    <div class="lab-status" id="l5-mat-status"></div>' +
      '  </div>' +
      '</div>'
    );
  }

  function mountLab5(container) {
    var stages = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.errorStages) || [];
    var items = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.matrixItems) || [];
    var stageIdx = 0;
    var earlyVV = false;

    var barsEl = container.querySelector('#l5-bars');
    var errStatus = container.querySelector('#l5-err-status');

    function renderErr() {
      barsEl.innerHTML = stages.map(function (st, idx) {
        var reached = idx <= stageIdx;
        var active = idx === stageIdx;
        var color = idx >= 4 ? 'var(--danger)' : (idx >= 2 ? 'var(--warning)' : 'var(--success)');
        return (
          '<div class="lab-err-row' + (active ? ' is-current' : '') + '">' +
          '  <span class="lab-err-name">' + esc(st.name) + '</span>' +
          '  <div class="progress-track" style="margin:0;flex:1;"><div class="progress-fill" style="width:' + (reached ? st.barPct : 0) + '%;background:' + color + ';"></div></div>' +
          '  <span class="lab-err-cost">' + (reached ? esc(st.costLabel) : '—') + '</span>' +
          '</div>'
        );
      }).join('');

      var cur = stages[stageIdx];
      errStatus.innerHTML = earlyVV
        ? '<strong>V&amp;V temprana activa:</strong> el error se atrapó en Requisitos (1x). ' + esc(stages[0].note)
        : '<strong>Etapa ' + esc(cur.name) + ' (' + esc(cur.costLabel) + '):</strong> ' + esc(cur.note);
    }

    container.querySelector('#l5-step-err').addEventListener('click', function () {
      if (earlyVV) {
        stageIdx = 0;
        renderErr();
        return;
      }
      stageIdx = Math.min(stages.length - 1, stageIdx + 1);
      renderErr();
    });

    container.querySelector('#l5-reset-err').addEventListener('click', function () {
      stageIdx = 0;
      renderErr();
    });

    container.querySelector('#l5-early-vv').addEventListener('change', function (ev) {
      earlyVV = !!ev.target.checked;
      if (earlyVV) stageIdx = 0;
      renderErr();
    });

    // Matrix
    var matStatus = container.querySelector('#l5-mat-status');
    var quads = container.querySelectorAll('.lab-quad');
    function showMatrixItem(id) {
      var it = items.filter(function (x) { return x.id === id; })[0] || items[0];
      if (!it) return;
      for (var q = 0; q < quads.length; q++) {
        if (quads[q].getAttribute('data-quad') === it.quad) {
          quads[q].classList.add('is-active');
        } else {
          quads[q].classList.remove('is-active');
        }
      }
      matStatus.innerHTML = '<strong>' + esc(it.quad) + ' (' + esc(it.imp) + ' / ' + esc(it.esf) + '):</strong> ' + esc(it.tip);
    }

    var itemBtns = container.querySelectorAll('[data-l5-item]');
    for (var i = 0; i < itemBtns.length; i++) {
      itemBtns[i].addEventListener('click', function (ev) {
        for (var j = 0; j < itemBtns.length; j++) itemBtns[j].classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
        showMatrixItem(ev.currentTarget.getAttribute('data-l5-item'));
      });
    }

    renderErr();
    if (items[0]) showMatrixItem(items[0].id);
  }

  // =========================================================================
  // LAB 6: Lente de Viewpoints y Carrera Prototipo vs. UP vs. MVP (U4)
  // =========================================================================
  function renderLab6() {
    return (
      '<div class="lab-dual-grid">' +
      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel A · Lente de Vistas (Viewpoints)</div>' +
      '    <div class="chip-group" style="margin-bottom:0.75rem;">' +
      '      <button type="button" class="chip is-active" data-l6-role="cliente">Cliente</button>' +
      '      <button type="button" class="chip" data-l6-role="analista">Analista</button>' +
      '      <button type="button" class="chip" data-l6-role="arquitecto">Arquitecto</button>' +
      '      <button type="button" class="chip" data-l6-role="programador">Programador</button>' +
      '    </div>' +
      '    <div class="lab-svg-wrap">' +
      '      <svg viewBox="0 0 420 200" role="img" aria-label="Proyección de un modelo en distintas vistas">' +
      '        <g id="l6-v-cliente"><rect x="18" y="18" width="184" height="74" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"></rect><text x="110" y="48" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--primary)">Casos de Uso / Valor</text><text x="110" y="70" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Objetivos y alcance</text></g>' +
      '        <g id="l6-v-analista"><rect x="218" y="18" width="184" height="74" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="2"></rect><text x="310" y="48" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--violet)">Modelo de Dominio</text><text x="310" y="70" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Entidades, reglas y DSS</text></g>' +
      '        <g id="l6-v-arquitecto"><rect x="18" y="108" width="184" height="74" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"></rect><text x="110" y="138" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--teal)">Módulos y Servicios</text><text x="110" y="160" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Escalabilidad y librerías</text></g>' +
      '        <g id="l6-v-programador"><rect x="218" y="108" width="184" height="74" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect><text x="310" y="138" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--success)">Clases y Métodos</text><text x="310" y="160" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Contratos e interfaces</text></g>' +
      '      </svg>' +
      '    </div>' +
      '    <div class="lab-status" id="l6-role-status"></div>' +
      '  </div>' +

      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel B · Carrera: Prototipo vs. UP vs. MVP</div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l6-race-step">▶ Avanzar ciclo (<span id="l6-cycle-num">0</span>/3)</button>' +
      '      <button type="button" class="btn btn-ghost btn-sm" id="l6-race-reset">Reiniciar</button>' +
      '    </div>' +
      '    <div class="lab-lanes" id="l6-lanes"></div>' +
      '    <div class="lab-status" id="l6-race-status">Pulsá "Avanzar ciclo" para ver qué pasa con el código de cada artefacto.</div>' +
      '  </div>' +
      '</div>'
    );
  }

  function mountLab6(container) {
    var roleNotes = {
      cliente: 'Vista Cliente: ve objetivos, procesos y lista de casos de uso; ocultamos clases e infraestructura.',
      analista: 'Vista Analista: ve Modelo de Dominio, entidades, relaciones, diagramas de casos de uso y DSS.',
      arquitecto: 'Vista Arquitecto: controla módulos, servicios, librerías, mantenibilidad y escalabilidad.',
      programador: 'Vista Programador: ve clases, interfaces y detalles exactos de implementación.'
    };
    var roleEls = {
      cliente: container.querySelector('#l6-v-cliente'),
      analista: container.querySelector('#l6-v-analista'),
      arquitecto: container.querySelector('#l6-v-arquitecto'),
      programador: container.querySelector('#l6-v-programador')
    };
    var roleStatus = container.querySelector('#l6-role-status');

    function setRole(role) {
      Object.keys(roleEls).forEach(function (k) {
        roleEls[k].style.opacity = k === role ? '1' : '0.24';
      });
      roleStatus.textContent = roleNotes[role] || '';
    }

    var roleBtns = container.querySelectorAll('[data-l6-role]');
    for (var i = 0; i < roleBtns.length; i++) {
      roleBtns[i].addEventListener('click', function (ev) {
        for (var j = 0; j < roleBtns.length; j++) roleBtns[j].classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
        setRole(ev.currentTarget.getAttribute('data-l6-role'));
      });
    }
    setRole('cliente');

    // Race
    var cycle = 0;
    var lanesEl = container.querySelector('#l6-lanes');
    var cycleNum = container.querySelector('#l6-cycle-num');
    var raceStatus = container.querySelector('#l6-race-status');

    function renderLanes() {
      cycleNum.textContent = String(cycle);
      var protoBlocks = cycle === 0 ? 'Esperando...' : (cycle === 1 ? 'Código de prueba v1' : '✓ Validado y DESCARTADO');
      var upPct = Math.round((cycle / 3) * 100);
      var mvpRet = cycle === 0 ? 0 : (cycle === 1 ? 28 : (cycle === 2 ? 56 : 82));

      lanesEl.innerHTML =
        '<div class="lab-lane">' +
        '  <div class="lab-lane-head"><strong>Prototipo</strong><span>' + esc(protoBlocks) + '</span></div>' +
        '  <div class="progress-track"><div class="progress-fill" style="width:' + (cycle === 1 ? 45 : (cycle >= 2 ? 100 : 0)) + '%;background:' + (cycle >= 2 ? 'var(--warning)' : 'var(--primary)') + ';"></div></div>' +
        '</div>' +
        '<div class="lab-lane">' +
        '  <div class="lab-lane-head"><strong>Iteración UP</strong><span>' + (cycle === 0 ? 'Sin incrementos' : 'Subconjunto real ' + cycle + '/3 (acumulativo)') + '</span></div>' +
        '  <div class="progress-track"><div class="progress-fill" style="width:' + upPct + '%;background:var(--primary);"></div></div>' +
        '</div>' +
        '<div class="lab-lane">' +
        '  <div class="lab-lane-head"><strong>MVP (Market Fit)</strong><span>Retención: ' + mvpRet + '% ' + (cycle === 3 ? '→ ¡Producto final!' : '') + '</span></div>' +
        '  <div class="progress-track"><div class="progress-fill" style="width:' + mvpRet + '%;background:var(--success);"></div></div>' +
        '</div>';

      var notes = [
        'Pulsá "Avanzar ciclo" para comparar cómo evolucionan los tres en cada paso.',
        'Ciclo 1: Prototipo recoge feedback rápido; UP integra su 1° subconjunto probado; MVP lanza versión mínima a usuarios.',
        'Ciclo 2: Prototipo cumplió su objetivo y se descarta; UP acumula nuevas funciones; MVP mide y aprende subiendo retención.',
        'Ciclo 3: UP sigue acumulando hacia la versión final; el MVP logra retención sostenida (Market Fit) y mantiene Continuous Discovery.'
      ];
      raceStatus.textContent = notes[cycle];
    }

    container.querySelector('#l6-race-step').addEventListener('click', function () {
      cycle = cycle < 3 ? cycle + 1 : 0;
      renderLanes();
    });
    container.querySelector('#l6-race-reset').addEventListener('click', function () {
      cycle = 0;
      renderLanes();
    });
    renderLanes();
  }

  // =========================================================================
  // LAB 7: Escáner UP y Flujo DSS -> Modelo de Dominio (U5)
  // =========================================================================
  function renderLab7() {
    return (
      '<div class="lab-dual-grid">' +
      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel A · Escáner Animado de Fases UP</div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l7-play-up">▶ Recorrer fases UP</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" id="l7-next-up">Siguiente fase →</button>' +
      '    </div>' +
      '    <div class="chip-group" style="margin-bottom:0.65rem;">' +
      '      <button type="button" class="chip is-active" data-l7-phase="0">1. Inicio</button>' +
      '      <button type="button" class="chip" data-l7-phase="1">2. Elaboración</button>' +
      '      <button type="button" class="chip" data-l7-phase="2">3. Construcción</button>' +
      '      <button type="button" class="chip" data-l7-phase="3">4. Transición</button>' +
      '    </div>' +
      '    <div class="lab-up-bars" id="l7-up-bars"></div>' +
      '    <div class="lab-status" id="l7-up-status"></div>' +
      '  </div>' +

      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel B · DSS Caja Negra → Modelo de Dominio</div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l7-sim-dss">▶ Simular Caso de Uso (Registrar Venta)</button>' +
      '    </div>' +
      '    <div class="lab-svg-wrap">' +
      '      <svg viewBox="0 0 430 220" role="img" aria-label="DSS y extracción al Modelo de Dominio">' +
      '        <defs><marker id="lab-arr-7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="var(--success)"></path></marker></defs>' +
      '        <rect x="24" y="16" width="78" height="28" rx="6" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
      '        <text x="63" y="34" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">:Cajero</text>' +
      '        <line x1="63" y1="44" x2="63" y2="196" stroke="var(--border-strong)" stroke-dasharray="4 3"></line>' +
      '        <rect x="176" y="16" width="96" height="28" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
      '        <text x="224" y="34" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">:Sistema</text>' +
      '        <line x1="224" y1="44" x2="224" y2="196" stroke="var(--border-strong)" stroke-dasharray="4 3"></line>' +
      '        <g id="l7-msg-1" style="opacity:0.25;"><line x1="66" y1="74" x2="218" y2="74" stroke="var(--success)" stroke-width="2.2" marker-end="url(#lab-arr-7)"></line><text x="142" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. crearNuevaVenta()</text></g>' +
      '        <g id="l7-msg-2" style="opacity:0.25;"><line x1="66" y1="118" x2="218" y2="118" stroke="var(--success)" stroke-width="2.2" marker-end="url(#lab-arr-7)"></line><text x="142" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. introducirArticulo(id)</text></g>' +
      '        <g id="l7-msg-3" style="opacity:0.25;"><line x1="66" y1="162" x2="218" y2="162" stroke="var(--success)" stroke-width="2.2" marker-end="url(#lab-arr-7)"></line><text x="142" y="154" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">3. finalizarVenta()</text></g>' +
      '        <rect x="292" y="16" width="124" height="186" rx="10" fill="var(--violet-soft)" stroke="var(--violet)"></rect>' +
      '        <text x="354" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="var(--violet)">MOD. DOMINIO</text>' +
      '        <g id="l7-dom-venta" style="opacity:0.2;"><rect x="306" y="52" width="96" height="52" rx="6" fill="var(--surface-elevated)" stroke="var(--violet)"></rect><text x="354" y="72" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">Venta</text><text x="354" y="92" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">fecha, total</text></g>' +
      '        <g id="l7-dom-art" style="opacity:0.2;"><rect x="306" y="120" width="96" height="52" rx="6" fill="var(--surface-elevated)" stroke="var(--violet)"></rect><text x="354" y="140" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">Artículo</text><text x="354" y="160" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">id, precio</text></g>' +
      '      </svg>' +
      '    </div>' +
      '    <div class="lab-status" id="l7-dss-status">El DSS trata al sistema como caja negra; de los sustantivos del Caso de Uso nacen clases conceptuales del Dominio.</div>' +
      '  </div>' +
      '</div>'
    );
  }

  function mountLab7(container) {
    var phases = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.upPhases) || [];
    var phaseIdx = 0;
    var upTimer = null;
    var upBars = container.querySelector('#l7-up-bars');
    var upStatus = container.querySelector('#l7-up-status');
    var phaseBtns = container.querySelectorAll('[data-l7-phase]');
    var playUpBtn = container.querySelector('#l7-play-up');

    function renderPhase() {
      var p = phases[phaseIdx];
      if (!p) return;
      for (var i = 0; i < phaseBtns.length; i++) {
        phaseBtns[i].classList.toggle('is-active', Number(phaseBtns[i].getAttribute('data-l7-phase')) === phaseIdx);
      }
      var rows = [
        ['Riesgo restante', p.risk, 'var(--danger)'],
        ['Modelado Negocio', p.efforts.neg, 'var(--violet)'],
        ['Requerimientos', p.efforts.req, 'var(--primary)'],
        ['Diseño', p.efforts.dis, 'var(--teal)'],
        ['Implementación', p.efforts.imp, 'var(--success)'],
        ['Pruebas', p.efforts.pru, 'var(--warning)']
      ];
      upBars.innerHTML = rows.map(function (r) {
        return (
          '<div class="lab-err-row">' +
          '  <span class="lab-err-name">' + esc(r[0]) + '</span>' +
          '  <div class="progress-track" style="margin:0;flex:1;"><div class="progress-fill" style="width:' + r[1] + '%;background:' + r[2] + ';"></div></div>' +
          '  <span class="lab-err-cost">' + r[1] + '%</span>' +
          '</div>'
        );
      }).join('');
      upStatus.innerHTML = '<strong>' + esc(p.name) + ':</strong> ' + esc(p.summary);
    }

    for (var b = 0; b < phaseBtns.length; b++) {
      phaseBtns[b].addEventListener('click', function (ev) {
        if (upTimer) { clearInterval(upTimer); upTimer = null; playUpBtn.textContent = '▶ Recorrer fases UP'; }
        phaseIdx = Number(ev.currentTarget.getAttribute('data-l7-phase'));
        renderPhase();
      });
    }

    container.querySelector('#l7-next-up').addEventListener('click', function () {
      if (upTimer) { clearInterval(upTimer); upTimer = null; playUpBtn.textContent = '▶ Recorrer fases UP'; }
      phaseIdx = (phaseIdx + 1) % phases.length;
      renderPhase();
    });

    playUpBtn.addEventListener('click', function () {
      if (upTimer) {
        clearInterval(upTimer);
        upTimer = null;
        playUpBtn.textContent = '▶ Recorrer fases UP';
      } else {
        playUpBtn.textContent = '⏸ Pausar recorrido';
        upTimer = registerInterval(function () {
          phaseIdx = (phaseIdx + 1) % phases.length;
          renderPhase();
        }, 1600);
      }
    });

    // Panel B: DSS step simulation
    var dssStep = 0;
    var m1 = container.querySelector('#l7-msg-1');
    var m2 = container.querySelector('#l7-msg-2');
    var m3 = container.querySelector('#l7-msg-3');
    var dV = container.querySelector('#l7-dom-venta');
    var dA = container.querySelector('#l7-dom-art');
    var dssStatus = container.querySelector('#l7-dss-status');

    function updateDss() {
      m1.style.opacity = dssStep >= 1 ? '1' : '0.22';
      m2.style.opacity = dssStep >= 2 ? '1' : '0.22';
      m3.style.opacity = dssStep >= 3 ? '1' : '0.22';
      dV.style.opacity = dssStep >= 1 ? '1' : '0.2';
      dA.style.opacity = dssStep >= 2 ? '1' : '0.2';

      var msgs = [
        'El DSS trata al sistema como caja negra; de los sustantivos nacen clases conceptuales del Dominio.',
        'Paso 1: El actor envía crearNuevaVenta() → aparece la clase conceptual Venta en el Modelo de Dominio.',
        'Paso 2: introducirArticulo(id) → extraemos el concepto Artículo (aún sin métodos de software).',
        'Paso 3: finalizarVenta() cierra el happy path del escenario principal en caja negra.'
      ];
      dssStatus.textContent = msgs[dssStep];
    }

    container.querySelector('#l7-sim-dss').addEventListener('click', function () {
      dssStep = 1;
      updateDss();
      registerTimeout(function () { dssStep = 2; updateDss(); }, 800);
      registerTimeout(function () { dssStep = 3; updateDss(); }, 1600);
    });

    renderPhase();
    updateDss();
  }

  // =========================================================================
  // LAB 8: Vibe-Coding vs. Workflow SDD y Evolución de Specs (U6)
  // =========================================================================
  function renderLab8() {
    return (
      '<div class="lab-dual-grid">' +
      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel A · Vibe-Coding vs. Workflow SDD (Human Gate)</div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-danger-ghost btn-sm" id="l8-btn-vibe">Generar con Vibe-Coding (sin SPEC)</button>' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l8-btn-sdd">Iniciar Workflow SDD</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" id="l8-btn-approve" disabled>✓ Aprobar Human Gate</button>' +
      '    </div>' +
      '    <div class="lab-sdd-pipeline" id="l8-pipeline"></div>' +
      '    <div class="lab-status" id="l8-pipe-status">Compará enviar un prompt suelto frente a validar una SPEC con puertas humanas y DoR.</div>' +
      '  </div>' +

      '  <div class="lab-stage">' +
      '    <div class="lab-subhead">Panel B · Evolución: Spec-First / Anchored / Source</div>' +
      '    <div class="chip-group" style="margin-bottom:0.65rem;">' +
      '      <button type="button" class="chip is-active" data-l8-mode="first">Spec-First</button>' +
      '      <button type="button" class="chip" data-l8-mode="anchored">Spec-Anchored</button>' +
      '      <button type="button" class="chip" data-l8-mode="source">Spec-as-Source</button>' +
      '    </div>' +
      '    <div class="lab-controls">' +
      '      <button type="button" class="btn btn-primary btn-sm" id="l8-btn-change">▶ Simular cambio de requisito</button>' +
      '    </div>' +
      '    <div class="lab-svg-wrap">' +
      '      <svg viewBox="0 0 420 150" role="img" aria-label="Evolución de SPEC y Código según enfoque SDD">' +
      '        <rect id="l8-box-spec" x="24" y="24" width="160" height="96" rx="12" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"></rect>' +
      '        <text x="104" y="54" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">SPEC (.md)</text>' +
      '        <text id="l8-spec-st" x="104" y="80" text-anchor="middle" font-size="11.5" fill="var(--ink)">Versión v1</text>' +
      '        <text id="l8-spec-sub" x="104" y="100" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Fuente de verdad</text>' +
      '        <rect id="l8-box-code" x="236" y="24" width="160" height="96" rx="12" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect>' +
      '        <text x="316" y="54" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--success)">CÓDIGO</text>' +
      '        <text id="l8-code-st" x="316" y="80" text-anchor="middle" font-size="11.5" fill="var(--ink)">Generado v1</text>' +
      '        <text id="l8-code-sub" x="316" y="100" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Consecuencia</text>' +
      '      </svg>' +
      '    </div>' +
      '    <div class="lab-status" id="l8-evo-status"></div>' +
      '  </div>' +
      '</div>'
    );
  }

  function mountLab8(container) {
    var vibeVariants = (global.ADS_JOURNEY_LABS_DATA && global.ADS_JOURNEY_LABS_DATA.vibeVariants) || [];
    var vibeIdx = 0;
    var sddStep = 0; // 0 idle, 1 plan->gate1, 2 spec->gate2(DoR), 3 built
    var pipeEl = container.querySelector('#l8-pipeline');
    var pipeStatus = container.querySelector('#l8-pipe-status');
    var approveBtn = container.querySelector('#l8-btn-approve');

    function renderPipe() {
      var steps = [
        { title: '1. Planificar estructura', active: sddStep >= 1 },
        { title: 'Human Gate (V&V Plan)', gate: true, active: sddStep >= 2, waiting: sddStep === 1 },
        { title: '2. SPEC (Smart Kid + EARS + Gherkin)', active: sddStep >= 2 },
        { title: 'Human Gate + DoR', gate: true, active: sddStep >= 3, waiting: sddStep === 2 },
        { title: '3. Código generado y verificado', active: sddStep >= 3 }
      ];
      pipeEl.innerHTML = steps.map(function (st) {
        var cls = 'lab-pipe-node';
        if (st.waiting) cls += ' is-waiting';
        else if (st.active) cls += ' is-done';
        if (st.gate) cls += ' is-gate';
        return '<div class="' + cls + '">' + esc(st.title) + '</div>';
      }).join('');
      approveBtn.disabled = !(sddStep === 1 || sddStep === 2);
    }

    container.querySelector('#l8-btn-vibe').addEventListener('click', function () {
      sddStep = 0;
      renderPipe();
      var txt = vibeVariants[vibeIdx % vibeVariants.length];
      vibeIdx++;
      pipeStatus.innerHTML = '<strong style="color:var(--danger);">Vibe-Coding (no determinista):</strong> ' + esc(txt) + ' (Volvé a pulsar para ver cómo cambia cada vez sin trazabilidad).';
    });

    container.querySelector('#l8-btn-sdd').addEventListener('click', function () {
      sddStep = 1;
      renderPipe();
      pipeStatus.textContent = 'Fase 1 lista: antes de redactar la SPEC completa, un humano debe aprobar la Gate 1.';
    });

    approveBtn.addEventListener('click', function () {
      if (sddStep === 1) {
        sddStep = 2;
        renderPipe();
        pipeStatus.textContent = 'Gate 1 aprobada. Fase 2 completada (Smart Kid + EARS + casos de borde + IDs). Revisá DoR y aprobá Gate 2.';
      } else if (sddStep === 2) {
        sddStep = 3;
        renderPipe();
        pipeStatus.textContent = '✓ DoR verificado por humano: Fase 3 genera y evalúa código determinísticamente guiado por la SPEC.';
      }
    });

    // Panel B: Evolution
    var evoMode = 'first';
    var changed = false;
    var bSpec = container.querySelector('#l8-box-spec');
    var bCode = container.querySelector('#l8-box-code');
    var sSt = container.querySelector('#l8-spec-st');
    var sSub = container.querySelector('#l8-spec-sub');
    var cSt = container.querySelector('#l8-code-st');
    var cSub = container.querySelector('#l8-code-sub');
    var evoStatus = container.querySelector('#l8-evo-status');

    function renderEvo() {
      if (!changed) {
        bSpec.style.opacity = '1';
        bCode.style.opacity = '1';
        sSt.textContent = 'SPEC v1';
        sSub.textContent = 'Definición inicial';
        cSt.textContent = 'Código v1';
        cSub.textContent = 'Generado por IA';
        evoStatus.textContent = 'Estado inicial v1. Pulsá "Simular cambio de requisito" para ver cómo reacciona este enfoque.';
        return;
      }
      if (evoMode === 'first') {
        bSpec.style.opacity = '0.3';
        bCode.style.opacity = '1';
        sSt.textContent = 'DESCARTADA';
        sSub.textContent = 'Sin trazabilidad';
        cSt.textContent = 'Código v2 (manual)';
        cSub.textContent = 'Solo evoluciona código';
        evoStatus.textContent = 'Spec-First: la spec inicial se descartó; ahora solo evoluciona el código y ante nuevos cambios hay que escribir specs nuevas.';
      } else if (evoMode === 'anchored') {
        bSpec.style.opacity = '1';
        bCode.style.opacity = '1';
        sSt.textContent = 'SPEC v2 (actualizada)';
        sSub.textContent = 'Evoluciona a la par';
        cSt.textContent = 'Código v2 (sync)';
        cSub.textContent = 'Mantiene trazabilidad';
        evoStatus.textContent = 'Spec-Anchored: SPEC y código se actualizan juntos en sincronía permanente.';
      } else {
        bSpec.style.opacity = '1';
        bCode.style.opacity = '1';
        sSt.textContent = 'SPEC v2 (única fuente)';
        sSub.textContent = 'Solo evoluciona SPEC';
        cSt.textContent = 'Código v1 borrado → v2';
        cSub.textContent = 'Regenerado desde cero';
        evoStatus.textContent = 'Spec-as-Source: se modifica solo la SPEC, el código viejo se descarta y se regenera limpio.';
      }
    }

    var modeBtns = container.querySelectorAll('[data-l8-mode]');
    for (var m = 0; m < modeBtns.length; m++) {
      modeBtns[m].addEventListener('click', function (ev) {
        for (var k = 0; k < modeBtns.length; k++) modeBtns[k].classList.remove('is-active');
        ev.currentTarget.classList.add('is-active');
        evoMode = ev.currentTarget.getAttribute('data-l8-mode');
        changed = false;
        renderEvo();
      });
    }

    container.querySelector('#l8-btn-change').addEventListener('click', function () {
      changed = true;
      renderEvo();
    });

    renderPipe();
    renderEvo();
  }

  // =========================================================================
  // Registry API
  // =========================================================================
  var LABS = {
    'lab-u1-sistema': { render: renderLab1, mount: mountLab1 },
    'lab-u1-espacios': { render: renderLab2, mount: mountLab2 },
    'lab-u2-ciclos': { render: renderLab3, mount: mountLab3 },
    'lab-u3-elicitacion': { render: renderLab4, mount: mountLab4 },
    'lab-u3-errores-prio': { render: renderLab5, mount: mountLab5 },
    'lab-u4-modelos-mvp': { render: renderLab6, mount: mountLab6 },
    'lab-u5-aoo-up': { render: renderLab7, mount: mountLab7 },
    'lab-u6-sdd': { render: renderLab8, mount: mountLab8 }
  };

  global.ADS_JOURNEY_LABS = {
    renderLab: function (labId) {
      var entry = LABS[labId];
      return entry ? entry.render() : '<div class="empty-state">Laboratorio no disponible.</div>';
    },
    mountLab: function (labId, container) {
      unmountLabs();
      var entry = LABS[labId];
      if (entry && container) {
        entry.mount(container);
      }
    },
    unmountLabs: unmountLabs
  };
})(window);
