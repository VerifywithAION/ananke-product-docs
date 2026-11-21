# ANANKE CC — Hostinger/domain deployment acceptance

**State: NOT_QUALIFIED / NO DEPLOYMENT AUTHORIZED.** The intended ANANKE CC domain is not asserted to be purchased, controlled or configured. This document is a release gate, **not** a hosting architecture decision or a deployment instruction.

## Technical constraint (Hostinger official support, checked 2026-11-21)

Hostinger documents managed Node.js support for selected Web/Cloud plans and VPS. Its current [language support guidance](https://www.hostinger.com/support/which-programming-languages-and-frameworks-are-supported-at-hostinger/) says Python server applications require **VPS**, because Web/Cloud hosting does not provide the needed root access. Hostinger separately describes [Node.js hosting options](https://www.hostinger.com/support/node-js-hosting-options-at-hostinger/). The fact Next.js can deploy on a plan does **not** establish that ANANKE's Python Cloud/HCR, durable jobs, PostgreSQL and runtime controls will work on that same plan.

**Possible topologies to qualify, not preapproved:**
- Hostinger VPS for the compatible application services plus a properly qualified database/secrets model;
- Hostinger supported Next.js frontend paired with a distinct, secured approved Python backend and PostgreSQL provider;
- Any other owner-approved topology only if service contracts, identity, persistence, tenancy, performance and recovery pass.

Do **not** promise GPU inference or local Ollama on a standard Hostinger plan. A BYOK external provider architecture still must prove secure provider reachability and exact accounting.

## Release phases

- [ ] **H0 — Inventory:** Verify owner's exact purchased plan, ability to operate Python 3.x/API process, Node/Next.js SSR/API, PostgreSQL, network policies, background process requirements, persistent storage, backups, logs, limits, costs, DNS/domain ownership and SSL. Record a deployment bill of materials and proof each service is supported. No guesswork.
- [ ] **H1 — Security design:** Isolated staging identity, server-only secrets/key lifecycle, no plaintext in client/logs, TLS, tenant/session and origin/CSRF, network segmentation, least privilege, credential rotation, provider budgets/kill switch, rate limits and incident controls.
- [ ] **H2 — Migration and reliability:** Approved schema/migration order, protected data backup, actual restore and rollback exercise, health/readiness, monitoring/alerts, versioned immutable source/containers, SLO and independent source integrity checks.
- [ ] **H3 — Staging E2E:** Verified real authenticated customer flow, Cloud/HCR requests, independent receipts, scoped dashboard, negative permission cases, model and Capital claim boundaries, end-to-end logs and clean recovery. No fake savings or synthetic session.
- [ ] **H4 — Domain & public boundary:** Verify domain entitlement and registrar/DNS control, point records only after authorized staging, configure HTTPS/certificate renewal, trusted callback origin/cookie domain, privacy disclosures and customer support.
- [ ] **H5 — Owner release:** Source commit manifests, security review, actual rollback plan, user-visible claims, final owner approval, **invite-only beta** feature flags and monitored go/no-go. Production is not inferred from passing staging.

Hostinger provides official [domain-to-VPS DNS instructions](https://www.hostinger.com/support/1583227-how-to-point-a-domain-to-your-vps-at-hostinger/), but this is not evidence that ANANKE's domain is currently linked or owned.

## Mandatory staged release verdict

```text
HOSTINGER_PLAN=NOT_VERIFIED
PYTHON_CLOUD_SUPPORT=NOT_VERIFIED
NEXTJS_SUPPORT=NOT_VERIFIED
POSTGRESQL_AUTHORITY=NOT_VERIFIED
SECRETS_AND_SESSION_BOUNDARY=NOT_VERIFIED
BACKUP_RESTORE_ROLLBACK=NOT_VERIFIED
STAGING_REAL_CUSTOMER_E2E=NOT_RUN
SECURITY_NEGATIVE_TESTS=NOT_RUN
DOMAIN_OWNERSHIP_AND_DNS=NOT_VERIFIED
TLS_AND_CALLBACK_ORIGINS=NOT_VERIFIED
MODEL_BACKED_CAPITAL_CLAIM=NOT_PROVEN
OWNER_RELEASE_APPROVAL=NO
BETA_GO=NO
```

**Release principle:** Private beta may advertise only verified features. Do not convert a completed LAB_ONLY request or historical model savings into a hosted customer model-Capital claim.
