(function (global) {
  'use strict';

  global.ADS_JOURNEY = [
    {
      id: 'u1-sistema',
      number: 1,
      unit: 1,
      title: '¿Qué es un Sistema y cómo vence a la Entropía?',
      subtitle: 'Empezando desde cero: elementos interdependientes, TGS, entropía, homeostasis y transformación de datos en información útil.',
      badge: 'Capítulo 1 · Unidad 1',
      storyIntro:
        'Antes de hablar de código o diagramas, la materia arranca por la base: cualquier organización, empresa o software funciona como un sistema. Un sistema no es un grupo suelto de partes: es un conjunto de elementos interdependientes que transforman entradas del entorno en salidas útiles para cumplir un objetivo común.',
      concepts: [
        {
          title: 'Conversión + Totalismo',
          text: 'Entre la entrada y la salida ocurre un proceso de conversión que agrega valor. Como las partes interactúan, el todo es superior a la suma de las partes (totalismo).'
        },
        {
          title: 'Entropía vs. Información',
          text: 'Sin orden ni señales claras, todo sistema tiende al desorden y la incertidumbre (entropía). Incorporar información estructurada (con significado, importancia, vigencia, validez y valor) reduce esa entropía.'
        },
        {
          title: 'Retroalimentación, Homeostasis y Especialización',
          text: 'La retroalimentación ajusta las entradas mirando las salidas para mantener el equilibrio (homeostasis). Cuidado en sistemas automatizados: cuanto más especializado sea el sistema, menos capaz es de adaptarse a los cambios.'
        }
      ],
      labId: 'lab-u1-sistema',
      labTitle: 'Laboratorio 1: Sistema Abierto, Entropía y Homeostasis en Vivo',
      labHint: 'Probá enviar datos aislados vs. información estructurada, activá o desactivá la retroalimentación ante una perturbación y mové el deslizador de especialización.',
      quickCheck: {
        prompt: 'Si automatizamos un proceso administrativo dejándolo sumamente rígido y especializado, y luego cambia la normativa del negocio, ¿qué principio explica su dificultad para reaccionar?',
        options: [
          'La equifinalidad impide que existan dos soluciones para un mismo objetivo.',
          'Entre más especializado sea un sistema automatizado, menos capaz es de adaptarse a los cambios.',
          'La información estructurada aumenta automáticamente la entropía operativa.',
          'Los sistemas cerrados siempre crecen más rápido que los abiertos.'
        ],
        correctIndex: 1,
        feedback: 'Exacto: el primer principio de los sistemas automatizados advierte que la hiperespecialización reduce la capacidad de adaptación ante cambios del entorno.'
      }
    },
    {
      id: 'u1-espacios',
      number: 2,
      unit: 1,
      title: 'Separar el QUÉ (Problema) del CÓMO (Solución)',
      subtitle: 'Enfoque sistémico, análisis multicausal, Product Discovery vs. Delivery y Product-Market Fit.',
      badge: 'Capítulo 2 · Unidad 1',
      storyIntro:
        'Uno de los errores más costosos en sistemas es escuchar un síntoma y saltar directo a programar una pantalla o elegir una base de datos. Un problema siempre es multicausal: múltiples subsistemas interactúan. Por eso el Enfoque Sistémico separa estrictamente el Espacio del Problema (qué resolver, para quién y por qué) del Espacio de la Solución (cómo construirlo).',
      concepts: [
        {
          title: 'Espacio del Problema (El QUÉ · Discovery)',
          text: 'Describe necesidades no satisfechas, dolores y restricciones del dominio como una caja negra, sin mencionar lenguajes, frameworks ni arquitectura interna.'
        },
        {
          title: 'Espacio de la Solución (El CÓMO · Delivery)',
          text: 'Define arquitectura, estructuras de datos, componentes e implementación. Llega después de entender el problema.'
        },
        {
          title: 'Las 3 razones de esta separación + Market Fit',
          text: 'Separar QUÉ de CÓMO (1) evita suposiciones prematuras, (2) previene construir el producto equivocado sin research y (3) vuelve mantenibles los requisitos si cambia la tecnología. El puente entre ambos mundos es el Product-Market Fit.'
        }
      ],
      labId: 'lab-u1-espacios',
      labTitle: 'Laboratorio 2: Caja Negra y Puente Product-Market Fit',
      labHint: 'Alterná entre mantener los requisitos como caja negra o mezclar tecnología en ellos, y luego simulá un cambio de plataforma o saltar el Discovery.',
      quickCheck: {
        prompt: '¿Qué ventaja directa ganamos si redactamos los requisitos como "caja negra" sin incluir detalles de base de datos ni lenguaje?',
        options: [
          'Evitamos tener que diseñar una arquitectura durante todo el proyecto.',
          'La documentación de requisitos sigue vigente y mantenible aunque cambie la plataforma o tecnología.',
          'Ya no necesitamos hablar con usuarios ni investigar el dominio del problema.',
          'Convertimos automáticamente un problema multicausal en un problema determinista.'
        ],
        correctIndex: 1,
        feedback: 'Correcto: además de evitar soluciones prematuras y prevenir construir el producto equivocado, aislar el QUÉ garantiza mantenibilidad ante cambios tecnológicos.'
      }
    },
    {
      id: 'u2-ciclos',
      number: 3,
      unit: 2,
      title: 'Modelo 3P+A y Ciclos de Vida en Movimiento',
      subtitle: 'Cómo se organiza un proyecto de software (Proyecto, Proceso, Producto + Arquitectura) y cómo avanzan Cascada, The Box, Lean y Doble Diamante.',
      badge: 'Capítulo 3 · Unidad 2',
      storyIntro:
        'Ya sabiendo qué problema existe, necesitamos organizar cómo construir software de calidad sin desperdiciar tiempo ni personas. El modelo 3P+A muestra que Proyecto, Proceso y Producto se apoyan en un cimiento inherente: la Arquitectura. A su vez, los distintos ciclos de vida ordenan el trabajo según tengamos al usuario al lado o debamos validar hipótesis rápidas en el mercado.',
      concepts: [
        {
          title: '3P+A y la Arquitectura como cimiento',
          text: 'Proyecto planifica y controla; Proceso ordena actividades e hitos; Producto define objetivos y alcance; y la Arquitectura soporta los componentes. Si la arquitectura es débil, el producto colapsa frente a un cambio.'
        },
        {
          title: 'The Box vs. Cascada vs. Lean',
          text: 'Cascada es secuencial; The Box recorre 7 etapas cíclicas (agregando valor en el paso 3 al filtrar necesidades en el Problem Space); Lean asume que el usuario no está para elicitar y valida supuestos con MVPs tras un Discovery liviano.'
        },
        {
          title: 'Doble Diamante, IA y Calidad',
          text: 'La Agilidad Moderna combina Design Thinking (Discovery) + Lean (cosas correctas) + Agile (construir bien). La IA acelera prototipos, pero el research sigue siendo clave. Recordá CMMI PP (SG1 estimar, SG2 planificar, SG3 comprometer) y que un buen proceso no garantiza por sí solo un buen producto sin testing.'
        }
      ],
      labId: 'lab-u2-ciclos',
      labTitle: 'Laboratorio 3: Estabilidad 3P+A y Reproductor Animado de Ciclos',
      labHint: 'Probá primero qué pasa ante un cambio con arquitectura sólida vs. débil; luego reproducí paso a paso Cascada, The Box, Lean y Doble Diamante.',
      quickCheck: {
        prompt: 'En el ciclo de vida de 7 etapas "The Box", ¿dónde se agrega verdadero valor analizando si los pedidos humanos tienen sentido y validez para el sistema?',
        options: [
          'En la etapa 3 (análisis de necesidades del sistema), convirtiendo requerimientos humanos en especificaciones.',
          'Recién en la etapa 6, cuando se ejecutan las pruebas de mantenimiento.',
          'Únicamente en la etapa 4 al elegir el proveedor de servidores.',
          'En The Box no existe análisis del Problem Space porque copia al modelo Lean.'
        ],
        correctIndex: 0,
        feedback: 'Así es: la etapa 3 de The Box transforma las demandas de los usuarios en especificaciones valiosas, válidas y con sentido dentro del Problem Space.'
      }
    },
    {
      id: 'u3-elicitacion',
      number: 4,
      unit: 3,
      title: 'Elicitar y Validar sin Dejar Pasar Errores',
      subtitle: 'Sumergirse en el Universo de Discurso, conducir entrevistas (Pirámide, Embudo, Rombo) y filtrar demandas con Verificación y Validación.',
      badge: 'Capítulo 4 · Unidad 3',
      storyIntro:
        'Para resolver el problema correcto hay que meterse en el Universo de Discurso: las personas, documentos y reglas reales donde vivirá el software. Sin embargo, los usuarios muchas veces no saben expresar lo que necesitan, piden cosas contradictorias o dan por obvios pasos críticos. La Ingeniería de Requerimientos sistematiza cómo elicitar, modelar, analizar y gestionar esas demandas.',
      concepts: [
        {
          title: 'Entrevistas y Empathy Map',
          text: 'Combinamos preguntas abiertas, cerradas, bipolares (sí/no) y sondeos ("¿por qué?" / ejemplos) en forma de Pirámide, Embudo o Rombo. El Empathy Map usa 7 preguntas para descubrir dolores y deseos.'
        },
        {
          title: '4 Demandas de Cliente',
          text: 'Un pedido puede ser Correcto (ideal), Erróneo (pide texto libre para fecha en vez de calendario), Inconsistente (pide A y B opuestos) u Omitido (no menciona algo indispensable).'
        },
        {
          title: 'Verificación vs. Validación (V&V)',
          text: 'Verificación asegura que construimos correctamente (formato completo, consistente, verificable). Validación asegura que construimos la cosa correcta según lo que el usuario necesita realmente.'
        }
      ],
      labId: 'lab-u3-elicitacion',
      labTitle: 'Laboratorio 4: Simulador de Entrevistas y Compuerta V&V',
      labHint: 'Elegí Pirámide, Embudo o Rombo y simulá la entrevista; luego probá pasar las 4 demandas por las compuertas de Verificación y Validación.',
      quickCheck: {
        prompt: 'Un documento SRS cumple todas las reglas de formato y no tiene contradicciones, pero el cliente lo rechaza porque describe un proceso que nadie usa. ¿Qué control falló?',
        options: [
          'Falló la Verificación, porque el formato de redacción era incorrecto.',
          'Falló la Validación, porque no se aseguró que se esté construyendo la cosa correcta para el usuario.',
          'Fallaron las pruebas unitarias de la fase de Transición.',
          'No falló ningún control porque la consistencia interna garantiza el éxito.'
        ],
        correctIndex: 1,
        feedback: 'Exacto: pasó la Verificación formal ("construir correctamente"), pero falló la Validación ("construir la cosa correcta").'
      }
    },
    {
      id: 'u3-errores-prio',
      number: 5,
      unit: 3,
      title: 'El Costo Exponencial del Error y Cómo Priorizar',
      subtitle: 'Propagación de defectos (1x → 100x+), requerimientos funcionales vs. no funcionales, drivers de arquitectura y matrices de priorización.',
      badge: 'Capítulo 5 · Unidad 3',
      storyIntro:
        'Un pequeño malentendido en la primera entrevista no se queda quieto: viaja hacia los modelos, la arquitectura, el código y las pruebas. Cuanto más tarde lo descubrimos, exponencialmente más caro cuesta repararlo. Además, como los recursos son limitados, "cuando todo es importante, nada es importante": debemos priorizar por riesgo, impacto y esfuerzo.',
      concepts: [
        {
          title: 'Curva de propagación (1x → 100x+)',
          text: 'Corregir en Requisitos cuesta 1x, en Diseño 3–6x, en Codificación 10x, en Pruebas 15–40x y en Operación implica retirar o parchar el producto dañando costos y reputación.'
        },
        {
          title: 'RF, RNF y Drivers de Arquitectura',
          text: 'Los RNF (del Producto, Organizacionales y Externos) muchas veces son más críticos que los RF porque si fallan dejan inusable al sistema. Los Drivers de arquitectura atraviesan todas las funcionalidades nacidos de objetivos de negocio.'
        },
        {
          title: 'Priorizar con criterio',
          text: 'Primero se atacan los requisitos más riesgosos para probar viabilidad, y se ordena con Impacto vs. Esfuerzo (Ganancias rápidas primero, evitar Tareas ingratas), MoSCoW, RICE, WSJF o Eisenhower.'
        }
      ],
      labId: 'lab-u3-errores-prio',
      labTitle: 'Laboratorio 5: Propagación Exponencial y Matriz Impacto vs. Esfuerzo',
      labHint: 'Avanzá las fases viendo multiplicarse el costo del error (y frenalo activando V&V temprana); luego ubicá requisitos reales en la matriz 2×2.',
      quickCheck: {
        prompt: 'Según la Matriz de Impacto vs. Esfuerzo, ¿qué debemos hacer con un requerimiento de bajo impacto en el negocio y muy alto esfuerzo técnico?',
        options: [
          'Clasificarlo como Ganancia Rápida y programarlo en la primera semana.',
          'Clasificarlo como Tarea Ingrata y descartarlo o posponerlo.',
          'Convertirlo en un Driver de Arquitectura obligatorio.',
          'Priorizarlo por encima de los requerimientos más riesgosos del proyecto.'
        ],
        correctIndex: 1,
        feedback: 'Correcto: bajo impacto + alto esfuerzo corresponde a "Tareas ingratas", que conviene descartar o posponer para enfocar recursos en riesgos críticos y ganancias rápidas.'
      }
    },
    {
      id: 'u4-modelos-mvp',
      number: 6,
      unit: 4,
      title: 'Modelar en Vistas y Elegir Prototipo, UP o MVP',
      subtitle: 'Modelar ≠ diagramar, viewpoints según stakeholder y el contraste clave entre código de prueba (Prototipo), incremento UP y MVP.',
      badge: 'Capítulo 6 · Unidad 4',
      storyIntro:
        'Un sistema real es demasiado complejo para mirarlo entero de una sola vez. Por eso abstraemos lo relevante en modelos prescriptivos y proyectamos vistas distintas para cada rol. Y cuando pasamos a validar con software, es vital no confundir un Prototipo descartable con una Iteración de UP ni con un MVP lanzado al mercado.',
      concepts: [
        {
          title: 'Modelar ≠ Diagramar y Viewpoints',
          text: 'Modelar es abstraer estructura, reglas y decisiones con un objetivo definido (puede ser texto o gráfico). Cada stakeholder necesita una Vista (viewpoint) que oculte ruido irrelevante para su rol.'
        },
        {
          title: 'Prototipo vs. Iteración UP',
          text: 'El Prototipo es código de prueba desechable para reducir incertidumbre (riesgo: que el cliente crea que es el producto final). Una Iteración UP es código real probado e integrado que se acumula hacia el sistema final.'
        },
        {
          title: 'MVP y Continuous Discovery',
          text: 'El MVP es código funcional mínimo puesto frente a usuarios reales (Construir-Medir-Aprender). Cuando logra retención sostenida demuestra Market Fit y evoluciona al producto final, manteniendo Continuous Discovery.'
        }
      ],
      labId: 'lab-u4-modelos-mvp',
      labTitle: 'Laboratorio 6: Lente de Viewpoints y Carrera Prototipo vs. UP vs. MVP',
      labHint: 'Cambiá de stakeholder para ver cómo cambia la proyección del modelo, y luego ejecutá la carrera de 3 ciclos para observar qué pasa con cada código.',
      quickCheck: {
        prompt: '¿Qué diferencia estructural distingue a un MVP de un Prototipo clásico?',
        options: [
          'El MVP no lleva código funcional; el Prototipo siempre sale a producción masiva.',
          'El Prototipo es código de prueba para validar supuestos sin ser parte del producto final; el MVP es software funcional inicial que busca retención y Market Fit.',
          'El Prototipo recorre el ciclo Construir-Medir-Aprender en el mercado durante años.',
          'No tienen diferencias: ambos términos significan maqueta en papel.'
        ],
        correctIndex: 1,
        feedback: 'Exacto: el Prototipo es código de prueba desechable; el MVP es una versión mínima real del producto para medir retención y Market Fit.'
      }
    },
    {
      id: 'u5-aoo-up',
      number: 7,
      unit: 5,
      title: 'Análisis Orientado a Objetos y Proceso Unificado',
      subtitle: 'De conceptos del dominio a clases, las 4 fases de UP (Slicing, Riesgo, Arquitectura), FURPS+, Casos de Uso caja negra, DSS y Modelo de Dominio.',
      badge: 'Capítulo 7 · Unidad 5',
      storyIntro:
        'En el Análisis Orientado a Objetos miramos el dominio del problema buscando sus conceptos reales antes de diseñar clases de código. Para ordenar ese trabajo de forma iterativa e incremental aparece el Proceso Unificado (UP), apoyado en casos de uso caja negra, DSS, Modelo de Dominio, FURPS+ e Historias de Usuario ágiles.',
      concepts: [
        {
          title: 'UP: Riesgo, Arquitectura y Slicing',
          text: 'Cada iteración corta entrega código funcional (usando Slicing). Inicio (1 iteración) evalúa viabilidad; Elaboración construye la arquitectura núcleo y resuelve el alto riesgo; Construcción desarrolla lo de menor riesgo; Transición hace betas y producción.'
        },
        {
          title: 'Casos de Uso Caja Negra y DSS',
          text: 'Los Casos de Uso definen contratos en lenguaje natural (precondiciones que se asumen verdaderas sin probarse, happy path, extensiones y postcondiciones). El DSS grafica los eventos externos hacia :Sistema como caja negra.'
        },
        {
          title: 'FURPS+, Modelo de Dominio e INVEST',
          text: 'FURPS+ clasifica Funcional y calidad (U, R, P, S) + adicionales. El Modelo de Dominio extrae clases conceptuales (frases nominales de los CU, sin métodos de código). Las Historias de Usuario (artefacto ágil no UP) cumplen INVEST.'
        }
      ],
      labId: 'lab-u5-aoo-up',
      labTitle: 'Laboratorio 7: Escáner de Fases UP y Flujo DSS → Modelo de Dominio',
      labHint: 'Recorré las 4 fases de UP viendo cómo caen los riesgos y cambian las disciplinas; luego simulá un Caso de Uso en DSS extrayendo conceptos al Modelo de Dominio.',
      quickCheck: {
        prompt: 'Durante un Caso de Uso bien especificado como caja negra, ¿cómo deben tratarse sus precondiciones?',
        options: [
          'Se programan como consultas SQL dentro del primer paso del escenario principal.',
          'Se asumen verdaderas antes de iniciar el caso de uso y no se prueban dentro de él.',
          'Describen únicamente los colores y botones de la pantalla inicial.',
          'Solo existen en las Historias de Usuario ágiles y nunca en UP.'
        ],
        correctIndex: 1,
        feedback: 'Muy bien: las precondiciones establecen qué debe cumplirse antes de empezar (por otro caso de uso previo exitoso) y se asumen verdaderas.'
      }
    },
    {
      id: 'u6-sdd',
      number: 8,
      unit: 6,
      title: 'La Era de la IA y Spec-Driven Development (SDD)',
      subtitle: 'Por qué el cuello de botella pasó al QUÉ, SDD vs. vibe-coding, Spec-First / Anchored / as-Source, Human-in-the-loop, DoR, Smart Kid, EARS y Gherkin.',
      badge: 'Capítulo 8 · Unidad 6',
      storyIntro:
        'Cerramos el recorrido conectando toda la materia con el presente: cuando un agente de IA escribe código en segundos, escribir sintaxis deja de ser el cuello de botella. Como la IA no es determinista, improvisar con prompts ("vibe-coding") multiplica errores. SDD rescata el rigor del análisis creando una SPEC estructurada, verificable y evolutiva como única fuente de verdad.',
      concepts: [
        {
          title: 'SPEC vs. Prompt, PRD y Diseño',
          text: 'Un prompt caduca en segundos; un PRD no evoluciona sincronizado con el código; un Documento de Diseño explica el cómo. La SPEC (ej. Markdown para agentes) es fuente de verdad del QUÉ y el código es su consecuencia.'
        },
        {
          title: 'Spec-First vs. Spec-Anchored vs. Spec-as-Source',
          text: 'Spec-First descarta la spec tras generar (sin trazabilidad). Spec-Anchored evoluciona spec y código a la par. Spec-as-Source evoluciona solo la spec y regenera el código afectado.'
        },
        {
          title: 'Workflow, Human-in-the-loop y Calidad de SPEC',
          text: 'Tres fases (Plan → SPEC → Construcción) con compuertas Human-in-the-loop y checklist DoR (bajo costo temprano). Redactada con Smart Kid Principle (entendible sin contexto, qué hacer y qué NO), EARS, casos de borde, Gherkin e IDs únicos sin sobre-especificar.'
        }
      ],
      labId: 'lab-u6-sdd',
      labTitle: 'Laboratorio 8: Vibe-Coding vs. Workflow SDD y Evolución de Specs',
      labHint: 'Probá pulsar varias veces "Vibe-coding" para ver el no-determinismo de la IA, luego aprobá las puertas Human-in-the-loop en SDD y compará cómo evoluciona cada enfoque.',
      quickCheck: {
        prompt: 'Si tu equipo adopta el enfoque "Spec-as-Source" y cambia una regla de negocio, ¿qué debe hacer?',
        options: [
          'Editar a mano solo el código y borrar para siempre la especificación.',
          'Actualizar la SPEC, descartar el código afectado por ese cambio y volver a generarlo desde la SPEC.',
          'Enviar un prompt corto sin registro de cambios ni criterios DoR.',
          'Convertir la SPEC en un Documento de Diseño lleno de código SQL.'
        ],
        correctIndex: 1,
        feedback: 'Perfecto: en Spec-as-Source solo evoluciona la especificación; cuando cambia un requisito, el código afectado se descarta y se regenera.'
      }
    }
  ];

  global.ADS_JOURNEY_LABS_DATA = {
    interviews: {
      piramide: {
        label: 'Pirámide (Cerradas → Abiertas)',
        steps: [
          { band: 0, qType: 'Cerrada / Bipolar', text: '“¿Actualmente emiten más de 500 remitos por día? (Sí / No)”' },
          { band: 1, qType: 'Cerrada acotada', text: '“¿Qué sistema o planilla utilizan hoy para registrar las entregas?”' },
          { band: 2, qType: 'Abierta + Sondeo', text: '“¿Qué problemas suelen ocurrir en horas pico y por qué cree que pasan?”' }
        ]
      },
      embudo: {
        label: 'Embudo (Abiertas → Cerradas)',
        steps: [
          { band: 0, qType: 'Abierta amplia', text: '“Contame cómo funciona el circuito completo desde que llega un pedido.”' },
          { band: 1, qType: 'Sondeo / Ejemplo', text: '“¿Podrías darme un ejemplo concreto de cuando un pedido queda trabado?”' },
          { band: 2, qType: 'Cerrada / Bipolar', text: '“¿El supervisor debe autorizar montos mayores a $100.000? (Sí / No)”' }
        ]
      },
      rombo: {
        label: 'Rombo (Cerrada → Abierta → Cerrada)',
        steps: [
          { band: 0, qType: 'Cerrada inicial', text: '“¿Cuántas personas operan la caja en el turno tarde?”' },
          { band: 1, qType: 'Abierta exploratoria', text: '“¿Qué parte de la cobranza te genera más demora o frustración?”' },
          { band: 2, qType: 'Cerrada de cierre', text: '“Entonces, ¿confirmamos que el cierre de caja siempre es a las 21 hs?”' }
        ]
      }
    },
    demands: [
      {
        id: 'ok',
        label: 'Correcta',
        quote: '“Necesito cancelar un turno hasta 24 hs antes y liberar ese horario.”',
        passesVerif: true,
        passesValid: true,
        verdict: 'Pasa Verificación (clara y completa) y Validación (refleja la necesidad real del dominio).'
      },
      {
        id: 'erronea',
        label: 'Errónea',
        quote: '“Poneme una caja de texto libre para que escriban cualquier fecha.”',
        passesVerif: true,
        passesValid: false,
        verdict: 'Puede pasar Verificación de formato, pero FALLA Validación: en realidad necesita un calendario que evite feriados y formatos inválidos.'
      },
      {
        id: 'inconsistente',
        label: 'Inconsistente',
        quote: '“Req A: Todo acceso es anónimo. Req B: Registrar DNI obligatorio en cada clic.”',
        passesVerif: false,
        passesValid: false,
        verdict: 'FALLA Verificación inmediatamente: Req A y Req B se contradicen entre sí (requiere negociación).'
      },
      {
        id: 'omitida',
        label: 'Omitida',
        quote: 'El usuario pide facturar pero olvida mencionar notas de crédito por devolución.',
        passesVerif: true,
        passesValid: false,
        verdict: 'Lo escrito parece consistente en Verificación, pero FALLA Validación porque falta una operación crítica del dominio.'
      }
    ],
    errorStages: [
      { name: 'Requisitos', mult: 1, barPct: 4, costLabel: '1x (Base)', note: 'Se corrige en minutos editando la especificación o validando con el usuario.' },
      { name: 'Diseño', mult: 5, barPct: 12, costLabel: '3–6x', note: 'Exige rehacer modelos de dominio, interfaces y arquitectura afectada.' },
      { name: 'Codificación', mult: 10, barPct: 24, costLabel: '10x', note: 'Obliga a reescribir módulos programados, bases de datos y lógica acoplada.' },
      { name: 'Pruebas', mult: 30, barPct: 54, costLabel: '15–40x', note: 'Dispara ciclos completos de retrabajo en testing unitario, integración y QA.' },
      { name: 'Operación', mult: 100, barPct: 100, costLabel: '100x+ Crítico', note: 'Puede obligar a retirar la app de producción, con altísimo costo y daño de reputación.' }
    ],
    matrixItems: [
      { id: 'm1', title: 'Recordatorio por mail de turnos', quad: 'Ganancias rápidas', imp: 'Alto Impacto', esf: 'Bajo Esfuerzo', tip: '¡Hacer primero! Baja el ausentismo con desarrollo simple.', color: 'success' },
      { id: 'm2', title: 'Motor de facturación AFIP completo', quad: 'Grandes proyectos', imp: 'Alto Impacto', esf: 'Alto Esfuerzo', tip: 'Planificar con Slicing e iteraciones; validar riesgos temprano.', color: 'primary' },
      { id: 'm3', title: 'Selector de tema de color en perfil', quad: 'Actividades menores', imp: 'Bajo Impacto', esf: 'Bajo Esfuerzo', tip: 'Relleno secundario cuando sobre capacidad.', color: 'warning' },
      { id: 'm4', title: 'Reportes 3D animados heredados', quad: 'Tareas ingratas', imp: 'Bajo Impacto', esf: 'Alto Esfuerzo', tip: 'Descartar o posponer: consume mucho esfuerzo y aporta poco valor.', color: 'danger' }
    ],
    upPhases: [
      {
        name: '1. Inicio (Inception)',
        risk: 92,
        efforts: { neg: 60, req: 45, dis: 20, imp: 10, pru: 10 },
        summary: 'Generalmente 1 sola iteración. Estudio de viabilidad, visión aproximada, negocio y alcance. NO es fase de requisitos exhaustivos.'
      },
      {
        name: '2. Elaboración',
        risk: 35,
        efforts: { neg: 75, req: 85, dis: 75, imp: 45, pru: 40 },
        summary: 'Se refina la visión, se implementa la arquitectura núcleo y se resuelven los requerimientos de mayor riesgo. Mejoran las estimaciones.'
      },
      {
        name: '3. Construcción',
        risk: 15,
        efforts: { neg: 20, req: 35, dis: 45, imp: 95, pru: 80 },
        summary: 'Concentra la mayor cantidad de iteraciones (con Slicing): se implementan los requerimientos de menor riesgo y funciones restantes.'
      },
      {
        name: '4. Transición',
        risk: 5,
        efforts: { neg: 10, req: 15, dis: 15, imp: 45, pru: 95 },
        summary: 'Pruebas beta con usuarios reales para retroalimentación final y pase a producción de la versión definitiva.'
      }
    ],
    vibeVariants: [
      'Intento #1 (IA inventa): Login con usuario texto plano, sin bloqueo de intentos y guardando sesión en cookie sin expiración.',
      'Intento #2 (IA cambia todo): Login solo con PIN de 4 dígitos, bloquea al 1° fallo pero no permite recuperar clave.',
      'Intento #3 (IA contradice): Pide correo y teléfono obligatorio pero acepta contraseñas vacías en casos de borde.'
    ]
  };
})(window);
