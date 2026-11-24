# ANANKE | Competitive Proof Matrix

**Public technical/investment analysis · Reviewed 24 November 2026**

> **Positioning, not a victory claim:** ANANKE proposes to govern whether *new inference is necessary and permissible*, considering whether previous computation is still valid for the present obligation. Its proposed distinctive value is **not** generic caching, semantic similarity, prompt compression, model routing, task normalization, provenance tracking, source invalidation or lower call counts **by themselves**. The product-wide commercial comparison remains **unproven**.

This is a product-positioning and test-design document, **not** a patent claim chart, legal opinion, independent certification, disclosed private engine architecture or comprehensive live feature audit of every competitor. Vendors may combine features not captured by a single public source. Re-check product releases before making externally comparative claims.

## Executive answer: what is ANANKE different *about*?

**Conventional question:** How do I choose, cache, route, shorten, observe or accelerate an AI execution?

**ANANKE product question:** For this customer obligation, does already completed computation still have sufficient present validity and authorization to make another model execution unnecessary—and what evidence would justify that decision?

That is a **differentiation hypothesis around the combined decision boundary**, not a claim that every ingredient is novel or that ANANKE has shipped the integrated behavior at scale.

### Three different categories of comparison

1. **Direct alternative for repeat obligations:** exact/semantic response caching, task-aware cache verification and deterministic workflow automation. These may already avoid full model calls.
2. **Infrastructure ANANKE may complement:** gateways/routers, model servers and observability/evaluation platforms. Some already bundle caching and safety controls.
3. **Broader adjacent systems:** enterprise ontologies, agent/workflow governance and incremental computation. Their validation, state and security features must be taken seriously when testing differentiation.

A credible sales conversation should identify the concrete customer workflow and compare **current qualified features**, not speculative ANANKE roadmap against the competitor's weakest possible interpretation.

## A. Product landscape — publicly documented functions

| Technology / public source checked 2026-11-24 | Publicly documented capability | Areas of meaningful overlap | Narrow additional ANANKE question | Competitive posture |
| :--- | :--- | :--- | :--- | :--- |
| **[LiteLLM](https://docs.litellm.ai/docs/proxy/caching)** ([routing](https://docs.litellm.ai/docs/routing)) | Multi-provider routing, cache configurations including Redis semantic, proxy usage/budget mechanisms | Cache hits, key/scope boundaries, guardrails and avoided provider activity | Can independently eligible prior work justify avoiding the *current* obligation before executor selection, under changed source/authority? | **Adjacent + potential complement + competitive overlap** |
| **[Portkey AI Gateway](https://github.com/Portkey-AI/gateway)** | Gateway rules, reliability/fallback, guardrails and simple/semantic response caching | Routing, governance, cache reuse, observability | What additional quality-preserving necessity and present-applicability benefit survives fair comparison with Portkey's **configured** cache/guardrail behavior? | **Adjacent + competitive overlap** |
| **[GPTCache](https://github.com/zilliztech/GPTCache)** | Embedding-based similarity search and configurable similarity evaluations for reusable responses | Pre-provider response reuse, false-match risk, evaluator choices | Does explicit present authorization and source-change testing materially improve false-reuse safety without wiping out net savings? | **Direct experimental baseline** |
| **[vLLM automatic prefix caching](https://docs.vllm.ai/en/stable/features/automatic_prefix_caching/)** | Reuses attention KV state for shared prefixes, reducing repeated *prefill* computation | Computation reuse inside model serving | Does an eligible *whole-obligation* reuse eliminate any new model call while preserving correct output, beyond cheaper prefill? | **Complementary, not a direct substitute in all workloads** |
| **[Langfuse](https://langfuse.com/docs)** | Tracing, evaluations, prompt management and LLM performance analytics | Receipts/measurement, evaluations and trustworthy operating data | Can ANANKE's necessity decisions be measured and interrogated using robust traces/evals, not merely reported as savings? | **Potential evaluation complement; some accounting overlap** |
| **[Palantir Ontology / AIP](https://www.palantir.com/docs/foundry/architecture-center/ontology-system)** | Enterprise representation of data, logic, decisions/actions and security; [workflow observability/lineage](https://www.palantir.com/docs/foundry/aip-observability) | State/authority, actions, provenance, governed workflows | Can a dedicated cross-provider inference-necessity product demonstrate incremental value inside state-aware enterprise decisions? | **Strong adjacent system, not a naive cache** |
| **Traditional deterministic workflows / RAG / agent memory** | Rule execution, retrieval, stored state and/or context for later model use | Task reuse, memory, dependency validity | For exactly which classes of obligation is there a provable new computation-avoidance effect versus deterministic/RAG baselines? | **Compare at workflow level** |

**Interpretation:** a feature appearing in the ANANKE thesis does **not** imply its absence from a competitor. LiteLLM and Portkey already offer semantic caching; GPTCache has configurable similarity evaluation; Palantir addresses authority, enterprise state and lineage. These documented overlaps materially narrow any acceptable novelty or exclusivity claim.

## B. The defensible product *hypothesis*

ANANKE should test whether a **single governed decision on the necessity of new intelligence** can simultaneously achieve all of the following for a real customer workload:

- **Correct reuse when justified:** previously completed work can satisfy an obligation when it remains supported, current and permitted for the caller.
- **Correct refusal to reuse:** changes in relevant sources, scope, rights or evidence lead to fresh work or safe abstention rather than a plausible stale answer.
- **Preserve actual novelty:** novel and difficult tasks still get appropriate intelligence; avoidance should never be maximized by sacrificing task completion.
- **Provider complementarity:** the mechanism should not require the customer to abandon an otherwise suitable model or gateway, once an integration is qualified.
- **Honest accounting:** all provider calls, tokens, extra validation work, storage, latency and governance overhead count toward real net economics.

**Unproven as of 2026-11-24:** a complete current external-customer workflow demonstrating all five together, and a matched net-economic superiority result against the strongest configured competing baselines. See [current status](../STATUS.md), [published evidence](evidence.md), [capability maturity](../atlas/CAPABILITY_STATUS.md).

## C. Competitor-specific questions a rigorous VC will ask

| Challenge | The convincing evidence would be | Status |
| :--- | :--- | :--- |
| **Why not use LiteLLM semantic caching?** | Matched request mix, both implementations tuned fairly; report task correctness, source-change false reuse, actual provider calls and total net cost | **NOT RUN / NO MATCHED COMPARISON PUBLISHED** |
| **Why not use GPTCache with custom validation?** | Adversarial near-duplicate, stale-authority, tenant isolation and true novelty cases with equal-quality baseline | **NOT RUN / NO MATCHED COMPARISON PUBLISHED** |
| **Would Portkey caching + guardrails do the same?** | Representative policy-aware workload with effective guardrail/caching configuration and real spend | **NOT RUN / NO MATCHED COMPARISON PUBLISHED** |
| **Why not vLLM prefix caching?** | Measure entire-request avoided inference as well as shared-prefix prefill, tokens, throughput and latency | **NOT RUN / NO MATCHED COMPARISON PUBLISHED** |
| **Why not a stateful enterprise agent workflow?** | Compare invalidation, obligation correctness, developer adoption and change-handling overhead | **NOT RUN / NO MATCHED COMPARISON PUBLISHED** |
| **What is the value beyond existing observability?** | A reliable evaluator showing less resource spend *per correct obligation*, not just prettier utilization metrics | **NOT RUN / NO MATCHED COMPARISON PUBLISHED** |

Do **not** replace these gaps with unrelated local token-reduction ratios. EXP005F, EXP025A and A3 are bounded **ANANKE research**, not controlled competitive shootouts.

## D. Proposed apples-to-apples test protocol — future, not commissioned

**Prioritize an independently agreed enterprise workload.** Pre-register the definition of task correctness, permissions, source versions, novelty distribution, repeated/changed obligations, provider pricing, all overhead and security negative controls. Freeze the same case order and time horizon across arms.

**Comparison arms**, subject to permissions and licensing:
- Direct model execution (standard baseline).
- A current production-class gateway with configured caching/guardrails (e.g. LiteLLM or Portkey).
- A semantic-cache baseline with tuned similarity/evaluation (e.g. GPTCache).
- A deterministic/canonical rule-based workflow if the task admits one.
- ANANKE candidate **only after** its current customer E2E is accepted.
- An optional provider prefix-cache baseline, with prefill and whole-call results separately reported.

**Always evaluate:** task correctness and incomplete responses; false reuse; false suppression of necessary inference; source-change and permission isolation; p50/p95 latency; retries; **all** model/provider calls; actual tokens and billed/estimated prices labeled distinctly; orchestration compute/storage; and **net total cost per correct obligation**.

**Failure protocol:** if ANANKE reduces calls but fails a preregistered quality, isolation or net-economic threshold, report **FAIL**. The historical [four-arm research](../research/ananke-jev.md) already demonstrates why this discipline matters.

**No performance predictions, fixed improvement percentages, commercial pricing or vendor partnerships are implied by this proposal.**

## E. Differentiation claim ladder

| Stage | What may be said | What may **not** yet be said |
| :--- | :--- | :--- |
| **Concept / research** (today) | “ANANKE investigates governance of when new inference is necessary, beyond optimizing individual calls.” | “ANANKE is the first and only company to do this.” |
| **Scoped measured studies** (today) | “In specified local and provider experiments, actual call counts changed under defined rules.” | “ANANKE beats LiteLLM/Portkey/GPTCache in production.” |
| **After accepted integrated product tests** | “This specified customer journey passed its recorded necessity, reuse and source-change gates.” | “All enterprise workloads are safe to reuse.” |
| **After matched competitor benchmarks** | “On the published date and defined workload, the tested ANANKE configuration delivered measured X versus named baseline Y.” | “Guaranteed universal savings.” |
| **After customer validation** | “This customer segment has verified adoption/willingness to pay under disclosed methodology.” | “The business is venture-scale solely because the AI market is large.” |

## F. Key strategic risks and advantages to test

**Risks:** fast-moving competitor features; provider-native cache price reductions; execution overhead; poor reuse incidence; hard customer integration; security mistakes; patented prior art; inability to obtain or retain demand.

**Potential advantages (not proven moats):** a provider-neutral necessity decision, rigorous present validity of reused work, preserved source-change boundaries, inspectable cost/correctness evidence, and integration with existing model infrastructure.

**The strongest next investment signal is NOT another extreme laboratory reduction ratio.** It is a qualified customer workload where ANANKE performs correctly across changes and shows a favorable **net** result against a tuned alternative without extra operational burden.

## References / source currency

Vendor product statements checked on **2026-11-24**, from official docs/repositories above. Features, hosted availability, pricing and licensing may change. Patent overlap is treated separately in [the public prior-art landscape](../research/prior-art-public-landscape.md). This is not an assessment of what hidden or unpublished functionality vendors possess. There are no commercial affiliations announced.

**Read together:** [investment thesis](investment-thesis.md) · [AI-readable company dossier](../company.md) · [evidence](evidence.md) · [competitive context](competitive-landscape.md) · [venture proof gates](venture-readiness-gates.md).
