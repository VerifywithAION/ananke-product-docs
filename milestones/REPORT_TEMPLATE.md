# ANANKE CC — Milestone acceptance and sealed report template

> Copy this entire file into a **new** `milestones/reports/YYYY-MM-DD-<ID>-<name>.md` for each independent milestone. Do not mark `ACCEPTED_IN_SCOPE` unless the original pre-registered gate passed. This document is a template, **not evidence**.

# <Milestone ID> — <Milestone title>

- **Milestone:** `E0..E6` or `R1..R6`
- **Evidence cutoff (UTC):** `NOT_RECORDED`
- **Gate state:** `OPEN | BLOCKED | QUALIFIED_FOR_EXECUTION | EVIDENCE_SUBMITTED | ACCEPTED_IN_SCOPE | SUPERSEDED`
- **Scientific verdict, if applicable:** `PASS | FAIL | INCONCLUSIVE | NOT_RUN`
- **Accepted claim level:** `HISTORICAL | OFFLINE_COMPONENT | LOCAL_MODEL_MEASURED | REAL_PROVIDER_MEASURED | LAB_ONLY_INTEGRATED | ENGINE_E2E | REAL_CUSTOMER_LOCAL | STAGING | BETA`
- **Public/private boundary:** `PUBLIC_SUMMARY_ONLY`
- **Prior accepted milestone:** <exact link/version>
- **Owner and independent reviewer:** <actual approval; never invent>
- **Linked PR / review:** <GitHub URL if accepted>

## Machine-readable accepted-report fields (required only when truly accepted)

Copy the actual values below into the final dated report **after** reviewing primary evidence. The structural CI rejects missing/placeholder fields when a milestone's `state.json` status becomes `ACCEPTED_IN_SCOPE`. This block is NOT an approval, signature, or scientific check.

```text
MILESTONE_ID=NOT_APPROVED
ORIGINAL_VERDICT=NOT_RUN
PRIMARY_RUN_ID=NOT_RUN
PRIMARY_EVIDENCE_SHA256=NOT_VERIFIED
OWNER_REVIEW=NOT_APPROVED
ACCEPTED_IN_SCOPE=NO
```

## 1. Original frozen acceptance requirement

Describe the obligation, workload/target population, permitted models and budgets, control groups, comparison baseline, success/failure thresholds, quality/safety bounds, and exact preregistered contract version. If registered only after execution, mark `POST_HOC` and do not label a prospective trial.

## 2. Actual source, environment and evidence

- Source release tag / pinned commit(s): `NOT_VERIFIED`
- Workload / oracle / policy version and digest: `NOT_VERIFIED`
- Model/provider and model digest: `NOT_APPLICABLE`
- Observed execution environment / isolation: `NOT_VERIFIED`
- Raw run ID and evidence archive digest: `NOT_VERIFIED`
- Provider receipt identity and response integrity: `NOT_VERIFIED`
- Independent adjudication and test result: `NOT_RUN`
- Security negatives and tenant/project isolation: `NOT_RUN`
- Evidence location: <non-sensitive reference; private files remain private>

## 3. Measured comparison

| Metric | Baseline | Governed ANANKE | Evidence type |
| --- | ---: | ---: | --- |
| Task count and utility/quality | NOT_MEASURED | NOT_MEASURED | |
| All provider calls by model/tier including retries | NOT_MEASURED | NOT_MEASURED | |
| Input/output/cached/reasoning tokens where available | NOT_MEASURED | NOT_MEASURED | |
| True reuse / false reuse / false suppression | NOT_MEASURED | NOT_MEASURED | |
| Duration/p50/p95 latency | NOT_MEASURED | NOT_MEASURED | |
| Direct paid cost and comparable price assumptions | NOT_MEASURED | NOT_MEASURED | |
| Validator/database/network/storage/CPU overhead | NOT_MEASURED | NOT_MEASURED | |
| GPU time and energy | NOT_MEASURED | NOT_MEASURED | |
| **Net benefit** | NOT_MEASURED | NOT_MEASURED | |

**Important:** A provider call avoided is not necessarily net cost, CPU, GPU or energy avoided.

## 4. Original verdict and negative controls

- Original verdict: `NOT_RUN`
- Focused checks PASS/FAIL/SKIP: `NOT_RUN`
- Unauthorized reuse / wrong answer / stale / cross-scope / provenance spoof: `NOT_RUN`
- No-leakage assurance: `NOT_VERIFIED`
- Contradictory or adverse observations: <preserve even after later repair>
- Explicit non-claims / generalization boundary: <required>
- Overall conclusion in one sentence: <required>

## 5. Sealing and product consequence

- Acceptance report git commit SHA: `NOT_CREATED`
- Actual signed tag verification (if any): `NOT_SIGNED`
- Private raw evidence SHA-256 externally reconciled: `NOT_VERIFIED`
- Actual owner approval time/identity: `NOT_APPROVED`
- Accepted in scope: **NO**
- The canonical runtime/API/product capability this result advanced: <exact accepted action, or NONE>
- Earliest remaining product gate: <ID>
- Next *one* implementation action or precise owner decision: <text>

**Preserve this result append-only.** If later evidence changes the adjudication, create an amendment referring to the original commit/digest rather than overwriting it.
