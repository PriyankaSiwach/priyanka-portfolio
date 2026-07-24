"use client";

import { useEffect, useState } from "react";
import { Satellite } from "lucide-react";

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
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "chefcoach",
    title: "ChefCoach",
    category: "iOS App",
    tagline: "AI fridge scanning & recipe suggestions",
    description:
      "An iOS app that scans fridge contents and suggests personalized recipes using AI. Built with a React frontend, Node backend, and packaged for iOS with Capacitor, auth, and subscriptions.",
    details: [
      "Camera-based fridge scanning for ingredient detection",
      "AI-powered recipe suggestions from what you already have",
      "Sign in with Apple and subscription paywall",
      "Shipped as a live iOS product",
    ],
    stack: ["React", "Node.js", "TypeScript", "Capacitor", "Supabase", "RevenueCat"],
    accent: "#6F70B5",
    icon: "/chefcoach-icon.png",
    status: "Live on App Store",
    live: true,
    links: [{ label: "Open App Store", href: "https://apps.apple.com/us/app/chefcoach/id6777299606" }],
  },
  {
    id: "applyfy",
    title: "Applyfy",
    category: "Web App",
    tagline: "Resume improvement & job prep platform",
    description:
      "A resume-improving and job-prepping website that helps candidates polish applications, prepare for roles, and move faster through the job search — powered by Next.js, TypeScript, and OpenAI.",
    details: [
      "AI-assisted resume improvement and job prep workflows",
      "Built with Next.js and TypeScript for a fast, modern UI",
      "OpenAI integration for tailored writing and guidance",
      "Live at applyfy.net",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS", "PostgreSQL"],
    accent: "#5A5B9A",
    icon: "/applyfy-icon.png",
    status: "Live · applyfy.net",
    live: true,
    links: [{ label: "Visit Website", href: "https://applyfy.net/" }],
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
    links: [],
  },
];

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

      <div className="relative w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white border border-periwinkle-200/60 shadow-soft">
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
              <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden border border-periwinkle-200/55 bg-white mb-4 shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-[72px] h-[72px] rounded-2xl border border-periwinkle-200/55 bg-periwinkle-100/50 mb-4 flex items-center justify-center text-periwinkle-400">
                <Satellite className="w-8 h-8" aria-hidden />
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
            {project.links.map((link) => (
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
            {!project.live && (
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
                className="flex flex-col flex-1 text-left p-6 sm:p-7 focus-visible:outline-none"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  {project.icon ? (
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-periwinkle-200/50 bg-white shadow-card shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.icon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-xl border border-periwinkle-200/50 bg-periwinkle-100/45 flex items-center justify-center text-periwinkle-400 shrink-0">
                      <Satellite className="w-6 h-6" aria-hidden />
                    </div>
                  )}
                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full border shrink-0 ${
                      project.live
                        ? "glow-chip !rounded-full !py-1"
                        : "border-ink-300/25 text-ink-300 bg-white/50"
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

              {project.live && project.links[0] && (
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-1">
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn w-full sm:w-auto"
                  >
                    {project.links[0].label} ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActiveId(null)} />}
    </section>
  );
}
