# Research methodology and evidence integrity

ANANKE's published story should be judged by **test conditions, evidence classes and falsifiability**, not by a large ratio extracted from a favorable workload.

## Evidence classes

| Class | Example | Permitted conclusion |
| --- | --- | --- |
| Model-backed measured | Actual Ollama or external-provider invocation with recorded usage | Calls/tokens/latency for the stated benchmark |
| Deterministic/offline | Validator or safety regression with no live provider calls | That tested mechanism or predicate behaves as expected under the fixture |
| Calculated/provider-priced | Price table applied to measured model usage | Estimated provider cost, under documented pricing assumptions |
| Counterfactual | Modeled cost of calls that did not occur | Estimated avoided work only—not observed savings |
| Integrated native acceptance | Full authenticated request through persistence, models, Capital and readback | Supported product-runtime behavior for exact tested environment |
| Field/production | Actual customer deployment, live measured workloads | Real-world performance for the evaluated customer scope |

A study can succeed on accuracy while failing a pre-registered economic acceptance condition. These outcomes must remain distinct.

## Quality and security guardrails

A defensible evaluation must ask whether the workload's required utility was preserved; whether any previous result was incorrectly reused; whether necessary fresh inference was wrongly suppressed; whether novelty, drift and contradictions correctly triggered new work; and whether attempts to cross project or source authority boundaries were rejected.

Reported **zero** errors means zero observed in a specified sample—not a universal proof that errors are impossible.

## Correct economic accounting

Measure at least:

- number of attempted and completed application requests;
- actual calls per model/provider tier, including canaries and retries;
- actual input and output tokens where provider telemetry is available;
- direct provider costs or transparently labeled pricing calculations;
- total end-to-end latency and incremental governance overhead;
- validated reuse rates, newly required inference and safety negatives;
- storage, database, CPU and operational overhead when assessing net advantage.

A 57.9% reduction in **frontier** calls does not mean 57.9% fewer **all-model** calls. Likewise, an experimental token ratio cannot be translated into dollars without valid pricing assumptions and all incremental costs.

## Research conduct

- Freeze benchmark populations, model/protocol versions, primary metrics and thresholds **before** inspecting results.
- Run compared arms against matched task populations where feasible.
- Preserve failed and inconclusive experimental verdicts.
- Do not tune on the holdout and then call it a clean holdout success.
- Preserve source and result lineage without publishing secrets or customer material.
- Distinguish independent readback and validation from model self-reported confidence.
- Request real external replication rather than treating private review as public reproducibility.

## Availability limitations

This repository is a **research-summary publication**. It does not include the private sealed datasets, source, hash manifests, prompts, provider credentials or original internal notebooks. The source-of-truth records are dated internal Notion research pages and archived test evidence. Some records were reviewed internally, but **public third-party reproduction cannot be performed from this package alone**.

Evidence and claims must be updated when new real-native results arrive; do not predeclare a full integrated `PASS`.
