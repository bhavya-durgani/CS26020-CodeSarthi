# Problem Statement - CodeSarthi

## Project Overview

* **Project Title**: CodeSarthi — Open Visual Backend Builder & Execution Engine
* **Course / Context**: Software Group Project (SGP - 5th Semester)
* **Team Members**:
  - **Bhavya Durgani** (ID: `D25CS112`)
  - **Vainavi Raval** (ID: `D25CS114`)
  - **Maitri Sheta** (ID: `D25CS120`)

---

## 1. Background & Domain Analysis

In modern web and cloud application development, backend microservices and RESTful API pipelines form the backbone of modern digital infrastructure. However, designing, testing, and deploying backend pipelines remains a major bottleneck in software engineering workflows:

1. **Repetitive Boilerplate Configuration**: Setting up standard backend pipelines requires writing extensive repetitive code for routing, request validation, authentication middleware, database connection pooling, ORM mappings, error handling, and environment configuration.
2. **High Prototyping Friction**: Rapidly testing and iterating on multi-step business logic (e.g., verifying user input, querying PostgreSQL, running custom transformation logic, checking JWT tokens, and returning formatted JSON responses) takes hours of setup time before a functional API endpoint can be tested end-to-end.
3. **Communication Gap Across Engineering Teams**: Visualizing service-to-service communication and microservice dependency graphs is difficult when API logic is buried across multiple code controllers and routing modules.

---

## 2. Limitations of Existing Solutions

While several visual workflow automation and low-code/no-code (LCNC) platforms exist in the market, they introduce significant architectural and operational drawbacks:

### A. Proprietary Runtime Execution & Vendor Lock-In
Platforms such as Zapier, Make (Integromat), and n8n allow developers to construct visual workflows, but execution logic remains tightly coupled to their proprietary runtimes. Once an application outgrows the platform's execution tier or pricing model, developers cannot export standard source code. Migrating away requires a complete manual rewrite of the entire backend codebase.

### B. High Latency & Execution Overhead
Generic visual workflow engines process nodes through interpreted JSON interpreters and heavy event buses, introducing substantial overhead (often 200ms–800ms per request). This renders them unsuitable for performance-critical production microservices.

### C. Rigid Backend-as-a-Service (BaaS) Constraints
Platforms like Firebase or Supabase streamline database access and authentication, but lack visual logic pipeline composition. Developers must still manually write serverless edge functions or local Node.js controllers for custom workflows.

---

## 3. The CodeSarthi Solution

**CodeSarthi** addresses these industry challenges by uniting visual workflow design with **automated Abstract Syntax Tree (AST) code compilation**.

```
+------------------------+      +------------------------+      +------------------------+
|  Visual Canvas Builder | ---> | Dynamic V8 Execution   | ---> | Zero Lock-in AST Code  |
|  (React Flow DAG)      |      | Gateway Engine (<50ms) |      | Compiler (TypeScript)  |
+------------------------+      +------------------------+      +------------------------+
                                                                            |
                                                                            v
                                                                +------------------------+
                                                                | GitHub Repository Push |
                                                                | & Docker Deployment    |
                                                                +------------------------+
```

### Key Technical Innovations:

1. **Visual Drag-and-Drop Directed Acyclic Graph (DAG) Canvas**: Construct complete API endpoints visually using modular nodes (HTTP Triggers, PostgreSQL Queries, Custom JS Code, JWT Security, Switch Conditionals, API Key Validation, Cron Schedulers, and Response Handlers).
2. **Dynamic Managed Gateway Engine**: Test and execute workflows in real-time with sub-50ms execution engine overhead, utilizing Node.js `node:vm` secure sandboxes with strict CPU time (200ms limit) and memory caps (64MB).
3. **Zero Lock-In AST Compiler**: Compile visual DAG graphs directly into clean, human-readable, standalone TypeScript codebases leveraging Fastify, Prisma ORM, and standard Node.js patterns.
4. **Automated GitHub & Docker Export**: Package compiled applications with multi-stage `Dockerfile`, `docker-compose.yml`, OpenAPI/Swagger specifications, and push directly to GitHub repositories via the GitHub Octokit REST API.
5. **Real-Time Log Stream & Socket.IO Monitor**: Stream execution latencies, status codes, payload audit logs, and performance metrics live to the browser console.
6. **AI Workflow Synthesizer**: Generate and wire complex canvas nodes automatically from natural language prompts using LLM APIs (Groq / local Ollama).

---

## 4. Target User Personas

| Persona | Role | Primary Goal | Pain Point Solved |
| :--- | :--- | :--- | :--- |
| **Alex** | Indie Hacker / Prototype Engineer | Rapidly validate SaaS backend ideas in minutes | Eliminates hours spent configuring Fastify, Prisma schemas, JWT auth, and routing boilerplate. |
| **Sarah** | Frontend Engineer | Build fully functional backend APIs without deep Node/Prisma boilerplate | Enables visual creation of database endpoints, payload transforms, and API keys without waiting for dedicated backend teams. |
| **David** | System Architect | Design, visualize, and export clean TypeScript microservices | Eliminates vendor lock-in by generating deployable, Dockerized TypeScript projects ready for production hosting. |

---

## 5. Core Objectives & Expected Impact

### Core Objectives:
- **Accelerate API Prototyping**: Reduce standard REST API creation time from hours to under 2 minutes.
- **Ensure Complete Code Ownership**: Deliver 100% vendor-lock-in-free source code with single-click ZIP download or GitHub repository push.
- **High-Performance Gateway**: Maintain dynamic execution engine overhead under 50ms per request.
- **Secure VM Isolation**: Securely execute user-defined JavaScript transformation code inside isolated V8 VM contexts without exposing system environment variables or blocking the main event loop.

### Measurable Success Metrics:
- **Deployment Time**: Users can build, test, and export a secure, database-backed API endpoint in < 3 minutes.
- **Compilation Cleanliness**: Exported TypeScript code passes ESLint with 0 warnings/errors and requires 0 custom runtime dependencies.
- **System Uptime & Latency**: Gateway engine maintains 99.9% uptime with average execution latencies < 50ms.
