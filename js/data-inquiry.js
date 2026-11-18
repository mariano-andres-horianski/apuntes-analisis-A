(function (global) {
  'use strict';

  global.ADS_INQUIRY = [
    // ===================== UNIDAD 1 (7 preguntas) =====================
    {
      id: 'u1-i01',
      unit: 1,
      type: 'comprension',
      question: 'Explicá con tus palabras por qué "las funciones dependen de la estructura" en la TGS y qué le pasa a un sistema automatizado cuando se lo especializa en exceso.',
      whyItMatters: 'Evalúa si entendés la relación entre diseño estructural, rigidez y adaptabilidad al cambio en organizaciones reales.',
      keyPoints: [
        'Es una de las tres premisas de la TGS junto con que existen dentro de sistemas mayores y son abiertos.',
        'La estructura interna (subsistemas y sus relaciones) determina qué funciones puede cumplir el sistema.',
        'Según el primer principio de sistemas automatizados, cuanto más especializado es un sistema, menos capaz es de adaptarse a los cambios.',
        'Además, a mayor tamaño del sistema, mayor cantidad de recursos demanda para su mantenimiento.'
      ],
      followUp: 'Si una empresa cambia sus reglas de negocio cada seis meses, ¿qué riesgo arquitectónico corre si implementa un software hiperespecializado sin modularidad?'
    },
    {
      id: 'u1-i02',
      unit: 1,
      type: 'contraste',
      question: '¿Cuál es la diferencia exacta entre retroalimentación, homeostasis y equifinalidad dentro de un sistema abierto?',
      whyItMatters: 'Son tres conceptos sistémicos que suelen mezclarse en definiciones orales.',
      keyPoints: [
        'Retroalimentación es el mecanismo de control que ajusta las entradas basándose en las salidas observadas.',
        'Homeostasis es la tendencia del sistema a adaptarse a los cambios del entorno para mantener un equilibrio interno.',
        'Equifinalidad es la capacidad de alcanzar un mismo objetivo final por diferentes alternativas o caminos (siempre bajo teleología, es decir, guiados por un propósito).'
      ],
      followUp: '¿Podría existir homeostasis en un sistema abierto si careciera totalmente de mecanismos de retroalimentación?'
    },
    {
      id: 'u1-i03',
      unit: 1,
      type: 'comprension',
      question: '¿Por qué el totalismo afirma que "el todo es superior a la suma de sus partes" y cómo fundamenta esto al Enfoque Sistémico?',
      whyItMatters: 'Es la razón filosófica y práctica de por qué no alcanza analizar módulos por separado.',
      keyPoints: [
        'La interdependencia entre subsistemas genera propiedades emergentes que desaparecen si se separan las partes.',
        'El Enfoque Sistémico es la aplicación práctica de la TGS a cualquier objeto de estudio (empresa, software, comunidad).',
        'Implica recorrer tres fases: formulación del problema (Análisis), identificación y diseño de soluciones (Diseño) y control de resultados (Operaciones).'
      ],
      followUp: '¿Qué falla en un proyecto cuando un analista intenta optimizar solo el departamento de ventas sin revisar cómo interactúa con depósito y facturación?'
    },
    {
      id: 'u1-i04',
      unit: 1,
      type: 'caso',
      question: 'Un gerente recibe todas las mañanas un reporte exacto, con contexto de negocio claro, pero con datos cerrados de hace 45 días que además tarda 4 horas diarias en compilarse manualmente. Analizá este caso usando los 5 atributos de la información y el concepto de entropía.',
      whyItMatters: 'Conecta la fórmula Datos + Procesamiento = Información con criterios concretos de diagnóstico.',
      keyPoints: [
        'Cumple Significado (tiene sentido semántico en el dominio) y Validez (es exacto).',
        'Falla gravemente la Vigencia (está desactualizado/obsoleto al momento de decidir).',
        'Se deteriora el Valor (utilidad relativa subjetiva comparada con el altísimo costo y demora de obtenerlo).',
        'Una señal sin vigencia ni oportunidad no reduce eficazmente la entropía ni la incertidumbre al decidir.'
      ],
      followUp: '¿Qué pasa con la entropía de la organización si ese reporte pasa a emitirse en tiempo real y con menor costo de obtención?'
    },
    {
      id: 'u1-i05',
      unit: 1,
      type: 'contraste',
      question: '¿Cómo se relacionan Problem Space vs. Solution Space con Product Discovery vs. Product Delivery y el Product-Market Fit?',
      whyItMatters: 'Alinea la terminología clásica de sistemas con el vocabulario moderno de Product Management.',
      keyPoints: [
        'Problem Space (el qué, para quién y por qué) corresponde al Análisis y al Product Discovery (agilismo, dolores, necesidades y restricciones).',
        'Solution Space (el cómo) corresponde al Diseño, arquitectura, construcción y entrega (Product Delivery).',
        'Product-Market Fit es el puente o grado de alineación donde la solución construida en la punta satisface las necesidades reales definidas en la base.'
      ],
      followUp: '¿Qué ocurre si un equipo salta directo al Product Delivery sin hacer Product Discovery?'
    },
    {
      id: 'u1-i06',
      unit: 1,
      type: 'comprension',
      question: 'El apunte da tres razones concretas por las que los requisitos deben definirse como "caja negra" separando el QUÉ del CÓMO. ¿Cuáles son y qué pasa si se rompe esa regla?',
      whyItMatters: 'Es una de las preguntas más frecuentes tanto en parciales escritos como en mesas finales.',
      keyPoints: [
        '1) Evitar suposiciones y soluciones prematuras: obliga a indagar primero el problema real.',
        '2) Prevenir construir el producto equivocado: evitar concentrarse en la entrega sin hacer research del usuario.',
        '3) Garantizar mantenibilidad: si los requisitos no incluyen detalles de diseño o implementación, la documentación no se rompe al cambiar lenguaje, formato o plataforma.'
      ],
      followUp: 'Dame un ejemplo de un requisito mal redactado que contamina el QUÉ con detalles del CÓMO.'
    },
    {
      id: 'u1-i07',
      unit: 1,
      type: 'caso',
      question: 'Una clínica detecta que sus pacientes abandonan la sala de espera por demoras. El dueño pide "hacer una app móvil para sacar turnos". Aplicá el análisis multicausal y clasificá la clínica como sistema.',
      whyItMatters: 'Entrena a frenar soluciones apresuradas y diagnosticar problemas multicausales.',
      keyPoints: [
        'La clínica es un sistema físico/social abierto, artificial, con variables continuas y discretas, y comportamiento probabilístico.',
        'Todo problema es multicausal: las demoras pueden venir de falta de médicos, mala agenda, problemas de validación de obra social o flujo interno, no solo de falta de app.',
        'El análisis multicausal exige entender cómo interactúan los subsistemas con el contexto antes de proponer la app como solución.'
      ],
      followUp: 'Si diseñás la app igual sin investigar las otras causas, ¿qué le va a pasar al indicador de abandono en sala?'
    },

    // ===================== UNIDAD 2 (7 preguntas) =====================
    {
      id: 'u2-i01',
      unit: 2,
      type: 'comprension',
      question: 'Explicá el modelo 3P+A y fundamentá por qué la Arquitectura se considera inherente a todo proyecto y crítica ante los cambios.',
      whyItMatters: 'Integra las cuatro dimensiones estructurales de la Ingeniería de Software.',
      keyPoints: [
        '3P+A integra Proyecto (planificación, monitoreo, control), Proceso (actividades, tareas, hitos), Producto (objetivos, alcance, límites) y Arquitectura.',
        'La Arquitectura es el diseño base que soporta los componentes del software y sus interacciones.',
        'Define cómo será el proyecto, producto y proceso considerando presupuesto, tiempos, elecciones y metodologías.',
        'Si la arquitectura es débil, el producto colapsa frente a un cambio.'
      ],
      followUp: '¿Puede existir un proyecto de software sin arquitectura? ¿Qué ocurre cuando "no se diseña" la arquitectura explícitamente?'
    },
    {
      id: 'u2-i02',
      unit: 2,
      type: 'contraste',
      question: 'Compará el ciclo de vida "The Box" (y en particular su etapa 3) frente al modelo en Cascada y frente al Ciclo de Vida del Producto Lean.',
      whyItMatters: 'Permite elegir y justificar el ciclo adecuado según la presencia o ausencia del usuario y la duración del sistema.',
      keyPoints: [
        'Cascada es lineal y secuencial (Req -> Análisis -> Diseño -> Código -> Pruebas); aunque en la realidad muchas etapas se hacen en paralelo.',
        'The Box es cíclico en 7 etapas; en la etapa 3 (análisis de necesidades del sistema) es donde realmente se agrega valor filtrando qué aporta información útil y sentido en el Problem Space.',
        'El Ciclo Lean de Producto asume que el usuario no está para elicitar: formula hipótesis, usa un Discovery rápido/liviano/barato validado con MVPs y concentra recursos en Build, Launch y Evaluate.'
      ],
      followUp: '¿Cómo influye esperar un ciclo de vida largo vs. corto en la importancia que le das al diseño inicial?'
    },
    {
      id: 'u2-i03',
      unit: 2,
      type: 'comprension',
      question: '¿Cómo funciona Design Thinking con sus dos fases creativas y por qué el apunte afirma que "no cubre todo el ciclo de vida"?',
      whyItMatters: 'Evita creer erróneamente que Design Thinking es una metodología completa de construcción.',
      keyPoints: [
        'Combina pensamiento divergente (generar ideas) y convergente (decidir/hacer).',
        'Flujo: Entendimiento (Empatizar, Definir) -> Explorar (Idear, Prototipar) -> Materializar (Testear, Implementar).',
        'Parte de suposiciones sin interacción con el usuario hasta llegar a Testear, donde recién valida la hipótesis.',
        'Todo su recorrido excepto Implementar pertenece al Product Discovery (definir el qué), por eso no cubre todo el ciclo de vida.'
      ],
      followUp: '¿Por qué la Agilidad Moderna combina Design Thinking con Lean y Agile en el esquema del Doble Diamante?'
    },
    {
      id: 'u2-i04',
      unit: 2,
      type: 'caso',
      question: 'Una startup afirma: "Como ahora programamos con IA, ya no necesitamos hacer research ni análisis de requerimientos porque generamos prototipos en dos horas". Refutá o corregí esa postura según el apunte.',
      whyItMatters: 'Evalúa criterio profesional frente al hype actual de la IA en desarrollo.',
      keyPoints: [
        'La IA acelera drásticamente el prototipado, lo que permite encontrar errores en los supuestos mucho más rápido y medir su magnitud para mejorar.',
        'Sin embargo, la IA necesita contexto para generar algo útil.',
        'Por eso el apunte es explícito: el research no desaparece ni tampoco el análisis de requerimientos.'
      ],
      followUp: '¿Cómo se conecta este límite de la IA con el cuello de botella que profundiza la Unidad 6 (SDD)?'
    },
    {
      id: 'u2-i05',
      unit: 2,
      type: 'comprension',
      question: '¿Por qué un proyecto de desarrollo de software es "no determinista" y qué carácter tiene su producto? Explicá además las 3 áreas de gestión.',
      whyItMatters: 'Explica por qué estimar software es distinto a estimar obras físicas repetitivas.',
      keyPoints: [
        'No es determinista porque enfrenta variabilidad continua en tareas, estimaciones de tiempo/costo/personal, evolución de necesidades y cambios tecnológicos.',
        'El producto es intangible o abstracto (resultado de conocimiento); sus fallas nacen de errores de diseño, lógica o especificación.',
        'Las 3 áreas de gestión son: Planificación (personal como recurso crítico, estimación por módulos/CU/HU), Calendarización (dependencias y tiempos) y Riesgos (negocio, técnicos y presupuesto).'
      ],
      followUp: '¿Cómo se mide el avance de un producto que es intangible?'
    },
    {
      id: 'u2-i06',
      unit: 2,
      type: 'comprension',
      question: 'Detallá cómo estructura CMMI el área de Planificación de Proyectos (PP, ML2) y qué relación existe entre metas específicas y prácticas específicas.',
      whyItMatters: 'Clarifica qué aporta realmente un modelo de madurez como CMMI sin confundirlo con burocracia.',
      keyPoints: [
        'CMMI dice qué habría que hacer definiendo buenas prácticas para garantizar la calidad del proceso.',
        'Metas específicas establecen características necesarias para que las actividades sean efectivas; prácticas específicas son las actividades para lograrlas.',
        'En PP (ML2) hay tres metas: SG1 establecer estimaciones (alcance, ciclo, esfuerzo, costo), SG2 desarrollar el plan (cronograma, presupuesto, riesgos, recursos, involucrados) y SG3 obtener compromiso acordado con cliente y equipo.'
      ],
      followUp: '¿Por qué es indispensable obtener compromiso en SG3 antes de empezar a ejecutar el plan?'
    },
    {
      id: 'u2-i07',
      unit: 2,
      type: 'contraste',
      question: 'Explicá la relación asimétrica entre Calidad de Proceso y Calidad de Producto y qué evalúa cada una.',
      whyItMatters: 'Desmonta el mito de que certificar CMMI o ISO garantiza automáticamente software libre de fallos.',
      keyPoints: [
        'Calidad de proceso evalúa en qué condiciones se construyó (tareas, orden, validaciones; ej. CMMI, ISO).',
        'Calidad de producto se valida sobre el software final mediante verificación y testing.',
        'Relación asimétrica: un proceso deficiente produce con certeza un producto deficiente; pero un buen proceso no garantiza por sí solo un buen producto.'
      ],
      followUp: '¿Qué otros dos factores menciona el apunte, junto a la calidad del proceso, como determinantes del éxito del producto final?'
    },

    // ===================== UNIDAD 3 (7 preguntas) =====================
    {
      id: 'u3-i01',
      unit: 3,
      type: 'comprension',
      question: 'Describí las cuatro actividades del Proceso de Ingeniería de Requerimientos (Elicitar, Modelar, Analizar y Gestionar) y qué rol cumple el Universo de Discurso.',
      whyItMatters: 'Es la columna vertebral de la Unidad 3.',
      keyPoints: [
        'El Universo de Discurso es todo el contexto (fuentes de información y personas) en el cual se desarrolla el sistema.',
        'Elicitar: descubrir y recopilar necesidades desde fuentes priorizadas (usuarios = fuente más significativa).',
        'Modelar: convertir la interacción en un formato legible y común.',
        'Analizar: transformar requisitos de usuario en requisitos de sistema, negociar conflictos y ejecutar V&V.',
        'Gestionar: actividad transversal durante todo el ciclo para evaluar impacto, costos de cambios y actualizar modelos/documentos.'
      ],
      followUp: 'Si los usuarios no están disponibles para entrevistar durante la elicitación, ¿qué alternativa plantea el apunte?'
    },
    {
      id: 'u3-i02',
      unit: 3,
      type: 'contraste',
      question: '¿Cuándo elegirías una estructura de entrevista en Pirámide, cuándo una en Embudo y cuándo una en Rombo? Ejemplificá usando tipos de preguntas.',
      whyItMatters: 'Muestra dominio práctico de técnicas de elicitación individual.',
      keyPoints: [
        'Pirámide (cerradas -> abiertas): útil cuando conviene empezar por hechos concretos para luego abrir a opiniones o procesos amplios.',
        'Embudo (abiertas -> cerradas): útil para que el entrevistado exponga primero su visión global y luego acotar detalles puntuales (incluyendo bipolares sí/no).',
        'Rombo o diamante (cerradas -> abiertas -> cerradas): combina datos iniciales precisos, exploración profunda con sondeos ("¿por qué?", ejemplos) y cierre acotado.'
      ],
      followUp: '¿En qué se diferencia una pregunta cerrada general de una pregunta bipolar y de un sondeo?'
    },
    {
      id: 'u3-i03',
      unit: 3,
      type: 'comprension',
      question: '¿Por qué los Requerimientos No Funcionales pueden ser incluso más críticos que los Funcionales y qué distingue a los "drivers de arquitectura"?',
      whyItMatters: 'Evita el error típico de centrarse solo en pantallas/funciones olvidando restricciones globales.',
      keyPoints: [
        'Los RNF son restricciones o propiedades emergentes del sistema completo (rendimiento, fiabilidad, disponibilidad, seguridad).',
        'Si un sistema incumple un RNF crítico (ej. fiabilidad en sistema de vuelo o latencia en control en tiempo real) queda completamente inutilizable.',
        'Se clasifican en Del Producto, Organizacionales y Externos.',
        'Los drivers de arquitectura son RNF que impactan en todas las funcionalidades (visibles como seguridad/usabilidad o no visibles como modificabilidad/portabilidad) y nacen de objetivos de negocio.'
      ],
      followUp: '¿Cómo distinguirías rápidamente un RNF Organizacional de un RNF Externo en un examen?'
    },
    {
      id: 'u3-i04',
      unit: 3,
      type: 'contraste',
      question: 'Diferenciá con precisión Verificación vs. Validación y relacioná ambas con las demandas erróneas, inconsistentes y omitidas.',
      whyItMatters: 'Es probablemente la distinción más evaluada de toda la Ingeniería de Requerimientos.',
      keyPoints: [
        'Verificación asegura que se construye correctamente: formato, completitud, consistencia y criterios de aceptación.',
        'Validación asegura que se construye la cosa correcta según lo que el usuario realmente necesita en el dominio.',
        'Una demanda inconsistente (pide A y B contradictorios) puede detectarse con Verificación técnica.',
        'Una demanda errónea (pide caja de texto en vez de calendario) u omitida requiere Validación con el usuario y comprensión del dominio.'
      ],
      followUp: '¿Qué es la "trazabilidad bidireccional" en CMMI REQM y cómo ayuda cuando cambia un requerimiento?'
    },
    {
      id: 'u3-i05',
      unit: 3,
      type: 'caso',
      question: 'En una etapa tardía de pruebas se descubre que el módulo de pagos calcula impuestos con un criterio equivocado que venía mal desde la primera entrevista. Explicá qué pasó en términos de propagación de errores y curva de costos.',
      whyItMatters: 'Conecta los defectos tempranos con su impacto económico real.',
      keyPoints: [
        'El error nació en la demanda inicial (hecho incorrecto / demanda errónea) durante la elicitación.',
        'Se propagó a través del modelado, la especificación SRS, el diseño y el código hasta las pruebas.',
        'Mientras requisitos cuesta base (1x), diseño cuesta 3-6x, código 10x y pruebas de desarrollo 15-40x (y operación aún más + daño reputacional).',
        'Por eso se aplican inspecciones, prototipos y validación temprana.'
      ],
      followUp: '¿Por qué corregir ese mismo error en Operación implica riesgos que exceden el costo monetario del código?'
    },
    {
      id: 'u3-i06',
      unit: 3,
      type: 'caso',
      question: 'Tenés 8 requerimientos para el próximo trimestre y recursos para solo 3. Explicá cómo combinarías análisis de riesgo, Matriz de Impacto vs. Esfuerzo y técnicas como MoSCoW, RICE o WSJF.',
      whyItMatters: 'Entrena el criterio de priorización defendiendo "cuando todo es importante, nada es importante".',
      keyPoints: [
        'Primero evaluar los requerimientos más riesgosos (probabilidad e impacto en costo/tiempo/esfuerzo) para validar la viabilidad del proyecto.',
        'Aplicar Impacto vs. Esfuerzo para ejecutar rápido las Ganancias Rápidas (alto impacto/bajo esfuerzo), planificar Grandes Proyectos y descartar Tareas Ingratas (bajo impacto/alto esfuerzo).',
        'Formalizar con MoSCoW (Must/Should/Could/Won\'t), RICE (Reach, Impact, Confidence, Effort) o WSJF (trabajos cortos de mayor valor).'
      ],
      followUp: '¿Qué diferencia existe entre usar Matriz de Eisenhower y usar Matriz de Impacto vs. Esfuerzo?'
    },
    {
      id: 'u3-i07',
      unit: 3,
      type: 'comprension',
      question: '¿Cómo se relacionan Dominio, Modelo de Negocio, Estructura Organizacional (Ley de Conway) y Arquitectura de Software?',
      whyItMatters: 'Muestra visión sistémica entre organización, dominio y arquitectura.',
      keyPoints: [
        'El Dominio describe el subsistema de la realidad con sus actores, entidades, reglas y procesos.',
        'El Modelo de Negocio explica cómo la organización genera y entrega valor resolviendo una insatisfacción.',
        'El estudio del dominio y el negocio impone restricciones sobre la arquitectura que habilita ejecutar ese modelo.',
        'Entender el dominio permite diseñar la arquitectura de acuerdo al problema evitando que copie defectos de la estructura organizacional (Ley de Conway).'
      ],
      followUp: '¿Qué papel juega el SRS como documento oficial frente a estas definiciones?'
    },

    // ===================== UNIDAD 4 (7 preguntas) =====================
    {
      id: 'u4-i01',
      unit: 4,
      type: 'comprension',
      question: '¿Por qué el apunte afirma que "Modelar es diferente a diagramar" y que "los modelos son prescriptivos"?',
      whyItMatters: 'Corrige la idea superficial de pensar que hacer dibujitos en una herramienta es modelar.',
      keyPoints: [
        'Un modelo es una simplificación/abstracción de la realidad con un objetivo definido que retiene solo los elementos relevantes.',
        'Sirve para investigar, comunicar estructura y comportamiento, controlar la arquitectura (escalabilidad, refactorización, librerías) y analizar riesgos.',
        'Es prescriptivo porque guía y establece cómo debe funcionar/construirse el sistema, documentando decisiones.',
        'Un sistema puede tener modelos en texto (lista de casos de uso) y gráficos (diagrama de casos de uso) sin reducirse a trazar figuras.'
      ],
      followUp: 'Si dos modelos distintos representan el mismo sistema, ¿significa que alguno de los dos sobra?'
    },
    {
      id: 'u4-i02',
      unit: 4,
      type: 'comprension',
      question: '¿Qué es un Viewpoint (Vista) y por qué distintos stakeholders requieren modelos o vistas diferentes con precisión variada?',
      whyItMatters: 'Justifica la existencia de múltiples artefactos sin duplicar trabajo inútil.',
      keyPoints: [
        'Una vista es la proyección de un modelo desde la perspectiva particular de un stakeholder.',
        'Omiten deliberadamente entidades no relevantes para ese perfil (al programador no le interesa lo mismo que al cliente o al analista).',
        'La complejidad y características del problema guían qué modelos construir y cuántos.'
      ],
      followUp: '¿Qué problemas comunicacionales aparecen si le mostrás la vista detallada del programador al cliente de negocio en la primera reunión?'
    },
    {
      id: 'u4-i03',
      unit: 4,
      type: 'contraste',
      question: 'Compará punto por punto: Prototipo vs. Iteración de UP vs. MVP. ¿Qué tiene en común su código y en qué difiere radicalmente su destino?',
      whyItMatters: 'Es una de las comparaciones integradoras más importantes de las unidades 4 y 5.',
      keyPoints: [
        'Los tres pueden involucrar software o código funcional ejecutable.',
        'Prototipo: código de prueba desechable para recopilar información, validar requisitos y reducir incertidumbre.',
        'Iteración UP: subconjunto real, probado e integrado del producto final que se acumula (pero aún no sale a producción).',
        'MVP: versión mínima funcional puesta frente al usuario bajo Construir-Medir-Aprender para validar Market Fit y evolucionar al producto final.'
      ],
      followUp: '¿Cuál es el riesgo principal cuando un stakeholder queda encantado con un prototipo funcional?'
    },
    {
      id: 'u4-i04',
      unit: 4,
      type: 'caso',
      question: 'Un equipo construye un prototipo interactivo muy vistoso para validar pantallas y el cliente dice: "Genial, mañana salimos a producción con esto". ¿Por qué sería un error grave y cómo debió gestionarse?',
      whyItMatters: 'Ejemplifica el riesgo explícito señalado en el apunte sobre prototipos.',
      keyPoints: [
        'Es el riesgo clásico de confusión del prototipo con el producto final.',
        'El prototipo es código de prueba rápido para obtener feedback y reducir costos de error, sin la arquitectura, pruebas ni calidad de producción.',
        'Se debe aclarar desde el principio que sirve para validar expectativas o detener sistemas inviables, no para operar en producción.'
      ],
      followUp: '¿Cuándo un artefacto inicial SÍ está diseñado para quedarse y convertirse en producto final si funciona bien?'
    },
    {
      id: 'u4-i05',
      unit: 4,
      type: 'comprension',
      question: 'Explicá el ciclo del MVP (Construir-Medir-Aprender) y qué condiciones deben cumplirse para que deje de ser MVP y pase a ser producto final.',
      whyItMatters: 'Conecta el concepto de MVP con Market Fit, retención y Continuous Discovery.',
      keyPoints: [
        'Se construye con el mínimo esfuerzo y tiempo de desarrollo de forma iterativo-incremental para habilitar elicitación con uso real.',
        'Está ligado al Market Fit: validar si ese conjunto mínimo de características resuelve un problema real en el mercado.',
        'Pasa a producto final cuando logra mucha retención de usuarios y el producto se sostiene en el tiempo.',
        'Aun como producto consolidado, continúa el Continuous Discovery.'
      ],
      followUp: '¿Por qué un MVP que consigue descargas iniciales pero tiene retención cero no alcanzó Market Fit?'
    },
    {
      id: 'u4-i06',
      unit: 4,
      type: 'caso',
      question: 'Tu equipo debate si invertir dos semanas en un Prototipo o cuatro semanas en un MVP para una nueva funcionalidad dentro de una app existente con 20.000 usuarios. ¿Qué criterios del apunte usarías para decidir?',
      whyItMatters: 'Obliga a aplicar el propósito de cada herramienta a una decisión real de producto.',
      keyPoints: [
        'Si la duda es sobre requisitos, flujo o usabilidad interna sin certeza de qué necesita el usuario -> Prototipo rápido para validar supuestos y reducir incertidumbre antes de construir.',
        'Si ya hay claridad del problema y se busca medir adopción real, retención y Market Fit en usuarios reales -> MVP iterativo-incremental con Construir-Medir-Aprender.',
        'También puede usarse prototipo previo en Discovery para abaratar el MVP posterior.'
      ],
      followUp: '¿Cómo cambia la decisión si la idea resulta inviable al probarla?'
    },
    {
      id: 'u4-i07',
      unit: 4,
      type: 'comprension',
      question: '¿Qué beneficios arquitectónicos ofrece mantener modelos actualizados de un sistema a lo largo de su evolución?',
      whyItMatters: 'Evita pensar que los modelos sirven solo antes de empezar a programar.',
      keyPoints: [
        'Dan visualización general del sistema completo.',
        'Permiten controlar qué librerías y servicios se usan, la mantenibilidad, corrección y escalabilidad.',
        'Ayudan a entender módulos o clases y detectar oportunidades para refactorizar y reutilizar.',
        'Facilitan analizar riesgos frente a nuevos cambios.'
      ],
      followUp: '¿Qué pasa con el principio de sistemas automatizados de la U1 ("cuanto mayor es el sistema, más recursos de mantenimiento requiere") si no existen modelos claros?'
    },

    // ===================== UNIDAD 5 (7 preguntas) =====================
    {
      id: 'u5-i01',
      unit: 5,
      type: 'comprension',
      question: 'En AOO, ¿por qué un "concepto del dominio" no es exactamente lo mismo que una "clase", y cuál es el costo de omitir un objeto clave durante el análisis?',
      whyItMatters: 'Distingue la etapa conceptual de análisis respecto de la etapa de diseño en POO.',
      keyPoints: [
        'El flujo es: (1) existencia del concepto en el dominio, (2) se abstrae, modela y analiza, (3) se convierte en clase.',
        'En el análisis del dominio se identifican entidades significativas y responsabilidades antes de pasar a clases de software.',
        'Si un objeto relevante no se identifica a tiempo, todo el análisis posterior empeora y resulta muy costoso corregirlo.'
      ],
      followUp: '¿Qué artefacto específico de UP sirve para capturar conceptos del dominio sin mezclarlos aún con clases de diseño?'
    },
    {
      id: 'u5-i02',
      unit: 5,
      type: 'comprension',
      question: 'Describí los tres pilares del Proceso Unificado (iterativo/incremental, dirigido por riesgo, centrado en arquitectura) y explicá qué es el Slicing.',
      whyItMatters: 'Resume la esencia operativa de UP.',
      keyPoints: [
        'Iterativo e incremental: mini-proyectos de duración fija que siempre terminan con código funcional integrado (subconjunto del producto final).',
        'Slicing: dividir requerimientos grandes para que quepan en una iteración corta entregando código funcional.',
        'Dirigido por el riesgo: atacar primero los requisitos más complejos o de mayor impacto para verificar viabilidad temprana.',
        'Centrado en la arquitectura: un núcleo arquitectónico temprano brinda visión global y conecta componentes bajo el ciclo Construir-Retroalimentar-Adaptar.'
      ],
      followUp: '¿Por qué atacar primero los requisitos fáciles daría una falsa sensación de progreso?'
    },
    {
      id: 'u5-i03',
      unit: 5,
      type: 'contraste',
      question: 'Explicá qué se hace y qué NO se hace en cada una de las 4 fases de UP (Inicio, Elaboración, Construcción, Transición), distinguiendo Hitos, Versiones y Disciplinas.',
      whyItMatters: 'Aclara una confusión frecuente entre fases (tiempo) y disciplinas (tipo de trabajo).',
      keyPoints: [
        'Inicio (usualmente 1 iteración): evalúa viabilidad, visión aproximada, negocio y alcance; NO especifica todos los requisitos.',
        'Elaboración: implementa la arquitectura núcleo, resuelve alto riesgo y refina requisitos/estimaciones.',
        'Construcción: mayor cantidad de iteraciones para requisitos de menor riesgo y elementos sencillos.',
        'Transición: pruebas beta con usuarios para feedback y puesta en producción.',
        'Hito = corte de evaluación/decisión; Versión = incremento funcional; Disciplinas = actividades concurrentes en todas las fases.'
      ],
      followUp: 'Si durante Inicio concluís que el proyecto no es viable económica o técnicamente, ¿qué debe hacerse?'
    },
    {
      id: 'u5-i04',
      unit: 5,
      type: 'comprension',
      question: '¿Cómo clasifica FURPS+ los requerimientos en UP y cuáles corresponden estrictamente a atributos de calidad?',
      whyItMatters: 'Vincula la clasificación general de U3 (RF/RNF) con la taxonomía estándar de UP.',
      keyPoints: [
        'F (Funcional): características, capacidades y seguridad.',
        'U (Usabilidad), R (Reliability/Fiabilidad), P (Performance), S (Soporte): estos cuatro conforman los atributos de calidad.',
        '+ (Adicionales): restricciones de implementación, interfaz, operaciones, empaquetamiento y legales.',
        'Los funcionales se analizan en Casos de Uso; los restantes en requisitos especiales y especificación complementaria.'
      ],
      followUp: '¿Dónde registrarías un requisito legal o una restricción de sistema operativo en UP si no encaja en un Caso de Uso puntual?'
    },
    {
      id: 'u5-i05',
      unit: 5,
      type: 'caso',
      question: 'Al revisar un Caso de Uso "Registrar Venta", notás que el paso 1 dice: "Validar que el sistema tenga conexión con la base MySQL usando el método ConnectDB()" y las precondiciones piden probar la contraseña. Señalá todos los errores conceptuales.',
      whyItMatters: 'Evalúa la capacidad de auditar casos de uso mal redactados.',
      keyPoints: [
        'Rompe la regla de Caja Negra: menciona tecnología concreta (MySQL) y método interno (ConnectDB), mezclando QUÉ con CÓMO.',
        'Las precondiciones NO se prueban dentro del caso de uso: se asumen verdaderas porque representan otro caso de uso previo completado con éxito (ej. "Cajero autenticado").',
        'El caso de uso debe redactarse en lenguaje natural centrando el flujo principal (happy path) y separando desvíos en Extensiones.'
      ],
      followUp: '¿Cómo transformarías ese Caso de Uso en un DSS (Diagrama de Secuencia de Sistema) respetando la caja negra?'
    },
    {
      id: 'u5-i06',
      unit: 5,
      type: 'contraste',
      question: 'Compará el Modelo de Dominio con un Diagrama de Clases de Software y explicá cómo se descubren sus conceptos a partir de los Casos de Uso.',
      whyItMatters: 'Evita adelantar decisiones de diseño dentro de la etapa de análisis.',
      keyPoints: [
        'El Modelo de Dominio descompone la realidad del problema en clases conceptuales con sus atributos más importantes y asociaciones significativas.',
        'No es un diagrama de clases de diseño (no define métodos ni tipos de programación).',
        'Se descubre mediante lista de categorías del dominio o extrayendo frases nominales (sustantivos) de los casos de uso.',
        'Permite representar generalización/especialización (herencia), clases asociativas, agregación y composición.'
      ],
      followUp: '¿Qué función cumplen la Visión de Negocio y el Glosario junto al Modelo de Dominio?'
    },
    {
      id: 'u5-i07',
      unit: 5,
      type: 'comprension',
      question: '¿Qué estructura tiene una Historia de Usuario ágil, por qué el apunte la ubica como artefacto "no UP" y qué significan sus criterios de calidad (INVEST)?',
      whyItMatters: 'Integra artefactos ágiles ligeros con la ingeniería de requerimientos clásica.',
      keyPoints: [
        'Responde a quién, qué y para qué: "Como <rol>, quiero <objetivo/acción> para <razón de valor>".',
        'Es un artefacto de metodologías ágiles (no pertenece formalmente al canon UP ni sustituye por sí solo el análisis completo).',
        'Debe cumplir INVEST: Independiente, Negociable, Valiosa, Estimable, Atómica (pequeña) y Testeable, pudiendo incluir criterios de aceptación y mockups.'
      ],
      followUp: 'Redactá en el momento una Historia de Usuario válida para un alumno de Análisis de Sistemas y verificá si cumple INVEST.'
    },

    // ===================== UNIDAD 6 (7 preguntas) =====================
    {
      id: 'u6-i01',
      unit: 6,
      type: 'comprension',
      question: '¿Por qué con la irrupción de la IA el cuello de botella se trasladó hacia la especificación y por qué el "vibe-coding" fracasa a escala?',
      whyItMatters: 'Fundamenta la razón de ser completa de la Unidad 6.',
      keyPoints: [
        'Al automatizarse la generación de código, escribir líneas deja de ser el límite; el cuello de botella pasa a definir con precisión QUÉ construir.',
        'La IA no es determinista: ante una misma orden puede producir resultados distintos.',
        'El vibe-coding carece de registro de cambios y trazabilidad; si hay ambigüedad, la IA rellena huecos con supuestos erróneos y costosos.',
        'Si la especificación es deficiente, la automatización también lo será.'
      ],
      followUp: '¿Qué tres propiedades obligatorias debe tener una SPEC en SDD para superar al vibe-coding?'
    },
    {
      id: 'u6-i02',
      unit: 6,
      type: 'contraste',
      question: 'Distinguí una SPEC frente a un Prompt, un PRD y un Documento de Diseño. ¿Cuál actúa como verdadera "fuente de verdad" y por qué?',
      whyItMatters: 'Evita confundir formatos cotidianos de trabajo con una especificación SDD.',
      keyPoints: [
        'SPEC: escrita para agentes de IA (ej. en .md), vigente con la funcionalidad, fuente de verdad donde el código es consecuencia de ella (Estructurada, Verificable, Evolutiva).',
        'Prompt: dura solo una interacción de segundos; luego el agente lo olvida, pierde vigencia y no es fuente de verdad.',
        'PRD: similar a un caso de uso para stakeholders en una release; define el qué pero es parcialmente fuente de verdad porque no evoluciona sincronizado.',
        'Documento de Diseño: detalla implementación (el cómo), perdiendo trazabilidad pura de requerimientos.'
      ],
      followUp: '¿Por qué escribir la SPEC en Markdown facilita el trabajo con agentes de IA?'
    },
    {
      id: 'u6-i03',
      unit: 6,
      type: 'contraste',
      question: 'Compará los tres enfoques de SDD (Spec-First, Spec-Anchored y Spec-as-Source) respecto a qué artefacto evoluciona y qué pasa ante cambios de requisitos.',
      whyItMatters: 'Define estrategias reales de trabajo con repositorios asistidos por IA.',
      keyPoints: [
        'Spec-First: defines spec -> generas código -> descartas la spec. Solo evoluciona el código; sin trazabilidad continua ante cambios.',
        'Spec-Anchored: la spec siempre existe y evoluciona en paralelo junto al código (especifico e implemento sincronizados).',
        'Spec-as-Source: solo evoluciona la spec (fuente absoluta). Si cambia un requisito, se descarta el código afectado y se vuelve a generar; útil como instancia inicial.'
      ],
      followUp: '¿En qué escenario elegirías Spec-Anchored sobre Spec-as-Source en un proyecto en producción?'
    },
    {
      id: 'u6-i04',
      unit: 6,
      type: 'comprension',
      question: 'Explicá el workflow de tres fases en SDD y por qué son indispensables las compuertas "Human-in-the-loop" junto al checklist DoR.',
      whyItMatters: 'Muestra que SDD no es "apretar un botón mágico" sino un proceso con V&V humana.',
      keyPoints: [
        'Fase 1: Dar estructura al trabajo (plan tipo brainstorm desde la idea).',
        'Fase 2: Escritura de la spec (requerimientos, diseño y tareas).',
        'Fase 3: Construcción y verificación (implementación y evaluación).',
        'Entre requerimientos, diseño y tareas hay compuertas Human-in-the-loop (validación de stakeholders) y un DoR (Definition of Ready) que frena errores antes de automatizar, aplicando el principio de bajo costo temprano.'
      ],
      followUp: '¿Qué ejemplo concreto de ítem de DoR menciona el apunte?'
    },
    {
      id: 'u6-i05',
      unit: 6,
      type: 'comprension',
      question: '¿En qué consiste el "Smart Kid Principle" y cómo se complementa con EARS, casos de borde, Gherkin e IDs únicos?',
      whyItMatters: 'Da las reglas concretas para redactar una buena SPEC en la práctica.',
      keyPoints: [
        'Smart Kid Principle: alguien sin contexto previo debe leer la SPEC y construir exactamente lo esperado; explica qué hacer, qué NO hacer (fuera de alcance), evita redundancias e incluye ejemplos.',
        'EARS: estructura el texto para reducir ambigüedades del lenguaje natural.',
        'Casos de borde: evitar redactar solo el happy path para no dejar que la IA invente supuestos.',
        'Gherkin (Dado-Cuando-Entonces) e IDs únicos por work item aseguran criterios de aceptación verificables y trazabilidad entre requisitos y pruebas.'
      ],
      followUp: '¿Cuál es el peligro opuesto si exagerás detallando cómo escribir cada línea dentro de la SPEC?'
    },
    {
      id: 'u6-i06',
      unit: 6,
      type: 'caso',
      question: 'Le pedís a un agente de IA: "Haceme un login seguro y rápido para mi app". El agente crea algo distinto cada vez y olvida bloquear tras intentos fallidos. Diagnosticá el problema usando los conceptos de U6 y reescribí qué elementos debería tener una SPEC correcta.',
      whyItMatters: 'Pone a prueba la transición de un prompt ambiguo a una especificación SDD verificable.',
      keyPoints: [
        'El pedido inicial es un prompt efímero/vibe-coding lleno de ambigüedad ("seguro", "rápido" sin métrica) frente a una IA no determinista.',
        'Para corregirlo falta: ID único del work item, alcance y fuera de alcance explícitos (Smart Kid), reglas en formato EARS sin ambigüedad.',
        'Falta cubrir casos de borde (contraseña inválida, bloqueo tras N intentos, cuenta inexistente), RNF cuantificados y criterios Gherkin (Dado-Cuando-Entonces) verificables en DoR.'
      ],
      followUp: '¿Cómo verificarías con una puerta Human-in-the-loop esa SPEC antes de generar una sola línea de código?'
    },
    {
      id: 'u6-i07',
      unit: 6,
      type: 'comprension',
      question: '¿Por qué el apunte concluye que "SDD aporta valor al saber definir correctamente el QUÉ para obtener un CÓMO automatizado y correcto"?',
      whyItMatters: 'Sintetiza la tesis central de la Unidad 6 en relación con toda la asignatura.',
      keyPoints: [
        'La calidad del código automatizado por IA es directamente proporcional a la calidad de la especificación del qué.',
        'Ordena el proceso (calidad de proceso y producto), dando control y noción de qué está bien o mal.',
        'Evita perder sincronización y reduce errores tardíos costosos mediante especificación estructurada, verificable y evolutiva.'
      ],
      followUp: '¿Cómo responderías a alguien que dice que analizar sistemas ya no sirve en la era de la IA?'
    },

    // ===================== INTEGRADORAS U1 -> U6 (8 preguntas) =====================
    {
      id: 'int-i01',
      unit: 'integradora',
      type: 'integracion',
      question: 'Trazá el hilo conductor "Separar el QUÉ del CÓMO" a través de las Unidades 1, 2, 3, 5 y 6.',
      whyItMatters: 'Es la idea vertebral de toda la materia Análisis y Diseño de Sistemas A.',
      keyPoints: [
        'U1: Problem Space (qué, para quién, por qué) vs. Solution Space (cómo, diseño y construcción); requisitos como caja negra para evitar soluciones prematuras y ganar mantenibilidad.',
        'U2: Análisis (qué) vs. Diseño (cómo); en Doble Diamante, Descubrir+Definir exploran el problema antes de Desarrollar+Entregar.',
        'U3: El SRS y los requerimientos de usuario/sistema definen QUÉ debe implementarse tras explorar el Universo de Discurso.',
        'U5: Casos de Uso caja negra, DSS y Modelo de Dominio (clases conceptuales, no de código).',
        'U6: La SPEC define rigurosamente el QUÉ (evitando el Documento de Diseño del cómo) para obtener un CÓMO automatizado con IA.'
      ],
      followUp: '¿En cuál de estos puntos creés que es más fácil caer en la tentación de mezclar el cómo dentro del análisis?'
    },
    {
      id: 'int-i02',
      unit: 'integradora',
      type: 'integracion',
      question: 'Conectá el concepto de Entropía e Información (U1) con el Modelado (U4), la Ingeniería de Requerimientos (U3) y SDD (U6).',
      whyItMatters: 'Demuestra comprensión profunda de por qué documentar y especificar no es burocracia sino reducción de incertidumbre.',
      keyPoints: [
        'U1: La entropía es desorden e incertidumbre; la información estructurada cambia el estado de conocimiento y la reduce.',
        'U3: La elicitación, análisis y V&V convierten pedidos vagos, erróneos o contradictorios en un SRS claro reduciendo incertidumbre.',
        'U4: Los modelos y prototipos abstraen lo relevante, eliminan supuestos y alinean a los stakeholders.',
        'U6: Ante una IA no determinista, una SPEC estructurada y EARS reduce la entropía impidiendo que el agente adivine mal.'
      ],
      followUp: '¿Qué le pasa a la entropía de un proyecto cuando un equipo hace vibe-coding bajo el enfoque Spec-First descartando la spec?'
    },
    {
      id: 'int-i03',
      unit: 'integradora',
      type: 'integracion',
      question: 'Unificá el principio económico de la curva del costo del error (U3) con el ciclo de Prototipos/MVP (U4), el Proceso Unificado dirigido por el riesgo (U5) y el DoR de SDD (U6).',
      whyItMatters: 'Une cuatro mecanismos distintos de cuatro unidades bajo un mismo objetivo económico.',
      keyPoints: [
        'U3 demuestra que los errores de requisitos propagados multiplican exponencialmente su costo (1x -> 10x -> 15-40x -> operación).',
        'U4 usa prototipos baratos y MVPs rápidos para fallar y aprender temprano antes de construir todo el producto.',
        'U5 en UP ataca primero los requerimientos de mayor riesgo en Elaboración para confirmar viabilidad antes de Construcción.',
        'U6 aplica el "principio de bajo costo temprano" mediante checklists DoR y puertas Human-in-the-loop antes de generar código.'
      ],
      followUp: 'Si tuvieras presupuesto muy ajustado, ¿qué combinación de prácticas de U3–U6 aplicarías desde la semana 1?'
    },
    {
      id: 'int-i04',
      unit: 'integradora',
      type: 'integracion',
      question: 'Seguí el concepto de "Retroalimentación" desde la TGS (U1) hasta el Ciclo Lean (U2), el MVP (U4) y el Proceso Unificado (U5).',
      whyItMatters: 'Muestra cómo la cibernética básica de sistemas gobierna todas las metodologías ágiles e iterativas.',
      keyPoints: [
        'U1: Todo sistema abierto usa retroalimentación (ajustar entradas según salidas) para lograr homeostasis y adaptarse.',
        'U2: Agilismo y Lean priorizan entregar valor temprano para obtener feedback rápido y evaluar respuesta del usuario.',
        'U4: El MVP institucionaliza la retroalimentación del mercado mediante Construir-Medir-Aprender y Continuous Discovery.',
        'U5: UP opera bajo el ciclo Construir-Retroalimentar-Adaptar entregando incrementos funcionales en cada iteración.'
      ],
      followUp: '¿Por qué un modelo en Cascada puro sufre por la ausencia de retroalimentación temprana?'
    },
    {
      id: 'int-i05',
      unit: 'integradora',
      type: 'integracion',
      question: 'Contrastá el rol de la Arquitectura en 3P+A (U2), los Drivers de Arquitectura (U3), los Modelos de Control (U4) y la Fase de Elaboración de UP (U5).',
      whyItMatters: 'Conecta un término central que aparece en casi todas las unidades con matices complementarios.',
      keyPoints: [
        'U2 (3P+A): Es el cimiento inherente que soporta componentes y define el resto del proyecto; si es débil, el producto colapsa al cambiar.',
        'U3: Los Drivers de arquitectura son RNF transversales (visibles o no) dictados por objetivos de negocio y restringidos por el dominio (evitando Ley de Conway).',
        'U4: Los modelos permiten visualizar y controlar la arquitectura (servicios, librerías, escalabilidad, refactorización).',
        'U5: UP es "centrado en la arquitectura" y la construye/valida tempranamente durante la fase de Elaboración.'
      ],
      followUp: '¿Por qué los drivers de arquitectura nacen del negocio y no simplemente de gustos técnicos del programador?'
    },
    {
      id: 'int-i06',
      unit: 'integradora',
      type: 'caso',
      question: 'Te contratan como analista para un sistema hospitalario complejo con alta regulación legal, múltiples roles y donde el cliente quiere usar IA para programar más rápido. Diseñá un plan de abordaje usando herramientas de U1 a U6.',
      whyItMatters: 'Simula un caso integrador completo de examen final.',
      keyPoints: [
        'U1: Enfoque sistémico y análisis multicausal del hospital (suprasistema, subsistemas, separar QUÉ de CÓMO).',
        'U2: Elegir proceso estructurado/iterativo sólido por criticidad (3P+A, CMMI PP para estimar/planificar/comprometer, calidad de proceso y testing).',
        'U3: Elicitar en el Universo de Discurso (entrevistas, Empathy Map), identificar RF y RNF críticos (Externos legales, Fiabilidad/Seguridad como drivers) y V&V.',
        'U4-U5: Prototipos para validar flujos complejos, Modelo de Dominio, Casos de Uso caja negra, DSS y UP dirigido por riesgo (arquitectura en Elaboración).',
        'U6: Traducir a SPECs (Spec-Anchored) con Smart Kid, EARS, casos de borde, DoR y puertas Human-in-the-loop obligatorias antes de generar código con IA.'
      ],
      followUp: '¿Qué pasaría si en ese hospital aplicaras un enfoque puramente Lean sin usuarios disponibles o vibe-coding sin DoR?'
    },
    {
      id: 'int-i07',
      unit: 'integradora',
      type: 'contraste',
      question: 'Compará las metodologías de calidad y verificación vistas en la materia: CMMI PP/REQM (U2-U3), V&V de requisitos (U3), Testing de Producto (U2) y DoR + Human-in-the-loop (U6).',
      whyItMatters: 'Ordena cómo se aseguran tanto la calidad del proceso como la del producto en distintos momentos.',
      keyPoints: [
        'CMMI PP (ML2) y REQM/RD (ML3) aseguran calidad del proceso: estimaciones, planes, trazabilidad bidireccional y manejo de cambios.',
        'V&V de requisitos aseguran que el documento SRS esté bien construido (verificación) y refleje lo que el usuario quiere (validación).',
        'Calidad de producto exige verificación y testing exhaustivo sobre el software construido (un buen proceso no basta).',
        'En SDD (U6), el DoR y las compuertas Human-in-the-loop trasladan V&V antes de cada generación de IA para sostener calidad de proceso y producto.'
      ],
      followUp: '¿En qué se parece una compuerta Human-in-the-loop con DoR a la Validación y Verificación clásica de la Unidad 3?'
    },
    {
      id: 'int-i08',
      unit: 'integradora',
      type: 'integracion',
      question: '¿Cómo evoluciona la forma de representar los requisitos de usuario desde el apunte clásico hasta la era ágil y SDD: Caso de Uso (U5), Historia de Usuario (U5), PRD (U6) y SPEC (U6)?',
      whyItMatters: 'Evita confundir los cuatro artefactos y clarifica cuándo usar cada uno.',
      keyPoints: [
        'Caso de Uso (UP): contrato textual caja negra con actores, pre/postcondiciones, flujo principal y extensiones; acompañado por DSS y especificación complementaria.',
        'Historia de Usuario (Ágil no UP): descripción liviana centrada en rol/acción/valor ("Como... quiero... para...") bajo criterios INVEST.',
        'PRD (Producto): define el qué para stakeholders en una release; sirve parcialmente pero no evoluciona sincronizado con el código.',
        'SPEC (SDD): escrita para agentes de IA (ej. Markdown) con Smart Kid, EARS, Gherkin e IDs únicos; actúa como fuente de verdad evolutiva.'
      ],
      followUp: '¿Por qué un PRD tradicional no puede reemplazar a una SPEC en un flujo Spec-Anchored?'
    }
  ];
})(window);
