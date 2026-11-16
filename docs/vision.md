# Vision: intelligence conservation as infrastructure

**ANANKE's central idea is to govern the *necessity* of new intelligence, not only the cost of the model that produces it.**

## Why this matters

Many AI workflows are priced and measured per call, request, or generated token. That obscures a different question: how much *novel, still-unresolved* work is actually present? A repetitive workload can trigger thousands of model invocations even when only a small subset represents genuine novelty or material change.

The ANANKE research program began with Token Reduction Lab, where local Ollama studies measured how controlled, workload-specific computation avoidance reduced model calls and token use. It evolved toward a system in which reusing a prior decision is not a heuristic shortcut: reuse is permitted only when evidence, authority and present applicability support it.

## Design principles

1. **Necessity before routing.** Ask whether computation is needed before asking which model should run.
2. **Zero-inference when justified.** A verified deterministic or reusable result can be preferable to even a cheap model invocation.
3. **Evidence before reuse.** Similar text or a cache hit is insufficient.
4. **Scoped authority.** Tenant, project, policy, source version, dependencies, and provenance constrain what may be reused.
5. **Freshness is a first-class property.** New information, contradictions and drift may invalidate previous decisions.
6. **Selective recomputation.** Preserve independent verified work when one dependency changes.
7. **Minimum admissible intelligence.** When fresh inference is necessary, choose the least-resource-cost *authorized and sufficient* available option, not automatically the cheapest nominal model.
8. **Auditable economics.** Count actual dispatches and tokens; label counterfactual estimates; include governance overhead.
9. **One product runtime.** Independent tests do not substitute for complete customer-workflow acceptance.

## Research hypothesis

> With stable dependencies and growing validated Capital, mature workflows can produce disproportionately fewer new model invocations than their increasing request volume, while preserving correctness and the ability to respond to novelty.

The hypothesis is falsifiable. Workloads with rapidly changing sources, open-ended creative tasks, uncertain semantics, or expensive validity checks may show little savings or negative net advantage. The relevant objective is safe *net* advantage, not a headline token ratio.

## Long-term research target versus claim

The internal roadmap includes an ambitious research target of a tiny fraction of fresh inference for extremely mature, safely reusable workloads. **This is not achieved universally and is not a customer guarantee.** Publications should be evaluated against controlled baselines, independent holdouts and evidence of zero false suppression in the stated test scope.

Read: [How ANANKE works](how-it-works.md) · [Research methods](../research/methodology.md) · [Public claims](../CLAIMS.md).
