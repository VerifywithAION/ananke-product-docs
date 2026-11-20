# ANANKE | Commercial model and economic test

**Commercial stage:** hypotheses and evaluation design. The public repository discloses no verified revenue, enterprise contracts, paid beta users, pricing schedule, fundraising terms, or audited TAM/SAM/SOM.

## Buyer and user hypotheses

| Decision-maker | Pain to validate | Buying requirement |
| --- | --- | --- |
| AI-platform leader | Repetitive model spending across teams | Quality-preserving net cost reduction and stable integration |
| CFO / FinOps | Poor visibility into avoidable inference spending | Reconciled provider usage, baseline and accounting boundaries |
| Enterprise security/governance | Hidden reuse and provider policy violations | Scoped authorization, auditable decisions, incident controls |
| Operations leader | Expensive repetition in standard workflows | Task correctness, latency, measurable operator benefit |
| Developer platform team | Multiple agents repeating work | Integration ergonomics, isolation and provider compatibility |

## Packaging hypotheses (not announced products)

**Developer entry:** evaluation access once accepted product contracts exist, with usage visibility and limited projects.

**Team platform:** project and provider controls, necessity/reuse measurements, receipts, dashboards and policy configuration.

**Enterprise:** tenant boundaries, governance controls, longer retention/exports, operational commitments and supported integration.

The subscription, governed-event and enterprise-support components must be tested for willingness to pay. ANANKE must not add a fee structure that rewards unnecessary inference volume.

## The accounting model

For a fixed, comparable workload of N requests, a defensible economic comparison asks:

**Baseline total cost** = observed baseline provider spend + directly attributable baseline execution overhead.

**Governed total cost** = actual provider usage at applicable prices + compute and storage for necessity/reuse/validation + orchestration/latency overhead + operational support + any ANANKE fees.

**Net advantage** = baseline total cost minus governed total cost, while preserving the required quality and safety constraints.

Calling the frontier model fewer times is **insufficient** if specialized or local models, retries, storage, egress and governance offset the savings.

### Hypothetical illustration—NOT an ANANKE result

Consider a baseline of 10,000 eligible-classification tasks at a **hypothetical $0.01 per task** ($100 total). Suppose valid reuse and necessity checks reduce provider charges to $65, but governance, additional execution and storage cost $15. The modeled net benefit is **$20, or 20%** before ANANKE subscription and operating overhead.

This is elementary scenario arithmetic, *not* a projection, customer observation, bid, or evidence of achieved ROI. If the governance overhead instead exceeded $35, the business case could disappear.

## Pilot economic acceptance

A serious pilot should preregister the observation period, expected repetitions, novelty/drift mix, classification of sensitive requests, tolerable errors, source-of-truth authority, cost attribution and baseline model selection. It should report:

| Metric | Why it is essential |
| --- | --- |
| Correct tasks completed | No benefit from suppressing needed work |
| False reuse / suppression | Safety and confidence boundaries |
| Fresh model calls by provider | Avoid conflating frontier calls with all calls |
| Input/output tokens | Actual raw usage, not only shadow estimates |
| Net provider cost | Valid measured or labeled priced usage |
| Governance overhead | Work caused by ANANKE itself |
| Median and p95 latency | User experience, not just spend |
| Source-change recovery | Whether prior decisions become invalid when they should |
| Project/tenant isolation | Preventing cross-customer contamination |

**Go/no-go** should follow a frozen quality and net-economics threshold. Results that miss a co-primary threshold must be recorded as failures, even if one attractive submetric improves.

## Distribution approach

Initial route: design partners with well-defined repetitive tasks and explicit source revisions. Follow with supported integration documentation, provider compatibility, and an enterprise purchase motion **only after** genuine end-to-end and security acceptance.

No universal payback, cost floor, cloud margin, LTV/CAC, or monetization claim is established.

Related: [Investment thesis](investment-thesis.md) · [Evidence](evidence.md) · [Roadmap](../ROADMAP.md).
