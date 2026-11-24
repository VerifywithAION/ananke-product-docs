# ANANKE | Public prior-art and neighboring-work landscape

**Reviewed 24 November 2026 · Public-safe summary · Not legal advice**

## Why this page exists

A serious infrastructure startup should recognize prior work that may overlap its product thesis. ANANKE's internal research reviews of **30 August 2026** and **19 September 2026**, plus a later **12 September multimodal/adjacent-art research backlog**, warned against presenting ordinary caching, task normalization, verified reuse, provenance, source freshness or inference routing as new inventions.

This public document distills **external, already published** technology categories without publishing the internal patent claim maps, undisclosed proof procedures, invention drafting notes, private code, security design, unpublished filing strategy or confidential experimental fixtures. It does **not** reproduce the internal research report or waive privilege.

**Publication principle:** a bounded prior-art search that did not find a complete match is **not evidence of global novelty**, valid patent claims, priority, exclusivity or freedom to operate.

## What was known before ANANKE's product thesis

The following technical ideas have substantial independent ancestry:

- Caching answers and components for re-use across requests.
- Exact, semantic and task-level identity, including paraphrase-insensitive or quasi-idempotent tasks.
- Evaluating the correctness or suitability of cached responses.
- Storing validated decisions, reasoning or partial sub-results.
- Linking outputs to source versions, provenance, dependencies and audit records.
- Invalidating materialized results when source data changes.
- Routing inference across small, large or specialized models.
- Pre-execution policy admission and deterministic alternatives to stochastic generation.
- Case-based reasoning, incremental computation and enterprise governance of state/actions.

**None of those individual features should be a public “world-first” claim.** Their existence does not prevent ANANKE from pursuing a useful product; it changes what a differentiation experiment and professional IP review must address.

## Representative patent literature (public documents)

| Public reference checked 2026-11-24 | Broad disclosed subject | Why an ANANKE reviewer must take it seriously |
| :--- | :--- | :--- |
| [Microsoft-related component caching publication US20250190354A1](https://patents.google.com/patent/US20250190354A1/en) | Semantic lookup and re-use of generative AI components, including validation/recomputation | “Retrieve and validate a prior model/component result” is not sufficient novelty on its own |
| [Cisco PPU patent publication US20250292015A1](https://patents.google.com/patent/US20250292015A1/en) and [issued US 12,699,838](https://patents.justia.com/patent/12699838) | Task-characterized / quasi-idempotent response caching and alternative execution avoidance | Task-aware reuse is closer prior art than a simplistic prompt cache |
| [Cisco double-verification publication US20250335809A1](https://patents.google.com/patent/US20250335809A1/en) | Suitability verification of cached LLM results | “Check a cache result before skipping inference” also has known art |
| [Cisco dynamic-threshold publication US20250328554A1](https://patents.google.com/patent/US20250328554A1/en) | Dynamic similarity thresholds for natural-language caches | Economic, request-specific and threshold decisions have precedent |
| [AI Orchestrator publication US20260119697A1](https://patents.google.com/patent/US20260119697A1/en) | AI workflow orchestration, reusable information and related verification concepts | Broader orchestration and reusable decisions create another potential overlap field |

**Citation and legal caveat:** the patents above are examples, **not** an exhaustive or claim-by-claim landscape. A publication number is not automatically proof of a granted, enforceable patent. The Cisco PPU **issued patent** was publicly reported as US 12,699,838 on **4 August 2026**; current ownership, maintenance, jurisdiction, scope and enforceability must be independently checked by counsel. Other publications above must not be described as granted patents without separate verification.

**Do not infer:** that ANANKE is accused of infringement, that these documents cover the private ANANKE implementation, or that any proposed ANANKE invention is patentable. Those are legal conclusions requiring effective dates, claim construction and jurisdiction-specific advice.

## Related product and research categories

| Public reference | Known area | Boundary for ANANKE |
| :--- | :--- | :--- |
| [GPTCache](https://github.com/zilliztech/GPTCache) | Similarity and evaluator-based response reuse | Need to show value beyond a well-configured cache |
| [LiteLLM semantic caching](https://docs.litellm.ai/docs/proxy/caching) | Gateway and semantic response cache | Existing real product overlap; do not imply LiteLLM only routes |
| [Portkey AI Gateway](https://github.com/Portkey-AI/gateway) | Provider routing, reliability, cache and guardrails | Existing policy/routing/cache functionality must be accounted for |
| [vLLM automatic prefix caching](https://docs.vllm.ai/en/stable/features/automatic_prefix_caching/) | KV-prefix work reuse | A different computational surface; can be complementary |
| [Palantir Ontology](https://www.palantir.com/docs/foundry/architecture-center/ontology-system) | Enterprise state, decision logic, actions, security | Governance/state is not novel merely by being presented with AI |
| [Langfuse](https://langfuse.com/docs) | Tracing, evaluation and prompt lifecycle | Claim new economic evidence only if measured beyond existing observability |
| Classical case-based reasoning and incremental computation | Reuse, revise/retain, invalidation and recomputation | Longstanding conceptual and algorithmic ancestors |

Historical and more recent research on visual reuse, incremental processing and partial recomputation are **additional adjacent topics**, not proof that ANANKE already supports image/video inference. Public [roadmap](../ROADMAP.md) remains conditional.

## Product differentiation versus patent novelty

These questions are **different**:

**Commercial differentiation:** “Why should a customer use ANANKE instead of an existing optimized cache, gateway, provider or workflow engine?” This requires live evidence of **quality, safe eligibility and cost per correct obligation** against competitive baselines.

**Patentability:** “Do specific independently claimable technical limitations satisfy relevant novelty and nonobviousness requirements?” This requires competent patent counsel and examination of effective filing dates, full references, claim sets and other disclosures.

**Freedom to operate (FTO):** “Could the contemplated implementation fall within others' enforceable patent claims in a target jurisdiction?” A new improvement can be patentable yet still raise FTO issues. ANANKE has **no public legal clearance claim**.

**Trade secret:** Even if a high-level public thesis is useful for sales, publishing confidential techniques, algorithms, complete internal authority transitions, proof specifications or code can adversely affect protectability. The private engineering record and claim-by-claim analysis remain **outside this public repository**.

## What should ANANKE claim publicly?

**Allowed, backed by the project direction:** “ANANKE investigates whether a currently valid, authorized, previously computed result can satisfy a new obligation before spending fresh model inference, with explicit change and evidence safeguards.”

**Allowed, bounded evidence:** “Specific local/provider studies observed defined reduction in model calls or tokens. The overall four-arm preregistered economic result was FAIL.” See [evidence](../investors/evidence.md).

**Not established:** “ANANKE invented semantic caching”; “no competitor can do validated reuse”; “our authority model is unique worldwide”; “we have comprehensive patent protection”; “the engine is production certified”; “ANANKE outperforms commercial cache solutions”; or “all saved tokens are net savings.”

## Actionable next steps

1. Maintain an up-to-date, counsel-only inventory of claims, source dates, jurisdictions and legal prosecution status; keep it **out of this repository**.
2. Preserve contemporaneous evidence and research notebooks without exposing raw private implementation.
3. Freeze a customer-meaningful question: can ANANKE prove present applicability more safely and profitably than configured existing caching/governance products?
4. Execute independent, adversarial, **matched competitive benchmarks** only after the complete customer path is accepted.
5. Separate patent filing/priority and FTO legal reviews from marketing and from scientific reproducibility.
6. Publish externally only what supports an accurate, non-confidential **product-positioning** claim.

**Read:** [Competitor proof matrix](../investors/competitive-proof-matrix.md) · [Research methods](methodology.md) · [Existing related work](related-work.md) · [Product stage](../STATUS.md) · [Venture readiness gates](../investors/venture-readiness-gates.md).

*This summary is research and product context, not a patent opinion, a noninfringement opinion or legal advice. No private ANANKE claim strategy or implementation is disclosed here.*
