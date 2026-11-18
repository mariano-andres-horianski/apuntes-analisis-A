# Análisis y Diseño de Sistemas A

## Unidad 1: Sistemas

### Concepto de Sistema

Un sistema es un conjunto de elementos interdependientes (actores, procesos, recursos) que interactúan regularmente para lograr un objetivo común.

Todo sistema tiene un proceso de conversión. El sistema recibe entradas de su entorno, y a través de subsistemas y elementos, aplica un proceso de conversión (transformación) para generar salidas útiles.

### TGS (Teoría General de Sistemas)

La Teoría General de Sistemas (TGS) se fundamenta en tres premisas:

- Los sistemas existen dentro de otros sistemas mayores.
- Son sistemas abiertos que interactúan con su entorno.
- Las funciones dependen de su estructura.

Los principios generales para los sistemas automatizados son:

1. Entre más especializado sea el sistema, menos capaz es de adaptarse a los cambios.
2. Cuanto mayor sea el sistema, mayor es el número de sus recursos para su mantenimiento.
3. Los sistemas siempre forman parte de un sistema mayor, y siempre se dividen en subsistemas.
4. Los sistemas crecen.

#### Elementos y Propiedades Clave

- **Estructura básica**: Se compone de entradas (recursos o datos), un proceso de conversión que agrega valor, salidas, límites (fronteras) y el ambiente o contexto (suprasistemas y subsistemas).
- **Retroalimentación**: Mecanismo de control que ajusta las entradas basándose en las salidas.
- **Homeostasis**: Tendencia del sistema a adaptarse a los cambios y mantener un equilibrio interno.
- **Entropía e Información**: La entropía es el desgaste o aumento del desorden y la incertidumbre en un sistema. Incorporar información estructurada reduce esta entropía.
- **Equifinalidad y Teleología**: Capacidad de alcanzar un mismo objetivo final a través de diferentes alternativas, siempre guiados por un propósito.
- **Totalismo**: El todo es superior a la simple suma de sus partes debido a la interdependencia de sus subsistemas.

#### Clasificación

Los sistemas pueden categorizarse por su constitución (físicos tangibles o abstractos/conceptuales), su relación con el entorno (abiertos o cerrados), su origen (naturales o artificiales), sus variables (discretos o continuos) y la previsibilidad de sus resultados (determinísticos o probabilísticos).

### Sistemas de Información

Utilizan hardware, software y personas para procesar transacciones y apoyar la toma de decisiones. Operan sobre **datos** (representaciones simbólicas y aisladas de hechos) que, al ser procesados, se transforman en **información**. Para ser útil, la información debe poseer significado semántico, importancia para el negocio, vigencia temporal, validez exacta y valor relativo frente a su costo de obtención.

### Enfoque sistémico

El enfoque de sistemas es una perspectiva que considera cualquier objeto de estudio (una empresa, software, comunidad, etc.) como un sistema compuesto de partes interrelacionadas que interactúan con su entorno y persiguen objetivos. No se enfocan en las partes de manera aislada, porque las partes interactúan entre sí generando propiedades que no existen si se las separa. Es la aplicación práctica de la TGS.

1. Formulación del problema -> Análisis
2. Identificación y diseño de soluciones -> Diseño
3. Controlar resultados -> Operaciones

#### Enfoque Moderno

##### Product Management

- **Product Discovery**: qué hay que construir. Se analiza lo que se debe construir. Relacionado al AGILISMO. Se debe entender el problema del usuario -> Análisis.
- **Product Delivery**: construir y entregar -> Diseño, Implementación, etc.

##### Problem vs Solution Space

- **Espacio del problema**: el *qué*. ¿Qué es lo que queremos construir, qué hay que resolver, para quién y por qué? Ámbito del dominio, usuario y del negocio. Compuesto por las necesidades no satisfechas, los puntos de dolor, los objetivos y las restricciones del contexto. Análisis -> Los requisitos definen el problema a ser resuelto, no describen el software que lo resuelva. Se debe hacer un análisis técnico para evaluar restricciones, capacidades y alcance.
- **Espacio de solución**: el *cómo*. Ámbito del diseño, arquitectura y construcción de software. La construcción y el producto es parte de la solución.

El **Product-Market Fit** es el puente o grado de alineación en el cual la solución diseñada en la punta satisface las necesidades reales del mercado definidas en la base.

Es necesario separar el *qué* (Caja negra) del *cómo* para evitar suposiciones ni soluciones prematuras: se debe indagar el problema; prevenir construir el producto equivocado (no hacer research y concentrarse en la entrega lleva al fracaso, pues no se conoce al usuario); y asegurar mantenibilidad (si los requisitos no incluyen detalles de diseño o implementación, la documentación usada no se verá afectada por cambios de lenguaje, formato o plataforma).

Un problema siempre es multicausal: entender que hay múltiples sistemas interactuando significa que ese problema va a estar afectado o va a afectar a elementos del contexto. Por esto necesitamos el enfoque sistémico y el análisis multicausal, que es entender el problema para LUEGO pensar soluciones.

La información es un conjunto organizado de datos procesados, que se transforma en conocimiento para el recipiente. Cualquier señal que cambie un estado del sistema es un fragmento de información. Y reduce entropía e incertidumbre, cambiando el estado de conocimiento del sistema.

`Datos + Procesamiento = Información`

Tiene como características:

- **Significado**: contenido semántico o conceptual que el usuario le da a la información en un contexto o dominio específico. Convierte el dato en conocimiento útil.
- **Importancia**: relevancia o utilidad que tiene la información para el usuario. Determina el grado en que influye en el comportamiento, resuelve un problema o apoya la toma de decisiones del negocio.
- **Vigencia**: tiempo en que la información tiene sentido o es útil. Oportunidad y antigüedad temporal de la información. Indica si la información está actualizada y disponible en el momento que se necesita o está obsoleta.
- **Validez**: debe ser representativa de lo que realmente pasa, ser "exacta". Medida del grado en que la información representa realmente lo que pretende representar.
- **Valor**: qué aporta al usuario, lo que percibe el usuario (es subjetivo). Utilidad relativa que tiene la información comparada al costo de obtenerla. Cómo llega, eficiencia, frecuencia de transmisión, velocidad e impacto.

---

## Unidad 2: Desarrollo de Sistemas de Información

### Ingeniería de Software

La Ingeniería de Software aplica un enfoque sistemático, disciplinado y cuantificable para desarrollar software de alta calidad, apoyándose en procesos, métodos y herramientas. Su ejecución se estructura mediante el modelo 3P+A, el cual integra el Proyecto (planificación y control), el Proceso (marco de trabajo), el Producto (objetivos y alcance) y la Arquitectura (estructura y división del trabajo).

- **Análisis vs. Diseño**: El análisis se centra estrictamente en el *qué* (modelado de requerimientos, funciones y necesidades del dominio), mientras que el diseño define el *cómo* (arquitectura técnica, estructuras de datos y componentes). El análisis de sistemas define *qué* se debe hacer mediante la abstracción de las necesidades del usuario para convertirlas en requerimientos, separando estrictamente el espacio del problema (*Product Discovery*) del espacio de la solución o diseño (*Product Delivery*).
- **Ciclos de Vida**: El modelo tradicional en Cascada avanza de forma estrictamente secuencial, mientras que el desarrollo moderno gestiona el ciclo iterativamente separando el descubrimiento del problema (*Product Discovery*) de su construcción (*Delivery*), validando hipótesis rápidamente.
- **Agilismo**: El Manifiesto Ágil prioriza las interacciones humanas, el software funcionando, la colaboración con el cliente y la adaptación al cambio por sobre la planificación rígida y la documentación extensiva. Se apoya en marcos como Design Thinking, Scrum y XP para entregar valor continuo y obtener retroalimentación temprana.
- **Gestión y Calidad**: Requiere administrar recursos, calendarios y riesgos ante la incertidumbre. El éxito depende tanto de la calidad del proceso (evaluada con estándares como CMMI) como de la calidad del producto final (validada mediante pruebas exhaustivas).

### Modelo 3P+A

Proyecto, Proceso, Producto y Arquitectura:

- **Proyecto**: se planea y controla para manejar la complejidad, evitando el fracaso mediante planificación, monitoreo y control.
- **Proceso**: proporciona el marco conceptual desde el cual puede establecerse un plan completo para el desarrollo de software. Está compuesto de actividades, tareas o hitos.
- **Producto**: formado por objetivos y su ámbito, considerando soluciones alternativas e identificando límites/restricciones. Es lo que permite estimar costos, riesgos, las tareas y el plan.
- **Arquitectura**: es el diseño base y es inherente a todo proyecto, la estructura que soporta los componentes del software y cómo interactúan entre sí. Si la arquitectura es débil, el producto colapsa frente a un cambio. Define cómo va a ser el proyecto, el producto y el proceso (teniendo en cuenta el tiempo, gasto, presupuesto, elecciones, metodologías).

El software se desarrolla en un ambiente con recursos y limitantes como el tiempo y la gente. Se necesita saber y volver el proyecto viable. Se debe definir el proceso de desarrollo, indicando bien qué debe hacer cada persona o cosa, para no desperdiciar recursos. El producto debe estar bien definido, su alcance y sus problemas.

### Ciclo de Vida del Software

> *[Diagrama de referencia del apunte: Ciclo de 7 etapas en círculo — The Box: 1. Identificación de problemas, oportunidades y objetivos -> 2. Determinación de requerimientos humanos de información -> 3. Análisis de las necesidades del sistema -> 4. Diseño del sistema recomendado -> 5. Desarrollo y documentación del software -> 6. Prueba y mantenimiento del sistema -> 7. Implementación y evaluación del sistema -> vuelve al 1]*

#### The Box

1. Se identifican los problemas, las oportunidades y objetivos.
2. Se determinan los requerimientos de usuarios/humanos respecto al problema. Para esto se releva o elicita.
3. A partir de los requerimientos de usuarios, construimos las necesidades del sistema. Esto da como resultado las especificaciones y requerimientos del sistema, que es donde realmente se agrega valor, analizando si las necesidades del usuario realmente agregan valor o dan información útil, valiosa, válida y con sentido respecto al sistema (**Problem Space**).
4. Se diseña el sistema recomendado.
5. Con los requerimientos se desarrolla y arma la documentación del software.
6. Se hace la prueba y mantenimiento del sistema.
7. Se implementa el sistema y se evalúa.
8. Vuelve al paso 1 del ciclo. Cambian las necesidades del usuario. El sistema cambia y evoluciona.

**Cascada**: Requerimientos -> Análisis -> Diseño -> Código -> Pruebas.

Si se quiere un ciclo de vida largo, es clave el diseño, mientras que en uno corto se permite la flexibilidad.

En la realidad, el ciclo no es directamente secuencial: muchas etapas del ciclo podrían hacerse en paralelo. Por ejemplo, relevo un requerimiento, lo diseño y ya lo implemento.

### Ciclo de Vida del Producto

Se usa la metodología Lean y el enfoque moderno de Product Management. En esta metodología se le da importancia a la investigación del problema, ya que parte de que el usuario no está para elicitar, por lo que se asumen necesidades y requerimientos de sistema, se produce, se lanza y se evalúa la respuesta del usuario.

Viene de la metodología ágil: se entrega valor más rápido y se tiene una retroalimentación temprana.

1. **Business outcome**: plantear lo que se quiere obtener.
2. **Discover**: descubrir y plantear necesidades y, por lo tanto, requerimientos de sistema y alternativas de solución.
3. **Validate**: validar los requerimientos supuestos con un grupo reducido de usuarios o consigo mismo, es decir, se valida la idea del Discovery con MVPs.
4. **Build**: construir e implementar el requerimiento.
5. **Launch**: lanzar el feature masivamente.
6. **Evaluate**: evaluar la respuesta del usuario al feature. Ver la respuesta del mercado frente a esa idea ya implementada.
7. **Iterar**: volver a un nuevo business outcome.

El tiempo de Discovery está diseñado para que sea rápido, liviano y de bajo costo, mientras se concentra la mayor parte de los recursos en el Build.

Esta metodología tiene mucha incógnita, por lo que el producto final puede ser desatinado y costoso. Se debe saber si hay market fit. Una vez que el sistema madura, el crecimiento se estabiliza.

### Procesos de Desarrollo de Software

Los procesos de desarrollo de software nos indican cómo se ordena el trabajo del software. El proceso es el conjunto coordinado de tareas que arman una metodología de trabajo para entregar el proyecto.

#### Método Design Thinking

Es un método ágil creativo, donde hay dos fases (pensamiento creativo): divergente (ideas) y convergente (lo que se hace). Se centra en el usuario y en los datos del usuario. Esto quiere decir que partimos de suposiciones, que pueden fracasar; no hay una interacción con el usuario hasta el testeo, en el que se valida recién el supuesto o la hipótesis. Es un ciclo constante (*Continuous Discovery*).

Es un método donde todo, menos la implementación, son tareas dentro del *Product Discovery*, es decir, se basa en definir el *qué*; por lo tanto, no cubre todo el ciclo de vida. Es una serie de actividades con el objetivo de tener una construcción más rápida e innovadora.

El proceso sigue el flujo:

1. **Entendimiento**
   - **a. Empatizar**: se trata de "ponerse en el lugar" del usuario y preguntarse qué lo haría feliz o qué lo frustra. Se trata de investigar la conducta del usuario.
   - **b. Definir**: saber en dónde existe el problema del usuario (ubicarlo), identificar las necesidades insatisfechas del usuario y entender por qué existe el problema. Definimos el problema acá.
2. **Explorar**
   - **a. Idear**: se piensan ideas creativas o locas que puedan resolver el problema del usuario.
   - **b. Prototipar**: se crea un prototipo basado en las ideas, para entender qué componentes de las ideas funcionan y cuáles no. Se mide el impacto y viabilidad.
3. **Materializar**
   - **a. Testear**: se entrega el prototipo a los usuarios y se verifica que la idea de solución es válida.
   - **b. Implementar**: una vez validada la idea, se construye el software.

#### Agilidad Moderna

Se combinan varias metodologías: Design Thinking para el Discovery/análisis de requerimientos, Lean para construir las cosas correctas y Agile para construir correctamente.

**Metodología doble diamante** (doble pensamiento creativo): tiene cuatro etapas: descubrir, definir, desarrollar y entregar.

- *Descubrir* y *definir* nos llevan a obtener el problema, es decir, exploramos el universo del problema.
- *Desarrollar* y *entregar* nos llevan a obtener la solución, o la especificación de requerimientos.

##### Agilidad con IA

Mejora el tiempo de prototipado, lo que lleva a encontrar el error en el supuesto más rápido y medir qué tan grande es el error para mejorarlo y volver a evaluar el supuesto. Esto llevará a un mejor modelo y de forma más rápida. Se prueba, se mide y se mejora.

Se necesita igual de contexto: el research no desaparece ni el análisis de requerimientos.

### Proyecto de Desarrollo de Software

El proyecto no es determinista porque se enfrenta a la variabilidad continua en relación con las tareas, las estimaciones de tiempo, costo y personal. Las necesidades del cliente evolucionan a medida que conocen el sistema, la tecnología cambia y pueden surgir imprevistos técnicos. Aunque el tiempo dejó de ser un problema y se necesita menos gente con la IA, las tareas repetitivas de codificación se aceleran y se reduce la cantidad de programadores para enfocarse en el análisis. Cada proyecto gestiona sus propias variables y las lecciones aprendidas de la experiencia para ajustar modelos de estimación, aunque no son perfectos.

El producto es intangible o abstracto: es el resultado de conocimiento. Sus fallas se deben a errores de diseño, lógica o especificación. Evaluar el progreso se hace mediante entregables e hitos intermedios.

No hay un único estándar o metodología universal aplicable a todo. Proyectos con requisitos críticos o de mucha seguridad usarán modelos más estructurados, mientras que los proyectos con incertidumbre usarán modelos ágiles o iterativos.

Los proyectos de largo plazo o grandes son únicos e irrepetibles y se deben tener principios y estándares de calidad para que el software funcione de forma confiable y se estandaricen las buenas prácticas.

Las **3 áreas de gestión de proyectos** son la planificación, la calendarización y los riesgos:

- **Planificación de los recursos**: el personal es el recurso más valioso y crítico en software. Se estima el costo y el presupuesto del proyecto, equilibrando el valor entregado contra el costo de producción. Se divide el problema en unidades como módulos, casos de uso o historias de usuario para estimar la dimensión del software.
- **Calendario**: ver cómo se desarrollará el software y delimitar tiempos: se divide el proceso en actividades específicas, se define qué tarea debe terminar para empezar otra y se asignan responsabilidades en el tiempo.
- **Riesgos**: se deben conocer los riesgos de negocio, los riesgos técnicos y el presupuesto.

### CMMI

Es un modelo de desarrollo de software que dice qué habría que hacer, es decir, define buenas prácticas en la ingeniería de software. Garantiza la calidad de proceso.

La CMMI define cada área de proceso en términos de metas específicas y de prácticas específicas requeridas para lograr esas metas. Las metas establecen características que deben existir si las actividades tienen que ser efectivas, y las prácticas son las actividades relacionadas con el proceso para obtener la meta. Nos da un marco sobre cómo arrancar un proyecto.

**CMMI, Planificación de Proyectos (PP, ML2)**: tres objetivos específicos:

- **SG1**: establecer estimaciones (alcance, atributos, ciclo de vida, esfuerzo y costo).
- **SG2**: desarrollar el plan (presupuesto y cronograma, riesgos, datos, recursos, conocimientos, involucrados).
- **SG3**: obtener compromiso con el plan (se negocia y acuerda con los clientes y el equipo y se revisan los planes).

### Calidad de Producto y de Proceso

Hay una relación entre la calidad del proceso y la calidad del producto: un proceso deficiente nos dará ciertamente un producto de la misma calidad, aunque no siempre un buen proceso significa que el producto sea bueno.

- **Calidad del proceso**: se basa en en qué condiciones se consiguió el producto (tareas, orden de las tareas, validaciones). CMMI, ISO.
- **Calidad del producto**: se basa en la verificación, el testing.

El desarrollo de software debe enfocarse en las necesidades de los participantes, en las habilidades de los ingenieros y en la calidad del producto final.

---

## Unidad 3: Ingeniería de Requerimientos

### Ingeniería de Requerimientos (IR)

El éxito de un proyecto depende de resolver el problema correcto, encontrando el conjunto de soluciones correcto al problema en el **universo de discurso** (todo el contexto en el que el software se desarrolla e incluye fuentes de información y gente relacionada).

Se necesita empaparse del universo de discurso, entender las demandas, necesidades y problemas en él y luego definir los requisitos específicos para el sistema. Se apunta a mejorar la forma en que se comprenden y definen los servicios que deben prestar los sistemas.

La IR sistematiza el proceso de definición de requisitos e involucra:

- **Descubrir**: identificar los requerimientos y necesidades del usuario.
- **Modelar**: definir las necesidades en un lenguaje en común.
- **Analizar**: transformar los requerimientos del usuario en requerimientos del sistema.
- **Mantener**: al ser dinámico el ciclo de vida, los requerimientos del usuario pueden evolucionar, lo que ocasionaría que los requerimientos del sistema también cambien.

Sin una buena gestión y documentación de requerimientos, el mantenimiento sería costoso y difícil. También permite visualizar si se está resolviendo el problema correcto. Además, se encarga de analizar las necesidades, evaluar la factibilidad, negociar una solución razonable, especificar la solución sin ambigüedad, validar la especificación y administrar los requerimientos a medida que se transforman en un sistema funcional.

### Proceso IR

> *[Diagrama de referencia del apunte: Proceso IR compuesto por cuatro actividades principales: Elicitar, Modelar, Analizar y Gestionar (transversal durante todo el ciclo)]*

En un modelo en cascada es difícil determinar cuándo terminó el proceso de definición de requisitos y puede comenzar el diseño, mientras que en modelos iterativos e incrementales siempre se pueden mejorar los requisitos en los ciclos de iteración.

El proceso involucra a usuarios (*user persona*), clientes (*buyer persona* o decisor), ingenieros, consultores, desarrolladores, stakeholders, entre otros, siendo así un esfuerzo colaborativo e interdisciplinario. Asegura la calidad, la gestión, la evolución y la completitud de los requisitos, considerando aspectos extra-técnicos.

Según el CMMI, en el nivel 3 los procesos deben estar bien descriptos y caracterizados (métodos, procedimientos y herramientas) y es donde se desarrollan los requisitos.

1. **Elicitar**: es relevar o descubrir requerimientos del usuario, está asociado al research. Es una fase de adquisición de conocimiento: se identifican y priorizan fuentes de información, se seleccionan técnicas de elicitación y se recopila. Si los usuarios no están al alcance, se usan técnicas como Design Thinking donde a partir de suposiciones o hipótesis propias se va tratando de conocer las necesidades del usuario y con ello los requerimientos del sistema. Una correcta elicitación vuelve la especificación más eficiente.
2. **Modelar**: convierte la interacción con usuarios en un formato legible y común. Se representa, organiza y registra la información recopilada en la elicitación, donde se documenta de forma organizada, comprensible y significativa.
3. **Analizar**: se mejora, se aporta valor y se modelan los requerimientos en una especificación de software. Verifica y valida la información modelada y define requerimientos del sistema. Gestiona los problemas que se presentan con los requerimientos (requerimientos omitidos, contradictorios, no posibles, superpuestos, ambiguos, erróneos) mediante técnicas de verificación y validación. Puede involucrar la negociación o acordar requerimientos a causa de propuestas alternativas o conflictos dados por las fuentes de información, mediante intercambio de información, discusión, resolución de conflictos, acuerdo con clientes/usuarios y asignación de prioridades.
4. **Gestionar**: se identifican, analizan y realizan los cambios necesarios a causa de nuevos requerimientos o modificaciones a requerimientos existentes. Se encarga también de identificar requerimientos afectados por cambios y estimar el costo del cambio. Se deben actualizar los documentos y modelos de requerimientos y verificar y validar los nuevos requerimientos. La gestión está presente en todo el ciclo de vida.

Puntos clave del proceso: involucrar clientes/usuarios para comprender sus necesidades (validar) y asegurar calidad de requerimientos (V&V).

Flujo general: `Elicitación (entrevistas/cuestionarios) -> Análisis (Modelado [DSS o Modelo de dominio] o Prototipos) -> Especificación (SRS) -> Validación`.

### Elicitación

Fase principal del ciclo de desarrollo de software enfocada en recopilar y analizar los requerimientos y objetivos deseados para el sistema desde diferentes puntos de vista; es donde más interacción con el usuario hay. Se debe comprender el proceso, identificar datos e información generada, la frecuencia y volumen del proceso e identificar controles. Es decir, se debe investigar el dominio del problema.

Trata de tres partes: la identificación de las fuentes de información, la recolección de información (o hechos) y la comunicación. Los principales problemas residen en el uso de lenguajes y conocimientos diferentes, además de la habilidad del usuario para transmitir su conocimiento.

1. **Identificar fuentes de información**: las fuentes de información están en el universo de discurso. Una fuente imprescindible es el documento de objetivos y alcances del sistema o los demandantes del sistema. Las fuentes más confiables son los documentos y personas involucradas en el universo del discurso, siendo los usuarios las fuentes más significativas.
2. **Asignar prioridades a las fuentes de información**: se identifican los demandantes del software, los usuarios (gente impactada por la operación del software), personas relacionadas con el macrosistema, grupos de interés, sistemas relacionados, existencia de paquetes de software, documentos referidos por los clientes/usuarios y libros.

Técnicas varias en la elicitación: entrevistas generales, escenarios y casos de uso, prototipos, entrevistas dirigidas, observación, historias de usuario, cuestionarios, entre otras.

#### Técnicas de recolección de datos individuales

- **Entrevista**: es una conversación dirigida (previo hubo que hacer un análisis para saber a quién corresponde hacerle) de preguntas y respuestas para conocer opiniones y cultura de la organización. Su objetivo es registrar información fácilmente y descubrir información del entrevistado precisa y eficientemente.
  - **Abiertas**: permiten al entrevistado explayarse, para conocer su opinión o que explique un proceso (ej.: ¿qué opina del sistema actual?).
  - **Cerradas**: limitan al entrevistado a responder de forma acotada, pueden tener opciones finitas o preguntas con nombre o sí/no (ej.: ¿quién recibe el informe? ¿Qué sistema usan?).
  - **Bipolar** (tipo de cerrada): preguntas que solo se responden con sí/no, verdadero/falso, de acuerdo/en desacuerdo (ej.: ¿está completo el documento?).
  - **Averiguaciones o sondeos**: preguntas de "por qué" o de ejemplificación (ej.: ¿podría explicar esto? ¿Me daría un ejemplo?).
- **Estructuras de entrevista**:
  - **Pirámide**: empieza con preguntas cerradas y termina con preguntas abiertas.
  - **Embudo**: empieza con preguntas abiertas y termina con preguntas cerradas.
  - **Rombo o diamante**: empieza con preguntas cerradas, luego pasa a preguntas abiertas y termina nuevamente con preguntas cerradas.
  - **Sin estructura**.
- **Cuestionario**: técnica que permite estudiar creencias, actitudes, comportamientos y características principales.

**Empathy Map**: forma de crear estereotipos y clasificar a los usuarios usando 7 preguntas: con quién se empatiza, qué necesitan hacer (estas dos son el objetivo), qué ven, qué dicen, qué hacen, qué escuchan y qué piensan y sienten. Con estas respuestas se clasifican sus dolores y sus deseos.

### Requerimientos

- **Requerimientos del usuario**: declaraciones en lenguaje natural y diagramas de lo que espera el usuario que el sistema brinde y las restricciones del sistema.
- **Requerimientos del sistema**: definen con detalle las funciones, servicios y restricciones operativas del sistema. El documento de especificaciones del sistema debe ser preciso, definiendo exactamente QUÉ es lo que se va a implementar. Destinatarios: usuarios finales, clientes, arquitectos y desarrolladores.

#### Requerimientos Funcionales

Son declaraciones de los servicios que debe proporcionar el sistema, de cómo debe actuar según las entradas y en situaciones particulares. También pueden declarar lo que el sistema NO debe hacer. Describen lo que el sistema DEBE hacer con detalle de entradas, salidas y excepciones. Deben ser **completos** (todos los servicios solicitados bien definidos) y **consistentes** (sin definiciones contradictorias), aspectos difíciles de lograr en la práctica por razones humanas.

#### Requerimientos No Funcionales

Son restricciones de los servicios o funciones ofrecidas por el sistema, es decir, atributos de calidad. Incluyen restricciones de tiempo, del proceso de desarrollo y estándares. Se aplican al sistema en su totalidad y definen la arquitectura. Se refieren a propiedades emergentes como fiabilidad, tiempo de respuesta y capacidad de almacenamiento. Muchas veces son más críticos que los funcionales porque su incumplimiento puede volver inutilizable al sistema (ej.: un sistema de vuelo sin fiabilidad o un sistema de control en tiempo real que no cumple rendimiento).

Tres tipos principales:

- **Del producto**: especifican el comportamiento del producto (rendimiento/rapidez de ejecución, memoria, fiabilidad ante fallos, portabilidad, usabilidad).
- **Organizacionales**: derivan de políticas y procedimientos en la organización del cliente y del desarrollador (estándares de procesos, lenguajes de programación o método de diseño, entrega).
- **Externos**: derivan de factores externos al sistema (interoperabilidad, requisitos legislativos y éticos).

Los **drivers de arquitectura** son requerimientos no funcionales que impactan en todas las funcionalidades. Pueden ser visibles para los usuarios en ejecución (usabilidad, seguridad, performance, etc.) o no visibles (modificabilidad, portabilidad, reusabilidad). Se vinculan con los objetivos de negocio más que con cuestiones técnicas.

### Gestión de Requerimientos

- Planificar: ordenar el trabajo de elicitación y análisis.
- Verificar que el proceso se ejecuta como se espera.
- Analizar cómo impacta en el resto del sistema/requerimientos los cambios de un requerimiento (evolución de requerimientos).
- El orden de los requerimientos se da según el riesgo que conlleve cada uno.

### Análisis de Sistemas y Calidad (CMMI)

En CMMI la gestión de requerimientos (**REQM**) sigue 5 pasos:

1. Entender los requerimientos.
2. Negociar requerimientos y validarlos con los usuarios.
3. Gestionar los cambios de requerimientos.
4. Mantener trazabilidad bidireccional de los requerimientos.
5. Identificar inconsistencias entre el desarrollo y los requerimientos.

El desarrollo de requerimientos (**RD**) requiere desarrollar los requerimientos de cliente/usuario, desarrollar los requerimientos de producto/sistema e interfaces, y analizarlos y validarlos con los usuarios.

### Verificación y Validación

- **Validación**: se chequea que sea lo que el usuario quiere y se asegura la calidad del requerimiento.
- **Verificación**: se asegura que el requerimiento esté bien hecho, los criterios de aceptación, la completitud y el formato correcto del requerimiento.

**Regla clave**: *La verificación asegura que se construye correctamente; la validación asegura que se construye la cosa correcta.*

### Calidad de Requerimientos y Propagación de Errores

Los errores en los requisitos aumentan exponencialmente los costos de desarrollo y mantenimiento (desde corregir código o rediseñar un módulo hasta rehacer la solución o retirarla en operación afectando costos y reputación).

> *[Diagrama de referencia del apunte — Costos relativos de corrección de errores según etapa de detección: Requisitos (base) -> Diseño (3–6x) -> Codificación (10x) -> Pruebas de desarrollo (15–40x) -> Operación (muy superior)]*

Cuestiones clave sobre errores en requisitos:

- Cuanto más tarde en el ciclo de vida se detecta un error, más costoso es repararlo.
- Muchos errores se detectan mucho después de la etapa donde se cometieron.
- Clasificación de errores: hechos incorrectos (necesidades mal identificadas), omisiones, inconsistencias, ambigüedades y otros (requisitos mal ubicados).
- Detección mediante técnicas ad hoc, inspecciones, pruebas (unitarias, integración) y validación respecto al usuario.

**Demandas de cliente**:

1. **Correctas**: lo que el usuario pide es lo que necesita (ideal).
2. **Erróneas**: el usuario pide algo que no es su necesidad real o del dominio (ej.: pide caja de texto para fecha cuando necesita un calendario).
3. **Inconsistentes**: pide A y pide B, pero A y B se contradicen.
4. **Omitidas**: el usuario no menciona algo que necesita.

> *[Diagrama de referencia del apunte — Propagación de errores: Demandas erróneas, inconsistentes y omitidas provenientes del problema real se propagan desde la elicitación/modelado hacia las especificaciones y finalmente al producto con defectos si no se validan y verifican a tiempo]*

### Priorización de Requerimientos

*"Cuando todo es importante, nada es importante."*

Se ordenan según riesgo (complejidad técnica, incertidumbre o facilidad), grado de cobertura y naturaleza crítica (alto valor para el negocio). Suelen tratarse los requerimientos más riesgosos primero para validar viabilidad o detectar cambios necesarios temprano, considerando probabilidad e impacto (costo, tiempo, esfuerzo). En UP y desarrollo iterativo la planificación se adapta con la retroalimentación de cada iteración.

Técnicas de priorización:

- **MoSCoW**: Must have, Should have, Could have, Won't have.
- **Votación por puntos** y **ponderación de importancia** por involucrados.
- **RICE score**: Reach (alcance/gente involucrada), Impact (utilidad al usuario), Confidence (certeza de estimaciones) y Effort (esfuerzo para construirlo).
- **WSJF** (*Weighted Shortest Job First*): técnica ágil que maximiza el retorno priorizando trabajos cortos de alto valor.
- **Theme Scoring**: agrupa requerimientos en temas del negocio y los califica según metas organizacionales.
- **Matriz de Eisenhower**: clasifica tareas/decisiones por urgencia e importancia (hacer de inmediato, programar, delegar o descartar).
- **Matriz de Impacto vs. Esfuerzo**:
  - Alto impacto + Bajo esfuerzo = **Ganancias rápidas**
  - Alto impacto + Alto esfuerzo = **Grandes proyectos**
  - Bajo impacto + Bajo esfuerzo = **Actividades menores**
  - Bajo impacto + Alto esfuerzo = **Tareas ingratas** (descartar o posponer)

### Dominio y SRS

- **Dominio**: describe un subsistema de la realidad. Se identifican actores/entidades, atributos, relaciones, reglas y procesos.
- **Modelo de Negocio**: describe las bases de cómo una organización entrega valor.
- **Estructura Organizacional**: cómo se gestiona la organización, evitando la **Ley de Conway**.
- **Arquitectura de Software**: habilita ejecutar el modelo de negocio dando mayor valor al cliente, minimizando costos y maximizando ingresos. El modelo de negocio y las decisiones de dominio imponen restricciones sobre la arquitectura.
- **SRS (Documentación de Requerimientos)**: declaración oficial de lo que deben implementar los desarrolladores, considerando requerimientos de usuario y de sistema para los stakeholders.

---

## Unidad 4: Modelado de Sistemas

### Modelos

Un modelo es una simplificación o abstracción de la realidad que permite investigar, relevar y guiar el desarrollo, facilitando compartir información del producto con stakeholders, mantener conversaciones informadas y coherentes y documentar decisiones tomadas.

Permite comunicar estructura (procesos o recursos) y comportamiento, tener una visualización general del sistema y controlar la arquitectura (librerías, servicios, mantenibilidad, corrección, escalabilidad, módulos o clases), detectar oportunidades para refactorizar y reutilizar y analizar riesgos.

El modelo debe contener solo los elementos más relevantes y construirse con un objetivo definido. No hay un único modelo para un sistema porque a distintos stakeholders les interesan distintas vistas con distinta precisión. Las características del problema guían qué modelos hacer y cuántos. Son **prescriptivos**. **Modelar es diferente a diagramar.**

### Vistas

Una vista es una proyección del modelo desde una perspectiva (*viewpoint*) particular donde se omiten entidades no relevantes para ese stakeholder (al programador no le interesa lo mismo que al cliente o al analista).

### Prototipos

Técnica para recopilar información sobre requerimientos de usuarios que ayuda a validar y especificar requerimientos reduciendo incertidumbre y eliminando supuestos. Permite feedback rápido y es funcional, pero **es código de prueba**, no un subconjunto del producto final como una iteración en UP. Requiere tiempo y costo y conlleva el riesgo de que se confunda con el producto final, pero permite detectar errores temprano, detener sistemas inviables y acercarse a las expectativas del usuario.

### MVP (Producto Mínimo Viable)

No es un prototipo. Es **código funcional** que pasa por un ciclo de **Construir-Medir-Aprender** con mínimo esfuerzo y tiempo de desarrollo. Permite elicitación y **es una versión del producto final** trabajada de forma iterativo-incremental.

Está ligado al **Market Fit** (adecuación del producto al mercado con características que resuelven un problema). El MVP evoluciona al producto final cuando logra retención de usuarios y el producto se sostiene, manteniendo un *Continuous Discovery*.

---

## Unidad 5: Análisis Orientado a Objetos

### Análisis Orientado a Objetos (AOO)

Metodologías centradas en analizar requerimientos uniendo necesidades del negocio con la capacidad de asignar responsabilidades a componentes de software. El análisis encuentra y describe los objetos o conceptos en el dominio del problema.

Flujo:

1. Existencia de un concepto en el dominio (no es lo mismo que una clase de software).
2. Se abstrae, modela y analiza.
3. Se convierte en clase.

Un objeto no identificado resulta muy costoso porque empeora todo el análisis posterior. Se apoya en casos de uso para el análisis de requerimientos.

### Proceso Unificado (UP)

Proceso de desarrollo iterativo e incremental centrado en AOO y UML. Se organiza en mini proyectos cortos de duración fija (**iteraciones**). Cada iteración produce **código funcional** diseñado, implementado, probado e integrado (no un prototipo, sino un subconjunto acumulativo del sistema final).

Para cumplir con la duración corta se aplica **Slicing** (dividir requerimientos para que quepan en una iteración con código funcional).

Características esenciales:

- **Dirigido por el riesgo**: se abordan primero los requerimientos más complejos, riesgosos o de mayor impacto para verificar viabilidad tempranamente.
- **Centrado en la arquitectura**: una arquitectura núcleo da visión global y muestra cómo se conectan los componentes.
- **Pronta retroalimentación**: entregar código funcional temprano valida o refuta hipótesis y descubre qué aporta valor real.
- Ciclo **CONSTRUIR - RETROALIMENTAR - ADAPTAR**.

> *[Diagrama de referencia del apunte — Gráfico de UP (Hump Chart): Fases en el eje horizontal (Inicio, Elaboración, Construcción, Transición) y Disciplinas en el eje vertical con curvas de esfuerzo por fase]*

#### Fases de UP

1. **Inception (Inicio)**: suele tener una sola iteración. Evalúa la viabilidad del proyecto, visión aproximada, negocio, alcance y estimaciones. No es una fase de especificación exhaustiva de requisitos.
2. **Elaboration (Elaboración)**: se refina la visión, se implementa la arquitectura núcleo, se resuelven requerimientos de alto riesgo y se amplían requerimientos y estimaciones.
3. **Construction (Construcción)**: fase con más iteraciones donde se implementan requerimientos de menor riesgo y elementos sencillos.
4. **Transition (Transición)**: pruebas beta con usuarios para retroalimentación y pase a producción de la versión final.

- **Hitos**: puntos de corte de iteración para evaluar y tomar decisiones importantes.
- **Versión**: subconjunto funcional incremental del producto final.
- **Disciplinas**: Modelado de Negocio, Análisis de Requerimientos (casos de uso, RNF, glosario, visión, especificación complementaria), Diseño, Implementación, Gestión de Proyecto, Pruebas, Entorno.

### FURPS+

Clasificación de requerimientos en UP:

- **F**uncional: características, capacidades y seguridad.
- **U**sabilidad: factores humanos, ayuda, documentación.
- **R**eliability (Fiabilidad): frecuencia de fallos, capacidad de recuperación.
- **P**erformance: tiempos de respuesta, productividad, precisión, disponibilidad, uso de recursos.
- **S**oporte: adaptabilidad, mantenibilidad, escalabilidad.
- **+ (Adicionales)**: implementación, interfaz, operaciones, empaquetamiento, legales.

Los atributos de calidad son usabilidad, fiabilidad, rendimiento (performance) y soporte.

### Modelos de Casos de Uso

Describen la funcionalidad y el entorno del sistema (requerimientos funcionales y no funcionales asociados).

- **Casos de Uso**: requerimientos funcionales en texto y lenguaje natural que definen un contrato. Los de **caja negra** describen qué hace el sistema (responsabilidades) sin detallar diseño ni implementación. Pueden ser breves, informales o completos.
- **Actor**: rol humano o sistema externo con comportamiento que interactúa e inicia una acción con el sistema.
- **Escenario**: secuencia específica de acciones e interacciones (de éxito, fallo o alternativo).
- **Precondiciones**: lo que siempre debe cumplirse antes de iniciar; **no se prueban** (se asumen verdaderas) e implican otro escenario completado con éxito.
- **Postcondiciones**: lo que debe cumplirse al finalizar exitosamente el caso de uso.
- **Escenario principal**: *happy path* o flujo básico.
- **Extensión**: excepciones o flujos alternativos que también alcanzan éxito o manejan desvíos.
- **Requisitos especiales**: RNF, atributos de calidad, restricciones o reglas del dominio asociadas al caso de uso.
- Para descubrirlos se usa la **lista actor-objetivo**.

**Diagrama de Secuencia de Sistema (DSS)**: representa eventos del sistema generados por actores externos hacia el sistema tratado como caja negra, para el escenario principal y alternativos complejos.

**Especificación complementaria**: documenta requerimientos que no quedaron cubiertos en los casos de uso.

### Visión de Negocio, Glosario y Modelo de Dominio

- **Visión de Negocio**: objetivos y restricciones de alto nivel, análisis del negocio, problemas, involucrados y necesidades esperadas.
- **Glosario**: agrupa y clarifica términos del dominio junto a un diccionario de datos para lenguaje común.
- **Modelo de Dominio**: descomposición del dominio en **clases conceptuales** significativas con atributos clave y asociaciones con significado (no es un diagrama de clases de software). Se descubren mediante lista de categorías o identificando **frases nominales** (sustantivos) en los casos de uso; admite generalización/especialización, clases asociativas, agregación y composición.

### Historias de Usuario (Artefacto Ágil no UP)

Descripciones simplificadas desde la perspectiva del usuario final:

`"Como <rol de usuario>, quiero/deseo <objetivo o acción> para/tal que <razón>"`

Deben cumplir criterios **INVEST**: Independientes, Negociables, Valiosas (aportan valor), Estimables, Atómicas (Small) y Testeables. Pueden acompañarse de ejemplos, criterios de aceptación o mockups.

---

## Unidad 6: SDD (Spec-Driven Development)

### Fundamentos de SDD

**Spec-Driven Development (SDD)** es una forma disciplinada de definir con precisión **qué** se debe construir, vinculada al desarrollo asistido por IA y la automatización de generación de código. Con la IA el cuello de botella pasa a estar en la definición precisa de lo que se quiere construir.

Es opuesta al **vibe-coding** (donde no hay registro de cambios ni trazabilidad). Dado que la IA **no es determinista** (ante una misma orden puede producir resultados distintos), sin una especificación precisa la automatización amplifica supuestos erróneos y costosos. Si la especificación es deficiente, la automatización también lo será.

La especificación debe ser:

- **Estructurada**: documentada ordenadamente por secciones para lectura humana y de agentes.
- **Verificable**: comprobable reiteradas veces para validar completitud y dirección correcta.
- **Evolutiva**: modificable de forma incremental con trazabilidad para verificar y validar cambios.

### SPEC vs. Prompt, PRD y Documento de Diseño

La **SPEC** es una **fuente de verdad** escrita específicamente para agentes de IA (por ejemplo en Markdown), vigente con la funcionalidad, de la cual el código es consecuencia:

- **Prompt**: dura solo una interacción de segundos, pierde vigencia y no es fuente de verdad.
- **PRD**: similar a un caso de uso para stakeholders; útil para una release pero no permite evolución continua sincronizada con el código.
- **Documento de Diseño**: incluye decisiones de implementación (explica el *cómo*), por lo que no garantiza trazabilidad pura de requerimientos.

### Enfoques de SDD

- **Spec-First**: se define un feature en una spec, se genera el código y la spec se descarta. Solo evoluciona el código; si cambia el requerimiento hay que generar nuevas specs; no hay trazabilidad continua.
- **Spec-Anchored**: la especificación siempre existe y evoluciona a la par que el código.
- **Spec-as-Source**: la fuente única es la especificación; si cambia un requerimiento se modifica la spec, se descarta el código afectado y se regenera. Solo evoluciona la especificación.

### Workflow y Buenas Prácticas de una SPEC

El workflow SDD consta de tres fases con compuertas **Human-in-the-loop** (validación humana obligatoria en cada hito):

1. **Dar estructura al trabajo**: desde una idea inicial se diseña un plan.
2. **Escritura de la spec**: se definen requerimientos, diseño y tareas, validados con puertas Human-in-the-loop y checklist **DoR (Definition of Ready)** (por ejemplo: verificar que figuren todos los datos a manejar).
3. **Construcción y verificación**: implementación automatizada y evaluación.

Se apoya en el **principio de bajo costo temprano**: corregir un requerimiento al inicio evita la propagación exponencial de errores.

Criterios de una buena SPEC:

- **Smart Kid Principle**: alguien sin contexto previo puede leerla y construir exactamente lo esperado; explica qué debe hacer, qué NO debe hacer (fuera de alcance), evita redundancias y usa ejemplos.
- **Sintaxis EARS**: reduce ambigüedades del lenguaje natural.
- **Casos de borde**: no limitarse al *happy path*, reduciendo supuestos erróneos.
- **Criterios de aceptación / Gherkin** (*Dado - Cuando - Entonces*) verificables.
- **Identificadores únicos** por cada *work item* para garantizar trazabilidad entre requerimientos y pruebas.
- Detallar con precisión **sin caer en la sobre-especificación**.

SDD aporta valor al definir rigurosamente el **QUÉ** para obtener un **CÓMO** automatizado y correcto.
