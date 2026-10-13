# Cong Guan — TechLead / Business-Line Technical Owner

中文简历：[简历](/about/resume.html)

> Email: guanyuhao_666@163.com · GitHub: [github.com/guanyuhao](https://github.com/guanyuhao) · Blog: [guanyuhao.github.io](https://guanyuhao.github.io/)
> B.E. Software Engineering · 8 years · TechLead at a startup

---

## Career target

A hybrid technical owner (复合型人才): someone who can judge a requirement, pick a solution, hold the cost, and ship the business loop.

**Near term — startup TechLead.** This is the role I hold now. I own SocialFI and HealthFI from scope through a production loop that includes client, server and chain.

**Mid-size and large companies — full-stack technical owner of a business line.** Accountable for solution choice, delivery pace, cost and business outcome on one line, and still the person who breaks through the hard technical problems.

The measure is whether the loop is real: the right requirements, a stack that fits the stage, and delivery aligned with the market goal. Lines of code are not the measure.

---

## Core value

- **Judge the requirement.** Decide which slice has to be correct for the business to clear — a trade, a balance, a health reward — and set client, server and chain scope from that. Social graph, settlement and health incentives do not share one quality bar, so the schedule follows that difference.
- **Pick the solution and the cost.** Flutter, desktop or web on the client; Java, Go or Node on the server; smart contracts and a DEX on-chain. The choice follows the scenario and the team we can afford. Over the last two years, Cursor and Claude sped up cross-platform implementation, test drafts and docs. Judgment, acceptance and the production result stayed with me. That is the shift from individual frontend work to technical ownership of delivery.
- **Ship the whole commercial loop.** SocialFI runs from social interaction through membership, trading and settlement. HealthFI runs from device purchase through health-data reporting and point rewards. Both have to go live, operate and reconcile.
- **Own the outcome and the hard problems.** User scale, fund safety and the next iteration. Idempotent accounting, multi-layer reconciliation, fee-change control, connection fallback and multi-model BLE sync are problems I close myself.

---

## Current role and results

### Startup — TechLead
*2024.05 – Present*

I own the SocialFI and HealthFI commercial loops end to end: scope, technical approach, production chain, release and production stability. The chain is Flutter, desktop and web on the client; Java, Go and Node on the server; smart contracts and a DEX on-chain.

### SocialFI

- One operating loop: social IM, membership, transaction aggregation, fee settlement, revenue distribution, smart contracts and a DEX. The social product is 8+ repositories (Java services, data sync, Vue admin, Flutter client, Next.js and the release pipeline). The wider chain also includes a desktop client and Go / Node services. I set interface boundaries and integration order. The product has reached about 40,000 cumulative users, 7,600+ MAU and about 2,000 DAU.
- The client or SDK quotes and passes parameters. The service collects, authorizes, calls out, checks balance deltas, computes fees, distributes and emits events. Fee changes take effect after 24 hours and can be cancelled. Duplicate requests, price deviation and emergency audit events sit in the same design. One module has 35 tests and no regression. It has served 100+ users with no fund loss to date. After launch, the revenue-settlement and rights platform became one of the team's main commercial revenue sources.
- The server is the source of truth. Trade events rebuild revenue facts; a settlement service claims work by task id and reports back. Revenue facts, settlement entries, pending balances, payout results and transaction credentials are checked layer by layer, and failures go to manual handling. Membership income follows referral ties and tier. Configuration and assets ship through MinIO, so Flutter, Java and web read one copy, with a rollback path.
- The Flutter iOS and Android app covers social, IM, account and campaigns. Purchase sits in an embedded H5 flow. WSS with heartbeat reconnect and HTTP fallback, plus retry and decimal formatting on confirm, keeps weak-network state aligned with the number on screen. The admin console covers users, moderation, revenue facts and payouts; fund actions require a second confirmation and an audit trail.

### HealthFI

- Closed the smartwatch path in Flutter's embedded H5: shipping address, payment, order, server confirmation and device-number assignment, with Tencent IM tagging.
- BLE sync for F530Pro (Veepoo) and S191 (YCBT). Eight daily health metrics, including steps, calories and distance, pass a reporting gate before they can earn rewards, so bad samples do not become points.
- Java decides eligibility; a Node service distributes points. Eligibility, payout and failure handling stay on the server and are run as a fund pipeline, with idempotency and a manual fallback.

### Release and stability

- I run domain, servers, Nginx, Docker, CI/CD and production debugging. Cursor and Claude handle requirement breakdown, cross-platform drafts, test scaffolding and documentation, which is how both lines keep moving on a startup headcount. I still sign off on boundaries, acceptance and what happens in production.

---

## Technical depth

- **Loop and tradeoffs:** repository boundaries, one source of truth for funds, unified config release, rollback, an audit trail on risky actions.
- **On-chain and funds:** smart contracts, DEX, transaction aggregation and fee settlement, membership and revenue model, idempotency, multi-layer reconciliation, delayed fee changes.
- **Server:** Java / Spring Boot / MyBatis-Plus, Go, Node.js; REST / WebSocket; job scheduling; MySQL.
- **Client:** Flutter / Dart (iOS, Android), desktop, web (Vue / Vben Admin, React, Next.js, TypeScript); WSS with fallback; multi-model BLE; WeChat Mini Program.
- **Stability:** Docker, Jenkins / GitHub Actions, Nginx, Linux, MinIO, production debugging and rollback.
- **Enterprise product work:** React micro-frontends, field-level permissions, dynamic forms and approval flows, component libraries and design tokens. This is the Feishu HCM and AntAlpha base I use when judging the cost of change on a business line.

---

## Prior experience

### Bitmain — Frontend Engineer
*2023.09 – 2024.03 · AntAlpha, B2B digital-asset technology platform*

- Built the web console for multi-role permissions, the service-provider back office and responsive layout on Next.js, TypeScript and Tailwind CSS, and shipped on schedule under compliance and stability constraints.
- Put a shared component library and design tokens in place so later pages reused one standard, and joined technical reviews with maintainability on the version plan.

### ByteDance — Frontend Engineer
*2021.06 – 2023.06 · Feishu (Lark) HCM*

- Owned Organization, Employee Profile and E-Signature over the long term. The product serves hundreds of thousands of companies in and outside China. Changes cut across permissions, custom workflows and cross-module data, so I sized the blast radius before scheduling the work.
- Split modules and extracted shared components in a React, TypeScript and micro-frontend architecture, so 10+ engineers could ship in parallel with less waiting and less duplicated UI.
- Designed a dynamic form engine with field-level permissions, multi-level approval and conditional logic. Large-customer customization stayed in configuration.

### Yilan Qunzhi — Frontend Engineer
*2019.02 – 2021.03*

- Led the frontend of an AI search product and an image-annotation workbench: large image lists, SVG interaction, and box, polygon and keypoint tools. That workbench is what let ToB projects pass acceptance and close contracts.
- Turned task assignment, progress and quality review into one frontend flow, which lowered the cost of producing labeled data.
- Built a Git and Jenkins pipeline with canary releases, removed manual deploys, and moved launch risk onto a path that could roll back.

### Lianzhijia — Frontend Engineer
*2017.02 – 2019.02*

- Built financial quote and trading screens: WebSocket quotes, order entry and asset views. Correctness on the trading path, and recovery when data failed, came first.
- Handled live sync, cross-origin communication and dense quote charts. The same bar on numbers, state and failure later applied to asset display, transaction retry and decimal formatting.

---

## Education

**B.E. Software Engineering** — Shanxi Agricultural University, College of Information · 2013 – 2017
