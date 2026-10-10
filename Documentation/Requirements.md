# Requirements Specification (SRS & PRD) - CodeSarthi

## Project Overview

* **Project Title**: CodeSarthi — Open Visual Backend Builder & Execution Engine
* **Course / Context**: Software Group Project (SGP - 5th Semester)
* **Document Type**: Software Requirements Specification (SRS) & Product Requirements Document (PRD)
* **Team Members**:
  - **Bhavya Durgani** (ID: `D25CS112`)
  - **Vainavi Raval** (ID: `D25CS114`)
  - **Maitri Sheta** (ID: `D25CS120`)

---

## 1. Introduction & System Scope

### 1.1 Purpose
This document specifies the complete functional, non-functional, interface, and architectural requirements for the **CodeSarthi** platform. It serves as the single source of truth for developers, system architects, and evaluation faculty.

### 1.2 System Scope
CodeSarthi comprises a **Next.js 14 visual client**, a **Fastify backend server**, a **dynamic V8 VM sandbox execution engine (`node:vm`)**, a **BullMQ background code compiler running on Redis**, and a **Neon PostgreSQL database managed via Prisma ORM**. The platform enables developers to visually design RESTful API pipelines, execute them in real-time, monitor them via Socket.IO, and export standard zero-lock-in Fastify/TypeScript codebases.

---

## 2. Functional Requirements

### 2.1 User Management & Security
* **FR-1 Registration**: The system shall allow users to register with a unique email, username, and secure password.
* **FR-2 Authentication**: The system shall authenticate user credentials and return signed JSON Web Tokens (JWT) with a 24-hour expiration period.
* **FR-3 Endpoint Authorization**: The system shall enforce JWT verification middleware on all administrative endpoints (`/api/projects/*`, `/api/workflows/*`, `/api/git/*`).
* **FR-4 Password Hashing**: Password strings must be securely hashed using `bcrypt` (work factor 10) prior to storage in PostgreSQL.

### 2.2 Project & Visual Canvas Management
* **FR-5 Project CRUD**: Users shall be able to create, read, update, list, and delete project workspaces.
* **FR-6 Visual Board Canvas**: The system shall provide an infinite-scroll drag-and-drop workspace powered by React Flow, supporting graph pan, zoom, auto-layout, and node deletion.
* **FR-7 Node Palette Definitions**: The canvas shall support 8 distinct, configurable node types:
  1. **HTTP Trigger Node**: Method (GET, POST, PUT, DELETE, PATCH), route path (`/items`, `/users/:id`), headers, query params.
  2. **PostgreSQL Query Node**: Custom raw SQL or visual helper queries binding previous step outputs (`steps.step1.output`).
  3. **Custom JavaScript Code Node**: Inline rich text code editor evaluating ES6 JavaScript logic on input data.
  4. **JWT Security Node**: Verification node ensuring incoming requests possess valid bearer tokens.
  5. **API Key Validation Node**: Security node checking request headers against active gateway API keys.
  6. **Switch Conditional Node**: Branching logic evaluating conditions (`==`, `!=`, `>`, `<`) and routing flow execution.
  7. **Cron Scheduler Node**: Background trigger executing workflows periodically based on standard cron expressions.
  8. **Response Node**: HTTP response status codes (200, 201, 400, 401, 500), response headers, and payload structures.
* **FR-8 Versioning & Rollback**: Users shall be able to save workflow snapshots and revert to previous published revisions.

### 2.3 Workflow Execution Engine (Managed Runtime)
* **FR-9 Execution Pipeline**:
  1. Catch incoming client HTTP requests on wildcard gateway routes `/api/:projectId/*`.
  2. Perform topological sort on the workflow Directed Acyclic Graph (DAG).
  3. Resolve step variable bindings dynamically across execution nodes.
  4. Execute custom JavaScript logic inside isolated V8 scopes.
  5. Perform database queries via Prisma ORM connection pools.
  6. Dispatch configured HTTP response payloads and headers.
* **FR-10 V8 Sandbox Context Isolation**: Custom JavaScript code nodes must execute inside isolated Node.js `node:vm` contexts. The execution engine must strictly enforce:
  - **CPU Timeout Guard**: Max **200ms** execution time per code node.
  - **Memory Guard**: Max **64MB** RAM allocation per execution context.
  - **Scope Isolation**: No access to Node.js `process`, `require`, `fs`, or system environment variables.
* **FR-11 Audit & Execution Logging**: Every request executed through the gateway must append an entry to the `ExecutionLog` table recording node execution times, HTTP status, client IP, and payload snippets.

### 2.4 AST Compiler & Code Exporter Engine
* **FR-12 Fastify TypeScript Generator**: The system shall compile visual DAG JSON configurations into standard, unencumbered Fastify/TypeScript source code without proprietary runtime dependencies.
* **FR-13 Prisma Query Compiler**: Visual database nodes must be compiled into native Prisma client query calls (`prisma.user.findMany()`).
* **FR-14 Containerization & Build Configs**: The code compiler must automatically generate a multi-stage `Dockerfile`, `docker-compose.yml`, `prisma/schema.prisma`, `.env.example`, and `tsconfig.json`.
* **FR-15 OpenAPI / Swagger Specification**: The system shall dynamically generate a compliant OpenAPI 3.0 specification (`swagger.json`) mapping paths, parameters, request bodies, and responses.
* **FR-16 ZIP Packaging & GitHub Sync**:
  - Package generated source files into a downloadable `backend.zip` file via BullMQ background workers.
  - One-click commit and push compiled codebases directly to remote GitHub repositories via GitHub Octokit REST API.

### 2.5 Real-Time Monitoring & AI Synthesizer
* **FR-17 Socket.IO Metrics Stream**: Broadcast execution latencies, status codes, and database metrics in real-time over WebSocket channels (`/socket.io`).
* **FR-18 Interactive API Tester**: Embedded test panel allowing users to send mock requests with custom headers and body payloads directly to active gateway endpoints.
* **FR-19 AI Workflow Synthesizer**: Convert plain-English prompt descriptions into structured visual canvas graphs (nodes + edges) using Groq LLM API or local Ollama model integration.
* **FR-20 Service Mesh Visualizer**: Render active microservice communication link graphs and health statuses.

---

## 3. Non-Functional Requirements

### 3.1 Performance & Latency
* **NFR-1 Gateway Latency Overhead**: Execution engine overhead (excluding database query duration) must remain **< 50ms** per request. Total roundtrip gateway latency target is **< 200ms**.
* **NFR-2 Canvas Rendering Speed**: Drag, drop, and layout updates on the React Flow visual canvas must render at **60 FPS** (update latency **< 100ms**).
* **NFR-3 Compilation Time**: Compiling visual graphs into full TypeScript ZIP archives must complete within **5 seconds**.

### 3.2 Security & Data Protection
* **NFR-4 Credential Encryption**: User database connection strings and sensitive API keys must be encrypted at rest using **AES-256-GCM** encryption.
* **NFR-5 Rate Limiting**: The API gateway must enforce IP-based rate limiting (configurable default: 100 requests per minute per IP) to prevent denial-of-service attacks.
* **NFR-6 CORS Policy Enforcement**: Dynamic gateway routes must enforce configurable Cross-Origin Resource Sharing (CORS) rules.

### 3.3 Reliability & Availability
* **NFR-7 System Uptime**: The dynamic execution gateway must maintain **99.9% uptime**.
* **NFR-8 Fault Tolerance**: In the event of a WebSocket disconnect, core gateway request routing and canvas saving must remain fully operational.

### 3.4 Maintainability & Usability
* **NFR-9 Code Cleanliness**: Exported TypeScript source code must pass ESLint standards with **0 warnings** and **0 errors**.
* **NFR-10 Responsive UI Aesthetics**: The frontend workspace must adhere to modern glassmorphism design principles, supporting responsive dark-mode layouts.

---

## 4. Database Schema Specification (Prisma ORM)

```prisma
model User {
  id        String    @id @default(uuid())
  email     String    @unique
  name      String?
  password  String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  projects  Project[]
}

model Project {
  id          String         @id @default(uuid())
  name        String
  description String?
  userId      String
  user        User           @relation(fields: [userId], references: [id])
  workflows   Workflow[]
  services    Service[]
  analytics   Analytics[]
  logs        ExecutionLog[]
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
}

model Workflow {
  id            String         @id @default(uuid())
  name          String
  description   String?
  projectId     String
  project       Project        @relation(fields: [projectId], references: [id])
  isPublished   Boolean        @default(false)
  nodes         Node[]
  edges         Edge[]
  gatewayConfig GatewayConfig?
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
}
```

---

## 5. System Environment & Hardware Requirements

### Minimum Client Requirements:
- **Browser**: Google Chrome 100+, Mozilla Firefox 100+, Apple Safari 15+, Microsoft Edge.
- **Display Resolution**: 1920x1080 recommended (1366x768 minimum).
- **RAM**: 4 GB minimum.

### Server & Deployment Requirements:
- **Node.js**: v18.0.0 or higher.
- **Database**: PostgreSQL 14+ (Neon Serverless compatible).
- **Task Queue Engine**: Redis 6.0+ (BullMQ backend).
- **RAM**: 2 GB server RAM minimum (4 GB recommended for BullMQ compilation jobs).

<!-- SRS Documentation Final Sign-off: Complete -->

<!-- SRS Documentation Final Sign-off: Complete -->

<!-- SRS Documentation Final Sign-off: Complete -->
