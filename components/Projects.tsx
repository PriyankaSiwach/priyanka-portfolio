"use client";
import { useState } from "react";
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
    stack: ["iOS", "Capacitor", "Supabase", "RevenueCat", "TypeScript"],
    links: { app: "#", github: "#" },
    metrics: ["3 free scans tier", "$7.99/mo · $59.99/yr", "Sign in with Apple"],
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
      "A full-stack AI-powered job platform designed to streamline the job application process. Features intelligent job matching, application tracking, and AI-assisted cover letter generation. Built with Next.js, TypeScript, and modern cloud infrastructure.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AI/LLM"],
    links: { live: "https://applyfy.net", github: "#" },
    metrics: ["AI job matching", "Application tracker", "Cover letter AI"],
    logoPlaceholder: "⚡",
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
    links: { github: "#" },
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
                      className="font-mono text-xs text-periwinkle-400 hover:text-periwinkle-500 transition-colors"
                    >
                      App Store ↗
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="font-mono text-xs text-ink-300 hover:text-ink-500 transition-colors"
                    >
                      GitHub ↗
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
