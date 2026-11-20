# ANANKE | Resumen ejecutivo para inversionistas

**Categoría propuesta:** infraestructura para gobernar la necesidad de inferencia de inteligencia artificial.

> **La pregunta que hacemos antes de consumir IA:** ¿esta tarea realmente necesita que un modelo vuelva a generar inteligencia?

## La tesis

La mayor parte de la infraestructura de IA optimiza **qué modelo ejecutar**, cuánto cuesta una llamada o cómo reutilizar fragmentos de contexto. ANANKE plantea una capa previa: determinar si la obligación ya puede resolverse mediante un resultado válido, comprobable y autorizado, y solamente entonces gastar nueva inferencia cuando resulte justificada.

Su concepto central es **Computational Capital**: trabajo computacional validado que puede conservarse y volver a utilizarse bajo límites de vigencia, fuente, alcance y autorización. No todo caché ni toda respuesta previamente almacenada es reutilizable.

## Problema de negocio

Los agentes y aplicaciones empresariales pueden repetir análisis, clasificaciones y comprobaciones sobre información que cambió poco o nada. Rehacer la inferencia podría generar costos y latencia innecesarios. Pero reutilizar una respuesta incorrecta, desactualizada o ajena a los permisos del cliente puede ser peor que pagar una llamada adicional.

**La oportunidad:** controlar el gasto de inteligencia sin sacrificar capacidad, calidad, seguridad ni gobernanza.

## Aplicaciones potenciales

- Clasificación repetitiva de solicitudes de soporte.
- Análisis de documentos y cumplimiento con versiones conocidas.
- Agentes de programación con repositorios y dependencias sujetos a cambios.
- Flujos empresariales que revisitan resultados de investigación.
- Sistemas con varios agentes y gran repetición de subtareas.

Estos son **casos de uso propuestos**, no implementaciones comerciales ya verificadas.

## Evidencia existente

| Investigación | Resultado registrado | Alcance |
| --- | --- | --- |
| EXP005F | 1,000 → 5 llamadas a Ollama; 140,060 → 724 tokens | Laboratorio local, workload acotado |
| EXP025A_R5 | 500 → 20 llamadas; 70,650 → 2,836 tokens | Laboratorio local, condiciones controladas |
| ANANKE × JEV A3 | 600 de 1,000 solicitudes resueltas antes de ejecutar JEV | Estudio real pero acotado |
| Four-Arm R1 | 101 frente a 240 llamadas frontier, con resultados correctos | **El criterio económico global preinscrito FALLÓ** |

Los experimentos no son comparables entre sí ni prueban reducción universal de costos o energía en clientes.

## Qué se ha construido y qué falta

Existen investigaciones con modelos reales, pruebas de componentes y desarrollos locales de control del producto y experiencia web. **Todavía no hay aceptación completa del producto integrado**, ni evidencia suficiente de ahorros netos medidos en una cuenta real, ni beta pública o comercial autorizada.

El paso determinante es completar una solicitud legítima de cliente con recibos persistidos, ejecución de modelo real, Capital reutilizable bajo condiciones correctas, invalidación al cambiar las fuentes y contabilidad económica verificable.

## Modelo de negocio y riesgo

Se estudian posibles paquetes de suscripción por organización/proyecto, gobernanza del uso de modelos y capacidades empresariales. **No se declara ARR, contratos comerciales, una valoración, monto de ronda, cuota de mercado ni precio de venta.**

Principales riesgos: baja repetición útil en algunos workloads, sobrecostos de gobernanza, errores de reutilización, competencia de cachés/routers y proveedores, y la necesidad de validar seguridad e integración.

## Lecturas complementarias

- [Atlas del producto](../atlas/README.md)
- [Tesis de inversión completa](investment-thesis.md)
- [Presentación de 12 diapositivas](pitch-deck.md)
- [Investigación y resultados](evidence.md)
- [Análisis competitivo](competitive-landscape.md)
- [Riesgos y diligencia debida](diligence.md)
- [Estado real del producto](../STATUS.md)
- [Roadmap](../ROADMAP.md)

**Fecha:** 20 de noviembre de 2026. Documentación pública; ningún código o sistema propietario del motor está incluido.
