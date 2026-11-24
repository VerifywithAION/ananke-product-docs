# Capability maturity matrix

Readers should distinguish between **an intended customer-facing capability**, **a bounded result**, and **a qualified integrated commercial product**.

| Product responsibility | Product intent | What is documented today | Current maturity |
| --- | --- | --- | --- |
| Necessity decision | Determine whether new intelligence is necessary | Controlled necessity/reuse experiments; local component work | Research + components |
| Deterministic resolution | Resolve supported tasks without invoking a model | Multiple scoped deterministic and offline tests | Bounded candidate |
| Validated reuse | Reapply eligible previous computation only within its authority | Controlled reuse and Capital qualification work | Bounded candidate |
| Computational Capital | Retain evidence-backed results for later eligible requests | Component validation and source applicability work | **Model-backed customer E2E pending** |
| Selective invalidation | Recompute affected work, preserve unaffected work | Scoped change-safety/temporal evidence | Integration pending |
| Minimum intelligence | Dispatch suitable unresolved work to authorized, sufficient executor | M06 local v0.1 offline 47/47; external specialized studies separate | One-tier offline candidate |
| Provider governance | Enforce project, identity, credential and policy boundaries | Local control-plane and focused security work | Integrating |
| Accounting and receipts | Explain real provider calls, tokens and safe reuse | Historical receipt/customer UX and accounting fields | **Live customer reconciliation pending** |
| Website/product interface | Configure projects, providers, requests and dashboards | Built and historically exercised local interfaces | Current product E2E pending |
| Public installation/SDK | Provide supported stable integration to external developers | Documentation only | **Not released** |
| Hosted beta/enterprise SLA | Operate a secure production service | No qualifying external release record | **Not available** |

## Current candidate engineering update · 24 November

- **Read-only SQL:** opt-in normalization, independent multi-dataset checker and runner integrated offline; protected product-level eligibility not yet accepted.
- **Preserved implementation:** Capital applicability/registry, source governance and custody components recovered; no duplicate full engine or bootstrap required for these existing mechanisms.
- **Validation scope:** 65/65 offline regressions, 11/11 runner/routing, 5/5 bootstrap boundary tests (separate reported suites), not native product acceptance.
- **Live acceptance:** actual authorized model-backed Capital, safe reuse/change/recompute, verified provider accounting and current customer path still unproven.

[Detailed 24 November evidence](../docs/integration-checkpoint-2026-11-24.md).

## Evidence vocabulary

- **MEASURED:** the stated task actually executed with an observed model/provider under recorded conditions.
- **OFFLINE PASS:** a bounded test contract passed without proving complete live execution.
- **HISTORICAL LOCAL PASS:** an earlier candidate worked under its specified local acceptance; not a certification of today's entire product.
- **NOT PROVEN:** the evidence for that particular product claim is still missing.
- **FAIL:** a defined acceptance gate or preregistered criterion was not met.
- **ROADMAP:** work intended or conditional; no release date promised.

## Current critical path

1. Qualify a legitimate, scoped local customer request through the existing project and customer authority path.
2. Prove end-to-end requests and receipt/dashboard readback against authoritative persistent state.
3. Prove one justified fresh-model execution and legitimate model-backed Capital across separate eligible and invalidated requests.
4. Reconcile real tokens, calls, quality, latency and total net compute/provider economics.
5. Complete external operational/security/customer deployment gates before private beta.

The active November 20 record does **not** establish that customer identity proof has actually been issued/consumed, nor that the complete current customer flow ran. It also does **not** establish real customer production savings. See [STATUS](../STATUS.md) and [roadmap](../ROADMAP.md).

## Claim discipline

This page intentionally exposes **no source-code details, schemas, security implementation, internal paths or deployment contracts**. Research numbers do not establish commercial ROI. No source-code license or downloadable engine is offered in this repository.
