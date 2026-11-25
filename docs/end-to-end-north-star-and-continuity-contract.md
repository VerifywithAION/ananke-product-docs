# ANANKE — Permanent Product North Star and Unified E2E Acceptance Contract

**Public edition · 25 November 2026.** This is a product contract, not a claim of current end-to-end acceptance or a publication of private implementation.

> **Mission:** A user keeps the existing prompts, models and workflow, brings an authorized provider key (BYOK), and sends an ordinary request through ANANKE. ANANKE authenticates and governs the request, decides whether fresh inference is necessary, uses valid deterministic resolution or evidence-backed Computational Capital when permitted, otherwise invokes the user's authorized provider, then returns the validated response with persistent receipts proving what actually ran or was safely avoided.

## One integrated runtime, not isolated subsystems

```text
Existing user workflow / application / agent / SDK / Website
          │ normal prompt + authorized BYOK
          ▼
ANANKE real customer API / gateway / BFF entrypoint
          │ identity, project/tenant permissions and trace ID
          ▼
Cloud / canonical HCR necessity, safety and governance
          ├─ deterministic resolution (when justified)
          ├─ authorized, source-valid Computational Capital reuse
          ├─ authorized model execution if fresh intelligence needed
          └─ safe denial if authorization or proof is insufficient
          │ validated answer, source/freshness/authority, usage
          ▼
Persistent Cloud/DB receipt, provable request correlation
          ▼
Same customer entrypoint + customer-scoped dashboard
```

**Acceptance is not allowed to stop at ANANKE CC, an EngineOnly demonstration, a model adapter, or an isolated customer dashboard.** Each eligible mechanism must be wired into the same authoritative candidate path, and all required source, security and usage evidence must survive through the user-facing receipt. Not all branches run on each request; conditionally invoked mechanisms must be tested through appropriate scenarios.

ANANKE is not merely semantic caching, prompt compression or model routing. It is designed to govern the **necessity of fresh intelligence** while preserving quality, authority, validity and evidence.

## Necessary mechanisms

| Capability | Required integrated outcome |
| --- | --- |
| Necessity | Determine whether a fresh model call is justified. |
| Deterministic resolution | Correctly answer some tasks with no model, without falsely issuing model-backed Capital. |
| Validated reuse | Second authorized request can reuse eligible verified work under unchanged authority. |
| Computational Capital | Admit reusable computation only after sufficient genuine execution, validation and provenance. |
| Source changes and drift | Invalidate affected work and preserve unrelated valid work. |
| Minimum sufficient intelligence | Make an actual authorized model-selection/escalation decision when needed. |
| BYOK execution | Respect the user's provider, scopes, limits, custody and denial boundaries. |
| Proof and economics | Reconcile actual model calls and tokens, quality, latency, governance overhead, receipts and net economics. |
| Customer product | Return answer and real scoped receipt to the original entrypoint and dashboard. |
| Reliability and security | Test cross-tenant rejection, replay, revocation, expiry, interruption and persistence. |

A subsystem is **INTEGRATED**, **CONDITIONALLY INVOKED**, **OUT OF SCOPE** or **BLOCKED**, with evidence. Build on existing private HCR and Cloud; do not create a parallel demonstration engine simply to claim a passing end-to-end path.

## Acceptance scenarios that must actually execute

1. **A — Novel task:** authorized provider inference with an observed response and actual token/call usage.
2. **B — Eligible second request:** correct reuse of validated Capital with a distinct request ID and the same applicable rights.
3. **CHANGE / C — Source mutation:** only affected Capital becomes ineligible; safe recomputation and unaffected control remain correct.
4. **Denied request:** wrong tenant, project, revoked identity or source authority triggers a refusal before unsafe execution/reuse.
5. **Real product readback:** the response, original request identity, authoritative receipt and measured usage can be retrieved by the legitimate customer through the same application/dashboard.

Also exercise a legitimate deterministic, no-model scenario. The frozen native **A / CONTROL / B / CHANGE / C** protocol must retain its original preregistered definitions, correctness thresholds and matched baseline. Never move thresholds after observing results or replace a required live provider with mocks.

## Separate proof gates

**LOCAL_ENGINE_E2E:** genuine source authorization, model, native persistence, validated issuance/reuse/invalidation and receipts in one current candidate.

**FULL_BYOK_ENTRYPOINT_E2E:** a normal authorized customer request traverses the actual existing gateway/app, **same** governed engine and persistent receipt, then returns the real answer and corresponding dashboard data.

**NET_ECONOMIC_ACCEPTANCE:** matched baseline with actual calls/tokens and transparently calculated costs, including all governance and retry overhead, preserving quality. Fewer calls alone do not guarantee net savings.

**EXTERNAL_BETA / PRODUCTION:** separate independently qualified security, operational, customer, deployment and explicit release gates. Local E2E success does not establish either.

## Evidence boundaries (25 November 2026)

**Historical, bounded model-backed research:** local Ollama EXP005F recorded calls 1,000→5 and tokens 140,060→724; EXP025A_R5 recorded calls 500→20 and tokens 70,650→2,836. These workloads do **not** establish universal or current customer savings.

**Negative result:** the separate Four-Arm R1 achieved some call reductions but **failed its overall preregistered economic criterion**. This result remains part of the public evidence.

**Actual recent local security milestone:** owner-reported real Windows-host execution committed an explicitly consented credential rotation with authorization/audit readback and preserved signing identity. That does **not** yet establish successful post-rotation authentication or a new operator session; see the [dated milestone](local-trust-owner-rotation-milestone-2026-11-25.md).

**Not yet proven in a single current runtime:** real customer BYOK end-to-end, source-authorized model-backed Capital and reuse/change safety, native integrated provider accounting, net economics and external product readiness.

> **Current verdict: external beta and production remain NO-GO.**

## Permanent anti-drift rule

After each genuinely verifiable milestone, update [STATUS](../STATUS.md), relevant [claims](../CLAIMS.md), and a dated evidence note. Preserve FAIL, BLOCKED and uncertainty. The detailed operational continuity handoff remains in controlled project documentation, not this public repository. Never disclose source code of the private engine, internal security implementation, credentials, local paths or identifiers in public docs. A public update requires an actual authorized GitHub write; this text cannot autonomously sync itself.

**Final success:** the user's real BYOK prompt enters the complete governed system, obtains the correct response with the proper amount of fresh inference, and produces auditable evidence of model use, legitimate reuse, safety and any measured net economic advantage.

[Public status](../STATUS.md) · [Roadmap](../ROADMAP.md) · [Responsible claims](../CLAIMS.md) · [Capability maturity](../atlas/CAPABILITY_STATUS.md).
