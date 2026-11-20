# ANANKE — Infraestructura para conservar inteligencia

**Antes de ejecutar un modelo: ¿realmente necesitamos volver a generar inteligencia?**

**[Atlas del producto](atlas/README.md)** · **[Resumen para inversionistas](investors/resumen-ejecutivo-es.md)** · **[Pitch de 12 diapositivas](investors/pitch-deck.md)** · **[Resultados](research/README.md)** · **[Estado](STATUS.md)** · **[English](README.md)**

ANANKE investiga y desarrolla **Inference Necessity Infrastructure**, una capa de gobernanza que busca determinar cuándo hace falta generar inteligencia nueva y cuándo puede utilizarse trabajo anterior **válido y autorizado**.

Su concepto central, **Computational Capital**, representa cómputo previamente validado que puede conservarse y reutilizarse dentro de límites de autoridad, evidencia y vigencia. No es simplemente guardar respuestas parecidas.

## La oportunidad

Hoy se invierte muchísimo esfuerzo en escoger modelos, reducir tokens, hacer caché y enrutar peticiones. ANANKE investiga una pregunta anterior: **¿es necesaria esta nueva inferencia?**

Cuando una tarea realmente cambió o requiere conocimiento nuevo, el modelo debe ejecutarse de nuevo. Cuando el trabajo sigue siendo aplicable y puede demostrarse, repetirlo podría ser innecesario. El objetivo es ahorrar recomputación **sin perder calidad, seguridad ni capacidad**.

## Qué pretende ofrecer

- Decidir cuándo una tarea necesita inferencia fresca.
- Resolver trabajo elegible sin modelos cuando existe una alternativa segura.
- Reutilizar resultados validados bajo límites explícitos.
- Preservar resultados no afectados e invalidar los que dependan de fuentes modificadas.
- Respetar las opciones de proveedores y controles autorizados.
- Reportar decisiones, llamadas y tokens reales separadamente de estimaciones.

**Son capacidades objetivo del producto**, no afirmaciones de que todas funcionen ya en una beta comercial.

## Investigación documentada

| Estudio | Resultado | Límite |
| --- | --- | --- |
| EXP005F | 1,000 → 5 llamadas a Ollama; 140,060 → 724 tokens | Experimento local y acotado |
| EXP025A_R5 | 500 → 20 llamadas; 70,650 → 2,836 tokens | Experimento local y acotado |
| ANANKE × JEV A3 | 600/1,000 solicitudes resueltas antes del modelo JEV | Investigación con proveedor real, no SaaS comercial |
| JEV B R1 | 413/420 decisiones acotadas correctas | No reemplaza razonamiento general |
| Four-Arm R1 | 101 vs 240 llamadas frontier | **FAIL global en el criterio económico preinscrito** |

No se deben sumar estos resultados entre experimentos ni presentarlos como ahorros universales o ingresos reales.

## Qué está construido y qué falta

Ya existen avances de ingeniería en mecanismos de gobernanza, validación, reutilización, interfaces y control del producto; también experimentos con modelos reales. Sin embargo, **la aceptación integral de la versión actual, el uso legítimo de Capital con un cliente de extremo a extremo y el ROI real por cuenta siguen sin comprobarse**.

**Beta privada externa: NO-GO a fecha 20 de noviembre de 2026.** [Ver estado actualizado](STATUS.md).

## Documentación completa

- [Introducción y Product Atlas](atlas/README.md)
- [Qué hace ANANKE](atlas/PRODUCT_OVERVIEW.md)
- [Lo que se ha construido y comprobado](atlas/BUILT_AND_PROVEN.md)
- [Casos de uso](atlas/USE_CASES.md)
- [Matriz de capacidades](atlas/CAPABILITY_STATUS.md)
- [Material para inversionistas](investors/README.md)
- [Tesis comercial y económica](investors/commercial-model.md)
- [Competencia](investors/competitive-landscape.md)
- [Diligencia debida](investors/diligence.md)
- [Roadmap](ROADMAP.md)
- [Investigación detallada](research/README.md)

**Protección de propiedad intelectual:** el repositorio publica solo documentación explicativa. No contiene código ni sistemas propietarios del motor ANANKE, secretos o detalles internos inéditos. Documentación públicamente visible **no** significa motor de código abierto. [Aviso de derechos](NOTICE.md).
