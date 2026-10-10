# Project Timeline & Weekly Reports - CodeSarthi

## Project Overview

* **Project Title**: CodeSarthi — Open Visual Backend Builder & Execution Engine
* **Course / Context**: Software Group Project (SGP - 5th Semester)
* **Total Timeline**: 12 Weeks
  - **Weeks 1 – 2**: Project Proposal & Initial Scoping
  - **Weeks 3 – 12**: 10 Weekly Progress Reports & Sprint Cycles
* **Team Members**:
  - **Bhavya Durgani** (ID: `D25CS112`)
  - **Vainavi Raval** (ID: `D25CS114`)
  - **Maitri Sheta** (ID: `D25CS120`)

---

## 12-Week Master Milestone Schedule

```text
┌───────────────────────────────────┬───────────────────────────────────────────────────────────────┐
│  PHASE 1: PROPOSAL & SCOPING      │  PHASE 2: CORE ENGINEERING & IMPLEMENTATION                   │
│  (Weeks 1 – 2)                    │  (Weeks 3 – 12 | 10 Weekly Progress Reports)                  │
├───────────────────────────────────┼───────────────────────────────────────────────────────────────┤
│  • Week 1: Problem Identification │  • Weeks 3–4: DB Schema, Auth & Core APIs                     │
│  • Week 2: Proposal Submission    │  • Weeks 5–6: DAG Engine & V8 Sandbox Execution               │
│  • System Architecture & Specs    │  • Weeks 7–8: Visual Builder Canvas UI & Advanced Nodes       │
│                                   │  • Weeks 9–10: AST Code Compiler & GitHub Sync Exporter       │
│                                   │  • Week 11: WebSockets Live Monitor & Streaming Engine        │
│                                   │  • Week 12: AI Synthesizer, Analytics, Mesh & Deployment      │
└───────────────────────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Project Proposal & Scoping (Weeks 1 – 2)

### Week 1: Problem Identification & Domain Research
* **Objective**: Identify core bottlenecks in modern backend microservice development.
* **Deliverables**:
  - Formulated problem statement addressing backend boilerplate overhead and vendor lock-in of visual platforms.
  - Initial team role distribution and toolchain setup.

### Week 2: Literature Survey & Project Proposal Submission
* **Objective**: Conduct comparative research across visual workflow platforms (n8n, Zapier), BaaS (Firebase, Supabase), and visual spec tools.
* **Deliverables**:
  - Completed Project Proposal Document (`PROJECT-1 Proposal (Week 1-3).docx`).
  - Architecture diagram detailing Frontend (Next.js), Backend (Fastify), Sandbox Engine (`node:vm`), and Database (PostgreSQL / Prisma).

---

## Phase 2: Implementation & Weekly Reports (Weeks 3 – 12)

### Week 3 (Progress Report 1): Environment & Database Schema Setup
* **Planned Tasks**: Configure development environments, ORM schemas, and database connections.
* **Completed Work**:
  - Initialized Node.js, Fastify backend, and Next.js 14 frontend repositories.
  - Defined 9 Prisma database models (`User`, `Project`, `Workflow`, `Node`, `Edge`, `ExecutionLog`, `Analytics`, `Service`, `ServiceRoute`, `GatewayConfig`).
  - Synced database schema to Neon Serverless PostgreSQL (`npx prisma db push`).
* **Commits**: `Added database schema`, `Configured Prisma ORM client`, `Environment config validation` (8 commits).

### Week 4 (Progress Report 2): Authentication & Project/Workflow CRUD
* **Planned Tasks**: Implement secure user registration, login, and project workspace APIs.
* **Completed Work**:
  - Built password hashing pipeline using `bcrypt` and JWT authentication middleware.
  - Implemented CRUD API endpoints for User profiles, Projects, and Workflows (`/api/projects/*`, `/api/workflows/*`).
* **Commits**: `Implemented Auth endpoints`, `Added JWT middleware`, `Created Project CRUD APIs` (10 commits).

### Week 5 (Progress Report 3): Dynamic Workflow Execution Engine
* **Planned Tasks**: Build the backend Directed Acyclic Graph (DAG) execution runner.
* **Completed Work**:
  - Developed topological sorting algorithm to resolve node execution order from visual graph JSON payloads.
  - Implemented variable state passing between step outputs and input bindings (`steps.step1.output`).
* **Commits**: `Added DAG topological sorter`, `Implemented step state resolver`, `Created sequential node executor` (9 commits).

### Week 6 (Progress Report 4): V8 VM Sandbox Execution & Security Isolation
* **Planned Tasks**: Secure custom JavaScript logic execution against malicious scripts and event loop blocking.
* **Completed Work**:
  - Integrated Node.js `node:vm` module for isolated execution of custom code nodes.
  - Configured strict CPU execution timeout (200ms limit) and memory limits (64MB) per sandbox context.
  - Built `ExecutionLog` recorder saving latency timings, status codes, and error traces.
* **Commits**: `Implemented V8 VM sandbox`, `Added execution timeout guards`, `Created audit log recorder` (11 commits).

### Week 7 (Progress Report 5): Visual Builder Canvas Interface
* **Planned Tasks**: Develop the frontend drag-and-drop workflow canvas.
* **Completed Work**:
  - Integrated React Flow visual builder into Next.js 14 App Router.
  - Built custom node components for HTTP Requests, PostgreSQL Queries, Custom JS Code, and HTTP Responses.
  - Developed node configuration parameter drawer for editing node inputs.
* **Commits**: `Integrated React Flow builder`, `Created node palette UI`, `Implemented parameter config panel` (12 commits).

### Week 8 (Progress Report 6): Advanced Canvas Nodes & Scheduler Engine
* **Planned Tasks**: Add advanced logic branching, security nodes, and background job scheduling.
* **Completed Work**:
  - Added Switch conditional branching nodes and API Key authentication validation nodes.
  - Built background cron scheduler engine (`matchCron` worker) for periodic API execution.
  - Added custom HTTP response headers and redirect configuration options.
* **Commits**: `Added Switch logic nodes`, `Implemented API Key validator`, `Built background cron engine` (10 commits).

### Week 9 (Progress Report 7): AST Code Compiler Engine
* **Planned Tasks**: Create automated compiler converting visual workflow JSON into clean Fastify TypeScript code.
* **Completed Work**:
  - Developed AST code generator (`src/services/compiler.ts`) producing clean Fastify routes, Prisma queries, and controller logic.
  - Integrated dynamic OpenAPI (Swagger) spec generator (`@fastify/swagger`).
* **Commits**: `Developed Fastify code compiler`, `Added Prisma query codegen`, `Integrated OpenAPI spec generator` (14 commits).

### Week 10 (Progress Report 8): Async Export Queue & GitHub Integration
* **Planned Tasks**: Enable background code ZIP building and direct GitHub repository commit push.
* **Completed Work**:
  - Configured BullMQ task queue running behind Redis to process heavy export jobs.
  - Built ZIP archiving service packaging `Dockerfile`, `docker-compose.yml`, `prisma/schema.prisma`, and `package.json`.
  - Integrated GitHub Octokit REST API for one-click commit and push to remote git repositories.
* **Commits**: `Integrated BullMQ export queue`, `Built ZIP archiver service`, `Added GitHub Octokit sync` (13 commits).

### Week 11 (Progress Report 9): WebSocket Real-Time Monitoring & Metrics Stream
* **Planned Tasks**: Stream gateway performance metrics live to the visual builder.
* **Completed Work**:
  - Attached Socket.IO server to Fastify instance (`src/websocket.ts`).
  - Created project-scoped WebSocket rooms broadcasting execution latency, status codes, and database metrics.
  - Built live Monitor UI panel with row flashing animations and latency counters.
* **Commits**: `Attached Socket.IO metrics engine`, `Created project rooms`, `Built live Monitor UI` (9 commits).

### Week 12 (Progress Report 10): AI Workflow Synthesizer, Analytics, Mesh & Deployment
* **Planned Tasks**: Implement natural language prompt parser, analytics charts, service mesh visualizer, E2E testing, and production deployment.
* **Completed Work**:
  - Integrated Groq API / local Ollama models (`src/services/ai.ts`) and AI Synthesizer modal UI converting prompts to node DAGs.
  - Developed Analytics controller and Recharts dashboard displaying hourly heatmaps and daily trends.
  - Developed Service Mesh graph visualizer mapping microservice dependencies and status badges.
  - Applied OWASP security headers in Fastify, optimized Next.js bundle tree-shaking, and deployed frontend to Vercel and backend to production.
  - Conducted comprehensive end-to-end integration testing and finalized all project documentation.
* **Commits**: `Integrated Groq AI service`, `Created Service Mesh visualizer`, `Final system integration` (26 commits).

---

## Evaluation & Assessment Framework

| Weekly Phase | Evaluation Focus | Key Deliverable | Assessment Criteria |
| :--- | :--- | :--- | :--- |
| **Weeks 1 – 2** | Proposal & Requirements | Proposal Document & Architecture Diagram | Clarity of scope, problem definition, domain research. |
| **Weeks 3 – 5** | Database & Core APIs | Prisma Schema & REST Endpoint Suite | Database normalization, JWT security, clean routing. |
| **Weeks 6 – 8** | Execution Gateway & Canvas UI | V8 VM Sandbox & React Flow Canvas UI | Sub-50ms engine overhead, secure JS isolation, intuitive UI. |
| **Weeks 9 – 10** | Code Compiler & Exporter | Fastify AST Compiler & GitHub Push Sync | Zero lock-in TypeScript code generation, valid ZIP/Git push. |
| **Week 11**      | WebSockets Live Stream  | Socket.IO Live Stream & Monitoring UI   | Real-time metrics streaming, sub-second latency visualization. |
| **Week 12**      | AI, Mesh & Deployment   | AI Synthesizer, Analytics & Live Web App| Accurate prompt-to-graph synthesis, 99.9% uptime, zero compiler warnings. |

<!-- 12-Week Milestone Schedule: Complete -->


<!-- 12-Week Milestone Schedule: Complete -->

<!-- 12-Week Milestone Schedule: Complete -->
