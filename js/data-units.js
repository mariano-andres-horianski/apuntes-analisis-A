(function (global) {
  'use strict';

  global.ADS_UNITS = [
    {
      id: 1,
      code: 'U1',
      title: 'Sistemas y Enfoque Sistémico',
      shortTitle: 'Sistemas y TGS',
      accent: 'cobalt',
      summary:
        'Fundamentos de la Teoría General de Sistemas, propiedades clave, clasificación, transformación de datos en información útil y separación entre el Espacio del Problema (qué) y el Espacio de la Solución (cómo).',
      keyTopics: [
        'Concepto de sistema y proceso de conversión',
        '3 premisas de la TGS y 4 principios de sistemas automatizados',
        'Retroalimentación, homeostasis, entropía, equifinalidad, teleología y totalismo',
        'Clasificación de sistemas (5 ejes)',
        'Datos vs. Información y sus 5 atributos (significado, importancia, vigencia, validez, valor)',
        'Enfoque sistémico, análisis multicausal, Discovery vs. Delivery y Product-Market Fit'
      ]
    },
    {
      id: 2,
      code: 'U2',
      title: 'Desarrollo de Sistemas de Información',
      shortTitle: 'Ciclos y Metodologías',
      accent: 'teal',
      summary:
        'Ingeniería de Software, modelo 3P+A, contraste entre Cascada, The Box y el Ciclo de Producto Lean, métodos ágiles como Design Thinking y Doble Diamante, impacto de la IA, gestión de proyectos, CMMI PP ML2 y calidad.',
      keyTopics: [
        'Análisis (qué) vs. Diseño (cómo) y Manifiesto Ágil',
        'Modelo 3P+A (Proyecto, Proceso, Producto, Arquitectura)',
        'The Box (7 pasos cíclicos) vs. Cascada y Ciclo de Producto Lean',
        'Design Thinking (divergente/convergente) y Metodología Doble Diamante',
        'Agilidad con IA: prototipado rápido sin reemplazar el research',
        'Proyecto no determinista, 3 áreas de gestión, CMMI PP ML2 (SG1-SG3) y Calidad Proceso vs. Producto'
      ]
    },
    {
      id: 3,
      code: 'U3',
      title: 'Ingeniería de Requerimientos',
      shortTitle: 'Requerimientos y V&V',
      accent: 'violet',
      summary:
        'Universo de discurso, proceso de IR (elicitar, modelar, analizar, gestionar), técnicas de elicitación y entrevista, RF vs. RNF y drivers de arquitectura, Verificación vs. Validación, costo exponencial del error y priorización.',
      keyTopics: [
        'Universo de discurso y proceso IR (Elicitar, Modelar, Analizar, Gestionar)',
        'Entrevistas (abiertas, cerradas, bipolares, sondeos; Pirámide, Embudo, Rombo) y Empathy Map',
        'Requerimientos Funcionales vs. No Funcionales (Producto, Organizacionales, Externos) y Drivers',
        'CMMI REQM (5 pasos y trazabilidad bidireccional) y Verificación vs. Validación',
        'Curva de costo del error, 4 tipos de demandas y propagación de defectos',
        'Priorización (MoSCoW, RICE, WSJF, Eisenhower, Impacto vs. Esfuerzo), Ley de Conway y SRS'
      ]
    },
    {
      id: 4,
      code: 'U4',
      title: 'Modelado de Sistemas',
      shortTitle: 'Modelos, Prototipos y MVP',
      accent: 'amber',
      summary:
        'Naturaleza prescriptiva de los modelos, distinción entre modelar y diagramar, proyección en vistas (viewpoints) para distintos stakeholders y diferencia estructural entre Prototipo, Iteración UP y MVP.',
      keyTopics: [
        'Modelos como abstracción prescriptiva y control arquitectónico',
        'Modelar es diferente a diagramar; múltiples modelos según el problema',
        'Vistas (viewpoints) orientadas a cada stakeholder',
        'Prototipos: código de prueba desechable para reducir incertidumbre',
        'MVP: código funcional en ciclo Construir-Medir-Aprender',
        'Product-Market Fit, retención y Continuous Discovery'
      ]
    },
    {
      id: 5,
      code: 'U5',
      title: 'Análisis Orientado a Objetos y UP',
      shortTitle: 'AOO, UP y Casos de Uso',
      accent: 'emerald',
      summary:
        'Transición de conceptos del dominio a clases, Proceso Unificado iterativo e incremental (dirigido por riesgo y centrado en arquitectura), fases, FURPS+, Casos de Uso caja negra, DSS, Modelo de Dominio e Historias de Usuario.',
      keyTopics: [
        'AOO: Concepto del dominio -> Abstracción -> Clase',
        'Proceso Unificado (UP): iterativo, incremental, Slicing, riesgo y arquitectura',
        '4 Fases (Inicio, Elaboración, Construcción, Transición), hitos, versiones y disciplinas',
        'Clasificación FURPS+ y atributos de calidad',
        'Casos de Uso caja negra (actor, precondiciones, postcondiciones, flujo principal y extensiones) y DSS',
        'Visión, Glosario, Modelo de Dominio (frases nominales) e Historias de Usuario (INVEST)'
      ]
    },
    {
      id: 6,
      code: 'U6',
      title: 'SDD (Spec-Driven Development)',
      shortTitle: 'Spec-Driven Dev',
      accent: 'rose',
      summary:
        'Desarrollo guiado por especificaciones para agentes de IA no deterministas: diferencia frente a vibe-coding, prompts, PRD y diseño; enfoques Spec-First, Spec-Anchored y Spec-as-Source; workflow Human-in-the-loop, DoR, Smart Kid, EARS y Gherkin.',
      keyTopics: [
        'Cuello de botella en la definición precisa del QUÉ ante IA no determinista',
        'SDD vs. Vibe-Coding y atributos de la SPEC (estructurada, verificable, evolutiva)',
        'SPEC como fuente de verdad frente a Prompt, PRD y Documento de Diseño',
        'Enfoques Spec-First, Spec-Anchored y Spec-as-Source',
        'Workflow de 3 fases, compuertas Human-in-the-loop y checklist DoR',
        'Smart Kid Principle, EARS, casos de borde, Gherkin e IDs únicos sin sobre-especificar'
      ]
    }
  ];

  global.ADS_GLOSSARY = [
    {
      term: 'Sistema',
      unit: 1,
      definition: 'Conjunto de elementos interdependientes (actores, procesos, recursos) que interactúan regularmente mediante un proceso de conversión para lograr un objetivo común.'
    },
    {
      term: 'TGS (Teoría General de Sistemas)',
      unit: 1,
      definition: 'Marco teórico basado en tres premisas: los sistemas existen dentro de sistemas mayores, son sistemas abiertos que interactúan con su entorno y sus funciones dependen de su estructura.'
    },
    {
      term: 'Retroalimentación',
      unit: 1,
      definition: 'Mecanismo de control que ajusta las entradas del sistema basándose en la evaluación de sus salidas.'
    },
    {
      term: 'Homeostasis',
      unit: 1,
      definition: 'Tendencia del sistema a adaptarse a los cambios del entorno y mantener su equilibrio interno.'
    },
    {
      term: 'Entropía',
      unit: 1,
      definition: 'Desgaste o aumento del desorden y la incertidumbre dentro de un sistema. Incorporar información estructurada la reduce.'
    },
    {
      term: 'Equifinalidad y Teleología',
      unit: 1,
      definition: 'Capacidad de alcanzar un mismo objetivo final a través de diferentes caminos o alternativas (equifinalidad), siempre guiados por un propósito (teleología).'
    },
    {
      term: 'Totalismo',
      unit: 1,
      definition: 'Propiedad sistémica por la cual el todo es superior a la simple suma de sus partes debido a la interdependencia de sus subsistemas.'
    },
    {
      term: 'Datos vs. Información',
      unit: 1,
      definition: 'Los datos son representaciones simbólicas aisladas de hechos; al procesarse con significado, importancia, vigencia, validez y valor se transforman en información útil.'
    },
    {
      term: 'Problem Space vs. Solution Space',
      unit: 1,
      definition: 'El Espacio del Problema define el QUÉ resolver, para quién y por qué (dominio y usuario); el Espacio de la Solución define el CÓMO construirlo (diseño y arquitectura).'
    },
    {
      term: 'Product-Market Fit',
      unit: 1,
      definition: 'Grado de alineación o puente entre la solución construida y las necesidades reales del mercado definidas en el espacio del problema.'
    },
    {
      term: 'Modelo 3P+A',
      unit: 2,
      definition: 'Estructura de la Ingeniería de Software que integra Proyecto (planificación y control), Proceso (marco de trabajo), Producto (objetivos y alcance) y Arquitectura (estructura base).'
    },
    {
      term: 'The Box',
      unit: 2,
      definition: 'Ciclo de vida del software en 7 etapas cíclicas donde en la etapa 3 (análisis de necesidades del sistema) se agrega valor transformando requerimientos humanos en especificaciones.'
    },
    {
      term: 'Design Thinking',
      unit: 2,
      definition: 'Método ágil creativo con fases divergente y convergente (Empatizar, Definir, Idear, Prototipar, Testear, Implementar) centrado en Product Discovery; valida hipótesis recién en el testeo.'
    },
    {
      term: 'Doble Diamante',
      unit: 2,
      definition: 'Metodología de doble pensamiento creativo en cuatro etapas: Descubrir y Definir (exploran el problema) y Desarrollar y Entregar (construyen la solución).'
    },
    {
      term: 'CMMI (PP ML2)',
      unit: 2,
      definition: 'Modelo de buenas prácticas que garantiza la calidad del proceso. En Planificación de Proyectos (ML2) define 3 metas específicas: SG1 estimaciones, SG2 plan, SG3 compromiso.'
    },
    {
      term: 'Calidad de Proceso vs. Calidad de Producto',
      unit: 2,
      definition: 'Un proceso deficiente garantiza un producto deficiente, pero un buen proceso (CMMI, ISO) no asegura por sí solo un buen producto, el cual requiere verificación y testing.'
    },
    {
      term: 'Universo de Discurso',
      unit: 3,
      definition: 'Todo el contexto en el que el software se desarrolla, incluyendo fuentes de información, reglas, procesos y personas relacionadas.'
    },
    {
      term: 'Elicitación',
      unit: 3,
      definition: 'Actividad del proceso de IR enfocada en investigar el dominio y relevar requerimientos desde fuentes priorizadas (especialmente usuarios) mediante entrevistas, cuestionarios u observación.'
    },
    {
      term: 'Estructuras de Entrevista (Pirámide, Embudo, Rombo)',
      unit: 3,
      definition: 'Pirámide inicia cerrada y termina abierta; Embudo inicia abierta y termina cerrada; Rombo o diamante inicia cerrada, abre en el centro y vuelve a cerrar.'
    },
    {
      term: 'Empathy Map',
      unit: 3,
      definition: 'Herramienta de elicitación basada en 7 preguntas sobre el usuario (con quién empatizar, qué necesita hacer, qué ve, dice, hace, escucha, piensa/siente) para detectar dolores y deseos.'
    },
    {
      term: 'Drivers de Arquitectura',
      unit: 3,
      definition: 'Requerimientos no funcionales que impactan en todas las funcionalidades (visibles como seguridad/usabilidad o no visibles como modificabilidad/portabilidad), vinculados al negocio.'
    },
    {
      term: 'Verificación vs. Validación',
      unit: 3,
      definition: 'La verificación asegura que se construye el sistema correctamente (criterios, formato, completitud); la validación asegura que se construye la cosa correcta según lo que el usuario necesita.'
    },
    {
      term: 'Demandas Erróneas, Inconsistentes y Omitidas',
      unit: 3,
      definition: 'Tipos de fallas en lo solicitado por el cliente: pedir algo que no refleja su necesidad real (errónea), pedir A y B contradictorios (inconsistente) o no mencionar algo necesario (omitida).'
    },
    {
      term: 'MoSCoW / RICE / WSJF',
      unit: 3,
      definition: 'Técnicas de priorización: MoSCoW clasifica Must/Should/Could/Won\'t; RICE pondera Reach, Impact, Confidence y Effort; WSJF prioriza trabajos cortos de mayor retorno.'
    },
    {
      term: 'Ley de Conway',
      unit: 3,
      definition: 'Tendencia de las estructuras de los sistemas a copiar las estructuras de comunicación de la organización que los diseña; el análisis del dominio busca evitar que condicione mal la arquitectura.'
    },
    {
      term: 'SRS (Especificación de Requerimientos de Software)',
      unit: 3,
      definition: 'Declaración oficial y precisa de lo que deben implementar los desarrolladores, integrando requerimientos de usuario y del sistema para todos los stakeholders.'
    },
    {
      term: 'Modelo y Vista (Viewpoint)',
      unit: 4,
      definition: 'Un modelo es una abstracción prescriptiva de la realidad con un objetivo definido; una vista es su proyección desde la perspectiva particular de un stakeholder.'
    },
    {
      term: 'Prototipo',
      unit: 4,
      definition: 'Código de prueba funcional pero desechable usado para recopilar información, reducir incertidumbre y obtener feedback temprano; no es un subconjunto del producto final.'
    },
    {
      term: 'MVP (Producto Mínimo Viable)',
      unit: 4,
      definition: 'Versión inicial con código funcional mínimo que recorre el ciclo Construir-Medir-Aprender de forma iterativo-incremental para validar Market Fit y retención.'
    },
    {
      term: 'Proceso Unificado (UP)',
      unit: 5,
      definition: 'Proceso iterativo e incremental centrado en la arquitectura y dirigido por el riesgo, organizado en 4 fases (Inicio, Elaboración, Construcción, Transición) donde cada iteración entrega código funcional.'
    },
    {
      term: 'Slicing',
      unit: 5,
      definition: 'Técnica para dividir un requerimiento grande en partes más pequeñas para que quepa en una iteración de duración corta terminando siempre con código funcional.'
    },
    {
      term: 'FURPS+',
      unit: 5,
      definition: 'Modelo de clasificación de requisitos en UP: Funcional, Usabilidad, Reliability (fiabilidad), Performance, Soporte y restricciones adicionales (+).'
    },
    {
      term: 'Caso de Uso (Caja Negra)',
      unit: 5,
      definition: 'Contrato en lenguaje natural que especifica qué hace el sistema ante interacciones de actores sin detallar diseño ni implementación; incluye precondiciones, postcondiciones, flujo principal y extensiones.'
    },
    {
      term: 'DSS (Diagrama de Secuencia de Sistema)',
      unit: 5,
      definition: 'Diagrama que muestra los eventos generados por actores externos hacia el sistema tratado como caja negra y el orden de interacción en un escenario.'
    },
    {
      term: 'Modelo de Dominio',
      unit: 5,
      definition: 'Descomposición del dominio del problema en clases conceptuales significativas con atributos clave y asociaciones (no es un diagrama de clases de software), obtenida mediante categorías o frases nominales.'
    },
    {
      term: 'Historias de Usuario (INVEST)',
      unit: 5,
      definition: 'Formato ágil "Como <rol>, quiero <acción> para <valor>", que debe ser Independiente, Negociable, Valiosa, Estimable, Atómica (Small) y Testeable.'
    },
    {
      term: 'SDD (Spec-Driven Development)',
      unit: 6,
      definition: 'Metodología de desarrollo asistido por IA basada en una especificación estructurada, verificable y evolutiva como fuente de verdad, opuesta al vibe-coding.'
    },
    {
      term: 'Vibe-Coding',
      unit: 6,
      definition: 'Generación improvisada de código con IA mediante prompts efímeros sin especificación ni trazabilidad, vulnerable al no-determinismo y a errores costosos.'
    },
    {
      term: 'Spec-First / Spec-Anchored / Spec-as-Source',
      unit: 6,
      definition: 'Tres modos SDD: Spec-First descarta la spec tras generar código; Spec-Anchored evoluciona spec y código a la par; Spec-as-Source solo evoluciona la spec y regenera el código.'
    },
    {
      term: 'Human-in-the-loop y DoR',
      unit: 6,
      definition: 'Compuertas obligatorias de revisión humana entre fases del workflow SDD apoyadas en una checklist Definition of Ready (DoR) que verifica si el requerimiento está completo y listo.'
    },
    {
      term: 'Smart Kid Principle',
      unit: 6,
      definition: 'Criterio de calidad de una SPEC: cualquier persona o agente sin contexto previo puede leerla y construir lo esperado, aclarando alcance, fuera de alcance y ejemplos concretos.'
    },
    {
      term: 'EARS y Gherkin',
      unit: 6,
      definition: 'EARS es una sintaxis estructurada para reducir ambigüedad en requisitos; Gherkin (Dado-Cuando-Entonces) formaliza criterios de aceptación verificables y casos de borde.'
    }
  ];
})(window);
