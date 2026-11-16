# Governance, security and trust model

ANANKE treats **the right to reuse or suppress inference as an authority decision**. This is why it is designed as more than a caching or routing layer.

## Trust principles

- **Separation of duties.** Necessity, prior-result validation, provider execution and evidence issuance must not silently collapse into one unchecked model output.
- **Tenant and project isolation.** A successful result in one scope does not grant permission to reuse it elsewhere.
- **Provider choice under explicit authorization.** Budget, availability, allowed executors and emergency kill switches can deny a dispatch.
- **Source provenance and drift.** A reused result must continue to refer to applicable, authorized source states.
- **Fail-closed behavior.** Missing required proof, identity, source authority or provider eligibility must not become an implicit approval.
- **No model-created governance authority.** Model output can be useful evidence, but it cannot unilaterally certify its own future reuse privileges.
- **Honest telemetry.** A simulated, estimated or contrafactual avoided call is not the same as an observed model dispatch.

## Credential-handling direction

The local hosted-product workstream includes encrypted provider-credential handling, explicit project activation and boundaries intended to keep long-lived provider secrets away from browser-side storage. These mechanisms have previously passed local-focused qualification. **They are not a declaration of production-grade security certification**, and this repository intentionally omits implementation details, cryptographic material and internal credentials.

## What a defensible receipt should communicate

The human-facing view should answer:

- Did the request require fresh inference?
- Which authorized capability was used—or why was the request refused?
- Was a validated previous result reused?
- Which source/policy state justified the decision?
- How many actual provider calls and tokens were observed?
- Is any reported savings number measured, estimated or modeled?

A more technical audit may show signed or otherwise protected provenance where supported, but public-facing documentation deliberately provides no exploitable authority or credential implementation detail.

## Security reporting

See [SECURITY.md](../SECURITY.md). No public bug bounty, responsible disclosure mailbox or formal SLA is claimed here.
