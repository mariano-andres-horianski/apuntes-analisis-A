(function (global) {
  'use strict';

  function arrowDef(id, colorVar) {
    return (
      '<marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 1 L 10 5 L 0 9 z" fill="var(--' + colorVar + ')"></path>' +
      '</marker>'
    );
  }

  global.ADS_EXAM_PREP_VISUALS = {
    // =========================================================================
    // EJE 1: TGS, Entradas vs. Recursos, 4 Principios y 5 Criterios
    // =========================================================================
    'g1-tgs:0': {
      kicker: 'Esquema animado · 1.1',
      title: 'Entradas que se transforman vs. Recursos que sostienen',
      accent: 'primary',
      caption: 'Las Entradas cruzan la frontera para convertirse en Salidas; los Recursos permanecen dentro operando el proceso (ejemplo Supermercado POS).',
      svg:
        '<svg viewBox="0 0 820 258" role="img" aria-label="Diagrama animado de entradas versus recursos dentro de un sistema abierto">' +
        '  <defs>' +
        arrowDef('epv-11-arr-p', 'primary') +
        arrowDef('epv-11-arr-s', 'success') +
        arrowDef('epv-11-arr-w', 'warning') +
        '  </defs>' +
        '  <rect x="14" y="10" width="792" height="238" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="6 4"></rect>' +
        '  <text x="30" y="30" font-size="11" font-weight="700" fill="var(--ink-secondary)">ENTORNO / AMBIENTE EXTERIOR</text>' +
        '  <rect x="214" y="38" width="392" height="196" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2.2"></rect>' +
        '  <text x="410" y="56" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">SISTEMA (FRONTERA) — EJ. VENTAS POS</text>' +
        '  <rect x="24" y="66" width="160" height="78" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.6"></rect>' +
        '  <text x="104" y="88" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--primary)">ENTRADAS</text>' +
        '  <text x="104" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">Código barras · Pago</text>' +
        '  <text x="104" y="126" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">Se transforman</text>' +
        '  <line class="anim-flow" x1="184" y1="105" x2="314" y2="105" stroke="var(--primary)" stroke-width="2.4" marker-end="url(#epv-11-arr-p)"></line>' +
        '  <text x="263" y="95" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">Entran</text>' +
        '  <rect x="316" y="66" width="188" height="78" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.8"></rect>' +
        '  <text x="410" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="var(--teal)">CONVERSIÓN</text>' +
        '  <text x="410" y="110" text-anchor="middle" font-size="10.5" fill="var(--ink)">Procesa la venta</text>' +
        '  <text x="410" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Agrega valor</text>' +
        '  <line class="anim-flow" x1="504" y1="105" x2="634" y2="105" stroke="var(--success)" stroke-width="2.4" marker-end="url(#epv-11-arr-s)"></line>' +
        '  <text x="557" y="95" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">Salen</text>' +
        '  <rect x="636" y="66" width="160" height="78" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="716" y="88" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--success)">SALIDAS</text>' +
        '  <text x="716" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">Ticket fiscal generado</text>' +
        '  <text x="716" y="126" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">Stock actualizado</text>' +
        '  <line class="anim-flow" x1="364" y1="168" x2="364" y2="146" stroke="var(--warning)" stroke-width="2.2" marker-end="url(#epv-11-arr-w)"></line>' +
        '  <line class="anim-flow" x1="456" y1="168" x2="456" y2="146" stroke="var(--warning)" stroke-width="2.2" marker-end="url(#epv-11-arr-w)"></line>' +
        '  <rect x="234" y="168" width="352" height="54" rx="10" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.6"></rect>' +
        '  <text x="410" y="189" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">RECURSOS INTERNOS (sostienen, no salen)</text>' +
        '  <text x="410" y="209" text-anchor="middle" font-size="10.5" fill="var(--ink)">Cajera · Lector láser · PC / Software POS · Energía</text>' +
        '</svg>'
    },

    'g1-tgs:1': {
      kicker: 'Panel 4-en-1 · 1.2',
      title: 'Los 4 principios generales de los sistemas automatizados',
      accent: 'teal',
      caption: 'Cada principio automatizado con su relación visual: especialización rígida, costo de mantenimiento, jerarquía recursiva y crecimiento continuo.',
      svg:
        '<svg viewBox="0 0 820 278" role="img" aria-label="Panel visual de los 4 principios generales de sistemas automatizados">' +
        '  <defs>' +
        arrowDef('epv-12-arr-v', 'violet') +
        '  </defs>' +
        '  <rect x="16" y="12" width="386" height="122" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="30" y="33" font-size="11.5" font-weight="700" fill="var(--primary)">1. ESPECIALIZACIÓN ↑  ⇒  ADAPTABILIDAD ↓</text>' +
        '  <text x="30" y="58" font-size="10.5" font-weight="700" fill="var(--ink)">Especialización</text>' +
        '  <rect x="148" y="47" width="188" height="14" rx="7" fill="var(--surface-muted)"></rect>' +
        '  <rect x="148" y="47" width="166" height="14" rx="7" fill="var(--primary)"></rect>' +
        '  <text x="346" y="58" font-size="10.5" font-weight="700" fill="var(--primary)">Alta</text>' +
        '  <text x="30" y="84" font-size="10.5" font-weight="700" fill="var(--ink)">Adaptabilidad</text>' +
        '  <rect x="148" y="73" width="188" height="14" rx="7" fill="var(--surface-muted)"></rect>' +
        '  <rect x="148" y="73" width="38" height="14" rx="7" fill="var(--danger)"></rect>' +
        '  <text x="346" y="84" font-size="10.5" font-weight="700" fill="var(--danger)">Baja</text>' +
        '  <text x="30" y="114" font-size="10.5" fill="var(--ink-secondary)">Reglas fijas (Monotributo) → cambio obliga a reescribir</text>' +
        '  <rect x="418" y="12" width="386" height="122" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="432" y="33" font-size="11.5" font-weight="700" fill="var(--teal)">2. MAYOR TAMAÑO  ⇒  MÁS MANTENIMIENTO</text>' +
        '  <text x="432" y="58" font-size="10.5" font-weight="700" fill="var(--ink)">Planilla kiosco</text>' +
        '  <rect x="546" y="47" width="150" height="14" rx="7" fill="var(--surface-muted)"></rect>' +
        '  <rect x="546" y="47" width="34" height="14" rx="7" fill="var(--teal)"></rect>' +
        '  <text x="706" y="58" font-size="10.5" font-weight="700" fill="var(--teal)">Poco equipo</text>' +
        '  <text x="432" y="84" font-size="10.5" font-weight="700" fill="var(--ink)">ERP completo</text>' +
        '  <rect x="546" y="73" width="150" height="14" rx="7" fill="var(--surface-muted)"></rect>' +
        '  <rect x="546" y="73" width="142" height="14" rx="7" fill="var(--warning)"></rect>' +
        '  <text x="706" y="84" font-size="10.5" font-weight="700" fill="var(--warning)">Alto costo</text>' +
        '  <text x="432" y="114" font-size="10.5" fill="var(--ink-secondary)">Más módulos e interfaces = más servidores y pruebas</text>' +
        '  <rect x="16" y="146" width="386" height="122" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="30" y="166" font-size="11.5" font-weight="700" fill="var(--warning)">3. SUPRASISTEMA ⊃ SISTEMA ⊃ SUBSISTEMAS</text>' +
        '  <rect x="34" y="175" width="350" height="84" rx="10" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <text x="209" y="191" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">SUPRASISTEMA (Salud / Entes bancarios)</text>' +
        '  <rect x="64" y="197" width="290" height="54" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="209" y="213" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">SISTEMA (Plataforma Turnos)</text>' +
        '  <rect x="98" y="219" width="222" height="24" rx="6" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="209" y="235" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">SUBSISTEMAS (Pagos · Agenda)</text>' +
        '  <rect x="418" y="146" width="386" height="122" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="432" y="166" font-size="11.5" font-weight="700" fill="var(--violet)">4. LOS SISTEMAS CRECEN EN EL TIEMPO</text>' +
        '  <line x1="448" y1="238" x2="778" y2="238" stroke="var(--border-strong)" stroke-width="1.5"></line>' +
        '  <line x1="448" y1="176" x2="448" y2="238" stroke="var(--border-strong)" stroke-width="1.5"></line>' +
        '  <path class="anim-flow" d="M 454 231 L 520 231 L 520 216 L 598 216 L 598 200 L 678 200 L 678 184 L 764 184" fill="none" stroke="var(--violet)" stroke-width="2.5" stroke-linejoin="round" marker-end="url(#epv-12-arr-v)"></path>' +
        '  <text x="486" y="254" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">v1 Notas</text>' +
        '  <text x="559" y="254" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">v2 Pagos</text>' +
        '  <text x="638" y="254" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">v3 Actas</text>' +
        '  <text x="724" y="254" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">v4 Apps</text>' +
        '  <text x="462" y="190" font-size="10.5" font-weight="700" fill="var(--ink)">Nuevas leyes + uso real</text>' +
        '</svg>'
    },

    'g1-tgs:2': {
      kicker: 'Espectros comparativos · 1.3',
      title: 'Clasificación TGS de 5 criterios: Telefonía vs. Respiratorio',
      accent: 'violet',
      caption: 'Comparación visual rápida: ambos coinciden en 3 criterios (Físico, Abierto, Probabilístico) y se diferencian en Origen y Variables.',
      svg:
        '<svg viewBox="0 0 820 282" role="img" aria-label="Comparativa visual en 5 ejes TGS entre sistema de telefonía y sistema respiratorio">' +
        '  <rect x="14" y="10" width="792" height="36" rx="8" fill="var(--surface)" stroke="var(--border)"></rect>' +
        '  <text x="28" y="33" font-size="11.5" font-weight="700" fill="var(--ink)">5 CRITERIOS DE CLASIFICACIÓN TGS</text>' +
        '  <circle cx="448" cy="28" r="6" fill="var(--primary)"></circle>' +
        '  <text x="462" y="32" font-size="11" font-weight="700" fill="var(--primary)">Telefonía</text>' +
        '  <polygon points="578,21 585,28 578,35 571,28" fill="var(--teal)"></polygon>' +
        '  <text x="592" y="32" font-size="11" font-weight="700" fill="var(--teal)">Respiratorio</text>' +
        '  <text x="748" y="32" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">Resultado</text>' +
        // Row 1: Constitucion
        '  <text x="24" y="75" font-size="11.5" font-weight="700" fill="var(--ink)">1. Constitución</text>' +
        '  <rect x="158" y="58" width="110" height="24" rx="6" fill="var(--surface)" stroke="var(--border)"></rect>' +
        '  <text x="213" y="74" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Abstracto</text>' +
        '  <line x1="274" y1="70" x2="556" y2="70" stroke="var(--border-strong)" stroke-width="2.5"></line>' +
        '  <circle cx="526" cy="70" r="6.5" fill="var(--primary)"></circle>' +
        '  <polygon points="546,62 554,70 546,78 538,70" fill="var(--teal)"></polygon>' +
        '  <rect x="562" y="58" width="122" height="24" rx="6" fill="var(--violet-soft)" stroke="var(--violet)"></rect>' +
        '  <text x="623" y="74" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">Físico</text>' +
        '  <rect x="698" y="58" width="102" height="24" rx="12" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
        '  <text x="749" y="74" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">= Físicos</text>' +
        // Row 2: Entorno
        '  <text x="24" y="114" font-size="11.5" font-weight="700" fill="var(--ink)">2. Entorno</text>' +
        '  <rect x="158" y="97" width="110" height="24" rx="6" fill="var(--surface)" stroke="var(--border)"></rect>' +
        '  <text x="213" y="113" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Cerrado</text>' +
        '  <line x1="274" y1="109" x2="556" y2="109" stroke="var(--border-strong)" stroke-width="2.5"></line>' +
        '  <circle cx="526" cy="109" r="6.5" fill="var(--primary)"></circle>' +
        '  <polygon points="546,101 554,109 546,117 538,109" fill="var(--teal)"></polygon>' +
        '  <rect x="562" y="97" width="122" height="24" rx="6" fill="var(--violet-soft)" stroke="var(--violet)"></rect>' +
        '  <text x="623" y="113" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">Abierto</text>' +
        '  <rect x="698" y="97" width="102" height="24" rx="12" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
        '  <text x="749" y="113" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">= Abiertos</text>' +
        // Row 3: Origen
        '  <text x="24" y="153" font-size="11.5" font-weight="700" fill="var(--ink)">3. Origen</text>' +
        '  <rect x="158" y="136" width="110" height="24" rx="6" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="213" y="152" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">Natural</text>' +
        '  <line x1="274" y1="148" x2="556" y2="148" stroke="var(--border-strong)" stroke-width="2.5"></line>' +
        '  <polygon points="292,140 300,148 292,156 284,148" fill="var(--teal)"></polygon>' +
        '  <circle cx="538" cy="148" r="6.5" fill="var(--primary)"></circle>' +
        '  <rect x="562" y="136" width="122" height="24" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="623" y="152" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">Artificial</text>' +
        '  <rect x="698" y="136" width="102" height="24" rx="12" fill="var(--warning-soft)" stroke="var(--warning)"></rect>' +
        '  <text x="749" y="152" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">≠ Origen</text>' +
        // Row 4: Variables
        '  <text x="24" y="192" font-size="11.5" font-weight="700" fill="var(--ink)">4. Variables</text>' +
        '  <rect x="158" y="175" width="110" height="24" rx="6" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="213" y="191" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">Continuo</text>' +
        '  <line x1="274" y1="187" x2="556" y2="187" stroke="var(--border-strong)" stroke-width="2.5"></line>' +
        '  <polygon points="292,179 300,187 292,195 284,187" fill="var(--teal)"></polygon>' +
        '  <circle cx="538" cy="187" r="6.5" fill="var(--primary)"></circle>' +
        '  <rect x="562" y="175" width="122" height="24" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="623" y="191" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">Discreto</text>' +
        '  <rect x="698" y="175" width="102" height="24" rx="12" fill="var(--warning-soft)" stroke="var(--warning)"></rect>' +
        '  <text x="749" y="191" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">≠ Variables</text>' +
        // Row 5: Previsibilidad
        '  <text x="24" y="231" font-size="11.5" font-weight="700" fill="var(--ink)">5. Previsib.</text>' +
        '  <rect x="158" y="214" width="110" height="24" rx="6" fill="var(--surface)" stroke="var(--border)"></rect>' +
        '  <text x="213" y="230" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Determinístico</text>' +
        '  <line x1="274" y1="226" x2="556" y2="226" stroke="var(--border-strong)" stroke-width="2.5"></line>' +
        '  <circle cx="526" cy="226" r="6.5" fill="var(--primary)"></circle>' +
        '  <polygon points="546,218 554,226 546,234 538,226" fill="var(--teal)"></polygon>' +
        '  <rect x="562" y="214" width="122" height="24" rx="6" fill="var(--violet-soft)" stroke="var(--violet)"></rect>' +
        '  <text x="623" y="230" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">Probabilístico</text>' +
        '  <rect x="698" y="214" width="102" height="24" rx="12" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
        '  <text x="749" y="230" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">= Probab.</text>' +
        // Footer note
        '  <rect x="14" y="248" width="792" height="26" rx="13" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="410" y="265" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">Tip de parcial: justificá cada uno de los 5 criterios con una frase concreta (nunca palabras sueltas)</text>' +
        '</svg>'
    },

    // =========================================================================
    // EJE 2: Enfoque Sistémico, Análisis, Ciclo de Vida e IR
    // =========================================================================
    'g2-enfoque:0': {
      kicker: 'Puente metodológico · 2.1',
      title: 'Paralelismo Enfoque de Sistemas ↔ Ingeniería de Software (3P+A)',
      accent: 'primary',
      caption: 'La Ingeniería de Software traslada los tres pasos del Enfoque Sistémico al desarrollo profesional bajo el paraguas 3P+A.',
      svg:
        '<svg viewBox="0 0 820 264" role="img" aria-label="Puente comparativo entre Enfoque de Sistemas e Ingeniería de Software">' +
        '  <defs>' +
        arrowDef('epv-21-arr-p', 'primary') +
        arrowDef('epv-21-arr-t', 'teal') +
        arrowDef('epv-21-arr-s', 'success') +
        '  </defs>' +
        '  <rect x="20" y="12" width="780" height="32" rx="8" fill="var(--surface)" stroke="var(--primary)"></rect>' +
        '  <text x="410" y="32" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">MARCO 3P + A: Proyecto · Proceso · Producto + Arquitectura</text>' +
        '  <text x="190" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-secondary)">ENFOQUE DE SISTEMAS (TGS aplicada)</text>' +
        '  <text x="630" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-secondary)">INGENIERÍA DE SOFTWARE</text>' +
        // Fila 1
        '  <rect x="20" y="76" width="336" height="50" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.6"></rect>' +
        '  <text x="188" y="97" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">1. Formulación del problema</text>' +
        '  <text x="188" y="115" text-anchor="middle" font-size="10.5" fill="var(--ink)">Causas, alcance y restricciones</text>' +
        '  <line class="anim-flow" x1="358" y1="101" x2="462" y2="101" stroke="var(--primary)" stroke-width="2.2" marker-start="url(#epv-21-arr-p)" marker-end="url(#epv-21-arr-p)"></line>' +
        '  <rect x="464" y="76" width="336" height="50" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.6"></rect>' +
        '  <text x="632" y="97" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">Análisis / Product Discovery</text>' +
        '  <text x="632" y="115" text-anchor="middle" font-size="10.5" fill="var(--ink)">Espacio del Problema (el QUÉ)</text>' +
        // Fila 2
        '  <rect x="20" y="138" width="336" height="50" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="188" y="159" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal)">2. Diseño de soluciones globales</text>' +
        '  <text x="188" y="177" text-anchor="middle" font-size="10.5" fill="var(--ink)">Alternativas sin romper el todo</text>' +
        '  <line class="anim-flow" x1="358" y1="163" x2="462" y2="163" stroke="var(--teal)" stroke-width="2.2" marker-start="url(#epv-21-arr-t)" marker-end="url(#epv-21-arr-t)"></line>' +
        '  <rect x="464" y="138" width="336" height="50" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="632" y="159" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal)">Diseño e Implementación (Delivery)</text>' +
        '  <text x="632" y="177" text-anchor="middle" font-size="10.5" fill="var(--ink)">Espacio de la Solución (el CÓMO)</text>' +
        // Fila 3
        '  <rect x="20" y="200" width="336" height="50" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="188" y="221" text-anchor="middle" font-size="12" font-weight="700" fill="var(--success)">3. Controlar resultados</text>' +
        '  <text x="188" y="239" text-anchor="middle" font-size="10.5" fill="var(--ink)">Medir desvíos y retroalimentar</text>' +
        '  <line class="anim-flow" x1="358" y1="225" x2="462" y2="225" stroke="var(--success)" stroke-width="2.2" marker-start="url(#epv-21-arr-s)" marker-end="url(#epv-21-arr-s)"></line>' +
        '  <rect x="464" y="200" width="336" height="50" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="632" y="221" text-anchor="middle" font-size="12" font-weight="700" fill="var(--success)">V&amp;V, Pruebas y Despliegue</text>' +
        '  <text x="632" y="239" text-anchor="middle" font-size="10.5" fill="var(--ink)">Product-Market Fit + ajuste continuo</text>' +
        '</svg>'
    },

    'g2-enfoque:1': {
      kicker: 'Objetivos y costo · 2.2',
      title: 'El Análisis como Caja Negra (QUÉ) y la reducción temprana de errores',
      accent: 'teal',
      caption: 'Abstraer el Universo de Discurso sin tecnología evita suposiciones y frena defectos a costo 1× en lugar de 100× en operación.',
      svg:
        '<svg viewBox="0 0 820 260" role="img" aria-label="Objetivos del Análisis de Sistemas e impacto en el costo de defectos">' +
        '  <defs>' +
        arrowDef('epv-22-arr-t', 'teal') +
        arrowDef('epv-22-arr-p', 'primary') +
        '  </defs>' +
        '  <rect x="18" y="14" width="184" height="148" rx="12" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="5 3"></rect>' +
        '  <text x="110" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">UNIVERSO DE DISCURSO</text>' +
        '  <rect x="30" y="46" width="160" height="30" rx="7" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="110" y="65" text-anchor="middle" font-size="10.5" fill="var(--ink)">Problema multicausal</text>' +
        '  <rect x="30" y="84" width="160" height="30" rx="7" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="110" y="103" text-anchor="middle" font-size="10.5" fill="var(--ink)">Actores del entorno</text>' +
        '  <rect x="30" y="122" width="160" height="30" rx="7" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="110" y="141" text-anchor="middle" font-size="10.5" fill="var(--ink)">Normas y contexto</text>' +
        '  <line class="anim-flow" x1="202" y1="88" x2="250" y2="88" stroke="var(--teal)" stroke-width="2.4" marker-end="url(#epv-22-arr-t)"></line>' +
        '  <text x="226" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="var(--teal)">Abstrae</text>' +
        '  <rect x="252" y="14" width="278" height="148" rx="12" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"></rect>' +
        '  <text x="391" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal)">ANÁLISIS (CAJA NEGRA)</text>' +
        '  <rect x="268" y="46" width="246" height="30" rx="7" fill="var(--surface-elevated)" stroke="var(--teal)"></rect>' +
        '  <text x="391" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">✓ Separa el QUÉ del CÓMO</text>' +
        '  <rect x="268" y="84" width="246" height="30" rx="7" fill="var(--surface-elevated)" stroke="var(--teal)"></rect>' +
        '  <text x="391" y="103" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">✓ Evita suposiciones (prototipos)</text>' +
        '  <rect x="268" y="122" width="246" height="30" rx="7" fill="var(--surface-elevated)" stroke="var(--teal)"></rect>' +
        '  <text x="391" y="141" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">✓ Reduce entropía (precisión)</text>' +
        '  <line class="anim-flow" x1="530" y1="88" x2="578" y2="88" stroke="var(--primary)" stroke-width="2.4" marker-end="url(#epv-22-arr-p)"></line>' +
        '  <text x="554" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="var(--primary)">Genera</text>' +
        '  <rect x="580" y="26" width="222" height="124" rx="12" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>' +
        '  <text x="691" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">ESPECIFICACIÓN</text>' +
        '  <text x="691" y="78" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Completa y consistente</text>' +
        '  <text x="691" y="99" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Clara y verificable</text>' +
        '  <text x="691" y="120" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Vigente si cambia la tech</text>' +
        // Barra inferior de costo del error
        '  <rect x="18" y="176" width="784" height="70" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="34" y="203" font-size="11.5" font-weight="700" fill="var(--ink)">IMPACTO EN COSTO DE DEFECTOS</text>' +
        '  <text x="34" y="226" font-size="10.5" fill="var(--ink-secondary)">Corregir a tiempo vs. tarde</text>' +
        '  <text x="310" y="201" font-size="10.5" font-weight="700" fill="var(--success)">En Análisis:</text>' +
        '  <rect x="415" y="189" width="28" height="14" rx="7" fill="var(--success)"></rect>' +
        '  <text x="453" y="201" font-size="10.5" font-weight="700" fill="var(--success)">1× (bajo costo)</text>' +
        '  <text x="310" y="229" font-size="10.5" font-weight="700" fill="var(--danger)">En Operación:</text>' +
        '  <rect x="415" y="217" width="236" height="14" rx="7" fill="var(--danger)"></rect>' +
        '  <text x="661" y="229" font-size="10.5" font-weight="700" fill="var(--danger)">100×+ (crítico)</text>' +
        '</svg>'
    },

    'g2-enfoque:2': {
      kicker: 'Secuencial vs. Iterativo · 2.3',
      title: 'Ingeniería de Requerimientos encerrada vs. transversal al ciclo',
      accent: 'violet',
      caption: 'Mientras Cascada congela los requerimientos en la primera etapa, los ciclos iterativos gestionan requisitos transversalmente con feedback.',
      svg:
        '<svg viewBox="0 0 820 268" role="img" aria-label="Comparativa entre ciclo secuencial en Cascada y ciclo iterativo con Ingeniería de Requerimientos transversal">' +
        '  <defs>' +
        arrowDef('epv-23-arr-n', 'ink-secondary') +
        arrowDef('epv-23-arr-v', 'violet') +
        '  </defs>' +
        // Pista Cascada
        '  <rect x="18" y="12" width="784" height="90" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="34" y="34" font-size="11.5" font-weight="700" fill="var(--danger)">CICLOS SECUENCIALES (CASCADA)</text>' +
        '  <rect x="34" y="46" width="128" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.6"></rect>' +
        '  <text x="98" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">1. IR (Encerrada)</text>' +
        '  <line x1="162" y1="66" x2="196" y2="66" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#epv-23-arr-n)"></line>' +
        '  <rect x="198" y="46" width="114" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <text x="255" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Diseño</text>' +
        '  <line x1="312" y1="66" x2="346" y2="66" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#epv-23-arr-n)"></line>' +
        '  <rect x="348" y="46" width="114" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <text x="405" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">3. Código</text>' +
        '  <line x1="462" y1="66" x2="496" y2="66" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#epv-23-arr-n)"></line>' +
        '  <rect x="498" y="46" width="114" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <text x="555" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">4. Pruebas</text>' +
        '  <rect x="626" y="46" width="160" height="40" rx="8" fill="var(--danger-soft)" stroke="var(--danger)"></rect>' +
        '  <text x="706" y="63" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">Cambio tardío</text>' +
        '  <text x="706" y="79" text-anchor="middle" font-size="10" fill="var(--ink)">Costo se dispara</text>' +
        // Pista Iterativa
        '  <rect x="18" y="114" width="784" height="142" rx="12" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="34" y="136" font-size="11.5" font-weight="700" fill="var(--violet)">CICLOS ITERATIVOS (THE BOX · UP · ÁGIL / LEAN)</text>' +
        '  <rect x="34" y="148" width="144" height="38" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="106" y="171" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">Descubrir</text>' +
        '  <line class="anim-flow" x1="178" y1="167" x2="218" y2="167" stroke="var(--violet)" stroke-width="2" marker-end="url(#epv-23-arr-v)"></line>' +
        '  <rect x="220" y="148" width="144" height="38" rx="8" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="292" y="171" text-anchor="middle" font-size="11" font-weight="700" fill="var(--teal)">Especificar</text>' +
        '  <line class="anim-flow" x1="364" y1="167" x2="404" y2="167" stroke="var(--violet)" stroke-width="2" marker-end="url(#epv-23-arr-v)"></line>' +
        '  <rect x="406" y="148" width="144" height="38" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="478" y="171" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Construir</text>' +
        '  <line class="anim-flow" x1="550" y1="167" x2="590" y2="167" stroke="var(--violet)" stroke-width="2" marker-end="url(#epv-23-arr-v)"></line>' +
        '  <rect x="592" y="148" width="160" height="38" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
        '  <text x="672" y="171" text-anchor="middle" font-size="11" font-weight="700" fill="var(--success)">Validar (V&amp;V)</text>' +
        '  <path class="anim-flow" d="M 752 167 L 782 167 L 782 222 L 758 222" fill="none" stroke="var(--violet)" stroke-width="2.2" stroke-linejoin="round" marker-end="url(#epv-23-arr-v)"></path>' +
        '  <rect x="34" y="202" width="718" height="40" rx="8" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.6"></rect>' +
        '  <text x="393" y="226" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">IR TRANSVERSAL: Elicitar · Modelar · Analizar · Gestionar feedback continuo</text>' +
        '</svg>'
    },

    'g2-enfoque:3': {
      kicker: 'Mapa de fases por ciclo · 2.4',
      title: 'Dónde se concentra el trabajo de requerimientos en cada modelo',
      accent: 'warning',
      caption: 'Las tarjetas destacadas muestran exactamente en qué fases de cada ciclo de vida se relevan, filtran o consolidan los requisitos.',
      svg:
        '<svg viewBox="0 0 820 278" role="img" aria-label="Mapa de fases centradas en requerimientos según cinco ciclos de vida">' +
        '  <rect x="14" y="12" width="792" height="224" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        // Track 1: Cascada
        '  <text x="28" y="47" font-size="11.5" font-weight="700" fill="var(--ink)">Cascada</text>' +
        '  <rect x="150" y="26" width="128" height="32" rx="6" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.8"></rect>' +
        '  <text x="214" y="46" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">1. Req. ★</text>' +
        '  <rect x="286" y="26" width="128" height="32" rx="6" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.8"></rect>' +
        '  <text x="350" y="46" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">2. Análisis ★</text>' +
        '  <rect x="422" y="26" width="120" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="482" y="46" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">3. Diseño</text>' +
        '  <rect x="550" y="26" width="116" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="608" y="46" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">4. Código</text>' +
        '  <rect x="674" y="26" width="116" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="732" y="46" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">5. Pruebas</text>' +
        // Track 2: The Box
        '  <text x="28" y="89" font-size="11.5" font-weight="700" fill="var(--ink)">The Box (7)</text>' +
        '  <rect x="150" y="68" width="124" height="32" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="212" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">1. Prob/Obj</text>' +
        '  <rect x="282" y="68" width="128" height="32" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="346" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">2. Req. Hum.</text>' +
        '  <rect x="418" y="68" width="166" height="32" rx="6" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="2"></rect>' +
        '  <text x="501" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">3. Nec. Sist. ★ Valor</text>' +
        '  <rect x="592" y="68" width="198" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="691" y="88" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">4–7. Solución y entrega</text>' +
        // Track 3: Lean
        '  <text x="28" y="131" font-size="11.5" font-weight="700" fill="var(--ink)">Ciclo Lean</text>' +
        '  <rect x="150" y="110" width="136" height="32" rx="6" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="218" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">1. Outcome ★</text>' +
        '  <rect x="294" y="110" width="136" height="32" rx="6" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="362" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">2. Discover ★</text>' +
        '  <rect x="438" y="110" width="146" height="32" rx="6" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="511" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">3. Validate MVP ★</text>' +
        '  <rect x="592" y="110" width="198" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="691" y="130" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Build / Learn</text>' +
        // Track 4: Doble Diamante
        '  <text x="28" y="173" font-size="11.5" font-weight="700" fill="var(--ink)">Doble Diam.</text>' +
        '  <rect x="150" y="152" width="154" height="32" rx="6" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="227" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">1. Descubrir ◊ ★</text>' +
        '  <rect x="312" y="152" width="154" height="32" rx="6" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="389" y="172" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">2. Definir ◊ ★</text>' +
        '  <rect x="474" y="152" width="154" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="551" y="172" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">3. Desarrollar ◊</text>' +
        '  <rect x="636" y="152" width="154" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="713" y="172" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">4. Entregar ◊</text>' +
        // Track 5: UP
        '  <text x="28" y="215" font-size="11.5" font-weight="700" fill="var(--ink)">UP (4 fases)</text>' +
        '  <rect x="150" y="194" width="142" height="32" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="221" y="214" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">Inicio (Arranque)</text>' +
        '  <rect x="300" y="194" width="210" height="32" rx="6" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="2"></rect>' +
        '  <text x="405" y="214" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">ELABORACIÓN ★ Pico máximo</text>' +
        '  <rect x="518" y="194" width="136" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="586" y="214" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Construcción</text>' +
        '  <rect x="662" y="194" width="128" height="32" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="726" y="214" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Transición</text>' +
        // Legend
        '  <rect x="14" y="244" width="792" height="24" rx="12" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="410" y="260" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">Color destacado = foco en requisitos  ·  ★ = mayor concentración de valor y definición del problema</text>' +
        '</svg>'
    },

    // =========================================================================
    // EJE 3: Elementos Funcionales, RNF, FURPS+ y RF "Completo"
    // =========================================================================
    'g3-reqs:0': {
      kicker: 'Ejemplo en Caja Negra · 3.1',
      title: 'Elementos Funcionales: qué DEBE hacer la Plataforma de Turnos',
      accent: 'primary',
      caption: 'Los elementos funcionales especifican servicios observables ante entradas del actor (Reservar, Cancelar y Recordar) en Caja Negra.',
      svg:
        '<svg viewBox="0 0 820 250" role="img" aria-label="Diagrama de elementos funcionales en una plataforma de turnos médicos">' +
        '  <defs>' +
        arrowDef('epv-31-arr-p', 'primary') +
        arrowDef('epv-31-arr-s', 'success') +
        '  </defs>' +
        // Actor box left
        '  <rect x="18" y="66" width="144" height="118" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <circle cx="90" cy="94" r="12" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"></circle>' +
        '  <path d="M 70 132 C 70 116 110 116 110 132" fill="none" stroke="var(--primary)" stroke-width="2"></path>' +
        '  <text x="90" y="154" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">ACTORES</text>' +
        '  <text x="90" y="171" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Paciente / Médico</text>' +
        // Left spine outside system border (x=162..196 -> system at 218)
        '  <line x1="162" y1="125" x2="192" y2="125" stroke="var(--primary)" stroke-width="2.2"></line>' +
        '  <line x1="192" y1="74" x2="192" y2="188" stroke="var(--primary)" stroke-width="2.2"></line>' +
        // System border
        '  <rect x="218" y="14" width="384" height="222" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2.2"></rect>' +
        '  <text x="410" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">CAJA NEGRA · SERVICIOS FUNCIONALES (QUÉ)</text>' +
        // Arrows into 3 EFs
        '  <line class="anim-flow" x1="192" y1="74" x2="234" y2="74" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#epv-31-arr-p)"></line>' +
        '  <line class="anim-flow" x1="192" y1="131" x2="234" y2="131" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#epv-31-arr-p)"></line>' +
        '  <line class="anim-flow" x1="192" y1="188" x2="234" y2="188" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#epv-31-arr-p)"></line>' +
        // 3 EF cards
        '  <rect x="236" y="48" width="348" height="50" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="410" y="69" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">1. Reservar Turno</text>' +
        '  <text x="410" y="88" text-anchor="middle" font-size="10.5" fill="var(--ink)">Franja libre → registra reserva y bloquea</text>' +
        '  <rect x="236" y="106" width="348" height="50" rx="8" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="410" y="127" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--teal)">2. Cancelar y Liberar Agenda</text>' +
        '  <text x="410" y="146" text-anchor="middle" font-size="10.5" fill="var(--ink)">Anticipación ≥ 24 hs → libera el horario</text>' +
        '  <rect x="236" y="164" width="348" height="50" rx="8" fill="var(--violet-soft)" stroke="var(--violet)"></rect>' +
        '  <text x="410" y="185" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">3. Recordatorio Automático</text>' +
        '  <text x="410" y="204" text-anchor="middle" font-size="10.5" fill="var(--ink)">24 hs antes → envía notificación</text>' +
        // Right spine outside system border (602..652)
        '  <line class="anim-flow" x1="584" y1="74" x2="628" y2="74" stroke="var(--success)" stroke-width="2.2"></line>' +
        '  <line class="anim-flow" x1="584" y1="131" x2="628" y2="131" stroke="var(--success)" stroke-width="2.2"></line>' +
        '  <line class="anim-flow" x1="584" y1="188" x2="628" y2="188" stroke="var(--success)" stroke-width="2.2"></line>' +
        '  <line x1="628" y1="74" x2="628" y2="188" stroke="var(--success)" stroke-width="2.2"></line>' +
        '  <line class="anim-flow" x1="628" y1="125" x2="656" y2="125" stroke="var(--success)" stroke-width="2.2" marker-end="url(#epv-31-arr-s)"></line>' +
        // Right outputs box
        '  <rect x="658" y="62" width="144" height="126" rx="12" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="730" y="88" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">SALIDAS Y</text>' +
        '  <text x="730" y="105" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">ESTADOS</text>' +
        '  <text x="730" y="130" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Turno guardado</text>' +
        '  <text x="730" y="150" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Agenda liberada</text>' +
        '  <text x="730" y="170" text-anchor="middle" font-size="10.5" fill="var(--ink)">• Aviso enviado</text>' +
        '</svg>'
    },

    'g3-reqs:1': {
      kicker: 'Taxonomía y umbral · 3.2',
      title: 'Las 3 categorías de RNF como Drivers de Arquitectura',
      accent: 'teal',
      caption: 'Los RNF de producto, organizacionales y externos moldean la arquitectura global; en un examen siempre llevan umbral o norma medible.',
      svg:
        '<svg viewBox="0 0 820 264" role="img" aria-label="Las tres categorías de Requerimientos No Funcionales convergiendo en la arquitectura">' +
        '  <defs>' +
        arrowDef('epv-32-arr-p', 'primary') +
        arrowDef('epv-32-arr-t', 'teal') +
        arrowDef('epv-32-arr-v', 'violet') +
        '  </defs>' +
        // Top 3 RNF category boxes
        '  <rect x="20" y="14" width="244" height="102" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.6"></rect>' +
        '  <text x="142" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">1. DEL PRODUCTO</text>' +
        '  <text x="142" y="57" text-anchor="middle" font-size="10.5" fill="var(--ink)">Rendimiento · Fiabilidad · Usab.</text>' +
        '  <text x="142" y="79" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">"Responder en &lt; 1,5 seg"</text>' +
        '  <text x="142" y="99" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">(con 500 usuarios simult.)</text>' +
        '  <rect x="288" y="14" width="244" height="102" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="410" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal)">2. ORGANIZACIONALES</text>' +
        '  <text x="410" y="57" text-anchor="middle" font-size="10.5" fill="var(--ink)">Estándares y políticas internas</text>' +
        '  <text x="410" y="79" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">"Integrar directorio SSO"</text>' +
        '  <text x="410" y="99" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">+ auditoría trimestral</text>' +
        '  <rect x="556" y="14" width="244" height="102" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.6"></rect>' +
        '  <text x="678" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="var(--violet)">3. EXTERNOS</text>' +
        '  <text x="678" y="57" text-anchor="middle" font-size="10.5" fill="var(--ink)">Leyes, ética e interoperab.</text>' +
        '  <text x="678" y="79" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">"Ley Datos Personales"</text>' +
        '  <text x="678" y="99" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">+ cifrado y sin borrado físico</text>' +
        // Converging animated arrows
        '  <line class="anim-flow" x1="142" y1="116" x2="142" y2="148" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#epv-32-arr-p)"></line>' +
        '  <line class="anim-flow" x1="410" y1="116" x2="410" y2="148" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#epv-32-arr-t)"></line>' +
        '  <line class="anim-flow" x1="678" y1="116" x2="678" y2="148" stroke="var(--violet)" stroke-width="2.2" marker-end="url(#epv-32-arr-v)"></line>' +
        // Drivers block
        '  <rect x="64" y="150" width="692" height="54" rx="10" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="2"></rect>' +
        '  <text x="410" y="172" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--warning)">DRIVERS DE ARQUITECTURA</text>' +
        '  <text x="410" y="192" text-anchor="middle" font-size="10.5" fill="var(--ink)">Condicionan toda la solución: si un RNF crítico falla, el sistema es inutilizable</text>' +
        // Contrast pills at bottom
        '  <rect x="64" y="216" width="332" height="34" rx="17" fill="var(--danger-soft)" stroke="var(--danger)"></rect>' +
        '  <text x="230" y="237" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">✕ "Que sea rápido y seguro" (Ambiguo)</text>' +
        '  <rect x="424" y="216" width="332" height="34" rx="17" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
        '  <text x="590" y="237" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">✓ "&lt; 1,5 s · Cifrado TLS" (Medible)</text>' +
        '</svg>'
    },

    'g3-reqs:2': {
      kicker: 'Clasificación UP · 3.3',
      title: 'Anatomía visual del modelo FURPS+ y los 4 Atributos de Calidad',
      accent: 'violet',
      caption: 'En Proceso Unificado (U5), las cuatro letras centrales (U·R·P·S) agrupan los atributos de calidad del sistema.',
      svg:
        '<svg viewBox="0 0 820 250" role="img" aria-label="Infografía de seis bloques del modelo FURPS+ destacando URPS como atributos de calidad">' +
        // Bracket over U R P S (cols x=152..668)
        '  <rect x="152" y="12" width="516" height="28" rx="8" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.6"></rect>' +
        '  <text x="410" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="var(--violet)">★ ATRIBUTOS DE CALIDAD DEL SISTEMA (U · R · P · S)</text>' +
        '  <line x1="212" y1="40" x2="212" y2="54" stroke="var(--violet)" stroke-width="1.8"></line>' +
        '  <line x1="344" y1="40" x2="344" y2="54" stroke="var(--violet)" stroke-width="1.8"></line>' +
        '  <line x1="476" y1="40" x2="476" y2="54" stroke="var(--violet)" stroke-width="1.8"></line>' +
        '  <line x1="608" y1="40" x2="608" y2="54" stroke="var(--violet)" stroke-width="1.8"></line>' +
        // Col 1: F
        '  <rect x="20" y="54" width="120" height="182" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>' +
        '  <text x="80" y="88" text-anchor="middle" font-size="24" font-weight="700" fill="var(--primary)">F</text>' +
        '  <text x="80" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Funcional</text>' +
        '  <text x="80" y="136" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Capacidades y</text>' +
        '  <text x="80" y="152" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">seguridad oper.</text>' +
        '  <rect x="28" y="196" width="104" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--primary)"></rect>' +
        '  <text x="80" y="214" text-anchor="middle" font-size="10" font-weight="700" fill="var(--primary)">Registrar venta</text>' +
        // Col 2: U
        '  <rect x="152" y="54" width="120" height="182" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="212" y="88" text-anchor="middle" font-size="24" font-weight="700" fill="var(--violet)">U</text>' +
        '  <text x="212" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Usabilidad ★</text>' +
        '  <text x="212" y="136" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Factores humanos</text>' +
        '  <text x="212" y="152" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">ayuda y acceso</text>' +
        '  <rect x="160" y="196" width="104" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--violet)"></rect>' +
        '  <text x="212" y="214" text-anchor="middle" font-size="10" font-weight="700" fill="var(--violet)">Uso intuitivo</text>' +
        // Col 3: R
        '  <rect x="284" y="54" width="120" height="182" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="344" y="88" text-anchor="middle" font-size="24" font-weight="700" fill="var(--violet)">R</text>' +
        '  <text x="344" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Fiabilidad ★</text>' +
        '  <text x="344" y="136" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Disponibilidad y</text>' +
        '  <text x="344" y="152" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">recuperabilidad</text>' +
        '  <rect x="292" y="196" width="104" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--violet)"></rect>' +
        '  <text x="344" y="214" text-anchor="middle" font-size="10" font-weight="700" fill="var(--violet)">Uptime 99,9%</text>' +
        // Col 4: P
        '  <rect x="416" y="54" width="120" height="182" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="476" y="88" text-anchor="middle" font-size="24" font-weight="700" fill="var(--violet)">P</text>' +
        '  <text x="476" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Rendimiento ★</text>' +
        '  <text x="476" y="136" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Tiempo respuesta</text>' +
        '  <text x="476" y="152" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">CPU y memoria</text>' +
        '  <rect x="424" y="196" width="104" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--violet)"></rect>' +
        '  <text x="476" y="214" text-anchor="middle" font-size="10" font-weight="700" fill="var(--violet)">Resp. &lt; 2 s</text>' +
        // Col 5: S
        '  <rect x="548" y="54" width="120" height="182" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="608" y="88" text-anchor="middle" font-size="24" font-weight="700" fill="var(--violet)">S</text>' +
        '  <text x="608" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Soporte ★</text>' +
        '  <text x="608" y="136" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Mantenimiento,</text>' +
        '  <text x="608" y="152" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">escalabilidad</text>' +
        '  <rect x="556" y="196" width="104" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--violet)"></rect>' +
        '  <text x="608" y="214" text-anchor="middle" font-size="10" font-weight="700" fill="var(--violet)">Configurable</text>' +
        // Col 6: +
        '  <rect x="680" y="54" width="120" height="182" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.8"></rect>' +
        '  <text x="740" y="88" text-anchor="middle" font-size="24" font-weight="700" fill="var(--teal)">+</text>' +
        '  <text x="740" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Adicionales</text>' +
        '  <text x="740" y="136" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Implementación,</text>' +
        '  <text x="740" y="152" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">HW/SW y legal</text>' +
        '  <rect x="688" y="196" width="104" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--teal)"></rect>' +
        '  <text x="740" y="214" text-anchor="middle" font-size="10" font-weight="700" fill="var(--teal)">Interfaces ext.</text>' +
        '</svg>'
    },

    'g3-reqs:3': {
      kicker: 'Checklist estructural · 3.4',
      title: 'Anatomía de las 8 piezas de un Requerimiento Funcional "Completo"',
      accent: 'success',
      caption: 'Para aprobar Definition of Ready (DoR) y validar en Human Gate sin meter diseño técnico, un RF reúne estas 8 piezas.',
      svg:
        '<svg viewBox="0 0 820 272" role="img" aria-label="Blueprint de las 8 piezas necesarias para considerar completo un Requerimiento Funcional">' +
        // Top 4 tiles
        '  <rect x="20" y="14" width="184" height="66" rx="8" fill="var(--surface)" stroke="var(--primary)"></rect>' +
        '  <text x="112" y="39" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">1. ID y Trazabilidad</text>' +
        '  <text x="112" y="59" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Origen y necesidad</text>' +
        '  <rect x="218" y="14" width="184" height="66" rx="8" fill="var(--surface)" stroke="var(--primary)"></rect>' +
        '  <text x="310" y="39" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">2. Qué preciso (EARS)</text>' +
        '  <text x="310" y="59" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Sin ambigüedades</text>' +
        '  <rect x="416" y="14" width="184" height="66" rx="8" fill="var(--surface)" stroke="var(--teal)"></rect>' +
        '  <text x="508" y="39" text-anchor="middle" font-size="11" font-weight="700" fill="var(--teal)">3. Actores y Alcance</text>' +
        '  <text x="508" y="59" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Qué SÍ y qué NO hace</text>' +
        '  <rect x="614" y="14" width="186" height="66" rx="8" fill="var(--surface)" stroke="var(--teal)"></rect>' +
        '  <text x="707" y="39" text-anchor="middle" font-size="11" font-weight="700" fill="var(--teal)">4. Entradas y Salidas</text>' +
        '  <text x="707" y="59" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Datos a nivel negocio</text>' +
        // Connector ticks top -> center
        '  <line x1="112" y1="80" x2="112" y2="96" stroke="var(--success)" stroke-width="2"></line>' +
        '  <line x1="310" y1="80" x2="310" y2="96" stroke="var(--success)" stroke-width="2"></line>' +
        '  <line x1="508" y1="80" x2="508" y2="96" stroke="var(--success)" stroke-width="2"></line>' +
        '  <line x1="707" y1="80" x2="707" y2="96" stroke="var(--success)" stroke-width="2"></line>' +
        // Central DoR spine
        '  <rect x="20" y="96" width="780" height="42" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect>' +
        '  <text x="410" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--success)">RF "COMPLETO"  →  Listo para DoR y Compuerta Human Gate ✓</text>' +
        // Connector ticks center -> bottom
        '  <line x1="112" y1="138" x2="112" y2="154" stroke="var(--success)" stroke-width="2"></line>' +
        '  <line x1="310" y1="138" x2="310" y2="154" stroke="var(--success)" stroke-width="2"></line>' +
        '  <line x1="508" y1="138" x2="508" y2="154" stroke="var(--success)" stroke-width="2"></line>' +
        '  <line x1="707" y1="138" x2="707" y2="154" stroke="var(--success)" stroke-width="2"></line>' +
        // Bottom 4 tiles
        '  <rect x="20" y="154" width="184" height="66" rx="8" fill="var(--surface)" stroke="var(--violet)"></rect>' +
        '  <text x="112" y="179" text-anchor="middle" font-size="11" font-weight="700" fill="var(--violet)">5. Pre y Postcond.</text>' +
        '  <text x="112" y="199" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Estado antes / después</text>' +
        '  <rect x="218" y="154" width="184" height="66" rx="8" fill="var(--surface)" stroke="var(--violet)"></rect>' +
        '  <text x="310" y="179" text-anchor="middle" font-size="11" font-weight="700" fill="var(--violet)">6. Flujo y Excepc.</text>' +
        '  <text x="310" y="199" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Happy path y bordes</text>' +
        '  <rect x="416" y="154" width="184" height="66" rx="8" fill="var(--surface)" stroke="var(--warning)"></rect>' +
        '  <text x="508" y="179" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warning)">7. Reglas y RNF</text>' +
        '  <text x="508" y="199" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Umbrales asociados</text>' +
        '  <rect x="614" y="154" width="186" height="66" rx="8" fill="var(--surface)" stroke="var(--success)"></rect>' +
        '  <text x="707" y="179" text-anchor="middle" font-size="11" font-weight="700" fill="var(--success)">8. Aceptación</text>' +
        '  <text x="707" y="199" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Gherkin Dado–Cuando–Ent.</text>' +
        // Red exclusion rule strip
        '  <rect x="90" y="232" width="640" height="28" rx="14" fill="var(--danger-soft)" stroke="var(--danger)"></rect>' +
        '  <text x="410" y="250" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">✕ Qué NO incluir: columnas SQL, clases internas, frameworks ni botones de UI (eso es CÓMO)</text>' +
        '</svg>'
    },

    // =========================================================================
    // EJE 4: Modelado, Ambiente-Sistema, Casos de Uso e Inicio UP
    // =========================================================================
    'g4-modelado:0': {
      kicker: 'Modelar ≠ Diagramar · 4.1',
      title: 'Sin modelar vs. Modelando antes (Caso Biblioteca Universitaria)',
      accent: 'warning',
      caption: 'Abstraer Obra vs. Ejemplar en una pizarra valida reglas en 10 minutos a costo 1×, evitando reescribir código a costo 10×–40×.',
      svg:
        '<svg viewBox="0 0 820 264" role="img" aria-label="Comparativa entre programar sin modelar y modelar antes con el ejemplo de biblioteca universitaria">' +
        '  <defs>' +
        arrowDef('epv-41-arr-d', 'danger') +
        arrowDef('epv-41-arr-s', 'success') +
        '  </defs>' +
        // Carril superior: Sin modelar
        '  <rect x="18" y="12" width="784" height="112" rx="12" fill="var(--surface)" stroke="var(--danger)" stroke-width="1.8"></rect>' +
        '  <rect x="30" y="22" width="188" height="22" rx="6" fill="var(--danger-soft)" stroke="var(--danger)"></rect>' +
        '  <text x="124" y="37" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">✕ SIN MODELAR ANTES</text>' +
        '  <rect x="30" y="54" width="224" height="56" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <text x="142" y="76" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">1. Directo al código</text>' +
        '  <text x="142" y="96" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Entidad única "Libro" + bool</text>' +
        '  <line class="anim-flow" x1="254" y1="82" x2="292" y2="82" stroke="var(--danger)" stroke-width="2.2" marker-end="url(#epv-41-arr-d)"></line>' +
        '  <rect x="294" y="54" width="232" height="56" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <text x="410" y="76" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Choque en uso real</text>' +
        '  <text x="410" y="96" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">5 copias iguales sin distinguir</text>' +
        '  <line class="anim-flow" x1="526" y1="82" x2="564" y2="82" stroke="var(--danger)" stroke-width="2.2" marker-end="url(#epv-41-arr-d)"></line>' +
        '  <rect x="566" y="54" width="222" height="56" rx="8" fill="var(--danger-soft)" stroke="var(--danger)"></rect>' +
        '  <text x="677" y="76" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--danger)">3. Retrabajo 10×–40×</text>' +
        '  <text x="677" y="96" text-anchor="middle" font-size="10" fill="var(--ink)">Rehacer tablas, UI y lógica</text>' +
        // Carril inferior: Modelando antes
        '  <rect x="18" y="138" width="784" height="114" rx="12" fill="var(--surface-elevated)" stroke="var(--success)" stroke-width="1.8"></rect>' +
        '  <rect x="30" y="148" width="188" height="22" rx="6" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
        '  <text x="124" y="163" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">✓ MODELANDO ANTES</text>' +
        '  <rect x="30" y="178" width="248" height="60" rx="8" fill="var(--surface)" stroke="var(--teal)"></rect>' +
        '  <text x="154" y="195" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">1. Modelo de Dominio</text>' +
        '  <rect x="42" y="203" width="84" height="26" rx="4" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="84" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Obra/Título</text>' +
        '  <line x1="126" y1="216" x2="178" y2="216" stroke="var(--teal)" stroke-width="1.8"></line>' +
        '  <text x="152" y="211" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--teal)">1 .. *</text>' +
        '  <rect x="178" y="203" width="86" height="26" rx="4" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="221" y="220" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Ejemplar</text>' +
        '  <line class="anim-flow" x1="278" y1="208" x2="314" y2="208" stroke="var(--success)" stroke-width="2.2" marker-end="url(#epv-41-arr-s)"></line>' +
        '  <rect x="316" y="178" width="222" height="60" rx="8" fill="var(--surface)" stroke="var(--success)"></rect>' +
        '  <text x="427" y="201" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Validado en 10 min</text>' +
        '  <text x="427" y="221" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Bibliotecario aprueba en pizarra</text>' +
        '  <line class="anim-flow" x1="538" y1="208" x2="574" y2="208" stroke="var(--success)" stroke-width="2.2" marker-end="url(#epv-41-arr-s)"></line>' +
        '  <rect x="576" y="178" width="212" height="60" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>' +
        '  <text x="682" y="201" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">3. Base segura (1×)</text>' +
        '  <text x="682" y="221" text-anchor="middle" font-size="10" fill="var(--ink)">Vistas consistentes al codificar</text>' +
        '</svg>'
    },

    'g4-modelado:1': {
      kicker: 'Frontera del sistema · 4.2',
      title: 'Las 4 herramientas para modelar la interacción Ambiente ↔ Sistema',
      accent: 'primary',
      caption: 'Casos de Uso, DSS, Contexto DFD 0 y Prototipos enfocan la frontera observable entre actores externos y el sistema como Caja Negra.',
      svg:
        '<svg viewBox="0 0 820 272" role="img" aria-label="Mapa de las cuatro herramientas de análisis para modelar la frontera Ambiente y Sistema">' +
        '  <defs>' +
        arrowDef('epv-42-arr-p', 'primary') +
        arrowDef('epv-42-arr-t', 'teal') +
        arrowDef('epv-42-arr-v', 'violet') +
        arrowDef('epv-42-arr-w', 'warning') +
        '  </defs>' +
        // Center Ambiente container & Caja Negra core
        '  <rect x="294" y="22" width="232" height="228" rx="18" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="6 4"></rect>' +
        '  <text x="410" y="45" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">AMBIENTE EXTERIOR</text>' +
        '  <rect x="316" y="66" width="188" height="140" rx="14" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2.2"></rect>' +
        '  <text x="410" y="114" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--primary)">FRONTERA</text>' +
        '  <text x="410" y="135" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Ambiente ↔ Sistema</text>' +
        '  <text x="410" y="160" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">Caja Negra observable</text>' +
        '  <text x="410" y="178" text-anchor="middle" font-size="10.5" fill="var(--ink-secondary)">(sin diseño interno)</text>' +
        // Tool 1: Top Left
        '  <rect x="18" y="24" width="232" height="98" rx="10" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></rect>' +
        '  <text x="134" y="49" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">1. Casos de Uso (+ A–O)</text>' +
        '  <text x="134" y="71" text-anchor="middle" font-size="10.5" fill="var(--ink)">Actores en el borde exterior</text>' +
        '  <text x="134" y="90" text-anchor="middle" font-size="10.5" fill="var(--ink)">y servicios iniciados</text>' +
        '  <line class="anim-flow" x1="250" y1="86" x2="314" y2="86" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#epv-42-arr-p)"></line>' +
        // Tool 2: Bottom Left
        '  <rect x="18" y="150" width="232" height="98" rx="10" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>' +
        '  <text x="134" y="175" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--teal)">2. Secuencia Sistema (DSS)</text>' +
        '  <text x="134" y="197" text-anchor="middle" font-size="10.5" fill="var(--ink)">Orden temporal de eventos</text>' +
        '  <text x="134" y="216" text-anchor="middle" font-size="10.5" fill="var(--ink)">y respuestas a :Sistema</text>' +
        '  <line class="anim-flow" x1="250" y1="186" x2="314" y2="186" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#epv-42-arr-t)"></line>' +
        // Tool 3: Top Right
        '  <rect x="570" y="24" width="232" height="98" rx="10" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>' +
        '  <text x="686" y="49" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">3. Contexto (DFD Nivel 0)</text>' +
        '  <text x="686" y="71" text-anchor="middle" font-size="10.5" fill="var(--ink)">Sistema como burbuja única</text>' +
        '  <text x="686" y="90" text-anchor="middle" font-size="10.5" fill="var(--ink)">con flujos de datos</text>' +
        '  <line class="anim-flow" x1="570" y1="86" x2="506" y2="86" stroke="var(--violet)" stroke-width="2.2" marker-end="url(#epv-42-arr-v)"></line>' +
        // Tool 4: Bottom Right
        '  <rect x="570" y="150" width="232" height="98" rx="10" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>' +
        '  <text x="686" y="175" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">4. Prototipos / Empathy Map</text>' +
        '  <text x="686" y="197" text-anchor="middle" font-size="10.5" fill="var(--ink)">Valida la interacción real</text>' +
        '  <text x="686" y="216" text-anchor="middle" font-size="10.5" fill="var(--ink)">antes de implementar</text>' +
        '  <line class="anim-flow" x1="570" y1="186" x2="506" y2="186" stroke="var(--warning)" stroke-width="2.2" marker-end="url(#epv-42-arr-w)"></line>' +
        '</svg>'
    },

    'g4-modelado:2': {
      kicker: 'Rol articulador · 4.3',
      title: '¿Qué representan los Casos de Uso en el Análisis?',
      accent: 'teal',
      caption: 'Formalizan los requerimientos funcionales como contratos de comportamiento en Caja Negra que alimentan cinco usos clave del proyecto.',
      svg:
        '<svg viewBox="0 0 820 264" role="img" aria-label="Diagrama hub and spoke mostrando los cinco aportes de los Casos de Uso al análisis">' +
        '  <defs>' +
        arrowDef('epv-43-arr-t', 'teal') +
        '  </defs>' +
        // Actor stick figure left
        '  <circle cx="54" cy="96" r="13" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"></circle>' +
        '  <line x1="54" y1="109" x2="54" y2="143" stroke="var(--teal)" stroke-width="2"></line>' +
        '  <line x1="36" y1="122" x2="72" y2="122" stroke="var(--teal)" stroke-width="2"></line>' +
        '  <line x1="54" y1="143" x2="39" y2="165" stroke="var(--teal)" stroke-width="2"></line>' +
        '  <line x1="54" y1="143" x2="69" y2="165" stroke="var(--teal)" stroke-width="2"></line>' +
        '  <text x="54" y="182" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Actor</text>' +
        '  <line x1="78" y1="124" x2="118" y2="124" stroke="var(--ink-secondary)" stroke-width="2"></line>' +
        // Use Case UML ellipse
        '  <ellipse cx="230" cy="124" rx="110" ry="50" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2.2"></ellipse>' +
        '  <text x="230" y="114" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--teal)">CASO DE USO</text>' +
        '  <text x="230" y="133" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Contrato Caja Negra</text>' +
        '  <text x="230" y="149" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">(valor para un objetivo)</text>' +
        // Boundary rule under hub
        '  <rect x="24" y="200" width="320" height="44" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="184" y="219" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Responsabilidades externas (QUÉ)</text>' +
        '  <text x="184" y="235" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Nunca clases internas, algoritmos ni SQL</text>' +
        // Spine to 5 targets
        '  <line x1="340" y1="124" x2="378" y2="124" stroke="var(--teal)" stroke-width="2.2"></line>' +
        '  <line x1="378" y1="36" x2="378" y2="228" stroke="var(--teal)" stroke-width="2.2"></line>' +
        '  <line class="anim-flow" x1="378" y1="36" x2="414" y2="36" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#epv-43-arr-t)"></line>' +
        '  <line class="anim-flow" x1="378" y1="84" x2="414" y2="84" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#epv-43-arr-t)"></line>' +
        '  <line class="anim-flow" x1="378" y1="132" x2="414" y2="132" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#epv-43-arr-t)"></line>' +
        '  <line class="anim-flow" x1="378" y1="180" x2="414" y2="180" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#epv-43-arr-t)"></line>' +
        '  <line class="anim-flow" x1="378" y1="228" x2="414" y2="228" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#epv-43-arr-t)"></line>' +
        // 5 target cards
        '  <rect x="416" y="16" width="386" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--primary)"></rect>' +
        '  <text x="432" y="40" font-size="11" font-weight="700" fill="var(--primary)">1. Lenguaje común con el cliente (acuerdo)</text>' +
        '  <rect x="416" y="64" width="386" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--teal)"></rect>' +
        '  <text x="432" y="88" font-size="11" font-weight="700" fill="var(--teal)">2. Extrae clases para Modelo de Dominio</text>' +
        '  <rect x="416" y="112" width="386" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--violet)"></rect>' +
        '  <text x="432" y="136" font-size="11" font-weight="700" fill="var(--violet)">3. Alimenta eventos del DSS (secuencia)</text>' +
        '  <rect x="416" y="160" width="386" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--warning)"></rect>' +
        '  <text x="432" y="184" font-size="11" font-weight="700" fill="var(--warning)">4. Guía el Slicing en iteraciones UP</text>' +
        '  <rect x="416" y="208" width="386" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--success)"></rect>' +
        '  <text x="432" y="232" font-size="11" font-weight="700" fill="var(--success)">5. Deriva casos de Pruebas de Aceptación</text>' +
        '</svg>'
    },

    'g4-modelado:3': {
      kicker: 'Wireframe de formatos · 4.4',
      title: 'Formatos de Caso de Uso Completo: 1 Columna vs. 2 Columnas y Estilo',
      accent: 'violet',
      caption: 'Comparación visual de la estructura narrativa frente a la tabla Actor | Sistema, y por qué el análisis exige estilo Esencial sin UI.',
      svg:
        '<svg viewBox="0 0 820 266" role="img" aria-label="Comparativa visual de formatos de Caso de Uso completo de 1 columna, 2 columnas y estilo Esencial vs Concreto">' +
        // Panel 1: 1 Columna
        '  <rect x="16" y="14" width="248" height="238" rx="12" fill="var(--surface)" stroke="var(--primary)" stroke-width="1.6"></rect>' +
        '  <text x="140" y="38" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">A. 1 COLUMNA (Narrativo)</text>' +
        '  <rect x="30" y="50" width="220" height="32" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="140" y="70" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">ID · Actor · Pre / Postcond.</text>' +
        '  <rect x="30" y="92" width="220" height="106" rx="6" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <text x="42" y="114" font-size="10.5" fill="var(--ink)">1. El Cajero ingresa el DNI.</text>' +
        '  <text x="42" y="138" font-size="10.5" fill="var(--ink)">2. El Sistema valida estado.</text>' +
        '  <text x="42" y="162" font-size="10.5" fill="var(--ink)">3. El Sistema muestra saldo.</text>' +
        '  <text x="42" y="184" font-size="10" fill="var(--ink-secondary)">4. Extensiones y Reglas esp.</text>' +
        '  <text x="140" y="226" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">Compacto y ágil</text>' +
        // Panel 2: 2 Columnas
        '  <rect x="278" y="14" width="264" height="238" rx="12" fill="var(--surface)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="410" y="38" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--teal)">B. 2 COLUMNAS (Actor | Sist.)</text>' +
        '  <rect x="292" y="50" width="236" height="148" rx="6" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>' +
        '  <rect x="292" y="50" width="118" height="28" rx="4" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <rect x="410" y="50" width="118" height="28" rx="4" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="351" y="68" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">ACTOR</text>' +
        '  <text x="469" y="68" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">SISTEMA</text>' +
        '  <line x1="410" y1="50" x2="410" y2="198" stroke="var(--border-strong)" stroke-width="1.5"></line>' +
        '  <line x1="292" y1="116" x2="528" y2="116" stroke="var(--border)"></line>' +
        '  <line x1="292" y1="156" x2="528" y2="156" stroke="var(--border)"></line>' +
        '  <text x="351" y="101" text-anchor="middle" font-size="10" fill="var(--ink)">1. Ingresa DNI</text>' +
        '  <text x="469" y="140" text-anchor="middle" font-size="10" fill="var(--ink)">2. Valida DNI</text>' +
        '  <text x="469" y="181" text-anchor="middle" font-size="10" fill="var(--ink)">3. Emite recibo</text>' +
        '  <text x="410" y="226" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">Rigor en la frontera</text>' +
        // Panel 3: Esencial vs Concreto
        '  <rect x="556" y="14" width="248" height="238" rx="12" fill="var(--surface)" stroke="var(--violet)" stroke-width="1.6"></rect>' +
        '  <text x="680" y="38" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">C. NIVEL DE ABSTRACCIÓN</text>' +
        '  <rect x="570" y="54" width="220" height="84" rx="8" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="680" y="76" text-anchor="middle" font-size="11" font-weight="700" fill="var(--success)">✓ ESENCIAL (Usar en análisis)</text>' +
        '  <text x="680" y="99" text-anchor="middle" font-size="10.5" fill="var(--ink)">"Actor identifica al cliente"</text>' +
        '  <text x="680" y="121" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Pura intención sin widgets</text>' +
        '  <rect x="570" y="152" width="220" height="84" rx="8" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="1.6"></rect>' +
        '  <text x="680" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="var(--danger)">✕ CONCRETO (Evitar)</text>' +
        '  <text x="680" y="197" text-anchor="middle" font-size="10.5" fill="var(--ink)">"Clic en botón verde Guardar"</text>' +
        '  <text x="680" y="219" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">Acoplado a pantalla y mouse</text>' +
        '</svg>'
    },

    'g4-modelado:4': {
      kicker: 'Compuerta de decisión UP · 4.5',
      title: 'Fase de Inicio (Inception) y la decisión clave del Hito LCO',
      accent: 'danger',
      caption: 'Inicio dura ~1 iteración y cierra con el Hito LCO (Go / No-Go). El detalle profundo de requerimientos recién ocurre en Elaboración.',
      svg:
        '<svg viewBox="0 0 820 256" role="img" aria-label="Línea temporal de la fase Inicio en el Proceso Unificado y compuerta de decisión LCO">' +
        '  <defs>' +
        arrowDef('epv-45-arr-p', 'primary') +
        arrowDef('epv-45-arr-s', 'success') +
        arrowDef('epv-45-arr-d', 'danger') +
        '  </defs>' +
        // Inicio block
        '  <rect x="18" y="26" width="260" height="168" rx="12" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2.2"></rect>' +
        '  <text x="148" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">FASE 1: INICIO (INCEPTION)</text>' +
        '  <text x="148" y="66" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-secondary)">Corta (~1 iteración)</text>' +
        '  <rect x="30" y="76" width="112" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--primary)"></rect>' +
        '  <text x="86" y="94" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Viabilidad</text>' +
        '  <rect x="154" y="76" width="112" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--primary)"></rect>' +
        '  <text x="210" y="94" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Visión aprox.</text>' +
        '  <rect x="30" y="112" width="112" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--primary)"></rect>' +
        '  <text x="86" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Caso negocio</text>' +
        '  <rect x="154" y="112" width="112" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--primary)"></rect>' +
        '  <text x="210" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Riesgos + Alc.</text>' +
        '  <rect x="30" y="150" width="236" height="32" rx="6" fill="var(--danger-soft)" stroke="var(--danger)"></rect>' +
        '  <text x="148" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">✕ NO detalla el 100% de reqs.</text>' +
        // Arrow to LCO Hexagon
        '  <line class="anim-flow" x1="278" y1="110" x2="318" y2="110" stroke="var(--primary)" stroke-width="2.4" marker-end="url(#epv-45-arr-p)"></line>' +
        // Wide Hexagon Gate
        '  <polygon points="320,110 356,50 486,50 522,110 486,170 356,170" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="2.2"></polygon>' +
        '  <text x="421" y="84" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">HITO LCO</text>' +
        '  <text x="421" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">Objetivos Ciclo Vida</text>' +
        '  <text x="421" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">¿Es viable</text>' +
        '  <text x="421" y="145" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">invertir?</text>' +
        // GO branch (top right)
        '  <path class="anim-flow" d="M 510 86 L 542 60 L 570 60" fill="none" stroke="var(--success)" stroke-width="2.4" stroke-linejoin="round" marker-end="url(#epv-45-arr-s)"></path>' +
        '  <text x="538" y="50" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">GO</text>' +
        '  <rect x="572" y="28" width="136" height="62" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect>' +
        '  <text x="640" y="51" text-anchor="middle" font-size="11" font-weight="700" fill="var(--success)">ELABORACIÓN ★</text>' +
        '  <text x="640" y="70" text-anchor="middle" font-size="9.5" fill="var(--ink)">Reqs. críticos + Arq.</text>' +
        '  <line x1="708" y1="59" x2="726" y2="59" stroke="var(--success)" stroke-width="2"></line>' +
        '  <rect x="726" y="34" width="76" height="24" rx="5" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="764" y="50" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-secondary)">Construcc.</text>' +
        '  <rect x="726" y="64" width="76" height="24" rx="5" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="764" y="80" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink-secondary)">Transición</text>' +
        // NO-GO branch (bottom right)
        '  <path class="anim-flow" d="M 510 134 L 542 162 L 570 162" fill="none" stroke="var(--danger)" stroke-width="2.4" stroke-linejoin="round" marker-end="url(#epv-45-arr-d)"></path>' +
        '  <text x="536" y="182" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">NO-GO</text>' +
        '  <rect x="572" y="130" width="230" height="62" rx="10" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="1.8"></rect>' +
        '  <text x="687" y="155" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--danger)">CANCELAR O REENCAUZAR</text>' +
        '  <text x="687" y="176" text-anchor="middle" font-size="10" fill="var(--ink)">Se corta antes de gastar recursos</text>' +
        // Bottom callout strip
        '  <rect x="18" y="210" width="784" height="32" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="410" y="230" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-secondary)">Decisión más importante de Inicio: confirmar viabilidad (Go / No-Go) antes de pasar a Elaboración</text>' +
        '</svg>'
    },

    // =========================================================================
    // EJE 5: CMMI en Análisis y Calidad de Proceso vs. Producto
    // =========================================================================
    'g5-calidad:0': {
      kicker: 'Cadena CMMI + Trazabilidad · 5.1',
      title: 'Las 5 prácticas CMMI en el análisis y la Trazabilidad Bidireccional',
      accent: 'primary',
      caption: 'CMMI (REQM · RD · PP) reemplaza improvisaciones con cinco prácticas ordenadas y trazabilidad navegable de ida y vuelta.',
      svg:
        '<svg viewBox="0 0 820 256" role="img" aria-label="Cadena de cinco prácticas CMMI en análisis de sistemas y trazabilidad bidireccional">' +
        '  <defs>' +
        arrowDef('epv-51-arr-p', 'primary') +
        arrowDef('epv-51-arr-t', 'teal') +
        '  </defs>' +
        // Top header bar
        '  <rect x="18" y="12" width="784" height="28" rx="7" fill="var(--surface)" stroke="var(--primary)"></rect>' +
        '  <text x="410" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">CMMI EN ANÁLISIS: Áreas REQM · RD · PP (Metas y Prácticas Específicas)</text>' +
        // 5 practice boxes (y=50 h=96, w=142, gap=18 -> 18, 178, 338, 498, 658)
        '  <rect x="18" y="50" width="142" height="96" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.6"></rect>' +
        '  <text x="89" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">1. Comprender</text>' +
        '  <text x="89" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">Acordar sentido</text>' +
        '  <text x="89" y="109" text-anchor="middle" font-size="10" fill="var(--ink)">común y criterios</text>' +
        '  <text x="89" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--primary)">REQM</text>' +
        '  <line class="anim-flow" x1="160" y1="98" x2="176" y2="98" stroke="var(--primary)" stroke-width="2" marker-end="url(#epv-51-arr-p)"></line>' +
        '  <rect x="178" y="50" width="142" height="96" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.6"></rect>' +
        '  <text x="249" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--teal)">2. Negociar</text>' +
        '  <text x="249" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">Validar con usuario</text>' +
        '  <text x="249" y="109" text-anchor="middle" font-size="10" fill="var(--ink)">y resolver choques</text>' +
        '  <text x="249" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--teal)">REQM / RD</text>' +
        '  <line class="anim-flow" x1="320" y1="98" x2="336" y2="98" stroke="var(--primary)" stroke-width="2" marker-end="url(#epv-51-arr-p)"></line>' +
        '  <rect x="338" y="50" width="142" height="96" rx="10" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.6"></rect>' +
        '  <text x="409" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warning)">3. Cambios</text>' +
        '  <text x="409" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">Evaluar impacto en</text>' +
        '  <text x="409" y="109" text-anchor="middle" font-size="10" fill="var(--ink)">costo y plazos</text>' +
        '  <text x="409" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--warning)">REQM</text>' +
        '  <line class="anim-flow" x1="480" y1="98" x2="496" y2="98" stroke="var(--primary)" stroke-width="2" marker-end="url(#epv-51-arr-p)"></line>' +
        '  <rect x="498" y="50" width="142" height="96" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.6"></rect>' +
        '  <text x="569" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--violet)">4. Trazabilidad</text>' +
        '  <text x="569" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">Navegar ida y</text>' +
        '  <text x="569" y="109" text-anchor="middle" font-size="10" fill="var(--ink)">vuelta en artefactos</text>' +
        '  <text x="569" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--violet)">REQM</text>' +
        '  <line class="anim-flow" x1="640" y1="98" x2="656" y2="98" stroke="var(--primary)" stroke-width="2" marker-end="url(#epv-51-arr-p)"></line>' +
        '  <rect x="658" y="50" width="144" height="96" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="730" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="var(--success)">5. Consistencia</text>' +
        '  <text x="730" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">Detectar desvíos +</text>' +
        '  <text x="730" y="109" text-anchor="middle" font-size="10" fill="var(--ink)">planificar realista</text>' +
        '  <text x="730" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--success)">REQM + PP SG1-3</text>' +
        // Bottom bidirectional traceability lane
        '  <rect x="18" y="162" width="784" height="82" rx="12" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>' +
        '  <text x="410" y="184" text-anchor="middle" font-size="11" font-weight="700" fill="var(--teal)">TRAZABILIDAD BIDIRECCIONAL (IDA Y VUELTA · PRÁCTICA 4)</text>' +
        '  <rect x="34" y="196" width="152" height="36" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="110" y="218" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Necesidad Usuario</text>' +
        '  <line class="anim-flow" x1="188" y1="214" x2="232" y2="214" stroke="var(--teal)" stroke-width="2" marker-start="url(#epv-51-arr-t)" marker-end="url(#epv-51-arr-t)"></line>' +
        '  <rect x="234" y="196" width="152" height="36" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="310" y="218" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">RF / Caso de Uso</text>' +
        '  <line class="anim-flow" x1="388" y1="214" x2="432" y2="214" stroke="var(--teal)" stroke-width="2" marker-start="url(#epv-51-arr-t)" marker-end="url(#epv-51-arr-t)"></line>' +
        '  <rect x="434" y="196" width="152" height="36" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="510" y="218" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Diseño / Código</text>' +
        '  <line class="anim-flow" x1="588" y1="214" x2="632" y2="214" stroke="var(--teal)" stroke-width="2" marker-start="url(#epv-51-arr-t)" marker-end="url(#epv-51-arr-t)"></line>' +
        '  <rect x="634" y="196" width="152" height="36" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="710" y="218" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Pruebas / V&amp;V</text>' +
        '</svg>'
    },

    'g5-calidad:1': {
      kicker: 'Regla causal + 4 Pilares · 5.2',
      title: 'Calidad de Proceso vs. Calidad de Producto y los 4 pilares',
      accent: 'success',
      caption: 'Un proceso deficiente garantiza un producto deficiente; uno bueno necesita además V&V y testing sostenido por estos 4 pilares.',
      svg:
        '<svg viewBox="0 0 820 262" role="img" aria-label="Relación causal entre calidad de proceso y producto junto a los cuatro pilares para garantizarla">' +
        '  <defs>' +
        arrowDef('epv-52-arr-d', 'danger') +
        arrowDef('epv-52-arr-s', 'success') +
        '  </defs>' +
        // Left Panel: Regla de oro causal
        '  <rect x="16" y="14" width="368" height="234" rx="12" fill="var(--surface)" stroke="var(--border-strong)"></rect>' +
        '  <text x="200" y="38" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">REGLA DE ORO CAUSAL</text>' +
        // Top causal flow (bad)
        '  <rect x="28" y="54" width="140" height="58" rx="8" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="1.6"></rect>' +
        '  <text x="98" y="79" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">Proceso deficiente</text>' +
        '  <text x="98" y="98" text-anchor="middle" font-size="10" fill="var(--ink)">Sin orden ni reglas</text>' +
        '  <line class="anim-flow" x1="168" y1="83" x2="226" y2="83" stroke="var(--danger)" stroke-width="2.2" marker-end="url(#epv-52-arr-d)"></line>' +
        '  <text x="197" y="74" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--danger)">Garantiza</text>' +
        '  <rect x="228" y="54" width="144" height="58" rx="8" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="1.6"></rect>' +
        '  <text x="300" y="79" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">Producto deficiente</text>' +
        '  <text x="300" y="98" text-anchor="middle" font-size="10" fill="var(--ink)">Falla segura</text>' +
        // Bottom causal flow (good)
        '  <rect x="28" y="138" width="96" height="58" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="76" y="164" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">Buen</text>' +
        '  <text x="76" y="181" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">Proceso</text>' +
        '  <text x="136" y="172" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">+</text>' +
        '  <rect x="148" y="138" width="96" height="58" rx="8" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="196" y="164" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">Testing</text>' +
        '  <text x="196" y="181" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">y V&amp;V</text>' +
        '  <line class="anim-flow" x1="244" y1="167" x2="272" y2="167" stroke="var(--success)" stroke-width="2.2" marker-end="url(#epv-52-arr-s)"></line>' +
        '  <rect x="274" y="138" width="98" height="58" rx="8" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="323" y="164" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">Buen</text>' +
        '  <text x="323" y="181" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--success)">Producto</text>' +
        '  <rect x="28" y="208" width="344" height="28" rx="6" fill="var(--surface-elevated)" stroke="var(--border)"></rect>' +
        '  <text x="200" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-secondary)">Buen proceso por sí solo NO alcanza sin pruebas</text>' +
        // Right Panel: 4 Pillars temple
        '  <rect x="396" y="14" width="408" height="234" rx="12" fill="var(--surface-elevated)" stroke="var(--success)" stroke-width="1.8"></rect>' +
        '  <rect x="410" y="26" width="380" height="36" rx="8" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.6"></rect>' +
        '  <text x="600" y="49" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">4 PILARES PARA GARANTIZAR CALIDAD</text>' +
        // Pillar 1
        '  <rect x="410" y="74" width="89" height="126" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>' +
        '  <text x="454" y="98" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">1. Guías</text>' +
        '  <text x="454" y="128" text-anchor="middle" font-size="10" fill="var(--ink)">Adoptar</text>' +
        '  <text x="454" y="146" text-anchor="middle" font-size="10" fill="var(--ink)">CMMI e</text>' +
        '  <text x="454" y="164" text-anchor="middle" font-size="10" fill="var(--ink)">ISO</text>' +
        // Pillar 2
        '  <rect x="507" y="74" width="89" height="126" rx="8" fill="var(--teal-soft)" stroke="var(--teal)"></rect>' +
        '  <text x="551" y="98" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">2. Reglas</text>' +
        '  <text x="551" y="128" text-anchor="middle" font-size="10" fill="var(--ink)">DoR y</text>' +
        '  <text x="551" y="146" text-anchor="middle" font-size="10" fill="var(--ink)">compuerta</text>' +
        '  <text x="551" y="164" text-anchor="middle" font-size="10" fill="var(--ink)">HITL</text>' +
        // Pillar 3
        '  <rect x="604" y="74" width="89" height="126" rx="8" fill="var(--violet-soft)" stroke="var(--violet)"></rect>' +
        '  <text x="648" y="98" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">3. Control</text>' +
        '  <text x="648" y="128" text-anchor="middle" font-size="10" fill="var(--ink)">V&amp;V,</text>' +
        '  <text x="648" y="146" text-anchor="middle" font-size="10" fill="var(--ink)">cambios y</text>' +
        '  <text x="648" y="164" text-anchor="middle" font-size="10" fill="var(--ink)">trazabil.</text>' +
        // Pillar 4
        '  <rect x="701" y="74" width="89" height="126" rx="8" fill="var(--warning-soft)" stroke="var(--warning)"></rect>' +
        '  <text x="745" y="98" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warning)">4. Mejora</text>' +
        '  <text x="745" y="128" text-anchor="middle" font-size="10" fill="var(--ink)">Métricas,</text>' +
        '  <text x="745" y="146" text-anchor="middle" font-size="10" fill="var(--ink)">lecciones</text>' +
        '  <text x="745" y="164" text-anchor="middle" font-size="10" fill="var(--ink)">y ajustes</text>' +
        // Base slab
        '  <rect x="410" y="210" width="380" height="26" rx="6" fill="var(--surface-muted)" stroke="var(--border-strong)"></rect>' +
        '  <text x="600" y="227" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Disciplina repetible en todo el ciclo de vida</text>' +
        '</svg>'
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
