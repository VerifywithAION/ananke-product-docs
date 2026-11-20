# Product overview

## ANANKE: conserve intelligence, preserve capability

The premise is straightforward: an AI system should not pay to redo work merely because it received another request. But it should never avoid a necessary model call just to produce an attractive savings metric.

ANANKE is designed as **Inference Necessity Infrastructure**: an execution-governance layer for existing applications, agents and enterprise workflows. Rather than requiring a new assistant interface, it seeks to add an accountable decision before newly generated intelligence is consumed.

### Problem

Enterprise AI workflows accumulate repeated tasks: recurring classifications, document reviews, coding tasks, reports, support triage and evaluations. Existing infrastructure may route, cache, compress or batch calls effectively, yet still lack a reliable determination that a previous result is **currently sufficient for this exact obligation**.

A cached answer can be stale. A nearly identical prompt can refer to different authority or source data. A changed policy can invalidate yesterday's answer. Fresh inference might still be the correct decision.

### Intended experience

1. A developer or organization connects an authorized workflow.
2. Each request is evaluated under its project, source and policy boundaries.
3. When authorized deterministic work or valid previous computation is sufficient, the eligible result can be delivered without new inference.
4. If the work is novel, has changed, is uncertain or lacks adequate evidence, an approved model or other executor is considered.
5. A receipt makes the decision and measured use observable.
6. Where supported and validated, the completed result becomes reusable **Computational Capital** for future applicable requests.

This is an illustration of the **product design**, not an assertion that every stage is currently integrated for external customers.

## Eight customer-facing capabilities

| Capability | Customer value |
| --- | --- |
| Inference necessity | Ask if expensive intelligence is needed before spending it |
| Deterministic resolution | Let safe, conventional computation complete eligible obligations |
| Validated reuse | Avoid re-performing applicable previously completed work |
| Computational Capital | Treat eligible computation as a governed, reusable asset |
| Change-aware preservation | Retain unaffected work while invalidating changed dependencies |
| Minimum admissible intelligence | Use only an authorized, sufficient executor for unresolved work |
| Provider governance | Respect provider, budget, identity and policy choices |
| Decision accounting | Explain what happened, what was actually called and what is modeled |

These are **product capabilities and responsibilities**, not source-module interfaces or a disclosure of proprietary algorithms.

## Illustrative customer experience

An enterprise agent checks the same policy corpus every morning.

- On Monday, the relevant source is new: fresh model work is permitted under policy; its validated outcome may become reusable.
- On Tuesday, the relevant evidence and scope remain unchanged: if sufficiency is proven, the applicable previous result is used and unnecessary model execution is avoided.
- On Wednesday, a relevant policy changes: reuse of the affected conclusion is blocked; unaffected work can remain eligible.
- At every step, the system should distinguish recorded actual provider use from estimated avoided cost.

The economic benefit depends on repeated eligible work, evidence quality, source authority, provider prices and ANANKE's own overhead. It cannot be assumed in advance.

## Why this can matter

The long-term opportunity is not simply cheaper individual calls: it is lowering the **rate of genuinely new inference** relative to gross request volume without lowering utility, access control or safety. This could create a different unit-economics profile for repetitive AI-native businesses.

The opposite case matters just as much: a creative, high-ambiguity, safety-critical or rapidly changing workload may require fresh model work on nearly every request.

## Where the product stands

- **Research:** local-model and external-provider benchmark evidence exists.
- **Engineering:** scoped governance, Capital, control-plane, website and minimum-intelligence components have documented progress.
- **Current integrated product:** final native and customer-facing end-to-end acceptance is **unproven**.
- **Availability:** there is no public complete ANANKE engine, production service or generally available SaaS through this repository.

Continue: [Built and proven](BUILT_AND_PROVEN.md) · [Capabilities](CAPABILITY_STATUS.md) · [Use cases](USE_CASES.md) · [Evidence](../research/README.md).
