import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2.01-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

const projects = [
  {
    id: "minilsm",
    title: "MiniLSM",
    tagline: "Crash-safe LSM-tree key-value storage engine",
    category: "Systems",
    status: "Open Source",
    statusColor: "#6F70B5",
    color: "#6F70B5",
    description:
      "A crash-safe LSM-tree storage engine built from scratch in Python, with a checksummed write-ahead log, torn-write recovery, Bloom filters, and streaming compaction.",
    longDescription:
      "Built a crash-safe LSM-tree storage engine from scratch with zero lost acknowledged writes across 1,000 randomized SIGKILL trials (~2.2M operations), using a checksummed write-ahead log, torn-write recovery, and atomic file renames. Bloom filters (10 bits/key) cut disk reads per missing-key lookup 99% and raised lookup throughput 4.5×. Streaming k-way merge compaction reduced disk usage 54% and missing-key p50 latency ~40×. A negative test proved the crash harness detects real data loss, and each optimization was checked against saved baselines.",
    stack: ["Python", "LSM-Tree", "WAL", "Bloom Filters", "Compaction"],
    links: { github: "https://github.com/PriyankaSiwach/Storage-Engine" },
    metrics: ["0 lost writes · 1K crash trials", "4.5× lookup throughput", "54% less disk · 40× faster p50"],
    logoPlaceholder: "🗄️",
  },
  {
    id: "chefcoach",
    title: "ChefCoach",
    tagline: "GPT-4o vision pipeline with rate limiting & CI",
    category: "iOS App",
    status: "Live on App Store",
    statusColor: "#898AC4",
    color: "#898AC4",
    description:
      "An App Store iOS app with a GPT-4o vision pipeline for fridge scanning and recipe generation — backed by token-bucket rate limiting, an LRU cache, JWT auth, and GitHub Actions CI so API cost stays controlled and regressions get caught before release.",
    longDescription:
      "Shipped ChefCoach with a GPT-4o vision pipeline and a local fallback for API outages. Built a GitHub Actions CI pipeline with Vitest covering scan quotas, allergy filters, and malformed AI JSON. Engineered a token-bucket rate limiter and an LRU cache (HashMap + doubly linked list) on the recipe-generation endpoint to cut redundant OpenAI calls and cap per-user API cost, alongside JWT auth and input validation. Stack: React, TypeScript, Capacitor, Supabase, OpenAI, RevenueCat.",
    stack: ["React", "TypeScript", "Capacitor", "Supabase", "OpenAI", "RevenueCat"],
    links: {
      app: "https://apps.apple.com/us/app/chefcoach/id6777299606",
      github: "https://github.com/PriyankaSiwach/ChefCoach",
    },
    metrics: ["GPT-4o vision + fallback", "Token-bucket + LRU cache", "Vitest CI pipeline"],
    logoPlaceholder: "🍳",
  },
  {
    id: "applyfy",
    title: "Applyfy",
    tagline: "GPT-4o job platform with AWS resume-parsing backend",
    category: "AI Job Platform",
    status: "Live · applyfy.net",
    statusColor: "#A2AADB",
    color: "#A2AADB",
    description:
      "Built Applyfy, an AI job platform integrating OpenAI GPT-4o across 12 features, protected by Redis-backed rate limiting (5 req/min/user), reaching 36 signups.",
    longDescription:
      "Engineered a serverless AWS resume-parsing pipeline (API Gateway, Lambda, S3, DynamoDB, WAF, CDK). Diagnosed and isolated two independent throttling layers — WAF edge rate limiting vs. Lambda account concurrency — under 50-request concurrent load, sustaining 45 req/sec at 1.9s latency for legitimate traffic.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Redis", "AWS", "Lambda", "DynamoDB", "CDK"],
    links: {
      live: "https://applyfy.net",
      github: "https://github.com/PriyankaSiwach/Applyfy",
    },
    metrics: ["GPT-4o · 12 features", "36 signups", "45 req/sec · 1.9s latency"],
    logoPlaceholder: "⚡",
  },
  {
    id: "whiteboard",
    title: "Collaborative Whiteboard",
    tagline: "Real-time multiplayer canvas with CRDTs & Redis",
    category: "Distributed Systems",
    status: "Built · Scalable",
    statusColor: "#7B7DB8",
    color: "#7B7DB8",
    description:
      "A real-time collaborative whiteboard where multiple users draw and edit simultaneously with conflict-free sync. Built for concurrent collaboration — CRDTs keep every client consistent without a single source of truth locking strokes, while Redis handles low-latency event fan-out across sessions.",
    longDescription:
      "I designed the sync layer around CRDTs so concurrent edits merge cleanly instead of overwriting each other — strokes, shapes, and cursors stay consistent even when users draw at the same time. Redis pub/sub broadcasts board updates to connected clients with low latency, and Redis also backs ephemeral session state for active rooms. The Redis instance runs in Docker so local development and deployment share the same reproducible setup. Load-tested the system with 100+ concurrent users collaborating on a shared canvas without breaking sync integrity.",
    stack: ["CRDTs", "Redis", "Docker", "WebSockets", "TypeScript", "Node.js"],
    links: { github: "https://github.com/PriyankaSiwach/Collaborative_Whiteboard" },
    metrics: ["100+ concurrent users", "CRDT conflict-free sync", "Redis pub/sub + Docker"],
    logoPlaceholder: "🖊️",
  },
  {
    id: "satellite",
    title: "Satellite Telemetry",
    tagline: "Satellite tracking with AWS-backed telemetry storage",
    category: "Cloud · Space Data",
    status: "Built",
    statusColor: "#A2AADB",
    color: "#A2AADB",
    description:
      "A satellite telemetry website that tracks latitude, longitude, and speed for satellites in space, with AWS DynamoDB integrated to store and retrieve telemetry data.",
    longDescription:
      "Built a satellite telemetry web app that tracks latitude, longitude, and speed for satellites in space. AWS DynamoDB stores and retrieves telemetry so the cloud data layer can scale with the tracking workload.",
    stack: ["AWS DynamoDB", "AWS", "Next.js", "TypeScript", "REST APIs"],
    links: { github: "https://github.com/PriyankaSiwach/satellite-platform" },
    metrics: ["Lat / long / speed tracking", "DynamoDB storage", "Cloud-backed pipeline"],
    logoPlaceholder: "🛰️",
  },
  {
    id: "brain",
    title: "Brain · AIN Ventures",
    tagline: "LLM-powered startup pitch deck analyzer",
    category: "AI System",
    status: "Internal · Production",
    statusColor: "#6E6FAB",
    color: "#6E6FAB",
    description:
      "An internal LLM system used at AIN Ventures to review startup pitch decks and apply AI-driven filtering to pre-seed investment opportunities. Handles unstructured founder data, extracts investment signals, and generates structured investment memos.",
    longDescription:
      "At AIN Ventures, I use Brain — an internal LLM pipeline — to process incoming startup pitch decks. The system extracts key signals about the founding team, market size, traction, and product differentiation, then outputs a structured memo that supports investment decisions. I also designed prompt frameworks to improve output consistency.",
    stack: ["LLM", "Prompt Engineering", "Python", "VC Analysis", "RAG"],
    links: {},
    metrics: ["50+ pitch decks reviewed", "Pre-seed deal flow filtering", "Structured investment memos"],
    logoPlaceholder: "🧠",
  },
  {
    id: "rag-qa",
    title: "RAG Document Q&A",
    tagline: "Ask questions about any document using LangChain & Pinecone",
    category: "AI · RAG",
    status: "Open Source",
    statusColor: "#898AC4",
    color: "#898AC4",
    description:
      "A retrieval-augmented generation app that embeds document chunks with OpenAI, stores them in Pinecone, and answers questions only from your files — not from the model’s general knowledge.",
    longDescription:
      "Loads documents, splits them into chunks, converts each chunk into OpenAI embeddings, and stores them in Pinecone. When you ask a question, semantic search finds the most relevant chunks and GPT answers from those passages only. Built with Python, LangChain, Pinecone, and OpenAI.",
    stack: ["Python", "LangChain", "Pinecone", "OpenAI", "RAG"],
    links: { github: "https://github.com/PriyankaSiwach/rag-document-qa" },
    metrics: ["Document embeddings", "Semantic search", "Grounded GPT answers"],
    logoPlaceholder: "📄",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    tagline: "This site — built with Next.js + TypeScript",
    category: "Web App",
    status: "You're Here",
    statusColor: "#C0C9EE",
    color: "#C0C9EE",
    description:
      "A fully custom portfolio built with Next.js, TypeScript, and Tailwind CSS featuring animated particle systems, interactive typewriter effects, smooth scroll animations, and a warm professional aesthetic.",
    longDescription:
      "This portfolio was designed and built from scratch. Features a canvas-based particle animation, typewriter effect, glass-card components, and a warm periwinkle + cream color palette. Responsive across all devices.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "React 19"],
    links: { github: "https://github.com/PriyankaSiwach/priyanka-portfolio" },
    metrics: ["Particle animation system", "Typewriter effects", "Responsive design"],
    logoPlaceholder: "🌐",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-soft">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ink-300 hover:text-periwinkle-400 transition-colors mb-12">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back home
        </Link>

        <div className="mb-16">
          <span className="section-label block mb-4">Projects</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight">
            Things I&apos;ve{" "}
            <span className="text-gradient">Built</span>
          </h1>
          <p className="text-ink-500 text-lg mt-4 max-w-2xl">
            A collection of products I&apos;ve shipped — from App Store apps to AI-powered web platforms and internal tools.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border mb-4"
                    style={{ background: `${project.color}12`, borderColor: `${project.color}30` }}
                  >
                    {project.logoPlaceholder}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: project.color }}>
                    {project.category}
                  </div>
                  <div
                    className="flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-mono border w-fit"
                    style={{ borderColor: `${project.statusColor}35`, color: project.statusColor, background: `${project.statusColor}0A` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.statusColor }} />
                    {project.status}
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold text-ink-900 mb-1">{project.title}</h2>
                  <p className="text-ink-500 font-medium mb-4">{project.tagline}</p>

                  <p className="text-ink-700 leading-relaxed mb-4">{project.description}</p>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((m) => (
                      <span key={m} className="px-3 py-1.5 bg-periwinkle-100/60 rounded-lg text-xs text-ink-500 border border-periwinkle-200/50 font-mono">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${project.color}25, transparent)` }} />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-periwinkle-200/70 text-ink-500 hover:text-ink-900 hover:bg-periwinkle-100/60 transition-colors"
                          aria-label={`${project.title} on GitHub`}
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg font-mono text-xs border"
                            style={{ borderColor: `${project.color}28`, color: `${project.color}BB` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 flex-shrink-0">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-periwinkle-400 hover:text-periwinkle-500 transition-colors">
                          Live site ↗
                        </a>
                      )}
                      {project.links.app && (
                        <a href={project.links.app} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-periwinkle-400 hover:text-periwinkle-500 transition-colors">
                          App Store ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
