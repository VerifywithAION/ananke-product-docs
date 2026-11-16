# Token Reduction Lab — the experimental origin

Before ANANKE was framed as a unified product, the AION Token Reduction Lab investigated **whether reasoning that was already established needed to be generated again**.

## Recorded local-model measurements

| Experiment | Workload | Baseline model calls | Governed actual model calls | Baseline measured tokens | Governed measured tokens | Scope |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| EXP005F | 1,000 requests | 1,000 | **5** | 140,060 | **724** | Local Ollama, necessity eligibility |
| EXP025A_R5 | 500 requests | 500 | **20** | 70,650 | **2,836** | Controlled near-zero-call test |
| EXP025A_R9 | 1,000 tasks, 5 waves | 1,000 | **400** | — | — | Continuity/drift workload |
| EXP025A_R10 | 2,000 tasks, 10 waves | 2,000 | **465** | — | — | Multi-wave continuity workload |

Derived arithmetic from recorded baselines:

- **EXP005F:** 995 calls avoided on that workload; **193.45×** reduction in measured token count.
- **EXP025A_R5:** 480 calls avoided; **25×** reduction in calls and **24.91×** reduction in measured token count. Recorded utility pass rate: **1**; false reuse: **0** within test scope.
- **EXP025A_R9:** 600/1,000 calls avoided (**2.5×** fewer calls); recorded reuse declined between waves as the frozen knowledge became less applicable.
- **EXP025A_R10:** 1,535/2,000 calls avoided overall; final wave used **6/200 calls (3%)**. This 3% is the final wave's rate, **not** the whole 2,000-task average. Recorded utility pass rate: 1 and false reuse: 0 within scope.

A separate deterministic H3 family recorded **192/192 exact outputs**, with false suppression 0, for a narrowly eligible no-new-provider-computation case. It should not be misread as general natural-language performance.

## Measured execution versus shadow economics

The follow-up EXP006 translated local token reduction into a **shadow billing** illustration: under assumed comparable prices, a hypothetical $100 spend would scale to roughly **$0.5169** at the same ratio. EXP006 made **zero paid API calls**, and the documented price entries were unverified assumptions. This is **not** evidence of actual paid-cloud cost savings.

## What the lab taught us

Avoiding a model invocation can matter more than compressing its prompt. Yet avoiding an invocation safely requires answers to difficult questions: Which previous result is authoritative? What changed? Who may reuse it? When must fresh intelligence be admitted? What is the actual net cost after validation and storage?

Those unanswered product questions motivated ANANKE's Necessity Engine, Computational Capital, selective invalidation, provider governance and receipts.

## Interpretation boundaries

These are **local research workloads** with their own eligibility rules. Their ratios cannot be assumed for arbitrary enterprise traffic, frontier-model reasoning, multi-tenant deployments, or the unfinished integrated ANANKE native engine. Independent public raw-run replication is not available from this documentation repository.

Read: [Evaluation method](methodology.md) · [ANANKE's vision](../docs/vision.md).
