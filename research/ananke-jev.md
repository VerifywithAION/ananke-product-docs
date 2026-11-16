# ANANKE × JEV — avoiding decisions before optimizing them

These experiments ask two complementary questions:

1. Can ANANKE determine that **a new semantic decision is unnecessary**, preventing a model invocation?
2. When a fresh bounded decision is required, can a specialized model such as **JEV** satisfy it, reserving frontier inference for harder cases?

JEV is an independent TypeSafe AI product. These are comparative research studies—not a partnership announcement, official TypeSafe validation, or public ANANKE SDK release. See [TypeSafe's Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python), [JS SDK](https://github.com/typesafe-ai/typesafe-sdk-js), and [WorkflowEvals](https://github.com/typesafe-ai/WorkflowEvals) for that company's own definitions.

## Study A3 — deterministic necessity before JEV (2026-10-06)

A frozen benchmark of **20 domains and 1,000 requests** compared a necessity-first path against JEV on every request.

| Metric | Recorded result |
| --- | ---: |
| Requests resolved before JEV by the upstream layer | **600 / 1,000** |
| JEV decisions after upstream resolution | **400** |
| JEV-everywhere comparison | **1,000** |
| Designated expected-UNIQUE recoveries | **220 / 220** correct by frozen criterion |
| Recorded real provider observations across arms | **1,400** |
| Total recorded provider input/output tokens | **2,024,522 / 976,648** |
| Calculated provider cost across observations | **$0.085029924** |
| JEV-created ANANKE canonical authority | **0** |

**Frozen verdict:** `PASS` for the bounded A3 choice/distribution contract. This demonstrates fewer calls to **JEV**, not frontier-call avoidance, unrestricted correctness, or complete ANANKE product integration.

## Study B R1 — specialized bounded decisions (2026-10-07)

ANANKE had already admitted **600/600** cases as requiring fresh intelligence. JEV was then evaluated as the bounded decision executor.

| Criterion | Result |
| --- | ---: |
| Decidable task accuracy | **413/420 = 98.33%** |
| Ambiguous cases appropriately escalated | **115/120 = 95.83%** |
| Out-of-scope cases escalated | **60/60 = 100%** |
| Benchmark JEV calls | **600** (plus 1 canary) |
| Frontier calls | **0** |
| Calculated benchmark provider cost | **$0.016327458** |
| p50 / p95 reported latency | **≈259 / 518 ms** |
| JEV-created canonical authority | **0** |

**Frozen verdict:** `PASS` for a specified Stage-1 bounded decision benchmark. This does not establish replacement of frontier reasoning across general tasks.

## Four-Arm R1 — matched architecture comparison (2026-10-07)

The strongest end-to-end *comparative research* experiment used four arms, each evaluated on the same 240-case benchmark.

| Arm | Final correct | JEV calls | Frontier calls | Calculated provider cost |
| --- | ---: | ---: | ---: | ---: |
| A — Frontier direct | **240/240** | 0 | **240** | **$0.723004** |
| B — JEV → Frontier | **240/240** | 204 | **121** | **$0.376366** |
| C — ANANKE → Frontier | **240/240** | 0 | **144** | **$0.442044** |
| D — ANANKE → JEV → Frontier | **240/240** | **108** | **101** | **$0.315616** |

In this specific benchmark, Arm D:

- avoided **139/240 frontier calls (57.92%)** relative to direct frontier execution;
- reduced calculated provider spend by approximately **56.35%**;
- reduced observed median end-to-end latency from roughly **2,340 ms** to **596 ms** (approximately **74.5%**);
- had **96 zero-model resolutions** and **0 observed false reuse or false inference suppression** within the matched test;
- still made **209 total model calls** (108 JEV + 101 frontier) versus 240 frontier calls in Arm A. Frontier-call avoidance must **not** be described as the same percentage of total model-call avoidance.

### The scientifically essential result: overall R1 FAIL

**The frozen, preregistered Four-Arm R1 verdict was `FAIL`, not `PASS`.** The combined arm preserved final correctness and delivered reductions, but failed four pre-declared economic co-primary criteria. A Stage-1 confidence/margin admission gate rejected 19 otherwise correct bounded responses, causing extra frontier fallback calls. Retrospective threshold relaxation may be an interesting diagnostic, but **cannot convert a failed frozen study into a pass**.

A new R2 policy and benchmark were prospectively frozen after R1 on new cases. That freeze is **not** an executed R2 provider experiment and does not erase R1's failure.

## What the studies support

They provide bounded evidence for a *complementary stack*: ANANKE can reduce the frequency of fresh intelligence and a specialized model can reduce the cost of certain residual decisions. They do not prove universal economic gains, physical energy savings, generalized reasoning equivalence, vendor-independent selection, or the completed ANANKE customer product.

Read: [Methodology](methodology.md) · [Minimum Intelligence](../docs/minimum-intelligence.md) · [Current product status](../STATUS.md).
