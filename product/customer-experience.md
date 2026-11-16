# What a customer should experience

The end product should fit into existing systems without forcing everyone to adopt a new chatbot or provider. ANANKE is conceived as a **governed decision and inference layer**; its control interface explains and configures the behavior.

## Journey 1: an operations team

**Scenario:** An organization repeatedly classifies incoming service requests against periodically updated policies.

1. A developer integrates ANANKE into the organization's existing request flow.
2. An authorized admin creates and activates a project, with any supported provider credentials protected by the control plane.
3. The first qualifying novel request may require inference; ANANKE records the policy decision and subsequent validation outcome.
4. Later eligible requests can use defensible prior computation without another model invocation.
5. A policy change invalidates affected decisions. Unrelated verified work remains eligible where the evidence supports it.
6. The team sees outcomes, explicit refusals, real usage and inspectable receipts.

**Value:** potential lower provider spend and latency for repeatable obligations; traceability about when model calls were saved or were necessary. **Not a guarantee:** an unstructured or rapidly changing workflow may not benefit.

## Journey 2: a coding or research agent

An agent might repeatedly inspect the same repository version, dependency document or structured fact. ANANKE's proposed role is to preserve only authority-bound conclusions and require fresh inspection when the relevant source changes. That can reduce redundant analysis while maintaining a clear boundary between prior validated facts and fresh uncertainty.

**Important limitation:** The research does not establish that arbitrary agent reasoning can safely be replayed or avoided. Context, code version and safety obligations matter.

## Journey 3: a compliance-conscious organization

A team wants evidence for *why* the system reused a decision, not merely a cost-savings widget. The proposed product makes policy, source state, provider admission and receipt identity accessible under a human-friendly interface, with audit details available separately.

## Intended interface surfaces

- **Project settings:** authenticated scope and explicit activation.
- **Providers:** configured capabilities, status, budgets and safety controls.
- **Requests:** result, refusal or escalation, with a human-readable reason.
- **Receipts:** the auditable decision trail.
- **Reusable knowledge:** eligible, validated past work—distinct from generic chat history.
- **Usage:** real model calls and token measurements separate from estimates.

The September 2026 local CP1 customer journey previously passed a focused integration gate. That historical milestone **does not certify** the latest November 2026 unified M01–M08 engine or a production deployment. See [STATUS.md](../STATUS.md).
