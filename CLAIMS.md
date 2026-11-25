# Responsible claims and non-claims

This document controls how to read public statements in this repository. When a marketing-friendly statement conflicts with a more specific evidence boundary, **the narrower evidence boundary prevails**.

## Supported, carefully scoped statements

- ANANKE is a research/product effort aimed at governing when AI inference is necessary, when prior verified computation can be reused, and when additional intelligence must be admitted.
- Local Ollama experiments **EXP005F** and **EXP025A_R5** recorded substantial token and call reductions on their own defined workloads.
- ANANKE × JEV study A3 passed its frozen bounded semantic-decision contract with fewer JEV invocations after upstream resolution.
- JEV B R1 passed its specified bounded Stage-1 decision/escalation benchmark.
- Four-Arm R1 showed correct outputs and reduced frontier calls, calculated provider cost and median latency on its matched benchmark **while failing the overall preregistered economic acceptance**.
- M06's local candidate policy passed focused offline regression tests. Unified native M01–M08 product acceptance has **not** passed as of the date of this release.

## 24 November integration claim boundary

The reported **65/65 offline regression**, **11/11 routing** and **5/5 independent SQL multi-dataset checker** results are scoped candidate tests, **not** native model-backed Capital, verified model necessity, current customer economic savings or end-to-end M01–M08 acceptance. Recovered source, security and Capital components remain reusable engineering material, not a live customer deliverable. See the [dated integration checkpoint](docs/integration-checkpoint-2026-11-24.md).

## 25 November 2026 — local trust and rotation claim boundary

Owner-provided Windows-host evidence reports a real, explicitly consented **COMMITTED** local owner-credential rotation with follow-up authorization/audit readback. Separate earlier scoped evidence covers independent real-signature verification, negative key/scope/revocation checks and restricted operator authorization followed by revocation. We can describe **bounded local trust, cryptographic verification and auditable credential continuity**, but not a security certification, a newly authenticated post-rotation owner, a newly issued operator, hardware-backed custody, native Capital acceptance or customer savings. [Details](docs/local-trust-owner-rotation-milestone-2026-11-25.md).

## Claims we explicitly do not make

- Universal 90%, 99%, 100× or 1,000× savings for arbitrary tasks or customers.
- Any proven reduction in physical GPU energy, electricity use or data-center emissions.
- Replacement of general reasoning with JEV or any bounded model.
- Universal zero false reuse or false suppression beyond sampled tests.
- Live JEV/Claude/frontier integration into the **current unified local candidate** merely because experiments used those providers.
- Customer-ready private beta, production launch, hosted SLA, security certification or available public install.
- Reproducible scientific validation from this documentation-only repository alone.
- Exclusive invention of semantic caching, model routing, conditional execution or provenance.
- Legal patentability, freedom to operate, or public licensing of a private engine.

## Evidence status labels

**MEASURED:** actual provider/host observation under stated conditions.  
**OFFLINE PASS:** executable test of a component/contract without full native execution.  
**CALCULATED:** based on a price or other disclosed formula.  
**ESTIMATED:** projected work that did not occur.  
**NOT PROVEN:** missing end-to-end evidence.  
**FAIL:** a frozen evaluation or gate did not satisfy its acceptance contract.

See [research methodology](research/methodology.md) and [STATUS.md](STATUS.md).
