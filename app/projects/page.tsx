import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const projects = [
  {
    id: "chefcoach",
    title: "ChefCoach",
    tagline: "AI-powered fridge scanning & recipe suggestions",
    category: "iOS App",
    status: "Live on App Store",
    statusColor: "#898AC4",
    color: "#898AC4",
    description:
      "A native iOS app that lets users scan their fridge contents and receive AI-powered recipe suggestions tailored to what they have. Built with Capacitor + Supabase backend, featuring Sign in with Apple, RevenueCat subscriptions, and a free 3-scan trial tier before paywall.",
    longDescription:
      "ChefCoach started from a simple problem: opening the fridge and having no idea what to cook. The app uses the phone camera to identify fridge contents, then sends the list to an AI model that returns personalized recipes. I handled the full stack — iOS packaging with Capacitor, Supabase auth and database, RevenueCat for subscription management, and App Store submission.",
    stack: ["iOS", "Capacitor", "Supabase", "RevenueCat", "TypeScript", "Xcode"],
    links: { app: "#", github: "#" },
    metrics: ["3 free scans per day", "$7.99/mo · $59.99/yr subscription", "Sign in with Apple"],
    logoPlaceholder: "🍳",
  },
  {
    id: "applyfy",
    title: "Applyfy",
    tagline: "Full-stack AI job application platform",
    category: "Web App",
    status: "Live · applyfy.net",
    statusColor: "#A2AADB",
    color: "#A2AADB",
    description:
      "A full-stack AI-powered job platform designed to streamline the job application process. Features intelligent job matching, application tracking, and AI-assisted cover letter generation.",
    longDescription:
      "Applyfy is built to make job searching less painful. The platform matches users to jobs using AI, helps them track applications in a kanban-style board, and can generate tailored cover letters. Built end-to-end with Next.js, TypeScript, Tailwind CSS, and a PostgreSQL database. Deployed at applyfy.net.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AI/LLM"],
    links: { live: "https://applyfy.net", github: "#" },
    metrics: ["AI job matching", "Application tracker", "Cover letter AI"],
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
    links: { github: "#" },
    metrics: ["100+ concurrent users", "CRDT conflict-free sync", "Redis pub/sub + Docker"],
    logoPlaceholder: "🖊️",
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
    links: { github: "#" },
    metrics: ["Particle animation system", "Typewriter effects", "Responsive design"],
    logoPlaceholder: "🌐",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-soft">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ink-300 hover:text-periwinkle-400 transition-colors mb-12">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="section-label block mb-4">Projects</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight">
            Things I've{" "}
            <span className="text-gradient">Built</span>
          </h1>
          <p className="text-ink-500 text-lg mt-4 max-w-2xl">
            A collection of products I've shipped — from App Store apps to AI-powered web platforms and internal tools.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Left: icon + meta */}
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

                {/* Right: content */}
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold text-ink-900 mb-1">{project.title}</h2>
                  <p className="text-ink-500 font-medium mb-4">{project.tagline}</p>

                  <p className="text-ink-700 leading-relaxed mb-4">{project.description}</p>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6">{project.longDescription}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((m) => (
                      <span key={m} className="px-3 py-1.5 bg-periwinkle-100/60 rounded-lg text-xs text-ink-500 border border-periwinkle-200/50 font-mono">
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${project.color}25, transparent)` }} />

                  {/* Stack + links */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

                    <div className="flex gap-4 flex-shrink-0">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-periwinkle-400 hover:text-periwinkle-500 transition-colors">
                          Live site ↗
                        </a>
                      )}
                      {project.links.app && (
                        <a href={project.links.app}
                          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-periwinkle-400 hover:text-periwinkle-500 transition-colors">
                          App Store ↗
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github}
                          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-ink-300 hover:text-ink-500 transition-colors">
                          GitHub ↗
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
