(function (global) {
  'use strict';

  global.ADS_EXAM_PREP_DATA = {
    // =========================================================================
    // 1. CINCO EJES DE ESTUDIO PARA PARCIALES Y FINALES
    // =========================================================================
    guides: [
      {
        id: 'g1-tgs',
        num: 1,
        title: 'Sistemas, Entradas/Recursos, 4 Principios Automatizados y Clasificación TGS',
        subtitle: 'Todo lo necesario para responder sobre entradas vs. recursos, principios de sistemas automatizados, crecimiento sistémico y clasificación TGS de 5 criterios.',
        units: 'Unidad 1',
        coversQuestions: ['ex1-1', 'ex1-6', 'ex3-2', 'ex3-3'],
        sections: [
          {
            heading: '1.1 Entradas vs. Recursos dentro de un sistema',
            body: 'En un examen es común confundir lo que entra al sistema para transformarse (Entradas) con los medios que el sistema necesita para poder operar y mantenerse (Recursos). Ambos provienen del ambiente o están dentro de la frontera, pero cumplen roles distintos.',
            bullets: [
              'Entradas: son los insumos, datos, pedidos, señales o materiales que llegan desde el entorno para atravesar el proceso de conversión y convertirse en salidas útiles.',
              'Recursos: son el soporte interno (personas, hardware, software, dinero, tiempo, energía e infraestructura) que ejecuta la conversión y mantiene vivo al sistema.',
              'Ejemplo real (Sistema de Ventas de un supermercado): las Entradas son el código de barras leído, la cantidad y el pago del cliente; las Salidas son el ticket fiscal y el stock actualizado; los Recursos son la cajera, el lector láser, la computadora, el software POS y la energía eléctrica.'
            ]
          },
          {
            heading: '1.2 Los 4 principios generales de los sistemas automatizados',
            body: 'El apunte enumera cuatro principios que explican cómo se comportan los sistemas informatizados y automatizados frente al cambio y al paso del tiempo. En examen te suelen pedir nombrarlos, dar un ejemplo real de cada uno y justificar por qué encaja.',
            table: {
              headers: ['Principio', 'Ejemplo concreto', 'Justificación de examen'],
              rows: [
                [
                  '1. Entre más especializado sea el sistema, menos capaz es de adaptarse a los cambios',
                  'Un sistema de liquidación de impuestos programado con alícuotas y reglas rígidas únicamente para monotributo de Argentina en 2024.',
                  'Al estar optimizado y atado a una sola regla fija, un cambio impositivo o la suma de un nuevo régimen obliga a reescribir lógica entera porque no tiene flexibilidad.'
                ],
                [
                  '2. Cuanto mayor sea el sistema, mayor es el número de sus recursos para su mantenimiento',
                  'Un ERP corporativo con facturación, logística, nómina, AFIP y tienda web frente a una planilla local de un kiosco.',
                  'Al crecer la cantidad de módulos, interfaces, usuarios y datos, se requieren más servidores, presupuesto, soporte técnico, pruebas de regresión y equipo de mantenimiento.'
                ],
                [
                  '3. Los sistemas siempre forman parte de un sistema mayor, y siempre se dividen en subsistemas',
                  'El módulo de Pagos de una app médica (subsistema) integra el sistema de Turnos, que a su vez opera dentro del suprasistema Salud / Entes bancarios.',
                  'Demuestra la jerarquía recursiva de la TGS: ninguna pieza de software vive aislada; depende de reglas del suprasistema y delega funciones en subsistemas internos.'
                ],
                [
                  '4. Los sistemas crecen',
                  'WhatsApp o un sistema universitario (SIU): nació solo para consultar notas/mensajería básica y fue sumando pagos, actas digitales, notificaciones y apps móviles.',
                  'Al usarse en el entorno real, los usuarios descubren nuevas necesidades, cambian normativas y aumenta el volumen de datos, empujando una expansión continua del sistema.'
                ]
              ]
            },
            callout: 'Clave cuando te piden explicar "Los sistemas crecen": conectalo con que los requisitos evolucionan al interactuar con el sistema real y con el principio 2 (más crecimiento = más mantenimiento y necesidad de buena arquitectura).'
          },
          {
            heading: '1.3 Cómo clasificar cualquier sistema según los 5 criterios de la TGS',
            body: 'El apunte establece exactamente cinco ejes de clasificación. En el parcial nunca alcanza con tirar las palabras sueltas: siempre justificá en una frase cada criterio.',
            table: {
              headers: ['Criterio TGS', 'Opciones', 'Sistema de Telefonía (Justificación)', 'Sistema Respiratorio (Justificación)'],
              rows: [
                [
                  '1. Constitución',
                  'Físico (tangible) o Abstracto (conceptual)',
                  'Físico (principalmente): antenas, cables de fibra óptica, centrales, servidores y teléfonos tangibles (complementados por software/protocolos abstractos).',
                  'Físico (biológico): órganos tangibles (nariz, tráquea, bronquios, pulmones, alvéolos, diafragma) e intercambio material de gases O₂ y CO₂.'
                ],
                [
                  '2. Relación con el entorno',
                  'Abierto o Cerrado',
                  'Abierto: intercambia continuamente señales de voz/datos, energía eléctrica y demandas de tráfico con usuarios, operadores y normativas del entorno.',
                  'Abierto: intercambia materia y energía con el ambiente de forma vital (inhala aire con O₂ del exterior y exhala CO₂ y vapor).'
                ],
                [
                  '3. Origen',
                  'Natural o Artificial',
                  'Artificial: diseñado, construido y mantenido por el ser humano con tecnología de telecomunicaciones.',
                  'Natural: formado por evolución biológica en los seres vivos sin intervención artificial.'
                ],
                [
                  '4. Variables',
                  'Discreto o Continuo',
                  'Discreto (en conmutación digital moderna): opera por paquetes discretos y estados finitos de llamada (marcando, conectada, finalizada), aunque la onda física sea continua.',
                  'Continuo: el flujo de aire, el intercambio gaseoso alveolar y las presiones parciales varían de manera ininterrumpida en el tiempo.'
                ],
                [
                  '5. Previsibilidad',
                  'Determinístico o Probabilístico',
                  'Probabilístico: la demanda simultánea de llamadas, congestión de red, interferencias o caída de nodos no son 100% predecibles con certeza.',
                  'Probabilístico: la frecuencia respiratoria y capacidad de absorción cambian de modo variable según ejercicio, estrés, clima o estado de salud.'
                ]
              ]
            }
          }
        ]
      },
      {
        id: 'g2-enfoque',
        num: 2,
        title: 'Enfoque Sistémico, Ingeniería de Software, Análisis y Fases de Requerimientos',
        subtitle: 'Cómo se conectan la TGS aplicada (Enfoque Sistémico), los objetivos del Análisis y el rol de la Ingeniería de Requerimientos en cada ciclo de vida.',
        units: 'Unidades 1, 2 y 3',
        coversQuestions: ['ex1-2', 'ex1-3', 'ex2-4', 'ex3-1'],
        sections: [
          {
            heading: '2.1 Relación entre Enfoque de Sistemas e Ingeniería de Software',
            body: 'El Enfoque de Sistemas es la aplicación práctica de la TGS para abordar problemas complejos sin aislar sus partes. La Ingeniería de Software adopta exactamente esa misma lógica para construir software de calidad mediante el modelo 3P+A (Proyecto, Proceso, Producto + Arquitectura):',
            bullets: [
              '1. Formulación del problema (Enfoque Sistémico) ↔ Análisis / Product Discovery (Ing. de Software): entender el problema multicausal en el Espacio del Problema (el QUÉ), delimitar alcance, usuarios y restricciones antes de programar.',
              '2. Identificación y diseño de soluciones ↔ Diseño e Implementación / Product Delivery: construir el Espacio de la Solución (el CÓMO) eligiendo arquitectura y componentes que respondan al todo sin romper el sistema.',
              '3. Controlar resultados ↔ Validación, Pruebas, Despliegue y Retroalimentación: medir si la solución entregada logra Product-Market Fit y ajustar iterativamente frente a cambios del entorno.'
            ]
          },
          {
            heading: '2.2 Qué es el Análisis de Sistemas y cuáles son sus objetivos',
            body: 'Analizar un sistema consiste en investigar el dominio del problema (Universo de Discurso) y abstraer las necesidades reales de los usuarios y del negocio para convertirlas en requerimientos precisos de qué debe hacer el sistema, manteniéndose siempre en Caja Negra (sin atarse al diseño interno ni a tecnología).',
            bullets: [
              'Comprender el problema de raíz (análisis multicausal) e identificar qué subsistemas y actores del entorno interactúan.',
              'Definir claramente el Espacio del Problema (el QUÉ) separado del Espacio de la Solución (el CÓMO), manteniendo la documentación vigente aunque cambie la tecnología.',
              'Evitar suposiciones prematuras y prevenir construir el producto equivocado (validando necesidades con usuarios mediante research y prototipos).',
              'Especificar requisitos completos, consistentes, claros y verificables para reducir la entropía y detectar defectos temprano cuando corregirlos cuesta 1x y no 100x+ en operación.'
            ]
          },
          {
            heading: '2.3 Relación entre Ciclo de Vida del Software e Ingeniería de Requerimientos',
            body: 'El ciclo de vida marca la secuencia general de etapas desde que nace la necesidad hasta que el software opera y evoluciona; la Ingeniería de Requerimientos (Elicitar, Modelar, Analizar y Gestionar) es la disciplina que alimenta y controla esa columna vertebral:',
            bullets: [
              'En ciclos secuenciales (Cascada): la IR se concentra casi toda al inicio; si los requerimientos quedan incompletos o cambian tarde, el costo de volver atrás se dispara.',
              'En ciclos cíclicos o iterativos (The Box, UP, Ágil/Lean): la IR no muere en la etapa 1; su actividad Gestionar es transversal para incorporar feedback real, refinar prioridades y actualizar la especificación.',
              'La calidad de la IR define si las fases posteriores de diseño y código construyen la cosa correcta (Validación) y correctamente (Verificación).'
            ]
          },
          {
            heading: '2.4 Fases del ciclo de vida donde el trabajo se centra en los requerimientos',
            table: {
              headers: ['Modelo de Ciclo de Vida', 'Fases centradas en requerimientos', 'Qué ocurre allí según el apunte'],
              rows: [
                [
                  'Cascada',
                  '1. Requerimientos y 2. Análisis',
                  'Se relevan, formalizan y congelan las necesidades del usuario antes de pasar al diseño técnico.'
                ],
                [
                  'The Box (7 etapas)',
                  '1. Problemas/Objetivos, 2. Req. humanos y 3. Necesidades del sistema',
                  'En la etapa 2 se elicita con usuarios; en la etapa 3 se agrega verdadero valor filtrando si los pedidos realmente sirven al Problem Space.'
                ],
                [
                  'Ciclo de Producto Lean',
                  '1. Business Outcome, 2. Discover y 3. Validate',
                  'Discovery liviano asumiendo necesidades e hipótesis, validadas rápido con MVPs antes de invertir fuerte en Build.'
                ],
                [
                  'Doble Diamante',
                  '1. Descubrir (diverge) y 2. Definir (converge)',
                  'Todo el primer diamante explora el universo del problema hasta definir exactamente qué resolver.'
                ],
                [
                  'Proceso Unificado (UP)',
                  'Disciplina de Requerimientos: Inicio (arranque) y Elaboración (pico máximo)',
                  'En Inicio se establece el alcance y visión aproximada (~1 iteración); en Elaboración se concentra el análisis de requisitos críticos de alto riesgo junto a la arquitectura núcleo.'
                ]
              ]
            }
          }
        ]
      },
      {
        id: 'g3-reqs',
        num: 3,
        title: 'Elementos Funcionales, RF "Completo", RNF y Modelo FURPS+',
        subtitle: 'Cómo definir y ejemplificar RF y RNF, dominar las 6 letras de FURPS+ y armar la ficha para que un Requerimiento Funcional esté completo.',
        units: 'Unidades 3, 5 y 6',
        coversQuestions: ['ex1-4', 'ex1-5', 'ex2-3', 'ex3-4'],
        sections: [
          {
            heading: '3.1 Elementos funcionales (Requerimientos Funcionales)',
            body: 'Los elementos o requerimientos funcionales son las declaraciones de los servicios, operaciones y comportamientos concretos que el sistema DEBE brindar (o explícitamente NO debe hacer) frente a determinadas entradas y situaciones del actor. Deben describir el QUÉ en Caja Negra y cumplir completitud y consistencia.',
            bullets: [
              'Ejemplo de aplicación elegida: Plataforma de Turnos Médicos.',
              '1) Reservar Turno: dado un paciente autenticado, un médico y una franja libre, el sistema registra la reserva y bloquea ese horario.',
              '2) Cancelar Turno y Liberar Agenda: el paciente puede cancelar un turno confirmado con al menos 24 hs de anticipación y el horario vuelve a quedar disponible.',
              '3) Emitir Recordatorio Automático: 24 horas antes del turno, el sistema genera y envía una notificación de confirmación al paciente.'
            ]
          },
          {
            heading: '3.2 Requerimientos No Funcionales (3 categorías + ejemplos medibles)',
            body: 'Son restricciones y atributos globales de calidad sobre los servicios del sistema. Condicionan la arquitectura (Drivers de arquitectura) y, si fallan, pueden volver inutilizable todo el software aunque cumpla sus funciones:',
            bullets: [
              'Del producto (rendimiento, fiabilidad, portabilidad, usabilidad): "Las búsquedas de disponibilidad de turnos deben responder en menos de 1,5 segundos para 500 usuarios simultáneos."',
              'Organizacionales (estándares internos, políticas de entrega/tecnología): "El sistema debe integrarse con el directorio corporativo de empleados y seguir las políticas de auditoría trimestral de la clínica."',
              'Externos (legislación, ética, interoperabilidad externa): "Toda historia clínica debe cumplir la Ley de Protección de Datos Personales (cifrado en tránsito y reposo, y prohibición de borrado físico)."',
              'Tip de examen: evitá decir "que sea rápido o seguro" (eso es ambiguo). Siempre poné un umbral o norma verificable.'
            ]
          },
          {
            heading: '3.3 Modelo de requerimientos FURPS+ (Proceso Unificado)',
            body: 'Clasificación estándar usada en UP para no omitir ni funciones ni atributos globales de calidad ni restricciones técnicas:',
            table: {
              headers: ['Letra', 'Categoría', 'Qué agrupa y ejemplo breve'],
              rows: [
                ['F', 'Funcional', 'Características, capacidades y seguridad operativa (ej. registrar venta, validar permiso).'],
                ['U', 'Usabilidad ★', 'Atributo de calidad: factores humanos, facilidad de aprendizaje, ayuda, accesibilidad y documentación de usuario.'],
                ['R', 'Reliability (Fiabilidad) ★', 'Atributo de calidad: disponibilidad, tolerancia y frecuencia de fallos, recuperabilidad ante caídas.'],
                ['P', 'Performance (Rendimiento) ★', 'Atributo de calidad: tiempos de respuesta, velocidad de procesamiento, precisión y uso de memoria/CPU.'],
                ['S', 'Soporte (Soportabilidad) ★', 'Atributo de calidad: adaptabilidad, facilidad de mantenimiento, configurabilidad y escalabilidad futura.'],
                ['+', 'Adicionales', 'Restricciones que no caen arriba: requisitos de implementación, interfaces externas de HW/SW, operación, empaquetamiento y legales.']
              ]
            },
            callout: 'Regla clave de U5: U, R, P y S (Usabilidad, Fiabilidad, Rendimiento y Soporte) conforman los atributos de calidad del sistema.'
          },
          {
            heading: '3.4 Qué documentar para considerar "COMPLETO" a un Requerimiento Funcional',
            body: 'Si definís el proceso de desarrollo, un RF NO puede ser solo una oración vaga ("El usuario paga"). Para considerarlo completo, sin ambigüedades (DoR) y listo para diseñar/probar (sin meter diseño técnico del CÓMO), se debe documentar:',
            bullets: [
              '1. Identificador único (ID) y origen/trazabilidad (con qué necesidad de negocio o actor se vincula).',
              '2. Descripción precisa del QUÉ (idealmente con estructura tipo EARS para eliminar ambigüedad del lenguaje natural).',
              '3. Actor(es) involucrados y alcance explícito (qué hace y qué NO hace — Smart Kid Principle).',
              '4. Entradas necesarias, datos manipulados y salidas esperadas (con tipos/formatos de negocio, no columnas SQL).',
              '5. Precondiciones y Postcondiciones del estado del sistema.',
              '6. Flujo principal (happy path) y excepciones / casos de borde (ej. qué pasa si falla el pago o no hay cupo).',
              '7. Reglas de negocio y Requerimientos No Funcionales aplicables (ej. tiempo de respuesta o seguridad en esa operación).',
              '8. Criterios de aceptación verificables (ej. Gherkin Dado–Cuando–Entonces) y aprobación/validación con el usuario (DoR / Human Gate).'
            ]
          }
        ]
      },
      {
        id: 'g4-modelado',
        num: 4,
        title: 'Modelado, Interacción Ambiente–Sistema, Casos de Uso e Inicio de UP',
        subtitle: 'Ventajas de modelar vs. improvisar, herramientas de frontera, formatos de Caso de Uso completo y objetivo decisivo de Inception en UP.',
        units: 'Unidades 4 y 5',
        coversQuestions: ['ex1-7', 'ex2-1', 'ex2-2', 'ex2-5', 'ex3-5'],
        sections: [
          {
            heading: '4.1 Importancia del modelado (Ejemplo: hacerlo vs. no hacerlo)',
            body: 'Modelar ≠ Diagramar: un modelo es una abstracción prescriptiva creada con un objetivo claro para comunicar estructura/comportamiento, proyectar Vistas según cada stakeholder, controlar la arquitectura y detectar omisiones antes de programar.',
            bullets: [
              'Escenario ejemplo: Sistema de Préstamos para una Biblioteca Universitaria.',
              'SIN MODELAR: el equipo salta directo a programar una entidad única "Libro" con un campo boolean "prestado". Al ponerlo en uso, la biblioteca tiene 5 ejemplares físicos del mismo libro y no puede saber qué copia salió ni cuál está dañada; hay que rehacer tablas, pantallas y lógica en etapas tardías (costo 10x–40x).',
              'MODELANDO ANTES: con un Modelo de Dominio y Casos de Uso se abstrae tempranamente la diferencia entre Obra/Título y Ejemplar físico en una pizarra a costo 1x; el bibliotecario lo valida en 10 minutos y el equipo programa sobre seguro.'
            ]
          },
          {
            heading: '4.2 Herramientas de análisis para modelar la interacción Ambiente ↔ Sistema',
            body: 'Para capturar cómo actores o sistemas externos del ambiente interactúan con nuestro sistema tratado como Caja Negra, el análisis utiliza:',
            bullets: [
              'Diagrama y Especificación de Casos de Uso (+ Lista Actor–Objetivo): delimita gráficamente el borde del sistema, coloca a los actores en el ambiente exterior y vincula cada actor con los servicios que inicia o asiste.',
              'Diagrama de Secuencia de Sistema (DSS): modela en orden temporal los eventos que los actores externos envían al :Sistema como caja negra y las respuestas que el sistema devuelve al ambiente.',
              'Diagrama de Contexto (DFD Nivel 0): representa al sistema completo como una única burbuja central recibiendo entradas y enviando salidas hacia las entidades externas del ambiente.',
              'Prototipos de interfaz / interacción y Empathy Map: permiten mostrar flujos concretos a usuarios para validar qué esperan del intercambio con el sistema antes de construirlo.'
            ]
          },
          {
            heading: '4.3 ¿Qué representan los Casos de Uso para el Análisis de Sistemas?',
            body: 'En el Análisis de Sistemas representan la formalización funcional de los requerimientos del usuario como contratos de comportamiento en Caja Negra. Describen qué valor le entrega el sistema a un actor para alcanzar un objetivo concreto, sirviendo de lenguaje común entre cliente y equipo, base para extraer clases conceptuales (Modelo de Dominio), planificar iteraciones en UP (Slicing) y derivar pruebas de aceptación.',
            bullets: [
              'Se apoyan en frases nominales y flujos para alimentar el Modelo de Dominio y el DSS.',
              'Describen responsabilidades externas, nunca clases internas, algoritmos ni consultas a base de datos.'
            ]
          },
          {
            heading: '4.4 Formatos de un Caso de Uso Completo (Estructura y Columnas)',
            body: 'Un Caso de Uso completo (o "vestido") incluye encabezado contractual (ID, Nombre, Actor primario, Interesados, Precondiciones, Postcondiciones), Escenario Principal de Éxito, Extensiones/Flujos Alternativos y Requisitos Especiales. Para redactar los pasos del escenario existen formatos principales:',
            table: {
              headers: ['Criterio de formato', 'Variante A', 'Variante B'],
              rows: [
                [
                  'Por estructura tabular del flujo',
                  'Formato de 1 columna (Narrativo secuencial): pasos numerados 1, 2, 3... donde cada oración indica quién realiza la acción ("1. El Cajero ingresa el DNI. 2. El Sistema valida..."). Compacto y ágil.',
                  'Formato de 2 columnas (Actor | Sistema): tabla que separa a la izquierda las acciones del Actor y a la derecha las respuestas del Sistema. Exige rigor visual en la frontera Caja Negra.'
                ],
                [
                  'Por nivel de abstracción (AOO)',
                  'Estilo Esencial (recomendado en análisis): redactado por intención de negocio sin atarse a botones, pantallas ni mouse ("El actor identifica al cliente").',
                  'Estilo Concreto (evitar en análisis): describe clics, menús y widgets de interfaz ("El usuario hace clic en el botón verde Guardar").'
                ],
                [
                  'Por grado de detalle en UP',
                  'Breve / Informal: resumen corto para descubrimiento temprano.',
                  'Completo (Vestido): incluye pre/postcondiciones, todas las extensiones y requisitos especiales.'
                ]
              ]
            }
          },
          {
            heading: '4.5 Fase de Inicio (Inception) del Proceso Unificado (UP) y su decisión clave',
            body: 'Inicio es la primera fase de UP. Es corta (habitualmente 1 sola iteración) y NO busca especificar el 100% de los requerimientos en detalle.',
            bullets: [
              'Qué se espera lograr: estudiar la viabilidad económica/técnica/operativa del proyecto, definir una visión aproximada del producto, delinear el caso de negocio, acotar el alcance general (actores y casos de uso principales), identificar riesgos críticos y armar estimaciones preliminares.',
              'DECISIÓN MÁS IMPORTANTE AL CERRAR INICIO (Hito Objetivos del Ciclo de Vida): decidir si el proyecto es viable y conviene continuar invirtiendo hacia la fase de Elaboración (Go / Continuar), o si debe cancelarse o reencauzarse de inmediato (No-Go) antes de gastar grandes recursos.'
            ],
            callout: 'Error típico de parcial: responder que en Inicio se relevan y cierran todos los requerimientos. Falso: eso es Cascada; en UP los requisitos críticos se detallan recién en Elaboración junto con la arquitectura núcleo.'
          }
        ]
      },
      {
        id: 'g5-calidad',
        num: 5,
        title: 'CMMI en el Análisis de Sistemas y Calidad de Proceso vs. Producto',
        subtitle: 'Para qué sirve CMMI al analizar requerimientos, las prácticas específicas de REQM/RD/PP y cómo garantizar la calidad del proceso.',
        units: 'Unidades 2 y 3',
        coversQuestions: ['ex1-8', 'ex1-9'],
        sections: [
          {
            heading: '5.1 ¿Para qué usar el modelo CMMI en el análisis de sistemas?',
            body: 'CMMI (Capability Maturity Model Integration) define un marco estructurado de buenas prácticas para saber QUÉ habría que hacer en cada área de proceso (estableciendo Metas Específicas y Prácticas Específicas). En análisis evita depender del azar o de improvisaciones heroicas, ordenando cómo se relevan, acuerdan, cambian y rastrean los requisitos (especialmente en las áreas REQM · Gestión de Requerimientos, RD · Desarrollo de Requerimientos y PP · Planificación de Proyectos).',
            bullets: [
              'Práctica 1 — Comprender los requerimientos (REQM): acordar significado común y criterios claros de qué requiere el cliente antes de comprometerse a construirlo.',
              'Práctica 2 — Negociar y validar requerimientos con los usuarios (REQM/RD): resolver conflictos entre fuentes de información y confirmar que lo pedido resuelve el problema real.',
              'Práctica 3 — Gestionar cambios y evaluar su impacto (REQM): cuando cambia un requisito, analizar qué otros requisitos, costos y plazos afecta antes de aprobarlo y actualizar los artefactos.',
              'Práctica 4 — Mantener trazabilidad bidireccional (REQM): poder navegar desde la necesidad del usuario hasta casos de uso/código/pruebas, y volver desde cualquier prueba al requisito que la originó.',
              'Práctica 5 — Identificar inconsistencias entre el desarrollo y los requerimientos (REQM) + Estimar y comprometer el plan (PP SG1–SG3): detectar desvíos temprano y asegurar acuerdos realistas con cliente y equipo.'
            ]
          },
          {
            heading: '5.2 ¿Qué es la Calidad de Proceso y cómo podemos garantizarla?',
            body: 'La calidad de proceso evalúa en qué condiciones, orden metodológico y disciplina de trabajo se desarrolla el software (tareas ejecutadas, revisiones, gestión de cambios y estándares seguidos), a diferencia de la calidad del producto que mide el resultado final mediante verificación y testing.',
            bullets: [
              'Regla de oro del apunte: un proceso deficiente garantiza un producto deficiente; sin embargo, un buen proceso NO garantiza por sí solo un buen producto sin pruebas y verificación exhaustiva.',
              'Cómo garantizarla (4 pilares):',
              '1) Adoptar modelos y estándares reconocidos como guía de trabajo (CMMI, normas ISO).',
              '2) Estandarizar y describir los procesos y criterios de calidad antes de avanzar (checklists como Definition of Ready / DoR y compuertas Human-in-the-loop).',
              '3) Aplicar Verificación y Validación (V&V), inspecciones tempranas y gestión formal de cambios y trazabilidad durante todo el ciclo.',
              '4) Medir métricas y registrar lecciones aprendidas de iteraciones previas para ajustar estimaciones, roles y calendarios.'
            ]
          }
        ]
      }
    ],

    // =========================================================================
    // 2. LAS 19 PREGUNTAS REALES DE EXAMEN (CON RÚBRICA Y RESPUESTA MODELO)
    // =========================================================================
    questions: [
      // --- SET 1 (9 preguntas) ---
      {
        id: 'ex1-1',
        examSet: 1,
        code: 'P1 · Set 1',
        guideId: 'g1-tgs',
        topic: 'U1 · Principios de Sistemas Automatizados',
        prompt: '1- Identifique los principios generales para los sistemas automatizados. Para cada uno dé un ejemplo y justifique su elección.',
        rubric: [
          'Nombré los 4 principios exactos de los sistemas automatizados.',
          'Di un ejemplo concreto de software/sistema para cada uno de los 4 principios.',
          'Justifiqué claramente por qué cada ejemplo cumple ese principio.'
        ],
        answerLead: 'Los cuatro principios generales para los sistemas automatizados son:',
        answerPoints: [
          '1) Entre más especializado sea el sistema, menos capaz es de adaptarse a los cambios. Ejemplo: un bot automatizado programado estrictamente para leer facturas PDF de un único proveedor con coordenadas fijas. Justificación: si ese proveedor cambia dos centímetros el diseño de su PDF o se incorpora un nuevo proveedor, el sistema deja de funcionar y exige reprogramación porque su lógica hiperespecializada no tolera variaciones.',
          '2) Cuanto mayor sea el sistema, mayor es el número de sus recursos para su mantenimiento. Ejemplo: un ERP bancario nacional frente a una app simple de agenda de un consultorio. Justificación: al tener decenas de subsistemas, millones de registros e integraciones críticas, necesita equipos dedicados, servidores de prueba, monitoreo continuo y mayor presupuesto de mantenimiento.',
          '3) Los sistemas siempre forman parte de un sistema mayor, y siempre se dividen en subsistemas. Ejemplo: el subsistema de Autenticación forma parte de una plataforma de Homebanking, que a su vez opera dentro del suprasistema financiero regulado por el Banco Central. Justificación: muestra la estructura jerárquica de la TGS donde cada sistema recibe restricciones del entorno mayor y coordina partes internas.',
          '4) Los sistemas crecen. Ejemplo: una plataforma académica universitaria que nació solo para inscribir alumnos a exámenes y hoy incluye aulas virtuales, emisión de certificados digitales, app móvil y analítica. Justificación: al entrar en contacto real con usuarios y nuevas normativas, aparecen necesidades nuevas que expanden continuamente el alcance y tamaño del sistema.'
        ],
        answerExample: 'Tip de redacción: presentalos numerados 1 a 4 con la fórmula "Principio → Ejemplo → Justificación" para facilitar la corrección.',
        pitfall: 'No los confundas con las 3 premisas generales de la TGS (sistemas dentro de sistemas, abiertos, funciones dependen de estructura).'
      },
      {
        id: 'ex1-2',
        examSet: 1,
        code: 'P2 · Set 1',
        guideId: 'g2-enfoque',
        topic: 'U1 + U2 · Enfoque Sistémico e Ingeniería de Software',
        prompt: '2- Explique la relación entre la metodología del enfoque de sistemas y la ingeniería de software.',
        rubric: [
          'Expliqué el Enfoque Sistémico como aplicación práctica de la TGS (no aislar las partes).',
          'Mencioné las 3 etapas del enfoque sistémico (Formulación, Soluciones, Control) y su paralelo en Ing. de Software (Análisis, Diseño, Operaciones).',
          'Conecté con la separación Problem Space (QUÉ) vs. Solution Space (CÓMO) y 3P+A / retroalimentación.'
        ],
        answerLead: 'El enfoque de sistemas aplica la TGS considerando cualquier organización o software como un todo interrelacionado con su entorno, y la Ingeniería de Software materializa exactamente esa perspectiva en la construcción de software:',
        answerPoints: [
          '1. Formulación del problema (Enfoque Sistémico) ↔ Análisis / Product Discovery (Ing. de Software): se investiga el problema multicausal en el Espacio del Problema para definir el QUÉ construir, comprendiendo actores, reglas y restricciones antes de diseñar código.',
          '2. Identificación y diseño de soluciones ↔ Diseño e Implementación / Product Delivery: se trabaja el Espacio de la Solución (CÓMO), definiendo una Arquitectura capaz de soportar los componentes e interacciones del sistema.',
          '3. Controlar resultados ↔ Validación, Testing, Operaciones y Retroalimentación: mediante ciclos iterativos (UP, Lean, 3P+A) se evalúa si la solución logra Product-Market Fit y se ajustan las entradas según cambie el entorno.'
        ],
        answerExample: 'Igual que la TGS advierte no analizar partes sueltas porque el todo supera la suma de las partes (totalismo), la Ingeniería de Software evita programar pantallas aisladas sin entender el sistema organizacional completo.',
        pitfall: 'Evitar reducir la Ingeniería de Software solo a "programar": dejá explícito cómo traduce cada etapa del enfoque sistémico.'
      },
      {
        id: 'ex1-3',
        examSet: 1,
        code: 'P3 · Set 1',
        guideId: 'g2-enfoque',
        topic: 'U1 + U2 + U3 · Análisis de Sistemas',
        prompt: '3- Qué es el análisis de sistemas y cuáles son sus objetivos.',
        rubric: [
          'Definí que se centra en el QUÉ (Espacio del Problema / Caja Negra) y no en el CÓMO técnico.',
          'Mencioné la abstracción de necesidades del usuario en requerimientos del sistema.',
          'Enumeré objetivos concretos: entender problema multicausal, evitar suposiciones, validar el producto correcto y reducir errores tempranos.'
        ],
        answerLead: 'El Análisis de Sistemas es la disciplina enfocada en comprender el problema real en su Universo de Discurso y abstraer las necesidades de usuarios y negocio para definir estrictamente QUÉ debe hacer el sistema (Espacio del Problema / Caja Negra), sin decidir todavía cómo implementarlo tecnológicamente.',
        answerPoints: [
          'Objetivo 1 — Entender el problema multicausal y delimitar el sistema: identificar subsistemas, actores, reglas del dominio y la frontera entre el sistema y su ambiente.',
          'Objetivo 2 — Transformar demandas humanas en requerimientos claros, completos, consistentes y verificables, reduciendo la incertidumbre (entropía).',
          'Objetivo 3 — Separar el QUÉ del CÓMO (Caja Negra): evitar suposiciones prematuras y lograr documentación mantenible que no se rompa si cambia el lenguaje o plataforma.',
          'Objetivo 4 — Prevenir construir el producto equivocado y detectar fallas tempranas (Validación y Verificación) cuando corregir cuesta 1x en vez de 100x+ en producción.'
        ],
        answerExample: 'En Product Management moderno, el Análisis de Sistemas corresponde al Product Discovery (entender qué construir y para quién) antes del Product Delivery (diseño y programación).',
        pitfall: 'Nunca digas que el análisis "define las tablas de la base de datos ni la arquitectura técnica": eso pertenece al Diseño (CÓMO).'
      },
      {
        id: 'ex1-4',
        examSet: 1,
        code: 'P4 · Set 1',
        guideId: 'g3-reqs',
        topic: 'U3 · Requerimientos / Elementos Funcionales',
        prompt: '4- Defina qué son los elementos funcionales. Identifique al menos tres de una aplicación a elección.',
        rubric: [
          'Definí elementos/requerimientos funcionales como servicios o acciones concretas que el sistema provee frente a entradas/situaciones (y lo que no debe hacer).',
          'Elegí una aplicación concreta comprensible.',
          'Identifiqué al menos 3 elementos funcionales bien redactados en términos de QUÉ (sin detalles técnicos).'
        ],
        answerLead: 'Los elementos funcionales (o Requerimientos Funcionales) son las declaraciones que definen los servicios, funciones y comportamientos concretos que el sistema debe proporcionar (o explícitamente no hacer) ante entradas y situaciones específicas de sus usuarios o actores externos.',
        answerPoints: [
          'Deben describir QUÉ operaciones realiza el sistema con sus entradas, salidas y excepciones, buscando completitud y consistencia.',
          'Aplicación elegida — Sistema de Gestión de Turnos para una Clínica Médica:',
          '1) Reservar turno: el sistema debe permitir a un paciente buscar horarios libres de una especialidad/médico y confirmar una reserva bloqueando ese horario.',
          '2) Cancelar turno: el sistema debe permitir cancelar un turno confirmado y liberar automáticamente la franja horaria si se cumple la antelación mínima.',
          '3) Emitir comprobante y recordatorio: al confirmar un turno el sistema debe generar un comprobante de reserva y enviar un recordatorio automático al paciente 24 horas antes.'
        ],
        answerExample: 'Podés agregar un 4.º ejemplo de consulta o facturación si querés asegurar margen extra.',
        pitfall: 'Cuidado con poner un atributo global ("que la app cargue en menos de 2 segundos") como elemento funcional: eso es un Requerimiento No Funcional.'
      },
      {
        id: 'ex1-5',
        examSet: 1,
        code: 'P5 · Set 1',
        guideId: 'g3-reqs',
        topic: 'U3 · Requerimientos No Funcionales',
        prompt: '5- Identifique al menos tres requerimientos no funcionales y explíquelos con ejemplos.',
        rubric: [
          'Definí brevemente qué es un RNF (restricciones / atributos globales de calidad que impactan en la arquitectura).',
          'Identifiqué al menos 3 RNF (idealmente cubriendo los 3 tipos del apunte: Producto, Organizacionales y Externos).',
          'Di un ejemplo concreto y medible para cada uno.'
        ],
        answerLead: 'Los Requerimientos No Funcionales (RNF) son restricciones y atributos de calidad globales sobre los servicios que ofrece el sistema (rendimiento, fiabilidad, seguridad, normativa, estándares) que suelen operar como drivers de arquitectura.',
        answerPoints: [
          '1) RNF de Producto — Rendimiento / Tiempo de respuesta: define qué tan rápido y eficiente debe responder el sistema. Ejemplo: "La validación de acceso por molinete en un gimnasio debe completarse en menos de 500 ms con un 99,5% de disponibilidad en horario pico."',
          '2) RNF de Producto — Seguridad / Confidencialidad: restringe quién y cómo accede o protege los datos. Ejemplo: "Solo los médicos tratantes autenticados con doble factor pueden visualizar diagnósticos clínicos, viajando todo tráfico cifrado con TLS."',
          '3) RNF Externo — Normativo / Interoperabilidad legal: deriva de leyes o sistemas gubernamentales externos al software. Ejemplo: "El módulo de ventas debe emitir comprobantes fiscales electrónicos cumpliendo exactamente el esquema vigente de AFIP y respetar la Ley de Protección de Datos Personales."'
        ],
        answerExample: 'También podés sumar uno Organizacional (ej. "Cumplir estándares de accesibilidad y auditoría definidos por la clínica").',
        pitfall: 'Evitá definiciones ambiguas como "el sistema debe ser rápido y seguro": en examen cada ejemplo de RNF conviene expresarlo con criterio verificable o norma concreta.'
      },
      {
        id: 'ex1-6',
        examSet: 1,
        code: 'P6 · Set 1',
        guideId: 'g1-tgs',
        topic: 'U1 · Clasificación TGS (5 criterios)',
        prompt: '6- Clasifique los siguientes sistemas según la TGS (por lo menos 5 criterios). Justifique: a- el sistema de telefonía b- el sistema respiratorio de un ser vivo',
        rubric: [
          'Apliqué los 5 criterios TGS: Constitución, Relación con entorno, Origen, Variables y Previsibilidad.',
          'Clasifiqué y justifiqué cada uno de los 5 criterios para a) Sistema de telefonía.',
          'Clasifiqué y justifiqué cada uno de los 5 criterios para b) Sistema respiratorio de un ser vivo.'
        ],
        answerLead: 'Clasificación justificada según los cinco ejes de la Teoría General de Sistemas:',
        answerPoints: [
          'a) Sistema de Telefonía → Constitución: Físico (antenas, fibra óptica, centrales, dispositivos tangibles) combinado con protocolos/software abstractos. Relación con entorno: Abierto (recibe llamadas, datos, energía eléctrica y demandas del ambiente). Origen: Artificial (creado y operado por el hombre). Variables: Discreto (la telefonía digital conmuta paquetes y estados discretos de llamada, aunque el medio radioeléctrico físico sea continuo). Previsibilidad: Probabilístico (congestión variable, fallas aleatorias y demanda impredecible de usuarios).',
          'b) Sistema Respiratorio de un ser vivo → Constitución: Físico/Biológico (órganos tangibles: pulmones, tráquea, bronquios, alvéolos y moléculas de gases). Relación con entorno: Abierto (intercambia materia y energía con el ambiente inhalando O₂ y exhalando CO₂ y vapor). Origen: Natural (biológico, no creado por el humano). Variables: Continuo (flujo permanente de aire e intercambio gaseoso continuo en el tiempo). Previsibilidad: Probabilístico (la frecuencia y volumen cambian de forma no determinista según esfuerzo físico, salud, estrés o altitud).'
        ],
        answerExample: 'En la tab "Talleres de Parcial" podés practicar este mismo ejercicio interactivamente con ambos sistemas.',
        pitfall: 'No dejes ningún criterio sin justificar: en los parciales restan puntaje si solo ponés "Abierto, Artificial" sin explicar el porqué.'
      },
      {
        id: 'ex1-7',
        examSet: 1,
        code: 'P7 · Set 1',
        guideId: 'g4-modelado',
        topic: 'U5 · Formatos de Caso de Uso Completo',
        prompt: '7- Explique los diferentes formatos de caso de uso completo.',
        rubric: [
          'Expliqué qué secciones integran un Caso de Uso completo/vestido (precondiciones, postcondiciones, flujo principal, extensiones, requisitos especiales).',
          'Contrasté Formato de 1 columna (narrativo secuencial) vs. Formato de 2 columnas (Actor | Sistema).',
          'Mencioné el nivel de estilo Esencial (Caja Negra, recomendado en análisis) frente al Concreto (UI).'
        ],
        answerLead: 'Un Caso de Uso completo (o "vestido") es el contrato más detallado en lenguaje natural e incluye secciones fijas (Nombre, Alcance, Actor primario, Interesados, Precondiciones, Postcondiciones, Escenario Principal, Extensiones/Alternativos y Requisitos Especiales), y su flujo de interacción puede redactarse en distintos formatos:',
        answerPoints: [
          '1) Formato de 1 columna (Narrativo secuencial): describe el escenario principal paso a paso en una sola lista numerada (ej. "1. El Cliente selecciona el turno. 2. El Sistema valida disponibilidad..."). Ventaja: compacto, natural para leer de corrido.',
          '2) Formato de 2 columnas (Actor | Sistema): presenta una tabla con las acciones que inicia el Actor a la izquierda y las respuestas del Sistema a la derecha. Ventaja: deja explícita la frontera Caja Negra (qué hace el usuario vs. qué responde el sistema) evitando mezclar pasos internos.',
          '3) Variante por abstracción — Estilo Esencial vs. Concreto: el caso completo de análisis debe escribirse en formato Esencial (centrado en la intención y responsabilidades sin mencionar botones ni pantallas), evitando el formato Concreto acoplado a UI.',
          'Contexto en UP: además del formato completo, existen versiones Breve (párrafo corto) e Informal (párrafos simples) para etapas iniciales antes de detallar.'
        ],
        answerExample: 'En el Taller 3 de la pestaña "Talleres de Parcial" podés alternar un caso real entre 1 columna y 2 columnas para verlo en vivo.',
        pitfall: 'No confundir "tipos/grados de detalle" (Breve, Informal, Completo) con los "formatos de redacción del Caso de Uso completo" (1 columna, 2 columnas, Esencial vs. Concreto).'
      },
      {
        id: 'ex1-8',
        examSet: 1,
        code: 'P8 · Set 1',
        guideId: 'g5-calidad',
        topic: 'U2 + U3 · CMMI en el Análisis de Sistemas',
        prompt: '8- ¿Para qué podemos usar el modelo CMMI en el análisis de sistemas? Explique al menos 4 prácticas que proponga realizar.',
        rubric: [
          'Expliqué el propósito de CMMI (marco de buenas prácticas y metas para sistematizar y dar calidad al proceso de análisis).',
          'Expliqué claramente al menos 4 prácticas concretas (REQM, RD y/o PP) aplicables al análisis.'
        ],
        answerLead: 'CMMI sirve en el análisis de sistemas como un marco disciplinado de buenas prácticas (metas y prácticas específicas) para sistematizar el relevamiento, la validación, la trazabilidad y la planificación de los requerimientos, reduciendo la improvisación y asegurando calidad del proceso.',
        answerPoints: [
          'Práctica 1 — Comprender los requerimientos (REQM): asegurar entendimiento compartido con demandantes y equipo sobre qué se pide, bajo criterios objetivos y sin ambigüedades.',
          'Práctica 2 — Negociar y validar requerimientos con los usuarios (REQM / RD): resolver contradicciones entre distintas fuentes y confirmar con los usuarios que lo especificado resuelve la necesidad real.',
          'Práctica 3 — Mantener trazabilidad bidireccional (REQM): vincular cada requerimiento desde su origen de negocio hacia casos de uso, diseño, código y pruebas (y viceversa) para controlar cobertura e impacto.',
          'Práctica 4 — Gestionar cambios de requerimientos (REQM): evaluar costo, tiempo y requerimientos afectados cada vez que cambia una necesidad antes de modificar modelos o código.',
          'Práctica 5 (extra) — Identificar inconsistencias entre el desarrollo y los requisitos (REQM) y elaborar estimaciones/plan con compromiso (PP SG1–SG3).'
        ],
        answerExample: 'El apunte destaca explícitamente estos 5 pasos en CMMI REQM (Gestión de Requerimientos), además de RD (Desarrollo de Requerimientos) y CMMI Nivel 3 donde se caracterizan procesos.',
        pitfall: 'Recordá no solo listar los nombres de las prácticas: el enunciado exige EXPLICAR cada práctica propuesta.'
      },
      {
        id: 'ex1-9',
        examSet: 1,
        code: 'P9 · Set 1',
        guideId: 'g5-calidad',
        topic: 'U2 · Calidad de Proceso',
        prompt: '9- ¿Qué es la calidad de proceso y cómo podemos garantizarla?',
        rubric: [
          'Definí calidad de proceso (las condiciones, orden, métodos y disciplina en que se construye el producto).',
          'Diferencié respecto de la calidad del producto (regla del apunte: buen proceso no garantiza por sí solo buen producto sin testing).',
          'Propuse mecanismos concretos para garantizarla (CMMI/ISO, procesos caracterizados/DoR, V&V, trazabilidad y gestión de cambios).'
        ],
        answerLead: 'La calidad de proceso se refiere a las condiciones, estructura metodológica y disciplina de trabajo bajo las cuales se obtiene un sistema (qué tareas se hacen, en qué orden, con qué criterios y controles), a diferencia de la calidad del producto que verifica el software final mediante testing.',
        answerPoints: [
          'Relación clave del apunte: un proceso deficiente garantiza un producto deficiente; sin embargo, un buen proceso NO garantiza por sí solo un buen producto (hace falta además verificación y pruebas rigurosas).',
          'Cómo garantizarla:',
          '1) Adoptar marcos y estándares de buenas prácticas como CMMI e ISO que establezcan metas claras y procesos repetibles.',
          '2) Definir y documentar los procesos, roles y criterios de entrada/salida (ej. checklists DoR y compuertas de revisión Human-in-the-loop).',
          '3) Incorporar actividades sistemáticas de Verificación, Validación (V&V), inspecciones tempranas y gestión controlada de cambios con trazabilidad.',
          '4) Recolectar métricas y lecciones aprendidas para mejorar continuamente la planificación y las estimaciones.'
        ],
        answerExample: 'Por ejemplo, exigir que ningún requerimiento pase a desarrollo sin revisión DoR (V&V) ni trazabilidad en CMMI REQM protege la calidad del proceso desde el análisis.',
        pitfall: 'Si confundís "calidad de proceso" con "ejecutar tests al final para ver si el software anda", mezclaste calidad de proceso con calidad de producto.'
      },

      // --- SET 2 (5 preguntas) ---
      {
        id: 'ex2-1',
        examSet: 2,
        code: 'P1 · Set 2',
        guideId: 'g4-modelado',
        topic: 'U3 + U4 + U5 · Interacción Ambiente–Sistema',
        prompt: '1. Nombre y caracterice las herramientas que conoce del análisis usadas para modelar la interacción entre el ambiente y el sistema',
        rubric: [
          'Nombré al menos 3 herramientas de análisis orientadas a la frontera/interacción ambiente-sistema.',
          'Caractericé cada una explicando qué muestra y manteniendo el enfoque Caja Negra.'
        ],
        answerLead: 'En el Análisis de Sistemas, el software se trata inicialmente como una Caja Negra para capturar cómo interactúa con los actores y sistemas externos del entorno. Las principales herramientas son:',
        answerPoints: [
          '1) Lista Actor–Objetivo y Diagrama / Especificación de Casos de Uso: delimita gráficamente la frontera del sistema (rectángulo), ubica afuera a los actores humanos o sistemas externos y modela cada interacción orientada a un objetivo de negocio mediante escenarios principales y extensiones en Caja Negra.',
          '2) Diagrama de Secuencia de Sistema (DSS): representa de forma cronológica (arriba hacia abajo) los eventos del sistema disparados por los actores externos hacia una única línea de vida :Sistema y las respuestas que vuelven al ambiente en un escenario.',
          '3) Diagrama de Contexto (DFD Nivel 0): abstrae todo el software como un único proceso central conectado con las entidades externas del entorno mediante flujos de datos etiquetados de entrada y salida.',
          '4) Prototipos de interacción (y apoyo de Empathy Map / Escenarios): permiten simular concretamente el diálogo sistema–usuario en etapas tempranas para validar si esa interacción cubre las necesidades reales antes de diseñar el interior.'
        ],
        answerExample: 'Todas comparten una regla de examen: miran el borde externo (interacción Ambiente ↔ Sistema) sin mostrar clases internas ni tablas SQL.',
        pitfall: 'No incluyas un Diagrama de Clases de diseño ni un DER como "herramienta de interacción ambiente–sistema": esos modelan estructura interna o datos, no el intercambio actor–sistema.'
      },
      {
        id: 'ex2-2',
        examSet: 2,
        code: 'P2 · Set 2',
        guideId: 'g4-modelado',
        topic: 'U4 · Importancia del Modelado',
        prompt: '2. Justifique la importancia del modelado en el proceso del desarrollo del software con un ejemplo. Debe permitir entender las ventajas de hacerlo versus no hacerlo',
        rubric: [
          'Definí el rol del modelado (abstracción prescriptiva, vistas, análisis de riesgos, distinto de diagramar).',
          'Presenté un ejemplo concreto comparando explícitamente el resultado DE MODELAR vs. NO MODELAR.',
          'Mostré ventajas claras en comunicación, detección temprana de errores y control de arquitectura/costos.'
        ],
        answerLead: 'Un modelo es una simplificación o abstracción prescriptiva de la realidad construida con un objetivo definido para guiar el desarrollo, comunicar estructura y comportamiento entre distintos stakeholders mediante vistas, controlar la arquitectura y detectar fallas antes de programar.',
        answerPoints: [
          'Ejemplo contrastivo — Sistema de Préstamos de Biblioteca:',
          '• Escenario SIN modelar: se escucha al cliente pedir "prestar libros" y el equipo pasa directo a programar una tabla Libro con columna boolean prestado. Al desplegar, descubren que de cada título hay 6 copias físicas con distinto estado y que el mismo libro se presta cientos de veces (fecha de devolución no es del libro sino del préstamo). Corregir la base, API y pantallas ya programadas cuesta 10x–40x en retrabajo.',
          '• Escenario CON modelado previo: antes de codificar se construye un Modelo de Dominio (distinguiendo Obra/Libro de Ejemplar y Préstamo) junto con Casos de Uso. En una charla de 15 minutos con el bibliotecario se detecta la diferencia a costo 1x, se validan las reglas de suspensión por atraso y el equipo diseña la arquitectura limpia desde el día uno.'
        ],
        answerExample: 'Ventajas contrastadas: 1) lenguaje común con el usuario, 2) detección temprana y barata de errores/omisiones, 3) preservación y control de la arquitectura frente a cambios.',
        pitfall: 'Recordá que el enunciado exige que el ejemplo permita comparar explícitamente hacerlo versus NO hacerlo.'
      },
      {
        id: 'ex2-3',
        examSet: 2,
        code: 'P3 · Set 2',
        guideId: 'g3-reqs',
        topic: 'U5 · Modelo FURPS+',
        prompt: '3. Explique el modelo de requerimientos FURPS+',
        rubric: [
          'Desglosé exactamente las 6 categorías: F, U, R, P, S y +.',
          'Identifiqué explícitamente cuáles son los atributos de calidad (U, R, P, S).',
          'Di ejemplos breves por categoría dentro del contexto de UP.'
        ],
        answerLead: 'FURPS+ es el modelo de clasificación de requerimientos utilizado en el Proceso Unificado (UP) para organizar tanto las capacidades funcionales como los atributos de calidad y restricciones complementarias sin olvidar aspectos clave:',
        answerPoints: [
          'F — Funcional (Functional): características, servicios principales del sistema y reglas de seguridad funcional (ej. emitir factura, registrar reserva).',
          'U — Usabilidad (Usability): factores humanos, curva de aprendizaje, ayuda contextual y documentación para el usuario.',
          'R — Fiabilidad (Reliability): frecuencia y tolerancia a fallos, disponibilidad y capacidad de recuperación sin pérdida de datos.',
          'P — Rendimiento (Performance): tiempos de respuesta, productividad (throughput), precisión de cálculos y uso eficiente de recursos.',
          'S — Soporte (Supportability): adaptabilidad, mantenibilidad, configurabilidad, escalabilidad y facilidad de prueba.',
          '+ — Adicionales (+): requisitos no cubiertos arriba, incluyendo restricciones de implementación (lenguajes/plataformas), interfaces con sistemas/HW externos, operación, empaquetamiento y requisitos legales o normativos.'
        ],
        answerExample: 'Dato de examen: las categorías U, R, P y S representan específicamente los atributos de calidad globales del software.',
        pitfall: 'No omitas explicar qué entra dentro del símbolo "+" (implementación, interfaz, operación, empaquetamiento y legales).'
      },
      {
        id: 'ex2-4',
        examSet: 2,
        code: 'P4 · Set 2',
        guideId: 'g2-enfoque',
        topic: 'U2 + U3 · Ciclo de Vida e Ingeniería de Requerimientos',
        prompt: '4. Relacione el ciclo de vida del software y la ingeniería de requerimientos',
        rubric: [
          'Explicité qué ordena cada uno (el ciclo de vida ordena el macro-proceso; la IR descubre, modela, analiza y gestiona el QUÉ).',
          'Comparé cómo cambia el peso y ritmo de la IR entre ciclos secuenciales (Cascada) y ciclos iterativos/ágiles (The Box, Lean, UP).',
          'Destacué la gestión continua de requisitos y retroalimentación durante la evolución del sistema.'
        ],
        answerLead: 'El ciclo de vida del software organiza la secuencia general de etapas para concebir, construir, probar y evolucionar un sistema, mientras que la Ingeniería de Requerimientos (IR: Elicitar, Modelar, Analizar y Gestionar) provee y gobierna el conocimiento sobre el QUÉ construir a lo largo de ese ciclo.',
        answerPoints: [
          '1) En ciclos secuenciales (Cascada): la IR se concentra en bloque al comienzo buscando definir todos los requerimientos antes de diseñar. Si los requisitos eran incompletos o el entorno cambia, volver atrás es rígido y muy costoso.',
          '2) En modelos cíclicos como The Box (7 etapas): la IR se concentra en las primeras tres etapas (objetivos, requerimientos humanos y análisis de necesidades donde se agrega valor), y se retroalimenta cuando el sistema vuelve al paso 1 al evolucionar el negocio.',
          '3) En ciclos modernos Lean / Ágiles / UP: la IR no se congela en una etapa única; la actividad Gestionar es transversal a todas las iteraciones para incorporar feedback temprano de usuarios reales (MVPs o versiones incrementales) y re-priorizar por riesgo y valor.'
        ],
        answerExample: 'En síntesis: el ciclo de vida define la cadencia y estrategia de entrega, y la IR garantiza en esa cadencia que el equipo construya la cosa correcta (Validación) y sin contradicciones (Verificación).',
        pitfall: 'Evitá decir que los requerimientos "solo existen en la primera etapa": en UP, Lean y The Box evolucionan junto con el ciclo.'
      },
      {
        id: 'ex2-5',
        examSet: 2,
        code: 'P5 · Set 2',
        guideId: 'g4-modelado',
        topic: 'U5 · Casos de Uso en el Análisis',
        prompt: '5. ¿Que representan los casos de uso para el análisis de sistemas?',
        rubric: [
          'Expliqué que representan requerimientos funcionales en lenguaje natural y formato Caja Negra (contrato de comportamiento).',
          'Indiqué que expresan metas/servicios útiles para actores externos sin detalles técnicos.',
          'Expliqué su rol integrador (comunicación con stakeholders, insumo para Modelo de Dominio, DSS, slicing y pruebas).'
        ],
        answerLead: 'Para el Análisis de Sistemas, los Casos de Uso representan contratos funcionales de comportamiento redactados en lenguaje natural desde una perspectiva de Caja Negra: describen qué logra un actor externo al interactuar con el sistema para cumplir un objetivo de negocio, sin revelar diseño interno ni código.',
        answerPoints: [
          '1) Captura estructurada del QUÉ: formalizan requerimientos funcionales junto con sus escenarios principales, flujos alternativos/extensiones, precondiciones y postcondiciones.',
          '2) Puente de comunicación en el Universo de Discurso: al escribirse en el vocabulario del negocio, permiten validar con usuarios y clientes si lo especificado refleja sus necesidades reales.',
          '3) Artefacto articulador del análisis OO y UP: de los casos de uso se extraen las frases nominales que forman las clases conceptuales del Modelo de Dominio, los eventos externos del DSS, las unidades de estimación/Slicing en iteraciones y los casos de prueba funcionales.'
        ],
        answerExample: 'En términos de examen: representan el corazón del modelado funcional centrado en el usuario dentro del Proceso Unificado.',
        pitfall: 'No los definas simplemente como "un dibujito con muñequitos y óvalos": el diagrama muestra el mapa general, pero el Caso de Uso es fundamentalmente el texto/contrato de flujos en Caja Negra.'
      },

      // --- SET 3 (5 preguntas) ---
      {
        id: 'ex3-1',
        examSet: 3,
        code: 'P1 · Set 3',
        guideId: 'g2-enfoque',
        topic: 'U2 + U3 + U5 · Fases centradas en Requerimientos',
        prompt: '1)Identifique y explique las fases del ciclo de vida del software donde el trabajo se centra en los requerimientos.',
        rubric: [
          'Identifiqué las fases equivalentes en los ciclos estudiados (Cascada, The Box, Lean, Doble Diamante y UP).',
          'Expliqué qué se hace en cada fase identificada (especialmente etapa 3 de The Box y Elaboración en UP).',
          'Aclaré la diferencia entre Inicio (viabilidad) y Elaboración (pico de requisitos) en UP.'
        ],
        answerLead: 'Según el ciclo de vida considerado, el trabajo centrado en descubrir, analizar y especificar requerimientos se ubica en:',
        answerPoints: [
          '1) En Cascada — Fases de Requerimientos y Análisis: se realiza de manera secuencial al inicio para levantar y documentar todo el alcance antes de diseñar.',
          '2) En The Box (7 etapas) — Etapas 1, 2 y 3: en la 1 se identifican problemas y objetivos, en la 2 se relevan requerimientos humanos de información, y en la etapa 3 (Análisis de necesidades del sistema) se agrega verdadero valor validando qué aporta valor dentro del Problem Space.',
          '3) En Lean / Product Management — Business Outcome, Discover y Validate: se realiza un Discovery rápido y liviano para plantear requerimientos supuestos y validarlos temprano con MVPs antes de invertir fuerte en Build.',
          '4) En Doble Diamante — Descubrir (diverge) y Definir (converge): todo el primer diamante se dedica al problema y termina en una definición precisa antes de pasar al segundo diamante.',
          '5) En Proceso Unificado (UP) — Inicio y, principalmente, Elaboración: en Inicio (~1 iteración) se acota el alcance aproximado por viabilidad; en Elaboración alcanza su pico máximo la disciplina de Requerimientos al estabilizar casos de uso y requerimientos de mayor riesgo junto con la arquitectura núcleo.'
        ],
        answerExample: 'Si te piden hablar en general, mencioná Discovery/Análisis inicial más su refinamiento en Elaboración (UP) o etapa 3 de The Box.',
        pitfall: 'En UP, nunca digas que todo el detalle de requisitos termina en Inicio: el punto fuerte de requisitos está en Elaboración.'
      },
      {
        id: 'ex3-2',
        examSet: 3,
        code: 'P2 · Set 3',
        guideId: 'g1-tgs',
        topic: 'U1 + U2 · Los sistemas crecen',
        prompt: '2)Explique con sus palabras lo que significa, los sistemas crecen. De un ejemplo real al respecto.',
        rubric: [
          'Expliqué en palabras propias por qué ningún sistema útil permanece estático (nuevas necesidades de usuarios, normativa, datos e integraciones).',
          'Vinculé con consecuencias en análisis/arquitectura (más mantenimiento — principio 2 — y necesidad de modularidad).',
          'Di un ejemplo real claro de crecimiento evolutivo de un software.'
        ],
        answerLead: '"Los sistemas crecen" (cuarto principio de los sistemas automatizados) significa que todo sistema puesto en funcionamiento cambia y amplía continuamente su alcance, cantidad de funcionalidades, volumen de información e integraciones con el paso del tiempo.',
        answerPoints: [
          '¿Por qué ocurre? Porque las necesidades del cliente no son estáticas: cuando los usuarios empiezan a usar el sistema comprenden mejor qué pueden automatizar, aparecen nuevas leyes, competidores o dispositivos, y crecen los usuarios y datos.',
          'Impacto clave: al crecer el sistema (principio 4), también crece la cantidad de recursos necesarios para mantenerlo (principio 2). Si el análisis mezcló tecnología en los requisitos o la arquitectura base fue débil, ese crecimiento hace colapsar el producto o vuelve impagables los cambios.',
          'Ejemplo real: Mercado Pago o un sistema bancario online. Comenzó únicamente para pagar compras dentro de un sitio; con los años creció sumando cobros con QR, pagos de servicios, transferencias inmediatas, inversiones, préstamos, integraciones fiscales con AFIP y app móvil.'
        ],
        answerExample: 'También sirve el ejemplo de un sistema hospitalario o de campus universitario que nace solo con turnos/inscripciones y se expande hacia historia clínica digital y pagos online.',
        pitfall: 'No lo reduzcas solamente a "que aumente el tamaño del disco duro o la base de datos": explicalo desde la evolución funcional, de usuarios y de complejidad del sistema.'
      },
      {
        id: 'ex3-3',
        examSet: 3,
        code: 'P3 · Set 3',
        guideId: 'g1-tgs',
        topic: 'U1 · Entradas y Recursos en un Sistema',
        prompt: '3)En el concepto de un sistema qué son las entradas y recursos del mismo? Explique con sus palabras y de un ejemplo real.',
        rubric: [
          'Expliqué claramente qué son las entradas (flujos/insumos que entran al proceso de conversión para transformarse en salidas).',
          'Expliqué claramente qué son los recursos (medios humanos, técnicos y económicos que operan y sostienen el sistema).',
          'Di un ejemplo real diferenciando explícitamente qué es Entrada y qué es Recurso.'
        ],
        answerLead: 'Dentro de un sistema abierto, tanto entradas como recursos provienen o se apoyan en su entorno, pero cumplen funciones distintas en el proceso de conversión:',
        answerPoints: [
          'Entradas: son los datos, materiales, energía, pedidos o señales que ingresan desde el ambiente al sistema específicamente para ser procesados/transformados por la conversión en salidas útiles (ej. datos aislados procesados en información útil).',
          'Recursos: son los medios y capacidades internas (personal, hardware, software, infraestructura, presupuesto y tiempo) que el sistema utiliza para ejecutar esa transformación, funcionar y mantenerse en el tiempo (en 3P+A el recurso más crítico y valioso en software es el personal).',
          'Ejemplo real — Sistema de Pedidos de un Comedor Universitario: las Entradas son el legajo del estudiante, el plato seleccionado del día y la confirmación de pago/beca (se transforman en las Salidas: comprobante de retiro y cupo actualizado); los Recursos son el personal de cocina/caja, la app móvil, los servidores, la red Wi-Fi y el presupuesto de soporte.'
        ],
        answerExample: 'Regla rápida para no confundirlos: la Entrada "entra y se transforma en Salida"; el Recurso "opera la transformación y queda en el sistema consumiendo mantenimiento".',
        pitfall: 'Evitar dar el mismo elemento (por ej. "la computadora") como entrada de un sistema de información: la computadora es recurso; los datos tipeados en ella son entradas.'
      },
      {
        id: 'ex3-4',
        examSet: 3,
        code: 'P4 · Set 3',
        guideId: 'g3-reqs',
        topic: 'U3 + U5 + U6 · Documentación de un RF Completo',
        prompt: '4)Si Ud. fuese quién define el proceso de desarrollo de un software, qué debería documentar para considerar "completo" a un requerimiento funcional.',
        rubric: [
          'Incluí identificación/trazabilidad, enunciado claro en Caja Negra (sin código ni SQL), actores y entradas/salidas.',
          'Incluí pre/postcondiciones, flujo principal y excepciones/casos de borde (y fuera de alcance).',
          'Incluí reglas de negocio/RNF asociados y criterios de aceptación verificables + validación con usuario (DoR).'
        ],
        answerLead: 'Para que un Requerimiento Funcional (RF) pueda considerarse "completo", consistente, trazable y listo para pasar a diseño/construcción (criterio DoR) sin suposiciones ni detalles prematuros del CÓMO, definiría documentar estos elementos:',
        answerPoints: [
          '1) Identificador único (ID) y trazabilidad bidireccional: código único para rastrearlo desde la necesidad del usuario hasta casos de prueba.',
          '2) Descripción precisa y no ambigua del QUÉ (Caja Negra): qué servicio debe brindar el sistema usando lenguaje claro o sintaxis estructurada (ej. EARS), aclarando también lo que queda fuera de alcance (Smart Kid Principle).',
          '3) Actores involucrados (quién inicia o interactúa) y objetivo de negocio que satisface.',
          '4) Datos, entradas y salidas de negocio: qué información entra y qué resultado produce (sin nombrar tablas SQL ni frameworks).',
          '5) Precondiciones y Postcondiciones: qué debe ser cierto antes de iniciar y qué estado garantizado queda al finalizar con éxito.',
          '6) Flujo principal y excepciones / casos de borde: no limitarse al happy path; detallar rechazos, validaciones fallidas o flujos alternativos.',
          '7) Reglas de negocio y atributos no funcionales asociados (ej. políticas comerciales, límites de tiempo, permisos).',
          '8) Criterios de aceptación verificables (ej. escenarios Dado–Cuando–Entonces en Gherkin) y evidencia de Validación/acuerdo con el usuario.'
        ],
        answerExample: 'En el Taller 2 de la pestaña "Talleres de Parcial" podés practicar armando esta plantilla y filtrando las trampas de diseño prematuro (SQL/UI/clases).',
        pitfall: 'Error grave de análisis: poner scripts SQL, nombres de pantallas o clases Java dentro de la especificación de un Requerimiento Funcional.'
      },
      {
        id: 'ex3-5',
        examSet: 3,
        code: 'P5 · Set 3',
        guideId: 'g4-modelado',
        topic: 'U5 · Fase de Inicio (Inception) del UP',
        prompt: '5)Explique que se espera lograr en la fase de Inicio del UP. ¿Cuál es la decisión más importante a tomar?',
        rubric: [
          'Expliqué que Inicio suele tener 1 iteración corta enfocada en viabilidad y no en requisitos exhaustivos.',
          'Listé lo que se busca lograr: visión aproximada, caso de negocio, alcance inicial, riesgos críticos y estimación preliminar.',
          'Respondí explícitamente cuál es la decisión más importante: aprobar el pase a Elaboración (Go) o cancelar/replantear el proyecto (No-Go).'
        ],
        answerLead: 'La fase de Inicio (Inception) del Proceso Unificado suele consistir en una única iteración corta cuyo propósito NO es especificar todos los requerimientos en detalle, sino establecer las bases de negocio y viabilidad del proyecto.',
        answerPoints: [
          'Qué se espera lograr en Inicio:',
          '• Evaluar la viabilidad económica, técnica y de mercado del proyecto.',
          '• Construir una Visión aproximada y el Caso de Negocio inicial (beneficios esperados vs. costos estimados).',
          '• Delimitar el alcance inicial (actores principales y lista/resumen de los Casos de Uso más críticos, redactando en detalle solo alguno representativo si ayuda a entender riesgo).',
          '• Identificar los principales riesgos técnicos/de negocio y realizar estimaciones preliminares de esfuerzo y calendario.',
          'LA DECISIÓN MÁS IMPORTANTE A TOMAR (Hito de Objetivos del Ciclo de Vida): decidir si el proyecto es viable y justifica invertir presupuesto pasando a la fase de Elaboración (Continuar / Go), o si conviene cancelarlo o redefinirlo tempranamente (No-Go) antes de comprometer recursos altos.'
        ],
        answerExample: 'Frase textual clave del apunte: "Inicio suele tener una sola iteración. No es una fase de especificación exhaustiva de requisitos."',
        pitfall: 'Si el examen pregunta explícitamente "¿Cuál es la decisión más importante?", asegurate de destacarla al final: decidir si continuar a Elaboración o cancelar el proyecto por viabilidad.'
      }
    ],

    // =========================================================================
    // 3. TALLERES INTERACTIVOS DE PARCIAL
    // =========================================================================
    drills: {
      tgsCriteria: [
        { key: 'constitucion', label: '1. Constitución', options: ['Físico', 'Abstracto'] },
        { key: 'entorno', label: '2. Relación con entorno', options: ['Abierto', 'Cerrado'] },
        { key: 'origen', label: '3. Origen', options: ['Natural', 'Artificial'] },
        { key: 'variables', label: '4. Variables', options: ['Discreto', 'Continuo'] },
        { key: 'previsibilidad', label: '5. Previsibilidad', options: ['Determinístico', 'Probabilístico'] }
      ],
      tgsSystems: [
        {
          id: 'telefonia',
          name: 'a) Sistema de Telefonía (Pregunta 6a)',
          note: 'Considerando la red de telefonía digital moderna (antenas, centrales, conmutación de paquetes y usuarios reales).',
          expected: {
            constitucion: 'Físico',
            entorno: 'Abierto',
            origen: 'Artificial',
            variables: 'Discreto',
            previsibilidad: 'Probabilístico'
          },
          reasons: {
            constitucion: 'Posee soporte tangible físico (antenas, fibra óptica, centrales, teléfonos) aunque incluya software/protocolos abstractos.',
            entorno: 'Interactúa permanentemente recibiendo llamadas, datos, energía y demandas variables de usuarios.',
            origen: 'Es un sistema artificial diseñado y construido por ingeniería humana.',
            variables: 'En telefonía digital opera mediante paquetes y estados discretos (llamada iniciada, conectada, finalizada).',
            previsibilidad: 'Su tráfico, congestión y fallos no pueden anticiparse con certeza absoluta (comportamiento probabilístico).'
          }
        },
        {
          id: 'respiratorio',
          name: 'b) Sistema Respiratorio de un ser vivo (Pregunta 6b)',
          note: 'Analizado como sistema biológico vivo en interacción con el aire del ambiente.',
          expected: {
            constitucion: 'Físico',
            entorno: 'Abierto',
            origen: 'Natural',
            variables: 'Continuo',
            previsibilidad: 'Probabilístico'
          },
          reasons: {
            constitucion: 'Está compuesto por órganos y tejidos materiales tangibles (pulmones, tráquea, alvéolos) y gases.',
            entorno: 'Es un sistema abierto vital: inhala O₂ del entorno y exhala CO₂ y vapor continuamente.',
            origen: 'Es de origen natural biológico.',
            variables: 'El flujo respiratorio y el intercambio gaseoso ocurren de forma continua en el tiempo.',
            previsibilidad: 'Su ritmo y rendimiento varían según esfuerzo, altitud, emociones o salud (no es determinista).'
          }
        },
        {
          id: 'homebanking',
          name: 'c) Aplicación Web de Homebanking',
          note: 'Extra para entrenar con un sistema de software transaccional conectado a internet.',
          expected: {
            constitucion: 'Abstracto',
            entorno: 'Abierto',
            origen: 'Artificial',
            variables: 'Discreto',
            previsibilidad: 'Probabilístico'
          },
          reasons: {
            constitucion: 'Como sistema de software/reglas lógicas (cuentas, permisos, algoritmos) es abstracto, aunque corra sobre hardware físico.',
            entorno: 'Intercambia operaciones con clientes, redes bancarias (BCRA/COELSA) y normativas fiscales.',
            origen: 'Creado artificialmente por ingenieros y analistas.',
            variables: 'Opera por transacciones discretas (transferencia aprobada/rechazada, saldo en instantes definidos).',
            previsibilidad: 'La concurrencia, tiempos de red y fallos externos introducen variabilidad probabilística.'
          }
        },
        {
          id: 'reloj',
          name: 'd) Reloj Mecánico Clásico (Caso contraste)',
          note: 'Pensado para comparar un sistema cerrado determinístico clásico frente a los sistemas vivos o de software.',
          expected: {
            constitucion: 'Físico',
            entorno: 'Cerrado',
            origen: 'Artificial',
            variables: 'Continuo',
            previsibilidad: 'Determinístico'
          },
          reasons: {
            constitucion: 'Está formado por engranajes, resortes y agujas físicas tangibles.',
            entorno: 'Desde la TGS clásica se lo aproxima como relativamente cerrado (no intercambia información adaptativa con el entorno mientras marcha).',
            origen: 'Fabricado artificialmente por relojería humana.',
            variables: 'El movimiento continuo de sus manecillas recorre el cuadrante sin saltos discretos (reloj analógico clásico).',
            previsibilidad: 'Su relación mecánica de engranajes es predecible con exactitud (determinístico).'
          }
        }
      ],
      rfCompleteClauses: [
        {
          id: 'rf-id',
          text: 'Identificador único (ID) y trazabilidad con la necesidad de negocio origen',
          required: true,
          reason: 'Obligatorio: permite rastrear el requisito hasta diseño y pruebas (CMMI REQM y SDD).'
        },
        {
          id: 'rf-what',
          text: 'Descripción precisa del QUÉ hace el sistema en Caja Negra (sin detalles de código)',
          required: true,
          reason: 'Obligatorio: define la conducta funcional de forma independiente a la tecnología (ideal sintaxis EARS).'
        },
        {
          id: 'rf-sql',
          text: 'Script CREATE TABLE SQL con índices y nombres de columnas exactos',
          required: false,
          reason: 'Trampa de examen: mezclar diseño físico de base de datos (CÓMO) en un RF rompe la separación Caja Negra.'
        },
        {
          id: 'rf-actors',
          text: 'Actor(es) involucrados y datos de entrada / salida esperados en términos del dominio',
          required: true,
          reason: 'Obligatorio: delimita quién interactúa, qué información aporta y qué resultado entrega el sistema.'
        },
        {
          id: 'rf-prepost',
          text: 'Precondiciones y Postcondiciones verificables del estado del sistema',
          required: true,
          reason: 'Obligatorio: deja explícito qué se asume cierto antes y qué garantiza el sistema al terminar.'
        },
        {
          id: 'rf-ui',
          text: 'Código hexadecimal exacto de colores, tipografía y clases CSS de la pantalla',
          required: false,
          reason: 'Trampa de examen: son decisiones concretas de diseño visual/UI (Espacio de la Solución), no requisitos funcionales.'
        },
        {
          id: 'rf-edges',
          text: 'Flujo principal, excepciones / casos de borde y aclaración de lo que queda fuera de alcance',
          required: true,
          reason: 'Obligatorio: evita supuestos erróneos cubriendo qué hace ante rechazos o condiciones límite.'
        },
        {
          id: 'rf-rules',
          text: 'Reglas de negocio y atributos no funcionales vinculados (permisos, tiempos máximos)',
          required: true,
          reason: 'Obligatorio: explicita políticas del negocio y restricciones de calidad que condicionan esa función.'
        },
        {
          id: 'rf-java',
          text: 'Nombres de las clases Controller, Service y DTO en Java o Node.js',
          required: false,
          reason: 'Trampa de examen: imponer arquitectura interna y lenguaje dentro de la especificación del requerimiento rompe la mantenibilidad.'
        },
        {
          id: 'rf-accept',
          text: 'Criterios de aceptación verificables (ej. Gherkin Dado–Cuando–Entonces) y validación (DoR)',
          required: true,
          reason: 'Obligatorio: permite comprobar objetivamente cuándo el requerimiento está bien implementado y validado.'
        }
      ],
      useCaseFormats: {
        title: 'CU-01 · Reservar Turno Médico',
        actor: 'Paciente (Primario) · Servicio de Mensajería (Secundario)',
        pre: 'El paciente está autenticado y existen profesionales cargados en la clínica.',
        post: 'El turno queda registrado en estado Confirmado, la franja horaria bloqueada y el comprobante enviado.',
        oneCol: [
          '1. El Paciente solicita reservar un turno e indica especialidad o profesional deseado.',
          '2. El Sistema muestra los días y franjas horarias disponibles del profesional.',
          '3. El Paciente selecciona una franja horaria disponible y confirma la reserva.',
          '4. El Sistema verifica disponibilidad actual, bloquea el horario y registra el turno en estado Confirmado.',
          '5. El Sistema genera el comprobante y dispara la notificación de confirmación al Paciente.'
        ],
        twoCol: [
          { actor: '1. Solicita reservar turno indicando especialidad o profesional.', system: '2. Consulta agenda libre y presenta fechas/horarios disponibles.' },
          { actor: '3. Selecciona un horario disponible y confirma la reserva.', system: '4. Valida unicidad horaria, bloquea el horario y registra el turno.' },
          { actor: '—', system: '5. Emite comprobante y envía notificación de confirmación.' }
        ],
        extensions: '3a. El Paciente no tiene obra social activa → El Sistema informa valor particular y pide confirmación. | 4a. El horario acaba de ocuparse por otro usuario → El Sistema informa indisponibilidad y ofrece próximos horarios.',
        specialReqs: 'RNF Performance: mostrar disponibilidad en < 1,5 s. RN: no se permiten dos turnos simultáneos para el mismo profesional.'
      },
      furpsItems: [
        {
          id: 'fp-1',
          text: 'El sistema debe permitir anular una factura emitida generando automáticamente la nota de crédito correspondiente.',
          expected: 'F',
          reason: 'F (Funcional): define una característica o servicio operativo concreto que ejecuta el software.'
        },
        {
          id: 'fp-2',
          text: 'Un recepcionista nuevo debe poder completar la carga de un paciente en menos de 3 minutos gracias a mensajes claros de ayuda en pantalla.',
          expected: 'U',
          reason: 'U (Usabilidad · atributo de calidad): mide factores humanos, facilidad de aprendizaje y ayuda al usuario.'
        },
        {
          id: 'fp-3',
          text: 'La plataforma debe mantener una disponibilidad del 99,9% en horario de atención y recuperarse en < 2 minutos ante caída de red.',
          expected: 'R',
          reason: 'R (Reliability / Fiabilidad · atributo de calidad): refiere a fallos, disponibilidad y recuperación.'
        },
        {
          id: 'fp-4',
          text: 'La consulta de historia clínica debe responder en menos de 1,5 segundos soportando 1.000 búsquedas por minuto.',
          expected: 'P',
          reason: 'P (Performance / Rendimiento · atributo de calidad): fija tiempos de respuesta y capacidad de carga.'
        },
        {
          id: 'fp-5',
          text: 'La arquitectura modular debe permitir incorporar nuevos medios de pago sin modificar el módulo clínico.',
          expected: 'S',
          reason: 'S (Soporte · atributo de calidad): refiere a adaptabilidad, mantenibilidad y escalabilidad.'
        },
        {
          id: 'fp-6',
          text: 'Los comprobantes electrónicos deben integrarse con el webservice oficial de AFIP cumpliendo la normativa fiscal vigente.',
          expected: '+',
          reason: '+ (Adicionales): abarca restricciones legales/normativas y requisitos de interfaz externa.'
        }
      ]
    }
  };
})(window);
