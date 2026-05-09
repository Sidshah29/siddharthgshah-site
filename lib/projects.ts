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
      { text: "Geocoding + sentiment pass — currently writing", state: "in-flight" },
      { text: "First static map render for the README", state: "next" },
      { text: "Interactive D3 globe layer", state: "future" },
      { text: "Architecture write-up (LinkedIn long-form)", state: "future" },
    ],
    targetMetrics: [
      "~12k events ingested daily",
      "~85% sentiment classifier F1 (held-out test set)",
    ],
    github: "TBD",
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
      { text: "IBM AML synthetic dataset loaded; XGBoost baseline trained", state: "in-flight" },
      { text: "Graph construction in NetworkX — first pass", state: "next" },
      { text: "GNN training and benchmark vs baseline", state: "future" },
      { text: "Reproducible notebook + writeup", state: "future" },
    ],
    targetMetrics: [
      "Beat tabular XGBoost baseline by ≥5 F1 points",
      "Inference latency under 50ms per transaction graph (1000-node neighborhood)",
    ],
    github: "TBD",
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
    tagline: "Cryptographic provenance for every LLM call your organisation makes.",
    interest: "core",
    status: "in-flight",
    arc: [
      { text: "Architecture documented in README", state: "done" },
      { text: "Python middleware decorator", state: "in-flight" },
      { text: "SQLite hash-chain logging", state: "next" },
      { text: "Verification CLI", state: "future" },
      { text: "Documentation, examples, and architecture post", state: "future" },
    ],
    targetMetrics: [
      "<2ms logging overhead per LLM call",
      "Tamper detection in O(log n) with linked hashes",
    ],
    github: "TBD",
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
];

export const slateProjects: SlateProject[] = [
  {
    name: "Multi-Agent Research Synthesiser",
    tagline:
      "Three coordinated agents — searcher, critic, writer — that produce a defensible literature review.",
    interest: "core",
    targetMetric: "Synthesises ≥10-paper review in <5 min",
    github: "TBD",
  },
  {
    name: "FinTech Filings Fine-Tune",
    tagline: "A 7B model that matches GPT-4 on regulatory-filing question answering.",
    interest: "finance",
    targetMetric: "Target: 89% F1 on 500-query held-out set",
    github: "TBD",
  },
  {
    name: "Edge AI Benchmarking Leaderboard",
    tagline:
      "Honest tokens-per-second-per-watt numbers for sub-7B models on consumer hardware.",
    interest: "core",
    targetMetric: "≥5 models on the public leaderboard",
    github: "TBD",
  },
  {
    name: "Quant Strategy Replication",
    tagline: "Six published trading strategies, replicated. Most are paper tigers.",
    interest: "finance",
    targetMetric: "Target: documented survivor count after frictions",
    github: "TBD",
  },
  {
    name: "ESG Earnings-Call NLP",
    tagline: "What S&P 500 firms say about climate vs. what they spend on it.",
    interest: "finance",
    targetMetric: "Target: quantified talk-walk gap, sectoral cut",
    github: "TBD",
  },
  {
    name: "Parliamentary Speech Tracker",
    tagline: "Lok Sabha debates, indexed and searchable for journalists.",
    interest: "media",
    targetMetric: "Target: 1000+ hours of speech indexed",
    github: "TBD",
  },
  {
    name: "Source-Credibility Graph",
    tagline: "When two newspapers cite each other, who sources whom?",
    interest: "media",
    targetMetric: "Target: 50+ outlets in the citation graph",
    github: "TBD",
  },
];
