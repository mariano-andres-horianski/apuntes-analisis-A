(function (global) {
  'use strict';

  global.ADS_PRACTICE_DATA = {
    // =========================================================================
    // 1. FLASHCARDS EXTRA (se combinan en runtime con las 42 de ADS_GLOSSARY)
    // =========================================================================
    extraFlashcards: [
      {
        id: 'fc-trazabilidad',
        unit: 3,
        term: 'Trazabilidad bidireccional',
        hint: 'Práctica clave de CMMI REQM y SDD',
        definition: 'Capacidad de seguir un requerimiento desde la necesidad del usuario hasta el diseño, código y pruebas (y volver desde una prueba hasta el requerimiento origen).',
        example: 'Cada Work Item con ID único permite saber qué caso de prueba verifica un requerimiento específico.'
      },
      {
        id: 'fc-artefacto',
        unit: 5,
        term: 'Artefacto',
        hint: 'Producto tangible o documental de una disciplina',
        definition: 'Cualquier documento, modelo, diagrama o entregable producido durante el proceso de desarrollo (ej. Caso de Uso, Modelo de Dominio, Visión, SRS).',
        example: 'El Diagrama de Secuencia de Sistema (DSS) y la Especificación Complementaria son artefactos de análisis en UP.'
      },
      {
        id: 'fc-caja-negra',
        unit: 1,
        term: 'Caja negra',
        hint: 'Cómo deben describirse el sistema y los Casos de Uso',
        definition: 'Forma de especificar qué hace un sistema observando solo sus entradas, salidas y responsabilidades externas, sin revelar ni acoplar su diseño interno ni tecnología.',
        example: 'Un Caso de Uso dice "El sistema valida el pago", nunca "El sistema hace un INSERT en la tabla SQL pagos".'
      },
      {
        id: 'fc-pre-post',
        unit: 5,
        term: 'Precondición vs. Postcondición',
        hint: 'Contrato de entrada y salida en un Caso de Uso',
        definition: 'La precondición debe cumplirse siempre antes de iniciar el Caso de Uso y no se prueba dentro de él; la postcondición garantiza el estado válido al finalizar con éxito.',
        example: 'Precondición: "El cajero está autenticado". Postcondición: "La venta quedó registrada y el stock actualizado".'
      },
      {
        id: 'fc-actor',
        unit: 5,
        term: 'Actor (Primario y Secundario)',
        hint: 'Rol externo al límite del sistema',
        definition: 'Persona, rol humano o sistema externo con comportamiento que interactúa con el sistema: el primario inicia el caso de uso para lograr un objetivo; el secundario asiste o responde.',
        example: 'Cliente (primario) inicia "Pagar Pedido"; Pasarela de Pagos (secundario) autoriza la tarjeta.'
      },
      {
        id: 'fc-extension',
        unit: 5,
        term: 'Extensión / Flujo alternativo',
        hint: 'Manejo de desvíos o excepciones en Casos de Uso',
        definition: 'Bifurcación del escenario principal ante errores, rechazos o caminos opcionales que también resuelve el sistema de forma controlada.',
        example: 'En "Pagar Compra", si la tarjeta es rechazada, una extensión ofrece reintentar con otro medio de pago.'
      },
      {
        id: 'fc-regla-negocio',
        unit: 3,
        term: 'Regla de Negocio',
        hint: 'Política o restricción propia de la organización',
        definition: 'Política, cálculo, umbral o normativa del dominio que condiciona cómo debe operar el sistema, independientemente de la interfaz o base de datos.',
        example: '"Las cancelaciones con menos de 24 hs de anticipación retienen el 50% de la seña."'
      },
      {
        id: 'fc-agreg-comp',
        unit: 5,
        term: 'Agregación vs. Composición',
        hint: 'Relaciones TODO–PARTE en Modelo de Dominio / Clases',
        definition: 'En agregación (rombo vacío ◇) las partes pueden existir independientemente del todo; en composición (rombo lleno ◆) las partes pertenecen exclusivamente al todo y mueren con él.',
        example: 'Equipo ◇—— Jugador (agregación) vs. Pedido ◆—— ÍtemPedido (composición).'
      },
      {
        id: 'fc-include',
        unit: 5,
        term: 'Relación «include»',
        hint: 'Subfunción obligatoria reutilizada',
        definition: 'Relación UML en la que un caso de uso base ejecuta obligatoriamente otro caso de uso incluido. La flecha punteada siempre apunta DESDE el caso base HACIA el incluido.',
        example: '"Realizar Compra" --«include»--> "Validar Pago".'
      },
      {
        id: 'fc-extend',
        unit: 5,
        term: 'Relación «extend»',
        hint: 'Comportamiento opcional o condicional',
        definition: 'Relación UML donde una extensión opcional amplía un caso base solo bajo cierta condición. La flecha punteada siempre apunta DESDE la extensión HACIA el caso base.',
        example: '"Aplicar Cupón de Descuento" --«extend»--> "Realizar Compra".'
      },
      {
        id: 'fc-acoplamiento',
        unit: 4,
        term: 'Acoplamiento',
        hint: 'Grado de dependencia entre módulos o componentes',
        definition: 'Medida de cuánto depende un módulo o clase de los detalles internos de otro. El buen diseño busca bajo acoplamiento para facilitar cambios sin efecto dominó.',
        example: 'Si cambiar una consulta SQL obliga a reescribir 10 pantallas, existe alto acoplamiento.'
      },
      {
        id: 'fc-cohesion',
        unit: 4,
        term: 'Cohesión',
        hint: 'Qué tan enfocadas están las responsabilidades internas',
        definition: 'Grado en que los elementos dentro de un mismo módulo o clase colaboran hacia un único propósito claro. Se busca alta cohesión para mejorar legibilidad y reutilización.',
        example: 'Una clase Pedido que calcula totales de pedido tiene alta cohesión; si además envía mails y formatea PDFs, tiene baja cohesión.'
      },
      {
        id: 'fc-esp-compl',
        unit: 5,
        term: 'Especificación Complementaria',
        hint: 'Artefacto UP para lo que no entra en Casos de Uso',
        definition: 'Documento del Proceso Unificado que captura requisitos no funcionales, reglas globales, licencias y restricciones que atraviesan múltiples Casos de Uso.',
        example: 'Tiempos máximos de respuesta, compatibilidad legal AFIP y política de contraseñas.'
      },
      {
        id: 'fc-actor-obj',
        unit: 5,
        term: 'Lista Actor–Objetivo',
        hint: 'Técnica de descubrimiento de Casos de Uso en UP',
        definition: 'Inventario inicial que empareja cada actor del sistema con las metas de negocio que necesita lograr, convirtiéndose en el punto de partida para nombrar Casos de Uso.',
        example: 'Socio → "Reservar cancha", "Cancelar reserva", "Consultar historial".'
      }
    ],

    // =========================================================================
    // 2. CAZADOR DE ERRORES EN DIAGRAMAS (4 diagramas x 3 errores + 3 válidos)
    // =========================================================================
    bugDiagrams: [
      {
        id: 'bug-uc',
        kind: 'Casos de Uso',
        title: 'Tienda Online · Diagrama de Casos de Uso',
        subtitle: 'Hacé clic sobre los elementos del diagrama: encontrá los 3 errores conceptuales de UML y Caja Negra.',
        domain: 'Unidad 5 · Casos de Uso y Caja Negra',
        errorCount: 3,
        svg: `<svg viewBox="0 0 880 430" role="img" aria-label="Diagrama de Casos de Uso con errores plantados">
          <defs>
            <marker id="bh-uc-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
            </marker>
          </defs>

          <!-- Límite del sistema (válido) -->
          <g class="bug-hotspot" data-spot="ok-boundary" tabindex="0" role="button" aria-label="Límite del sistema Tienda Online">
            <rect class="bug-frame" x="210" y="24" width="466" height="384" rx="16" fill="var(--surface)" stroke="var(--primary)" stroke-width="2" stroke-dasharray="7 4"></rect>
            <text x="443" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">Sistema Tienda Online (Límite)</text>
          </g>

          <!-- Actor Cliente + Caso Base (válido) -->
          <g class="bug-hotspot" data-spot="ok-actor-base" tabindex="0" role="button" aria-label="Actor Cliente conectado a Realizar Compra">
            <rect class="bug-hit" x="34" y="102" width="124" height="170" rx="10" fill="transparent"></rect>
            <circle cx="96" cy="140" r="16" fill="var(--surface-elevated)" stroke="var(--ink)" stroke-width="2.2"></circle>
            <line x1="96" y1="156" x2="96" y2="206" stroke="var(--ink)" stroke-width="2.2"></line>
            <line x1="68" y1="176" x2="124" y2="176" stroke="var(--ink)" stroke-width="2.2"></line>
            <line x1="96" y1="206" x2="74" y2="238" stroke="var(--ink)" stroke-width="2.2"></line>
            <line x1="96" y1="206" x2="118" y2="238" stroke="var(--ink)" stroke-width="2.2"></line>
            <text x="96" y="260" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Cliente</text>

            <line x1="126" y1="178" x2="236" y2="116" stroke="transparent" stroke-width="16"></line>
            <line x1="126" y1="178" x2="236" y2="116" stroke="var(--ink-secondary)" stroke-width="2"></line>

            <ellipse cx="326" cy="112" rx="90" ry="28" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></ellipse>
            <text x="326" y="117" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">Realizar Compra</text>
          </g>

          <!-- Error 2: <<extend>> al revés (desde base hacia extensión) -->
          <g class="bug-hotspot" data-spot="err-extend" tabindex="0" role="button" aria-label="Relación extend hacia Aplicar Cupón">
            <line x1="416" y1="112" x2="496" y2="112" stroke="transparent" stroke-width="18"></line>
            <line x1="416" y1="112" x2="493" y2="112" stroke="var(--primary)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#bh-uc-arr)"></line>
            <rect x="419" y="75" width="76" height="22" rx="11" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.2"></rect>
            <text x="457" y="90" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">«extend»</text>

            <ellipse cx="578" cy="112" rx="82" ry="28" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></ellipse>
            <text x="578" y="117" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Aplicar Cupón</text>
          </g>

          <!-- Error 1: <<include>> al revés (desde Validar Pago hacia Realizar Compra) -->
          <g class="bug-hotspot" data-spot="err-include" tabindex="0" role="button" aria-label="Relación include desde Validar Pago">
            <ellipse cx="366" cy="236" rx="90" ry="28" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></ellipse>
            <text x="366" y="241" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink)">Validar Pago</text>

            <line x1="354" y1="208" x2="334" y2="140" stroke="transparent" stroke-width="18"></line>
            <line x1="354" y1="208" x2="336" y2="144" stroke="var(--primary)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#bh-uc-arr)"></line>
            <rect x="358" y="162" width="84" height="22" rx="11" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.2"></rect>
            <text x="400" y="177" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">«include»</text>
          </g>

          <!-- Actor secundario Pasarela de Pagos (válido) -->
          <g class="bug-hotspot" data-spot="ok-secondary" tabindex="0" role="button" aria-label="Actor secundario Pasarela de Pagos">
            <line x1="456" y1="236" x2="706" y2="236" stroke="transparent" stroke-width="16"></line>
            <line x1="456" y1="236" x2="706" y2="236" stroke="var(--ink-secondary)" stroke-width="2"></line>
            <rect x="706" y="206" width="150" height="60" rx="10" fill="var(--surface-elevated)" stroke="var(--ink)" stroke-width="2"></rect>
            <text x="781" y="229" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--teal)">«sistema externo»</text>
            <text x="781" y="249" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Pasarela de Pagos</text>
          </g>

          <!-- Error 3: Caso de uso técnico violando Caja Negra -->
          <g class="bug-hotspot" data-spot="err-sql" tabindex="0" role="button" aria-label="Caso de uso Guardar en Tabla SQL">
            <line x1="120" y1="240" x2="256" y2="352" stroke="transparent" stroke-width="16"></line>
            <line x1="120" y1="240" x2="256" y2="352" stroke="var(--ink-secondary)" stroke-width="2"></line>
            <ellipse cx="372" cy="352" rx="116" ry="28" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></ellipse>
            <text x="372" y="357" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Guardar en Tabla SQL</text>
          </g>
        </svg>`,
        spots: {
          'ok-boundary': {
            isError: false,
            label: 'Límite del Sistema Tienda Online',
            okMsg: 'Correcto: el rectángulo delimita el alcance del sistema encerrando los casos de uso y dejando a los actores afuera.'
          },
          'ok-actor-base': {
            isError: false,
            label: 'Cliente — Realizar Compra',
            okMsg: 'Correcto: Cliente es un actor primario humano fuera del límite que inicia el caso de uso principal.'
          },
          'ok-secondary': {
            isError: false,
            label: 'Pasarela de Pagos (actor secundario)',
            okMsg: 'Correcto: un sistema externo que colabora respondiendo al caso de uso también se modela como actor secundario a la derecha.'
          },
          'err-include': {
            isError: true,
            label: 'Relación «include» hacia arriba',
            question: '¿Por qué está mal esta relación «include»?',
            options: [
              'Porque la flecha está al revés: debe apuntar DESDE "Realizar Compra" (base) HACIA "Validar Pago" (incluido).',
              'Porque «include» debe dibujarse siempre con línea continua y no punteada.',
              'Porque "Validar Pago" nunca puede ser un caso de uso incluido.'
            ],
            correctIndex: 0,
            fixExplanation: 'En UML «include» indica que el caso base necesita al incluido: la flecha punteada va del base ("Realizar Compra") al incluido ("Validar Pago").'
          },
          'err-extend': {
            isError: true,
            label: 'Relación «extend» hacia Aplicar Cupón',
            question: '¿Qué falla conceptual tiene esta relación «extend»?',
            options: [
              'Un caso opcional nunca puede relacionarse con "Realizar Compra".',
              'La flecha «extend» apunta al revés: la extensión ("Aplicar Cupón") debe apuntar HACIA el caso base ("Realizar Compra").',
              'Toda relación «extend» debe conectarse directamente con el actor.'
            ],
            correctIndex: 1,
            fixExplanation: 'En «extend», la extensión opcional conoce al caso base y se engancha en él: "Aplicar Cupón" --«extend»--> "Realizar Compra".'
          },
          'err-sql': {
            isError: true,
            label: 'Óvalo "Guardar en Tabla SQL"',
            question: '¿Por qué "Guardar en Tabla SQL" es un error en Casos de Uso?',
            options: [
              'Porque los Casos de Uso no pueden conectarse al actor Cliente.',
              'Porque un Caso de Uso solo puede contener verbos en pasado.',
              'Porque viola el principio de Caja Negra: describe diseño/implementación (CÓMO) en vez de valor/necesidad de negocio (QUÉ).'
            ],
            correctIndex: 2,
            fixExplanation: 'Los Casos de Uso de análisis son Caja Negra: describen qué logra el actor con el sistema, sin mencionar tablas SQL, clases ni tecnología.'
          }
        }
      },
      {
        id: 'bug-class',
        kind: 'Clases / Dominio',
        title: 'Gestión de Pedidos · Modelo de Dominio',
        subtitle: 'Inspeccioná clases conceptuales, cardinalidades y composición: hay 3 errores conceptuales escondidos.',
        domain: 'Unidad 5 · Modelo de Dominio y AOO',
        errorCount: 3,
        svg: `<svg viewBox="0 0 880 430" role="img" aria-label="Modelo de Dominio con errores plantados">
          <rect x="18" y="18" width="844" height="394" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="6 4"></rect>
          <text x="36" y="42" font-size="11.5" font-weight="700" fill="var(--ink-secondary)">MODELO DE DOMINIO · GESTIÓN DE PEDIDOS</text>

          <!-- Cliente (válido) -->
          <g class="bug-hotspot" data-spot="ok-cliente" tabindex="0" role="button" aria-label="Clase conceptual Cliente">
            <rect x="44" y="64" width="188" height="122" rx="8" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
            <line x1="44" y1="98" x2="232" y2="98" stroke="var(--primary)" stroke-width="1.6"></line>
            <text x="138" y="86" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">Cliente</text>
            <text x="58" y="122" font-size="11.5" fill="var(--ink-secondary)">- nombre: String</text>
            <text x="58" y="144" font-size="11.5" fill="var(--ink-secondary)">- dni: String</text>
            <text x="58" y="166" font-size="11.5" fill="var(--ink-secondary)">- email: String</text>
          </g>

          <!-- Error 1: Cardinalidad invertida Cliente 1..* — 1 Pedido -->
          <g class="bug-hotspot" data-spot="err-card" tabindex="0" role="button" aria-label="Asociación realiza entre Cliente y Pedido">
            <rect x="234" y="86" width="130" height="72" rx="8" fill="transparent"></rect>
            <line x1="232" y1="124" x2="366" y2="124" stroke="var(--ink-secondary)" stroke-width="2"></line>
            <text x="248" y="112" font-size="12" font-weight="700" fill="var(--ink)">1..*</text>
            <text x="348" y="112" font-size="12" font-weight="700" fill="var(--ink)">1</text>
            <text x="299" y="144" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink-secondary)">realiza →</text>
          </g>

          <!-- Pedido (válido) -->
          <g class="bug-hotspot" data-spot="ok-pedido" tabindex="0" role="button" aria-label="Clase conceptual Pedido">
            <rect x="366" y="64" width="188" height="122" rx="8" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
            <line x1="366" y1="98" x2="554" y2="98" stroke="var(--primary)" stroke-width="1.6"></line>
            <text x="460" y="86" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">Pedido</text>
            <text x="380" y="122" font-size="11.5" fill="var(--ink-secondary)">- fecha: Date</text>
            <text x="380" y="144" font-size="11.5" fill="var(--ink-secondary)">- estado: String</text>
            <text x="380" y="166" font-size="11.5" fill="var(--ink-secondary)">- total: Decimal</text>
          </g>

          <!-- Error 2: Composición con rombo del lado equivocado -->
          <g class="bug-hotspot" data-spot="err-comp" tabindex="0" role="button" aria-label="Composición entre Pedido e ÍtemPedido">
            <rect x="556" y="86" width="118" height="72" rx="8" fill="transparent"></rect>
            <line x1="554" y1="124" x2="650" y2="124" stroke="var(--teal)" stroke-width="2.2"></line>
            <polygon points="650,124 662,116 674,124 662,132" fill="var(--teal)" stroke="var(--teal)" stroke-width="1.6"></polygon>
            <text x="612" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="var(--teal)">contiene</text>
            <text x="568" y="144" font-size="11.5" font-weight="700" fill="var(--ink)">1</text>
            <text x="634" y="144" font-size="11.5" font-weight="700" fill="var(--ink)">1..*</text>
          </g>

          <!-- ÍtemPedido (contexto neutro) -->
          <rect x="674" y="64" width="166" height="122" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)" stroke-width="1.8"></rect>
          <line x1="674" y1="98" x2="840" y2="98" stroke="var(--border-strong)" stroke-width="1.5"></line>
          <text x="757" y="86" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">ÍtemPedido</text>
          <text x="688" y="122" font-size="11.5" fill="var(--ink-secondary)">- cantidad: Int</text>
          <text x="688" y="144" font-size="11.5" fill="var(--ink-secondary)">- precioUnit: Dec.</text>

          <!-- Producto + relación válida -->
          <g class="bug-hotspot" data-spot="ok-prod" tabindex="0" role="button" aria-label="Clase Producto y multiplicidad con ÍtemPedido">
            <line x1="757" y1="186" x2="757" y2="268" stroke="transparent" stroke-width="16"></line>
            <line x1="757" y1="186" x2="757" y2="268" stroke="var(--ink-secondary)" stroke-width="2"></line>
            <text x="770" y="206" font-size="12" font-weight="700" fill="var(--ink)">*</text>
            <text x="770" y="256" font-size="12" font-weight="700" fill="var(--ink)">1</text>
            <text x="770" y="232" font-size="11" fill="var(--ink-secondary)">referencia</text>

            <rect x="660" y="268" width="184" height="118" rx="8" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
            <line x1="660" y1="302" x2="844" y2="302" stroke="var(--primary)" stroke-width="1.6"></line>
            <text x="752" y="290" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">Producto</text>
            <text x="674" y="326" font-size="11.5" fill="var(--ink-secondary)">- codigo: String</text>
            <text x="674" y="348" font-size="11.5" fill="var(--ink-secondary)">- nombre: String</text>
            <text x="674" y="370" font-size="11.5" fill="var(--ink-secondary)">- precio: Decimal</text>
          </g>

          <!-- Error 3: Clase técnica de software en Modelo de Dominio -->
          <g class="bug-hotspot" data-spot="err-tech" tabindex="0" role="button" aria-label="Clase ConexionSQLController">
            <line x1="460" y1="186" x2="400" y2="262" stroke="transparent" stroke-width="14"></line>
            <line x1="460" y1="186" x2="400" y2="262" stroke="var(--ink-secondary)" stroke-width="1.6" stroke-dasharray="5 3"></line>
            <rect x="272" y="262" width="244" height="128" rx="8" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="2"></rect>
            <line x1="272" y1="312" x2="516" y2="312" stroke="var(--violet)" stroke-width="1.5"></line>
            <text x="394" y="282" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--violet)">«controller»</text>
            <text x="394" y="302" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">ConexionSQLController</text>
            <text x="288" y="336" font-size="11.5" fill="var(--ink-secondary)">- pool: DataSource</text>
            <text x="288" y="362" font-size="11.5" fill="var(--ink-secondary)">+ conectarBD(): void</text>
          </g>
        </svg>`,
        spots: {
          'ok-cliente': {
            isError: false,
            label: 'Clase conceptual Cliente',
            okMsg: 'Correcto: Cliente es un concepto real del dominio con atributos propios (nombre, dni, email).'
          },
          'ok-pedido': {
            isError: false,
            label: 'Clase conceptual Pedido',
            okMsg: 'Correcto: Pedido representa una entidad del negocio con sus atributos relevantes en el Modelo de Dominio.'
          },
          'ok-prod': {
            isError: false,
            label: 'Asociación ÍtemPedido * — 1 Producto',
            okMsg: 'Correcto: muchos ítems de pedido pueden referenciar al mismo Producto del catálogo, y cada ítem apunta a 1 Producto.'
          },
          'err-card': {
            isError: true,
            label: 'Cardinalidad Cliente 1..* — 1 Pedido',
            question: '¿Qué está mal en las multiplicidades de "Cliente realiza Pedido"?',
            options: [
              'Están invertidas: dice que un Pedido tiene varios Clientes y un Cliente hace exactamente 1 Pedido, cuando 1 Cliente realiza 0..* Pedidos.',
              'Las asociaciones nunca llevan multiplicidades en UML.',
              'Debería ser 1 a 1 estricta para evitar duplicados.'
            ],
            correctIndex: 0,
            fixExplanation: 'Cada Pedido pertenece a 1 Cliente (junto a Pedido va "1") y un Cliente puede realizar 0 o muchos Pedidos (junto a Pedido debería ir "0..*" y junto a Cliente "1").'
          },
          'err-comp': {
            isError: true,
            label: 'Rombo de composición junto a ÍtemPedido',
            question: '¿Cuál es el error en la composición Pedido —◆ ÍtemPedido?',
            options: [
              'Debería usarse herencia porque un ÍtemPedido es un tipo de Pedido.',
              'El rombo relleno ◆ siempre va pegado al TODO (Pedido), no a la parte (ÍtemPedido).',
              'Falta incluir el atributo id_pedido como clave foránea.'
            ],
            correctIndex: 1,
            fixExplanation: 'En agregación y composición, el rombo se coloca del lado del contenedor/TODO: Pedido ◆——— 1..* ÍtemPedido.'
          },
          'err-tech': {
            isError: true,
            label: 'Clase ConexionSQLController',
            question: '¿Por qué ConexionSQLController NO corresponde en este Modelo de Dominio?',
            options: [
              'Porque solo puede haber tres clases por diagrama.',
              'Porque en un Modelo de Dominio los métodos siempre son privados.',
              'Porque el Modelo de Dominio abstrae conceptos del negocio (espacio del problema), no clases técnicas ni controladores de base de datos.'
            ],
            correctIndex: 2,
            fixExplanation: 'Un Modelo de Dominio no es un diagrama de clases de software: excluye controladores, DTOs y conexiones SQL (espacio de la solución).'
          }
        }
      },
      {
        id: 'bug-seq',
        kind: 'Secuencia (DSS)',
        title: 'Reserva de Turno · Diagrama de Secuencia del Sistema',
        subtitle: 'Buscá 3 errores típicos de caja negra, dirección de eventos y orden temporal en un DSS.',
        domain: 'Unidad 5 · DSS y Caja Negra',
        errorCount: 3,
        svg: `<svg viewBox="0 0 880 430" role="img" aria-label="Diagrama de Secuencia del Sistema con errores plantados">
          <defs>
            <marker id="bh-seq-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
            </marker>
            <marker id="bh-seq-ret" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--teal)"></path>
            </marker>
          </defs>

          <rect x="18" y="16" width="844" height="398" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="6 4"></rect>

          <!-- Línea de vida válida del actor Paciente -->
          <g class="bug-hotspot" data-spot="ok-lifeline" tabindex="0" role="button" aria-label="Actor Paciente y su línea de vida">
            <rect x="72" y="28" width="144" height="46" rx="8" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
            <text x="144" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">:Paciente (Actor)</text>
            <line x1="144" y1="74" x2="144" y2="394" stroke="var(--ink-secondary)" stroke-width="2" stroke-dasharray="6 4"></line>
            <rect x="84" y="376" width="120" height="22" rx="6" fill="var(--surface-elevated)" stroke="var(--border-strong)" stroke-width="1.2"></rect>
            <text x="144" y="391" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink-secondary)">Línea de vida</text>
          </g>

          <!-- Error 1: Sistema abierto en componentes internos (Caja Blanca) -->
          <g class="bug-hotspot" data-spot="err-whitebox" tabindex="0" role="button" aria-label="Participantes internos ControladorTurnos y TablaTurnosSQL">
            <rect x="350" y="28" width="184" height="46" rx="8" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="2"></rect>
            <text x="442" y="56" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--violet)">:ControladorTurnos</text>
            <line x1="442" y1="74" x2="442" y2="394" stroke="var(--ink-secondary)" stroke-width="2" stroke-dasharray="6 4"></line>

            <rect x="624" y="28" width="194" height="46" rx="8" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="2"></rect>
            <text x="721" y="56" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--violet)">:TablaTurnosSQL</text>
            <line x1="721" y1="74" x2="721" y2="394" stroke="var(--ink-secondary)" stroke-width="2" stroke-dasharray="6 4"></line>

            <line x1="442" y1="144" x2="716" y2="144" stroke="var(--violet)" stroke-width="1.8" marker-end="url(#bh-seq-arr)"></line>
            <text x="582" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="var(--violet)">SELECT * FROM turnos</text>
          </g>

          <!-- Mensaje 1 válido: Actor -> Sistema -->
          <g class="bug-hotspot" data-spot="ok-call" tabindex="0" role="button" aria-label="Evento 1 ingresarDNI">
            <line x1="144" y1="118" x2="436" y2="118" stroke="transparent" stroke-width="18"></line>
            <line x1="144" y1="118" x2="436" y2="118" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#bh-seq-arr)"></line>
            <text x="293" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">1. ingresarDNI(dni)</text>
          </g>

          <!-- Error 3: Dirección invertida en evento del sistema -->
          <g class="bug-hotspot" data-spot="err-dir" tabindex="0" role="button" aria-label="Flecha 2 solicitarHorarios desde sistema hacia actor">
            <line x1="442" y1="184" x2="150" y2="184" stroke="transparent" stroke-width="18"></line>
            <line x1="442" y1="184" x2="150" y2="184" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#bh-seq-arr)"></line>
            <text x="293" y="174" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">2. solicitarHorarios(especialidad)</text>
          </g>

          <!-- Mensaje 3 válido: Respuesta punteada Sistema -> Actor -->
          <g class="bug-hotspot" data-spot="ok-return" tabindex="0" role="button" aria-label="Respuesta 3 listaHorarios">
            <line x1="442" y1="242" x2="150" y2="242" stroke="transparent" stroke-width="18"></line>
            <line x1="442" y1="242" x2="150" y2="242" stroke="var(--teal)" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#bh-seq-ret)"></line>
            <text x="293" y="232" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal)">3. listaHorarios</text>
          </g>

          <!-- Error 2: Orden temporal imposible -->
          <g class="bug-hotspot" data-spot="err-order" tabindex="0" role="button" aria-label="Mensajes 4 y 5 en orden invertido">
            <line x1="442" y1="298" x2="150" y2="298" stroke="transparent" stroke-width="18"></line>
            <line x1="442" y1="298" x2="150" y2="298" stroke="var(--teal)" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#bh-seq-ret)"></line>
            <text x="293" y="288" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--teal)">4. comprobanteConfirmado()</text>

            <line x1="144" y1="352" x2="436" y2="352" stroke="transparent" stroke-width="18"></line>
            <line x1="144" y1="352" x2="436" y2="352" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#bh-seq-arr)"></line>
            <text x="293" y="342" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">5. confirmarTurno(horario)</text>
          </g>
        </svg>`,
        spots: {
          'ok-lifeline': {
            isError: false,
            label: 'Actor :Paciente y línea de vida',
            okMsg: 'Correcto: el actor externo se representa arriba con su línea de vida vertical punteada corriendo en el tiempo hacia abajo.'
          },
          'ok-call': {
            isError: false,
            label: 'Evento 1. ingresarDNI(dni)',
            okMsg: 'Correcto: representa un evento del sistema iniciado por el actor externo mediante flecha continua.'
          },
          'ok-return': {
            isError: false,
            label: 'Respuesta 3. listaHorarios',
            okMsg: 'Correcto: los retornos de información desde el sistema hacia el actor se dibujan con flecha punteada.'
          },
          'err-whitebox': {
            isError: true,
            label: ':ControladorTurnos y :TablaTurnosSQL',
            question: '¿Por qué no deben aparecer :ControladorTurnos ni :TablaTurnosSQL en un DSS?',
            options: [
              'Porque en un DSS todo el software se representa como una única Caja Negra (:Sistema), sin clases internas ni consultas SQL.',
              'Porque un diagrama de secuencia admite como máximo 1 objeto y 1 mensaje.',
              'Porque las consultas SQL deben ir en el eje vertical.'
            ],
            correctIndex: 0,
            fixExplanation: 'El DSS (Diagrama de Secuencia de Sistema) es un artefacto de análisis Caja Negra: solo muestra los actores y una única línea de vida llamada :Sistema.'
          },
          'err-dir': {
            isError: true,
            label: '2. solicitarHorarios(especialidad) hacia Paciente',
            question: '¿Qué falla en la flecha "2. solicitarHorarios(especialidad)"?',
            options: [
              'Que debería usar doble punta en ambos extremos.',
              'La dirección es contraria: es el Paciente quien solicita los horarios al :Sistema, no el :Sistema invocando ese evento al Paciente.',
              'Los parámetros entre paréntesis están prohibidos en un DSS.'
            ],
            correctIndex: 1,
            fixExplanation: 'En un DSS, los eventos del sistema parten del actor externo hacia :Sistema (el actor dispara la operación solicitarHorarios).'
          },
          'err-order': {
            isError: true,
            label: 'Orden entre paso 4 (comprobante) y paso 5 (confirmarTurno)',
            question: '¿Por qué es inválido que "comprobanteConfirmado()" aparezca encima de "confirmarTurno()"?',
            options: [
              'Porque en secuencia el tiempo avanza de arriba hacia abajo: no se puede devolver un comprobante antes de recibir la confirmación del turno.',
              'Porque los comprobantes siempre van antes del DNI.',
              'Porque confirmarTurno debería estar en línea punteada.'
            ],
            correctIndex: 0,
            fixExplanation: 'El eje vertical representa el tiempo descendente: primero ocurre confirmarTurno(horario) y después la respuesta comprobanteConfirmado().'
          }
        }
      },
      {
        id: 'bug-der',
        kind: 'DER',
        title: 'Biblioteca Universitaria · Diagrama Entidad-Relación',
        subtitle: 'Revisá entidades, atributos, relaciones y claves foráneas: descubrí los 3 errores del DER.',
        domain: 'Modelado de Datos · Entidades y Cardinalidad',
        errorCount: 3,
        svg: `<svg viewBox="0 0 880 430" role="img" aria-label="Diagrama Entidad Relación con errores plantados">
          <rect x="18" y="18" width="844" height="394" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="6 4"></rect>
          <text x="36" y="42" font-size="11.5" font-weight="700" fill="var(--ink-secondary)">DER · SISTEMA DE PRÉSTAMOS DE BIBLIOTECA</text>

          <!-- Entidad Socio (válida parte superior) -->
          <g class="bug-hotspot" data-spot="ok-socio" tabindex="0" role="button" aria-label="Entidad Socio">
            <rect x="40" y="64" width="214" height="154" rx="8" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
            <line x1="40" y1="98" x2="254" y2="98" stroke="var(--primary)" stroke-width="1.6"></line>
            <text x="147" y="86" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">Socio</text>
            <text x="56" y="122" font-size="11.5" font-weight="700" fill="var(--ink)">legajo (PK)</text>
            <text x="56" y="144" font-size="11.5" fill="var(--ink-secondary)">nombre</text>
            <text x="56" y="164" font-size="11.5" fill="var(--ink-secondary)">carrera</text>
          </g>

          <!-- Error 1: FK en el lado 1 en lugar del lado N -->
          <g class="bug-hotspot" data-spot="err-fk" tabindex="0" role="button" aria-label="Atributo id_prestamo FK dentro de Socio">
            <rect x="48" y="174" width="198" height="36" rx="6" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.3"></rect>
            <text x="147" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">id_prestamo (FK)</text>
          </g>

          <!-- Relación válida 1:N Socio - realiza - Préstamo -->
          <g class="bug-hotspot" data-spot="ok-card" tabindex="0" role="button" aria-label="Relación realiza 1 a N">
            <rect x="256" y="96" width="260" height="82" rx="8" fill="transparent"></rect>
            <line x1="254" y1="138" x2="334" y2="138" stroke="var(--ink-secondary)" stroke-width="2"></line>
            <polygon points="334,138 386,104 438,138 386,172" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="2"></polygon>
            <text x="386" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal)">realiza</text>
            <line x1="438" y1="138" x2="518" y2="138" stroke="var(--ink-secondary)" stroke-width="2"></line>
            <text x="276" y="126" font-size="12.5" font-weight="700" fill="var(--ink)">1</text>
            <text x="494" y="126" font-size="12.5" font-weight="700" fill="var(--ink)">N</text>
          </g>

          <!-- Entidad Préstamo (contexto) -->
          <rect x="518" y="64" width="228" height="148" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)" stroke-width="2"></rect>
          <line x1="518" y1="98" x2="746" y2="98" stroke="var(--border-strong)" stroke-width="1.6"></line>
          <text x="632" y="86" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Préstamo</text>
          <text x="534" y="122" font-size="11.5" font-weight="700" fill="var(--ink)">id_prestamo (PK)</text>
          <text x="534" y="144" font-size="11.5" fill="var(--ink-secondary)">fecha_retiro</text>
          <text x="534" y="166" font-size="11.5" fill="var(--ink-secondary)">legajo_socio</text>

          <!-- Línea relación Préstamo - incluye - Libro -->
          <line x1="632" y1="212" x2="632" y2="290" stroke="var(--ink-secondary)" stroke-width="2"></line>
          <polygon points="580,250 632,226 684,250 632,274" fill="var(--surface-elevated)" stroke="var(--border-strong)" stroke-width="1.6"></polygon>
          <text x="632" y="254" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-secondary)">incluye</text>
          <text x="646" y="224" font-size="11.5" font-weight="700" fill="var(--ink)">N</text>
          <text x="646" y="284" font-size="11.5" font-weight="700" fill="var(--ink)">1</text>

          <!-- Entidad Libro (parte superior válida) -->
          <g class="bug-hotspot" data-spot="ok-libro" tabindex="0" role="button" aria-label="Entidad Libro">
            <rect x="518" y="290" width="228" height="114" rx="8" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
            <line x1="518" y1="324" x2="746" y2="324" stroke="var(--primary)" stroke-width="1.6"></line>
            <text x="632" y="312" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">Libro</text>
            <text x="534" y="344" font-size="11.5" font-weight="700" fill="var(--ink)">isbn (PK)</text>
            <text x="534" y="362" font-size="11.5" fill="var(--ink-secondary)">titulo</text>
          </g>

          <!-- Error 2: Atributo fecha_devolucion mal ubicado en Libro -->
          <g class="bug-hotspot" data-spot="err-attr" tabindex="0" role="button" aria-label="Atributo fecha_devolucion dentro de Libro">
            <rect x="526" y="366" width="212" height="32" rx="6" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.3"></rect>
            <text x="632" y="386" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">fecha_devolucion</text>
          </g>

          <!-- Error 3: Relación conectada a un atributo suelto en lugar de entidad -->
          <g class="bug-hotspot" data-spot="err-rel" tabindex="0" role="button" aria-label="Relación notifica conectando Préstamo con atributo email">
            <line x1="518" y1="186" x2="394" y2="310" stroke="transparent" stroke-width="16"></line>
            <line x1="518" y1="186" x2="394" y2="310" stroke="var(--violet)" stroke-width="2"></line>
            <polygon points="292,310 344,278 396,310 344,342" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="2"></polygon>
            <text x="344" y="314" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">notifica</text>
            <line x1="292" y1="310" x2="210" y2="310" stroke="var(--violet)" stroke-width="2"></line>
            <ellipse cx="132" cy="310" rx="78" ry="30" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="2"></ellipse>
            <text x="132" y="307" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">email</text>
            <text x="132" y="324" text-anchor="middle" font-size="10" fill="var(--ink-secondary)">(Atributo suelto)</text>
          </g>
        </svg>`,
        spots: {
          'ok-socio': {
            isError: false,
            label: 'Entidad Socio (PK legajo)',
            okMsg: 'Correcto: Socio es una entidad fuerte con clave primaria legajo y atributos propios del socio.'
          },
          'ok-card': {
            isError: false,
            label: 'Relación realiza (1 : N)',
            okMsg: 'Correcto: un Socio puede realizar N Préstamos a lo largo del tiempo, y cada Préstamo pertenece a 1 Socio.'
          },
          'ok-libro': {
            isError: false,
            label: 'Entidad Libro (PK isbn)',
            okMsg: 'Correcto: Libro se identifica con isbn y mantiene atributos propios del ejemplar/obra como titulo.'
          },
          'err-fk': {
            isError: true,
            label: 'id_prestamo (FK) dentro de Socio',
            question: '¿Por qué está mal poner id_prestamo (FK) en la entidad Socio?',
            options: [
              'Porque en una relación 1:N la clave foránea va siempre en el lado N (Préstamo), ya que un socio tiene múltiples préstamos.',
              'Porque las claves foráneas nunca llevan prefijo id_.',
              'Porque Socio debería tener una relación N:N con ella misma.'
            ],
            correctIndex: 0,
            fixExplanation: 'Si Socio guardara id_prestamo, solo podría referenciar 1 préstamo. En 1:N la FK viaja al lado N (Préstamo guarda legajo_socio).'
          },
          'err-attr': {
            isError: true,
            label: 'fecha_devolucion en la entidad Libro',
            question: '¿Por qué fecha_devolucion está mal ubicada en Libro?',
            options: [
              'Porque las fechas no se modelan como atributos en un DER.',
              'Porque un mismo Libro se presta muchas veces: la fecha de devolución pertenece a cada Préstamo, no al Libro.',
              'Porque debería ir únicamente en la entidad Socio.'
            ],
            correctIndex: 1,
            fixExplanation: 'Cada atributo debe pertenecer a la entidad que lo describe: fecha_devolucion cambia en cada operación de Préstamo.'
          },
          'err-rel': {
            isError: true,
            label: 'Relación «notifica» hacia atributo email',
            question: '¿Cuál es el error conceptual de conectar «notifica» al atributo suelto "email"?',
            options: [
              'Porque «notifica» debería tener cardinalidad 1:1 obligatoria.',
              'Porque email debería llamarse correo_electronico.',
              'Porque en un DER las relaciones solo vinculan entidades entre sí, nunca conectan directamente con un atributo aislado.'
            ],
            correctIndex: 2,
            fixExplanation: 'Una relación relaciona entidades (por ejemplo Préstamo — Socio, o Notificación como entidad si amerita registro), jamás un atributo suelto.'
          }
        }
      }
    ],

    // =========================================================================
    // 3. SIMULADOR DE ENTREVISTA CON EL CLIENTE (3 casos x 8 frases = 24)
    // =========================================================================
    clientInterviews: [
      {
        id: 'int-ferreteria',
        title: 'Ferretería Don Carlos · Ventas y Stock',
        client: 'Carlos Gómez',
        role: 'Dueño de ferretería minorista',
        transcript:
          '“Mirá, necesito algo sencillo pero que no falle. Que los empleados puedan cargar ventas rápido desde el mostrador y que el sistema descuente automáticamente el stock vendido. También tiene que ser rapidísimo y que nunca se cuelgue cuando haya gente esperando. Mi cuñado me dijo que habría que ponerle un diseño azul bien moderno con animaciones. Ah, acordate de que si una compra supera $150.000 y se paga en efectivo se aplica 10% de descuento, y si el stock de un artículo baja de 5 unidades no se puede vender por web sin autorización del encargado. Además el sistema debe emitir comprobante fiscal según formato AFIP, y los reportes mensuales deberían generarse en menos de 3 segundos con hasta 50.000 ventas.”',
        phrases: [
          {
            id: 'f1',
            text: 'Que los empleados puedan cargar ventas desde el mostrador',
            category: 'rf',
            explanation: 'Es una acción/servicio concreto que el sistema debe proveer al usuario (Requerimiento Funcional).'
          },
          {
            id: 'f2',
            text: 'Que el sistema sea rapidísimo y nunca se cuelgue',
            category: 'ruido',
            explanation: 'Es vago y no medible (“rapidísimo”, “nunca”): requiere elicitación para transformarlo en métricas verificables de rendimiento y disponibilidad.'
          },
          {
            id: 'f3',
            text: 'Si una compra supera $150.000 y se paga en efectivo, se aplica 10% de descuento',
            category: 'rn',
            explanation: 'Define una política comercial y de cálculo propia de la empresa (Regla de Negocio).'
          },
          {
            id: 'f4',
            text: 'Que el sistema descuente automáticamente el stock vendido',
            category: 'rf',
            explanation: 'Describe un comportamiento operativo del sistema ante el evento de registrar una venta (Requerimiento Funcional).'
          },
          {
            id: 'f5',
            text: 'El sistema debe emitir comprobante fiscal según formato AFIP',
            category: 'rnf',
            explanation: 'Restricción normativa/legal externa que condiciona la salida del sistema (RNF Externo, aunque también dispare funciones de facturación).'
          },
          {
            id: 'f6',
            text: 'Mi cuñado dice que habría que ponerle un diseño azul bien moderno',
            category: 'ruido',
            explanation: 'Opinión estética informal de un tercero ajeno al problema operativo (Ruido / opinión de diseño).'
          },
          {
            id: 'f7',
            text: 'Los reportes mensuales deben generarse en menos de 3 segundos con hasta 50.000 ventas',
            category: 'rnf',
            explanation: 'Restricción medible de rendimiento/tiempo de respuesta del producto (Requerimiento No Funcional).'
          },
          {
            id: 'f8',
            text: 'Si el stock baja de 5 unidades, no se puede vender por web sin autorización del encargado',
            category: 'rn',
            explanation: 'Restricción operativa y de control establecida por la política del negocio (Regla de Negocio).'
          }
        ]
      },
      {
        id: 'int-clinica',
        title: 'Clínica Sonrisa · Gestión de Turnos',
        client: 'Dra. Laura Méndez',
        role: 'Directora de consultorio odontológico',
        transcript:
          '“Queremos dejar atrás el cuaderno de turnos. Los pacientes tendrían que poder reservar o cancelar turnos online. Eso sí, solo se puede cancelar sin cargo hasta 24 horas antes del horario asignado. Todo el sistema tiene que ser intuitivo como las apps de hoy en día, aunque con los datos clínicos necesitamos cifrado y acceso solo con rol autorizado por ley de protección de datos. Ah, otro tema: que envíe un recordatorio por WhatsApp o mail el día previo, y ojalá la computadora de recepción no haga ruido porque me pone nerviosa. Tampoco podemos asignar dos turnos simultáneos al mismo odontólogo ni responder las búsquedas de agenda en más de 1,5 segundos.”',
        phrases: [
          {
            id: 'c1',
            text: 'Los pacientes deben poder reservar o cancelar turnos online',
            category: 'rf',
            explanation: 'Servicio directo ofrecido por el sistema a los actores (Requerimiento Funcional).'
          },
          {
            id: 'c2',
            text: 'Solo se puede cancelar sin cargo hasta 24 horas antes del turno',
            category: 'rn',
            explanation: 'Política comercial de penalización/tiempo de la clínica (Regla de Negocio).'
          },
          {
            id: 'c3',
            text: 'Que sea intuitivo como las apps de hoy en día',
            category: 'ruido',
            explanation: 'Expresión subjetiva y ambigua: debe concretarse en criterios medibles de usabilidad.'
          },
          {
            id: 'c4',
            text: 'Los datos clínicos deben almacenarse cifrados según ley de protección de datos',
            category: 'rnf',
            explanation: 'Requisito no funcional de seguridad y cumplimiento legislativo externo (RNF).'
          },
          {
            id: 'c5',
            text: 'Enviar un recordatorio automático al paciente el día previo al turno',
            category: 'rf',
            explanation: 'Comportamiento/servicio funcional automatizado del sistema (RF).'
          },
          {
            id: 'c6',
            text: 'Que la computadora de recepción no haga ruido porque me pone nerviosa',
            category: 'ruido',
            explanation: 'Queja de hardware físico ajena al alcance del software (Ruido).'
          },
          {
            id: 'c7',
            text: 'No se pueden asignar dos turnos simultáneos al mismo odontólogo',
            category: 'rn',
            explanation: 'Invariante o restricción lógica del dominio de la clínica (Regla de Negocio).'
          },
          {
            id: 'c8',
            text: 'La búsqueda en agenda debe responder en menos de 1,5 segundos',
            category: 'rnf',
            explanation: 'Atributo de calidad de performance con umbral medible (RNF del producto).'
          }
        ]
      },
      {
        id: 'int-gimnasio',
        title: 'Gimnasio Fuerza Sur · Socios y Cuotas',
        client: 'Martín Pereyra',
        role: 'Coordinador del gimnasio',
        transcript:
          '“Necesitamos controlar quién entra al gimnasio. Cuando el socio llega, el sistema debe registrar su ingreso validando el estado de la cuota. Si la cuota tiene más de 10 días de atraso, se bloquea el acceso al molinete automáticamente. Queremos que la pantalla del recepcionista sea linda y moderna, y que el backend esté hecho en Java porque un amigo programa en Java. Para evitar colas a las 19 hs, el control de acceso debe validar en menos de 500 ms y estar disponible el 99,5% del horario de apertura. Además el socio tiene que poder descargar su rutina mensual en PDF, y si elige plan anual obtiene 2 meses bonificados.”',
        phrases: [
          {
            id: 'g1',
            text: 'El sistema debe registrar el ingreso del socio validando su estado de cuota',
            category: 'rf',
            explanation: 'Función principal del sistema frente a la llegada del socio (RF).'
          },
          {
            id: 'g2',
            text: 'Si la cuota supera los 10 días de atraso, se bloquea el acceso al molinete',
            category: 'rn',
            explanation: 'Política de morosidad y acceso definida por el gimnasio (Regla de Negocio).'
          },
          {
            id: 'g3',
            text: 'Que la pantalla sea linda y esté programada en Java por mi amigo',
            category: 'ruido',
            explanation: 'Combina vaguedad estética (“linda”) con imposición prematura del CÓMO sin análisis técnico (Ruido / mezcla de Solution Space).'
          },
          {
            id: 'g4',
            text: 'Validar el acceso en menos de 500 ms con disponibilidad del 99,5%',
            category: 'rnf',
            explanation: 'Restricciones medibles de rendimiento y fiabilidad/disponibilidad (RNF).'
          },
          {
            id: 'g5',
            text: 'El socio puede descargar su rutina mensual en formato PDF',
            category: 'rf',
            explanation: 'Funcionalidad concreta disponible para el actor Socio (RF).'
          },
          {
            id: 'g6',
            text: 'El plan anual otorga 2 meses bonificados respecto al pago mensual',
            category: 'rn',
            explanation: 'Regla comercial de facturación y beneficios del gimnasio (Regla de Negocio).'
          },
          {
            id: 'g7',
            text: 'A las 19 hs a veces se juntan charlando en la puerta (comentario suelto sin requisito)',
            category: 'ruido',
            explanation: 'Contexto anecdótico sin acción concreta definida para el sistema (Ruido / contexto a indagar).'
          },
          {
            id: 'g8',
            text: 'El sistema debe operar integrado con el estándar de lectura del molinete físico',
            category: 'rnf',
            explanation: 'Requisito no funcional externo de interoperabilidad / interfaz física (RNF).'
          }
        ]
      }
    ],

    // =========================================================================
    // 4. DUELOS X vs. Y (8 pares clásicos de examen x 4 escenarios = 32)
    // =========================================================================
    duels: [
      {
        id: 'verif-valid',
        unit: 3,
        title: 'Verificación vs. Validación',
        left: {
          name: 'Verificación',
          badge: '¿Construimos correctamente?',
          summary: 'Comprueba que el artefacto o requerimiento cumple formato, criterios de aceptación, completitud y ausencia de contradicciones internas.',
          keyQuestion: '¿Cumple con la especificación, el formato y no tiene inconsistencias?',
          trap: 'Pensar que un documento bien redactado y consistente automáticamente sirve al cliente.',
          example: 'Detectar que Req A y Req B se contradicen o que falta definir los casos de borde en Gherkin.'
        },
        right: {
          name: 'Validación',
          badge: '¿Construimos la cosa correcta?',
          summary: 'Confirma con los usuarios y el dominio que lo especificado o construido realmente resuelve la necesidad real del negocio.',
          keyQuestion: '¿Esto resuelve el problema verdadero del usuario?',
          trap: 'Aprobar requisitos sin mostrarlos al usuario o sin chequear omisiones del dominio.',
          example: 'Descubrir con el cliente que pidió una caja de texto para fechas cuando necesitaba un calendario con feriados.'
        },
        scenarios: [
          {
            id: 'vv-1',
            text: 'Un analista detecta que dos requisitos del SRS se contradicen: uno pide acceso anónimo y otro exige DNI en cada clic.',
            answer: 'left',
            why: 'Buscar consistencia interna, completitud y formato sin contradicciones es Verificación ("construir correctamente").'
          },
          {
            id: 'vv-2',
            text: 'Al mostrar el prototipo a la médica, advierte que falta emitir la receta electrónica que usa todos los días.',
            answer: 'right',
            why: 'Detectar que falta algo que el usuario realmente necesita es Validación ("construir la cosa correcta").'
          },
          {
            id: 'vv-3',
            text: 'Revisar con el checklist DoR que todas las historias tengan criterios Dado-Cuando-Entonces antes de programar.',
            answer: 'left',
            why: 'Verificar criterios formales de calidad y completitud documental corresponde a Verificación.'
          },
          {
            id: 'vv-4',
            text: 'Lanzar un MVP y comprobar en usuarios reales que resuelve el dolor que queríamos atacar.',
            answer: 'right',
            why: 'Contrastarlo contra la necesidad real del mercado y usuarios es Validación.'
          }
        ]
      },
      {
        id: 'agreg-comp',
        unit: 5,
        title: 'Agregación (◇) vs. Composición (◆)',
        left: {
          name: 'Agregación ◇',
          badge: 'Ciclo de vida independiente',
          summary: 'Relación TODO–PARTE débil (rombo vacío). Las partes pueden existir por separado y cambiar de contenedor sin desaparecer.',
          keyQuestion: 'Si elimino el TODO, ¿las partes siguen teniendo sentido y existencia propia?',
          trap: 'Usar composición cuando la parte ya existía antes o se comparte con otros objetos.',
          example: 'Equipo de fútbol ◇—— Jugador, o Carrera ◇—— Materia.'
        },
        right: {
          name: 'Composición ◆',
          badge: 'Propiedad exclusiva y vida acoplada',
          summary: 'Relación TODO–PARTE fuerte (rombo lleno). Cada parte pertenece a un único todo y nace/muere junto con él.',
          keyQuestion: 'Si borro el TODO, ¿sus partes dejan de existir con él?',
          trap: 'Poner el rombo relleno pegado a la parte en lugar de pegado al TODO.',
          example: 'Factura ◆—— RenglónFactura, o Edificio ◆—— Habitación.'
        },
        scenarios: [
          {
            id: 'ac-1',
            text: 'Relación entre Pedido y LíneaDeDetalle: si se anula/elimina el Pedido de raíz, esas líneas de detalle dejan de existir.',
            answer: 'right',
            why: 'Vida dependiente y propiedad exclusiva del contenedor: Composición (◆ del lado de Pedido).'
          },
          {
            id: 'ac-2',
            text: 'Relación entre ListaDeReproducción y Canción: si borrás una playlist, las canciones siguen existiendo en la biblioteca y en otras listas.',
            answer: 'left',
            why: 'Las partes tienen vida independiente y compartible: Agregación (◇ del lado de ListaDeReproducción).'
          },
          {
            id: 'ac-3',
            text: 'Relación entre Departamento Universitario y Profesor: si se cierra el departamento, los profesores siguen existiendo en la universidad.',
            answer: 'left',
            why: 'El Profesor no desaparece al eliminarse el Departamento: es Agregación (◇).'
          },
          {
            id: 'ac-4',
            text: 'Relación entre Polígono y VérticeDePolígono en un editor vectorial: cada vértice pertenece exclusivamente a ese polígono.',
            answer: 'right',
            why: 'Exclusividad total y ciclo de vida ligado al polígono: Composición (◆).'
          }
        ]
      },
      {
        id: 'inc-ext',
        unit: 5,
        title: '«include» vs. «extend»',
        left: {
          name: '«include»',
          badge: 'Subfunción obligatoria siempre',
          summary: 'El caso base delega siempre en un caso incluido reutilizable. La flecha apunta DESDE el caso base HACIA el incluido.',
          keyQuestion: '¿Este paso ocurre SIEMPRE que se ejecuta el caso base?',
          trap: 'Dibujar la flecha hacia el caso base en lugar de salir desde él.',
          example: '"Transferir Dinero" --«include»--> "Autenticar Usuario".'
        },
        right: {
          name: '«extend»',
          badge: 'Comportamiento opcional / condicional',
          summary: 'Un caso de uso extra añade comportamiento solo bajo una condición o punto de extensión. La flecha apunta DESDE la extensión HACIA el base.',
          keyQuestion: '¿Solo ocurre A VECES según una condición o decisión opcional?',
          trap: 'Dibujar la flecha saliendo del caso base (confundiendo la dirección con «include»).',
          example: '"Aplicar Cuotas Sin Interés" --«extend»--> "Pagar Compra".'
        },
        scenarios: [
          {
            id: 'ie-1',
            text: 'Toda vez que un cliente realiza un pago en línea, obligatoriamente se debe validar el saldo/tarjeta.',
            answer: 'left',
            why: 'Es obligatorio en todas las ejecuciones: Pagar --«include»--> Validar Tarjeta.'
          },
          {
            id: 'ie-2',
            text: 'Solo si el cliente lo desea durante el checkout, puede solicitar envío con envoltorio de regalo.',
            answer: 'right',
            why: 'Es un agregado opcional que extiende al caso base bajo condición: Envoltorio Regalo --«extend»--> Checkout.'
          },
          {
            id: 'ie-3',
            text: 'Cada caso de uso administrativo (alta, baja, modificación) necesita invariablemente verificar permisos de sesión.',
            answer: 'left',
            why: 'Comportamiento común y obligatorio extraído para reutilizarse: caso base --«include»--> Verificar Permisos.'
          },
          {
            id: 'ie-4',
            text: 'Si el saldo de la billetera es insuficiente al intentar comprar, opcionalmente se dispara el flujo de recarga rápida.',
            answer: 'right',
            why: 'Flujo condicional que ocurre solo ante una condición excepcional: Recarga Rápida --«extend»--> Comprar.'
          }
        ]
      },
      {
        id: 'acop-cohes',
        unit: 4,
        title: 'Acoplamiento vs. Cohesión',
        left: {
          name: 'Acoplamiento (Queremos BAJO)',
          badge: 'Dependencia ENTRE módulos',
          summary: 'Mide qué tanto depende una clase o módulo de los detalles internos de otros. Alto acoplamiento multiplica el costo de cambiar algo.',
          keyQuestion: 'Si modifico este módulo, ¿cuántos otros módulos se rompen?',
          trap: 'Creer que alto acoplamiento es bueno por "mantener todo conectado".',
          example: 'La vista HTML consulta directamente columnas SQL internas: altísimo acoplamiento.'
        },
        right: {
          name: 'Cohesión (Queremos ALTA)',
          badge: 'Foco interno DENTRO del módulo',
          summary: 'Mide qué tan relacionadas y enfocadas en una sola responsabilidad están las partes internas de un módulo o clase.',
          keyQuestion: 'Todo lo que hay dentro de esta clase, ¿sirve a un mismo propósito claro?',
          trap: 'Crear una clase "GestorTotal" que factura, imprime, valida usuarios y manda emails.',
          example: 'Una clase CalculadoraImpuestos dedicada solo a reglas tributarias tiene alta cohesión.'
        },
        scenarios: [
          {
            id: 'ak-1',
            text: 'Cambiar el proveedor de pagos obliga a modificar 14 archivos distintos porque todos invocaban sus campos internos.',
            answer: 'left',
            why: 'Describe dependencia excesiva entre módulos: un problema clásico de alto Acoplamiento.'
          },
          {
            id: 'ak-2',
            text: 'La clase Usuario tiene métodos para calcular intereses bancarios, generar códigos QR de envío y exportar planillas.',
            answer: 'right',
            why: 'Mezclar responsabilidades no relacionadas dentro de una misma clase es baja Cohesión.'
          },
          {
            id: 'ak-3',
            text: 'Definir interfaces claras para que dos servicios se comuniquen sin conocer su implementación interna.',
            answer: 'left',
            why: 'Aislar dependencias entre componentes apunta directamente a reducir el Acoplamiento.'
          },
          {
            id: 'ak-4',
            text: 'Dividir una clase gigante en módulos especializados donde cada uno resuelve una única responsabilidad bien definida.',
            answer: 'right',
            why: 'Enfocar cada unidad en una tarea coherente eleva la Cohesión interna.'
          }
        ]
      },
      {
        id: 'proto-mvp',
        unit: 4,
        title: 'Prototipo vs. MVP',
        left: {
          name: 'Prototipo',
          badge: 'Prueba desechable · Sin Market Fit',
          summary: 'Maqueta o código experimental hecho para explorar dudas, validar flujos o reducir incertidumbre. NO forma parte del producto final.',
          keyQuestion: '¿Lo construimos solo para aprender rápido y luego descartarlo?',
          trap: 'Entregar el prototipo desechable como si fuera el software definitivo.',
          example: 'Armar pantallas en Figma o un script rápido para probar si el usuario entiende el formulario.'
        },
        right: {
          name: 'MVP (Producto Mínimo Viable)',
          badge: 'Versión mínima real · Construir-Medir-Aprender',
          summary: 'Software funcional mínimo lanzado a usuarios reales para validar propuesta de valor, retención y Product-Market Fit.',
          keyQuestion: '¿Tiene código funcional mínimo usable en el mercado para medir comportamiento real?',
          trap: 'Llamar MVP a unos wireframes estáticos sin código ni usuarios reales.',
          example: 'Publicar solo la reserva online de canchas (sin ranking ni chat aún) y medir cuánta gente vuelve a reservar.'
        },
        scenarios: [
          {
            id: 'pm-1',
            text: 'La IA genera en 20 minutos una maqueta navegable con datos falsos para discutir pantallas en la reunión de mañana y luego tirarla.',
            answer: 'left',
            why: 'Es código de prueba rápido para validar supuestos de diseño antes de construir: un Prototipo.'
          },
          {
            id: 'pm-2',
            text: 'Se lanza la primera versión funcional con cobro real para validar si los clientes pagan y retienen semana a semana.',
            answer: 'right',
            why: 'Es código funcional real puesto en mercado para medir retención y Market Fit: un MVP.'
          },
          {
            id: 'pm-3',
            text: 'Un cliente pide "ya dejemos andando este boceto rápido en producción" — ¿qué riesgo del apunte aparece?',
            answer: 'left',
            why: 'El apunte advierte exactamente el riesgo de confundir un Prototipo experimental con el producto final.'
          },
          {
            id: 'pm-4',
            text: 'Forma parte del ciclo Construir–Medir–Aprender en Lean y evoluciona de forma iterativo-incremental hacia el producto completo.',
            answer: 'right',
            why: 'Corresponde textualmente a la definición de MVP en las Unidades 2 y 4.'
          }
        ]
      },
      {
        id: 'prob-sol',
        unit: 1,
        title: 'Espacio del Problema (QUÉ) vs. Solución (CÓMO)',
        left: {
          name: 'Espacio del Problema (QUÉ)',
          badge: 'Análisis · Discovery · Caja Negra',
          summary: 'Define dolores, necesidades del dominio, usuarios, objetivos y restricciones sin decidir tecnología, arquitectura ni pantallas.',
          keyQuestion: '¿Qué problema hay que resolver, para quién y por qué?',
          trap: 'Saltar a proponer bases de datos o botones antes de investigar el problema.',
          example: '"El comercio pierde ventas porque no sabe qué stock real tiene cada sucursal al momento de cobrar."'
        },
        right: {
          name: 'Espacio de la Solución (CÓMO)',
          badge: 'Diseño · Implementación · Delivery',
          summary: 'Define la arquitectura técnica, estructuras de datos, microservicios, frameworks y pantallas que materializan la respuesta.',
          keyQuestion: '¿Con qué arquitectura, tecnología y código lo implementamos?',
          trap: 'Poner detalles del CÓMO dentro del documento de requisitos rompiendo su mantenibilidad.',
          example: '"API REST en Node con caché Redis sincronizada por eventos hacia una base PostgreSQL."'
        },
        scenarios: [
          {
            id: 'ps-1',
            text: '"El paciente necesita reprogramar su turno sin llamar por teléfono en horario de consultorio."',
            answer: 'left',
            why: 'Describe la necesidad y objetivo del dominio sin imponer tecnología: Espacio del Problema (QUÉ).'
          },
          {
            id: 'ps-2',
            text: '"Usar tabla turnos en PostgreSQL consultada desde un endpoint GraphQL con token JWT."',
            answer: 'right',
            why: 'Define decisiones de arquitectura, protocolo y almacenamiento: Espacio de la Solución (CÓMO).'
          },
          {
            id: 'ps-3',
            text: 'Hacer entrevistas y mapas de empatía para descubrir la causa raíz multicausal antes de diseñar nada.',
            answer: 'left',
            why: 'El Discovery e investigación de necesidades ocurren en el Espacio del Problema.'
          },
          {
            id: 'ps-4',
            text: 'Si los requisitos cambian de aplicación Web a App Móvil y la documentación sigue intacta, ¿qué mantuviste aislado?',
            answer: 'left',
            why: 'Aislar el Espacio del Problema (Caja Negra) vuelve los requisitos independientes de la plataforma.'
          }
        ]
      },
      {
        id: 'rf-rnf',
        unit: 3,
        title: 'Req. Funcional (RF) vs. Req. No Funcional (RNF)',
        left: {
          name: 'Requerimiento Funcional (RF)',
          badge: 'Servicios y funciones del sistema',
          summary: 'Qué debe hacer (o no hacer) el sistema frente a entradas y situaciones: registrar, calcular, emitir, cancelar, notificar.',
          keyQuestion: '¿Qué acción o servicio concreto ejecuta el sistema para un actor?',
          trap: 'Describir una regla de calidad o velocidad como si fuera un botón o función.',
          example: '"El sistema debe permitir anular una factura emitida generando una nota de crédito."'
        },
        right: {
          name: 'Requerimiento No Funcional (RNF)',
          badge: 'Atributos de calidad y restricciones',
          summary: 'Cómo debe comportarse globalmente el sistema: tiempos de respuesta, disponibilidad, seguridad, usabilidad, normativas o estándares (FURPS+ / Drivers).',
          keyQuestion: '¿Qué cualidad o restricción global condiciona todo el sistema o su arquitectura?',
          trap: 'Subestimarlos frente a los RF: su incumplimiento suele volver inutilizable todo el sistema.',
          example: '"El procesamiento de autorización de tarjeta debe responder en menos de 2 segundos el 99% de las veces."'
        },
        scenarios: [
          {
            id: 'rr-1',
            text: 'El sistema debe calcular automáticamente los intereses punitorios cuando vence una cuota.',
            answer: 'left',
            why: 'Es una función operativa concreta del negocio: Requerimiento Funcional (RF).'
          },
          {
            id: 'rr-2',
            text: 'Todas las comunicaciones de pago deben viajar cifradas con TLS 1.3 y cumplir PCI-DSS.',
            answer: 'right',
            why: 'Es una restricción de seguridad y estándar externo aplicable globalmente: RNF.'
          },
          {
            id: 'rr-3',
            text: 'La plataforma debe soportar 5.000 usuarios concurrentes sin degradar la latencia por encima de 800 ms.',
            answer: 'right',
            why: 'Atributo de calidad de performance/escalabilidad (Driver de arquitectura): RNF.'
          },
          {
            id: 'rr-4',
            text: 'El bibliotecario puede registrar la devolución de un libro escaneando el código de barras.',
            answer: 'left',
            why: 'Describe un servicio interactivo específico para un actor: Requerimiento Funcional (RF).'
          }
        ]
      },
      {
        id: 'sdd-vibe',
        unit: 6,
        title: 'SPEC (SDD) vs. Prompt / Vibe-Coding',
        left: {
          name: 'SPEC Estructurada (SDD)',
          badge: 'Fuente de verdad viva · Trazable',
          summary: 'Especificación estructurada, verificable y evolutiva (EARS, Gherkin, IDs, casos de borde, DoR) revisada por humanos antes de que la IA genere código.',
          keyQuestion: '¿Cualquier persona o agente sin contexto previo puede construir exactamente lo esperado?',
          trap: 'Sobre-especificar implementando código dentro de la SPEC.',
          example: 'SPEC en Markdown con IDs únicos, fuera de alcance explícito y criterios Dado-Cuando-Entonces aprobados en Human Gate.'
        },
        right: {
          name: 'Prompt efímero / Vibe-Coding',
          badge: 'Improvisado · No determinista',
          summary: 'Pedir código al vuelo por chat sin documento persistente, sin criterios de borde ni trazabilidad; ante IA no determinista multiplica defectos.',
          keyQuestion: '¿Lo que pediste muere en esta ventana de chat sin respaldo verificable?',
          trap: 'Creer que porque la IA compila rápido no hace falta analizar el QUÉ.',
          example: '“Che IA haceme un login rápido que ande bien”, y ante cada error parchar otro prompt encima.'
        },
        scenarios: [
          {
            id: 'sv-1',
            text: 'Escribir un pedido informal por chat, aceptar el código sin revisar casos de borde y repetir prompts cada vez que algo falla.',
            answer: 'right',
            why: 'Es el patrón típico de Vibe-Coding con prompts efímeros y sin trazabilidad.'
          },
          {
            id: 'sv-2',
            text: 'Definir el QUÉ con sintaxis EARS, aclarar qué queda fuera de alcance y exigir aprobación humana (Human-in-the-loop) con checklist DoR.',
            answer: 'left',
            why: 'Aplica Spec-Driven Development y el Smart Kid Principle antes de generar código.'
          },
          {
            id: 'sv-3',
            text: 'Modificar el requerimiento en el archivo Markdown fuente de verdad y regenerar los módulos afectados desde allí (Spec-as-Source).',
            answer: 'left',
            why: 'La SPEC gobierna la evolución del sistema como fuente única de verdad en SDD.'
          },
          {
            id: 'sv-4',
            text: 'Un documento que ya describe tablas SQL exactas y clases internas en lugar de describir el QUÉ verificable.',
            answer: 'right',
            why: 'A diferencia de una SPEC SDD pura del QUÉ, un Documento de Diseño del CÓMO o un prompt improvisado no resuelve la especificación trazable.'
          }
        ]
      }
    ],

    // =========================================================================
    // 5. MINI CASOS DE ESTUDIO CON CHECKLIST Y SOLUCIÓN DE REFERENCIA (4)
    // =========================================================================
    caseStudies: [
      {
        id: 'case-vet',
        title: 'Sistema de Gestión para una Veterinaria (“Patitas Felices”)',
        difficulty: 'Nivel Parcial · Clásico AOO',
        units: 'U3 + U5',
        statement:
          'Una clínica veterinaria necesita informatizar la atención de mascotas. Cada dueño puede registrar una o más mascotas con su especie y peso. Al pedir un turno, se elige un veterinario y horario; si el turno se cancela con menos de 12 horas de anticipación, se registra una penalización en la ficha del dueño. Durante la consulta, el veterinario registra el diagnóstico, vacunas aplicadas (con fecha de próximo refuerzo) y emite la orden de cobro. En caja se paga en efectivo o con tarjeta mediante una pasarela externa, generando el comprobante. Además, por normativa sanitaria, la historia clínica no puede eliminarse y las búsquedas de ficha deben responder en menos de 2 segundos.',
        paperTasks: [
          'Identificar todos los actores (primarios y secundarios externos).',
          'Listar al menos 5 Casos de Uso principales y señalar dónde habría «include» / «extend».',
          'Esbozar las clases conceptuales clave del Modelo de Dominio y sus cardinalidades.',
          'Separar al menos 2 Reglas de Negocio y 2 Requerimientos No Funcionales.'
        ],
        checklist: [
          { id: 'vet-c1', text: '¿Identificaste al menos 3 actores (ej. Dueño/Recepcionista, Veterinario, Cajero y Pasarela de Pagos como secundario)?' },
          { id: 'vet-c2', text: '¿Diferenciaste Dueño y Mascota en entidades separadas (relación 1 a muchos)?' },
          { id: 'vet-c3', text: '¿Separaste la lógica de Cobro/Pago de la Consulta clínica (y conectaste la Pasarela externa)?' },
          { id: 'vet-c4', text: '¿Mantuviste los Casos de Uso en Caja Negra (sin mencionar tablas SQL ni pantallas)?' },
          { id: 'vet-c5', text: '¿Incluiste una entidad/concepto de HistoriaClínica o Consulta ligada a la Mascota y al Veterinario?' },
          { id: 'vet-c6', text: '¿Detectaste la Regla de Negocio de penalización al cancelar con < 12 hs de anticipación?' },
          { id: 'vet-c7', text: '¿Identificaste los RNF: prohibición de borrado (normativa sanitaria) y tiempo < 2 segundos?' },
          { id: 'vet-c8', text: '¿Modelaste la vacuna aplicada con su fecha de próximo refuerzo como entidad o registro propio?' }
        ],
        solution: {
          actors: [
            'Recepcionista / Dueño (primario): registra dueños, mascotas y gestiona turnos.',
            'Veterinario (primario): atiende la consulta, registra diagnóstico y vacunas.',
            'Cajero (primario): cobra la orden emitida y entrega comprobante.',
            'Pasarela de Pagos (secundario externo): autoriza pagos con tarjeta.'
          ],
          useCases: [
            'Registrar Dueño y Mascota',
            'Reservar Turno / Cancelar Turno (extensión condicional: Aplicar Penalización si < 12 hs)',
            'Registrar Atención Clínica (incluye consultar historia clínica)',
            'Registrar Vacunación y Próximo Refuerzo',
            'Cobrar Atención (incluye Validar Pago con Pasarela de Pagos cuando es tarjeta)'
          ],
          domainModel: [
            'Dueño (1) —— realiza —— (0..*) Turno',
            'Dueño (1) —— posee —— (1..*) Mascota',
            'Mascota (1) —— tiene —— (0..*) ConsultaClinica —— atendidaPor —— (1) Veterinario',
            'ConsultaClinica (1) ◆—— (0..*) VacunaAplicada',
            'ConsultaClinica (1) —— genera —— (0..1) OrdenCobro —— pagadaCon —— (1) Pago'
          ],
          rnfAndRules: [
            'Regla de Negocio 1: cancelación con < 12 hs genera penalización en la ficha del dueño.',
            'Regla de Negocio 2: cada vacuna aplicada registra fecha de refuerzo futuro.',
            'RNF Normativo/Seguridad: inmutabilidad de historia clínica (no se permite eliminación física).',
            'RNF Performance: búsqueda de historia clínica en menos de 2 segundos.'
          ],
          commonMistakes: [
            'Poner atributos de Mascota dentro de Dueño (impide que un dueño tenga varias mascotas).',
            'Poner la Pasarela de Pagos como actor primario o olvidarse de ella como sistema externo.',
            'Crear un Caso de Uso "Hacer SELECT de historia clínica" rompiendo Caja Negra.'
          ]
        }
      },
      {
        id: 'case-canchas',
        title: 'Plataforma de Reservas de Canchas Deportivas (“GolYa”)',
        difficulty: 'Nivel Intermedio · Reservas y Slicing',
        units: 'U3 + U5',
        statement:
          'Un complejo deportivo con canchas de fútbol 5 y pádel quiere una plataforma web para reservar turnos. Los jugadores buscan disponibilidad por fecha/deporte y reservan abonando una seña del 30% a través de Mercado Pago. El encargado del complejo puede bloquear canchas por mantenimiento o lluvia; cuando una cancha pasa a mantenimiento, todas las reservas activas de esa franja pasan a estado pendiente de reprogramación o devolución de seña. No puede haber dos reservas confirmadas en la misma cancha, fecha y hora. El sistema debe soportar 500 usuarios simultáneos en días de torneo y emitir recordatorios automáticos 4 horas antes del partido.',
        paperTasks: [
          'Definir actores primarios y secundarios (incluyendo sistemas externos o temporales).',
          'Redactar los Casos de Uso clave con al menos un flujo alternativo (lluvia / mantenimiento).',
          'Dibujar el Modelo de Dominio distinguiendo Cancha, Reserva, FranjaHoraria y Seña/Pago.',
          'Proponer un primer Slice mínimo (UP / MVP) para salir primero con mayor valor.'
        ],
        checklist: [
          { id: 'can-c1', text: '¿Identificaste al Jugador, al Encargado y a Mercado Pago (secundario externo)?' },
          { id: 'can-c2', text: '¿Separaste Cancha (fútbol 5 / pádel) de Reserva (fecha, hora, estado)?' },
          { id: 'can-c3', text: '¿Definiste el estado de Reserva (ej. PendienteSeña, Confirmada, Cancelada, Reprogramar)?' },
          { id: 'can-c4', text: '¿Incluiste la Regla de Negocio de seña mínima del 30%?' },
          { id: 'can-c5', text: '¿Contemplaste la invariante de unicidad (sin solapamiento de cancha + fecha + horario)?' },
          { id: 'can-c6', text: '¿Modelaste el caso de uso "Bloquear Cancha" y su impacto sobre reservas existentes?' },
          { id: 'can-c7', text: '¿Incluiste el RNF de concurrencia/rendimiento (500 usuarios en torneo)?' },
          { id: 'can-c8', text: '¿Pensaste cómo particionar por Slicing (ej. primero búsqueda + reserva con seña antes que mantenimiento masivo)?' }
        ],
        solution: {
          actors: [
            'Jugador (primario): busca disponibilidad, reserva y paga la seña.',
            'Encargado del Complejo (primario): gestiona canchas y bloqueos por mantenimiento/lluvia.',
            'Mercado Pago (secundario externo): procesa la seña del 30% o devolución.',
            'Servicio de Mensajería / Reloj (secundario/disparador): envía recordatorio 4 hs antes.'
          ],
          useCases: [
            'Consultar Disponibilidad de Canchas',
            'Reservar Cancha (incluye Procesar Seña del 30% con Mercado Pago)',
            'Bloquear Cancha por Mantenimiento/Lluvia (dispara reprogramación o devolución en reservas afectadas)',
            'Enviar Recordatorio de Turno (automático 4 hs antes)'
          ],
          domainModel: [
            'Jugador (1) —— solicita —— (0..*) Reserva —— correspondeA —— (1) Cancha',
            'Cancha (1) —— tiene —— (0..*) BloqueoMantenimiento',
            'Reserva (1) —— respaldadaPor —— (0..1) PagoSeña'
          ],
          rnfAndRules: [
            'Regla de Negocio: seña obligatoria del 30% para confirmar reserva.',
            'Regla de Negocio: imposibilidad de doble reserva confirmada en misma cancha y horario.',
            'RNF Escalabilidad/Concurrencia: soportar 500 usuarios concurrentes durante torneos.'
          ],
          commonMistakes: [
            'Unir los atributos de Pago dentro de Cancha.',
            'Olvidar el flujo alternativo cuando falla el pago en Mercado Pago o llueve sobre reservas ya pagadas.',
            'No incluir la restricción de solapamiento horario.'
          ]
        }
      },
      {
        id: 'case-biblio',
        title: 'Sistema de Préstamos para Biblioteca Universitaria',
        difficulty: 'Nivel Examen · Ejemplar vs Obra',
        units: 'U4 + U5',
        statement:
          'Una biblioteca universitaria gestiona préstamos de libros a alumnos y docentes. De cada libro interesa su título y autores, pero la biblioteca puede tener 5 ejemplares físicos distintos del mismo título, cada uno con su propio código interno y estado (disponible, prestado, reparándose). Los alumnos pueden llevar hasta 3 libros simultáneos por 7 días; los docentes hasta 5 por 15 días. Si el socio devuelve con atraso, queda suspendido la misma cantidad de días de demora y no puede pedir nuevos préstamos mientras dure la suspensión. La disponibilidad en el catálogo web debe actualizarse inmediatamente tras cada movimiento.',
        paperTasks: [
          'Distinguir en el Modelo de Dominio entre el concepto Obra/Título y Ejemplar físico.',
          'Definir Socio y sus políticas diferenciadas (Alumno vs. Docente o Categoría).',
          'Escribir las Precondiciones y Postcondiciones del Caso de Uso "Registrar Préstamo".',
          'Listar Reglas de Negocio clave y posibles extensiones al préstamo.'
        ],
        checklist: [
          { id: 'bib-c1', text: '¿Separaste Libro/Obra (ISBN, título, autor) de Ejemplar (códigoInventario, estado físico)?' },
          { id: 'bib-c2', text: '¿Asociaste el Préstamo al Ejemplar físico concreto y NO directamente a la Obra?' },
          { id: 'bib-c3', text: '¿Diferenciaste límites de cantidad y días según tipo de Socio (Alumno 3/7d vs. Docente 5/15d)?' },
          { id: 'bib-c4', text: '¿Definiste Precondición válida para "Registrar Préstamo" (ej. bibliotecario autenticado)?' },
          { id: 'bib-c5', text: '¿Definiste flujo alternativo/extensión para socio suspendido o cupo máximo alcanzado?' },
          { id: 'bib-c6', text: '¿Calculaste la suspensión proporcional a los días de atraso en la devolución?' },
          { id: 'bib-c7', text: '¿Identificaste el RNF de actualización inmediata de disponibilidad?' },
          { id: 'bib-c8', text: '¿Evitaste poner clases de base de datos o tablas intermedias tipo PrestamoEjemplarDTO?' }
        ],
        solution: {
          actors: [
            'Bibliotecario (primario): registra préstamos, devoluciones y estado de ejemplares.',
            'Socio (Alumno / Docente) (primario en consultas web): busca catálogo y verifica sus préstamos.'
          ],
          useCases: [
            'Buscar Obra y Disponibilidad de Ejemplares',
            'Registrar Préstamo (extensiones: Socio Suspendido, Cupo Superado, Ejemplar No Disponible)',
            'Registrar Devolución (extensión: Calcular Días de Suspensión por Atraso)',
            'Gestionar Baja/Reparación de Ejemplar'
          ],
          domainModel: [
            'Obra/Libro (1) —— tiene —— (1..*) Ejemplar (códigoBarra, estado)',
            'Socio (subtipos o PerfilSocio: Alumno/Docente) (1) —— realiza —— (0..*) Préstamo',
            'Préstamo (1..*) —— refiereA —— (1) Ejemplar (fechaRetiro, fechaVencimiento, fechaDevolucion)'
          ],
          rnfAndRules: [
            'RN1: Alumnos máx. 3 préstamos x 7 días; Docentes máx. 5 x 15 días.',
            'RN2: Devolución tardía suspende al socio N días igual al atraso, bloqueando nuevos préstamos.',
            'RNF Consistencia/Tiempo real: cambio de estado reflejado al instante en catálogo.'
          ],
          commonMistakes: [
            'Confundir Libro (Obra) con Ejemplar físico: hace imposible saber qué copia física salió prestada o cuál está rota.',
            'Poner la fecha de devolución dentro de Libro en lugar de Préstamo.',
            'Probar precondiciones dentro del escenario principal en vez de asumirlas como condición previa.'
          ]
        }
      },
      {
        id: 'case-comedor',
        title: 'App de Pedidos para Comedor Universitario (+ Criterios SDD)',
        difficulty: 'Nivel Integrador · U3 + U5 + U6',
        units: 'U3 + U5 + U6',
        statement:
          'El comedor universitario quiere lanzar una app móvil para que estudiantes encarguen su vianda del día y la retiren sin hacer fila. Cada día cocina publica un menú limitado con cupo por plato. Un estudiante becado tiene 1 menú subvencionado diario gratis; los no becados pagan online con billetera virtual antes de confirmar el pedido. Si se agota el cupo de un plato, el sistema debe impedir confirmarlo aunque estuviera en el carrito. El equipo quiere usar agentes de IA para acelerar la construcción, pero exige criterios claros y verificables para no romper el cálculo de cupos ni becas.',
        paperTasks: [
          'Identificar actores, Casos de Uso y la Historia de Usuario principal (formato INVEST).',
          'Redactar 1 criterio de aceptación en Gherkin (Dado–Cuando–Entonces) incluyendo un caso de borde.',
          'Definir qué debería incluir la SPEC SDD (Smart Kid + DoR) y qué dejar FUERA DE ALCANCE.',
          'Separar RF, RNF y Reglas de Negocio clave.'
        ],
        checklist: [
          { id: 'com-c1', text: '¿Identificaste Estudiante, Encargado de Cocina y Billetera Virtual (externo)?' },
          { id: 'com-c2', text: '¿Modelaste MenúDiario / PlatoConCupo como concepto central para controlar el stock diario?' },
          { id: 'com-c3', text: '¿Contemplaste la Regla de Negocio de 1 menú diario subvencionado para estudiante becado?' },
          { id: 'com-c4', text: '¿Incluiste el caso de borde cuando el cupo llega a cero mientras otro estudiante lo tenía en el carrito?' },
          { id: 'com-c5', text: '¿Escribiste la Historia de Usuario con <Rol>, <Acción>, <Valor> y criterio INVEST?' },
          { id: 'com-c6', text: '¿Redactaste al menos un escenario Gherkin (Dado–Cuando–Entonces) verificable?' },
          { id: 'com-c7', text: '¿Aplicaste SDD separando el QUÉ en la SPEC y aclarando qué queda fuera de alcance (ej. sin envío a domicilio)?' },
          { id: 'com-c8', text: '¿Evitaste vibe-coding garantizando compuerta humana (DoR) antes de generar código con IA?' }
        ],
        solution: {
          actors: [
            'Estudiante (primario: consulta menú, encarga vianda y retira).',
            'Encargado de Cocina (primario: publica menú del día, define cupos y marca entregado).',
            'Billetera Virtual / Pasarela (secundario externo: procesa pagos de no becados).'
          ],
          useCases: [
            'Publicar Menú del Día y Cupos',
            'Encargar Vianda (extensiones: Aplicar Beca Diaria si corresponde / Pagar Online / Rechazar por Cupo Agotado)',
            'Validar y Entregar Vianda en Mostrador'
          ],
          domainModel: [
            'MenuDiario (1) ◆—— (1..*) ItemMenu (cupoDisponible)',
            'Estudiante (becado: Boolean) (1) —— realiza —— (0..*) PedidoVianda',
            'PedidoVianda (1) —— correspondeA —— (1) ItemMenu + (0..1) Pago'
          ],
          rnfAndRules: [
            'Historia INVEST: "Como estudiante, quiero reservar mi vianda antes del mediodía para retirarla sin hacer fila."',
            'Gherkin caso borde: DADO un plato con cupo 0 en el instante de confirmar CUANDO el estudiante confirma el pedido ENTONCES el sistema rechaza la confirmación sin cobrar y ofrece otro plato disponible.',
            'SPEC SDD: define IDs únicos por work item, sintaxis EARS para control atómico de cupo, y "Fuera de alcance: delivery o múltiples sedes" (Smart Kid + DoR).'
          ],
          commonMistakes: [
            'Descontar el cupo al agregar al carrito sin validar atómicamente al confirmar.',
            'Permitir que un estudiante becado pida 2 o 3 menús gratuitos el mismo día.',
            'Pedirle el módulo directo a la IA por chat sin SPEC verificable (vibe-coding).'
          ]
        }
      }
    ]
  };
})(window);
