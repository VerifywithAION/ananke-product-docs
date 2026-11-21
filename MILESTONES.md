# ANANKE CC — Milestone ledger and completion path

**Created:** 2026-11-21 · **Governance:** public, documentation-only tracking · **State:** IN PROGRESS

**Single product goal:** Deliver an existing, canonical ANANKE system that preserves authorized workflows, decides whether fresh inference is necessary, admits the minimum sufficient executor when needed, creates independently validated Computational Capital (CC), reuses it safely, invalidates it on change, records real usage, and serves authenticated customers through the accepted API/Website. Then qualify and authorize an invite-only deployment at the intended ANANKE domain. This is not a new engine project.

This public ledger does **not** contain the private engine, exact internal security rules, provider keys, private repository paths or sensitive execution evidence. Private code/receipt bundles require a separately authorized **private** tracker and commit manifest. The public milestone does not certify private source integrity.

## Present baseline — do not rewrite history

| Evidence already recorded | Correct classification |
| --- | --- |
| HCR canonical historical closure | CLOSED / promoted within its frozen source-and-test scope |
| TRL EXP005F and EXP025A_R5/R10 | Measured bounded local Ollama research, not customer ROI |
| ANANKE × JEV A3 / B R1 | Real-provider bounded research PASS under their respective frozen contracts |
| Four-Arm R1 | Observed frontier-call reduction, **overall scientific economic FAIL** |
| R16D-P13P1 local Ollama distinct-request reuse | HISTORICAL QUALIFICATION_ONLY, not current product CC admission |
| 2026-11-20 local customer Website/BFF → Cloud/HCR → PostgreSQL scoped receipt/readback | CLOSED/PASS **LAB_ONLY deterministic**; no real Supabase identity or model-backed CC |
| 2026-11-21 current R14C M01 + real model-backed CC E2E | NOT PROVEN / fail-closed |
| Real Supabase browser customer acceptance | NOT VERIFIED |
| Net production CPU/GPU/energy reduction | NOT MEASURED |

See [dated baseline record](milestones/reports/2026-11-21-baseline.md), [STATUS](STATUS.md) and [CLAIMS](CLAIMS.md). No historical PASS is automatically transitive to another runtime or customer.

## Product gates — only these lead to launch

| ID | Delivery outcome and non-negotiable evidence | Initial state |
| --- | --- | --- |
| **E0** | Pin canonical source owners, current private Git roots/commits, clean isolated delivery worktrees and existing HCR/TRL/CC authority provenance; do not recreate closed components | OPEN |
| **E1** | One useful **genuinely model-necessary** workload, matched admissible deterministic baseline, source-owned non-leaking independent correctness check, scope/dependency/receipt contract | BLOCKED: no currently admissible workload |
| **E2** | Existing M01–M08 and Capital authority connected in **one actual current runtime**, without bypass or parallel implementation; focused security/regressions | OPEN, dependent on E1 |
| **E3** | **One linked native proof:** deterministic no-model path; real authorized model call A; separate CONTROL; validated CC issuance; distinct-request B without new call; source change selectively invalidates A but retains CONTROL; C recomputes; persistent receipts, exact model tokens, negatives and overhead | NOT PROVEN |
| **E4** | Real Supabase authenticated customer, active project, browser → BFF → Cloud/HCR → PostgreSQL → scoped receipt → truthful dashboard; BYOK and isolation/security controls in scope | NOT VERIFIED; historical LAB_ONLY evidence preserved |
| **E5** | Qualify actual Hostinger topology and plan for Next.js plus Python runtime/database/secret handling, staging HTTPS/DNS, backup/restore, ops/security and rollback; prove support for each service rather than assuming conventional shared hosting | NOT QUALIFIED |
| **E6** | Owner-reviewed private beta GO/NO-GO for intended ANANKE domain; smoke, monitoring, incident handling, customer experience, no unsupported claims, rollback, and explicit deployment/merge permission | NO-GO |

**No gate can be marked COMPLETE by a mock, a file existing, a test count alone or another gate's PASS.** E3 is the critical engine milestone. E4/E5/E6 are mandatory deployment gates. The intended domain is a release target, **not** a claim of domain ownership, configured DNS or a live Hostinger plan.

## Research breakthroughs — connected to the product

| ID | Important new result (not yet achieved) | Evidence required and product consequence |
| --- | --- | --- |
| **R1 — First real CC cycle** | One genuinely necessary model-derived answer validated independently, reused by distinct request and invalidated/recomputed correctly. **Same acceptance evidence as E3**, not a detached science-only PASS. |
| **R2 — Non-identical obligation reuse** | Correct validated Capital applies to related, meaningfully different requests under changed wording/evidence without exploiting exact repeats; blind independent quality and adversarial drift checks. Feed applicable result to existing M03/M04/M05; no new cache engine. |
| **R3 — Falling marginal inference** | Pre-registered multi-wave, changing workload; actual calls/tokens, quality, novelty, false reuse and false suppression per wave; compare to strong caching/routing baselines and disclose if the curve plateaus or reverses. Feed validated necessity/applicability adjustments through existing authority. |
| **R4 — Net economic win** | Matched workloads including strong prompt/context caching, semantic cache and small-model cascade where supported; all model/provider calls and bills, validator CPU, database I/O/storage, latency and operations. A *proposed* compelling threshold is ≥20% net cost benefit versus the strongest admissible baseline on ≥3 representative workloads; freeze exact threshold, sample and error bars **before** running. A negative result remains FAIL. |
| **R5 — Physical resource win** | Directly instrument local/model-side CPU time, GPU time, memory, energy where measurement is technically possible; include ANANKE overhead and compare equivalent quality/workloads. Only measured net benefit allows physical-resource claims. |
| **R6 — Independent replication** | A separate operator/environment reproduces a frozen R2–R5 result without private-truth leakage, with pinned artifacts and unchanged pass thresholds; then authorize any broader claims. |

**Stretch research target:** a mature-workflow fresh-inference fraction of 10^-5 and 10^-6 where safe, per ANANKE's North Star. These are *not achieved* and must **not** block a narrow, honest first beta. A research result counts as a product capability only after its validated output traverses the current existing engine and evidence/authority path.

## How milestones become sealed

See [Milestone protocol](milestones/PROTOCOL.md) and [report template](milestones/REPORT_TEMPLATE.md).

A gate's status goes from `OPEN` / `BLOCKED` → `QUALIFIED_FOR_EXECUTION` → `EVIDENCE_SUBMITTED` → `ACCEPTED_IN_SCOPE` only when the original frozen predicate, observed run, security negatives, matched baseline, primary receipt/evidence digests and owner review support it. Any broader promotion needs a separate accepted PR/release decision. **Never overwrite a FAIL.** Each sealed result receives its own dated append-only report and a reviewed Git commit or tag; the private evidence packet remains private.

## Navigation and ownership

- [Milestone protocol and update rules](milestones/PROTOCOL.md)
- [Dated evidence baseline](milestones/reports/2026-11-21-baseline.md)
- [Reusable milestone evidence template](milestones/REPORT_TEMPLATE.md)
- [Hostinger/domain release gate](milestones/HOSTINGER_RELEASE_GATE.md)
- [Current public readiness](STATUS.md) / [existing roadmap](ROADMAP.md) / [claim policy](CLAIMS.md)
- Private source and deploy authority remain outside this public docs repository. The technical Git worktrees and immutable cross-repository SHAs must be recorded privately before code integration or publication.
