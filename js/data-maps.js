(function (global) {
  'use strict';

  global.ADS_MAPS = [
    // =========================================================================
    // 1. INTEGRADORA: MAPA MAESTRO U1 -> U6
    // =========================================================================
    {
      id: 'integ-hilos',
      unit: 'integradora',
      title: 'Mapa Maestro U1 → U6 e Hilos Conductores',
      subtitle: 'Cómo se conectan las seis unidades desde la Teoría General de Sistemas hasta el Spec-Driven Development con IA.',
      kind: 'Mapa conceptual',
      defaultNode: 'hilos',
      takeaways: [
        'Toda la materia separa primero el QUÉ (Espacio del Problema) del CÓMO (Espacio de la Solución).',
        'Desde U1 hasta U6, la información estructurada, la V&V temprana y las especificaciones reducen la entropía y el costo exponencial del error.',
        'La retroalimentación continua (TGS -> Lean -> UP -> SDD) permite adaptar el sistema frente a necesidades cambiantes.'
      ],
      svg: `<svg viewBox="0 0 920 520" role="img" aria-label="Mapa maestro de integración entre Unidades 1 a 6">
        <defs>
          <marker id="arr-ih" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
          </marker>
          <marker id="arr-ih-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--ink-secondary)"></path>
          </marker>
        </defs>

        <!-- Fondo de zonas Problem vs Solution -->
        <rect x="20" y="18" width="880" height="295" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="6 4"></rect>
        <text x="38" y="42" font-size="11.5" font-weight="700" fill="var(--ink-secondary)" letter-spacing="0.06em">RECORRIDO PROGRESIVO DE LA MATERIA (U1 → U6)</text>

        <!-- Fila 1: U1 -> U2 -> U3 -->
        <g class="svg-node" data-node="u1" tabindex="0" role="button">
          <rect x="44" y="64" width="246" height="96" rx="12" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"></rect>
          <text x="58" y="87" font-size="11.5" font-weight="700" fill="var(--primary)">UNIDAD 1 · FUNDAMENTOS</text>
          <text x="58" y="109" font-size="14" font-weight="700" fill="var(--ink)">Sistemas, TGS y Espacios</text>
          <text x="58" y="129" font-size="11.5" fill="var(--ink-secondary)">Entropía vs. Info · Enfoque sistémico</text>
          <text x="58" y="146" font-size="11.5" fill="var(--ink-secondary)">Problem (QUÉ) vs. Solution (CÓMO)</text>
        </g>

        <line x1="294" y1="112" x2="331" y2="112" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#arr-ih)"></line>

        <g class="svg-node" data-node="u2" tabindex="0" role="button">
          <rect x="337" y="64" width="246" height="96" rx="12" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"></rect>
          <text x="351" y="87" font-size="11.5" font-weight="700" fill="var(--teal)">UNIDAD 2 · PROCESO Y GESTIÓN</text>
          <text x="351" y="109" font-size="14" font-weight="700" fill="var(--ink)">Desarrollo de SI y Ciclos</text>
          <text x="351" y="129" font-size="11.5" fill="var(--ink-secondary)">3P+A · The Box · Lean · DT</text>
          <text x="351" y="146" font-size="11.5" fill="var(--ink-secondary)">Doble Diamante · CMMI · Calidad</text>
        </g>

        <line x1="587" y1="112" x2="624" y2="112" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#arr-ih)"></line>

        <g class="svg-node" data-node="u3" tabindex="0" role="button">
          <rect x="630" y="64" width="246" height="96" rx="12" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="2"></rect>
          <text x="644" y="87" font-size="11.5" font-weight="700" fill="var(--violet)">UNIDAD 3 · DESCUBRIMIENTO</text>
          <text x="644" y="109" font-size="14" font-weight="700" fill="var(--ink)">Ing. de Requerimientos</text>
          <text x="644" y="129" font-size="11.5" fill="var(--ink-secondary)">Elicitación · RF/RNF · Drivers · V&amp;V</text>
          <text x="644" y="146" font-size="11.5" fill="var(--ink-secondary)">Costo del error · Priorización · SRS</text>
        </g>

        <!-- Conector descendente U3 -> U4 -->
        <path d="M 753 164 L 753 182 L 167 182 L 167 196" fill="none" stroke="var(--ink-secondary)" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#arr-ih-muted)"></path>

        <!-- Fila 2: U4 -> U5 -> U6 -->
        <g class="svg-node" data-node="u4" tabindex="0" role="button">
          <rect x="44" y="202" width="246" height="96" rx="12" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="2"></rect>
          <text x="58" y="225" font-size="11.5" font-weight="700" fill="var(--warning)">UNIDAD 4 · ABSTRACCIÓN</text>
          <text x="58" y="247" font-size="14" font-weight="700" fill="var(--ink)">Modelado, Prototipo y MVP</text>
          <text x="58" y="267" font-size="11.5" fill="var(--ink-secondary)">Modelar ≠ Diagramar · Viewpoints</text>
          <text x="58" y="284" font-size="11.5" fill="var(--ink-secondary)">Prototipo vs. MVP (Market Fit)</text>
        </g>

        <line x1="294" y1="250" x2="331" y2="250" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#arr-ih)"></line>

        <g class="svg-node" data-node="u5" tabindex="0" role="button">
          <rect x="337" y="202" width="246" height="96" rx="12" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect>
          <text x="351" y="225" font-size="11.5" font-weight="700" fill="var(--success)">UNIDAD 5 · MÉTODO ITERATIVO</text>
          <text x="351" y="247" font-size="14" font-weight="700" fill="var(--ink)">AOO, UP y Casos de Uso</text>
          <text x="351" y="267" font-size="11.5" fill="var(--ink-secondary)">UP: 4 fases, Slicing y Riesgo</text>
          <text x="351" y="284" font-size="11.5" fill="var(--ink-secondary)">FURPS+ · CU · DSS · Dominio</text>
        </g>

        <line x1="587" y1="250" x2="624" y2="250" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#arr-ih)"></line>

        <g class="svg-node" data-node="u6" tabindex="0" role="button">
          <rect x="630" y="202" width="246" height="96" rx="12" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="2"></rect>
          <text x="644" y="225" font-size="11.5" font-weight="700" fill="var(--danger)">UNIDAD 6 · ERA IA</text>
          <text x="644" y="247" font-size="14" font-weight="700" fill="var(--ink)">Spec-Driven Development</text>
          <text x="644" y="267" font-size="11.5" fill="var(--ink-secondary)">SPEC Fuente Verdad vs. Vibe-coding</text>
          <text x="644" y="284" font-size="11.5" fill="var(--ink-secondary)">Human Gate · DoR · Smart Kid</text>
        </g>

        <!-- Barra transversal inferior: 4 Hilos Conductores -->
        <g class="svg-node" data-node="hilos" tabindex="0" role="button">
          <rect x="20" y="334" width="880" height="168" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
          <text x="42" y="362" font-size="13" font-weight="700" fill="var(--primary)">4 HILOS CONDUCTORES TRANSVERSALES (Hacé clic en cualquier bloque para inspeccionar)</text>

          <rect x="42" y="380" width="198" height="104" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="54" y="404" font-size="12.5" font-weight="700" fill="var(--ink)">1. Separar QUÉ / CÓMO</text>
          <text x="54" y="426" font-size="11" fill="var(--ink-secondary)">U1 Espacios → U2 Análisis</text>
          <text x="54" y="443" font-size="11" fill="var(--ink-secondary)">→ U5 Caja Negra (CU/DSS)</text>
          <text x="54" y="460" font-size="11" fill="var(--ink-secondary)">→ U6 SPEC sin diseño</text>

          <rect x="255" y="380" width="198" height="104" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="267" y="404" font-size="12.5" font-weight="700" fill="var(--ink)">2. Reducir Entropía</text>
          <text x="267" y="426" font-size="11" fill="var(--ink-secondary)">U1 Info estructurada → U3</text>
          <text x="267" y="443" font-size="11" fill="var(--ink-secondary)">Elicitación/SRS → U4 Modelos</text>
          <text x="267" y="460" font-size="11" fill="var(--ink-secondary)">→ U6 EARS y Gherkin</text>

          <rect x="468" y="380" width="198" height="104" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="480" y="404" font-size="12.5" font-weight="700" fill="var(--ink)">3. Error Temprano</text>
          <text x="480" y="426" font-size="11" fill="var(--ink-secondary)">U2 IA/Prototipo → U3 Curva</text>
          <text x="480" y="443" font-size="11" fill="var(--ink-secondary)">costo + V&amp;V → U5 Riesgo</text>
          <text x="480" y="460" font-size="11" fill="var(--ink-secondary)">→ U6 DoR y Human Gate</text>

          <rect x="681" y="380" width="198" height="104" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="693" y="404" font-size="12.5" font-weight="700" fill="var(--ink)">4. Retroalimentación</text>
          <text x="693" y="426" font-size="11" fill="var(--ink-secondary)">U1 TGS Feedback → U2 Lean</text>
          <text x="693" y="443" font-size="11" fill="var(--ink-secondary)">→ U4 MVP Market Fit → U5</text>
          <text x="693" y="460" font-size="11" fill="var(--ink-secondary)">UP Construir-Adaptar</text>
        </g>
      </svg>`,
      nodes: {
        hilos: {
          title: 'Los 4 Hilos Conductores de la Materia',
          badge: 'Síntesis U1–U6',
          summary: 'Aunque las 6 unidades recorren herramientas distintas, todas responden a cuatro principios invariantes de Análisis y Diseño de Sistemas.',
          bullets: [
            'Separar QUÉ de CÓMO: desde Problem Space (U1) hasta Casos de Uso caja negra (U5) y SPEC (U6) para evitar soluciones prematuras.',
            'Reducir la entropía: convertir datos aislados en conocimiento estructurado, modelos prescriptivos y especificaciones sin ambigüedad.',
            'Detectar errores temprano: reparar una demanda errónea en análisis cuesta una fracción mínima frente a operación o automatización con IA.',
            'Retroalimentación continua: todo sistema abierto se ajusta con el entorno (TGS, Lean, UP, Continuous Discovery).'
          ],
          examTip: 'En preguntas de final integradoras, conectá cualquier técnica (ej. Empathy Map, DSS o EARS) con cuál de estos 4 principios satisface.'
        },
        u1: {
          title: 'Unidad 1: Sistemas, TGS y Espacios',
          badge: 'Unidad 1',
          summary: 'Establece el marco conceptual: todo software opera como un sistema abierto dentro de suprasistemas organizacionales.',
          bullets: [
            'Entrada -> Conversión -> Salida + Retroalimentación y Homeostasis.',
            'La información estructurada (con significado, importancia, vigencia, validez y valor) reduce la entropía.',
            'Enfoque sistémico y análisis multicausal antes de diseñar soluciones.',
            'Product Discovery (Problem Space) busca el Product-Market Fit con el Product Delivery (Solution Space).'
          ],
          examTip: 'Nunca confundas datos aislados con información, ni metas soluciones técnicas dentro de la definición del problema.'
        },
        u2: {
          title: 'Unidad 2: Desarrollo de SI y Ciclos de Vida',
          badge: 'Unidad 2',
          summary: 'Ordena cómo se construyen sistemas bajo restricciones de tiempo, personas y riesgos usando el modelo 3P+A.',
          bullets: [
            'Arquitectura en 3P+A como diseño base que sostiene Proyecto, Proceso y Producto.',
            'The Box (etapa 3 agrega valor) vs. Cascada vs. Ciclo Lean de Producto (Discover/Validate liviano vs. Build).',
            'Design Thinking + Lean + Agile en la Agilidad Moderna y el Doble Diamante.',
            'CMMI PP (ML2: SG1 estimar, SG2 planificar, SG3 comprometer) y asimetría Calidad de Proceso vs. Producto.'
          ],
          examTip: 'Recordá la frase exacta: un proceso deficiente garantiza un producto deficiente, pero un buen proceso no garantiza por sí solo un buen producto.'
        },
        u3: {
          title: 'Unidad 3: Ingeniería de Requerimientos',
          badge: 'Unidad 3',
          summary: 'Sistematiza el relevamiento y especificación en el Universo de Discurso para asegurar que construimos el sistema correcto.',
          bullets: [
            'Cuatro actividades: Elicitar, Modelar, Analizar (V&V + negociación) y Gestionar (transversal).',
            'Técnicas de entrevista (abiertas/cerradas/bipolares/sondeos; Pirámide/Embudo/Rombo) y Empathy Map.',
            'RF vs. RNF (producto, organizacionales, externos) y Drivers de arquitectura.',
            'Propagación exponencial de errores (demandas erróneas, inconsistentes, omitidas) y priorización (MoSCoW, RICE, WSJF, Impacto/Esfuerzo).'
          ],
          examTip: 'Verificación = construir correctamente (formato/criterios). Validación = construir la cosa correcta (lo que necesita el usuario).'
        },
        u4: {
          title: 'Unidad 4: Modelado, Prototipos y MVP',
          badge: 'Unidad 4',
          summary: 'Explica cómo abstraer la realidad en modelos prescriptivos y validar supuestos con distintos niveles de código.',
          bullets: [
            'Modelar ≠ Diagramar: el modelo tiene objetivo definido, selecciona elementos clave y es prescriptivo.',
            'Vistas (viewpoints): cada stakeholder necesita una proyección específica.',
            'Prototipo = código de prueba desechable; Iteración UP = subconjunto acumulativo interno.',
            'MVP = código funcional lanzado al mercado (Construir-Medir-Aprender) hasta lograr retención y Market Fit.'
          ],
          examTip: 'Un MVP NO es un prototipo ni una maqueta sin código: es software funcional mínimo para medir comportamiento real.'
        },
        u5: {
          title: 'Unidad 5: Análisis Orientado a Objetos y UP',
          badge: 'Unidad 5',
          summary: 'Concreta el análisis mediante conceptos del dominio, casos de uso caja negra y el Proceso Unificado.',
          bullets: [
            'AOO: Concepto del dominio -> Abstracción/Modelado -> Clase (omitir un objeto encarece el proyecto).',
            'UP: iterativo e incremental, Slicing, dirigido por el riesgo y centrado en la arquitectura (4 fases).',
            'FURPS+ para clasificar requisitos funcionales y atributos de calidad.',
            'Casos de Uso (flujo principal + extensiones), DSS, Modelo de Dominio (frases nominales) e Historias de Usuario (INVEST).'
          ],
          examTip: 'En UP, Inicio suele tener una sola iteración de viabilidad; la arquitectura y alto riesgo se resuelven en Elaboración.'
        },
        u6: {
          title: 'Unidad 6: Spec-Driven Development (SDD)',
          badge: 'Unidad 6',
          summary: 'Traslada el rigor de la especificación al desarrollo asistido por agentes de IA no deterministas.',
          bullets: [
            'Ante IA no determinista, SDD reemplaza al vibe-coding con una SPEC estructurada, verificable y evolutiva.',
            'SPEC como fuente de verdad (superior a Prompt efímero, PRD estático o Doc de Diseño del cómo).',
            'Tres estrategias: Spec-First, Spec-Anchored y Spec-as-Source.',
            'Workflow de 3 fases con puertas Human-in-the-loop, DoR, Smart Kid Principle, EARS, casos de borde, Gherkin e IDs.'
          ],
          examTip: 'La clave de U6 es unir U1+U3 con IA: si definís mal el QUÉ en la SPEC, la automatización multiplica errores.'
        }
      }
    },

    // =========================================================================
    // 2. UNIDAD 1: TGS, SISTEMA Y PROPIEDADES CLAVE
    // =========================================================================
    {
      id: 'u1-tgs',
      unit: 1,
      title: 'Sistema, TGS y Propiedades Clave',
      subtitle: 'Anatomía de un sistema abierto, las 3 premisas, 4 principios de sistemas automatizados, propiedades emergentes y clasificación.',
      kind: 'Mapa conceptual',
      defaultNode: 'nucleo',
      takeaways: [
        'Las propiedades sistémicas (totalismo, homeostasis, equifinalidad) explican por qué no se puede analizar una parte aislada.',
        'La entropía mide desorden e incertidumbre; la información estructurada reduce la entropía.',
        'La especialización excesiva en sistemas automatizados reduce su capacidad de adaptación.'
      ],
      svg: `<svg viewBox="0 0 920 520" role="img" aria-label="Mapa conceptual de Teoría General de Sistemas y propiedades">
        <defs>
          <marker id="arr-u1t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
          </marker>
          <marker id="arr-u1t-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--teal)"></path>
          </marker>
        </defs>

        <!-- Suprasistema / Entorno -->
        <rect x="24" y="20" width="872" height="236" rx="16" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="7 4"></rect>
        <text x="42" y="44" font-size="11.5" font-weight="700" fill="var(--ink-secondary)">AMBIENTE / SUPRASISTEMA (Sistemas dentro de sistemas mayores)</text>

        <!-- Caja central del sistema (Frontera) -->
        <g class="svg-node" data-node="nucleo" tabindex="0" role="button">
          <rect x="170" y="60" width="580" height="126" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2.2"></rect>
          <text x="460" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">FRONTERA / LÍMITES DEL SISTEMA (Subsistemas interdependientes)</text>

          <rect x="192" y="96" width="136" height="72" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="260" y="124" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">ENTRADAS</text>
          <text x="260" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Recursos / Datos</text>

          <line x1="332" y1="132" x2="366" y2="132" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u1t)"></line>

          <rect x="372" y="96" width="176" height="72" rx="10" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="460" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">CONVERSIÓN</text>
          <text x="460" y="142" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Transformación que</text>
          <text x="460" y="157" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">agrega valor</text>

          <line x1="552" y1="132" x2="586" y2="132" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u1t)"></line>

          <rect x="592" y="96" width="136" height="72" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="660" y="124" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">SALIDAS</text>
          <text x="660" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Resultados útiles</text>
        </g>

        <!-- Flechas desde entorno -->
        <line x1="50" y1="132" x2="164" y2="132" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#arr-u1t)"></line>
        <text x="105" y="120" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-secondary)">Del entorno</text>
        <line x1="754" y1="132" x2="866" y2="132" stroke="var(--primary)" stroke-width="2.2" marker-end="url(#arr-u1t)"></line>
        <text x="812" y="120" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-secondary)">Al entorno</text>

        <!-- Lazo de Retroalimentación -->
        <g class="svg-node" data-node="retroalimentacion" tabindex="0" role="button">
          <path d="M 660 190 L 660 220 L 260 220 L 260 192" fill="none" stroke="var(--teal)" stroke-width="2.2" marker-end="url(#arr-u1t-teal)"></path>
          <rect x="285" y="199" width="350" height="42" rx="21" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>
          <text x="460" y="217" text-anchor="middle" font-size="12" font-weight="700" fill="var(--teal)">RETROALIMENTACIÓN Y HOMEOSTASIS</text>
          <text x="460" y="233" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Ajusta entradas según salidas · Equilibrio</text>
        </g>

        <!-- Fila inferior: 4 bloques de propiedades y principios -->
        <g class="svg-node" data-node="premisas" tabindex="0" role="button">
          <rect x="24" y="276" width="206" height="220" rx="12" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <rect x="24" y="276" width="206" height="36" rx="12" fill="var(--primary-soft)"></rect>
          <text x="127" y="299" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--primary)">Premisas y Principios</text>
          <text x="36" y="334" font-size="12" font-weight="700" fill="var(--ink)">3 Premisas:</text>
          <text x="36" y="352" font-size="11.5" fill="var(--ink-secondary)">• Dentro de sist. mayores</text>
          <text x="36" y="368" font-size="11.5" fill="var(--ink-secondary)">• Abiertos con el entorno</text>
          <text x="36" y="384" font-size="11.5" fill="var(--ink-secondary)">• Función según estructura</text>
          <text x="36" y="412" font-size="12" font-weight="700" fill="var(--ink)">4 Principios Autom.:</text>
          <text x="36" y="430" font-size="11.5" fill="var(--ink-secondary)">1. +Especial = -Adaptable</text>
          <text x="36" y="446" font-size="11.5" fill="var(--ink-secondary)">2. +Grande = +Mantenim.</text>
          <text x="36" y="462" font-size="11.5" fill="var(--ink-secondary)">3. Supra y subsistemas</text>
          <text x="36" y="478" font-size="11.5" fill="var(--ink-secondary)">4. Los sistemas crecen</text>
        </g>

        <g class="svg-node" data-node="entropia" tabindex="0" role="button">
          <rect x="246" y="276" width="206" height="220" rx="12" fill="var(--surface-elevated)" stroke="var(--danger)" stroke-width="1.8"></rect>
          <rect x="246" y="276" width="206" height="36" rx="12" fill="var(--danger-soft)"></rect>
          <text x="349" y="299" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--danger)">Entropía vs. Información</text>
          <text x="260" y="336" font-size="12" font-weight="700" fill="var(--ink)">Entropía (+Desorden)</text>
          <text x="260" y="355" font-size="11.5" fill="var(--ink-secondary)">Desgaste, desorganización</text>
          <text x="260" y="371" font-size="11.5" fill="var(--ink-secondary)">e incertidumbre creciente.</text>
          <line x1="264" y1="392" x2="434" y2="392" stroke="var(--border-strong)" stroke-dasharray="4 3"></line>
          <text x="260" y="416" font-size="12" font-weight="700" fill="var(--success)">Información (-Entropía)</text>
          <text x="260" y="435" font-size="11.5" fill="var(--ink-secondary)">Señal estructurada que</text>
          <text x="260" y="451" font-size="11.5" fill="var(--ink-secondary)">cambia el estado del</text>
          <text x="260" y="467" font-size="11.5" fill="var(--ink-secondary)">sistema y ordena decisiones.</text>
        </g>

        <g class="svg-node" data-node="propiedades" tabindex="0" role="button">
          <rect x="468" y="276" width="206" height="220" rx="12" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <rect x="468" y="276" width="206" height="36" rx="12" fill="var(--violet-soft)"></rect>
          <text x="571" y="299" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--violet)">Equifinalidad y Totalismo</text>
          <text x="482" y="336" font-size="12" font-weight="700" fill="var(--ink)">Equifinalidad</text>
          <text x="482" y="354" font-size="11.5" fill="var(--ink-secondary)">Mismo objetivo final por</text>
          <text x="482" y="370" font-size="11.5" fill="var(--ink-secondary)">diferentes alternativas.</text>
          <text x="482" y="398" font-size="12" font-weight="700" fill="var(--ink)">Teleología</text>
          <text x="482" y="416" font-size="11.5" fill="var(--ink-secondary)">Orientación constante a un</text>
          <text x="482" y="432" font-size="11.5" fill="var(--ink-secondary)">propósito o fin común.</text>
          <text x="482" y="458" font-size="12" font-weight="700" fill="var(--ink)">Totalismo</text>
          <text x="482" y="476" font-size="11.5" fill="var(--ink-secondary)">Todo &gt; suma de las partes.</text>
        </g>

        <g class="svg-node" data-node="clasificacion" tabindex="0" role="button">
          <rect x="690" y="276" width="206" height="220" rx="12" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <rect x="690" y="276" width="206" height="36" rx="12" fill="var(--warning-soft)"></rect>
          <text x="793" y="299" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--warning)">5 Ejes de Clasificación</text>
          <text x="700" y="338" font-size="11" fill="var(--ink)"><tspan font-weight="700">1. Constit.:</tspan> Físico / Abstracto</text>
          <text x="700" y="368" font-size="11" fill="var(--ink)"><tspan font-weight="700">2. Entorno:</tspan> Abierto / Cerrado</text>
          <text x="700" y="398" font-size="11" fill="var(--ink)"><tspan font-weight="700">3. Origen:</tspan> Natural / Artificial</text>
          <text x="700" y="428" font-size="11" fill="var(--ink)"><tspan font-weight="700">4. Variables:</tspan> Discreto / Cont.</text>
          <text x="700" y="458" font-size="11" fill="var(--ink)"><tspan font-weight="700">5. Previsib.:</tspan> Determinístico /</text>
          <text x="712" y="474" font-size="11" fill="var(--ink-secondary)">Probabilístico</text>
        </g>
      </svg>`,
      nodes: {
        nucleo: {
          title: 'Estructura Básica y Proceso de Conversión',
          badge: 'Anatomía del Sistema',
          summary: 'Un sistema reúne elementos interdependientes (actores, procesos, recursos) que transforman entradas del entorno en salidas útiles dentro de una frontera.',
          bullets: [
            'Entradas: recursos, señales o datos provenientes del contexto.',
            'Proceso de conversión: transformación interna que agrega valor.',
            'Salidas: productos o información útil devuelta al entorno.',
            'Frontera: límite que separa al sistema de su ambiente o suprasistema.'
          ],
          examTip: 'Sin proceso de conversión que agregue valor ni objetivo común, solo hay un amontonamiento de partes, no un sistema.'
        },
        retroalimentacion: {
          title: 'Retroalimentación y Homeostasis',
          badge: 'Control y Equilibrio',
          summary: 'Mecanismos que permiten que un sistema abierto sobreviva y se autorregule frente a cambios del entorno.',
          bullets: [
            'Retroalimentación: mecanismo de control que ajusta las entradas basándose en el resultado de las salidas.',
            'Homeostasis: tendencia del sistema a adaptarse a cambios externos para mantener un equilibrio interno estable.'
          ],
          examTip: 'En preguntas comparativas: retroalimentación es el mecanismo de ajuste entrada-salida; homeostasis es la propiedad de equilibrio resultante.'
        },
        premisas: {
          title: '3 Premisas de la TGS y 4 Principios Automatizados',
          badge: 'TGS',
          summary: 'Las 3 premisas explican cualquier sistema; los 4 principios advierten qué ocurre cuando los automatizamos con software.',
          bullets: [
            'Premisa 1: Existen dentro de sistemas mayores (jerarquía).',
            'Premisa 2: Son abiertos e interactúan con su entorno.',
            'Premisa 3: Las funciones dependen de su estructura.',
            'Principios automatizados: mayor especialización = menor adaptabilidad; mayor tamaño = más mantenimiento; jerarquía de subsistemas; tendencia a crecer.'
          ],
          examTip: 'Ojo con la trampa: un sistema muy especializado NO es más flexible; es menos adaptable a cambios.'
        },
        entropia: {
          title: 'Entropía vs. Información',
          badge: 'Incertidumbre',
          summary: 'A medida que pasa el tiempo o falta orden, los sistemas sufren desgaste y desorden (entropía); la información lo contrarresta.',
          bullets: [
            'Entropía: aumento de desorden, desgaste e incertidumbre en el sistema.',
            'Información: señal organizada que cambia el estado de conocimiento y reduce la incertidumbre.'
          ],
          examTip: 'Este concepto conecta directamente U1 con U3 (SRS) y U6 (SPEC): especificar bien reduce la entropía del proyecto.'
        },
        propiedades: {
          title: 'Equifinalidad, Teleología y Totalismo',
          badge: 'Propiedades Clave',
          summary: 'Explican por qué existen múltiples diseños válidos para un mismo problema y por qué el análisis no puede ser reduccionista.',
          bullets: [
            'Equifinalidad: alcanzar un mismo objetivo final por diferentes caminos o soluciones.',
            'Teleología: todo sistema opera guiado por un propósito u objetivo.',
            'Totalismo: el todo supera la suma de las partes por la interdependencia entre subsistemas.'
          ],
          examTip: 'Gracias a la equifinalidad, distintas arquitecturas (Space of Solution) pueden resolver el mismo problema (Problem Space).'
        },
        clasificacion: {
          title: '5 Ejes de Clasificación de Sistemas',
          badge: 'Taxonomía',
          summary: 'Todo sistema puede caracterizarse combinando cinco dimensiones de análisis.',
          bullets: [
            'Constitución: físicos (tangibles) vs. abstractos (conceptuales, como el software).',
            'Relación con el entorno: abiertos (intercambian materia/energía/info) vs. cerrados.',
            'Origen: naturales vs. artificiales (creados por humanos).',
            'Variables: discretos vs. continuos.',
            'Previsibilidad: determinísticos (salida predecible) vs. probabilísticos (como los proyectos o agentes de IA).'
          ],
          examTip: 'Un proyecto de software (U2) y la IA generativa (U6) son probabilísticos / no deterministas.'
        }
      }
    },

    // =========================================================================
    // 3. UNIDAD 1: DATOS -> INFORMACIÓN Y PROBLEM VS SOLUTION SPACE
    // =========================================================================
    {
      id: 'u1-espacios',
      unit: 1,
      title: 'Datos → Información y Problem vs. Solution Space',
      subtitle: 'Transformación de datos en información útil (5 atributos) y la separación estricta entre el QUÉ (Discovery) y el CÓMO (Delivery).',
      kind: 'Explicación gráfica',
      defaultNode: 'espacios',
      takeaways: [
        'Datos + Procesamiento = Información, siempre que cumpla Significado, Importancia, Vigencia, Validez y Valor.',
        'Separar el QUÉ del CÓMO evita soluciones prematuras, previene construir el producto equivocado y hace mantenibles los requisitos.',
        'Todo problema es multicausal: exige enfoque sistémico antes de diseñar.'
      ],
      svg: `<svg viewBox="0 0 920 520" role="img" aria-label="Transformación de Datos en Información y Problem Space vs Solution Space">
        <defs>
          <marker id="arr-u1e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
          </marker>
          <marker id="arr-u1e-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--success)"></path>
          </marker>
        </defs>

        <!-- Mitad Superior: Datos + Procesamiento = Información -->
        <g class="svg-node" data-node="datos_info" tabindex="0" role="button">
          <rect x="24" y="20" width="872" height="176" rx="14" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="42" y="44" font-size="12" font-weight="700" fill="var(--primary)">SISTEMAS DE INFORMACIÓN: DATOS + PROCESAMIENTO = INFORMACIÓN ÚTIL</text>

          <rect x="44" y="64" width="166" height="108" rx="10" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>
          <text x="127" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">DATOS</text>
          <text x="127" y="114" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Representaciones</text>
          <text x="127" y="130" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">simbólicas y aisladas</text>
          <text x="127" y="146" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">de hechos sin contexto</text>

          <line x1="214" y1="118" x2="246" y2="118" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u1e)"></line>

          <rect x="252" y="64" width="186" height="108" rx="10" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="345" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="var(--teal)">PROCESAMIENTO</text>
          <text x="345" y="114" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Hardware + Software</text>
          <text x="345" y="130" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">+ Personas organizando</text>
          <text x="345" y="146" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">y dando contexto</text>

          <line x1="442" y1="118" x2="474" y2="118" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u1e)"></line>

          <rect x="480" y="60" width="396" height="118" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="498" y="84" font-size="14" font-weight="700" fill="var(--ink)">INFORMACIÓN (5 Atributos de Utilidad)</text>
          <text x="498" y="106" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">1. Significado:</tspan> sentido semántico en el dominio</text>
          <text x="498" y="123" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">2. Importancia:</tspan> relevancia para decidir o actuar</text>
          <text x="498" y="140" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">3. Vigencia:</tspan> oportunidad y actualización temporal</text>
          <text x="498" y="157" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">4. Validez:</tspan> exactitud real · <tspan font-weight="700">5. Valor:</tspan> utilidad vs. costo</text>
        </g>

        <!-- Mitad Inferior: Problem Space <-> PMF <-> Solution Space -->
        <g class="svg-node" data-node="problem_space" tabindex="0" role="button">
          <rect x="24" y="218" width="330" height="186" rx="14" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="2"></rect>
          <text x="44" y="244" font-size="11.5" font-weight="700" fill="var(--violet)">PRODUCT DISCOVERY · ANÁLISIS</text>
          <text x="44" y="268" font-size="17" font-weight="700" fill="var(--ink)">Problem Space (El QUÉ)</text>
          <text x="44" y="292" font-size="12" fill="var(--ink-secondary)">• Qué resolver, para quién y por qué</text>
          <text x="44" y="312" font-size="12" fill="var(--ink-secondary)">• Necesidades no satisfechas y dolores</text>
          <text x="44" y="332" font-size="12" fill="var(--ink-secondary)">• Objetivos y restricciones del dominio</text>
          <text x="44" y="352" font-size="12" fill="var(--ink-secondary)">• Requisitos como CAJA NEGRA</text>
          <text x="44" y="376" font-size="12" font-weight="700" fill="var(--violet)">No describe el software que resuelve</text>
        </g>

        <g class="svg-node" data-node="espacios" tabindex="0" role="button">
          <line x1="360" y1="310" x2="394" y2="310" stroke="var(--success)" stroke-width="2.4" marker-end="url(#arr-u1e-g)"></line>
          <rect x="400" y="248" width="120" height="124" rx="14" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect>
          <text x="460" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="var(--success)">PUENTE</text>
          <text x="460" y="304" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Product-</text>
          <text x="460" y="322" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Market Fit</text>
          <text x="460" y="346" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Alineación real</text>
          <text x="460" y="360" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">solución-mercado</text>
          <line x1="526" y1="310" x2="560" y2="310" stroke="var(--success)" stroke-width="2.4" marker-end="url(#arr-u1e-g)"></line>
        </g>

        <g class="svg-node" data-node="solution_space" tabindex="0" role="button">
          <rect x="566" y="218" width="330" height="186" rx="14" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"></rect>
          <text x="586" y="244" font-size="11.5" font-weight="700" fill="var(--primary)">PRODUCT DELIVERY · DISEÑO</text>
          <text x="586" y="268" font-size="17" font-weight="700" fill="var(--ink)">Solution Space (El CÓMO)</text>
          <text x="586" y="292" font-size="12" fill="var(--ink-secondary)">• Diseño, arquitectura y componentes</text>
          <text x="586" y="312" font-size="12" fill="var(--ink-secondary)">• Estructuras de datos e implementación</text>
          <text x="586" y="332" font-size="12" fill="var(--ink-secondary)">• Construcción y entrega del producto</text>
          <text x="586" y="352" font-size="12" fill="var(--ink-secondary)">• Decisiones de plataforma y lenguaje</text>
          <text x="586" y="376" font-size="12" font-weight="700" fill="var(--primary)">Se define DESPUÉS de entender el qué</text>
        </g>

        <!-- Barra inferior: Enfoque sistémico y razones de separación -->
        <g class="svg-node" data-node="multicausal" tabindex="0" role="button">
          <rect x="24" y="422" width="872" height="78" rx="12" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="42" y="446" font-size="12.5" font-weight="700" fill="var(--warning)">ENFOQUE SISTÉMICO Y ANÁLISIS MULTICAUSAL (Formular problema → Diseñar soluciones → Controlar resultados)</text>
          <text x="42" y="468" font-size="11.5" fill="var(--ink-secondary)">Por qué separar QUÉ de CÓMO: 1) Evita soluciones prematuras · 2) Previene construir el producto equivocado sin research</text>
          <text x="42" y="486" font-size="11.5" fill="var(--ink-secondary)">3) Mantenibilidad: los requisitos sobreviven a cambios de lenguaje, formato o plataforma.</text>
        </g>
      </svg>`,
      nodes: {
        espacios: {
          title: 'Product-Market Fit: el Puente entre Espacios',
          badge: 'Alineación Estratégica',
          summary: 'El Product-Market Fit mide el grado de alineación en que la solución construida en la punta satisface necesidades reales del mercado definidas en la base.',
          bullets: [
            'Conecta el Espacio del Problema (demandas reales) con el Espacio de la Solución (producto entregado).',
            'Concentrarse solo en entregar código sin hacer discovery/research conduce al fracaso por desconocer al usuario.'
          ],
          examTip: 'Si te preguntan cómo saber si un MVP o producto tiene sentido, la respuesta apunta al Product-Market Fit y la retención.'
        },
        datos_info: {
          title: 'Datos vs. Información y sus 5 Atributos',
          badge: 'Sistemas de Información',
          summary: 'Los datos son símbolos aislados; al procesarse con hardware, software y personas se vuelven información útil que reduce incertidumbre.',
          bullets: [
            'Significado: valor semántico para el usuario en su dominio.',
            'Importancia: relevancia para decidir o actuar.',
            'Vigencia: oportunidad temporal (no obsoleta).',
            'Validez: exactitud representativa de la realidad.',
            'Valor: utilidad percibida relativa frente al costo de obtenerla.'
          ],
          examTip: 'Identificá cuál de los 5 atributos falla en cada escenario de examen (por ej., dato exacto pero viejo = falla Vigencia).'
        },
        problem_space: {
          title: 'Espacio del Problema (El QUÉ / Discovery)',
          badge: 'Análisis',
          summary: 'Ámbito del dominio, el usuario y el negocio compuesto por necesidades insatisfechas, dolores, objetivos y restricciones.',
          bullets: [
            'Relacionado al Product Discovery y al Agilismo.',
            'Los requisitos definen el problema como caja negra, sin describir el software ni la tecnología que lo resuelve.',
            'Incluye análisis técnico para evaluar restricciones, capacidades y alcance.'
          ],
          examTip: 'Error grave de examen: incluir tablas SQL, APIs o frameworks dentro de la definición del espacio del problema.'
        },
        solution_space: {
          title: 'Espacio de la Solución (El CÓMO / Delivery)',
          badge: 'Diseño e Implementación',
          summary: 'Ámbito de la arquitectura, diseño de componentes, estructuras de datos, construcción y entrega del producto.',
          bullets: [
            'Corresponde al Product Delivery.',
            'Depende de decisiones de lenguaje, plataforma y arquitectura.',
            'Debe abordarse luego de investigar el problema multicausal.'
          ],
          examTip: 'En U5 y U6 vuelve la misma idea: diseño e implementación son el CÓMO, posteriores a validar el QUÉ.'
        },
        multicausal: {
          title: 'Enfoque Sistémico, Multicausalidad y Mantenibilidad',
          badge: '3 Razones Clave',
          summary: 'Un problema siempre es multicausal porque múltiples sistemas interactúan con el contexto.',
          bullets: [
            'Fases del enfoque sistémico: 1) Formulación del problema (Análisis), 2) Identificación y diseño de soluciones (Diseño), 3) Controlar resultados (Operaciones).',
            'Separar QUÉ de CÓMO evita suposiciones prematuras, previene construir el producto equivocado y asegura documentación mantenible independiente de la tecnología.'
          ],
          examTip: 'Memorizá las 3 razones explícitas de separar caja negra (qué) de diseño (cómo): evitar suposiciones, no construir el producto equivocado y mantenibilidad.'
        }
      }
    },

    // =========================================================================
    // 4. UNIDAD 2: MODELO 3P+A, CMMI PP Y CALIDAD
    // =========================================================================
    {
      id: 'u2-3pa',
      unit: 2,
      title: 'Modelo 3P+A, CMMI (PP ML2) y Calidad',
      subtitle: 'La Arquitectura como base estructural de Proyecto, Proceso y Producto, gestión de proyectos, CMMI y calidad de proceso vs. producto.',
      kind: 'Mapa conceptual',
      defaultNode: 'arquitectura',
      takeaways: [
        'Si la Arquitectura es débil, el producto colapsa frente a un cambio.',
        'Todo proyecto de software es no determinista y genera un producto intangible basado en conocimiento.',
        'Proceso deficiente -> Producto deficiente; Proceso bueno ≠ Producto bueno asegurado (requiere testing).'
      ],
      svg: `<svg viewBox="0 0 920 510" role="img" aria-label="Modelo 3P+A, Gestión de Proyectos, CMMI PP ML2 y Calidad">
        <defs>
          <marker id="arr-u2a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--teal)"></path>
          </marker>
        </defs>

        <!-- Izquierda: Modelo 3P+A -->
        <rect x="22" y="20" width="444" height="316" rx="14" fill="var(--surface)" stroke="var(--border-strong)"></rect>
        <text x="42" y="44" font-size="12" font-weight="700" fill="var(--teal)">MODELO 3P+A DE INGENIERÍA DE SOFTWARE</text>

        <g class="svg-node" data-node="proyecto" tabindex="0" role="button">
          <rect x="40" y="62" width="130" height="142" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="105" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="var(--primary)">PROYECTO</text>
          <text x="105" y="112" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Planificación,</text>
          <text x="105" y="128" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">monitoreo y</text>
          <text x="105" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">control ante</text>
          <text x="105" y="160" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">complejidad e</text>
          <text x="105" y="176" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">incertidumbre</text>
        </g>

        <g class="svg-node" data-node="proceso" tabindex="0" role="button">
          <rect x="180" y="62" width="130" height="142" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="245" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="var(--violet)">PROCESO</text>
          <text x="245" y="112" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Marco de trabajo</text>
          <text x="245" y="128" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">con actividades,</text>
          <text x="245" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">tareas e hitos</text>
          <text x="245" y="160" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">para no gastar</text>
          <text x="245" y="176" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">recursos</text>
        </g>

        <g class="svg-node" data-node="producto" tabindex="0" role="button">
          <rect x="320" y="62" width="130" height="142" rx="10" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="385" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="var(--warning)">PRODUCTO</text>
          <text x="385" y="112" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Objetivos, ámbito,</text>
          <text x="385" y="128" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">alternativas y</text>
          <text x="385" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">límites para</text>
          <text x="385" y="160" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">estimar costos</text>
          <text x="385" y="176" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">y riesgos</text>
        </g>

        <g class="svg-node" data-node="arquitectura" tabindex="0" role="button">
          <rect x="40" y="220" width="410" height="98" rx="12" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2.2"></rect>
          <text x="245" y="246" text-anchor="middle" font-size="15" font-weight="700" fill="var(--teal)">+ ARQUITECTURA (Cimiento Inherente)</text>
          <text x="245" y="268" text-anchor="middle" font-size="12" fill="var(--ink)">Estructura que soporta los componentes y sus interacciones.</text>
          <text x="245" y="287" text-anchor="middle" font-size="12" fill="var(--ink-secondary)">Define tiempo, presupuesto, elecciones y metodologías.</text>
          <text x="245" y="305" text-anchor="middle" font-size="12" font-weight="700" fill="var(--danger)">Si es débil → el producto colapsa frente a un cambio</text>
        </g>

        <!-- Derecha Arriba: Gestión y CMMI PP ML2 -->
        <g class="svg-node" data-node="cmmi" tabindex="0" role="button">
          <rect x="484" y="20" width="414" height="316" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="504" y="46" font-size="12" font-weight="700" fill="var(--primary)">PROYECTO NO DETERMINISTA Y CMMI (PP · ML2)</text>
          <text x="504" y="70" font-size="12" fill="var(--ink-secondary)">3 áreas de gestión: <tspan font-weight="700" fill="var(--ink)">Planificación · Calendario · Riesgos</tspan></text>
          <text x="504" y="88" font-size="11" fill="var(--ink-secondary)">Personal = recurso crítico · Producto intangible (conocimiento)</text>

          <rect x="504" y="106" width="374" height="62" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="520" y="128" font-size="13" font-weight="700" fill="var(--primary)">SG1 · Establecer Estimaciones</text>
          <text x="520" y="148" font-size="11.5" fill="var(--ink-secondary)">Alcance, atributos, ciclo de vida, esfuerzo y costo.</text>

          <line x1="691" y1="168" x2="691" y2="184" stroke="var(--teal)" stroke-width="2" marker-end="url(#arr-u2a)"></line>

          <rect x="504" y="186" width="374" height="62" rx="10" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="520" y="208" font-size="13" font-weight="700" fill="var(--teal)">SG2 · Desarrollar el Plan</text>
          <text x="520" y="228" font-size="11.5" fill="var(--ink-secondary)">Presupuesto, cronograma, riesgos, datos y recursos.</text>

          <line x1="691" y1="248" x2="691" y2="264" stroke="var(--teal)" stroke-width="2" marker-end="url(#arr-u2a)"></line>

          <rect x="504" y="266" width="374" height="56" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="520" y="288" font-size="13" font-weight="700" fill="var(--success)">SG3 · Obtener Compromiso con el Plan</text>
          <text x="520" y="307" font-size="11.5" fill="var(--ink-secondary)">Negociar, acordar con cliente/equipo y revisar planes.</text>
        </g>

        <!-- Abajo: Calidad Proceso vs Producto -->
        <g class="svg-node" data-node="calidad" tabindex="0" role="button">
          <rect x="22" y="356" width="876" height="134" rx="14" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="2"></rect>
          <text x="42" y="382" font-size="13" font-weight="700" fill="var(--warning)">RELACIÓN ASIMÉTRICA: CALIDAD DE PROCESO VS. CALIDAD DE PRODUCTO</text>

          <rect x="42" y="398" width="388" height="76" rx="10" fill="var(--danger-soft)" stroke="var(--danger)"></rect>
          <text x="58" y="422" font-size="13" font-weight="700" fill="var(--danger)">Proceso Deficiente → Producto Deficiente</text>
          <text x="58" y="442" font-size="12" fill="var(--ink-secondary)">Sin orden de tareas, estimación ni validaciones,</text>
          <text x="58" y="458" font-size="12" fill="var(--ink-secondary)">el producto final fracasa con certeza.</text>

          <rect x="454" y="398" width="424" height="76" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="470" y="422" font-size="13" font-weight="700" fill="var(--success)">Buen Proceso (CMMI/ISO) ≠ Buen Producto Automático</text>
          <text x="470" y="442" font-size="12" fill="var(--ink-secondary)">Calidad del proceso = cómo se trabajó.</text>
          <text x="470" y="458" font-size="12" fill="var(--ink-secondary)">Calidad del producto = requiere verificación y testing.</text>
        </g>
      </svg>`,
      nodes: {
        arquitectura: {
          title: 'Arquitectura: el Cimiento del 3P+A',
          badge: 'Pilar Estructural',
          summary: 'Es el diseño base inherente a todo proyecto: define cómo se estructuran e interactúan los componentes del software.',
          bullets: [
            'Condiciona las otras 3 P: tiempos, presupuesto, metodologías y alcance.',
            'Si la arquitectura es débil, cualquier cambio futuro hace colapsar el producto.'
          ],
          examTip: 'Recordá que en 3P+A la arquitectura NO es un agregado tardío sino inherente desde la concepción del proyecto.'
        },
        proyecto: {
          title: 'Proyecto (Planificación y Control)',
          badge: '3P+A',
          summary: 'Se planifica, monitorea y controla para domar la complejidad y evitar desvíos fatales.',
          bullets: [
            'Administra personal (recurso más crítico), presupuesto y calendario.',
            'Avanza evaluando entregables e hitos porque el software es intangible.'
          ],
          examTip: 'Un proyecto grande de software es único, irrepetible y no determinista.'
        },
        proceso: {
          title: 'Proceso (Marco de Trabajo)',
          badge: '3P+A',
          summary: 'Conjunto coordinado de actividades, tareas e hitos que ordena el trabajo del equipo para no desperdiciar recursos.',
          bullets: [
            'No existe un proceso universal: proyectos críticos usan modelos estructurados; con alta incertidumbre usan modelos ágiles.',
            'Evaluado mediante marcos como CMMI o ISO.'
          ],
          examTip: 'Diferenciá Proceso (cómo se organiza el trabajo) de Producto (qué se entrega y su alcance).'
        },
        producto: {
          title: 'Producto (Objetivos y Alcance)',
          badge: '3P+A',
          summary: 'Define objetivos, ámbito, soluciones alternativas y restricciones; es la base para estimar costos, riesgos y tareas.',
          bullets: [
            'Es abstracto e intangible (resultado de conocimiento).',
            'Sus fallas provienen de errores de diseño, lógica o especificación.'
          ],
          examTip: 'Sin alcance de producto claro es imposible armar estimaciones confiables en SG1.'
        },
        cmmi: {
          title: 'Gestión de Proyectos y CMMI PP (ML2)',
          badge: 'Buenas Prácticas',
          summary: 'CMMI garantiza calidad de proceso definiendo metas y prácticas específicas; en ML2 Planificación de Proyectos ordena el arranque.',
          bullets: [
            'SG1: establecer estimaciones (alcance, atributos, ciclo, esfuerzo, costo).',
            'SG2: desarrollar el plan (cronograma, presupuesto, riesgos, recursos, involucrados).',
            'SG3: obtener compromiso acordado con cliente y equipo.'
          ],
          examTip: 'Memorizá el orden SG1 (Estimar) -> SG2 (Planificar) -> SG3 (Comprometer).'
        },
        calidad: {
          title: 'Calidad de Proceso vs. Calidad de Producto',
          badge: 'Regla Clave',
          summary: 'La calidad del proceso condiciona el piso de calidad del producto, pero no basta para garantizarlo.',
          bullets: [
            'Calidad de proceso: en qué condiciones, orden y validaciones se produjo (CMMI, ISO).',
            'Calidad de producto: verificación y testing sobre el software resultante.',
            'Un mal proceso da un mal producto; un buen proceso habilita pero no garantiza un buen producto.'
          ],
          examTip: 'Pregunta clásica de examen múltiple choice y oral: explicá la asimetría entre proceso y producto.'
        }
      }
    },

    // =========================================================================
    // 5. UNIDAD 2: COMPARATIVA DE CICLOS DE VIDA Y AGILIDAD
    // =========================================================================
    {
      id: 'u2-ciclos',
      unit: 2,
      title: 'Comparativa Visual de Ciclos de Vida y Agilidad',
      subtitle: 'Cómo evoluciona el enfoque desde Cascada y The Box hasta el Ciclo Lean de Producto, Design Thinking, Doble Diamante y la IA.',
      kind: 'Comparativa visual',
      defaultNode: 'thebox',
      takeaways: [
        'En The Box (etapa 3) y en Doble Diamante (Descubrir+Definir) el foco está en consolidar el Problem Space antes de construir.',
        'Lean asume que el usuario no está para elicitar: Discovery liviano y validación rápida con MVPs.',
        'La IA acelera el prototipado y el testeo de supuestos, pero NO reemplaza el research ni el análisis de requerimientos.'
      ],
      svg: `<svg viewBox="0 0 920 530" role="img" aria-label="Comparativa visual de ciclos de vida del software y agilidad">
        <defs>
          <marker id="arr-u2c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
          </marker>
          <marker id="arr-u2c-w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--warning)"></path>
          </marker>
        </defs>

        <!-- Cuadrante 1: The Box & Cascada -->
        <g class="svg-node" data-node="thebox" tabindex="0" role="button">
          <rect x="20" y="18" width="430" height="236" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="38" y="42" font-size="12.5" font-weight="700" fill="var(--primary)">1. THE BOX (7 Etapas Cíclicas) vs. CASCADA</text>

          <rect x="38" y="56" width="122" height="44" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="99" y="75" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">1. Problemas y</text>
          <text x="99" y="90" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">oportunidades</text>

          <line x1="162" y1="78" x2="180" y2="78" stroke="var(--primary)" stroke-width="1.8" marker-end="url(#arr-u2c)"></line>

          <rect x="184" y="56" width="122" height="44" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="245" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. Req. Usuario</text>
          <text x="245" y="90" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Relevar / Elicitar</text>

          <line x1="308" y1="78" x2="324" y2="78" stroke="var(--primary)" stroke-width="1.8" marker-end="url(#arr-u2c)"></line>

          <rect x="328" y="56" width="106" height="44" rx="8" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="381" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">3. Análisis</text>
          <text x="381" y="90" text-anchor="middle" font-size="11" fill="var(--ink)">¡Agrega valor!</text>

          <line x1="381" y1="102" x2="381" y2="118" stroke="var(--primary)" stroke-width="1.8" marker-end="url(#arr-u2c)"></line>

          <rect x="328" y="122" width="106" height="42" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="381" y="146" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">4. Diseño</text>

          <line x1="324" y1="143" x2="308" y2="143" stroke="var(--primary)" stroke-width="1.8" marker-end="url(#arr-u2c)"></line>

          <rect x="184" y="122" width="122" height="42" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="245" y="140" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">5. Desarrollo</text>
          <text x="245" y="155" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">y documentación</text>

          <line x1="180" y1="143" x2="162" y2="143" stroke="var(--primary)" stroke-width="1.8" marker-end="url(#arr-u2c)"></line>

          <rect x="38" y="122" width="122" height="42" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="99" y="140" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">6. Prueba y</text>
          <text x="99" y="155" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">mantenimiento</text>

          <rect x="38" y="178" width="396" height="62" rx="8" fill="var(--surface)" stroke="var(--border-strong)" stroke-dasharray="4 3"></rect>
          <text x="48" y="198" font-size="11" font-weight="700" fill="var(--ink)">7. Implementación y eval. → vuelve al paso 1 (evolución)</text>
          <text x="48" y="216" font-size="11" fill="var(--ink-secondary)">Cascada: Req → Análisis → Diseño → Código → Pruebas (lineal).</text>
          <text x="48" y="231" font-size="11" fill="var(--ink-secondary)">En la realidad varias etapas se ejecutan en paralelo.</text>
        </g>

        <!-- Cuadrante 2: Ciclo de Producto Lean -->
        <g class="svg-node" data-node="lean" tabindex="0" role="button">
          <rect x="470" y="18" width="430" height="236" rx="14" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>
          <text x="488" y="42" font-size="12.5" font-weight="700" fill="var(--teal)">2. CICLO DE PRODUCTO LEAN (Usuario no presente)</text>

          <rect x="488" y="58" width="190" height="82" rx="10" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="500" y="78" font-size="11.5" font-weight="700" fill="var(--teal)">DISCOVERY (Bajo costo)</text>
          <text x="500" y="96" font-size="11.5" fill="var(--ink)">1. Business Outcome</text>
          <text x="500" y="113" font-size="11.5" fill="var(--ink)">2. Discover (asume reqs.)</text>
          <text x="500" y="130" font-size="11.5" fill="var(--ink)">3. Validate (con MVPs)</text>

          <line x1="682" y1="99" x2="704" y2="99" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u2c)"></line>

          <rect x="708" y="58" width="174" height="82" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="718" y="78" font-size="11.5" font-weight="700" fill="var(--success)">DELIVERY (Construir)</text>
          <text x="718" y="96" font-size="11.5" fill="var(--ink)">4. Build (construir)</text>
          <text x="718" y="113" font-size="11.5" fill="var(--ink)">5. Launch (masivo)</text>
          <text x="718" y="130" font-size="11.5" fill="var(--ink)">6. Evaluate → 7. Iterar</text>

          <rect x="488" y="156" width="394" height="84" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="498" y="177" font-size="12" font-weight="700" fill="var(--ink)">Ventaja y Riesgo del Enfoque Lean</text>
          <text x="498" y="196" font-size="11" fill="var(--ink-secondary)">• Entrega valor y feedback rápido si no hay usuario para elicitar.</text>
          <text x="498" y="213" font-size="11" fill="var(--ink-secondary)">• Mayor incógnita: riesgo de producto costoso si falla</text>
          <text x="498" y="229" font-size="11" fill="var(--ink-secondary)">  el Market Fit. Al madurar, el crecimiento se estabiliza.</text>
        </g>

        <!-- Cuadrante 3: Design Thinking -->
        <g class="svg-node" data-node="dt" tabindex="0" role="button">
          <rect x="20" y="272" width="430" height="238" rx="14" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="38" y="296" font-size="12.5" font-weight="700" fill="var(--violet)">3. DESIGN THINKING (Divergente ↔ Convergente)</text>

          <rect x="36" y="314" width="120" height="106" rx="10" fill="var(--violet-soft)" stroke="var(--violet)"></rect>
          <text x="96" y="336" text-anchor="middle" font-size="11" font-weight="700" fill="var(--violet)">ENTENDER</text>
          <text x="46" y="360" font-size="11.5" font-weight="700" fill="var(--ink)">a. Empatizar</text>
          <text x="46" y="376" font-size="11" fill="var(--ink-secondary)">Conducta usuario</text>
          <text x="46" y="396" font-size="11.5" font-weight="700" fill="var(--ink)">b. Definir</text>
          <text x="46" y="412" font-size="11" fill="var(--ink-secondary)">Ubicar problema</text>

          <line x1="158" y1="367" x2="172" y2="367" stroke="var(--primary)" stroke-width="1.8" marker-end="url(#arr-u2c)"></line>

          <rect x="176" y="314" width="120" height="106" rx="10" fill="var(--warning-soft)" stroke="var(--warning)"></rect>
          <text x="236" y="336" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">EXPLORAR</text>
          <text x="186" y="360" font-size="11.5" font-weight="700" fill="var(--ink)">a. Idear</text>
          <text x="186" y="376" font-size="11" fill="var(--ink-secondary)">Ideas creativas</text>
          <text x="186" y="396" font-size="11.5" font-weight="700" fill="var(--ink)">b. Prototipar</text>
          <text x="186" y="412" font-size="11" fill="var(--ink-secondary)">Medir viabilidad</text>

          <line x1="298" y1="367" x2="312" y2="367" stroke="var(--primary)" stroke-width="1.8" marker-end="url(#arr-u2c)"></line>

          <rect x="316" y="314" width="120" height="106" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="376" y="336" text-anchor="middle" font-size="11" font-weight="700" fill="var(--success)">MATERIALIZAR</text>
          <text x="326" y="360" font-size="11" font-weight="700" fill="var(--ink)">a. Testear</text>
          <text x="326" y="376" font-size="11" fill="var(--ink-secondary)">Valida idea</text>
          <text x="326" y="396" font-size="11" font-weight="700" fill="var(--ink)">b. Implementar</text>
          <text x="326" y="412" font-size="11" fill="var(--ink-secondary)">Construir</text>

          <rect x="38" y="432" width="396" height="64" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="48" y="454" font-size="11" font-weight="700" fill="var(--ink)">No cubre todo el ciclo: todo menos implementar es Discovery.</text>
          <text x="48" y="473" font-size="11" fill="var(--ink-secondary)">Supuestos se validan recién en Testear (Continuous Discovery).</text>
        </g>

        <!-- Cuadrante 4: Agilidad Moderna, Doble Diamante e IA -->
        <g class="svg-node" data-node="diamante_ia" tabindex="0" role="button">
          <rect x="470" y="272" width="430" height="238" rx="14" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="488" y="296" font-size="12.5" font-weight="700" fill="var(--warning)">4. AGILIDAD MODERNA, DOBLE DIAMANTE E IA</text>

          <!-- Diamante 1: Problema -->
          <polygon points="488,365 578,315 668,365 578,415" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="2"></polygon>
          <text x="578" y="355" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--violet)">PROBLEMA</text>
          <text x="578" y="372" text-anchor="middle" font-size="11" fill="var(--ink)">Descubrir +</text>
          <text x="578" y="387" text-anchor="middle" font-size="11" fill="var(--ink)">Definir</text>

          <!-- Diamante 2: Solución -->
          <polygon points="668,365 758,315 848,365 758,415" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"></polygon>
          <text x="758" y="355" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">SOLUCIÓN</text>
          <text x="758" y="372" text-anchor="middle" font-size="11" fill="var(--ink)">Desarrollar +</text>
          <text x="758" y="387" text-anchor="middle" font-size="11" fill="var(--ink)">Entregar</text>

          <line x1="850" y1="365" x2="884" y2="365" stroke="var(--warning)" stroke-width="2" marker-end="url(#arr-u2c-w)"></line>

          <rect x="488" y="424" width="394" height="72" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="498" y="445" font-size="11" font-weight="700" fill="var(--ink)">Fórmula: Design Thinking (Discovery) + Lean + Agile</text>
          <text x="498" y="463" font-size="11" fill="var(--ink-secondary)">IA: acelera prototipos para hallar errores antes, pero</text>
          <text x="498" y="479" font-size="11" fill="var(--ink-secondary)">el research y el análisis de requisitos NO desaparecen.</text>
        </g>
      </svg>`,
      nodes: {
        thebox: {
          title: 'The Box (7 Etapas) vs. Cascada',
          badge: 'Ciclo Tradicional y Evolutivo',
          summary: 'The Box describe un ciclo continuo en 7 etapas donde en el paso 3 se agrega verdadero valor al analizar necesidades del sistema.',
          bullets: [
            'Paso 1: Identificar problemas/oportunidades/objetivos; Paso 2: Elicitar requerimientos humanos.',
            'Paso 3: Análisis de necesidades del sistema (donde realmente se agrega valor validando utilidad en el Problem Space).',
            'Pasos 4-7: Diseño, Desarrollo/documentación, Prueba/mantenimiento, Implementación/evaluación -> vuelve al 1.',
            'Cascada es lineal (Req->Análisis->Diseño->Código->Pruebas), aunque en la práctica muchas tareas se hacen en paralelo.'
          ],
          examTip: 'Acordate: ciclo de vida largo requiere diseño sólido; ciclo corto privilegia flexibilidad.'
        },
        lean: {
          title: 'Ciclo de Vida del Producto (Lean)',
          badge: 'Product Management',
          summary: 'Cuando el usuario no está disponible para elicitar, se formulan hipótesis livianas y se validan en el mercado con MVPs.',
          bullets: [
            'Secuencia: Business outcome -> Discover -> Validate -> Build -> Launch -> Evaluate -> Iterar.',
            'Discovery es rápido, liviano y barato; el grueso de la inversión va al Build.',
            'Riesgo: alta incertidumbre puede producir algo desatinado si no hay Market Fit.'
          ],
          examTip: 'Contrastá The Box (el usuario elicita requerimientos) vs. Lean (el usuario no está y se validan supuestos con MVP).'
        },
        dt: {
          title: 'Design Thinking',
          badge: 'Pensamiento Divergente y Convergente',
          summary: 'Método creativo centrado en la conducta del usuario que combina momentos divergentes (ideas) y convergentes (acción).',
          bullets: [
            '1. Entendimiento (Empatizar, Definir) -> 2. Explorar (Idear, Prototipar) -> 3. Materializar (Testear, Implementar).',
            'No cubre todo el ciclo de vida: todo excepto Implementar pertenece al Product Discovery.',
            'No hay validación real con usuario hasta Testear el prototipo.'
          ],
          examTip: 'Si preguntan cuándo se valida la hipótesis en Design Thinking: recién en la etapa de Testear.'
        },
        diamante_ia: {
          title: 'Agilidad Moderna, Doble Diamante e IA',
          badge: 'Síntesis Contemporánea',
          summary: 'Combina lo mejor de tres marcos y potencia la velocidad experimental con Inteligencia Artificial sin perder rigor analítico.',
          bullets: [
            'Doble Diamante: Descubrir y Definir exploran el problema; Desarrollar y Entregar materializan la solución.',
            'Agilidad Moderna: Design Thinking (Discovery) + Lean (cosas correctas) + Agile (construir correctamente).',
            'IA: acelera prototipos y permite hallar errores en supuestos mucho antes, pero exige contexto y research.'
          ],
          examTip: 'Trampa habitual: decir que la IA reemplaza el análisis de requerimientos. Falso: el research sigue siendo clave.'
        }
      }
    },

    // =========================================================================
    // 6. UNIDAD 3: PROCESO IR, ENTREVISTAS Y EMPATHY MAP
    // =========================================================================
    {
      id: 'u3-elicitacion',
      unit: 3,
      title: 'Proceso IR, Estructuras de Entrevista y Empathy Map',
      subtitle: 'Las cuatro actividades de la Ingeniería de Requerimientos, técnicas de entrevista (Pirámide, Embudo y Rombo) y mapeo de empatía.',
      kind: 'Explicación gráfica',
      defaultNode: 'proceso_ir',
      takeaways: [
        'El proceso IR (Elicitar, Modelar, Analizar, Gestionar) transforma necesidades del Universo de Discurso en un SRS validado.',
        'Las estructuras de entrevista (Pirámide, Embudo, Rombo) combinan preguntas abiertas, cerradas, bipolares y sondeos.',
        'El Empathy Map ordena 7 preguntas para descubrir dolores y deseos ocultos del usuario.'
      ],
      svg: `<svg viewBox="0 0 920 530" role="img" aria-label="Proceso de Ingeniería de Requerimientos, Estructuras de Entrevista y Empathy Map">
        <defs>
          <marker id="arr-u3e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--violet)"></path>
          </marker>
        </defs>

        <!-- Franja Superior: Proceso IR -->
        <g class="svg-node" data-node="proceso_ir" tabindex="0" role="button">
          <rect x="20" y="16" width="880" height="176" rx="14" fill="var(--surface)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="38" y="40" font-size="12" font-weight="700" fill="var(--violet)">PROCESO DE INGENIERÍA DE REQUERIMIENTOS (Universo de Discurso · CMMI Nivel 3)</text>

          <rect x="40" y="54" width="186" height="72" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="133" y="78" text-anchor="middle" font-size="14" font-weight="700" fill="var(--primary)">1. ELICITAR</text>
          <text x="133" y="98" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Research · Priorizar fuentes</text>
          <text x="133" y="114" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Entrevistas / Cuestionarios</text>

          <line x1="230" y1="90" x2="262" y2="90" stroke="var(--violet)" stroke-width="2" marker-end="url(#arr-u3e)"></line>

          <rect x="268" y="54" width="186" height="72" rx="10" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="361" y="78" text-anchor="middle" font-size="14" font-weight="700" fill="var(--teal)">2. MODELAR</text>
          <text x="361" y="98" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Formato legible y común</text>
          <text x="361" y="114" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">DSS / Modelo de Dominio</text>

          <line x1="458" y1="90" x2="490" y2="90" stroke="var(--violet)" stroke-width="2" marker-end="url(#arr-u3e)"></line>

          <rect x="496" y="54" width="196" height="72" rx="10" fill="var(--violet-soft)" stroke="var(--violet)"></rect>
          <text x="594" y="78" text-anchor="middle" font-size="14" font-weight="700" fill="var(--violet)">3. ANALIZAR</text>
          <text x="594" y="98" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">V&amp;V · Resolver conflictos</text>
          <text x="594" y="114" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Negociar y especificar (SRS)</text>

          <line x1="696" y1="90" x2="728" y2="90" stroke="var(--violet)" stroke-width="2" marker-end="url(#arr-u3e)"></line>

          <rect x="734" y="54" width="146" height="72" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="807" y="78" text-anchor="middle" font-size="14" font-weight="700" fill="var(--success)">VALIDACIÓN</text>
          <text x="807" y="98" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Calidad de reqs.</text>
          <text x="807" y="114" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">con usuarios</text>

          <rect x="40" y="138" width="840" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>
          <text x="460" y="163" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">4. GESTIONAR (Transversal en todo el ciclo): cambios, impacto, costos, trazabilidad bidireccional (CMMI REQM)</text>
        </g>

        <!-- Abajo Izquierda: Estructuras de Entrevista -->
        <g class="svg-node" data-node="entrevistas" tabindex="0" role="button">
          <rect x="20" y="210" width="460" height="302" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="38" y="236" font-size="12.5" font-weight="700" fill="var(--primary)">ESTRUCTURAS DE ENTREVISTA (Tipos y Formas)</text>

          <!-- Piramide -->
          <polygon points="105,264 50,378 160,378" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"></polygon>
          <text x="105" y="316" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Cerrada</text>
          <text x="105" y="364" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Abierta</text>
          <text x="105" y="400" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--primary)">PIRÁMIDE</text>

          <!-- Embudo -->
          <polygon points="195,264 305,264 250,378" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"></polygon>
          <text x="250" y="294" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Abierta</text>
          <text x="250" y="344" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Cerrada</text>
          <text x="250" y="400" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--teal)">EMBUDO</text>

          <!-- Rombo -->
          <polygon points="395,260 458,321 395,382 332,321" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="2"></polygon>
          <text x="395" y="302" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Cerrada</text>
          <text x="395" y="325" text-anchor="middle" font-size="11" font-weight="700" fill="var(--violet)">Abierta</text>
          <text x="395" y="350" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Cerrada</text>
          <text x="395" y="400" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--violet)">ROMBO</text>

          <rect x="38" y="418" width="424" height="78" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="52" y="440" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">• Abiertas:</tspan> explayarse / opiniones · <tspan font-weight="700">Cerradas:</tspan> acotadas</text>
          <text x="52" y="459" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">• Bipolar (cerrada):</tspan> sí/no, V/F · <tspan font-weight="700">Sondeo:</tspan> ¿por qué? / ejemplo</text>
          <text x="52" y="478" font-size="11.5" fill="var(--ink-secondary)">También existe la modalidad <tspan font-weight="700">Sin estructura</tspan> y <tspan font-weight="700">Cuestionarios</tspan>.</text>
        </g>

        <!-- Abajo Derecha: Empathy Map -->
        <g class="svg-node" data-node="empathy" tabindex="0" role="button">
          <rect x="498" y="210" width="402" height="302" rx="14" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="516" y="236" font-size="13" font-weight="700" fill="var(--warning)">EMPATHY MAP (7 Preguntas → Dolores y Deseos)</text>

          <rect x="516" y="252" width="366" height="44" rx="8" fill="var(--warning-soft)" stroke="var(--warning)"></rect>
          <text x="699" y="271" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">OBJETIVO: 1. ¿Con quién empatizamos?</text>
          <text x="699" y="287" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">2. ¿Qué necesitan hacer?</text>

          <rect x="516" y="308" width="176" height="58" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="604" y="330" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">3. ¿Qué VEN?</text>
          <text x="604" y="348" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Entorno, pantallas, pares</text>

          <rect x="706" y="308" width="176" height="58" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="794" y="330" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">4. ¿Qué ESCUCHAN?</text>
          <text x="794" y="348" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Jefes, pares, clientes</text>

          <rect x="516" y="376" width="176" height="58" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="604" y="398" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">5. DICEN y 6. HACEN</text>
          <text x="604" y="416" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Actitud y conducta visible</text>

          <rect x="706" y="376" width="176" height="58" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="794" y="398" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">7. PIENSAN / SIENTEN</text>
          <text x="794" y="416" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Miedos, creencias internas</text>

          <rect x="516" y="446" width="176" height="50" rx="8" fill="var(--danger-soft)" stroke="var(--danger)"></rect>
          <text x="604" y="476" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--danger)">DOLORES (Frustración)</text>

          <rect x="706" y="446" width="176" height="50" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="794" y="476" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">DESEOS (Valor)</text>
        </g>
      </svg>`,
      nodes: {
        proceso_ir: {
          title: 'Proceso IR y CMMI Nivel 3',
          badge: 'Ciclo de Requerimientos',
          summary: 'Sistematiza la comprensión de los servicios del sistema desde el Universo de Discurso mediante un esfuerzo colaborativo e interdisciplinario.',
          bullets: [
            'Elicitar: identificar y priorizar fuentes (usuarios = más significativas) y recopilar información.',
            'Modelar: organizar el conocimiento en formatos legibles (DSS, Modelo de Dominio).',
            'Analizar: verificar, validar, resolver omisiones/contradicciones y negociar conflictos.',
            'Gestionar: controlar cambios, impacto y trazabilidad bidireccional durante todo el ciclo.'
          ],
          examTip: 'En CMMI Nivel 3 es donde los procesos de desarrollo de requisitos están bien descriptos y caracterizados.'
        },
        entrevistas: {
          title: 'Entrevistas: Tipos y Estructuras',
          badge: 'Recolección Individual',
          summary: 'Conversación dirigida para relevar cultura, procesos y opiniones; su forma depende del grado de detalle que buscás al abrir y cerrar.',
          bullets: [
            'Pirámide (cerradas -> abiertas): útil cuando el entrevistado necesita entrar en confianza o primero ubicarse.',
            'Embudo (abiertas -> cerradas): permite exploración amplia inicial y luego precisión puntual.',
            'Rombo (cerradas -> abiertas -> cerradas): combina precisión de apertura y cierre con exploración profunda en el medio.',
            'Bipolar = subtipo cerrado (sí/no, V/F); Sondeo = repreguntas de "por qué" o ejemplos.'
          ],
          examTip: 'No confundas Pirámide (empieza angosta/cerrada, abre abajo) con Embudo (empieza ancho/abierto, cierra abajo).'
        },
        empathy: {
          title: 'Empathy Map (7 Preguntas)',
          badge: 'Elicitación Centrada en el Usuario',
          summary: 'Herramienta para clasificar perfiles de usuario e identificar qué les duele y qué desean realmente.',
          bullets: [
            'Objetivo: (1) Con quién se empatiza y (2) Qué necesita hacer.',
            'Contexto observable e interno: (3) Qué ve, (4) Qué dice, (5) Qué hace, (6) Qué escucha, (7) Qué piensa y siente.',
            'Síntesis: clasifica Dolores (frustraciones/obstáculos) y Deseos (resultados esperados).'
          ],
          examTip: 'Las dos primeras preguntas definen el objetivo del mapa; las cinco restantes exploran su experiencia.'
        }
      }
    },

    // =========================================================================
    // 7. UNIDAD 3: CURVA DE COSTO DEL ERROR, DEMANDAS Y V&V
    // =========================================================================
    {
      id: 'u3-errores-vv',
      unit: 3,
      title: 'Curva de Costo del Error, Demandas y V&V',
      subtitle: 'Por qué los defectos de requisitos se propagan y multiplican su costo hasta operación, tipos de demandas y Verificación vs. Validación.',
      kind: 'Explicación gráfica',
      defaultNode: 'curva',
      takeaways: [
        'Cuanto más tarde se detecta un error de requisitos, exponencialmente más caro resulta repararlo (1x → 100x+ en operación).',
        'Las demandas erróneas, inconsistentes y omitidas se propagan desde elicitación al producto si falta V&V.',
        'Verificación = construir correctamente; Validación = construir la cosa correcta.'
      ],
      svg: `<svg viewBox="0 0 920 520" role="img" aria-label="Curva exponencial del costo del error, propagación de demandas y Verificación vs Validación">
        <defs>
          <marker id="arr-u3c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--danger)"></path>
          </marker>
          <marker id="arr-u3c-p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
          </marker>
        </defs>

        <!-- Izquierda: Gráfico de barras / curva exponencial -->
        <g class="svg-node" data-node="curva" tabindex="0" role="button">
          <rect x="20" y="18" width="468" height="296" rx="14" fill="var(--surface-elevated)" stroke="var(--danger)" stroke-width="1.8"></rect>
          <text x="38" y="44" font-size="12.5" font-weight="700" fill="var(--danger)">COSTO RELATIVO DE ERRORES DE REQUISITOS</text>

          <!-- Ejes -->
          <line x1="60" y1="264" x2="462" y2="264" stroke="var(--border-strong)" stroke-width="1.5"></line>
          <line x1="60" y1="68" x2="60" y2="264" stroke="var(--border-strong)" stroke-width="1.5"></line>

          <!-- Barras -->
          <rect x="78" y="250" width="54" height="14" rx="4" fill="var(--success)"></rect>
          <text x="105" y="242" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">1x</text>
          <text x="105" y="284" text-anchor="middle" font-size="11" fill="var(--ink)">Requisitos</text>

          <rect x="152" y="232" width="54" height="32" rx="4" fill="var(--teal)"></rect>
          <text x="179" y="224" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--teal)">3–6x</text>
          <text x="179" y="284" text-anchor="middle" font-size="11" fill="var(--ink)">Diseño</text>

          <rect x="226" y="206" width="54" height="58" rx="4" fill="var(--primary)"></rect>
          <text x="253" y="198" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">10x</text>
          <text x="253" y="284" text-anchor="middle" font-size="11" fill="var(--ink)">Código</text>

          <rect x="300" y="152" width="54" height="112" rx="4" fill="var(--warning)"></rect>
          <text x="327" y="144" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">15–40x</text>
          <text x="327" y="284" text-anchor="middle" font-size="11" fill="var(--ink)">Pruebas</text>

          <rect x="374" y="80" width="62" height="184" rx="4" fill="var(--danger)"></rect>
          <text x="405" y="73" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--danger)">Muy alto</text>
          <text x="405" y="284" text-anchor="middle" font-size="11" font-weight="700" fill="var(--danger)">Operación</text>

          <!-- Curva exponencial -->
          <path d="M 105 246 Q 230 230 327 148 T 405 78" fill="none" stroke="var(--danger)" stroke-width="2.2" stroke-dasharray="5 3"></path>
          <text x="38" y="303" font-size="11" fill="var(--ink-secondary)">En operación implica retirar/parchar: costos altos y reputación.</text>
        </g>

        <!-- Derecha: 4 Demandas y Propagación -->
        <g class="svg-node" data-node="demandas" tabindex="0" role="button">
          <rect x="504" y="18" width="396" height="296" rx="14" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="522" y="44" font-size="13" font-weight="700" fill="var(--violet)">4 TIPOS DE DEMANDAS Y PROPAGACIÓN</text>

          <rect x="522" y="60" width="172" height="58" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="532" y="82" font-size="12" font-weight="700" fill="var(--success)">1. Correctas (Ideal)</text>
          <text x="532" y="100" font-size="11" fill="var(--ink-secondary)">Pide lo que necesita</text>

          <rect x="708" y="60" width="174" height="58" rx="8" fill="var(--danger-soft)" stroke="var(--danger)"></rect>
          <text x="718" y="82" font-size="12" font-weight="700" fill="var(--danger)">2. Erróneas</text>
          <text x="718" y="100" font-size="11" fill="var(--ink-secondary)">Texto fecha vs. calendario</text>

          <rect x="522" y="128" width="172" height="58" rx="8" fill="var(--warning-soft)" stroke="var(--warning)"></rect>
          <text x="532" y="150" font-size="12" font-weight="700" fill="var(--warning)">3. Inconsistentes</text>
          <text x="532" y="168" font-size="11" fill="var(--ink-secondary)">Pide A y B contradictorios</text>

          <rect x="708" y="128" width="174" height="58" rx="8" fill="var(--violet-soft)" stroke="var(--violet)"></rect>
          <text x="718" y="150" font-size="12" font-weight="700" fill="var(--violet)">4. Omitidas</text>
          <text x="718" y="168" font-size="11" fill="var(--ink-secondary)">No dice lo que necesita</text>

          <!-- Flujo de propagación -->
          <rect x="522" y="204" width="360" height="94" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="534" y="226" font-size="12" font-weight="700" fill="var(--ink)">Cadena de Propagación de Errores</text>
          <text x="534" y="246" font-size="11" fill="var(--danger)">Elicitación → Modelo → SRS → Producto con fallas</text>
          <text x="534" y="266" font-size="11" fill="var(--ink-secondary)">Errores: hechos incorrectos, omisiones, inconsistencias,</text>
          <text x="534" y="282" font-size="11" fill="var(--ink-secondary)">ambigüedades y requisitos mal ubicados.</text>
        </g>

        <!-- Abajo: Verificación vs Validación -->
        <g class="svg-node" data-node="vv" tabindex="0" role="button">
          <rect x="20" y="334" width="880" height="168" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
          <text x="40" y="362" font-size="13" font-weight="700" fill="var(--primary)">COMPUERTAS DE CALIDAD: VERIFICACIÓN VS. VALIDACIÓN (Y TRAZABILIDAD CMMI REQM)</text>

          <rect x="40" y="380" width="404" height="104" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="58" y="406" font-size="15" font-weight="700" fill="var(--primary)">VERIFICACIÓN ("Construir correctamente")</text>
          <text x="58" y="428" font-size="12" fill="var(--ink)">• Asegura que el requerimiento esté bien hecho.</text>
          <text x="58" y="447" font-size="12" fill="var(--ink)">• Comprueba formato correcto, completitud, consistencia</text>
          <text x="58" y="465" font-size="12" fill="var(--ink)">  y criterios de aceptación claros (inspecciones, pruebas).</text>

          <rect x="476" y="380" width="404" height="104" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="494" y="406" font-size="15" font-weight="700" fill="var(--success)">VALIDACIÓN ("Construir la cosa correcta")</text>
          <text x="494" y="428" font-size="12" fill="var(--ink)">• Chequea que sea lo que el usuario realmente quiere.</text>
          <text x="494" y="447" font-size="12" fill="var(--ink)">• Asegura calidad de negocio y pertinencia frente al</text>
          <text x="494" y="465" font-size="12" fill="var(--ink)">  Universo de Discurso (con prototipos o usuarios reales).</text>
        </g>
      </svg>`,
      nodes: {
        curva: {
          title: 'Curva Exponencial del Costo de Errores',
          badge: 'Economía de Requerimientos',
          summary: 'Reparar un defecto nacido en requisitos cuesta drásticamente más conforme avanza el ciclo de desarrollo.',
          bullets: [
            'Requisitos (1x) -> Diseño (3-6x) -> Codificación (10x) -> Pruebas (15-40x) -> Operación (costo máximo + daño reputacional).',
            'Muchos errores no se descubren hasta etapas muy posteriores a donde se originaron.',
            'Fundamento directo del principio de bajo costo temprano en SDD (U6).'
          ],
          examTip: 'Si te piden justificar por qué invertir en V&V o prototipos tempranos, citá esta curva exponencial.'
        },
        demandas: {
          title: 'Demandas de Cliente y Propagación',
          badge: 'Fallas de Elicitación',
          summary: 'Lo que el cliente expresa en la elicitación no siempre coincide con su necesidad real del dominio.',
          bullets: [
            'Correctas: lo pedido coincide con lo necesitado.',
            'Erróneas: pide algo inadecuado al dominio (texto de fecha en lugar de calendario).',
            'Inconsistentes: pide requisitos A y B mutuamente excluyentes.',
            'Omitidas: da por obvio algo que no menciona y queda fuera del producto.'
          ],
          examTip: 'Sin análisis y validación, cada demanda defectuosa contamina el modelo, la especificación y el producto final.'
        },
        vv: {
          title: 'Verificación vs. Validación (V&V)',
          badge: 'Regla de Oro',
          summary: 'Dos controles complementarios e insustituibles en la Ingeniería de Requerimientos.',
          bullets: [
            'Verificación: asegura que el requerimiento/sistema se construye correctamente (sin ambigüedad, formato válido, completo, con criterios de aceptación).',
            'Validación: asegura que se construye la cosa correcta según las necesidades reales del usuario.',
            'CMMI REQM exige además trazabilidad bidireccional y detectar inconsistencias entre desarrollo y requisitos.'
          ],
          examTip: 'Diferencia favorita de parciales: un SRS perfecto en formato puede pasar Verificación y aun así fallar Validación.'
        }
      }
    },

    // =========================================================================
    // 8. UNIDAD 3: TAXONOMÍA RF/RNF, DRIVERS Y MATRIZ DE PRIORIZACIÓN
    // =========================================================================
    {
      id: 'u3-reqs-matriz',
      unit: 3,
      title: 'Taxonomía RF/RNF, Drivers y Priorización',
      subtitle: 'Clasificación de requerimientos, drivers arquitectónicos, técnicas de priorización (MoSCoW, RICE, WSJF) y Matriz Impacto vs. Esfuerzo.',
      kind: 'Mapa conceptual',
      defaultNode: 'rf_rnf',
      takeaways: [
        'Los RNF muchas veces son más críticos que los RF porque un fallo en fiabilidad o rendimiento inutiliza todo el sistema.',
        'Los Drivers de Arquitectura son RNF transversales vinculados a objetivos de negocio.',
        'Cuando todo es importante, nada es importante: priorizá primero riesgos críticos y ganancias rápidas.'
      ],
      svg: `<svg viewBox="0 0 920 530" role="img" aria-label="Taxonomía RF y RNF, Drivers de Arquitectura y Matriz Impacto vs Esfuerzo">
        <!-- Izquierda: RF vs RNF y Drivers -->
        <g class="svg-node" data-node="rf_rnf" tabindex="0" role="button">
          <rect x="20" y="18" width="440" height="312" rx="14" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="36" y="44" font-size="13" font-weight="700" fill="var(--violet)">CLASIFICACIÓN DE REQUERIMIENTOS</text>

          <rect x="38" y="60" width="404" height="72" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="50" y="84" font-size="13.5" font-weight="700" fill="var(--primary)">Requerimientos Funcionales (RF)</text>
          <text x="50" y="104" font-size="11" fill="var(--ink-secondary)">Qué DEBE (y NO) hacer: servicios, entradas, salidas, excepciones.</text>
          <text x="50" y="120" font-size="11" fill="var(--ink)">Propiedades clave: <tspan font-weight="700">Completitud</tspan> y <tspan font-weight="700">Consistencia</tspan>.</text>

          <rect x="38" y="144" width="404" height="170" rx="10" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="50" y="168" font-size="13.5" font-weight="700" fill="var(--teal)">Requerimientos No Funcionales (RNF)</text>
          <text x="50" y="187" font-size="11" fill="var(--ink-secondary)">Restricciones y propiedades globales (definen la arquitectura):</text>
          <text x="50" y="210" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Del Producto:</tspan> rapidez, memoria, fiabilidad, portabilidad, usab.</text>
          <text x="50" y="230" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Organizacionales:</tspan> estándares, lenguajes, políticas internas.</text>
          <text x="50" y="250" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Externos:</tspan> leyes, regulación, ética, interoperabilidad.</text>
          <text x="50" y="276" font-size="11" font-weight="700" fill="var(--danger)">Críticos: un sistema que no los cumple queda inutilizable.</text>
          <text x="50" y="294" font-size="11" fill="var(--ink-secondary)">(Ej.: sistema de vuelo no fiable o control en tiempo real lento)</text>
        </g>

        <g class="svg-node" data-node="drivers" tabindex="0" role="button">
          <rect x="20" y="346" width="440" height="164" rx="14" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="36" y="372" font-size="13" font-weight="700" fill="var(--warning)">DRIVERS DE ARQUITECTURA + DOMINIO / SRS</text>
          <text x="36" y="395" font-size="11.5" fill="var(--ink)">RNF transversales a todo el sistema (ligados al negocio):</text>
          <text x="36" y="417" font-size="11" fill="var(--ink-secondary)">• Visibles en ejecución: usabilidad, seguridad, performance.</text>
          <text x="36" y="435" font-size="11" fill="var(--ink-secondary)">• No visibles al usuario: modificabilidad, portabilidad, reusabilidad.</text>
          <text x="36" y="460" font-size="11" fill="var(--ink)"><tspan font-weight="700">Dominio y Ley de Conway:</tspan> evita copiar el organigrama.</text>
          <text x="36" y="477" font-size="11" fill="var(--ink-secondary)"><tspan font-weight="700" fill="var(--ink)">SRS:</tspan> declaración oficial de requisitos de usuario y sistema.</text>
        </g>

        <!-- Derecha: Matriz Impacto vs Esfuerzo + Técnicas -->
        <g class="svg-node" data-node="matriz" tabindex="0" role="button">
          <rect x="478" y="18" width="422" height="312" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="498" y="44" font-size="13" font-weight="700" fill="var(--primary)">MATRIZ DE IMPACTO VS. ESFUERZO</text>

          <!-- Etiquetas ejes -->
          <text x="514" y="114" font-size="11" font-weight="700" fill="var(--ink-secondary)">ALTO</text>
          <text x="514" y="130" font-size="11.5" fill="var(--ink-secondary)">Imp.</text>
          <text x="514" y="232" font-size="11" font-weight="700" fill="var(--ink-secondary)">BAJO</text>
          <text x="514" y="248" font-size="11.5" fill="var(--ink-secondary)">Imp.</text>

          <!-- Cuadrante Superior Izquierdo: Ganancias rápidas -->
          <rect x="556" y="64" width="156" height="108" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="2"></rect>
          <text x="634" y="98" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--success)">Ganancias</text>
          <text x="634" y="116" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--success)">Rápidas</text>
          <text x="634" y="140" text-anchor="middle" font-size="11" fill="var(--ink)">¡Hacer primero!</text>
          <text x="634" y="155" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Alto imp. / Bajo esf.</text>

          <!-- Cuadrante Superior Derecho: Grandes proyectos -->
          <rect x="722" y="64" width="156" height="108" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="800" y="98" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">Grandes</text>
          <text x="800" y="116" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--primary)">Proyectos</text>
          <text x="800" y="140" text-anchor="middle" font-size="11" fill="var(--ink)">Planificar / Slicing</text>
          <text x="800" y="155" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Alto imp. / Alto esf.</text>

          <!-- Cuadrante Inferior Izquierdo: Actividades menores -->
          <rect x="556" y="182" width="156" height="108" rx="10" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.6"></rect>
          <text x="634" y="216" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--warning)">Actividades</text>
          <text x="634" y="234" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--warning)">Menores</text>
          <text x="634" y="258" text-anchor="middle" font-size="11" fill="var(--ink)">Relleno secundario</text>
          <text x="634" y="273" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Bajo imp. / Bajo esf.</text>

          <!-- Cuadrante Inferior Derecho: Tareas ingratas -->
          <rect x="722" y="182" width="156" height="108" rx="10" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="1.6"></rect>
          <text x="800" y="216" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--danger)">Tareas</text>
          <text x="800" y="234" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--danger)">Ingratas</text>
          <text x="800" y="258" text-anchor="middle" font-size="11" fill="var(--ink)">Descartar / Posponer</text>
          <text x="800" y="273" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Bajo imp. / Alto esf.</text>

          <text x="634" y="314" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-secondary)">BAJO ESFUERZO</text>
          <text x="800" y="314" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-secondary)">ALTO ESFUERZO</text>
        </g>

        <g class="svg-node" data-node="tecnicas_prio" tabindex="0" role="button">
          <rect x="478" y="346" width="422" height="164" rx="14" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>
          <text x="494" y="372" font-size="13" font-weight="700" fill="var(--teal)">TÉCNICAS DE PRIORIZACIÓN (Riesgosos Primero)</text>
          <text x="494" y="396" font-size="11" fill="var(--ink)"><tspan font-weight="700">• MoSCoW:</tspan> Must have, Should have, Could have, Won't have.</text>
          <text x="494" y="416" font-size="11" fill="var(--ink)"><tspan font-weight="700">• RICE score:</tspan> Reach · Impact · Confidence / Effort.</text>
          <text x="494" y="436" font-size="11" fill="var(--ink)"><tspan font-weight="700">• WSJF:</tspan> prioriza trabajos cortos de máximo retorno de valor.</text>
          <text x="494" y="456" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Theme Scoring:</tspan> agrupa temas según metas del negocio.</text>
          <text x="494" y="476" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Eisenhower:</tspan> Urgencia vs. Importancia (4 cuadrantes).</text>
        </g>
      </svg>`,
      nodes: {
        rf_rnf: {
          title: 'Requerimientos Funcionales vs. No Funcionales',
          badge: 'Taxonomía',
          summary: 'Los RF declaran qué hace el sistema; los RNF imponen restricciones de calidad sobre todo el sistema y moldean la arquitectura.',
          bullets: [
            'RF: servicios, entradas, salidas, excepciones y lo que NO debe hacer (ideales: completos y consistentes).',
            'RNF del Producto: rendimiento, memoria, fiabilidad, portabilidad, usabilidad.',
            'RNF Organizacionales: estándares de proceso, lenguajes, políticas de entrega.',
            'RNF Externos: legislación, ética, interoperabilidad.'
          ],
          examTip: 'Identificá rápidamente el origen del RNF: ¿viene del comportamiento técnico (Producto), de la empresa (Org.) o de afuera (Externo)?'
        },
        drivers: {
          title: 'Drivers de Arquitectura, Ley de Conway y SRS',
          badge: 'Arquitectura y Negocio',
          summary: 'Los drivers son los RNF que atraviesan todas las funcionalidades; se vinculan con los objetivos del negocio antes que con modas técnicas.',
          bullets: [
            'Visibles: usabilidad, seguridad, performance.',
            'No visibles: modificabilidad, portabilidad, reusabilidad.',
            'El estudio del dominio y el modelo de negocio restringen la arquitectura y evitan la Ley de Conway.',
            'SRS: documento oficial de requisitos de usuario y sistema para los desarrolladores.'
          ],
          examTip: 'Ojo: aunque los drivers impacten en la arquitectura, nacen de objetivos y restricciones del negocio.'
        },
        matriz: {
          title: 'Matriz de Impacto vs. Esfuerzo',
          badge: 'Priorización Visual',
          summary: 'Cruza el impacto en el negocio con el esfuerzo técnico para decidir qué construir primero.',
          bullets: [
            'Alto Impacto + Bajo Esfuerzo = Ganancias rápidas.',
            'Alto Impacto + Alto Esfuerzo = Grandes proyectos.',
            'Bajo Impacto + Bajo Esfuerzo = Actividades menores.',
            'Bajo Impacto + Alto Esfuerzo = Tareas ingratas (descartar o posponer).'
          ],
          examTip: 'Junto a esta matriz, recordá el principio general: atacar los requerimientos más riesgosos primero para probar viabilidad.'
        },
        tecnicas_prio: {
          title: 'Técnicas de Priorización de Requerimientos',
          badge: 'Ordenamiento del Backlog',
          summary: 'Con recursos limitados, ordenamos por riesgo (probabilidad e impacto), cobertura y valor crítico de negocio.',
          bullets: [
            'MoSCoW: Must / Should / Could / Won\'t have.',
            'RICE: alcance (gente), utilidad al usuario, certeza y esfuerzo.',
            'WSJF: maximiza retorno priorizando trabajos cortos de alto valor.',
            'Theme Scoring, votación por puntos, ponderación y Matriz de Eisenhower (urgencia vs. importancia).'
          ],
          examTip: 'Distinguí Eisenhower (Urgencia vs. Importancia) de Impacto vs. Esfuerzo (Valor negocio vs. Costo técnico).'
        }
      }
    },

    // =========================================================================
    // 9. UNIDAD 4: MODELOS, VISTAS Y MODELAR VS DIAGRAMAR
    // =========================================================================
    {
      id: 'u4-modelos-vistas',
      unit: 4,
      title: 'Modelos, Vistas (Viewpoints) y Abstracción',
      subtitle: 'Cómo una misma realidad compleja se abstrae en modelos prescriptivos y se proyecta en vistas específicas según cada stakeholder.',
      kind: 'Explicación gráfica',
      defaultNode: 'modelo',
      takeaways: [
        'Un modelo solo incluye los elementos más relevantes para un objetivo definido y tiene carácter prescriptivo.',
        'Modelar es diferente a diagramar: el diagrama es una notación visual; modelar es abstraer decisiones, reglas y estructura.',
        'Cada stakeholder (cliente, analista, arquitecto, programador) requiere una Vista (Viewpoint) distinta.'
      ],
      svg: `<svg viewBox="0 0 920 500" role="img" aria-label="Modelos prescriptivos y proyección en vistas según stakeholder">
        <defs>
          <marker id="arr-u4m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--warning)"></path>
          </marker>
        </defs>

        <!-- Izquierda: Realidad -->
        <g class="svg-node" data-node="realidad" tabindex="0" role="button">
          <rect x="24" y="110" width="210" height="230" rx="14" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="2" stroke-dasharray="6 4"></rect>
          <text x="129" y="142" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">SISTEMA / REALIDAD</text>
          <text x="129" y="166" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Personas vivas, procesos,</text>
          <text x="129" y="182" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">reglas, excepciones,</text>
          <text x="129" y="198" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">tecnologías y contexto</text>
          <rect x="44" y="218" width="170" height="100" rx="10" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>
          <text x="129" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="var(--warning)">Alta Complejidad</text>
          <text x="129" y="266" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">El problema guía qué</text>
          <text x="129" y="282" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">y cuántos modelos</text>
          <text x="129" y="298" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">conviene construir</text>
        </g>

        <line x1="238" y1="225" x2="292" y2="225" stroke="var(--warning)" stroke-width="2.4" marker-end="url(#arr-u4m)"></line>
        <text x="265" y="212" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warning)">Abstraer</text>

        <!-- Centro: Modelo -->
        <g class="svg-node" data-node="modelo" tabindex="0" role="button">
          <rect x="298" y="80" width="268" height="290" rx="16" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="2.2"></rect>
          <text x="432" y="112" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">MODELO DEL SISTEMA</text>
          <text x="432" y="132" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">Prescriptivo · Objetivo Definido</text>

          <rect x="316" y="150" width="232" height="202" rx="10" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>
          <text x="330" y="174" font-size="12" fill="var(--ink)">✓ Solo elementos más relevantes</text>
          <text x="330" y="196" font-size="12" fill="var(--ink)">✓ Comunica estructura y conducta</text>
          <text x="330" y="218" font-size="12" fill="var(--ink)">✓ Controla la arquitectura</text>
          <text x="330" y="240" font-size="12" fill="var(--ink)">✓ Detecta refactor y reutilización</text>
          <text x="330" y="262" font-size="12" fill="var(--ink)">✓ Analiza riesgos tempranos</text>
          <text x="330" y="284" font-size="12" fill="var(--ink)">✓ Documenta decisiones con</text>
          <text x="342" y="301" font-size="12" fill="var(--ink)">stakeholders</text>
          <text x="330" y="330" font-size="12" font-weight="700" fill="var(--danger)">¡Modelar ≠ Diagramar!</text>
        </g>

        <!-- Flechas hacia Vistas -->
        <line x1="570" y1="130" x2="626" y2="78" stroke="var(--warning)" stroke-width="2" marker-end="url(#arr-u4m)"></line>
        <line x1="570" y1="190" x2="626" y2="176" stroke="var(--warning)" stroke-width="2" marker-end="url(#arr-u4m)"></line>
        <line x1="570" y1="255" x2="626" y2="274" stroke="var(--warning)" stroke-width="2" marker-end="url(#arr-u4m)"></line>
        <line x1="570" y1="315" x2="626" y2="370" stroke="var(--warning)" stroke-width="2" marker-end="url(#arr-u4m)"></line>

        <!-- Derecha: 4 Vistas / Viewpoints -->
        <g class="svg-node" data-node="vistas" tabindex="0" role="button">
          <rect x="632" y="34" width="264" height="82" rx="10" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="648" y="58" font-size="13" font-weight="700" fill="var(--primary)">Vista del Cliente / Negocio</text>
          <text x="648" y="78" font-size="11.5" fill="var(--ink-secondary)">Valor, procesos, alcance y</text>
          <text x="648" y="94" font-size="11.5" fill="var(--ink-secondary)">lista de casos de uso (sin código).</text>

          <rect x="632" y="130" width="264" height="82" rx="10" fill="var(--violet-soft)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="648" y="154" font-size="13" font-weight="700" fill="var(--violet)">Vista del Analista</text>
          <text x="648" y="174" font-size="11.5" fill="var(--ink-secondary)">Modelo de Dominio, entidades,</text>
          <text x="648" y="190" font-size="11.5" fill="var(--ink-secondary)">diagramas de casos de uso y DSS.</text>

          <rect x="632" y="226" width="264" height="82" rx="10" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="1.8"></rect>
          <text x="648" y="250" font-size="13" font-weight="700" fill="var(--teal)">Vista del Arquitecto</text>
          <text x="648" y="270" font-size="11.5" fill="var(--ink-secondary)">Módulos, librerías, servicios,</text>
          <text x="648" y="286" font-size="11.5" fill="var(--ink-secondary)">escalabilidad y mantenibilidad.</text>

          <rect x="632" y="322" width="264" height="82" rx="10" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.8"></rect>
          <text x="648" y="346" font-size="13" font-weight="700" fill="var(--success)">Vista del Programador</text>
          <text x="648" y="366" font-size="11.5" fill="var(--ink-secondary)">Clases, interfaces, contratos</text>
          <text x="648" y="382" font-size="11.5" fill="var(--ink-secondary)">de implementación y detalles técnicos.</text>
        </g>

        <!-- Barra inferior -->
        <g class="svg-node" data-node="modelar_vs_diagramar" tabindex="0" role="button">
          <rect x="24" y="422" width="872" height="62" rx="12" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>
          <text x="44" y="448" font-size="12.5" font-weight="700" fill="var(--ink)">Ejemplo del apunte: Diagrama de Casos de Uso + Lista de Casos de Uso = Dos modelos diferentes del MISMO sistema.</text>
          <text x="44" y="467" font-size="11.5" fill="var(--ink-secondary)">Documentan perspectivas complementarias con precisión variada. No todos los stakeholders necesitan ver los mismos detalles.</text>
        </g>
      </svg>`,
      nodes: {
        realidad: {
          title: 'Sistema Real y Selección de Modelos',
          badge: 'Punto de Partida',
          summary: 'La realidad contiene infinidad de detalles vivos; modelar sin criterio lleva a copias inmanejables.',
          bullets: [
            'Las características y complejidad del problema dictan qué modelos y cuántos hay que crear.',
            'En sistemas más grandes o complejos harán falta más modelos complementarios.'
          ],
          examTip: 'Nunca existe un único modelo universal suficiente para cualquier sistema.'
        },
        modelo: {
          title: 'Modelo: Abstracción Prescriptiva',
          badge: 'Concepto Central U4',
          summary: 'Simplificación deliberada de la realidad construida con un objetivo claro para guiar y prescribir el desarrollo.',
          bullets: [
            'Comunica estructura y comportamiento, facilita conversaciones informadas y documenta decisiones.',
            'Permite controlar la arquitectura (librerías, servicios, escalabilidad, mantenibilidad), refactorizar y analizar riesgos.',
            'Es prescriptivo: establece cómo debe ser/comportarse el sistema, no solo un relato pasivo.'
          ],
          examTip: 'Palabra clave que aparece en exámenes: los modelos son PRESCRIPTIVOS.'
        },
        vistas: {
          title: 'Vistas (Viewpoints) por Stakeholder',
          badge: 'Proyección Selectiva',
          summary: 'Una vista proyecta el modelo desde una perspectiva particular omitiendo entidades irrelevantes para ese actor.',
          bullets: [
            'Al cliente le importan los objetivos y casos de uso de negocio, no las clases internas.',
            'Al programador le interesa la precisión técnica de módulos y clases.',
            'Cada modelo se construye con un viewpoint particular.'
          ],
          examTip: 'Una buena vista oculta deliberadamente ruido que no aporta al rol que la lee.'
        },
        modelar_vs_diagramar: {
          title: 'Modelar es Diferente a Diagramar',
          badge: 'Distinción Clave',
          summary: 'Un modelo puede expresarse en texto (ej. lista de casos de uso) o en gráficos; diagramar sin abstracción ni objetivo no es modelar.',
          bullets: [
            'Modelar = investigar, abstraer conceptos relevantes, reglas y relaciones del dominio.',
            'Diagramar = dibujar cajas y flechas; es solo una forma posible de visualizar un modelo.'
          ],
          examTip: 'Asegurate de dar el ejemplo del apunte: diagrama de CU y lista de CU modelan el mismo sistema desde perspectivas distintas.'
        }
      }
    },

    // =========================================================================
    // 10. UNIDAD 4: PROTOTIPO VS ITERACIÓN UP VS MVP
    // =========================================================================
    {
      id: 'u4-prototipo-mvp',
      unit: 4,
      title: 'Comparativa Gráfica: Prototipo vs. Iteración UP vs. MVP',
      subtitle: 'Tres artefactos con código funcional que suelen confundirse en exámenes, diferenciados por su propósito, destino y relación con el producto final.',
      kind: 'Comparativa visual',
      defaultNode: 'mvp',
      takeaways: [
        'Prototipo = código de prueba desechable para elicitar/validar requerimientos (riesgo: confundirlo con producto final).',
        'Iteración UP = subconjunto real acumulativo del producto final, probado e integrado (aún no en producción).',
        'MVP = software funcional lanzado al usuario real en ciclo Construir-Medir-Aprender hasta lograr Market Fit.'
      ],
      svg: `<svg viewBox="0 0 920 500" role="img" aria-label="Comparativa entre Prototipo, Iteración UP y MVP">
        <defs>
          <marker id="arr-u4p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--ink-secondary)"></path>
          </marker>
        </defs>

        <!-- Carril 1: Prototipo -->
        <g class="svg-node" data-node="prototipo" tabindex="0" role="button">
          <rect x="24" y="22" width="872" height="134" rx="14" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="2"></rect>
          <rect x="24" y="22" width="186" height="134" rx="14" fill="var(--warning-soft)"></rect>
          <text x="117" y="72" text-anchor="middle" font-size="16" font-weight="700" fill="var(--warning)">PROTOTIPO</text>
          <text x="117" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Código de prueba</text>
          <text x="117" y="112" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">(Desechable)</text>

          <rect x="228" y="42" width="204" height="94" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="240" y="66" font-size="12" font-weight="700" fill="var(--ink)">Propósito principal</text>
          <text x="240" y="86" font-size="11.5" fill="var(--ink-secondary)">• Recopilar información</text>
          <text x="240" y="103" font-size="11.5" fill="var(--ink-secondary)">• Reducir incertidumbre</text>
          <text x="240" y="120" font-size="11.5" fill="var(--ink-secondary)">• Elimina supuestos</text>

          <line x1="436" y1="89" x2="464" y2="89" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#arr-u4p)"></line>

          <rect x="468" y="42" width="204" height="94" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="482" y="66" font-size="12" font-weight="700" fill="var(--ink)">Beneficios</text>
          <text x="482" y="86" font-size="11.5" fill="var(--ink-secondary)">• Feedback rápido funcional</text>
          <text x="482" y="103" font-size="11.5" fill="var(--ink-secondary)">• Baja el costo de errores</text>
          <text x="482" y="120" font-size="11.5" fill="var(--ink-secondary)">• Detiene sistemas inviables</text>

          <line x1="676" y1="89" x2="704" y2="89" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#arr-u4p)"></line>

          <rect x="708" y="42" width="170" height="94" rx="10" fill="var(--danger-soft)" stroke="var(--danger)"></rect>
          <text x="722" y="66" font-size="12" font-weight="700" fill="var(--danger)">Riesgo Clave</text>
          <text x="722" y="86" font-size="11.5" fill="var(--ink)">Confundirlo con el</text>
          <text x="722" y="103" font-size="11.5" fill="var(--ink)">producto final.</text>
          <text x="722" y="120" font-size="11" fill="var(--ink-secondary)">Requiere tiempo/costo.</text>
        </g>

        <!-- Carril 2: Iteración UP -->
        <g class="svg-node" data-node="iteracion_up" tabindex="0" role="button">
          <rect x="24" y="176" width="872" height="134" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
          <rect x="24" y="176" width="186" height="134" rx="14" fill="var(--primary-soft)"></rect>
          <text x="117" y="226" text-anchor="middle" font-size="16" font-weight="700" fill="var(--primary)">ITERACIÓN UP</text>
          <text x="117" y="248" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Subconjunto real</text>
          <text x="117" y="266" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">(Acumulativo)</text>

          <rect x="228" y="196" width="204" height="94" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="242" y="220" font-size="12" font-weight="700" fill="var(--ink)">Contenido técnico</text>
          <text x="242" y="240" font-size="11.5" fill="var(--ink-secondary)">• Diseñado e implementado</text>
          <text x="242" y="257" font-size="11.5" fill="var(--ink-secondary)">• Probado, integrado</text>
          <text x="242" y="274" font-size="11.5" fill="var(--ink-secondary)">• Slicing de requerimientos</text>

          <line x1="436" y1="243" x2="464" y2="243" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#arr-u4p)"></line>

          <rect x="468" y="196" width="204" height="94" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="482" y="220" font-size="12" font-weight="700" fill="var(--ink)">Diferencia con Prototipo</text>
          <text x="482" y="240" font-size="11.5" fill="var(--ink-secondary)">• NO se descarta</text>
          <text x="482" y="257" font-size="11.5" fill="var(--ink-secondary)">• Crece incrementalmente</text>
          <text x="482" y="274" font-size="11.5" fill="var(--ink-secondary)">• Retroalimentación temprana</text>

          <line x1="676" y1="243" x2="704" y2="243" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#arr-u4p)"></line>

          <rect x="708" y="196" width="170" height="94" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="722" y="220" font-size="12" font-weight="700" fill="var(--primary)">Estado de Entrega</text>
          <text x="722" y="240" font-size="11.5" fill="var(--ink)">Es parte del producto</text>
          <text x="722" y="257" font-size="11.5" fill="var(--ink)">final, pero aún NO listo</text>
          <text x="722" y="274" font-size="11.5" fill="var(--ink)">para producción masiva.</text>
        </g>

        <!-- Carril 3: MVP -->
        <g class="svg-node" data-node="mvp" tabindex="0" role="button">
          <rect x="24" y="330" width="872" height="148" rx="14" fill="var(--surface-elevated)" stroke="var(--success)" stroke-width="2.2"></rect>
          <rect x="24" y="330" width="186" height="148" rx="14" fill="var(--success-soft)"></rect>
          <text x="117" y="384" text-anchor="middle" font-size="17" font-weight="700" fill="var(--success)">MVP</text>
          <text x="117" y="406" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Producto Mínimo Viable</text>
          <text x="117" y="424" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">(Versión real inicial)</text>

          <rect x="228" y="348" width="204" height="112" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="240" y="372" font-size="12" font-weight="700" fill="var(--ink)">Ciclo Lean</text>
          <text x="240" y="394" font-size="11.5" font-weight="700" fill="var(--success)">Construir→Medir→Aprender</text>
          <text x="240" y="416" font-size="11" fill="var(--ink-secondary)">Mínimo esfuerzo y tiempo</text>
          <text x="240" y="434" font-size="11" fill="var(--ink-secondary)">de desarrollo · Elicitación real</text>

          <line x1="436" y1="404" x2="464" y2="404" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#arr-u4p)"></line>

          <rect x="468" y="348" width="204" height="112" rx="10" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="482" y="372" font-size="12" font-weight="700" fill="var(--ink)">Market Fit</text>
          <text x="482" y="394" font-size="11.5" fill="var(--ink-secondary)">Valida si las características</text>
          <text x="482" y="412" font-size="11.5" fill="var(--ink-secondary)">resuelven un problema real</text>
          <text x="482" y="430" font-size="11.5" fill="var(--ink-secondary)">en el mercado objetivo.</text>

          <line x1="676" y1="404" x2="704" y2="404" stroke="var(--ink-secondary)" stroke-width="2" marker-end="url(#arr-u4p)"></line>

          <rect x="708" y="348" width="170" height="112" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="722" y="372" font-size="12" font-weight="700" fill="var(--success)">Evolución a Producto</text>
          <text x="722" y="394" font-size="11.5" fill="var(--ink)">Pasa a ser producto final</text>
          <text x="722" y="412" font-size="11.5" fill="var(--ink)">cuando hay retención</text>
          <text x="722" y="430" font-size="11.5" fill="var(--ink)">+ Continuous Discovery.</text>
        </g>
      </svg>`,
      nodes: {
        prototipo: {
          title: 'Prototipo (Código de Prueba)',
          badge: 'Validación de Requisitos',
          summary: 'Artefacto funcional pensado para explorar requerimientos, recibir feedback veloz y descartar supuestos sin comprometer la arquitectura definitiva.',
          bullets: [
            'Es código de prueba, NO un subconjunto del producto final.',
            'Ventajas: feedback temprano, disminuye errores costosos, frena sistemas inviables.',
            'Desventajas/Riesgos: cuesta tiempo y dinero, y los interesados pueden creer que ya está terminado.'
          ],
          examTip: 'Nunca respondas que un prototipo evoluciona directo a producción como el MVP o la iteración de UP.'
        },
        iteracion_up: {
          title: 'Iteración UP (Subconjunto del Sistema Final)',
          badge: 'Construcción Acumulativa',
          summary: 'Cada iteración en el Proceso Unificado entrega un incremento real del software diseñado, probado e integrado.',
          bullets: [
            'No es prototipo: el código permanece y se acumula hasta formar el producto completo.',
            'Permite visibilidad de progreso y corrección temprana del diseño o requisitos.',
            'Aún no está lista para producción hasta completar la evolución planeada.'
          ],
          examTip: 'Pregunta típica de U4/U5: ¿en qué se distingue una salida de iteración UP de un prototipo?'
        },
        mvp: {
          title: 'MVP (Producto Mínimo Viable)',
          badge: 'Construir-Medir-Aprender',
          summary: 'No es un prototipo: es software funcional mínimo puesto frente a usuarios reales para medir retención y Market Fit.',
          bullets: [
            'Trabaja iterativa e incrementalmente con el mínimo esfuerzo posible.',
            'Permite elicitar comportamiento real del mercado.',
            'Se consolida como producto final cuando logra retención sostenida, sin abandonar el Continuous Discovery.'
          ],
          examTip: 'Un MVP requiere código funcional en uso; una maqueta sin valor de uso real no es MVP.'
        }
      }
    },

    // =========================================================================
    // 11. UNIDAD 5: GRÁFICO DEL PROCESO UNIFICADO (FASES Y DISCIPLINAS)
    // =========================================================================
    {
      id: 'u5-up-hump',
      unit: 5,
      title: 'Proceso Unificado (UP): Fases, Disciplinas e Iteraciones',
      subtitle: 'El clásico gráfico de esfuerzo por disciplina a lo largo de Inicio, Elaboración, Construcción y Transición, con hitos y slicing.',
      kind: 'Explicación gráfica',
      defaultNode: 'pilares_up',
      takeaways: [
        'UP es iterativo e incremental, dirigido por el riesgo y centrado en la arquitectura (Construir-Retroalimentar-Adaptar).',
        'Inicio (generalmente 1 iteración) evalúa viabilidad; Elaboración resuelve alto riesgo y arquitectura; Construcción desarrolla lo de menor riesgo.',
        'Todas las disciplinas participan a lo largo del ciclo, variando su intensidad según la fase.'
      ],
      svg: `<svg viewBox="0 0 920 520" role="img" aria-label="Gráfico de fases y disciplinas del Proceso Unificado (UP)">
        <!-- Pilares superiores -->
        <g class="svg-node" data-node="pilares_up" tabindex="0" role="button">
          <rect x="20" y="16" width="880" height="72" rx="12" fill="var(--success-soft)" stroke="var(--success)" stroke-width="1.8"></rect>
          <text x="40" y="42" font-size="13.5" font-weight="700" fill="var(--success)">PILARES DEL PROCESO UNIFICADO (UP)</text>
          <text x="40" y="66" font-size="11" fill="var(--ink)">• Iterativo/Incremental (Slicing → código funcional) · Dirigido por Riesgo · Centrado en Arquitectura · Construir-Retroalimentar-Adaptar</text>
        </g>

        <!-- Cuadro del Hump Chart -->
        <rect x="20" y="104" width="880" height="318" rx="14" fill="var(--surface-elevated)" stroke="var(--border-strong)"></rect>

        <!-- Encabezados de Fases -->
        <g class="svg-node" data-node="inicio" tabindex="0" role="button">
          <rect x="196" y="114" width="136" height="296" rx="8" fill="var(--violet-soft)" fill-opacity="0.45" stroke="var(--violet)" stroke-dasharray="4 3"></rect>
          <text x="264" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="var(--violet)">1. INICIO</text>
          <text x="264" y="152" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">1 iteración · Viable?</text>
        </g>

        <g class="svg-node" data-node="elaboracion" tabindex="0" role="button">
          <rect x="342" y="114" width="204" height="296" rx="8" fill="var(--primary-soft)" fill-opacity="0.45" stroke="var(--primary)" stroke-dasharray="4 3"></rect>
          <text x="444" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">2. ELABORACIÓN</text>
          <text x="444" y="152" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Arquitectura + Alto riesgo</text>
        </g>

        <g class="svg-node" data-node="construccion" tabindex="0" role="button">
          <rect x="556" y="114" width="198" height="296" rx="8" fill="var(--teal-soft)" fill-opacity="0.45" stroke="var(--teal)" stroke-dasharray="4 3"></rect>
          <text x="655" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="var(--teal)">3. CONSTRUCCIÓN</text>
          <text x="655" y="152" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">+ Iteraciones · Menor riesgo</text>
        </g>

        <g class="svg-node" data-node="transicion" tabindex="0" role="button">
          <rect x="764" y="114" width="124" height="296" rx="8" fill="var(--warning-soft)" fill-opacity="0.45" stroke="var(--warning)" stroke-dasharray="4 3"></rect>
          <text x="826" y="136" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--warning)">4. TRANSICIÓN</text>
          <text x="826" y="152" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Beta y Producción</text>
        </g>

        <!-- Etiquetas de Disciplinas + Curvas de Esfuerzo -->
        <g class="svg-node" data-node="disciplinas" tabindex="0" role="button">
          <text x="34" y="190" font-size="11.5" font-weight="700" fill="var(--ink)">Modelado Negocio</text>
          <path d="M 196 196 Q 270 162 420 184 T 886 196 L 886 202 L 196 202 Z" fill="var(--violet)" fill-opacity="0.55"></path>

          <text x="34" y="232" font-size="11.5" font-weight="700" fill="var(--ink)">Requerimientos</text>
          <path d="M 196 240 Q 340 198 460 220 T 886 240 L 886 244 L 196 244 Z" fill="var(--primary)" fill-opacity="0.55"></path>

          <text x="34" y="274" font-size="11.5" font-weight="700" fill="var(--ink)">Diseño</text>
          <path d="M 196 282 Q 440 232 560 258 T 886 282 L 886 286 L 196 286 Z" fill="var(--teal)" fill-opacity="0.55"></path>

          <text x="34" y="316" font-size="11.5" font-weight="700" fill="var(--ink)">Implementación</text>
          <path d="M 196 324 Q 560 318 658 272 T 886 322 L 886 326 L 196 326 Z" fill="var(--success)" fill-opacity="0.55"></path>

          <text x="34" y="358" font-size="11.5" font-weight="700" fill="var(--ink)">Pruebas</text>
          <path d="M 196 364 Q 610 356 710 326 T 886 362 L 886 366 L 196 366 Z" fill="var(--warning)" fill-opacity="0.55"></path>

          <text x="34" y="394" font-size="11" fill="var(--ink-secondary)">Gestión y Entorno</text>
          <rect x="196" y="384" width="690" height="12" rx="4" fill="var(--ink-secondary)" fill-opacity="0.28"></rect>
        </g>

        <!-- Hitos y Versiones -->
        <g class="svg-node" data-node="hitos_versiones" tabindex="0" role="button">
          <rect x="20" y="438" width="880" height="66" rx="12" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.6"></rect>
          <text x="40" y="464" font-size="12.5" font-weight="700" fill="var(--primary)">HITOS, VERSIONES Y SLICING</text>
          <text x="40" y="485" font-size="11" fill="var(--ink-secondary)"><tspan font-weight="700" fill="var(--ink)">Hito:</tspan> corte para decidir · <tspan font-weight="700" fill="var(--ink)">Versión:</tspan> incremento funcional · <tspan font-weight="700" fill="var(--ink)">Slicing:</tspan> dividir reqs. para cumplir plazos cortos.</text>
        </g>
      </svg>`,
      nodes: {
        pilares_up: {
          title: 'Pilares del Proceso Unificado (UP)',
          badge: 'Metodología AOO',
          summary: 'Nace como proceso iterativo e incremental centrado en UML y AOO para bajar la incertidumbre con entregas tempranas.',
          bullets: [
            'Cada iteración dura un plazo corto fijo y entrega código funcional (no prototipo).',
            'Dirigido por el riesgo: los requerimientos más complejos y riesgosos se enfrentan primero.',
            'Centrado en la arquitectura: núcleo estructural que conecta todo el sistema.',
            'Ciclo continuo: Construir - Retroalimentar - Adaptar.'
          ],
          examTip: 'Si una pregunta mezcla "prototipo" como salida de iteración de UP, es FALSA.'
        },
        inicio: {
          title: 'Fase 1: Inicio (Inception)',
          badge: '1 Iteración · Viabilidad',
          summary: 'Estudio de viabilidad del negocio, alcance aproximado y estimaciones iniciales.',
          bullets: [
            'Generalmente posee una sola iteración.',
            'Si no es viable, el proyecto termina aquí antes de gastar recursos grandes.',
            'No es una fase para detallar todos los requisitos.'
          ],
          examTip: 'Trampa clásica: pensar que Inicio es la fase donde se especifican el 100% de los requisitos.'
        },
        elaboracion: {
          title: 'Fase 2: Elaboración',
          badge: 'Arquitectura y Alto Riesgo',
          summary: 'Se refina la visión, se construye la arquitectura núcleo y se resuelven los requerimientos más riesgosos.',
          bullets: [
            'Se crea el Modelado de Negocio y se leen/amplían los artefactos de requisitos iniciados en Inicio.',
            'Al resolver los riesgos mayores, las estimaciones de costo y tiempo ganan precisión.'
          ],
          examTip: 'La arquitectura núcleo queda implementada y probada en Elaboración, no recién en Construcción.'
        },
        construccion: {
          title: 'Fase 3: Construcción',
          badge: 'Mayor Cantidad de Iteraciones',
          summary: 'Se completan los requerimientos de menor riesgo y funcionalidades restantes sobre la arquitectura ya probada.',
          bullets: [
            'Concentra el mayor volumen de iteraciones de desarrollo.',
            'Mantiene verificación continua de calidad y slicing.'
          ],
          examTip: 'Construcción ya trabaja con riesgos técnicos controlados gracias a Elaboración.'
        },
        transicion: {
          title: 'Fase 4: Transición',
          badge: 'Beta y Producción',
          summary: 'Pruebas beta con usuarios reales para retroalimentación final y despliegue de la versión productiva.',
          bullets: [
            'Ajustes finales basados en el feedback de los usuarios beta.',
            'Lanzamiento a producción de la versión final acumulada.'
          ],
          examTip: 'En Transición no se descubre la arquitectura: se valida la puesta en marcha y pruebas beta.'
        },
        disciplinas: {
          title: 'Disciplinas de Trabajo en UP',
          badge: 'Actividades Concurrentes',
          summary: 'Las 7 disciplinas (Modelado de Negocio, Análisis de Requerimientos, Diseño, Implementación, Pruebas, Gestión, Entorno) coexisten en las iteraciones.',
          bullets: [
            'Análisis de Requerimientos produce: casos de uso, RNF, glosario, visión y especificación complementaria.',
            'Se inicia en Inicio, se lee/refina en Elaboración y acompaña todo el ciclo.'
          ],
          examTip: 'Las disciplinas no son fases secuenciales: varían su esfuerzo (curvas) pero ocurren iterativamente.'
        },
        hitos_versiones: {
          title: 'Hitos, Versiones y Slicing',
          badge: 'Control de Iteración',
          summary: 'Mecanismos que mantienen acotada la duración de cada iteración y aseguran progreso real.',
          bullets: [
            'Hito: punto de corte al final de una iteración para evaluar y decidir.',
            'Versión: incremento funcional que se suma a las anteriores.',
            'Slicing: dividir requerimientos grandes para entregar siempre código funcional en el tiempo fijo.'
          ],
          examTip: 'El slicing nunca corta horizontalmente dejando solo "base de datos sin probar": cada slice entrega código funcional.'
        }
      }
    },

    // =========================================================================
    // 12. UNIDAD 5: ANATOMÍA DE ARTEFACTOS AOO Y UML
    // =========================================================================
    {
      id: 'u5-artefactos',
      unit: 5,
      title: 'Anatomía Visual de Artefactos AOO, FURPS+ y UML',
      subtitle: 'Relación entre Concepto→Clase, Caso de Uso (Caja Negra), DSS, Modelo de Dominio, FURPS+ e Historias de Usuario.',
      kind: 'Mapa conceptual',
      defaultNode: 'cu',
      takeaways: [
        'Un Caso de Uso es caja negra: define QUÉ hace el sistema (pre/postcondiciones, happy path y extensiones), no su código.',
        'El DSS muestra eventos de actores externos hacia :Sistema; el Modelo de Dominio extrae clases conceptuales mediante frases nominales.',
        'FURPS+ ordena requisitos en UP; las Historias de Usuario (INVEST) son un artefacto ágil externo a UP.'
      ],
      svg: `<svg viewBox="0 0 920 530" role="img" aria-label="Anatomía de artefactos AOO: FURPS+, Caso de Uso, DSS, Modelo de Dominio e Historias de Usuario">
        <defs>
          <marker id="arr-u5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--success)"></path>
          </marker>
        </defs>

        <!-- Arriba Izquierda: Flujo AOO + FURPS+ -->
        <g class="svg-node" data-node="aoo_furps" tabindex="0" role="button">
          <rect x="20" y="16" width="430" height="190" rx="14" fill="var(--surface-elevated)" stroke="var(--success)" stroke-width="1.8"></rect>
          <text x="38" y="42" font-size="12.5" font-weight="700" fill="var(--success)">AOO (CONCEPTO → CLASE) Y CLASIFICACIÓN FURPS+</text>

          <rect x="38" y="56" width="118" height="46" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="97" y="76" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">1. Concepto</text>
          <text x="97" y="92" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">del dominio</text>

          <line x1="158" y1="79" x2="174" y2="79" stroke="var(--success)" stroke-width="2" marker-end="url(#arr-u5a)"></line>

          <rect x="178" y="56" width="122" height="46" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="239" y="76" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">2. Abstraer</text>
          <text x="239" y="92" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Modelar/Analizar</text>

          <line x1="302" y1="79" x2="318" y2="79" stroke="var(--success)" stroke-width="2" marker-end="url(#arr-u5a)"></line>

          <rect x="322" y="56" width="110" height="46" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="377" y="76" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--success)">3. Clase</text>
          <text x="377" y="92" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">(en software)</text>

          <rect x="38" y="114" width="394" height="78" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="48" y="135" font-size="12" font-weight="700" fill="var(--ink)">FURPS+ (Atributos de calidad = U, R, P, S)</text>
          <text x="48" y="154" font-size="11" fill="var(--ink-secondary)"><tspan font-weight="700" fill="var(--ink)">F</tspan>uncional · <tspan font-weight="700" fill="var(--ink)">U</tspan>sabilidad · <tspan font-weight="700" fill="var(--ink)">R</tspan>eliability · <tspan font-weight="700" fill="var(--ink)">P</tspan>erf. · <tspan font-weight="700" fill="var(--ink)">S</tspan>oporte</text>
          <text x="48" y="172" font-size="11" fill="var(--ink-secondary)"><tspan font-weight="700" fill="var(--ink)">+ Adic.:</tspan> implementación, interfaz, op., empaque, legales.</text>
        </g>

        <!-- Arriba Derecha: Caso de Uso -->
        <g class="svg-node" data-node="cu" tabindex="0" role="button">
          <rect x="470" y="16" width="430" height="190" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="484" y="42" font-size="12.5" font-weight="700" fill="var(--primary)">CASOS DE USO (CAJA NEGRA · CONTRATO)</text>
          <text x="484" y="66" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Actor:</tspan> rol humano o sistema externo (lista actor-objetivo).</text>
          <text x="484" y="86" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Precondiciones:</tspan> se asumen ciertas, NO se prueban.</text>
          <text x="484" y="106" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Escenario Principal:</tspan> happy path o flujo básico de éxito.</text>
          <text x="484" y="126" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Extensiones:</tspan> excepciones o flujos alternativos.</text>
          <text x="484" y="146" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Postcondiciones:</tspan> qué se cumple tras el éxito.</text>
          <text x="484" y="166" font-size="11" fill="var(--ink)"><tspan font-weight="700">• Req. especiales:</tspan> RNF del CU · <tspan font-weight="700">Esp. compl.:</tspan> resto RNF.</text>
          <text x="484" y="188" font-size="11" font-weight="700" fill="var(--primary)">Formato breve, informal o completo · Define QUÉ, nunca CÓMO.</text>
        </g>

        <!-- Abajo Izquierda: DSS -->
        <g class="svg-node" data-node="dss" tabindex="0" role="button">
          <rect x="20" y="224" width="430" height="170" rx="14" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>
          <text x="34" y="250" font-size="12.5" font-weight="700" fill="var(--teal)">DIAGRAMA DE SECUENCIA DE SISTEMA (DSS)</text>

          <!-- Actor y :Sistema -->
          <rect x="76" y="264" width="90" height="30" rx="6" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="121" y="284" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">:Actor</text>
          <line x1="121" y1="294" x2="121" y2="368" stroke="var(--border-strong)" stroke-dasharray="4 3" stroke-width="1.6"></line>

          <rect x="275" y="264" width="128" height="30" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="339" y="284" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">:Sistema (Caja)</text>
          <line x1="339" y1="294" x2="339" y2="368" stroke="var(--border-strong)" stroke-dasharray="4 3" stroke-width="1.6"></line>

          <line x1="124" y1="318" x2="333" y2="318" stroke="var(--success)" stroke-width="2" marker-end="url(#arr-u5a)"></line>
          <text x="230" y="311" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">eventoExterno(datos)</text>

          <line x1="336" y1="350" x2="127" y2="350" stroke="var(--ink-secondary)" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arr-u5a)"></line>
          <text x="230" y="343" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">respuesta / confirmación</text>

          <text x="34" y="382" font-size="11" fill="var(--ink-secondary)">Eventos externos del happy path y alternativos (sin clases internas).</text>
        </g>

        <!-- Abajo Derecha: Modelo de Dominio -->
        <g class="svg-node" data-node="dominio" tabindex="0" role="button">
          <rect x="470" y="224" width="430" height="170" rx="14" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="484" y="250" font-size="12.5" font-weight="700" fill="var(--violet)">MODELO DE DOMINIO (Clases Conceptuales ≠ Diseño)</text>

          <rect x="492" y="268" width="126" height="68" rx="6" fill="var(--surface)" stroke="var(--violet)" stroke-width="1.6"></rect>
          <text x="555" y="286" text-anchor="middle" font-size="12" font-weight="700" fill="var(--violet)">Venta</text>
          <line x1="492" y1="294" x2="618" y2="294" stroke="var(--border-strong)"></line>
          <text x="502" y="312" font-size="11" fill="var(--ink-secondary)">fecha, hora, total</text>
          <text x="502" y="328" font-size="11" fill="var(--ink-secondary)">(sin métodos)</text>

          <line x1="620" y1="302" x2="736" y2="302" stroke="var(--violet)" stroke-width="1.8"></line>
          <text x="678" y="294" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">contiene →</text>

          <rect x="740" y="268" width="136" height="68" rx="6" fill="var(--surface)" stroke="var(--violet)" stroke-width="1.6"></rect>
          <text x="808" y="286" text-anchor="middle" font-size="12" font-weight="700" fill="var(--violet)">Artículo</text>
          <line x1="740" y1="294" x2="876" y2="294" stroke="var(--border-strong)"></line>
          <text x="750" y="312" font-size="11" fill="var(--ink-secondary)">código, descripción</text>
          <text x="750" y="328" font-size="11" fill="var(--ink-secondary)">precio</text>

          <text x="484" y="360" font-size="11" fill="var(--ink-secondary)">Descubrimiento: lista de categorías y frases nominales de los CU.</text>
          <text x="484" y="378" font-size="11" fill="var(--ink-secondary)">Admite herencia, clases asociativas, agregación y composición.</text>
        </g>

        <!-- Barra inferior: Visión, Glosario e Historias de Usuario -->
        <g class="svg-node" data-node="historias_vision" tabindex="0" role="button">
          <rect x="20" y="410" width="880" height="102" rx="14" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="38" y="436" font-size="12.5" font-weight="700" fill="var(--warning)">VISIÓN DE NEGOCIO, GLOSARIO E HISTORIAS DE USUARIO (Artefacto Ágil NO UP)</text>
          <text x="38" y="458" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">• Visión:</tspan> objetivos/restricciones de alto nivel · <tspan font-weight="700">Glosario:</tspan> términos y diccionario de datos para lenguaje común.</text>
          <text x="38" y="478" font-size="11.5" fill="var(--ink)"><tspan font-weight="700">• Historia de Usuario:</tspan> "Como &lt;rol&gt;, quiero &lt;acción&gt; para &lt;razón de valor&gt;" · Criterios <tspan font-weight="700" fill="var(--warning)">INVEST:</tspan> Independiente, Negociable,</text>
          <text x="50" y="495" font-size="11.5" fill="var(--ink-secondary)">Valiosa, Estimable, Atómica y Testeable (puede llevar criterios de aceptación o mockups).</text>
        </g>
      </svg>`,
      nodes: {
        aoo_furps: {
          title: 'AOO (Concepto -> Clase) y FURPS+',
          badge: 'Fundamentos AOO',
          summary: 'AOO transforma conceptos reales del dominio en responsabilidades de software; FURPS+ ordena funcional y calidad.',
          bullets: [
            'Un concepto del dominio NO es igual a una clase: primero se abstrae y analiza.',
            'Omitir un objeto clave en el análisis tiene un costo altísimo.',
            'FURPS+: Funcional, Usabilidad, Reliability, Performance, Soporte + adicionales (implementación, interfaz, operaciones, empaquetamiento, legales).'
          ],
          examTip: 'Si te piden enumerar solo los "atributos de calidad" en FURPS+, son U, R, P y S.'
        },
        cu: {
          title: 'Casos de Uso (Caja Negra)',
          badge: 'Requerimientos Funcionales UP',
          summary: 'Contrato textual en lenguaje natural que describe interacciones entre actores y sistema sin detalles de diseño.',
          bullets: [
            'Se descubren con la lista actor-objetivo.',
            'Precondiciones: se asumen ciertas antes de iniciar y no se prueban dentro del CU.',
            'Escenario principal (happy path) + Extensiones (excepciones y flujos alternativos) + Postcondiciones.',
            'Requisitos especiales guardan los RNF ligados al CU; lo general va a Especificación Complementaria.'
          ],
          examTip: 'Recordá la trampa: un Caso de Uso NO es POO por sí mismo, pero se usa en UP para especificar qué debe hacer el sistema.'
        },
        dss: {
          title: 'Diagrama de Secuencia de Sistema (DSS)',
          badge: 'Caja Negra en Tiempo',
          summary: 'Muestra los eventos externos que los actores envían al sistema y su orden temporal, tratando al sistema como una única caja negra.',
          bullets: [
            'Se hace para el escenario principal de éxito y para los escenarios alternativos complejos.',
            'No muestra llamadas internas entre objetos de código (eso es diseño posterior).'
          ],
          examTip: 'La línea de vida derecha del DSS representa al :Sistema entero como caja negra.'
        },
        dominio: {
          title: 'Modelo de Dominio',
          badge: 'Clases Conceptuales',
          summary: 'Descompone el problema en entidades conceptuales significativas, atributos importantes y asociaciones que explican el porqué de la relación.',
          bullets: [
            'No es un diagrama de clases de software (carece de métodos de implementación).',
            'Se descubre mediante lista de categorías o extrayendo frases nominales (sustantivos) de los casos de uso.',
            'Soporta herencia, clases asociativas, agregación y composición.'
          ],
          examTip: 'Distinción obligatoria de examen: Modelo de Dominio (análisis del problema) ≠ Diagrama de Clases de Diseño (solución).'
        },
        historias_vision: {
          title: 'Visión, Glosario e Historias de Usuario (INVEST)',
          badge: 'Artefactos Complementarios y Ágiles',
          summary: 'La Visión y el Glosario alinean al equipo en UP; las Historias de Usuario simplifican requisitos en entornos ágiles.',
          bullets: [
            'Visión: objetivos, problemas e involucrados para tomar decisiones.',
            'Glosario: lenguaje común y diccionario de datos.',
            'Historias de Usuario (no UP): quién, qué y para qué; deben ser independientes, negociables, valiosas, estimables, atómicas y testeables.'
          ],
          examTip: 'Aclaralo si te lo preguntan: las Historias de Usuario y los diagramas UML se integran en proyectos ágiles, pero HU es un artefacto no UP.'
        }
      }
    },

    // =========================================================================
    // 13. UNIDAD 6: ENFOQUES SDD VS VIBE-CODING
    // =========================================================================
    {
      id: 'u6-enfoques',
      unit: 6,
      title: 'Comparativa Gráfica de Enfoques SDD vs. Vibe-Coding',
      subtitle: 'Contraste entre improvisar con IA (vibe-coding) y los tres modelos evolutivos de Spec-Driven Development: Spec-First, Spec-Anchored y Spec-as-Source.',
      kind: 'Comparativa visual',
      defaultNode: 'spec_anchored',
      takeaways: [
        'Como la IA no es determinista, sin SPEC (vibe-coding) asume cosas ambiguas y multiplica errores sin trazabilidad.',
        'Spec-First descarta la spec tras generar el código (sin trazabilidad futura); Spec-Anchored evoluciona ambos a la par.',
        'En Spec-as-Source solo evoluciona la spec: ante cambios, el código afectado se descarta y se regenera.'
      ],
      svg: `<svg viewBox="0 0 920 510" role="img" aria-label="Comparativa de Vibe-coding y los tres enfoques SDD: Spec-First, Spec-Anchored y Spec-as-Source">
        <defs>
          <marker id="arr-u6e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
          </marker>
          <marker id="arr-u6e-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--danger)"></path>
          </marker>
        </defs>

        <!-- Carril 0: Vibe-Coding (Antipatrón) -->
        <g class="svg-node" data-node="vibe" tabindex="0" role="button">
          <rect x="22" y="18" width="876" height="96" rx="14" fill="var(--danger-soft)" stroke="var(--danger)" stroke-width="1.8"></rect>
          <text x="42" y="44" font-size="14" font-weight="700" fill="var(--danger)">ANTIPATRÓN: VIBE-CODING (Sin especificación · IA no determinista)</text>
          <rect x="42" y="58" width="170" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--danger)"></rect>
          <text x="127" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Prompt efímero</text>
          <line x1="216" y1="78" x2="256" y2="78" stroke="var(--danger)" stroke-width="2" marker-end="url(#arr-u6e-r)"></line>
          <rect x="260" y="58" width="220" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--danger)"></rect>
          <text x="370" y="83" text-anchor="middle" font-size="12" fill="var(--ink)">IA asume supuestos erróneos</text>
          <line x1="484" y1="78" x2="524" y2="78" stroke="var(--danger)" stroke-width="2" marker-end="url(#arr-u6e-r)"></line>
          <rect x="528" y="58" width="350" height="40" rx="8" fill="var(--surface-elevated)" stroke="var(--danger)"></rect>
          <text x="703" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="var(--danger)">Sin registro ni trazabilidad · Errores costosos</text>
        </g>

        <!-- Carril 1: Spec-First -->
        <g class="svg-node" data-node="spec_first" tabindex="0" role="button">
          <rect x="22" y="132" width="876" height="110" rx="14" fill="var(--surface-elevated)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="42" y="158" font-size="14" font-weight="700" fill="var(--warning)">1. SPEC-FIRST (Especificación inicial descartable)</text>

          <rect x="42" y="174" width="166" height="50" rx="8" fill="var(--warning-soft)" stroke="var(--warning)"></rect>
          <text x="125" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">1. Definir SPEC</text>
          <text x="125" y="213" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">del feature</text>

          <line x1="212" y1="199" x2="246" y2="199" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6e)"></line>

          <rect x="250" y="174" width="176" height="50" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="338" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">2. Generar Código</text>
          <text x="338" y="213" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">y descartar la SPEC</text>

          <line x1="430" y1="199" x2="464" y2="199" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6e)"></line>

          <rect x="468" y="174" width="210" height="50" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="573" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">3. Solo evoluciona Código</text>
          <text x="573" y="213" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Req. nuevo = nueva spec</text>

          <rect x="694" y="174" width="184" height="50" rx="8" fill="var(--danger-soft)" stroke="var(--danger)"></rect>
          <text x="786" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--danger)">Sin trazabilidad continua</text>
          <text x="786" y="213" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Riesgo de desincronización</text>
        </g>

        <!-- Carril 2: Spec-Anchored -->
        <g class="svg-node" data-node="spec_anchored" tabindex="0" role="button">
          <rect x="22" y="258" width="876" height="110" rx="14" fill="var(--surface-elevated)" stroke="var(--primary)" stroke-width="2"></rect>
          <text x="42" y="284" font-size="14" font-weight="700" fill="var(--primary)">2. SPEC-ANCHORED (Evolución sincronizada SPEC ⇄ Código)</text>

          <rect x="42" y="300" width="196" height="50" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="140" y="322" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">SPEC siempre vigente</text>
          <text x="140" y="339" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Fuente de verdad viva</text>

          <line x1="242" y1="325" x2="282" y2="325" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6e)"></line>

          <rect x="286" y="300" width="290" height="50" rx="8" fill="var(--teal-soft)" stroke="var(--teal)"></rect>
          <text x="431" y="322" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Modifican SPEC y Código A LA PAR</text>
          <text x="431" y="339" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Especifico ↔ Implemento en sincronía</text>

          <line x1="580" y1="325" x2="620" y2="325" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6e)"></line>

          <rect x="624" y="300" width="254" height="50" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="751" y="322" text-anchor="middle" font-size="12" font-weight="700" fill="var(--success)">Trazabilidad permanente</text>
          <text x="751" y="339" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">V&amp;V continua sobre spec y código</text>
        </g>

        <!-- Carril 3: Spec-as-Source -->
        <g class="svg-node" data-node="spec_source" tabindex="0" role="button">
          <rect x="22" y="384" width="876" height="110" rx="14" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="2"></rect>
          <text x="42" y="410" font-size="14" font-weight="700" fill="var(--violet)">3. SPEC-AS-SOURCE (Única fuente evolutiva: se regenera el código)</text>

          <rect x="42" y="426" width="220" height="50" rx="8" fill="var(--violet-soft)" stroke="var(--violet)"></rect>
          <text x="152" y="448" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Solo evoluciona la SPEC</text>
          <text x="152" y="465" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Fuente única absoluta</text>

          <line x1="266" y1="451" x2="306" y2="451" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6e)"></line>

          <rect x="310" y="426" width="294" height="50" rx="8" fill="var(--surface)" stroke="var(--violet)"></rect>
          <text x="457" y="448" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Si cambia un requisito: se descarta</text>
          <text x="457" y="465" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">el código afectado y se regenera de nuevo</text>

          <line x1="608" y1="451" x2="648" y2="451" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6e)"></line>

          <rect x="652" y="426" width="226" height="50" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="765" y="448" text-anchor="middle" font-size="12" font-weight="700" fill="var(--success)">Cero deriva código/spec</text>
          <text x="765" y="465" text-anchor="middle" font-size="11" fill="var(--ink-secondary)">Útil como instancia inicial</text>
        </g>
      </svg>`,
      nodes: {
        vibe: {
          title: 'Vibe-Coding y el No-Determinismo de la IA',
          badge: 'Por qué nace SDD',
          summary: 'Con la IA, el cuello de botella ya no es escribir código sino definir con exactitud QUÉ construir.',
          bullets: [
            'La IA no es determinista: ante una misma orden puede entregar resultados distintos.',
            'En vibe-coding no hay registro de cambios ni trazabilidad; ante huecos en la spec, la IA inventa supuestos erróneos.',
            'Si la especificación es deficiente, la automatización será deficiente.'
          ],
          examTip: 'Siempre justificá SDD mencionando que la IA no es determinista y que el cuello de botella pasó al QUÉ.'
        },
        spec_first: {
          title: 'Enfoque Spec-First',
          badge: 'Modo 1 de SDD',
          summary: 'Se define un feature con una spec, se genera el código y luego la spec se descarta.',
          bullets: [
            'Solo evoluciona el código después de la generación inicial.',
            'Si cambia el requerimiento hay que generar especificaciones nuevas.',
            'Limitación: se pierde trazabilidad continua.'
          ],
          examTip: 'Spec-First sirve para arrancar rápido un feature, pero no mantiene una fuente de verdad viva.'
        },
        spec_anchored: {
          title: 'Enfoque Spec-Anchored',
          badge: 'Modo 2 de SDD',
          summary: 'La especificación siempre permanece y evoluciona sincronizada a la par que el código.',
          bullets: [
            'Cambiar un requisito implica actualizar tanto la SPEC como el código asociado.',
            'Garantiza trazabilidad continua y verificación/validación permanente.'
          ],
          examTip: 'Clave para recordar: Spec-Anchored = evolucionan SPEC y código en paralelo.'
        },
        spec_source: {
          title: 'Enfoque Spec-as-Source',
          badge: 'Modo 3 de SDD',
          summary: 'La especificación es la única pieza evolutiva: el código se considera un derivado descartable y regenerable.',
          bullets: [
            'Si cambia un requerimiento, se actualiza la spec, se descarta el código referente a él y se vuelve a generar.',
            'Evita que el código diverja de la documentación.',
            'El apunte señala que podría servir especialmente como instancia inicial.'
          ],
          examTip: 'Contrastá: en Spec-First se descarta la SPEC; en Spec-as-Source se descarta el CÓDIGO afectado.'
        }
      }
    },

    // =========================================================================
    // 14. UNIDAD 6: WORKFLOW SDD Y ANATOMÍA DE UNA SPEC
    // =========================================================================
    {
      id: 'u6-workflow',
      unit: 6,
      title: 'Workflow SDD (Human-in-the-loop) y Anatomía de una SPEC',
      subtitle: 'Pipeline de 3 fases con compuertas de validación humana, DoR, comparación frente a Prompt/PRD/Diseño y criterios de calidad.',
      kind: 'Explicación gráfica',
      defaultNode: 'workflow',
      takeaways: [
        'Entre requisitos, diseño y tareas hay puertas Human-in-the-loop junto a checklists DoR para aplicar el principio de bajo costo temprano.',
        'Una SPEC debe ser Estructurada, Verificable y Evolutiva, actuando como Fuente de Verdad para el agente de IA.',
        'Smart Kid Principle + EARS + Casos de borde + Gherkin + IDs únicos evitan ambigüedad sin caer en sobre-especificación.'
      ],
      svg: `<svg viewBox="0 0 920 530" role="img" aria-label="Workflow SDD de 3 fases, Human in the loop, SPEC vs Prompt PRD Diseño y criterios de calidad">
        <defs>
          <marker id="arr-u6w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)"></path>
          </marker>
        </defs>

        <!-- Franja Superior: Workflow 3 fases + Human-in-the-loop -->
        <g class="svg-node" data-node="workflow" tabindex="0" role="button">
          <rect x="20" y="16" width="880" height="172" rx="14" fill="var(--surface)" stroke="var(--primary)" stroke-width="1.8"></rect>
          <text x="38" y="40" font-size="12.5" font-weight="700" fill="var(--primary)">WORKFLOW SDD EN 3 FASES CON COMPUERTAS HUMAN-IN-THE-LOOP</text>

          <rect x="38" y="56" width="208" height="78" rx="10" fill="var(--violet-soft)" stroke="var(--violet)"></rect>
          <text x="142" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="var(--violet)">FASE 1: ESTRUCTURAR</text>
          <text x="142" y="100" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Desde una idea inicial se</text>
          <text x="142" y="116" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">diseña un plan (brainstorm)</text>

          <!-- Compuerta 1 -->
          <line x1="250" y1="95" x2="274" y2="95" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6w)"></line>
          <rect x="278" y="66" width="68" height="58" rx="8" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="312" y="88" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warning)">HUMAN</text>
          <text x="312" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warning)">GATE</text>
          <text x="312" y="117" text-anchor="middle" font-size="11" fill="var(--ink)">V&amp;V</text>
          <line x1="350" y1="95" x2="374" y2="95" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6w)"></line>

          <rect x="378" y="56" width="218" height="78" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="487" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">FASE 2: ESCRIBIR SPEC</text>
          <text x="487" y="100" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Requerimientos, diseño y tareas</text>
          <text x="487" y="116" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Checklist DoR antes de construir</text>

          <!-- Compuerta 2 -->
          <line x1="600" y1="95" x2="624" y2="95" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6w)"></line>
          <rect x="628" y="66" width="68" height="58" rx="8" fill="var(--warning-soft)" stroke="var(--warning)" stroke-width="1.8"></rect>
          <text x="662" y="88" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warning)">HUMAN</text>
          <text x="662" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warning)">DoR</text>
          <text x="662" y="117" text-anchor="middle" font-size="11" fill="var(--ink)">V&amp;V</text>
          <line x1="700" y1="95" x2="724" y2="95" stroke="var(--primary)" stroke-width="2" marker-end="url(#arr-u6w)"></line>

          <rect x="728" y="56" width="154" height="78" rx="10" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="805" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="var(--success)">FASE 3: CREAR</text>
          <text x="805" y="100" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">Implementación</text>
          <text x="805" y="116" text-anchor="middle" font-size="11.5" fill="var(--ink-secondary)">y evaluación</text>

          <text x="460" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--danger)">Principio de Bajo Costo Temprano: DoR (ej. que figuren todos los datos) frena errores antes de automatizar.</text>
        </g>

        <!-- Abajo Izquierda: SPEC vs Prompt vs PRD vs Diseño -->
        <g class="svg-node" data-node="comparativa_docs" tabindex="0" role="button">
          <rect x="20" y="206" width="440" height="304" rx="14" fill="var(--surface-elevated)" stroke="var(--teal)" stroke-width="1.8"></rect>
          <text x="36" y="232" font-size="12" font-weight="700" fill="var(--teal)">SPEC (FUENTE DE VERDAD) VS. OTROS DOCS.</text>

          <rect x="38" y="248" width="404" height="62" rx="8" fill="var(--success-soft)" stroke="var(--success)"></rect>
          <text x="50" y="270" font-size="12" font-weight="700" fill="var(--success)">SPEC (Markdown para agentes IA · Fuente de verdad)</text>
          <text x="50" y="290" font-size="11" fill="var(--ink)">Estructurada + Verificable + Evolutiva · Código es consecuencia.</text>

          <rect x="38" y="320" width="404" height="52" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="50" y="342" font-size="12" font-weight="700" fill="var(--danger)">Prompt (NO es fuente de verdad)</text>
          <text x="50" y="359" font-size="11" fill="var(--ink-secondary)">Dura una interacción de segundos; se olvida y caduca.</text>

          <rect x="38" y="382" width="404" height="52" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="50" y="404" font-size="12" font-weight="700" fill="var(--warning)">PRD (Parcialmente fuente de verdad)</text>
          <text x="50" y="421" font-size="11" fill="var(--ink-secondary)">Define el qué en 1 release; no evoluciona con el código.</text>

          <rect x="38" y="444" width="404" height="52" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="50" y="466" font-size="12" font-weight="700" fill="var(--ink)">Documento de Diseño (Explica el CÓMO)</text>
          <text x="50" y="483" font-size="11" fill="var(--ink-secondary)">Detalla implementación (el cómo); sin trazabilidad del qué.</text>
        </g>

        <!-- Abajo Derecha: 6 Pilares de una Buena SPEC -->
        <g class="svg-node" data-node="calidad_spec" tabindex="0" role="button">
          <rect x="478" y="206" width="422" height="304" rx="14" fill="var(--surface-elevated)" stroke="var(--violet)" stroke-width="1.8"></rect>
          <text x="494" y="232" font-size="12" font-weight="700" fill="var(--violet)">6 PILARES DE UNA SPEC (Sin sobre-especificar)</text>

          <rect x="496" y="248" width="386" height="58" rx="8" fill="var(--violet-soft)" stroke="var(--violet)"></rect>
          <text x="508" y="269" font-size="12" font-weight="700" fill="var(--violet)">1. Smart Kid Principle</text>
          <text x="508" y="287" font-size="11" fill="var(--ink)">Alguien sin contexto previo la entiende: Qué hacer, Qué NO</text>
          <text x="508" y="300" font-size="11" fill="var(--ink-secondary)">hacer (fuera de alcance), sin redundancias y con ejemplos.</text>

          <rect x="496" y="316" width="186" height="56" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="508" y="338" font-size="12" font-weight="700" fill="var(--ink)">2. Sintaxis EARS</text>
          <text x="508" y="356" font-size="11" fill="var(--ink-secondary)">Reduce ambigüedad</text>

          <rect x="696" y="316" width="186" height="56" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="708" y="338" font-size="12" font-weight="700" fill="var(--ink)">3. Casos de Borde</text>
          <text x="708" y="356" font-size="11" fill="var(--ink-secondary)">No solo el happy path</text>

          <rect x="496" y="382" width="186" height="56" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="508" y="404" font-size="12" font-weight="700" fill="var(--ink)">4. Gherkin / Criterios</text>
          <text x="508" y="422" font-size="11" fill="var(--ink-secondary)">Dado - Cuando - Entonces</text>

          <rect x="696" y="382" width="186" height="56" rx="8" fill="var(--surface)" stroke="var(--border-strong)"></rect>
          <text x="708" y="404" font-size="12" font-weight="700" fill="var(--ink)">5. IDs Únicos</text>
          <text x="708" y="422" font-size="11" fill="var(--ink-secondary)">Trazabilidad Req ↔ Test</text>

          <rect x="496" y="448" width="386" height="48" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"></rect>
          <text x="689" y="477" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--primary)">6. Definir el QUÉ → CÓMO automatizado y correcto</text>
        </g>
      </svg>`,
      nodes: {
        workflow: {
          title: 'Workflow SDD, Human-in-the-loop y DoR',
          badge: 'Proceso de 3 Fases',
          summary: 'Estructura el trabajo asistido por IA intercalando validación humana obligatoria antes de cada salto hacia el código.',
          bullets: [
            'Fase 1: Dar estructura al trabajo (plan desde la idea).',
            'Fase 2: Escritura de la spec (requerimientos, diseño y tareas) con compuertas Human-in-the-loop y checklist DoR (ej. que figuren todos los datos a manejar).',
            'Fase 3: Construcción y verificación.',
            'Se apoya en el principio de bajo costo temprano de U3.'
          ],
          examTip: 'El agente de IA no se auto-aprueba: el Human-in-the-loop valida cada actividad (req, diseño, tareas).'
        },
        comparativa_docs: {
          title: 'SPEC vs. Prompt, PRD y Documento de Diseño',
          badge: 'Fuente de Verdad',
          summary: 'La SPEC debe ser estructurada, verificable y evolutiva para gobernar el desarrollo con IA sin perder sincronización.',
          bullets: [
            'SPEC: redactada para agentes (ej. .md), vigente y trazable; el código es consecuencia suya.',
            'Prompt: efímero, dura segundos y el agente lo olvida.',
            'PRD: para stakeholders en una sola release, no evoluciona a la par del código.',
            'Documento de Diseño: describe implementación (el cómo) sin trazabilidad de requerimientos.'
          ],
          examTip: 'Pregunta clásica de U6: comparar SPEC vs. Prompt vs. PRD vs. Diseño.'
        },
        calidad_spec: {
          title: 'Atributos y Reglas de una Buena SPEC',
          badge: 'Smart Kid, EARS, Gherkin',
          summary: 'Cierra los espacios donde un agente no determinista podría adivinar mal, evitando al mismo tiempo sobre-especificar.',
          bullets: [
            'Smart Kid Principle: entendible sin contexto previo, qué hacer y qué NO hacer (fuera de alcance), con ejemplos y sin redundancia.',
            'EARS: sintaxis para eliminar ambigüedades.',
            'Casos de borde: evitar redactar solo el happy path.',
            'Criterios de aceptación / Gherkin (Dado-Cuando-Entonces) e IDs únicos por work item.'
          ],
          examTip: 'Mencioná siempre ambos límites: ni ambigüedad que cause supuestos erróneos, ni sobre-especificación innecesaria.'
        }
      }
    }
  ];
})(window);
