"use client";

import { useEffect, useState } from "react";

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
    links: [{ label: "Open App Store", href: "https://apps.apple.com/us/app/chefcoach/id6777299606" }], // paste your App Store URL here, e.g. https://apps.apple.com/app/idXXXXXXXX
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

function ProjectIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center mb-4">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-periwinkle-200/60 shadow-card bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
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

      <div className="relative w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white border border-periwinkle-200/60 shadow-soft">
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex-1">
              {project.icon && (
                <ProjectIcon src={project.icon} alt={`${project.title} icon`} />
              )}
              <p
                className="font-mono text-[10px] uppercase tracking-widest mb-1 text-center"
                style={{ color: project.accent }}
              >
                {project.category}
              </p>
              <h3
                id={`project-${project.id}-title`}
                className="font-display text-2xl font-bold text-ink-900 text-center"
              >
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full border border-periwinkle-200/70 text-ink-500 hover:text-ink-900 hover:bg-periwinkle-100/60 transition-colors flex items-center justify-center absolute top-4 right-4"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p className="text-ink-700 font-medium text-sm mb-2 text-center">{project.tagline}</p>
          <p className="text-ink-500 text-sm leading-relaxed mb-5 text-center sm:text-left">
            {project.description}
          </p>

          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-300 mb-2">
            Highlights
          </p>
          <ul className="space-y-2 mb-5">
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

          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-300 mb-2">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg font-mono text-[11px] border border-periwinkle-200/70 text-ink-700 bg-periwinkle-100/40"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            {project.links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:flex-1 text-center"
              >
                {link.label} ↗
              </a>
            ))}
            {!project.live && (
              <div className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-dashed border-periwinkle-300/60 text-center text-sm font-semibold text-ink-500 bg-periwinkle-100/30">
                Coming soon — not live yet
              </div>
            )}
            <button type="button" onClick={onClose} className="btn-secondary w-full sm:w-auto">
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
    <section id="projects" className="section-fade py-16 md:py-20 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="section-label">Projects</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-2">
            Things I&apos;ve built
          </h2>
          <p className="text-ink-500 text-sm sm:text-base max-w-xl">
            Click a card to see details, tech stack, and live links.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col transition-[border-color,box-shadow] duration-200 hover:shadow-soft"
            >
              <button
                type="button"
                onClick={() => setActiveId(project.id)}
                className="flex flex-col flex-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-periwinkle-400/50 rounded-2xl p-5"
              >
                {project.icon && (
                  <ProjectIcon src={project.icon} alt={`${project.title} icon`} />
                )}

                <div className={`flex items-center justify-between gap-2 mb-1.5 ${project.icon ? "flex-col sm:flex-row" : ""}`}>
                  <p
                    className={`font-mono text-[10px] uppercase tracking-widest ${project.icon ? "text-center sm:text-left w-full sm:w-auto" : ""}`}
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </p>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      project.live
                        ? "border-periwinkle-300/50 text-periwinkle-400 bg-periwinkle-100/40"
                        : "border-ink-300/30 text-ink-300 bg-soft-muted"
                    }`}
                  >
                    {project.live ? "Live" : "Private"}
                  </span>
                </div>

                <h3
                  className={`font-display text-lg font-bold text-ink-900 mb-1.5 ${
                    project.icon ? "text-center" : ""
                  }`}
                >
                  {project.title}
                </h3>

                {project.cardPoints ? (
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {project.cardPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-ink-500"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: project.accent }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-ink-500 text-sm leading-relaxed mb-4 flex-1">
                    {project.tagline}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md font-mono text-[11px] border border-periwinkle-200/60 text-ink-500 bg-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md font-mono text-[11px] text-ink-300">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-periwinkle-200/40">
                  <span className="text-xs font-semibold text-periwinkle-400">
                    View details →
                  </span>
                </div>
              </button>

              {project.live && project.links[0] && (
                <div className="px-5 pb-5 -mt-1">
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink-700 hover:text-periwinkle-400 transition-colors"
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
