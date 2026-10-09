# CodeSarthi

> An open-source visual workflow builder and execution engine for compiling modular backend pipelines into production-ready codebases.

---

## Project Documentation Index

All primary project documentation artifacts are located inside the [`Documentation/`](./Documentation) directory:

- **[Problem Statement](./Documentation/Problem%20Statement.md)**: Formal domain analysis, problem definition, user personas, and core value proposition.
- **[Literature Survey](./Documentation/Literature%20Survey.md)**: Comparative analysis of modern visual workflow tools, BaaS platforms, API gateways, and research gap identification.
- **[Project Timeline](./Documentation/Project%20Timeline.md)**: 14-Week SGP development roadmap (Weeks 1–2 Proposal, Weeks 3–14 Weekly Progress Reports).
- **[Requirements](./Documentation/Requirements.md)**: Comprehensive Software Requirements Specification (SRS) & Product Requirements Document (PRD).

---

## Problem & Domain

Developing and deploying backend workflows is often slow, repetitive, and plagued by boilerplates (routing, authorization, database connections, and middleware checks). While low-code platforms exist, they lock developers in and add runtime execution overhead. 

CodeSarthi solves this by providing a visual, drag-and-drop builder to design API pipelines. Workflows can be tested in real-time, monitored dynamically via WebSockets, and compiled directly into standalone, production-grade Fastify/TypeScript projects without vendor lock-in.

---

## Objective

**CodeSarthi** serves backend developers, prototype engineers, and system architects.
* **Target Users**: Developers looking to accelerate API prototyping, design visual logic chains, or generate clean backend microservices.
* **The Pain Point**: High time-to-market for simple APIs, complex boilerplate management, difficulty in mapping service-to-service communication, and platform lock-in of traditional backend workflow builders.
* **The Value**: A zero-lock-in visual workspace. Build visually, test dynamically, monitor execution, and download standard TypeScript source code ready for Docker deployment.

---

## Team & Members

### Team Members:
- **Bhavya Durgani** (ID: `D25CS112`) — [GitHub](https://github.com/BhavyaDurgani)
- **Vainavi Raval** (ID: `D25CS114`)
- **Maitri Sheta** (ID: `D25CS120`)

---

## Tech Stack

### Core Technologies Used:
- **Frontend**: Next.js 14, React Flow, Vanilla CSS, Lucide Icons, Recharts
- **Backend**: Fastify (Node.js), Node VM (`node:vm` Sandbox), BullMQ (Task Queue), Redis
- **Database**: PostgreSQL (Neon Serverless), Prisma ORM
- **APIs & Tools**: Octokit REST (GitHub Integrations), Groq AI / Ollama (AI Workflow Synthesizer), Socket.IO (Live Metrics)
- **Hosting / Infra**: Vercel (Frontend), Docker / Self-hosted (Compiled Backend Codebases)

---

## Key Features

* **Visual Drag-and-Drop Canvas**: Build workflows using modular nodes (HTTP Client, Database Query, JS Transform, JWT Validate, API Key, Switch, If/Else, Cron Scheduler, Responses).
* **AI Workflow Synthesizer**: Describe your desired workflow in plain English and have AI automatically construct, connect, and configure nodes on the canvas.
* **Real-Time Test Runner**: Execute gateway queries directly from a sidebar panel with custom payloads and mock headers.
* **Socket.IO Live Monitor**: Pausable real-time log streaming of execution latencies, status codes, and database metrics.
* **Service Mesh Registry**: Map and visualize microservice communication networks with active link graphs.
* **Zero Lock-in Exporter**: Download a full compiled TypeScript/Prisma/Fastify backend codebase in a ZIP or push directly to a GitHub repository.

---

## How to Run the Project

### Requirements:
- Node.js (v18+)
- PostgreSQL Database URL (Neon or local)
- Redis Server (for compilation queue)
- GitHub Personal Access Token (for Exporter)
- Groq API Key / Ollama Instance (for AI Synthesizer)

### Local Setup:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jinay-Bhatt/Backend-Api.git
   cd Backend-Api
   ```

2. **Configure Database & Environment**:
   Create a `.env` file in the `backend/` directory:
   ```env
   DATABASE_URL="postgresql://..."
   JWT_SECRET="your-super-secret-key"
   GROQ_API_KEY="gsk_..."
   PORT=5000
   ```

3. **Initialize Database**:
   ```bash
   cd backend
   npm install
   npx prisma db push
   npx prisma db seed
   ```

4. **Run Backend Server**:
   ```bash
   npm run dev
   ```

5. **Initialize Frontend**:
   Create a `.env` file in the `frontend/` directory:
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:5000"
   ```
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

---

## Future Scope

- **Pre-built Templates**: One-click workflows for Stripe integration, user onboarding, and messaging notifications.
- **Advanced RBAC**: Granular canvas-level permissions and multi-member team workspace collaboration.
- **Serverless Targets**: Exporters to package workflows into AWS Lambda, Cloudflare Workers, or Google Cloud Functions.

---

## Final Words

CodeSarthi represents a developer-first take on visual scripting: zero restrictions, zero lock-in, and pure TypeScript exports. Happy building!
