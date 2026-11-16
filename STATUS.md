# Current product status

**As of 2026-11-16.** This page distinguishes **historical research results**, **offline candidate validation**, and **complete live product acceptance**. The latest owner-provided native-session evidence was evaluated as an interrupted acceptance attempt, **not** a completed M01–M08 run.

## At a glance

| Workstream | Reported evidence | Publication-safe status |
| --- | --- | --- |
| Token Reduction Lab | Multiple local model-backed controlled experiments | **Measured research results** |
| ANANKE × JEV A3 and B R1 | Real external-provider bounded experiments | **Scoped experimental PASS** |
| Four-Arm R1 | Four matched provider arms, 240 cases each | **Economic preregistration FAIL**; positive scoped utility evidence |
| HCR / Capital mechanisms | Prior deterministic and security-focused qualification | **Component evidence; not a unified live product PASS** |
| M06 local minimum-intelligence policy v0.1 | 47/47 focused + affected offline regressions PASS | **Offline candidate PASS**; one configured local Ollama tier |
| Local historical website/control-plane flow | Earlier customer-journey-focused integration PASS | **Prior local milestone**, not current full engine proof |
| Unified native M01–M08 (current candidate) | One isolated native attempt reached PostgreSQL, then stopped at a strict process-identity gate; the predicate was subsequently corrected and passed offline regression | **NOT PROVEN; native rerun pending** |
| Current Website/BFF → full native engine | No complete acceptance with M01–M08 evidence | **NOT PROVEN** |
| Private beta / production | Integrated and security/release gates pending | **NO-GO / not available** |

## What the interrupted native session means

On 2026-11-16, the isolated acceptance attempt created an ephemeral PostgreSQL dataset, started PostgreSQL 17.4, and observed a healthy loopback listener. It then **stopped before completing Genesis, Enterprise, live Capital/Model workflows or M01–M08** because a strict PostgreSQL process/data-directory ownership predicate did not accept the observed identity.

The recorded database process then shut down; the full cleanup acceptance was not certified. Follow-up engineering identified a Windows path-format comparison defect in the process/data-directory verifier and corrected it without removing its ownership checks. **Seven of seven focused owner checks passed offline; additional Capital post-cleanup regressions also passed.** The corrected predicate has not yet been retested during a new native session. Thus the interrupted attempt remains **FAIL-CLOSED** and full M01–M08 acceptance remains **NOT PROVEN**.

No raw logs, ports, process identifiers, filenames, secrets, forensic directory structures or security-check implementation details are disclosed here.

## Definition of a product-level PASS

A future acceptance record must show one authenticated local execution path that proves M01–M08 together, legitimate independent source authority, validated Capital issuance and reuse, selective invalidation, prior-valid-result preservation, real provider admissions and denials, actual model-call and token telemetry, authoritative receipts, independent database readback, credential revocation and task-owned cleanup.

Only **after** that, the existing customer Website/BFF must be tested against the same engine. Neither step authorizes an external production deployment on its own.

## Status language

There is **no public general availability claim** and no downloadable engine in this repo. Historical lab reductions and provider studies should not be presented as the current integrated product's production savings.

This status page should be updated only against new evidence, not aspirations.
