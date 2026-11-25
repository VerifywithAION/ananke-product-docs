# ANANKE | Local owner-trust and credential rotation milestone — 25 November 2026

**Evidence level:** owner-reported real Windows-host execution and private-runtime readback, supplemented by focused offline security tests. This is a **contained local engineering candidate**, not an independent security assessment or commercial product acceptance.

> The existing enrolled local owner completed an explicitly consented **credential rotation with COMMITTED status**. A later readback verified the committed authorization/audit records and zero pending rotations. The existing local owner identity and signing registration were preserved.

## Qualities demonstrated within the local candidate

| Quality | Recorded evidence | Limit |
| --- | --- | --- |
| **Local trust continuity** | The active local owner remained enrolled, with its existing signing identity preserved, while a previous unsuccessful owner identity remained revoked. | Not customer onboarding or production identity infrastructure. |
| **Cryptographic verification** | Earlier real signing with a software-backed, non-exportable Windows key was independently verified. | Not hardware-backed/HSM; not cryptographic certification. |
| **Scope and revocation enforcement** | Bounded negative tests rejected altered content, wrong key/scope and revoked signing registration. | Does not imply resistance to every attack. |
| **Least-privilege authorization** | Earlier restricted product-operator issuance, permission verification and durable revocation were reported. | **No post-rotation product operator has been issued or verified.** |
| **Owner-controlled credential rotation** | Actual owner consent was accepted; COMMITTED state and subsequent authorization/audit readback were recorded. | **Post-rotation authentication of the new owner credential remains unproven.** |
| **Auditable recovery lifecycle** | The previous expired rotation remained failed; the new rotation committed with no pending challenge. | One candidate workflow, not production disaster-recovery qualification. |

The supported public conclusion is **local demonstration of scoped trust, verified signing, bounded access denials, prior operator authorization/revocation, and auditable owner credential continuity**. No implementation code, private credentials, security topology or proprietary contracts are disclosed here.

## Explicitly not yet demonstrated

- Authentication of the newly rotated owner credential using the actual control plane; the separate Codex process could not inspect the protected Windows custody.
- Authorized canonical source events, product-grade SQL eligibility, live provider certification, native PostgreSQL lifecycle or admission of model-backed Computational Capital.
- A / CONTROL / B / CHANGE / C reuse and invalidation with measured **net** savings.
- Customer application-to-engine-to-receipt acceptance, third-party security audit, external beta or production readiness.

**Product and external beta: NO-GO.** This milestone is not evidence of customer revenue, universal token savings, hardware security certification, independent reproducibility or product launch.

**Provenance:** private owner-supplied Windows-host transcript and follow-up readbacks dated 25 November 2026. These have not been independently reproduced from this public documentation-only repository.

Related: [Current status](../STATUS.md) · [Responsible claims](../CLAIMS.md) · [Capability maturity](../atlas/CAPABILITY_STATUS.md) · [Previous checkpoint](integration-checkpoint-2026-11-24.md).
