"use client";

import { useEffect, useState } from "react";
import { PenTool, Satellite, Database, FileSearch } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2.01-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}

type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  details: string[];
  cardPoints?: string[];
  stack: string[];
  accent: string;
  status: string;
  live: boolean;
  icon?: string;
  github?: string;
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "minilsm",
    title: "MiniLSM",
    category: "Systems",
    tagline: "Crash-safe LSM-tree key-value storage engine",
    description:
      "A crash-safe LSM-tree storage engine built from scratch in Python. A checksummed write-ahead log keeps acknowledged writes durable across crashes, Bloom filters skip almost every missing-key disk read, and streaming compaction collapses old tables into one.",
    cardPoints: [
      "0 lost writes across 1,000 SIGKILL trials",
      "99% fewer disk reads · 4.5× lookups",
      "54% less disk · ~40× faster p50",
    ],
    details: [
      "Zero lost acknowledged writes across 1,000 randomized SIGKILL trials (~2.2M operations) via a checksummed write-ahead log, torn-write recovery, and atomic file renames",
      "Per-file Bloom filters cut disk reads per missing-key lookup 99% (21.96 → 0.19) and raised lookup throughput 4.5× (5.7K → 25.4K/sec)",
      "Streaming k-way merge compaction collapsed 44 SSTables into 1, cutting disk usage 54% and missing-key p50 latency ~40×",
      "Crash harness fails when the log write is removed, and each optimization is checked against saved baselines",
    ],
    stack: ["Python", "LSM-Tree", "WAL", "Bloom Filters", "Compaction"],
    accent: "#6F70B5",
    status: "Open Source",
    live: false,
    github: "https://github.com/PriyankaSiwach/Storage-Engine",
    links: [
      { label: "View on GitHub", href: "https://github.com/PriyankaSiwach/Storage-Engine" },
    ],
  },
  {
    id: "chefcoach",
    title: "ChefCoach",
    category: "iOS App",
    tagline: "GPT-4o vision pipeline with rate limiting & CI",
    description:
      "An App Store iOS app with a GPT-4o vision pipeline for fridge scanning and recipe generation — backed by token-bucket rate limiting, an LRU cache, JWT auth, and a GitHub Actions CI suite so API cost stays controlled and regressions get caught before release.",
    details: [
      "Shipped to the App Store with a GPT-4o vision pipeline and local fallback for API outages",
      "GitHub Actions CI with Vitest covering scan quotas, allergy filters, and malformed AI JSON",
      "Token-bucket rate limiter + LRU cache (HashMap + doubly linked list) on recipe generation to cut redundant OpenAI calls and cap per-user API cost",
      "JWT auth and input validation on the recipe-generation endpoint",
    ],
    stack: ["React", "TypeScript", "Capacitor", "Supabase", "OpenAI", "RevenueCat"],
    accent: "#6F70B5",
    icon: "/chefcoach-icon.png",
    status: "Live on App Store",
    live: true,
    github: "https://github.com/PriyankaSiwach/ChefCoach",
    links: [{ label: "Open App Store", href: "https://apps.apple.com/us/app/chefcoach/id6777299606" }],
  },
  {
    id: "applyfy",
    title: "Applyfy",
    category: "AI Job Platform",
    tagline: "Resume–job scoring with cost-controlled API layer",
    description:
      "An end-to-end AI job-prep platform at applyfy.net that scores resumes against job posts and returns keyword gaps and rewrite suggestions in under 2 minutes — with a token-bucket rate limiter across 15+ API routes to throttle OpenAI usage and prevent cost overrun.",
    details: [
      "Scores resumes against job posts and returns keyword gaps plus rewrite suggestions in under 2 minutes",
      "Token-bucket rate limiter across 15+ API routes to throttle per-user OpenAI calls and prevent cost overrun",
      "Auth, payments, and data layer with Clerk, Stripe, and Supabase",
      "Live production platform at applyfy.net",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase", "Clerk", "Stripe", "OpenAI"],
    accent: "#5A5B9A",
    icon: "/applyfy-icon.png",
    status: "Live · applyfy.net",
    live: true,
    github: "https://github.com/PriyankaSiwach/Applyfy",
    links: [{ label: "Visit Website", href: "https://applyfy.net/" }],
  },
  {
    id: "whiteboard",
    title: "Collaborative Whiteboard",
    category: "Distributed Systems",
    tagline: "Real-time multiplayer canvas with CRDTs & Redis",
    description:
      "A real-time collaborative whiteboard where multiple users draw and edit at once with conflict-free sync. CRDTs keep every client consistent under concurrent edits, Redis pub/sub fans out updates with low latency, and Redis runs in Docker for a reproducible local and deployed setup — load-tested with 100+ concurrent users.",
    cardPoints: [
      "CRDT conflict-free sync",
      "Redis pub/sub for real-time fan-out",
      "Dockerized Redis · 100+ concurrent users",
    ],
    details: [
      "CRDT-based sync so concurrent strokes and shapes merge cleanly without overwrites",
      "Redis pub/sub for low-latency broadcast across active board sessions",
      "Redis also backs ephemeral room/session state for connected clients",
      "Dockerized Redis for identical local and deployment environments",
      "Load-tested with 100+ concurrent users on a shared canvas",
    ],
    stack: ["CRDTs", "Redis", "Docker", "WebSockets", "TypeScript", "Node.js"],
    accent: "#7B7DB8",
    status: "Built · Scalable",
    live: false,
    github: "https://github.com/PriyankaSiwach/Collaborative_Whiteboard",
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/PriyankaSiwach/Collaborative_Whiteboard",
      },
    ],
  },
  {
    id: "satellite",
    title: "Satellite Telemetry",
    category: "Cloud · Space Data",
    tagline: "Satellite tracking with AWS-backed telemetry storage.",
    description:
      "A satellite telemetry website that tracks latitude, longitude, and speed for satellites in space, with AWS DynamoDB integrated to store and retrieve telemetry data.",
    cardPoints: [
      "Tracks latitude, longitude & speed",
      "AWS DynamoDB for data storage",
      "Cloud-backed telemetry pipeline",
    ],
    details: [
      "Tracks satellite latitude, longitude, and speed",
      "Visualizes space telemetry in a clean web interface",
      "AWS DynamoDB used for durable telemetry storage",
      "Cloud-backed architecture for scalable data access",
    ],
    stack: ["AWS DynamoDB", "AWS", "Next.js", "TypeScript", "REST APIs"],
    accent: "#A2AADB",
    status: "Not live yet",
    live: false,
    github: "https://github.com/PriyankaSiwach/satellite-platform",
    links: [
      { label: "View on GitHub", href: "https://github.com/PriyankaSiwach/satellite-platform" },
    ],
  },
  {
    id: "rag-qa",
    title: "RAG Document Q&A",
    category: "AI · RAG",
    tagline: "Ask questions about any document using LangChain & Pinecone",
    description:
      "A retrieval-augmented generation app that uploads documents, embeds chunks with OpenAI, stores them in Pinecone, and answers questions only from your files — not from the model’s general knowledge.",
    cardPoints: [
      "Document chunking + embeddings",
      "Pinecone semantic search",
      "Grounded GPT answers from your docs",
    ],
    details: [
      "Loads documents, splits them into chunks, and embeds each chunk with OpenAI",
      "Stores embeddings in Pinecone for meaning-based retrieval",
      "Retrieves the most relevant chunks and sends them with the question to GPT",
      "Answers stay grounded in the uploaded document instead of general training data",
    ],
    stack: ["Python", "LangChain", "Pinecone", "OpenAI", "RAG"],
    accent: "#898AC4",
    status: "Open Source",
    live: false,
    github: "https://github.com/PriyankaSiwach/rag-document-qa",
    links: [
      { label: "View on GitHub", href: "https://github.com/PriyankaSiwach/rag-document-qa" },
    ],
  },
];

function ProjectIcon({ project }: { project: Project }) {
  if (project.icon) {
    return (
      <div className="w-14 h-14 rounded-xl overflow-hidden border border-periwinkle-200/50 bg-periwinkle-100 shadow-card shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.icon} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }

  const Icon =
    project.id === "whiteboard"
      ? PenTool
      : project.id === "satellite"
        ? Satellite
        : project.id === "minilsm"
          ? Database
          : project.id === "rag-qa"
            ? FileSearch
            : Satellite;

  return (
    <div className="w-14 h-14 rounded-xl border border-periwinkle-200/50 bg-periwinkle-100/45 flex items-center justify-center text-periwinkle-400 shrink-0">
      <Icon className="w-6 h-6" aria-hidden />
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.id}-title`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink-900/40 backdrop-blur-[2px]"
        aria-label="Close project details"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#10131F] border border-periwinkle-200/40 shadow-soft">
        <div className="p-6 sm:p-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 shrink-0 w-9 h-9 rounded-full border border-periwinkle-200/70 text-ink-500 hover:text-ink-900 hover:bg-periwinkle-100/60 transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="flex flex-col items-center text-center mb-6 pt-2">
            {project.icon ? (
              <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden border border-periwinkle-200/55 bg-periwinkle-100 mb-4 shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-[72px] h-[72px] rounded-2xl border border-periwinkle-200/55 bg-periwinkle-100/50 mb-4 flex items-center justify-center text-periwinkle-400">
                {project.id === "whiteboard" ? (
                  <PenTool className="w-8 h-8" aria-hidden />
                ) : project.id === "minilsm" ? (
                  <Database className="w-8 h-8" aria-hidden />
                ) : project.id === "rag-qa" ? (
                  <FileSearch className="w-8 h-8" aria-hidden />
                ) : (
                  <Satellite className="w-8 h-8" aria-hidden />
                )}
              </div>
            )}
            <p
              className="font-mono text-[10px] uppercase tracking-widest mb-2"
              style={{ color: project.accent }}
            >
              {project.category}
            </p>
            <h3
              id={`project-${project.id}-title`}
              className="font-display text-2xl font-bold text-ink-900"
            >
              {project.title}
            </h3>
            <p className="text-ink-700 font-medium text-sm mt-2">{project.tagline}</p>
          </div>

          <p className="text-ink-500 text-sm leading-relaxed mb-6">{project.description}</p>

          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-300 mb-3">
            Highlights
          </p>
          <ul className="space-y-2.5 mb-6">
            {project.details.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: project.accent }}
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-300 mb-3">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {project.stack.map((tech) => (
              <span key={tech} className="glow-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-soft w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.links
              .filter((link) => !project.github || link.href !== project.github)
              .map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn w-full sm:flex-1"
                >
                  {link.label} ↗
                </a>
              ))}
            {!project.live && !project.github && (
              <div className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-dashed border-periwinkle-300/60 text-center text-sm font-semibold text-ink-500 bg-periwinkle-100/30">
                Coming soon — not live yet
              </div>
            )}
            <button type="button" onClick={onClose} className="glow-btn-soft w-full sm:w-auto">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="section-fade py-20 md:py-24 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">Projects</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-3">
            Things I&apos;ve built
          </h2>
          <p className="text-ink-500 text-sm sm:text-base max-w-xl leading-relaxed">
            Click a card for details, tech stack, and live links.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {projects.map((project) => (
            <article
              key={project.id}
              className="interactive-card group rounded-2xl flex flex-col h-full overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActiveId(project.id)}
                className="flex flex-col flex-1 text-left p-6 sm:p-7 pb-4 focus-visible:outline-none"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <ProjectIcon project={project} />
                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border shrink-0 ${
                      project.live
                        ? "glow-chip !rounded-full !py-1"
                        : "border-ink-300/25 text-ink-300 bg-periwinkle-100/50"
                    }`}
                  >
                    {project.live ? "Live" : "Private"}
                  </span>
                </div>

                <p
                  className="font-mono text-[10px] uppercase tracking-widest mb-2"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </p>

                <h3 className="font-display text-lg font-bold text-ink-900 mb-2.5 group-hover:text-periwinkle-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-ink-500 text-sm leading-relaxed mb-5 flex-1">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="glow-chip">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="glow-chip opacity-80">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-periwinkle-200/40">
                  <span className="glow-btn-soft !px-3 !py-1.5 !text-[11px]">
                    View details
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </button>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 flex items-center justify-between gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-periwinkle-200/70 text-ink-500 hover:text-ink-900 hover:bg-periwinkle-100/60 hover:border-periwinkle-300 transition-colors"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="w-9" />
                )}

                {project.live && project.links[0] && (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn !px-3 !py-1.5 !text-[11px]"
                  >
                    {project.links[0].label} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActiveId(null)} />}
    </section>
  );
}
