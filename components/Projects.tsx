"use client";
import { useState } from "react";
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
      "A crash-safe LSM-tree storage engine built from scratch in Python. Zero lost acknowledged writes across 1,000 randomized SIGKILL trials, with Bloom filters that cut missing-key disk reads 99% and compaction that shrank disk usage 54%.",
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
      "An App Store iOS app with a GPT-4o vision pipeline, local API-outage fallback, token-bucket rate limiting, LRU caching, JWT auth, and GitHub Actions + Vitest CI covering scan quotas, allergy filters, and malformed AI JSON.",
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
      "Built Applyfy, an AI job platform integrating OpenAI GPT-4o across 12 features, protected by Redis-backed rate limiting (5 req/min/user), reaching 36 signups. Engineered a serverless AWS resume-parsing pipeline (API Gateway, Lambda, S3, DynamoDB, WAF, CDK) and sustained 45 req/sec at 1.9s latency under concurrent load.",
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
      "A real-time collaborative whiteboard where multiple users draw and edit simultaneously with conflict-free sync. Uses CRDTs for eventual consistency, Redis pub/sub for low-latency fan-out, and Dockerized Redis for reproducible local and deployed environments — tested with 100+ concurrent users.",
    stack: ["CRDTs", "Redis", "Docker", "WebSockets", "TypeScript"],
    links: { github: "https://github.com/PriyankaSiwach/Collaborative_Whiteboard" },
    metrics: ["100+ concurrent users", "CRDT conflict-free sync", "Redis + Docker"],
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
    stack: ["AWS DynamoDB", "AWS", "Next.js", "TypeScript"],
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
    stack: ["LLM", "Prompt Engineering", "Python", "VC Analysis", "RAG"],
    links: {},
    metrics: ["50+ decks reviewed", "Pre-seed filtering", "Investment memos"],
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
      "A custom portfolio built with Next.js, TypeScript, and Tailwind CSS — featuring a soft glass aesthetic, subtle network particle backdrop, and fully responsive layout.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: { github: "https://github.com/PriyankaSiwach/priyanka-portfolio" },
    metrics: ["Responsive design", "Glass UI", "Smooth scroll"],
    logoPlaceholder: "🌐",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-28 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">Projects</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="flex items-center justify-between mb-12 gap-4">
          <p className="text-ink-300 font-mono text-sm">A few things I&apos;ve shipped</p>
          <Link
            href="/projects"
            className="font-mono text-xs tracking-widest uppercase text-periwinkle-400 hover:text-periwinkle-500 transition-colors flex items-center gap-1.5"
          >
            View All
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative group glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                hovered === project.id ? "shadow-soft -translate-y-0.5" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                    style={{
                      background: `${project.color}12`,
                      borderColor: `${project.color}30`,
                    }}
                  >
                    {project.logoPlaceholder}
                  </div>
                  <div>
                    <div
                      className="font-mono text-[10px] uppercase tracking-widest mb-1"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{project.title}</h3>
                  </div>
                </div>

                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono border shrink-0"
                  style={{
                    borderColor: `${project.statusColor}35`,
                    color: project.statusColor,
                    background: `${project.statusColor}0A`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: project.statusColor }}
                  />
                  {project.status}
                </div>
              </div>

              <p className="text-ink-700 text-sm mb-2 font-medium">{project.tagline}</p>
              <p className="text-ink-500 text-sm leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 bg-periwinkle-100/50 rounded-lg text-xs text-ink-500 border border-periwinkle-200/50 font-mono"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div
                className="h-px mb-5"
                style={{ background: `linear-gradient(90deg, ${project.color}25, transparent)` }}
              />

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-periwinkle-200/70 text-ink-500 hover:text-ink-900 hover:bg-periwinkle-100/60 transition-colors"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded font-mono text-xs border"
                        style={{ borderColor: `${project.color}25`, color: `${project.color}` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-periwinkle-400 hover:text-periwinkle-500 transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {project.links.app && (
                    <a
                      href={project.links.app}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-periwinkle-400 hover:text-periwinkle-500 transition-colors"
                    >
                      App Store ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
