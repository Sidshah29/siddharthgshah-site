// ─────────────────────────────────────────────────────────────────────────────
// Projects — anchor (Now Building) and slate (The Slate)
//
// Anchor projects have full deeper content (architecture / choices / risks /
// unlocks) that opens in-place from the Now Building card. Slate projects are
// terse: name, tagline, single target metric, GitHub.
//
// "TBD" GitHub URLs render as disabled buttons in the UI — the owner replaces
// them with real URLs as repos go public. Do not invent URLs.
// ─────────────────────────────────────────────────────────────────────────────

export type Interest = "core" | "finance" | "media";
export type AnchorStatus = "in-flight" | "converging" | "landed";
export type MilestoneState = "done" | "in-flight" | "next" | "future";

export type Milestone = {
  text: string;
  state: MilestoneState;
};

export type AnchorDeeper = {
  architecture: string;
  choices: string[];
  risks: string[];
  unlocks: string;
};

export type AnchorProject = {
  slug: string;
  name: string;
  tagline: string;
  interest: Interest;
  status: AnchorStatus;
  arc: Milestone[];
  targetMetrics: string[];
  github: string;
  deeper: AnchorDeeper;
};

export type SlateProject = {
  name: string;
  tagline: string;
  interest: Interest;
  targetMetric: string;
  github: string;
};

export const anchorProjects: AnchorProject[] = [
  {
    slug: "geopolitical-atlas",
    name: "Geopolitical News-Sentiment Atlas",
    tagline: "Where the world's attention concentrates, mapped in real time.",
    interest: "media",
    status: "in-flight",
    arc: [
      { text: "GDELT 2.0 ingest pipeline is humming", state: "done" },
      {
        text: "Geocoding + sentiment pass — currently writing",
        state: "in-flight",
      },
      { text: "First static map render for the README", state: "next" },
      { text: "Interactive D3 globe layer", state: "future" },
      { text: "Architecture write-up (LinkedIn long-form)", state: "future" },
    ],
    targetMetrics: [
      "~12k events ingested daily",
      "~85% sentiment classifier F1 (held-out test set)",
    ],
    github: "https://github.com/Sidshah29/geopolitical-news-atlas",
    deeper: {
      architecture:
        "GDELT 2.0 emits a global event feed every 15 minutes, roughly 12,000 records per cycle. The pipeline ingests via a scheduled Python worker, normalizes locations through a geocoding layer (OpenStreetMap Nominatim, with caching), runs a fine-tuned DistilBERT for sentiment, and writes to DuckDB as the analytical store. Visualization is a static map for the README — proving the pipeline works end-to-end — followed by a D3-driven interactive globe layered onto the project page.",
      choices: [
        "DuckDB over PostgreSQL — the dataset fits in memory and the analytical queries dominate the workload. Postgres is a hammer this nail does not need.",
        "DistilBERT over GPT-class models for sentiment — 60x cheaper at inference, the gap on news headlines is under 3 F1 points, and the project must run on a personal cloud budget.",
        "Static map first, interactive globe second — a screenshot in the README is what gets a recruiter to spend 30 more seconds on the repo. The globe is the closer.",
      ],
      risks: [
        "GDELT's geocoding noise floor is genuinely bad in non-English regions. Mitigation: cross-reference with the article's reported location field where present.",
        "Sentiment on geopolitical news is harder than retail-product reviews. The 85% target may be optimistic; will publish whatever the test set says.",
      ],
      unlocks:
        "Once landed, this becomes the substrate for downstream investigations — fiscal-federalism style data journalism but with the ingest layer already done.",
    },
  },
  {
    slug: "graph-aml",
    name: "Graph-AML Detection",
    tagline:
      "Money-laundering detection that earns its complexity over the tabular baseline.",
    interest: "finance",
    status: "in-flight",
    arc: [
      { text: "Repo and README scaffolded", state: "done" },
      {
        text: "IBM AML synthetic dataset loaded; XGBoost baseline trained",
        state: "in-flight",
      },
      { text: "Graph construction in NetworkX — first pass", state: "next" },
      { text: "GNN training and benchmark vs baseline", state: "future" },
      { text: "Reproducible notebook + writeup", state: "future" },
    ],
    targetMetrics: [
      "Beat tabular XGBoost baseline by ≥5 F1 points",
      "Inference latency under 50ms per transaction graph (1000-node neighborhood)",
    ],
    github: "https://github.com/Sidshah29/graph-aml-detection",
    deeper: {
      architecture:
        "Built on the IBM AML synthetic dataset — 30M+ transactions with explicit labels for laundering patterns. The tabular baseline is XGBoost on engineered features (transaction velocity, account age, counterparty diversity). The graph variant constructs a transaction graph in NetworkX, samples k-hop neighborhoods around each transaction, and trains a GraphSAGE-style GNN in PyTorch Geometric. The headline is the delta between the two — does graph topology buy you anything that engineered features cannot?",
      choices: [
        "IBM's synthetic dataset over a real-world leak — labels are clean, distribution is documented, results are reproducible by anyone with a GPU.",
        "GraphSAGE over GAT — comparable accuracy on this dataset class in the literature, half the inference cost. Latency matters when the use case is real-time scoring.",
        "PyTorch Geometric over DGL — better Python-native ergonomics, larger community, and the documentation is honest about its rough edges.",
      ],
      risks: [
        "Synthetic datasets reward graph methods more than real-world data does. The honest framing is to publish the lift on synthetic and acknowledge what real adoption would need.",
        "Inference latency may force a smaller GNN than accuracy would prefer. The benchmark publishes both numbers; the reader decides.",
      ],
      unlocks:
        "Once landed, this is the credibility-anchor for any FinTech application going forward — a benchmarked, reproducible piece of ML on a domain that matters.",
    },
  },
  {
    slug: "audit-chain",
    name: "LLM Audit-Chain",
    tagline:
      "Cryptographic provenance for every LLM call your organisation makes.",
    interest: "core",
    status: "in-flight",
    arc: [
      { text: "Architecture documented in README", state: "done" },
      { text: "Python middleware decorator", state: "in-flight" },
      { text: "SQLite hash-chain logging", state: "next" },
      { text: "Verification CLI", state: "future" },
      {
        text: "Documentation, examples, and architecture post",
        state: "future",
      },
    ],
    targetMetrics: [
      "<2ms logging overhead per LLM call",
      "Tamper detection in O(log n) with linked hashes",
    ],
    github: "https://github.com/Sidshah29/llm-audit-chain",
    deeper: {
      architecture:
        "Drop-in middleware that wraps any LLM SDK call (OpenAI, Anthropic, Google) via a decorator. Every call writes a record to a local SQLite store: prompt hash, model identifier, response, timestamp, and the hash of the previous record. The chain is hash-linked, like a lightweight blockchain — modify any record and the chain breaks at the next verification pass. A standalone CLI verifies chain integrity over arbitrary date ranges. Built for compliance teams who need to answer 'what exactly did our AI say last quarter?' six months after the fact.",
      choices: [
        "SQLite over PostgreSQL — single-file, embeddable, no infrastructure dependency. Compliance tools that are hard to deploy do not get deployed.",
        "Hash-chain over Merkle tree — the operations a compliance team actually performs are linear scans, not partial verification. The simpler structure wins.",
        "Decorator pattern over proxy server — zero infrastructure changes for the consuming team. Add three lines to import; you are now logging.",
      ],
      risks: [
        "Hash-chain rewrites become expensive over very long audit periods. Real production deployments would need periodic chain rotation.",
        "Tamper-evidence is not tamper-prevention. The system flags forensically, not preventively. Honest framing in documentation matters.",
      ],
      unlocks:
        "Once landed, this is the case study that demonstrates production-grade compliance thinking — the kind of project a regulated FinTech employer reads as evidence of seriousness.",
    },
  },
  {
    slug: "complalg",
    name: "Complalg",
    tagline:
      "An AI-native Compliance Control Room — file Reg-M, surveil trades, and stay audit-ready in one loop.",
    interest: "finance",
    status: "in-flight",
    arc: [
      {
        text: "Three months of user research with compliance officers and control-room operators",
        state: "done",
      },
      {
        text: "Email → Copilot → Reg-M → autofill TN loop shipped end-to-end",
        state: "done",
      },
      {
        text: "Chrome MV3 extension live; 14+ FINRA TN fields autofill with preview / commit / undo",
        state: "done",
      },
      {
        text: "Demo to a 20+-year industry insider — partnership and pilot trials offered",
        state: "done",
      },
      { text: "Applied to Y Combinator — Winter 2026 batch", state: "done" },
      {
        text: "Wiring Restricted/Watch List objects into the same Copilot recipes",
        state: "in-flight",
      },
      {
        text: "Private pilot with first design partners — January 15-31, 2026",
        state: "next",
      },
      {
        text: "Surveillance brief module + Syndicate & Position tracker (greenshoe, CNS FTD close-outs)",
        state: "future",
      },
    ],
    targetMetrics: [
      "Minutes-not-hours per RPN/NOI/TN filing — measured from mandate email to filed form with audit trail",
      "False-positive noise in surveillance briefs collapsed into a clearable morning brief",
      "Field-level provenance: every autofilled value bound to source data, undoable in one click",
    ],
    github: "https://github.com/Sidshah29/Complalg",
    deeper: {
      architecture:
        "An event-driven, API-first monolith in NestJS/TypeScript with async workers handling enrichment and filings, fronted by a Chrome MV3 extension and a React/Tailwind web app. The background service worker handles parsing, job orchestration, and in-page autofill via content scripts. Market enrichment runs through a deterministic provider waterfall — SEC/EDGAR for public float, then Finnhub/FMP/Yahoo for quotes — cached in Redis, with full provenance per field. Postgres via Prisma is the system of record, with row-level audit tables and pgvector for embeddings/RAG over filings, regulatory rules, and prior deals. The AI layer is a containerised inference service behind FastAPI — model-agnostic by design, supporting self-hosted open-weights and customer-provided endpoints, with strict-JSON schema extraction and rules-grounded output. A declarative YAML rules/recipes engine drives Reg-M calculations and multi-step filing automations, so new jurisdictions like MAR can be added without redeploys.",
      choices: [
        "NestJS over Express on the server tier — control rooms need enforced module boundaries, decorator-driven access control, and DI for audit-grade observability. Express bolts none of that on cleanly.",
        "Living forms bound to a single Deal Object, not point-in-time autofill — when deal details change, every dependent field recomputes through the same recipe. Compliance teams do not get to be surprised by stale forms.",
        "pgvector inside Postgres over a managed vector DB — regulatory data residency favours one self-hosted store with one audit trail over fanning state to a SaaS vendor with its own.",
        "Chrome MV3 extension as the primary surface, not a web dashboard — bankers and compliance officers do not switch tabs. The Copilot has to live inside the email, the form, and the canvas they are already working in.",
        "Model-agnostic inference router — banks will not deploy a system that hard-binds to one foundation-model vendor. The router supports self-hosted weights and customer endpoints from day one.",
      ],
      risks: [
        "Compliance LLMs that hallucinate are worse than no LLM. Mitigation: schema-strict extraction, rules-grounded generation against the YAML recipes engine, and a deterministic post-generation citation check before any field commits.",
        "Filings are deadline-driven; downtime in the Copilot is a regulatory risk for the customer, not just an SLA breach. Mitigation: a manual-data fallback path that lets pilots proceed even if a market-data provider slips.",
        "Browser-extension permission scope can move from acceptable to blocking inside a single security review. The MV3 extension is designed to read only the active form's DOM — no broader page surfacing, no telemetry beyond the audit trail.",
      ],
      unlocks:
        "The first system that makes financial compliance fast by design rather than by heroics. Once the filings loop lands at design-partner pilots, the same Copilot recipes extend into surveillance briefs that summarise patterns instead of dumping raw alerts, watch/restricted-list automation, and date-driven syndicate work — greenshoe exercises, CNS FTD close-outs — that today live in spreadsheets and inboxes. It becomes the assembly line that competitors who bolted AI onto 10-20-year-old workflows cannot retrofit into.",
    },
  },
];

export const slateProjects: SlateProject[] = [
  {
    name: "Multi-Agent Research Synthesiser",
    tagline:
      "Three coordinated agents — searcher, critic, writer — that produce a defensible literature review.",
    interest: "core",
    targetMetric: "Synthesises ≥10-paper review in <5 min",
    github: "https://github.com/Sidshah29/multi-agent-research-orchestrator",
  },
  {
    name: "FinTech Filings Fine-Tune",
    tagline:
      "A 7B model that matches GPT-4 on regulatory-filing question answering.",
    interest: "finance",
    targetMetric: "89% F1 on 500-query held-out set",
    github: "https://github.com/Sidshah29/fintech-llm-finetune",
  },
  {
    name: "Edge AI Benchmarking Leaderboard",
    tagline:
      "Honest tokens-per-second-per-watt numbers for sub-7B models on consumer hardware.",
    interest: "core",
    targetMetric: "≥5 models on the public leaderboard",
    github: "https://github.com/Sidshah29/edge-ai-benchmark",
  },
  {
    name: "Quant Strategy Replication",
    tagline:
      "Six published trading strategies, replicated. Most are paper tigers.",
    interest: "finance",
    targetMetric: "documented survivor count after frictions",
    github: "https://github.com/Sidshah29/quant-backtest-realistic",
  },
  {
    name: "ESG Earnings-Call NLP",
    tagline: "What S&P 500 firms say about climate vs. what they spend on it.",
    interest: "finance",
    targetMetric: "quantified talk-walk gap, sectoral cut",
    github: "https://github.com/Sidshah29/earnings-sentiment-engine",
  },
  {
    name: "Parliamentary Speech Tracker",
    tagline: "Lok Sabha debates, indexed and searchable for journalists.",
    interest: "media",
    targetMetric: "Aiming 1000+ hours of speech indexed",
    github: "https://github.com/Sidshah29/parliament-tracker",
  },
  {
    name: "Source-Credibility Graph",
    tagline: "When two newspapers cite each other, who sources whom?",
    interest: "media",
    targetMetric: "Looking 50+ outlets in the citation graph",
    github: "https://github.com/Sidshah29/newsroom-source-graph",
  },
  {
    name: "Predictive Cardio Health",
    tagline:
      "Supervised ML flagging early cardiovascular risk from vitals/labs — Flask REST service with automated Python+SQL ingestion, validation, and feature pipelines.",
    interest: "core",
    targetMetric:
      "~85% classification accuracy · cross-validation + HP tuning for generalisation",
    github: "https://github.com/Sidshah29/Predictive-Cardio-Health",
  },
  {
    name: "AI Forensic Image Analysis",
    tagline:
      "CNN for object/trace detection hardened with error-level analysis, augmentation, and noise-robust preprocessing. Led a 10-person build to a notebook → report workflow analysts could re-run.",
    interest: "core",
    targetMetric:
      "~87% detection accuracy · packaged for repeatable analyst handoff",
    github: "TBD",
  },
];
