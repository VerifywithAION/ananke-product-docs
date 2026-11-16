# Developer integration: a conceptual guide

ANANKE is intended to sit between an application and permitted intelligence executors. The goal is to **retain the developer's existing user-facing product** while adding a governed pre-inference decision and auditable receipts.

## Conceptual stages

```text
Application or agent
  -> authenticated project context
  -> ANANKE governed request
  -> necessity and applicability evaluation
  -> validated zero-inference result OR admitted fresh execution
  -> recorded decision and evidence
  -> application receives outcome
```

The conceptual sequence is **not** a runnable SDK example and does not disclose private source or unreleased API contracts.

## Integration expectations

| Concern | Product intent |
| --- | --- |
| API contracts | Stable public data-plane operations, separated from hosted administrative controls |
| Credentials | Provider credentials controlled within authenticated project scope |
| Dispatch | No model invocation without applicable governance decisions |
| Responses | Explicit resolution, refusal or escalation with receipt linkage |
| Retries | Must not bypass budgets or admission rules |
| Capital | Reusable work must be validated and remain applicable |
| Observability | Real calls/tokens, safe reuse, false suppression and governance overhead |

## Why this repository contains no code samples

The ANANKE private engine and its current isolated integration candidate are not being released as source. We deliberately avoid publishing implementation-level contracts, private request envelopes, configuration details or implied production-ready SDK examples. Public installation instructions and authenticated integration examples should be released only once the external API, security posture and customer acceptance are approved.

## Interested in integration?

Use this documentation to evaluate the approach, [research records](../research/README.md) and [current status](../STATUS.md). A public-ready developer onboarding release is a roadmap item, not a currently supported promise.
