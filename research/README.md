# Research and evidence index

**Novelty and competition are separate from laboratory performance.** Read [Public Prior-Art Landscape](prior-art-public-landscape.md) and [Competitive Proof Matrix](../investors/competitive-proof-matrix.md) before describing any feature as exclusive.

ANANKE's evidence program distinguishes **three different kinds of proof**:

1. **Model-backed laboratory execution:** local or external model/provider calls actually occurred and usage was recorded.
2. **Deterministic/offline qualification:** a mechanism or security predicate passed tests without a live provider session.
3. **Integrated product acceptance:** a customer request traversed the entire applicable native data/authority path with traceable receipts and usage.

These are **not interchangeable**. This page publishes selected public-safe findings extracted from internal dated research records; it is not a dump of the private experiments or complete datasets.

| Date / workstream | Evidence class | Publicly reportable finding | Overall scope verdict |
| --- | --- | --- | --- |
| 2026, EXP005F | Local Ollama runtime | 1,000 → 5 calls; 140,060 → 724 tokens | Measured workload-specific reduction |
| 2026, EXP025A_R5 | Local Ollama runtime | 500 → 20 calls; 70,650 → 2,836 tokens | Measured workload-specific reduction |
| 2026, EXP025A_R9 | Local Ollama runtime | 1,000 baseline → 400 calls across five waves | Local controlled result |
| 2026, EXP025A_R10 | Local Ollama runtime | 2,000 baseline → 465 calls across ten waves; wave 10: 6/200 | Local controlled result |
| 2026-10-06, ANANKE × JEV A3 | Real external provider benchmark | 600/1,000 requests resolved before JEV; 220/220 designated recoveries | A3 frozen bounded contract PASS |
| 2026-10-07, JEV B R1 | Real external provider benchmark | 413/420 bounded decisions; controlled escalation | Frozen bounded Stage-1 PASS |
| 2026-10-07, Four-Arm R1 | Real matched model/provider comparison | Arm D: 101 frontier calls vs 240 direct; 240/240 correctness across arms | **Frozen economic co-primary FAIL** |
| 2026-11-16, M06 local policy | Offline candidate regression | 47/47 tests PASS; only configured local Ollama tier | **Offline only** |
| 2026-11-16, full M01–M08 | Native integrated acceptance | Not completed; isolated PostgreSQL owner gate halted session; subsequent offline correction passed focused checks | **Not proven / no beta** |

Full details: [Token Reduction Lab](token-reduction-lab.md) · [ANANKE × JEV](ananke-jev.md) · [Evaluation method](methodology.md).

## What is not published

Private raw source, internal verification hashes, unreleased test fixtures, source-event credentials, private infrastructure topology, transaction records, model input data or internal research attachments. A reader cannot reconstruct the full experimental datasets solely from this package. We therefore **do not claim independent public replication**.

## How to read the results

A 60% reduction in a specialized model's invocations does **not** mean a 60% overall compute reduction. A 57.9% reduction in frontier *calls* does **not** imply 57.9% fewer total model calls when a cheaper model is also used. A modeled price estimate is not paid billing, and an offline test PASS is not an integrated runtime PASS.

No result here establishes universal reductions, total-energy savings, or a production customer SLA.
