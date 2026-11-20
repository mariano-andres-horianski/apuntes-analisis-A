# Análisis y Diseño de Sistemas A — Plataforma de Estudio Interactiva

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Offline](https://img.shields.io/badge/Offline-100%25%20Local-16794B?style=flat-square)
![Unidades](https://img.shields.io/badge/Programa-Unidades%201%20a%206-2251D1?style=flat-square)

Aplicación web estática diseñada para estudiar **Análisis y Diseño de Sistemas A** directamente desde el navegador, sin servidores, sin compilación y sin dependencias externas: abrís `index.html` y funciona.

Todo el contenido —preguntas, diagramas, pistas y definiciones— está construido sobre el apunte oficial de la materia incluido en [`apunte.md`](./apunte.md).

---

## ¿Qué incluye?

### 0. Aprender desde cero — Recorrido Guiado (`#journey`)
- **8 capítulos progresivos** que explican la materia desde cero (de la U1 a la U6) conectando teoría, diseño y metodología.
- **8 laboratorios interactivos animados** integrados por capítulo (animaciones SVG paso a paso, simuladores interactivos y juegos de matching).
- **Micro-chequeos de comprensión** al final de cada capítulo con progreso persistente y acceso directo al resto de los módulos de la unidad.

### 1. Exámenes Multiple Choice (`#quiz`)
- **72 preguntas** redactadas con foco conceptual, comparativo y práctico (**12 por unidad** de la U1 a la U6).
- **Tres modos de evaluación**:
  - **Simulacro completo**: muestra balanceada de `10`, `20` o `30` preguntas entre todas las unidades.
  - **Por unidad específica**: evaluación enfocada de 12 preguntas de la unidad elegida.
  - **Repasar errores**: agrupa automáticamente las preguntas falladas en intentos previos (y las quita al responderlas bien).
- **Revisión automática recién al entregar**: no muestra pistas durante el examen; al entregar presenta anillo porcentual, desglose de precisión por unidad, filtros (*Todas*, *Incorrectas*, *Correctas*, *Marcadas*), explicación basada en el apunte y acceso directo al mapa conceptual de esa unidad.
- **Comodidad de uso**: mezcla aleatoria opcional de preguntas y opciones, cronómetro, navegador rápido, marca de duda y atajos de teclado (`1–4`, `←` / `→`, `F`).

### 2. Mapas Conceptuales y Explicaciones Gráficas (`#maps`)
- **14 diagramas SVG interactivos** adaptados automáticamente a tema claro y oscuro:
  - 1 mapa maestro integrador (`U1 → U6` y los 4 hilos conductores transversales).
  - Diagramas específicos por cada unidad (TGS y propiedades, Espacios de Problema/Solución, Modelo 3P+A y CMMI, Ciclos de Vida, Entrevistas y Empathy Map, Curva del Costo del Error y V&V, Taxonomía RF/RNF y Matriz Impacto vs. Esfuerzo, Modelos y Vistas, Prototipo vs. Iteración UP vs. MVP, Gráfico de UP, Artefactos AOO/FURPS+/UML, Enfoques SDD vs. Vibe-coding y Workflow SDD).
- **Inspector de nodos**: al hacer clic en cualquier bloque del mapa se muestra su definición precisa, puntos clave, **clave de examen** y navegación guiada (`← Anterior / Siguiente →`).
- **Visor ampliado**: controles de zoom (`80%–220%`), ancho extendido y botón **Expandir** para abrir cualquier diagrama en pantalla completa.

### 3. Preguntas de Indagación Profunda (`#inquiry`)
- **50 preguntas abiertas** pensadas para preparar parciales y finales orales (**7 por unidad U1–U6** + **8 preguntas integradoras** entre unidades).
- Clasificadas por enfoque: **Comprensión**, **Contraste**, **Caso práctico** e **Integración**.
- **Recuerdo activo**: cada tarjeta oculta por defecto los puntos clave de respuesta y una **repregunta de profundización** estilo mesa de examen.
- **Seguimiento personal**: estados de dominio (*Pendiente*, *Repasar*, *Dominada*), bloque para escribir notas propias con autoguardado y **Modo Oral** (pregunta al azar en ventana focalizada).

### 4. Entrenamiento Activo (`#practice`)
Sección aislada con **5 páginas dedicadas** para practicar habilidades clave antes de un parcial o final:
- **Flashcards inteligentes (`tool=flashcards`)**: **56 tarjetas** (glosario U1–U6 + términos técnicos extra) con repetición espaciada en `localStorage` (*Lo sé / Dudé / Ni idea*).
- **Cazador de errores (`tool=bugs`)**: **4 diagramas SVG interactivos** (*Casos de Uso*, *Clases / Dominio*, *Secuencia DSS* y *DER*), cada uno con **3 errores conceptuales plantados** para diagnosticar.
- **Entrevista con el cliente (`tool=interview`)**: **3 transcripciones desordenadas** (**24 frases**) para arrastrar o etiquetar como **RF**, **RNF**, **Regla de Negocio** o **Ruido / Ambigüedad**.
- **Duelos “X vs. Y” (`tool=duels`)**: comparativa rápida y **mini-juego de 32 escenarios** sobre **8 pares clásicos de examen** (*Verificación vs. Validación*, *Agregación vs. Composición*, *«include» vs. «extend»*, etc.).
- **Mini casos de estudio (`tool=cases`)**: **4 enunciados de parcial** con borrador autoguardado, **checklist de 8 puntos** y **solución de referencia** desplegable.

### 5. Guía Completa de Parciales (`#exam-prep`)
Página aislada orientada a resolver con precisión consignas reales de parcial y final:
- **Guía por Ejes (`tab=guide`)**: **5 bloques teóricos** con ejemplos justificados, contrastes (*modelando vs. sin modelar*, *Enfoque Sistémico ↔ Ing. de Software*, *fases de requisitos por ciclo de vida*) y tablas comparativas.
- **19 Preguntas Reales de Parcial (`tab=questions`)**: consignas exactas en 3 sets (*9 + 5 + 5*) con borrador autoguardado, rúbrica interactiva de corrección, respuesta modelo estructurada y alertas de trampas típicas.
- **Talleres Guiados (`tab=drills`)**: clasificador TGS de 5 criterios (*Telefonía*, *Respiratorio*, *Homebanking*, *Reloj*), armador de Requerimiento Funcional completo con distractores técnicos, comparador de Caso de Uso Completo (1 vs. 2 columnas) y clasificador **FURPS+**.

### 6. Extras transversales
- **Glosario buscable**: 42 conceptos clave del apunte filtrables por texto y unidad desde cualquier pantalla.
- **Tema Claro / Oscuro**: conmutador persistente en la barra superior.
- **Progreso local**: capítulos completados en el recorrido, avance en entrenamiento (`ads_practice_state_v1`), avance de parciales (`ads_exam_prep_state_v1`), historial de exámenes, preguntas a repasar, mapas explorados, estado de indagación y notas personales guardados en `localStorage` (con respaldo en memoria si el navegador restringe almacenamiento en archivos locales).

---

## Programa cubierto (Unidades 1 a 6)

| Unidad | Eje temático | Contenidos centrales del apunte |
| :--- | :--- | :--- |
| **U1** | Sistemas y Enfoque Sistémico | Concepto de sistema, TGS (3 premisas y 4 principios), propiedades (retroalimentación, homeostasis, entropía, equifinalidad, teleología, totalismo), clasificación, datos vs. información (5 atributos), análisis multicausal, *Problem* vs. *Solution Space*, *Product-Market Fit*. |
| **U2** | Desarrollo de Sistemas de Información | Análisis vs. Diseño, Modelo 3P+A, *The Box* vs. Cascada vs. Ciclo Lean, *Design Thinking*, Agilidad Moderna y Doble Diamante, Agilidad con IA, proyecto no determinista, CMMI PP (ML2: SG1–SG3), calidad de proceso vs. producto. |
| **U3** | Ingeniería de Requerimientos | Universo de discurso, proceso IR (elicitar, modelar, analizar, gestionar), entrevistas (Pirámide, Embudo, Rombo), *Empathy Map*, RF vs. RNF y *drivers* de arquitectura, CMMI REQM/RD, Verificación vs. Validación, curva de costo y propagación de errores, priorización (MoSCoW, RICE, WSJF, Eisenhower, Impacto/Esfuerzo), Ley de Conway y SRS. |
| **U4** | Modelado de Sistemas | Abstracción prescriptiva, *Modelar ≠ Diagramar*, Vistas (*Viewpoints*) por *stakeholder*, Prototipos (código de prueba) vs. Iteraciones UP vs. MVP (*Construir-Medir-Aprender*), retención, *Market Fit* y *Continuous Discovery*. |
| **U5** | Análisis Orientado a Objetos y UP | Flujo Concepto → Abstracción → Clase, Proceso Unificado (iterativo, incremental, *Slicing*, riesgo y arquitectura), 4 fases (Inicio, Elaboración, Construcción, Transición), FURPS+, Casos de Uso caja negra, DSS, Visión, Glosario, Modelo de Dominio e Historias de Usuario (INVEST). |
| **U6** | Spec-Driven Development (SDD) | IA no determinista y cuello de botella en el *qué*, SDD vs. *vibe-coding*, SPEC (estructurada, verificable, evolutiva) vs. Prompt/PRD/Diseño, *Spec-First* / *Spec-Anchored* / *Spec-as-Source*, workflow de 3 fases con *Human-in-the-loop*, DoR, *Smart Kid Principle*, EARS, casos de borde, Gherkin e IDs únicos. |

---

## Cómo usarlo

No requiere instalar Node, Python ni levantar ningún servidor:

1. Cloná o descargá este repositorio:
   ```bash
   git clone https://github.com/mariano-andres-horianski/apuntes-analisis-A.git
   ```
2. Abrí el archivo `index.html` con doble clic en tu navegador preferido (`Chrome`, `Edge`, `Firefox`, etc.).

---

## Estructura del proyecto

```text
.
├── index.html             # Entrada principal SPA (carga scripts clásicos, sin bundler)
├── apunte.md              # Apunte completo de Análisis y Diseño de Sistemas A (U1–U6)
├── css/
│   ├── styles.css         # Sistema de diseño claro/oscuro, grillas y visor SVG
│   ├── practice.css       # Estilos aislados de la sección Entrenamiento (#practice)
│   └── exam-prep.css      # Estilos aislados de la sección Parciales (#exam-prep)
├── js/
│   ├── data-units.js      # Metadata de unidades (U1–U6) y glosario de 42 términos
│   ├── data-quiz.js       # Banco de 72 preguntas multiple choice (12 por unidad)
│   ├── data-maps.js       # 14 diagramas SVG interactivos + nodos de inspección
│   ├── data-inquiry.js    # 50 preguntas abiertas de indagación profunda
│   ├── data-journey.js    # 8 capítulos progresivos (U1–U6) y micro-chequeos
│   ├── journey-labs.js    # 8 laboratorios interactivos animados en SVG y simuladores
│   ├── data-practice.js   # Datos de entrenamiento (flashcards, bugs, entrevistas, duelos, casos)
│   ├── practice.js        # Motor aislado de las 5 herramientas de Entrenamiento
│   ├── data-exam-prep.js  # Guía teórica (5 ejes), 19 preguntas de parcial y talleres
│   ├── exam-prep.js       # Motor aislado de Parciales (#exam-prep)
│   └── app.js             # Router, recorrido guiado, exámenes, mapas y estado local
└── README.md
```

---

## Cómo ampliar el contenido

Si querés agregar más material de práctica sin tocar la lógica de la aplicación:

- **Más preguntas multiple choice**: agregá objetos en `window.ADS_QUIZ` dentro de `js/data-quiz.js`.
- **Nuevos diagramas o nodos**: agregá entradas en `window.ADS_MAPS` dentro de `js/data-maps.js` manteniendo coincidencia entre cada `data-node="<id>"` del SVG y las claves de `nodes`.
- **Más preguntas abiertas**: agregá objetos en `window.ADS_INQUIRY` dentro de `js/data-inquiry.js`.
- **Más términos de glosario o resúmenes**: editá `window.ADS_GLOSSARY` y `window.ADS_UNITS` dentro de `js/data-units.js`.
