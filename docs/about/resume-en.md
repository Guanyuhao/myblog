# Cong Guan — Vibe Coding Engineer / Technical Co-founder

> Vibe Coding Engineer · AI-Native Full-Stack Engineer · Technical Co-founder
> Email: gunyuhao_666@163.com · GitHub: [github.com/guanyuhao](https://github.com/guanyuhao) · Blog: [guanyuhao.github.io](https://guanyuhao.github.io/)
> Bachelor in Software Engineering · 8 years of experience · Available within 1 month

---

## Summary

AI-native **Vibe Coding engineer / technical co-founder** with **8 years of full-stack experience**. I deeply integrate **Cursor, Claude and AI coding workflows** into requirement breakdown, architecture design, multi-platform code generation, testing, code review and documentation, turning AI into a real production system rather than a coding assistant.

In the last **2 years**, as a **technical co-founder of a startup**, I led a **social IM product from 0 to 1 single-handedly** across **8+ repositories**: Java backend, data synchronization services, Flutter mobile app, Vue/React admin consoles, Next.js app and the full DevOps pipeline. The product reached **~40,000 cumulative users, 7,600+ MAU and ~2,000 DAU**.

Earlier I built core HCM modules at **ByteDance / Feishu (Lark)**, with strong experience in enterprise-grade dynamic forms, permission systems and micro-frontend architecture. I combine large-scale engineering discipline with lean, AI-native startup execution.

---

## Core Highlights

- **Vibe Coding / AI-native engineering** — built a practical Cursor / Claude workflow covering requirement breakdown, architecture, multi-platform implementation, testing, review and documentation; capable of delivering at the speed and breadth of a small full-stack team alone.
- **Technical co-founder / business owner mindset** — owned architecture, stability and product outcomes end to end, working with product and operations on priorities rather than only implementing tickets.
- **End-to-end full-stack architecture** — independently delivered backend services, data synchronization, accounting/settlement systems, admin consoles, Flutter client and DevOps with strong attention to reliability and reconciliation.
- **Rare hybrid background** — enterprise SaaS at ByteDance/Feishu + 0-to-1 startup delivery: both large-system engineering governance and lean AI-native execution.
- **Cross-domain delivery** — closed the full loop of IoT hardware (multi-model BLE smartwatches) + health data + incentive systems.

---

## Skills

**AI Engineering / Vibe Coding (core):** Cursor · Claude · GPT · AI-driven requirement breakdown · Architecture planning · Multi-platform code generation · Rules / context engineering · MCP · Prompt engineering · AI-assisted code review · Documentation / knowledge base

**Backend & Accounting:** Java / Spring Boot · MyBatis-Plus · Node.js · Membership / settlement systems · RESTful API / WebSocket · Idempotency / reconciliation · Job scheduling · MySQL

**Client & Mobile:** Flutter / Dart · Embedded H5 flows · WSS long-connection with reconnect/fallback · IM / social products · BLE hardware sync · iOS / Android release · WeChat Mini Program

**Frontend & Admin:** React · Vue / Vben Admin · TypeScript · Next.js · Micro-frontends · Complex forms & permission systems · Dashboards / content-moderation flows · Tailwind CSS / Ant Design · Component libraries

**DevOps:** Docker · CI/CD (Jenkins / GitHub Actions) · Nginx / domain / server · Linux · MinIO distribution system · Production troubleshooting · Release rollback

---

## Experience

### Social IM Platform (Startup) — Technical Co-founder / AI-Native Full-Stack Lead
*2024.05 – Present*

- **[Architecture]** Led a social IM platform from 0 to 1; independently designed and maintained an **8+ repo multi-platform architecture** (Java backend / data synchronization services / Vue admin / Flutter client / Next.js app / DevOps), owning everything from backend to client and from domain/server to CI/CD — **supporting ~40k cumulative users, 7,600+ MAU and ~2,000 DAU**.
- **[Core Transaction Services]** Designed high-safety transaction aggregation and settlement services covering collection, authorization, balance-diff checks, fee calculation, distribution and event output; implemented performance optimization, delayed-change governance, duplicate-request protection, abnormal-transaction protection and unit tests (35 cases for a single module).
- **[Data Sync / Reconciliation]** Built event-driven synchronization services to reconstruct revenue facts with credential + whitelist verification; designed task_id-based settlement services and multi-layer reconciliation for idempotency and safety; built a **MinIO-based unified configuration/resource distribution system** consumed dynamically by Flutter/Java/frontend.
- **[Backend]** Built membership and revenue-settlement systems on **Java / Spring Boot / MyBatis-Plus** (referral relationships, member tiers, revenue calculation, pending balances, settlement-task generation and callback reconciliation), plus user system, content/messaging, ops config and scheduled jobs.
- **[Client]** Delivered an **iOS/Android Flutter app** (social, IM, account, campaigns) with embedded H5 purchase flows, **WSS long-connection + heartbeat reconnect + HTTP fallback**, transaction-confirm retries, and **multi-model BLE smartwatch (F530Pro/S191) health-data sync** with Tencent IM.
- **[Vibe Coding / AI Workflow]** Systematized Cursor / Claude into requirement breakdown, multi-platform code generation, architecture review and documentation. Built reusable Rules / MCP / prompts / knowledge base, enabling one person to sustain **8+ repositories** of multi-platform delivery and iteration.
- **[DevOps]** Owned domain/server/Nginx/Docker/CI-CD and production troubleshooting, ensuring stable releases and rollback paths across services.

### Bitmain (AntAlpha Division) — Frontend Engineer
*2023.09 – 2024.03*

- Core frontend development of **AntAlpha, a B2B enterprise technology platform**, built on Next.js + TypeScript + Tailwind CSS with multi-role permissions, a service-provider console and responsive pages.
- Led a shared component library and design-variable system, unifying standards and improving delivery efficiency and version consistency under strict compliance/stability requirements.

### ByteDance (Feishu / Lark) — Frontend Engineer
*2021.06 – 2023.06*

- Owned long-term development of **3 core HCM modules (Org Management, Employee Profile, E-Signature)** serving hundreds of thousands of enterprise customers, with multi-level permissions, custom workflows and cross-domain data linkage.
- Led module decomposition and shared-component extraction in a **React + TypeScript + micro-frontend** architecture, enabling 10+ engineers to iterate in parallel.
- Independently designed a complex **dynamic form engine** with field-level permission control, multi-level approval flows and conditional logic — a core differentiator of the HCM platform.

### Yilan Qunzhi — Frontend Engineer
*2019.02 – 2021.03*

- Led frontend for an **AI search platform and image-annotation platform**, solving large-list rendering, SVG annotation interactions and multi-type tools (boxes / polygons / keypoints), directly supporting ToB acceptance and client signings.
- Built a **Git + Jenkins automated deployment pipeline** with canary releases, removing manual deployment and improving release reliability.

### Lianzhijia — Frontend Engineer
*2017.02 – 2019.02*

- Core frontend for **financial-market and trading products**: real-time quotes (WebSocket), order trading and asset management.
- Solved real-time data synchronization, cross-origin communication and high-volume chart rendering, building strong security awareness for high-frequency transaction products.

---

## Projects

### Transaction Aggregation & Settlement Service · 2024.05 – Present
*Core backend module · Automated testing · Performance optimization · Security governance*

- Independently designed a transaction aggregation service where the frontend/SDK handles quoting and parameters, while the service layer owns collection, authorization, balance-diff checks, fee calculation, distribution and event output. **Served 100+ users with zero fund loss to date.**
- **Performance optimization:** packed fee configuration into a compact storage structure, cached external calls, extracted a unified settlement function and removed dead-code attack surface.
- **Security governance:** 24h delayed application for fee changes (propose → wait → apply, cancellable), abnormal-transaction protection, compatibility for multiple caller types, emergency-audit events and overflow prevention.
- **Testing & release:** 35 automated tests with zero regression; shipped red-packet, campaign distribution, points and membership-rights modules; built a MinIO-based unified configuration/resource distribution system with rollback-safe paths.

### Social IM Platform (8+ Repos Full-Stack) · 2024.05 – Present
*Flutter · Java/Spring Boot · Vue/Vben Admin · Event-driven data synchronization · WebSocket · Docker/CI-CD*

- Single-handedly led the multi-platform product from 0 to 1, coordinating architecture, interface boundaries and integration order across core services, data synchronization, backend, admin, client and ops — **supporting ~40k cumulative users, 7,600+ MAU and ~2,000 DAU** in real operation.
- Built the full app loop with WSS long-connection + reconnect/fallback, transaction-confirm retries and precision formatting for weak-network and high-frequency interaction scenarios.
- Coordinated data synchronization with Java accounting and settlement services, secured by credential verification + whitelist checks + multi-layer reconciliation.

### Membership Rights & Settlement System · 2024.09 – 2025.04
*Java/Spring Boot · MyBatis-Plus · Data synchronization · Reconciliation · Vue/Vben Admin · Flutter*

- Designed a multi-level membership-rights and settlement model driven by referral relationships and member tiers, maintaining revenue facts, settlement ledgers and pending balances with a single backend source of truth.
- Revenue confirmation + settlement service: generated settlement tasks claimed by worker services via task_id + sub_seq with callbacks, failures routed to manual handling, fully idempotent.
- Multi-layer reconciliation: revenue facts ↔ settlement records ↔ pending balance ↔ settlement result ↔ transaction credential, minimizing fund-loss and accounting-error risk.

### Smartwatch Purchase + Health Data Incentive System (IoT) · 2025.01 – 2025.09
*Flutter · BLE · Java/Spring Boot · Node settlement service · Tencent IM*

- Closed the hardware-to-platform loop: Flutter embedded H5 purchase flow for smartwatches (shipping address → online payment → order creation → backend confirmation → watch number assignment) with Tencent IM tagging.
- Multi-model BLE sync: F530Pro (Veepoo) / S191 (YCBT), aggregating 8 daily health metrics (steps, calories, distance) with reporting thresholds.
- Health-data incentive: after Java eligibility checks, a Node settlement service distributes points rewards across client + backend + settlement service, strictly governed as a high-risk fund pipeline.

### Revenue Settlement & Rights Management Platform · 2024.05 – 2025.09
*Full-stack · React · Node.js · Revenue settlement · Dashboard*

- Led the platform from 0 to 1, independently owning the frontend app, reward-settlement backend and dashboard, covering rights purchase, exit, revenue calculation and user asset display.
- Became one of the team's main revenue sources, validating a sustainable profitability scenario.

### AntAlpha — B2B Enterprise Technology Platform · 2023.09 – 2024.03
*Next.js · TypeScript · Tailwind CSS*

- Core web development with multi-role permission pages, service-provider console and responsive adaptation; led a shared component library and design-variable system to unify UI standards.

### Feishu HR — HCM System · 2021.06 – 2023.06
*React · TypeScript · Micro-frontends*

- Owned Org Management, Employee Profile and E-Signature modules for hundreds of thousands of enterprises; led module decomposition for 10+ engineers; independently built a dynamic form engine with multi-level approval flows.

---

## Education

**Bachelor of Software Engineering** — Shanxi Agricultural University, College of Information · 2013 – 2017
