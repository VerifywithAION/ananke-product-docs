# ANANKE | Competitive context and differentiation

**Positioning principle:** ANANKE does not claim to have invented caching, provenance, routing, semantic similarity or model governance. The opportunity is to **test a unified pre-inference necessity and current-applicability decision** against those established approaches.

## Adjacent solution categories

| Existing category | Typically optimizes | ANANKE's proposed incremental question |
| --- | --- | --- |
| Inference gateways and routers (e.g. LiteLLM, Portkey) | Provider integration, routing, policy, latency, operational visibility | Was a fresh model invocation warranted in the first place? |
| Exact or semantic caches | Avoid repeat calls when a reusable match exists | Is that match still authorized, valid and sufficient? |
| Prefix/prompt caching | Reduce cost or compute of reused context within or across calls | Can the entire obligation be satisfied without the new call? |
| RAG and agent memory | Retrieve information to help a model answer | Can validated work resolve the task without model re-reasoning? |
| Small/specialized models | Make an actual new decision cheaper | Should any new decision be generated, and what is the minimum admissible tier? |
| Workflow engines and deterministic automation | Execute explicit rules and programs | When is deterministic work sufficient and how is it linked to governed inference? |
| Cost/observability tools | Report charges, usage and budgets | Can observed execution be connected to evidence-backed avoided computation? |

These categories overlap substantially. Individual vendors may already combine multiple capabilities; the table does not assert exclusivity.

## Why LiteLLM is relevant

LiteLLM is a prominent public example of developer-oriented AI infrastructure documentation and provider abstraction. ANANKE can complement such gateways **if** the necessity/governance layer qualifies. ANANKE's differentiation should be **demonstrated**, not stated as automatic superiority.

Public reference: [LiteLLM documentation](https://docs.litellm.ai/) and [LiteLLM repository](https://github.com/BerriAI/litellm).

## Differentiators to validate, not declare won

**Evidence-backed eligibility:** reuse should require a justified current authority and applicability check, not merely similarity. A vendor comparison must use real invalidation and authorization cases.

**Unified economic accounting:** all provider and governance activity must be counted. The four-arm failed preregistration demonstrates why this standard matters.

**Computational Capital lifecycle:** verified prior computation may hold future value, but this requires a correctly accepted issuance, preservation and revocation lifecycle on real customer tasks.

**Source-aware invalidation:** protect against stale reuse while keeping unaffected results. It must be stress-tested with adversarial changes and independent source authority.

**Provider complementarity:** ANANKE need not compete with every gateway or caching layer. Integrations and partnerships are future possibilities, **not announced affiliations**.

## Major competitive risks

- Routers, caches and foundation-model providers can add equivalent necessity checks.
- Modern provider-native caching may shrink the incremental savings window.
- Governance checks may increase latency or reduce hit rates enough to erase value.
- Customers may prefer simpler tools with more mature distribution, uptime and SDKs.
- Defensive IP, freedom-to-operate, interoperability and procurement remain unqualified.

The relevant comparison is **correct work completed per total resource cost**, with no unacceptable security or quality degradation—not the highest standalone token-reduction ratio.

Sources: [ANANKE related work](../research/related-work.md) · [Research methodology](../research/methodology.md) · [Commercial testing](commercial-model.md).
