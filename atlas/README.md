# ANANKE | Product Atlas

**Intelligence should be spent only when it is necessary.**

ANANKE is an emerging **Inference Necessity Infrastructure** company and research/product engineering program. Its goal is to let AI applications determine whether fresh model execution is justified, preserve eligible prior computation, govern necessary provider use, and account for the resulting value. This repository contains public **documentation only**—no executable ANANKE engine, private architecture, credentials, SDK distribution, or implementation contracts.

> **Current disclosure (20 November 2026):** substantial bounded research and component work exists; the complete current customer-facing product has **not** passed integrated acceptance and is **not generally available**. See [product status](../STATUS.md). This is a product thesis supported by scoped results, not a claim of production-scale savings.

## Start here

| Audience | Read in this order | Main question |
| --- | --- | --- |
| Venture capital and strategic investors | [Investor overview](../investors/README.md) → [Investment thesis](../investors/investment-thesis.md) → [Evidence](../investors/evidence.md) → [Risks](../investors/diligence.md) | Is this a compelling, falsifiable infrastructure opportunity? |
| Enterprise executives | [Product overview](PRODUCT_OVERVIEW.md) → [Use cases](USE_CASES.md) → [Product experience](../product/customer-experience.md) → [Roadmap](../ROADMAP.md) | Where could ANANKE improve our workflows? |
| AI and platform engineers | [Capabilities](CAPABILITY_STATUS.md) → [How it works](../docs/how-it-works.md) → [Governance](../docs/governance-and-safety.md) → [Research methodology](../research/methodology.md) | What is the intended integration boundary and what is proven? |
| Researchers | [Evidence](../research/README.md) → [Token Reduction Lab](../research/token-reduction-lab.md) → [ANANKE × JEV](../research/ananke-jev.md) → [Related work](../research/related-work.md) | Which conclusions do the experiments actually support? |

## The atlas

### Product
- [Product and value proposition](PRODUCT_OVERVIEW.md)
- [What has been built and verified](BUILT_AND_PROVEN.md)
- [Capability maturity and release boundaries](CAPABILITY_STATUS.md)
- [Illustrative use cases](USE_CASES.md)
- [How it works—public conceptual level](../docs/how-it-works.md)
- [Computational Capital](../docs/computational-capital.md)
- [Minimum Admissible Intelligence](../docs/minimum-intelligence.md)

### Business and investment
- [Investor home](../investors/README.md)
- [Investment thesis](../investors/investment-thesis.md)
- [12-slide pitch narrative](../investors/pitch-deck.md)
- [Commercial thesis and economics](../investors/commercial-model.md)
- [Competitive context](../investors/competitive-landscape.md)
- [Evidence and validation](../investors/evidence.md)
- [Risks and diligence](../investors/diligence.md)

### Roadmap and trust
- [Public roadmap](../ROADMAP.md)
- [Current status](../STATUS.md)
- [Research methodology](../research/methodology.md)
- [Responsible claims](../CLAIMS.md)
- [Security/disclosure](../SECURITY.md)
- [Research source provenance](../research/source-provenance.md)
- [Glosario / Español](../README.es.md)

## The core idea, in one minute

Most AI stacks optimize the model call: its provider, latency, prompt, cache, or price. ANANKE starts earlier: **does this task need a new model call at all?** Valid prior work may resolve it without fresh inference **only when the result is still authorized, supported, applicable, and safe**. If not, ANANKE's intended behavior is to permit appropriate fresh intelligence or return a governed refusal/escalation.

**Computational Capital** is the name for a validated result that earns bounded eligibility for later use. It is not a promise that every stored answer or semantic match is safe to reuse.

**A necessary qualification:** some workloads have little reusable work, require fresh judgment, or incur governance overhead greater than any saved inference cost. Product value must be measured on real customer workloads, with quality and safety guardrails.

## Public disclosure boundary

This atlas is **not** an engine source repository, technical implementation guide, deployment blueprint, API specification, security design disclosure, patent claim chart, or customer-ready service. It describes externally understandable capabilities, use cases, research observations, milestones, commercial hypotheses and validation gates. Private artifacts remain private.

**Updated:** 20 November 2026.
