---
title: Resume
---

<ResumeSheet lang="en" />

## Professional summary

Tech Lead at a startup, responsible for technical decisions and end-to-end delivery on the SocialFi and HealthFi business lines. Hands-on from client and server through blockchain, able to judge requirements, design architecture, control cost, launch systems, and keep them running around commercial goals.

Previously at ByteDance Feishu HCM and Bitmain AntAlpha, with experience building complex business systems in large enterprises and delivering the full path in a startup setting.

Technical focus covers trade settlement, fund reconciliation, smart-contract integration, cross-platform architecture, weak-network communication, and BLE smart-hardware access. Technical plans are matched to the business stage. Output is measured by delivery quality, runtime stability, and whether the commercial loop closes.

## Core capabilities

- **Business and architecture decisions:** judging requirement value, drawing technical boundaries, selecting an approach, setting engineering priority, and controlling cost and delivery risk.
- **Full-stack delivery:** Flutter, Web, Desktop, Java, Go, Node.js, and integration of smart contracts and a DEX.
- **Trading and fund systems:** transaction aggregation, fee settlement, membership revenue distribution, business idempotency, multi-layer reconciliation, exception handling, and audit trails.
- **Tackling complex scenarios:** WebSocket recovery on weak networks, cross-platform data consistency, multi-model BLE device adaptation, and health-data validation.
- **Engineering and production:** CI/CD, containerized deployment, unified configuration, release rollback, production debugging, and AI-assisted development.

## Experience

### Startup｜Tech Lead

2024.05 – Present

Responsible for the SocialFi and HealthFi business lines, from requirement assessment and technical architecture through cross-platform development, deployment, launch, and stability. Coordinate integration and continuous delivery across multiple repositories and languages.

#### Representative results

- The SocialFi product has nearly 40,000 cumulative users, 7,600+ MAU, and about 2,000 DAU.
- Shipped social, membership, on-chain trading, fee settlement, and revenue distribution into a commercial loop. These capabilities became one of the team's main sources of revenue.
- The transaction-aggregation module is live and serves more than 100 users. Transaction checks, dynamic fee governance, and exception auditing are in place. No known fund loss to date.
- Completed the HealthFi path for smartwatch purchase, device binding, health-data reporting, and point distribution, with support for multi-model BLE devices.
- Responsible for cross-platform release, CI/CD, Docker, Nginx, production debugging, and configuration rollback, supporting continuous iteration of both lines.

#### Project 1｜SocialFi social and on-chain trading platform

**Stack:** Flutter, Vue, Next.js, Java, Go, Node.js, MySQL, WebSocket, smart contracts, DEX.

1. **Business architecture:** Combined social IM, membership rights, transaction aggregation, fee settlement, and revenue distribution into one business path. Responsible for module boundaries, interface protocols, and integration order. Coordinated dependencies and delivery across 8+ repositories.
2. **Transaction aggregation:** Client / SDK quote-parameter handling, service-layer transaction checks and fee governance, execution-result tracking, and event output. Fee changes take effect after a 24-hour delay and can be revoked.
3. **Funds and settlement:** Built business revenue records from on-chain trade events, and managed revenue distribution by task_id. Multi-layer checks across revenue facts, revenue entries, pending balances, payout results, and transaction credentials. Exceptions go to manual handling.
4. **Reliability:** Handled concurrent and duplicate requests, price deviation, fund-operation audit, and weak-network trade confirmation. The trading module was verified with 35 tests.
5. **Client and operations:** Delivered Flutter iOS / Android social and account features. WSS heartbeat reconnect, HTTP fallback, and retryable confirmation improve availability on weak networks. Built an operations console for users, content, and funds. Fund operations require a second confirmation and leave an audit trail.
6. **Engineering:** MinIO for unified release of multi-end configuration and assets, with version rollback, reducing the risk of inconsistent configuration across ends.

#### Project 2｜HealthFi smart-wearable and health-incentive platform

**Stack:** Flutter, Java, Node.js, BLE, MySQL, H5, Tencent Cloud IM.

1. **Commercial path:** Completed the smartwatch purchase flow, covering shipping address, online payment, server-side order confirmation, device-number assignment, and user-device binding.
2. **Hardware integration:** Adapted two smartwatch models, F530Pro (Veepoo) and S191 (YCBT), including BLE connection and health-data sync.
3. **Data governance:** Aggregated 8 health metrics by day, including steps, calories, and distance. Reporting validation is isolated from incentive-eligibility decisions.
4. **Incentive settlement:** The Java service decides eligibility. The Node.js service distributes points. Task idempotency and exception handling reduce the risk of duplicate payouts.

### Bitmain｜Frontend Engineer

AntAlpha｜2023.09 – 2024.03

- Contributed to a B2B digital-asset technology platform. Built multi-role permissions, the service-provider console, and responsive web pages.
- Delivered features with Next.js, TypeScript, and Tailwind CSS, and joined technical design reviews and version planning.
- Built a shared component library and a design-token system, unifying page standards and improving reuse and maintainability.

### ByteDance｜Frontend Engineer

Feishu HCM｜2021.06 – 2023.06

- Owned enterprise core modules including organization management, employee profiles, and e-signature. Handled multi-level permissions, complex workflows, and cross-business data dependencies.
- Split modules and built shared capabilities on React, TypeScript, and a micro-frontend architecture, supporting parallel work by a team of more than 10 engineers.
- Independently designed a dynamic form engine with field-level permissions, multi-level approval, and conditional linkage. Configuration supports different customers' business needs.
- Joined technical assessment and impact analysis for complex requirements, balancing customization, delivery cost, and long-term maintainability.

### Yilan Qunzhi｜Frontend Engineer

2019.02 – 2021.03

- Built an AI search and image-annotation platform, including large-batch image rendering, SVG annotation, and rectangle, polygon, and keypoint interaction.
- Built task assignment, progress tracking, and quality-review flows to support enterprise delivery and acceptance.
- Set up Git + Jenkins automated release and canary rollout, reducing the risk of manual deploys.

### Lianzhijia｜Frontend Engineer

2017.02 – 2019.02

- Contributed to financial quote and trading products, covering live quotes, order entry, and asset management.
- Handled WebSocket live sync, trade-state recovery, cross-origin communication, and dense quote-chart rendering.
- Built experience in trade-data precision, failure recovery, and real-time systems.

## Technical stack

- **Server:** Java / Spring Boot / MyBatis-Plus, Go, Node.js, MySQL, REST, WebSocket, job scheduling.
- **Client:** Flutter / Dart, iOS / Android, Desktop, React, Next.js, Vue, TypeScript, WeChat Mini Program.
- **Blockchain and finance:** smart contracts, DEX, transaction aggregation, on-chain events, fee settlement, revenue distribution, fund reconciliation.
- **Engineering and infrastructure:** Docker, Linux, Nginx, Jenkins, GitHub Actions, CI/CD, MinIO.
- **Complex business work:** micro-frontends, dynamic forms, field-level permissions, approval flows, WSS weak-network recovery, BLE hardware access.
- **Development tools:** Cursor and Claude, with human review for AI-assisted development and quality acceptance.

## Education

Shanxi Agricultural University, College of Information｜Software Engineering｜2013 – 2017
