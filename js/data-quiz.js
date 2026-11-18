(function (global) {
  'use strict';

  global.ADS_QUIZ = [
    // ===================== UNIDAD 1 =====================
    {
      id: 'u1-q01',
      unit: 1,
      topic: 'Concepto de Sistema',
      difficulty: 'básica',
      question: 'Según la definición de sistema en el apunte, ¿qué ocurre en su interior entre la recepción de entradas y la generación de salidas útiles?',
      options: [
        'Se ejecuta un proceso de conversión o transformación a través de sus subsistemas y elementos.',
        'Se archivan los datos aislados sin modificarlos hasta que un usuario externo los solicite.',
        'Se eliminan las fronteras del sistema para fusionar directamente el entorno con los resultados.',
        'Se reemplaza la estructura original por funciones independientes que actúan sin objetivo común.'
      ],
      correctIndex: 0,
      explanation: 'Todo sistema recibe entradas de su entorno y aplica un proceso de conversión (transformación) mediante sus subsistemas y elementos para generar salidas útiles orientadas a un objetivo común.'
    },
    {
      id: 'u1-q02',
      unit: 1,
      topic: 'Premisas de la TGS',
      difficulty: 'básica',
      question: '¿Cuáles son las tres premisas fundamentales sobre las que se apoya la Teoría General de Sistemas (TGS)?',
      options: [
        'Los sistemas son cerrados, sus funciones son independientes de la estructura y nunca crecen.',
        'Existen dentro de sistemas mayores, son abiertos e interactúan con el entorno, y sus funciones dependen de su estructura.',
        'Todo sistema es determinístico, está aislado de su contexto y mantiene sus entradas fijas en el tiempo.',
        'Cada subsistema opera como una entidad autónoma, sin jerarquías superiores ni intercambio de información.'
      ],
      correctIndex: 1,
      explanation: 'La TGS parte de tres premisas: (1) los sistemas existen dentro de otros sistemas mayores, (2) son sistemas abiertos que interactúan con su entorno y (3) sus funciones dependen de su estructura.'
    },
    {
      id: 'u1-q03',
      unit: 1,
      topic: 'Principios de Sistemas Automatizados',
      difficulty: 'intermedia',
      question: 'Una empresa construye un sistema de software sumamente especializado para un único trámite normativo. Según los principios de los sistemas automatizados, ¿qué consecuencia directa conlleva esta alta especialización?',
      options: [
        'Requerirá cada vez menos recursos de mantenimiento a medida que escale.',
        'Dejará de pertenecer a un suprasistema mayor y operará como un sistema cerrado.',
        'Será menos capaz de adaptarse a los cambios del entorno o de las reglas.',
        'Reducirá automáticamente su tamaño porque la especialización impide que crezca.'
      ],
      correctIndex: 2,
      explanation: 'El primer principio de los sistemas automatizados indica que cuanto más especializado sea el sistema, menos capaz es de adaptarse a los cambios. Además, los sistemas crecen y a mayor tamaño demandan más recursos de mantenimiento.'
    },
    {
      id: 'u1-q04',
      unit: 1,
      topic: 'Retroalimentación y Homeostasis',
      difficulty: 'intermedia',
      question: '¿Cómo se distinguen conceptualmente la retroalimentación y la homeostasis dentro de las propiedades de un sistema?',
      options: [
        'La retroalimentación mide el desorden interno; la homeostasis describe la imposibilidad de modificar entradas.',
        'La retroalimentación es el mecanismo de control que ajusta entradas según las salidas; la homeostasis es la tendencia a adaptarse para mantener el equilibrio interno.',
        'La retroalimentación ocurre únicamente en sistemas físicos; la homeostasis aplica solo a sistemas abstractos cerrados.',
        'La retroalimentación busca alcanzar un mismo fin por múltiples rutas; la homeostasis elimina el proceso de conversión.'
      ],
      correctIndex: 1,
      explanation: 'La retroalimentación es el mecanismo de control que ajusta las entradas basándose en las salidas, mientras que la homeostasis es la tendencia del sistema a adaptarse a los cambios y conservar un equilibrio interno.'
    },
    {
      id: 'u1-q05',
      unit: 1,
      topic: 'Entropía e Información',
      difficulty: 'básica',
      question: 'En un sistema organizacional donde reina la incertidumbre y el desgaste operativo, ¿qué papel cumple incorporar información estructurada?',
      options: [
        'Aumenta la entropía porque agrega más elementos que el sistema debe procesar.',
        'Aísla al sistema de su entorno para convertirlo en un sistema cerrado perfecto.',
        'Reduce la entropía y la incertidumbre, modificando el estado de conocimiento del sistema.',
        'Reemplaza la necesidad de contar con límites, entradas y proceso de conversión.'
      ],
      correctIndex: 2,
      explanation: 'La entropía representa el desgaste o aumento del desorden y la incertidumbre en un sistema. Incorporar información estructurada reduce la entropía y cambia el estado de conocimiento del sistema.'
    },
    {
      id: 'u1-q06',
      unit: 1,
      topic: 'Equifinalidad y Teleología',
      difficulty: 'intermedia',
      question: 'Dos equipos de software llegan al mismo objetivo operativo usando arquitecturas y flujos de trabajo distintos, siempre guiados por un propósito definido. ¿Qué par de propiedades sistémicas ilustra esta situación?',
      options: [
        'Entropía y homeostasis.',
        'Totalismo y frontera.',
        'Equifinalidad y teleología.',
        'Discontinuidad y determinismo.'
      ],
      correctIndex: 2,
      explanation: 'La equifinalidad es la capacidad de alcanzar un mismo objetivo final por diferentes alternativas o caminos, y la teleología expresa que el sistema siempre está guiado por un propósito.'
    },
    {
      id: 'u1-q07',
      unit: 1,
      topic: 'Totalismo',
      difficulty: 'básica',
      question: '¿Qué afirma la propiedad de totalismo en relación con los subsistemas que integran un sistema?',
      options: [
        'Que el todo es superior a la simple suma de sus partes debido a la interdependencia entre subsistemas.',
        'Que cada subsistema puede evaluarse de manera aislada sin perder ninguna propiedad del conjunto.',
        'Que todos los subsistemas tienen exactamente el mismo peso y función dentro de la estructura.',
        'Que los límites de un sistema deben abarcar absolutamente todo el universo de discurso sin fronteras.'
      ],
      correctIndex: 0,
      explanation: 'El totalismo sostiene que el todo es superior a la suma de sus partes porque la interacción e interdependencia entre los subsistemas genera propiedades emergentes que no existen por separado.'
    },
    {
      id: 'u1-q08',
      unit: 1,
      topic: 'Clasificación de Sistemas',
      difficulty: 'intermedia',
      question: '¿Qué ejes de categorización contempla la clasificación de sistemas presentada en la Unidad 1?',
      options: [
        'Únicamente hardware/software, abierto/cerrado y local/distribuido.',
        'Constitución (físicos/abstractos), relación con entorno (abiertos/cerrados), origen (naturales/artificiales), variables (discretos/continuos) y previsibilidad (determinísticos/probabilísticos).',
        'Complejidad funcional, lenguaje de programación, costo de licencia y tipo de base de datos.',
        'Solo por su grado de entropía interna y por la cantidad de actores humanos que operan sus entradas.'
      ],
      correctIndex: 1,
      explanation: 'La Unidad 1 clasifica los sistemas según cinco ejes: constitución, relación con el entorno, origen, tipo de variables y previsibilidad de resultados.'
    },
    {
      id: 'u1-q09',
      unit: 1,
      topic: 'Datos vs. Información',
      difficulty: 'intermedia',
      question: 'Un tablero gerencial muestra cifras exactas y con contexto de negocio, pero corresponde a ventas de hace tres años cuando se necesita decidir precios hoy. ¿Qué característica de la información útil falla principalmente aquí?',
      options: [
        'Validez, porque los números históricos no pueden procesarse matemáticamente.',
        'Significado, porque las ventas carecen de contenido semántico en cualquier contexto.',
        'Vigencia, porque no está actualizada ni es oportuna en el momento en que se la necesita.',
        'Valor simbólico, porque los datos aislados no requieren ningún procesamiento previo.'
      ],
      correctIndex: 2,
      explanation: 'La vigencia refiere a la oportunidad y antigüedad temporal de la información: indica si está actualizada y disponible cuando se necesita o si ya quedó obsoleta.'
    },
    {
      id: 'u1-q10',
      unit: 1,
      topic: 'Enfoque Sistémico y Multicausalidad',
      difficulty: 'integradora',
      question: 'Al aplicar el enfoque sistémico a una demora recurrente en la facturación de una empresa, ¿por qué el apunte exige realizar primero un análisis multicausal antes de proponer una solución?',
      options: [
        'Porque todo problema involucra múltiples sistemas interactuando y afecta o es afectado por elementos del contexto; entender el problema evita soluciones prematuras.',
        'Porque las partes de una organización funcionan aisladas y basta optimizar el módulo de facturación sin mirar el entorno.',
        'Porque las operaciones deben definirse antes que la formulación del problema para ahorrar tiempo de diseño.',
        'Porque el análisis multicausal permite elegir directamente el lenguaje de programación durante la primera reunión.'
      ],
      correctIndex: 0,
      explanation: 'Un problema siempre es multicausal debido a que múltiples sistemas interactúan con el contexto. El enfoque sistémico (formulación del problema -> diseño de soluciones -> control de resultados) exige comprender el problema antes de pensar soluciones.'
    },
    {
      id: 'u1-q11',
      unit: 1,
      topic: 'Product Discovery vs. Delivery',
      difficulty: 'básica',
      question: 'Dentro del enfoque moderno de Product Management, ¿cómo se vinculan Product Discovery y Product Delivery con el análisis y el diseño?',
      options: [
        'Product Discovery corresponde al diseño y la entrega técnica; Product Delivery analiza las necesidades del usuario.',
        'Product Discovery indaga qué hay que construir entendiendo el problema del usuario (Análisis); Product Delivery construye y entrega (Diseño e Implementación).',
        'Ambos se concentran exclusivamente en el código y prescinden del contacto con el usuario para agilizar la entrega.',
        'Product Discovery sustituye por completo al Delivery una vez que se obtiene el Product-Market Fit.'
      ],
      correctIndex: 1,
      explanation: 'Product Discovery se relaciona con el análisis y el agilismo para entender el problema del usuario y definir qué construir; Product Delivery abarca diseño, construcción y entrega.'
    },
    {
      id: 'u1-q12',
      unit: 1,
      topic: 'Problem vs. Solution Space y Product-Market Fit',
      difficulty: 'integradora',
      question: '¿Por qué es indispensable mantener separados el Espacio del Problema (el qué, como caja negra) y el Espacio de la Solución (el cómo) al definir requisitos?',
      options: [
        'Para que el Product-Market Fit quede definido únicamente por preferencias tecnológicas del equipo de desarrollo.',
        'Para evitar suposiciones y soluciones prematuras, prevenir construir el producto equivocado sin research y lograr que la documentación sea mantenible ante cambios de plataforma o lenguaje.',
        'Para impedir que los arquitectos conozcan las restricciones del negocio antes de programar la interfaz.',
        'Para convertir los requisitos funcionales en detalles de base de datos desde el primer día.'
      ],
      correctIndex: 1,
      explanation: 'Separar el QUÉ (caja negra) del CÓMO evita soluciones prematuras, previene construir el producto equivocado por falta de research y asegura mantenibilidad: si los requisitos no mezclan diseño ni tecnología, no se rompen al cambiar de plataforma o lenguaje.'
    },

    // ===================== UNIDAD 2 =====================
    {
      id: 'u2-q01',
      unit: 2,
      topic: 'Análisis vs. Diseño',
      difficulty: 'básica',
      question: 'En la Ingeniería de Software, ¿cuál es la distinción precisa entre Análisis y Diseño?',
      options: [
        'El análisis define la arquitectura técnica y estructuras de datos; el diseño releva los objetivos del negocio.',
        'El análisis se centra en el qué (abstraer necesidades del usuario en requerimientos); el diseño define el cómo (arquitectura, datos y componentes).',
        'El análisis se realiza solo en el modelo en Cascada; el diseño existe únicamente en metodologías ágiles.',
        'Ambos describen el código fuente, variando únicamente en el nivel de detalle de las pruebas unitarias.'
      ],
      correctIndex: 1,
      explanation: 'El análisis se centra estrictamente en el qué (modelado de requerimientos y necesidades del dominio en el Problem Space), mientras que el diseño define el cómo (arquitectura técnica, estructuras de datos y componentes en el Solution Space).'
    },
    {
      id: 'u2-q02',
      unit: 2,
      topic: 'Modelo 3P+A',
      difficulty: 'intermedia',
      question: 'Dentro del modelo 3P+A (Proyecto, Proceso, Producto, Arquitectura), ¿qué papel cumple la Arquitectura y qué riesgo ocurre si es débil?',
      options: [
        'Es un documento secundario de cierre; si es débil solo afecta el cronograma de capacitación final.',
        'Es el marco de tareas e hitos diarios; si es débil impide medir la calidad del testing.',
        'Es el diseño base inherente al proyecto que soporta los componentes y sus interacciones; si es débil, el producto colapsa frente a un cambio.',
        'Representa exclusivamente la lista de deseos del cliente; si es débil se corrige con más horas de programación sin impacto estructural.'
      ],
      correctIndex: 2,
      explanation: 'En 3P+A la Arquitectura es el diseño base inherente a todo proyecto: soporta los componentes del software y cómo interactúan, condicionando al proyecto, al producto y al proceso. Si es débil, el producto colapsa ante el cambio.'
    },
    {
      id: 'u2-q03',
      unit: 2,
      topic: 'The Box (Ciclo de Vida del Software)',
      difficulty: 'intermedia',
      question: 'En el ciclo de vida de 7 etapas "The Box", ¿en qué etapa se agrega valor real transformando los requerimientos humanos en especificaciones del sistema?',
      options: [
        'En la etapa 1, al identificar por primera vez los objetivos generales.',
        'En la etapa 3 (análisis de las necesidades del sistema), evaluando si aportan información útil, valiosa, válida y con sentido.',
        'En la etapa 5, cuando ya se redacta la documentación de usuario junto al código.',
        'En la etapa 7, una vez implementado el sistema en producción.'
      ],
      correctIndex: 1,
      explanation: 'En The Box, la etapa 3 (análisis de las necesidades del sistema) construye las especificaciones del sistema a partir de los requerimientos humanos, validando que aporten valor real dentro del Problem Space.'
    },
    {
      id: 'u2-q04',
      unit: 2,
      topic: 'Cascada vs. Realidad y Duración del Ciclo',
      difficulty: 'intermedia',
      question: 'Respecto al modelo en Cascada y la duración del ciclo de vida del software, ¿qué señala el apunte?',
      options: [
        'En la realidad el ciclo es siempre estrictamente secuencial y nunca pueden ejecutarse etapas en paralelo.',
        'Si se busca un ciclo de vida largo es clave el diseño, mientras que un ciclo corto admite mayor flexibilidad; además, en la práctica varias etapas pueden ocurrir en paralelo.',
        'El modelo en Cascada solo incluye Diseño y Pruebas porque los requerimientos se descubren en producción.',
        'Un ciclo de vida corto exige un diseño rígido inicial para impedir cualquier cambio durante la codificación.'
      ],
      correctIndex: 1,
      explanation: 'El modelo en Cascada es secuencial (Requerimientos->Análisis->Diseño->Código->Pruebas), pero en la práctica muchas etapas se hacen en paralelo. Para ciclos largos el diseño es clave, mientras que en ciclos cortos prima la flexibilidad.'
    },
    {
      id: 'u2-q05',
      unit: 2,
      topic: 'Ciclo de Vida del Producto (Lean)',
      difficulty: 'intermedia',
      question: 'En el Ciclo de Vida del Producto basado en Lean (Business outcome -> Discover -> Validate -> Build -> Launch -> Evaluate -> Iterar), ¿cómo se distribuyen los tiempos y recursos entre Discovery y Build?',
      options: [
        'El Discovery consume casi todo el presupuesto para eliminar cualquier incógnita antes de validar.',
        'El Discovery es rápido, liviano y de bajo costo (validando hipótesis con MVPs), mientras la mayor parte de los recursos se concentra en el Build.',
        'El Build se ejecuta antes del Discover y la validación ocurre únicamente luego del lanzamiento masivo.',
        'No requiere evaluar la respuesta del mercado porque el usuario participa en entrevistas exhaustivas desde el inicio.'
      ],
      correctIndex: 1,
      explanation: 'En el enfoque Lean de producto, el usuario muchas veces no está para elicitar; se asumen necesidades, el Discovery se mantiene rápido, liviano y barato (validando con MVPs) y el grueso de los recursos va al Build.'
    },
    {
      id: 'u2-q06',
      unit: 2,
      topic: 'Design Thinking',
      difficulty: 'intermedia',
      question: '¿Qué característica clave tiene el método Design Thinking respecto al usuario y al alcance dentro del ciclo de vida del software?',
      options: [
        'Cubre íntegramente el mantenimiento en producción y descarta las fases divergentes de ideación.',
        'Valida cada idea con el usuario antes de prototipar y nunca parte de suposiciones.',
        'Parte de suposiciones centradas en el usuario sin interacción directa hasta el testeo, y casi todo su flujo (salvo implementar) pertenece al Product Discovery.',
        'Reemplaza las etapas de empatizar y definir por un contrato formal de diseño de base de datos.'
      ],
      correctIndex: 2,
      explanation: 'En Design Thinking (Entendimiento: Empatizar/Definir -> Explorar: Idear/Prototipar -> Materializar: Testear/Implementar) se parte de hipótesis que se validan recién en el testeo, y todo excepto la implementación corresponde al Product Discovery.'
    },
    {
      id: 'u2-q07',
      unit: 2,
      topic: 'Agilidad Moderna y Doble Diamante',
      difficulty: 'básica',
      question: 'La Agilidad Moderna integra tres enfoques complementarios y utiliza la metodología Doble Diamante. ¿Cómo se distribuyen sus cuatro etapas?',
      options: [
        'Descubrir y Definir exploran el universo del problema; Desarrollar y Entregar construyen la solución o especificación.',
        'Descubrir y Desarrollar pertenecen al código; Definir y Entregar corresponden al presupuesto.',
        'Lean analiza el problema, Design Thinking programa el backend y Agile redacta el manual final.',
        'Las cuatro etapas se limitan exclusivamente al espacio de la solución una vez cerrada la arquitectura.'
      ],
      correctIndex: 0,
      explanation: 'La Agilidad Moderna combina Design Thinking (Discovery/requerimientos), Lean (construir las cosas correctas) y Agile (construir correctamente). En Doble Diamante, Descubrir+Definir obtienen el problema, y Desarrollar+Entregar obtienen la solución.'
    },
    {
      id: 'u2-q08',
      unit: 2,
      topic: 'Manifiesto Ágil',
      difficulty: 'básica',
      question: '¿Qué prioriza el Manifiesto Ágil frente a la planificación rígida y la documentación extensiva?',
      options: [
        'La eliminación total de pruebas para acelerar el lanzamiento inicial.',
        'Las interacciones humanas, el software funcionando, la colaboración con el cliente y la adaptación al cambio.',
        'La firma de contratos cerrados donde los requerimientos quedan congelados desde la fase de inicio.',
        'La separación estricta entre desarrolladores y usuarios para evitar cambios en el alcance.'
      ],
      correctIndex: 1,
      explanation: 'El Manifiesto Ágil prioriza individuos e interacciones, software funcionando, colaboración con el cliente y respuesta ante el cambio para entregar valor continuo y obtener feedback temprano.'
    },
    {
      id: 'u2-q09',
      unit: 2,
      topic: 'Agilidad con IA',
      difficulty: 'intermedia',
      question: '¿De qué manera impacta la Inteligencia Artificial en el ciclo ágil de desarrollo según el apunte?',
      options: [
        'Elimina la necesidad de hacer research y análisis de requerimientos porque la IA deduce el contexto sola.',
        'Acelera el prototipado permitiendo detectar y medir errores en los supuestos más rápido, aunque el research y el contexto siguen siendo indispensables.',
        'Vuelve deterministas las estimaciones de proyecto y garantiza que el software carezca de fallas lógicas.',
        'Obliga a abandonar los métodos iterativos y volver al modelo en Cascada tradicional.'
      ],
      correctIndex: 1,
      explanation: 'La agilidad con IA mejora drásticamente los tiempos de prototipado y de validación de supuestos (probar, medir y mejorar más rápido), pero el contexto, el research y el análisis de requerimientos siguen siendo necesarios.'
    },
    {
      id: 'u2-q10',
      unit: 2,
      topic: 'Proyecto de Software y Gestión',
      difficulty: 'intermedia',
      question: '¿Por qué un proyecto de desarrollo de software no es determinista y cuáles son las tres áreas centrales de su gestión?',
      options: [
        'Porque su código cambia solo en ejecución; sus tres áreas son codificación, compilación y despliegue.',
        'Porque enfrenta variabilidad continua en tareas, estimaciones, tecnología y necesidades cambiantes; sus áreas son planificación, calendarización y riesgos.',
        'Porque el producto es físico y tangible; sus áreas son compras, inventario y logística.',
        'Porque todos los proyectos grandes son idénticos y repetibles; sus áreas son hardware, licencias y soporte.'
      ],
      correctIndex: 1,
      explanation: 'Los proyectos de software no son deterministas debido a la variabilidad continua (necesidades evolutivas, tecnología, imprevistos) y producen un bien intangible basado en conocimiento. Sus 3 áreas de gestión son planificación, calendarización y riesgos.'
    },
    {
      id: 'u2-q11',
      unit: 2,
      topic: 'CMMI Planificación de Proyectos (PP, ML2)',
      difficulty: 'intermedia',
      question: 'En CMMI Nivel de Madurez 2, el área de Planificación de Proyectos (PP) define tres metas específicas (SG1, SG2, SG3). ¿Cuál es la secuencia correcta?',
      options: [
        'SG1: Ejecutar testing; SG2: Escribir casos de uso; SG3: Publicar el producto.',
        'SG1: Establecer estimaciones; SG2: Desarrollar el plan (cronograma, presupuesto, riesgos); SG3: Obtener compromiso con el plan.',
        'SG1: Contratar programadores; SG2: Elegir lenguaje; SG3: Eliminar riesgos técnicos.',
        'SG1: Negociar el contrato final; SG2: Diseñar la arquitectura; SG3: Realizar estimaciones iniciales.'
      ],
      correctIndex: 1,
      explanation: 'CMMI PP (ML2) estructura la planificación en tres metas: SG1 establecer estimaciones, SG2 desarrollar el plan de proyecto y SG3 obtener compromiso acordado con clientes y equipo.'
    },
    {
      id: 'u2-q12',
      unit: 2,
      topic: 'Calidad de Proceso vs. Calidad de Producto',
      difficulty: 'integradora',
      question: '¿Qué relación asimétrica describe el apunte entre la calidad del proceso y la calidad del producto final?',
      options: [
        'Un buen proceso garantiza automáticamente un producto excelente aunque no se hagan pruebas.',
        'La calidad del proceso y la del producto son completamente independientes entre sí.',
        'Un proceso deficiente seguramente dará un producto deficiente, pero un buen proceso (CMMI/ISO) no asegura por sí solo un buen producto, que exige verificación y testing.',
        'La calidad del producto depende únicamente de CMMI, mientras que la del proceso depende de las pruebas unitarias.'
      ],
      correctIndex: 2,
      explanation: 'Un proceso deficiente nos dará ciertamente un producto deficiente, pero un buen proceso no garantiza siempre un buen producto: la calidad del proceso evalúa cómo se trabajó (CMMI, ISO) y la del producto exige verificación y testing.'
    },

    // ===================== UNIDAD 3 =====================
    {
      id: 'u3-q01',
      unit: 3,
      topic: 'Universo de Discurso e IR',
      difficulty: 'básica',
      question: '¿Qué comprende el "universo de discurso" en Ingeniería de Requerimientos y por qué es crítico para el proyecto?',
      options: [
        'Únicamente el manual técnico de la base de datos donde se almacenarán las tablas del sistema.',
        'Todo el contexto en el que el software se desarrolla, incluyendo fuentes de información y personas relacionadas, necesario para resolver el problema correcto.',
        'El conjunto exclusivo de pantallas que el diseñador gráfico entrega antes de codificar.',
        'Solo las normas legales internacionales externas que regulan la industria del software.'
      ],
      correctIndex: 1,
      explanation: 'El universo de discurso es todo el contexto donde se desarrolla el software (fuentes de información y gente relacionada). Empaparse de él permite definir requisitos precisos y resolver el problema correcto.'
    },
    {
      id: 'u3-q02',
      unit: 3,
      topic: 'Proceso de IR y CMMI Nivel 3',
      difficulty: 'intermedia',
      question: '¿Cuáles son las cuatro actividades nucleares del proceso de Ingeniería de Requerimientos y cómo se ubica la gestión de cambios?',
      options: [
        'Elicitar, Modelar, Analizar y Gestionar (presente de forma transversal en todo el ciclo de vida).',
        'Codificar, Compilar, Desplegar y Retirar (en orden estrictamente secuencial).',
        'Presupuestar, Contratar, Programar y Vender (solo durante la fase inicial).',
        'Diagramar, Testear, Refactorizar y Documentar (únicamente al finalizar el proyecto).'
      ],
      correctIndex: 0,
      explanation: 'El proceso de IR involucra Elicitar, Modelar, Analizar (incluye V&V y negociación de conflictos) y Gestionar (presente en todo el ciclo de vida para evaluar impacto y costo de cambios).'
    },
    {
      id: 'u3-q03',
      unit: 3,
      topic: 'Elicitación y Fuentes de Información',
      difficulty: 'intermedia',
      question: 'Durante la elicitación de requerimientos, ¿qué fuente se destaca como la más significativa dentro del universo de discurso y cuál es una barrera frecuente?',
      options: [
        'Las librerías de código abierto son la fuente principal; la barrera es la velocidad del compilador.',
        'Los usuarios y documentos del universo de discurso son las fuentes más confiables; la barrera reside en lenguajes/conocimientos distintos y dificultad del usuario para transmitir su saber.',
        'Los competidores externos son la fuente más confiable; la barrera es el costo de las licencias.',
        'Los programadores junior son la fuente primaria; la barrera es la falta de herramientas de diseño gráfico.'
      ],
      correctIndex: 1,
      explanation: 'Las fuentes más confiables son documentos y personas del universo de discurso, siendo los usuarios los más significativos. La barrera principal es la diferencia de lenguaje, conocimiento del dominio y habilidad para expresarlo.'
    },
    {
      id: 'u3-q04',
      unit: 3,
      topic: 'Tipos de Preguntas en Entrevistas',
      difficulty: 'básica',
      question: 'En una entrevista de relevamiento, el analista pregunta: "¿Está completo el documento de ingreso? Responda sí o no", y luego añade: "¿Podría darme un ejemplo de cuándo falta un dato?". ¿Qué par de tipos de preguntas utilizó?',
      options: [
        'Abierta y cerrada múltiple.',
        'Bipolar (tipo de cerrada) y averiguación o sondeo.',
        'Sondeo inicial y encuesta anónima.',
        'Sin estructura y cuestionario estadístico.'
      ],
      correctIndex: 1,
      explanation: 'Una pregunta de sí/no o verdadero/falso es una pregunta bipolar (subtipo de cerrada), mientras que pedir una explicación ("por qué") o un ejemplo concreto es una averiguación o sondeo.'
    },
    {
      id: 'u3-q05',
      unit: 3,
      topic: 'Estructuras de Entrevista',
      difficulty: 'intermedia',
      question: '¿Cómo progresan las preguntas en una entrevista con estructura de "Embudo" frente a una de "Pirámide" y una de "Rombo"?',
      options: [
        'Embudo: cerradas->abiertas; Pirámide: abiertas->cerradas; Rombo: abiertas->abiertas.',
        'Embudo: abiertas->cerradas; Pirámide: cerradas->abiertas; Rombo: cerradas->abiertas->cerradas.',
        'Embudo: solo bipolares; Pirámide: solo sondeos; Rombo: sin estructura predefinida.',
        'Embudo: cerradas->abiertas->cerradas; Pirámide: abiertas->cerradas; Rombo: solo cuestionario escrito.'
      ],
      correctIndex: 1,
      explanation: 'La estructura en Embudo comienza con preguntas abiertas y cierra con preguntas cerradas; la Pirámide comienza cerrada y termina abierta; y el Rombo (o diamante) inicia cerrada, abre en el medio y vuelve a cerrar.'
    },
    {
      id: 'u3-q06',
      unit: 3,
      topic: 'Empathy Map',
      difficulty: 'básica',
      question: '¿Cuál es el propósito del Empathy Map en la elicitación y qué dos dimensiones finales clasifica a partir de sus 7 preguntas?',
      options: [
        'Definir el esquema relacional de la base de datos clasificando tablas y claves foráneas.',
        'Estereotipar y comprender a los usuarios (qué ven, dicen, hacen, escuchan, piensan/sienten, objetivo) para clasificar sus dolores y deseos.',
        'Medir el tiempo de respuesta de los servidores clasificando latencias altas y bajas.',
        'Asignar el presupuesto anual clasificando costos fijos y variables del área de sistemas.'
      ],
      correctIndex: 1,
      explanation: 'El Empathy Map utiliza 7 preguntas (con quién empatizar, qué necesita hacer, qué ve, dice, hace, escucha, piensa y siente) para clasificar dolores y deseos de los usuarios.'
    },
    {
      id: 'u3-q07',
      unit: 3,
      topic: 'Requerimientos Funcionales vs. No Funcionales',
      difficulty: 'intermedia',
      question: 'Una clínica exige que la historia clínica electrónica cumpla con la ley de protección de datos personales y responda búsquedas en menos de 1 segundo. ¿Cómo se clasifican estos dos requerimientos no funcionales?',
      options: [
        'Ambos son requerimientos funcionales porque involucran datos clínicos.',
        'Cumplimiento legal es un RNF Externo y tiempo de respuesta es un RNF del Producto.',
        'Cumplimiento legal es un RNF Organizacional del desarrollador y tiempo de respuesta es Externo.',
        'Ambos son requerimientos organizacionales internos del equipo de programación.'
      ],
      correctIndex: 1,
      explanation: 'Los RNF tienen 3 categorías: del Producto (rendimiento, fiabilidad, portabilidad, usabilidad), Organizacionales (estándares, lenguajes, políticas internas) y Externos (legislación, ética, interoperabilidad).'
    },
    {
      id: 'u3-q08',
      unit: 3,
      topic: 'Drivers de Arquitectura',
      difficulty: 'intermedia',
      question: '¿Qué caracteriza a los "drivers de arquitectura" dentro de los requerimientos no funcionales?',
      options: [
        'Afectan únicamente a una pantalla aislada y dependen exclusivamente de preferencias técnicas del programador.',
        'Impactan en todas las funcionalidades, pueden ser visibles (seguridad, usabilidad) o no visibles (modificabilidad, portabilidad) y se vinculan con los objetivos de negocio.',
        'Son siempre requerimientos funcionales detallados en lenguaje de programación.',
        'Son restricciones de diseño gráfico que nunca condicionan la estructura del sistema.'
      ],
      correctIndex: 1,
      explanation: 'Los drivers de arquitectura son RNF transversales que impactan en todas las funcionalidades (visibles en ejecución como performance/seguridad/usabilidad, o no visibles como modificabilidad/reusabilidad) y están ligados a objetivos de negocio.'
    },
    {
      id: 'u3-q09',
      unit: 3,
      topic: 'CMMI Gestión de Requerimientos (REQM)',
      difficulty: 'intermedia',
      question: '¿Qué práctica exige CMMI dentro de la Gestión de Requerimientos (REQM) para controlar la evolución e inconsistencias?',
      options: [
        'Congelar la especificación tras la primera entrevista y prohibir cambios posteriores.',
        'Mantener trazabilidad bidireccional de los requerimientos e identificar inconsistencias entre el desarrollo y los requerimientos.',
        'Delegar toda validación exclusivamente al equipo de infraestructura cuando el sistema entra en operación.',
        'Eliminar los requerimientos no funcionales del SRS para evitar conflictos con los usuarios.'
      ],
      correctIndex: 1,
      explanation: 'En CMMI REQM se deben seguir 5 pasos: entender los requerimientos, negociarlos/validarlos con usuarios, gestionar cambios, mantener trazabilidad bidireccional e identificar inconsistencias entre desarrollo y requerimientos.'
    },
    {
      id: 'u3-q10',
      unit: 3,
      topic: 'Verificación vs. Validación',
      difficulty: 'básica',
      question: 'Un equipo redacta una especificación impecable en su formato, sin contradicciones ni criterios faltantes, pero al mostrarla al cliente descubre que resuelve un flujo que nadie usa en el negocio. ¿Qué falló?',
      options: [
        'Falló la verificación, pero la validación fue totalmente exitosa.',
        'La verificación se cumplió (formato y completitud), pero falló la validación (no es la cosa correcta que el usuario necesita).',
        'Fallaron las pruebas unitarias de código en la etapa de transición.',
        'No hubo error de requisitos porque los formatos completos garantizan el valor de negocio.'
      ],
      correctIndex: 1,
      explanation: 'La regla clave distingue: Verificación asegura que se construye correctamente (formato, completitud, criterios), mientras que Validación asegura que se construye la cosa correcta según lo que el usuario realmente necesita.'
    },
    {
      id: 'u3-q11',
      unit: 3,
      topic: 'Costo del Error y Demandas de Cliente',
      difficulty: 'integradora',
      question: 'Un usuario solicita un campo de texto libre para ingresar fechas cuando su necesidad operativa real exige un selector de calendario que impida feriados. ¿Cómo clasifica el apunte esta demanda y qué implica no detectarla hasta operación?',
      options: [
        'Es una demanda omitida y su costo de reparación es constante en todas las etapas.',
        'Es una demanda inconsistente cuyo costo se reduce a medida que avanza el desarrollo.',
        'Es una demanda errónea (pide algo que no refleja su necesidad real), y detectarla recién en operación multiplica exponencialmente los costos e impacta la reputación.',
        'Es una demanda correcta que debe codificarse tal cual para evitar retrabajo en elicitación.'
      ],
      correctIndex: 2,
      explanation: 'Las demandas erróneas ocurren cuando el usuario pide algo que no es su necesidad real (ej. texto vs calendario). Como los errores se propagan y su costo crece exponencialmente (Requisitos -> Diseño -> Código -> Pruebas -> Operación), detectarlo tarde resulta sumamente costoso.'
    },
    {
      id: 'u3-q12',
      unit: 3,
      topic: 'Priorización, Ley de Conway y SRS',
      difficulty: 'integradora',
      question: 'Al aplicar la Matriz de Impacto vs. Esfuerzo junto a criterios de riesgo para ordenar el backlog, ¿qué elementos deben priorizarse y qué evita el estudio del dominio respecto a la estructura organizacional?',
      options: [
        'Deben priorizarse las "tareas ingratas" (bajo impacto/alto esfuerzo) y copiar exactamente el organigrama en el código.',
        'Se tratan primero los requerimientos más riesgosos (para validar viabilidad) y las "ganancias rápidas" (alto impacto/bajo esfuerzo); el estudio del dominio evita caer en la Ley de Conway.',
        'Se posponen todos los riesgos técnicos hasta la última semana y se omiten los requerimientos del SRS.',
        'Se asigna igual prioridad a todos los requisitos aplicando WSJF únicamente a tareas de bajo valor.'
      ],
      correctIndex: 1,
      explanation: 'Cuando todo es importante, nada es importante: se priorizan requerimientos riesgosos primero (viabilidad temprana) y ganancias rápidas (alto impacto/bajo esfuerzo), evitando tareas ingratas. Además, comprender el dominio ayuda a estructurar la arquitectura evitando la Ley de Conway.'
    },

    // ===================== UNIDAD 4 =====================
    {
      id: 'u4-q01',
      unit: 4,
      topic: 'Propósito y Naturaleza de los Modelos',
      difficulty: 'básica',
      question: 'Según la Unidad 4, ¿qué es un modelo de sistema y cuál es su carácter respecto al desarrollo?',
      options: [
        'Una copia idéntica con absolutamente todos los detalles del software terminado.',
        'Una simplificación o abstracción de la realidad con un objetivo definido que guía el desarrollo, comunica estructura/comportamiento y tiene carácter prescriptivo.',
        'Un mero boceto decorativo opcional que solo se dibuja cuando el sistema ya entró en producción.',
        'Una tabla de costos contables destinada únicamente al área financiera.'
      ],
      correctIndex: 1,
      explanation: 'Un modelo es una simplificación/abstracción de la realidad con solo los elementos relevantes y un objetivo definido. Sirve para guiar el desarrollo, controlar la arquitectura, analizar riesgos y es prescriptivo.'
    },
    {
      id: 'u4-q02',
      unit: 4,
      topic: 'Multiplicidad de Modelos',
      difficulty: 'básica',
      question: '¿Por qué un mismo sistema requiere múltiples modelos en lugar de uno solo universal?',
      options: [
        'Porque cada lenguaje de programación prohíbe reutilizar la documentación previa.',
        'Porque a los distintos stakeholders les interesan perspectivas diferentes con distinta precisión, y la complejidad del problema guía qué modelos construir.',
        'Porque es obligatorio duplicar exactamente la misma información en texto y gráficos por contrato.',
        'Porque cada desarrollador debe inventar una notación privada incompatible con las demás.'
      ],
      correctIndex: 1,
      explanation: 'No existe un único modelo para un sistema: distintos stakeholders necesitan vistas y niveles de precisión distintos, y las características y complejidad del problema definen cuántos y cuáles modelos hacer.'
    },
    {
      id: 'u4-q03',
      unit: 4,
      topic: 'Modelar vs. Diagramar',
      difficulty: 'intermedia',
      question: 'El apunte subraya que "Modelar es diferente a diagramar". ¿Qué implica esta diferencia en el análisis de sistemas?',
      options: [
        'Diagramar requiere software especializado, mientras que modelar solo puede hacerse en papel.',
        'Modelar implica abstraer, analizar estructura, comportamiento, reglas y decisiones del dominio; diagramar es solo trazar una representación visual superficial sin necesariamente capturar el modelo subyacente.',
        'Modelar se aplica exclusivamente al diseño de interfaces visuales y diagramar al código SQL.',
        'No existe diferencia práctica: un diagrama sin semántica ni propósito equivale a un modelo completo.'
      ],
      correctIndex: 1,
      explanation: 'Modelar es un ejercicio de abstracción prescriptiva con significado, reglas y objetivo definido (por ejemplo, una lista de casos de uso y un diagrama de casos de uso describen el mismo sistema desde perspectivas distintas), no un simple dibujo.'
    },
    {
      id: 'u4-q04',
      unit: 4,
      topic: 'Vistas (Viewpoints)',
      difficulty: 'básica',
      question: '¿Qué es una "vista" (viewpoint) en el modelado de sistemas?',
      options: [
        'La pantalla de inicio de sesión que ve el usuario final al abrir la aplicación.',
        'Una proyección del modelo desde una perspectiva particular de un stakeholder, omitiendo entidades no relevantes para ese rol.',
        'Una copia de seguridad automática de todos los archivos del repositorio.',
        'El promedio de satisfacción de los clientes medido tras el lanzamiento.'
      ],
      correctIndex: 1,
      explanation: 'Cada modelo se construye con un viewpoint o vista particular adaptada a un stakeholder (cliente, analista, programador), omitiendo las entidades que no le resultan relevantes.'
    },
    {
      id: 'u4-q05',
      unit: 4,
      topic: 'Naturaleza del Prototipo',
      difficulty: 'básica',
      question: '¿Cuál es la naturaleza técnica del código producido en un prototipo según el apunte?',
      options: [
        'Es un subconjunto estable del producto final equivalente a una iteración del Proceso Unificado.',
        'Es código de prueba funcional pero desechable, orientado a validar requerimientos y reducir incertidumbre.',
        'Es la versión final lista para desplegarse masivamente al mercado.',
        'Es un documento de texto plano sin ninguna interactividad.'
      ],
      correctIndex: 1,
      explanation: 'El prototipo es funcional para obtener feedback temprano y validar/especificar requerimientos, pero es código de prueba, no un subconjunto del producto final como una iteración en UP.'
    },
    {
      id: 'u4-q06',
      unit: 4,
      topic: 'Ventajas y Riesgos del Prototipo',
      difficulty: 'intermedia',
      question: '¿Cuál es el riesgo típico al presentar un prototipo exitoso ante clientes o usuarios?',
      options: [
        'Que impida obtener retroalimentación temprana sobre las expectativas del usuario.',
        'Que los interesados confundan el prototipo de prueba con el producto final ya terminado y listo para producción.',
        'Que aumente la incertidumbre sobre los requerimientos al eliminar supuestos.',
        'Que resulte imposible detener el desarrollo de un sistema inviable.'
      ],
      correctIndex: 1,
      explanation: 'Aunque el prototipo brinda feedback temprano, reduce errores costosos y permite detener a tiempo un sistema que no funciona, requiere tiempo/costo y conlleva el riesgo de confusión con el producto final.'
    },
    {
      id: 'u4-q07',
      unit: 4,
      topic: 'Concepto de MVP',
      difficulty: 'básica',
      question: '¿Cómo define el apunte al Producto Mínimo Viable (MVP) y qué ciclo recorre?',
      options: [
        'Es una maqueta estática en papel que no ejecuta código real.',
        'Es código funcional con mínimo esfuerzo que recorre el ciclo Construir-Medir-Aprender y constituye una versión inicial del producto final trabajada iterativa e incrementalmente.',
        'Es una prueba interna que se descarta completamente sin llegar nunca a los usuarios.',
        'Es el documento SRS completo antes de escribir la primera línea de código.'
      ],
      correctIndex: 1,
      explanation: 'Un MVP no es un prototipo: es software con funcionalidades reales que recorre el ciclo Construir-Medir-Aprender de forma iterativo-incremental para habilitar elicitación real en el mercado.'
    },
    {
      id: 'u4-q08',
      unit: 4,
      topic: 'Prototipo vs. Iteración UP vs. MVP',
      difficulty: 'integradora',
      question: '¿Cuál de las siguientes comparaciones distingue con mayor exactitud Prototipo, Iteración UP y MVP?',
      options: [
        'Prototipo y MVP son código desechable; la Iteración UP es solo documentación.',
        'El Prototipo es código de prueba; la Iteración UP entrega un subconjunto acumulativo del sistema final (aún no en producción); el MVP es código funcional lanzado para validar Market Fit.',
        'Los tres términos son sinónimos intercambiables dentro de la metodología en Cascada.',
        'El MVP solo se construye al finalizar la fase de Transición de UP cuando ya no hay incertidumbre.'
      ],
      correctIndex: 1,
      explanation: 'El prototipo es código de prueba para reducir incertidumbre; la iteración de UP entrega código funcional probado e integrado como subconjunto del producto final (sin salir aún a producción); y el MVP es software mínimo puesto en uso real para Construir-Medir-Aprender.'
    },
    {
      id: 'u4-q09',
      unit: 4,
      topic: 'MVP, Market Fit y Retención',
      difficulty: 'intermedia',
      question: 'Según la Unidad 4, ¿cuándo puede considerarse que un MVP pasa a consolidarse como producto final?',
      options: [
        'Apenas se compila la primera pantalla de login, sin medir uso.',
        'Cuando logra retención de usuarios y el producto se sostiene demostrando adecuación al mercado (Market Fit).',
        'Cuando se elimina el Continuous Discovery y se prohíben nuevas mejoras.',
        'Únicamente cuando se reescribe desde cero tras desechar todo su código.'
      ],
      correctIndex: 1,
      explanation: 'El MVP está ligado al Market Fit y pasa a ser producto final cuando hay alta retención de usuarios y el producto se mantiene, conservando igualmente un Continuous Discovery.'
    },
    {
      id: 'u4-q10',
      unit: 4,
      topic: 'Continuous Discovery',
      difficulty: 'intermedia',
      question: 'Incluso después de que el MVP gana tracción y evoluciona hacia un producto final consolidado, ¿qué práctica debe mantenerse activa según el apunte?',
      options: [
        'Congelar definitivamente todos los requerimientos de usuario.',
        'El Continuous Discovery, para seguir validando necesidades cambiantes y oportunidades de valor.',
        'Volver al código desechable de prototipado para reemplazar todas las funciones en producción.',
        'Dejar de medir el aprendizaje de los usuarios para enfocarse solo en infraestructura.'
      ],
      correctIndex: 1,
      explanation: 'El apunte destaca que, aun cuando el MVP pasa a ser producto final por su retención y Market Fit, sigue habiendo un Continuous Discovery constante.'
    },
    {
      id: 'u4-q11',
      unit: 4,
      topic: 'Criterio de Selección de Elementos en un Modelo',
      difficulty: 'básica',
      question: 'Al construir un Modelo de Dominio u otro modelo del sistema, ¿qué regla de abstracción debe aplicarse respecto al nivel de detalle?',
      options: [
        'Incluir absolutamente todas las variables técnicas de implementación, librerías y botones de la UI.',
        'Incluir solo los elementos y atributos más relevantes del sistema coherentes con el objetivo del modelo.',
        'Omitir los atributos y relaciones para dejar únicamente nombres sueltos sin contexto.',
        'Copiar literalmente las entrevistas completas sin resumirlas ni abstraerlas.'
      ],
      correctIndex: 1,
      explanation: 'Un modelo debe contener únicamente los elementos más relevantes del sistema y construirse con un objetivo definido; por ejemplo, el modelo de dominio identifica entidades del dominio con sus atributos más importantes.'
    },
    {
      id: 'u4-q12',
      unit: 4,
      topic: 'Aplicación Práctica: Prototipo vs. MVP',
      difficulty: 'integradora',
      question: 'Un equipo duda si los usuarios externos estarán dispuestos a pagar y usar semanalmente una nueva plataforma de turnos con una función mínima central. ¿Qué artefacto conviene construir para validar hipótesis de mercado real?',
      options: [
        'Un MVP con código funcional mínimo sometido al ciclo Construir-Medir-Aprender para medir retención y Market Fit.',
        'Un diagrama de clases técnico detallado sin mostrar nada a los usuarios reales.',
        'Un prototipo estrictamente en papel sin despliegue ni medición de retención.',
        'Un documento de arquitectura de infraestructura de 200 páginas antes de validar el valor.'
      ],
      correctIndex: 0,
      explanation: 'Para validar hipótesis de uso real, retención y Market Fit en usuarios reales, corresponde construir un MVP funcional con mínimo esfuerzo bajo el ciclo Construir-Medir-Aprender.'
    },

    // ===================== UNIDAD 5 =====================
    {
      id: 'u5-q01',
      unit: 5,
      topic: 'Análisis Orientado a Objetos (AOO)',
      difficulty: 'básica',
      question: '¿Cuál es la secuencia correcta en el Análisis Orientado a Objetos desde la realidad del problema hasta el software, y por qué es crítico identificar bien los objetos?',
      options: [
        'Clase de software -> Base de datos -> Concepto del dominio; omitir objetos no afecta al análisis.',
        'Concepto existente en el dominio -> Se abstrae, modela y analiza -> Se convierte en clase; un objeto no identificado resulta muy costoso porque empeora el análisis.',
        'Caso de uso -> Código SQL -> Descarte del dominio; los conceptos del dominio son iguales a las clases.',
        'Diagrama de despliegue -> Entrevista -> Clase conceptual sin abstracción previa.'
      ],
      correctIndex: 1,
      explanation: 'En AOO primero existe un concepto en el dominio (que no es lo mismo que una clase), luego se abstrae, modela y analiza, y finalmente se convierte en clase. No identificar un objeto clave encarece y degrada el análisis.'
    },
    {
      id: 'u5-q02',
      unit: 5,
      topic: 'Proceso Unificado (UP)',
      difficulty: 'intermedia',
      question: 'En el Proceso Unificado (UP), ¿qué entrega obligatoriamente cada iteración de duración fija?',
      options: [
        'Un prototipo descartable sin pruebas ni integración.',
        'Únicamente documentos de requisitos firmados sin una línea de código.',
        'Código funcional diseñado, implementado, probado, integrado y ejecutado, que forma un subconjunto acumulativo del sistema final.',
        'El producto completo en su versión comercial definitiva desde la primera semana.'
      ],
      correctIndex: 2,
      explanation: 'Las iteraciones de UP producen código funcional (diseñado, implementado, probado e integrado) que NO es un prototipo sino un subconjunto incremental del sistema final, aunque aún no esté listo para producción.'
    },
    {
      id: 'u5-q03',
      unit: 5,
      topic: 'Slicing y Enfoque Dirigido por el Riesgo',
      difficulty: 'intermedia',
      question: '¿Cómo maneja UP los requerimientos demasiado grandes para una iteración corta y en qué orden recomienda atacarlos?',
      options: [
        'Alarga indefinidamente la iteración hasta terminar todo y deja los riesgos difíciles para el final.',
        'Aplica Slicing (dividir el requerimiento para terminar siempre con código funcional) y ataca primero los requerimientos más complejos y riesgosos para validar la viabilidad.',
        'Posterga los requerimientos riesgosos para la fase de Transición y codifica primero las pantallas cosméticas.',
        'Elimina los requerimientos complejos para reducir el alcance sin consultar al negocio.'
      ],
      correctIndex: 1,
      explanation: 'UP aplica Slicing para que los requerimientos quepan en iteraciones cortas entregando código funcional, y está dirigido por el riesgo: resuelve primero lo más complejo/riesgoso para confirmar viabilidad antes de invertir en todo el resto.'
    },
    {
      id: 'u5-q04',
      unit: 5,
      topic: 'Arquitectura y Ciclo UP',
      difficulty: 'básica',
      question: 'Además de ser dirigido por el riesgo e iterativo/incremental, ¿qué otro pilar guía a UP y en qué ciclo continuo se apoya cada iteración?',
      options: [
        'Está centrado en la arquitectura (núcleo que da visión global y conecta componentes) y sigue el ciclo Construir-Retroalimentar-Adaptar.',
        'Está centrado en el documento SRS rígido y sigue un ciclo secuencial sin adaptación.',
        'Está centrado en la interfaz gráfica y prescinde de pruebas de calidad hasta el cierre.',
        'Está centrado en prompts efímeros y descarta toda visión arquitectónica.'
      ],
      correctIndex: 0,
      explanation: 'UP es iterativo e incremental, dirigido por el riesgo, centrado en la arquitectura y regido por el ciclo Construir-Retroalimentar-Adaptar para obtener pronta retroalimentación.'
    },
    {
      id: 'u5-q05',
      unit: 5,
      topic: 'Fases de UP',
      difficulty: 'intermedia',
      question: '¿Cuál es el objetivo principal de la fase de Inicio (Inception) frente a la fase de Elaboración (Elaboration) en UP?',
      options: [
        'Inicio redacta todos los requisitos al 100% y programa el sistema entero; Elaboración solo corrige errores tipográficos.',
        'Inicio (generalmente una iteración) estudia viabilidad, alcance aproximado y negocio; Elaboración refina la visión, implementa la arquitectura núcleo y resuelve requerimientos de alto riesgo.',
        'Inicio realiza las pruebas beta con usuarios; Elaboración implementa los módulos de menor riesgo.',
        'Ambas fases tienen exactamente la misma finalidad: desplegar en producción sin iteraciones.'
      ],
      correctIndex: 1,
      explanation: 'Inicio tiene una iteración de estudio de viabilidad (no de requisitos exhaustivos). Elaboración implementa la arquitectura y ataca el alto riesgo. Construcción desarrolla lo de menor riesgo y Transición hace pruebas beta y pase a producción.'
    },
    {
      id: 'u5-q06',
      unit: 5,
      topic: 'Hitos, Versiones y Disciplinas de UP',
      difficulty: 'intermedia',
      question: 'En UP, ¿qué diferencia a un "hito" de una "versión" y qué artefactos pertenecen a la disciplina de Análisis de Requerimientos?',
      options: [
        'Hito es el código fuente completo; versión es una reunión de cierre sin entregable.',
        'Hito es un punto de corte de iteración para evaluar o decidir; versión es un subconjunto funcional incremental del producto; Análisis de Requerimientos incluye casos de uso, RNF, glosario, visión y especificación complementaria.',
        'Hito es sinónimo de clase conceptual; versión es el diagrama de base de datos física.',
        'Las disciplinas se ejecutan una por cada fase sin superponerse jamás en el tiempo.'
      ],
      correctIndex: 1,
      explanation: 'Un hito es el punto de corte de iteración para evaluar decisiones importantes; una versión es un incremento funcional del producto; y en Análisis de Requerimientos se trabajan casos de uso, RNF, glosario, visión y especificación complementaria.'
    },
    {
      id: 'u5-q07',
      unit: 5,
      topic: 'Modelo FURPS+',
      difficulty: 'básica',
      question: 'En la clasificación FURPS+ utilizada en UP, ¿qué letras representan estrictamente los atributos de calidad y qué abarca el signo "+"?',
      options: [
        'Solo Funcional representa calidad; el "+" indica requerimientos omitidos.',
        'Usabilidad, Reliability (fiabilidad), Performance y Soporte son los atributos de calidad; el "+" engloba restricciones adicionales de implementación, interfaz, operaciones, empaquetamiento y legales.',
        'Funcional y Performance son los únicos atributos de calidad; el "+" significa software libre.',
        'Usabilidad y Diseño visual; el "+" señala el presupuesto máximo asignado.'
      ],
      correctIndex: 1,
      explanation: 'FURPS+ significa Funcional, Usabilidad, Reliability (fiabilidad), Performance, Soporte y Adicionales (+). Los atributos de calidad son U, R, P y S; el + agrupa implementación, interfaz, operaciones, empaquetamiento y legales.'
    },
    {
      id: 'u5-q08',
      unit: 5,
      topic: 'Casos de Uso (Caja Negra)',
      difficulty: 'intermedia',
      question: '¿Por qué los Casos de Uso bien redactados para el análisis son de "caja negra" y qué papel cumplen las extensiones?',
      options: [
        'Porque ocultan el diseño de clases/implementación describiendo solo QUÉ hace el sistema (contrato); las extensiones detallan excepciones o flujos alternativos que manejan desvíos o alcanzan éxito.',
        'Porque están escritos en código máquina encriptado; las extensiones son librerías externas de pago.',
        'Porque excluyen a los actores humanos; las extensiones representan fallas definitivas que prohíben continuar.',
        'Porque detallan qué tablas SQL se consultan en cada paso; las extensiones muestran la arquitectura física.'
      ],
      correctIndex: 0,
      explanation: 'Los casos de uso de caja negra especifican responsabilidades del sistema (qué hace, no cómo lo implementa) mediante flujo principal (happy path) y extensiones (flujos alternativos o excepciones).'
    },
    {
      id: 'u5-q09',
      unit: 5,
      topic: 'Precondiciones, Postcondiciones y Requisitos Especiales',
      difficulty: 'intermedia',
      question: 'En la especificación de un Caso de Uso, ¿qué afirmación es correcta respecto a las precondiciones?',
      options: [
        'Deben verificarse paso a paso dentro del propio escenario principal como primera instrucción.',
        'Establecen lo que siempre debe cumplirse antes de empezar, no se prueban dentro del caso de uso (se asumen verdaderas) e implican otro escenario previo completado con éxito.',
        'Describen exclusivamente las condiciones en las que el sistema debe apagarse tras terminar.',
        'Son sinónimo de los requisitos especiales o atributos de rendimiento del servidor.'
      ],
      correctIndex: 1,
      explanation: 'Las precondiciones indican qué debe cumplirse antes de iniciar el caso de uso, no se prueban en él (se asumen verdaderas) y suelen derivar de otro escenario completado con éxito. Las postcondiciones indican qué queda cumplido al terminar con éxito.'
    },
    {
      id: 'u5-q10',
      unit: 5,
      topic: 'Diagrama de Secuencia de Sistema (DSS)',
      difficulty: 'básica',
      question: '¿Qué representa un Diagrama de Secuencia de Sistema (DSS) en el análisis orientado a objetos?',
      options: [
        'La comunicación interna detallada entre todos los métodos privados de las clases en memoria.',
        'Los eventos del sistema generados por los actores externos y su orden hacia el sistema tratado como caja negra, para el escenario principal y alternativos complejos.',
        'El organigrama jerárquico de los desarrolladores asignados a cada módulo del proyecto.',
        'La evolución porcentual de los costos de mantenimiento durante diez años.'
      ],
      correctIndex: 1,
      explanation: 'Un DSS modela las interacciones y el orden de los eventos externos enviados por los actores hacia el sistema tratado como caja negra, acompañando al escenario principal de éxito y los alternativos complejos.'
    },
    {
      id: 'u5-q11',
      unit: 5,
      topic: 'Modelo de Dominio, Visión y Glosario',
      difficulty: 'integradora',
      question: '¿En qué se diferencia un Modelo de Dominio de un diagrama de clases de diseño y mediante qué técnica práctica se descubren sus conceptos a partir de los casos de uso?',
      options: [
        'Es idéntico al diagrama de clases de código; sus conceptos se copian de los nombres de los archivos CSS.',
        'Descompone el dominio en clases conceptuales significativas con atributos y asociaciones (no es un diagrama de clases de software); se descubre con listas de categorías o extrayendo frases nominales (sustantivos) de los casos de uso.',
        'Solo contiene verbos de acción; se construye compilando la especificación complementaria.',
        'Reemplaza tanto a la Visión de Negocio como al Glosario eliminando los diccionarios de datos.'
      ],
      correctIndex: 1,
      explanation: 'El Modelo de Dominio representa clases conceptuales del mundo real del problema (no clases de software), identificadas mediante listas de categorías o frases nominales de los casos de uso, complementado por la Visión de Negocio y el Glosario.'
    },
    {
      id: 'u5-q12',
      unit: 5,
      topic: 'Historias de Usuario (Artefacto Ágil)',
      difficulty: 'básica',
      question: '¿Qué estructura sigue una Historia de Usuario ágil y qué requisitos de calidad debe cumplir?',
      options: [
        'Describe tablas y endpoints REST; debe ser dependiente, rígida, técnica e indivisible.',
        'Responde al quién, qué y para qué ("Como <rol>, quiero <acción> para <razón>"); debe ser independiente, negociable, valiosa, estimable, atómica y testeable.',
        'Se redacta desde la perspectiva del servidor físico y omite siempre los criterios de aceptación.',
        'Es un contrato legal extenso equivalente al capítulo completo de Elaboración de UP.'
      ],
      correctIndex: 1,
      explanation: 'Las Historias de Usuario (artefacto ágil no perteneciente a UP) responden a quién/qué/para qué y cumplen los criterios INVEST: independientes, negociables, valiosas, estimables, atómicas y testeables.'
    },

    // ===================== UNIDAD 6 =====================
    {
      id: 'u6-q01',
      unit: 6,
      topic: 'Fundamentos de SDD',
      difficulty: 'básica',
      question: 'Con la automatización de código mediante IA, ¿dónde pasa a ubicarse el cuello de botella principal del desarrollo según la Unidad 6?',
      options: [
        'En la velocidad de tipeo manual de sintaxis por parte de los programadores.',
        'En la definición precisa e inequívoca de QUÉ se quiere construir (especificación).',
        'En la imposibilidad de generar archivos Markdown para documentar proyectos.',
        'En la eliminación de todos los requerimientos funcionales antes de empezar.'
      ],
      correctIndex: 1,
      explanation: 'Con la generación de código asistida por IA, el cuello de botella deja de estar en escribir código y pasa a estar en definir con precisión QUÉ se debe construir.'
    },
    {
      id: 'u6-q02',
      unit: 6,
      topic: 'SDD vs. Vibe-Coding y No-Determinismo',
      difficulty: 'intermedia',
      question: '¿Por qué el enfoque SDD se opone al "vibe-coding" al trabajar con agentes de IA?',
      options: [
        'Porque la IA es determinista y siempre produce el mismo código sin necesidad de guías.',
        'Porque el vibe-coding carece de registro de cambios y trazabilidad; dado que la IA no es determinista, sin una especificación precisa toma supuestos ambiguos y amplifica errores costosos.',
        'Porque el vibe-coding obliga a usar diagramas UML impresos antes de escribir prompts.',
        'Porque SDD prohíbe generar código automáticamente y exige codificación manual pura.'
      ],
      correctIndex: 1,
      explanation: 'La IA no es determinista (ante la misma orden puede dar salidas distintas). El vibe-coding carece de trazabilidad y deja que la IA asuma cosas ambiguas; SDD provee una guía precisa porque una especificación deficiente produce automatización deficiente.'
    },
    {
      id: 'u6-q03',
      unit: 6,
      topic: 'Atributos de la Especificación en SDD',
      difficulty: 'básica',
      question: '¿Cuáles son las tres cualidades esenciales que debe reunir una especificación en SDD?',
      options: [
        'Efímera, informal y monolítica.',
        'Estructurada (ordenada por secciones), Verificable (comprobable reiteradamente) y Evolutiva (modificable incrementalmente con trazabilidad).',
        'Secreta, inmutable y redactada exclusivamente en código binario.',
        'Oral, improvisada y dependiente de una única conversación temporal.'
      ],
      correctIndex: 1,
      explanation: 'En SDD la especificación debe ser Estructurada (legible por humanos y agentes), Verificable (permite validar rumbo y completitud) y Evolutiva (incremental y trazable ante cambios).'
    },
    {
      id: 'u6-q04',
      unit: 6,
      topic: 'SPEC como Fuente de Verdad',
      difficulty: 'intermedia',
      question: '¿Qué significa que en SDD la SPEC actúa como "fuente de verdad" del sistema?',
      options: [
        'Que es un apunte histórico inicial que se archiva y deja de coincidir con el sistema tras la primera entrega.',
        'Que está escrita para agentes de IA (ej. en Markdown), permanece vigente con la funcionalidad y el código generado es consecuencia directa de ella.',
        'Que el código fuente en producción es la única documentación válida y la SPEC se deduce después.',
        'Que contiene exclusivamente instrucciones de estilo CSS y configuración de servidores.'
      ],
      correctIndex: 1,
      explanation: 'La SPEC es la fuente de verdad vigente (no pierde sincronización con la funcionalidad), escrita para agentes de IA, de modo que el código es consecuencia de la especificación.'
    },
    {
      id: 'u6-q05',
      unit: 6,
      topic: 'SPEC vs. Prompt',
      difficulty: 'básica',
      question: '¿En qué se diferencia una SPEC de un Prompt convencional en el desarrollo con agentes de IA?',
      options: [
        'El prompt es permanente y evolutivo; la SPEC dura unos segundos y se olvida al cerrar el chat.',
        'El prompt sirve solo para una interacción efímera de segundos, pierde vigencia y no es fuente de verdad; la SPEC es persistente, estructurada y vigente.',
        'La SPEC no puede incluir ejemplos ni formato Markdown, mientras que el prompt sí.',
        'No hay diferencia funcional: una SPEC es simplemente un prompt largo copiado sin estructura.'
      ],
      correctIndex: 1,
      explanation: 'Un prompt sirve únicamente para una interacción puntual (dura unos segundos, luego el agente olvida el contexto y pierde vigencia), por lo que no puede actuar como fuente de verdad como sí lo hace una SPEC.'
    },
    {
      id: 'u6-q06',
      unit: 6,
      topic: 'SPEC vs. PRD vs. Documento de Diseño',
      difficulty: 'intermedia',
      question: '¿Por qué ni un PRD tradicional ni un Documento de Diseño sustituyen a una SPEC en SDD?',
      options: [
        'Porque el PRD explica demasiado código fuente y el Documento de Diseño omite las decisiones de arquitectura.',
        'Porque el PRD sirve solo para una release para stakeholders sin evolución sincronizada, y el Documento de Diseño mezcla implementación (el cómo) sin trazabilidad pura del qué.',
        'Porque ninguno de los dos puede ser leído por personas humanas en una revisión.',
        'Porque el PRD es obligatorio en el enfoque Spec-First para descartar el código automáticamente.'
      ],
      correctIndex: 1,
      explanation: 'El PRD define el qué para stakeholders en una release pero no evoluciona sincronizado con el código (es parcialmente fuente de verdad), y el Documento de Diseño describe el cómo (implementación), perdiendo trazabilidad pura de requerimientos.'
    },
    {
      id: 'u6-q07',
      unit: 6,
      topic: 'Enfoque Spec-First',
      difficulty: 'intermedia',
      question: 'Un equipo redacta una especificación para construir un feature con IA, genera el código y luego desecha la especificación, continuando las futuras modificaciones directamente sobre el código. ¿Qué enfoque aplicó y qué limitación tiene?',
      options: [
        'Aplicó Spec-as-Source; garantiza trazabilidad bidireccional perfecta a largo plazo.',
        'Aplicó Spec-Anchored; evoluciona código y especificación sincronizados.',
        'Aplicó Spec-First; solo evoluciona el código, se pierde trazabilidad y ante cambios habrá que redactar nuevas specs.',
        'Aplicó DoR estricto; impide generar código automáticamente.'
      ],
      correctIndex: 2,
      explanation: 'En Spec-First se define el feature, se genera el código y la spec se descarta: luego solo evoluciona el código, perdiendo trazabilidad continua ante futuros cambios.'
    },
    {
      id: 'u6-q08',
      unit: 6,
      topic: 'Spec-Anchored vs. Spec-as-Source',
      difficulty: 'intermedia',
      question: '¿Cómo se diferencian los enfoques Spec-Anchored y Spec-as-Source ante la modificación de un requerimiento?',
      options: [
        'En Spec-Anchored evolucionan y se modifican la especificación y el código a la par; en Spec-as-Source solo evoluciona la especificación, descartando y regenerando el código afectado.',
        'En Spec-Anchored se borra todo el código en cada cambio; en Spec-as-Source solo evoluciona el código sin tocar la spec.',
        'En ambos enfoques la especificación se descarta después de la primera compilación exitosa.',
        'Spec-as-Source prohíbe usar inteligencia artificial en la fase de implementación.'
      ],
      correctIndex: 0,
      explanation: 'En Spec-Anchored la especificación siempre existe y evoluciona en paralelo con el código. En Spec-as-Source la única fuente evolutiva es la especificación: si cambia un requisito, el código correspondiente se descarta y regenera.'
    },
    {
      id: 'u6-q09',
      unit: 6,
      topic: 'Workflow SDD y Human-in-the-loop',
      difficulty: 'intermedia',
      question: '¿Qué rol cumplen las puertas "Human-in-the-loop" dentro del workflow de tres fases en SDD?',
      options: [
        'Permiten que la IA apruebe y despliegue en producción sin intervención de personas.',
        'Aseguran que entre cada actividad (requerimientos, diseño y tareas) un humano/stakeholder verifique y valide que el rumbo es correcto antes de pasar a construir.',
        'Sirven para ocultar la especificación a los stakeholders hasta terminar la fase de pruebas.',
        'Reemplazan los identificadores únicos por comentarios informales al final del código.'
      ],
      correctIndex: 1,
      explanation: 'El workflow SDD tiene 3 fases (dar estructura al trabajo, escritura de la spec, construcción y verificación) con puertas Human-in-the-loop donde una persona verifica y valida requerimientos, diseño y tareas antes de automatizar.'
    },
    {
      id: 'u6-q10',
      unit: 6,
      topic: 'DoR y Principio de Bajo Costo Temprano',
      difficulty: 'integradora',
      question: '¿Qué verifica una checklist DoR (Definition of Ready) en SDD y con qué principio económico de la Ingeniería de Requerimientos se conecta?',
      options: [
        'Verifica que la app ya esté publicada en tiendas y se conecta con la Ley de Conway.',
        'Comprueba si un requerimiento está listo y completo (ej. que figuren todos los datos a manejar), conectándose con el principio de que corregir un error al inicio es mucho más barato que al final.',
        'Evalúa únicamente la velocidad de la GPU del agente y descarta la validación de usuarios.',
        'Mide el cumplimiento de FURPS+ solo después de descartar la especificación.'
      ],
      correctIndex: 1,
      explanation: 'El DoR funciona como checklist de V&V para asegurar que el requerimiento está listo (p. ej. que figuren todos los datos) antes de generar código, evitando la propagación exponencial de errores mediante el principio de bajo costo temprano.'
    },
    {
      id: 'u6-q11',
      unit: 6,
      topic: 'Smart Kid Principle',
      difficulty: 'básica',
      question: '¿Qué exige el "Smart Kid Principle" al redactar una SPEC?',
      options: [
        'Escribir con jerga críptica comprensible solo por quien asistió a las reuniones previas.',
        'Que alguien sin contexto previo pueda leerla y construir exactamente lo esperado, indicando qué hacer, qué NO hacer (fuera de alcance), evitando redundancias y dando ejemplos.',
        'Incluir todo el código fuente del proyecto dentro de los requisitos de negocio.',
        'Describir exclusivamente el caso feliz (happy path) para mantener el documento corto.'
      ],
      correctIndex: 1,
      explanation: 'El Smart Kid Principle establece que alguien sin contexto previo entienda con exactitud qué construir: explica qué hacer, qué NO hacer o queda fuera de alcance, sin redundancias y con ejemplos concretos.'
    },
    {
      id: 'u6-q12',
      unit: 6,
      topic: 'EARS, Casos de Borde, Gherkin e IDs Únicos',
      difficulty: 'integradora',
      question: 'Para evitar que la IA invente supuestos erróneos sin caer en sobre-especificación, ¿qué conjunto de prácticas combina una buena SPEC?',
      options: [
        'Lenguaje poético ambiguo, omitir excepciones y agrupar todos los requisitos en un único párrafo sin numeración.',
        'Sintaxis EARS (reduce ambigüedad), cobertura de casos de borde (no solo happy path), criterios de aceptación verificables tipo Gherkin (Dado-Cuando-Entonces) e identificadores únicos por work item.',
        'Especificación detallada de librerías internas de compilación sin criterios de aceptación.',
        'Prompts sueltos en lenguaje coloquial sin trazabilidad entre requisitos y pruebas.'
      ],
      correctIndex: 1,
      explanation: 'Una SPEC sólida combina EARS para reducir ambigüedades, definición explícita de casos de borde, criterios de aceptación verificables / Gherkin (Dado-Cuando-Entonces) e IDs únicos para trazabilidad de requisitos y pruebas, sin sobre-especificar.'
    }
  ];
})(window);
