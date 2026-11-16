# How ANANKE is designed to work

The intended product is a *single governed execution loop*. The eight named mechanisms are responsibilities within that loop, not eight products or selectable laboratory modes.

```mermaid
sequenceDiagram
    participant App as Existing app / agent
    participant Gov as ANANKE governance
    participant Cap as Validated Capital
    participant Exec as Authorized executor
    participant Led as Receipt / accounting
    App->>Gov: Request with authenticated scope
    Gov->>Gov: Necessity and source applicability
    alt Work is independently resolvable
        Gov->>Cap: Validate evidence, dependencies, policy
        Cap-->>Gov: Eligible output or reason not eligible
    else Novel or changed work
        Gov->>Gov: Minimum admissible intelligence decision
        Gov->>Exec: Execute only if provider and budget admitted
        Exec-->>Gov: New result and usage measurements
    end
    Gov->>Gov: Validate outcome; determine future applicability
    Gov->>Led: Persist governed decision and linked evidence
    Gov-->>App: Result, refusal, or escalation with receipt
```

*Illustrative interaction sequence. Operational contracts and implementation details are intentionally not published.*

## Decision lifecycle

**1. Identity and scope.** Determine which authenticated person or application, tenant, project and policy apply. Request metadata alone does not grant authority.

**2. Necessity.** Check whether the obligation needs fresh intelligence. This can result in a deterministic resolution, eligible replay, recomputation, or governed refusal.

**3. Eligibility and applicability.** Before returning a prior result, validate its lineage, dependencies, source authority, relevant revisions, current applicability and policy scope. Missing proof does not become a reuse success.

**4. Minimum admissible intelligence.** If recomputation is required, evaluate actual available executors against capability, accuracy/sufficiency requirements, policy, budget and safety. The current isolated local candidate has only a local Ollama execution tier qualified offline—not a production-proven multi-provider optimizer.

**5. Provider execution.** Admit only authorized inference. Reject disabled providers, exhausted budgets, kill-switch conditions and unsupported routes; do not silently fall back to an unapproved model.

**6. Validation, receipts and Capital.** Preserve the new decision and usage data; admit reusable computation only when it meets its separate validation and applicability conditions.

**7. Changes and selective invalidation.** When source A changes, dependent assets can become ineligible while independently valid assets from source CONTROL remain available. This selective property must be demonstrated through real source-state and Capital readback, not a manually marked flag.

## Mechanism map

| ID | What it decides | A necessary counterexample |
| --- | --- | --- |
| M01 | Does this request truly need inference? | Novelty must not be suppressed |
| M02 | Can deterministic work satisfy it? | Unsupported deterministic route must not fabricate an answer |
| M03 | Is a prior result still eligible? | Different request IDs must not bypass scope checks |
| M04 | Has previous work earned Capital status? | Similarity cannot mint authority |
| M05 | What changed and what should be invalidated? | Unrelated Capital should survive a localized change |
| M06 | Which available tier is sufficient and admissible? | Inadequate or disabled model must not be selected |
| M07 | May this provider execute? | Kill switch and budget must deny dispatch |
| M08 | Can all decisions and cost be reconciled? | Missing receipts must not count as measured savings |

This document describes the desired **full product contract**. For which parts have actually passed component and native tests, consult [STATUS.md](../STATUS.md).
