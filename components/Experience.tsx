"use client";

import { useState } from "react";

const experiences = [
  {
    id: "ain",
    role: "Software Engineer Intern",
    company: "AIN Ventures",
    location: "New York, NY",
    period: "June 2026 – August 2026",
    type: "Internship",
    summary:
      "Building Python systems on Brain, AIN’s internal AI platform for founder sourcing, guardrails testing, and deal automation.",
    description:
      "Engineering features on Brain, AIN Ventures’ internal AI platform — sourcing agents, adversarial evaluation, and deal-pipeline automation in Python.",
    highlights: [
      "Built a Python-based sourcing agent in Brain, AIN Ventures’ internal AI platform, to re-surface promising founders below the 90-point auto-reject threshold, adding 5+ founders per day to the outreach pipeline.",
      "Built a 200+ case adversarial test suite in Python to stress-test AI guardrails, identify failure cases, and validate fixes across edge-case and malicious inputs.",
      "Shipped deal-retrieval and AI-generated investment-memo features from specification through release, using Python to automate data processing and retrieval across AIN’s deal pipeline.",
    ],
    stack: ["Python", "LLM Systems", "Adversarial Testing", "Deal Pipeline Automation"],
  },
  {
    id: "founder",
    role: "Founder",
    company: "Applyfy & ChefCoach",
    location: "New York, NY",
    period: "2024 – Present",
    type: "Founder",
    summary:
      "Building Applyfy, a production AI job-prep platform, and ChefCoach, an App Store iOS app with vision pipelines and cost-controlled APIs.",
    description:
      "Founded and shipped two products end to end — backend systems, auth, rate limiting, CI, payments, and App Store / web launch.",
    highlights: [
      "Built Applyfy (applyfy.net) — resume–job scoring with keyword gaps and rewrites in under 2 minutes, plus a token-bucket rate limiter across 15+ API routes to control OpenAI cost.",
      "Shipped ChefCoach to the App Store with a GPT-4o vision pipeline, local API-outage fallback, token-bucket rate limiting, LRU caching, JWT auth, and GitHub Actions + Vitest CI.",
      "Owned engineering across both products: auth, subscriptions/payments, input validation, and live deployments.",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "React", "Supabase", "Clerk", "Stripe", "Capacitor"],
  },
  {
    id: "moma",
    role: "Cybersecurity Engineer Intern",
    company: "Museum of Modern Art (MoMA)",
    location: "New York, NY",
    period: "March 2024 – May 2024",
    type: "Internship",
    summary:
      "Strengthened MoMA’s access-control and identity systems through data validation, SQL workflows, and security portal improvements.",
    description:
      "Worked on MoMA’s physical access-control and identity systems — validating employee records at scale and improving cybersecurity portal workflows with SQL-backed data operations.",
    highlights: [
      "Updated and validated identity, photo, and badge-access records for 500+ MoMA employees, strengthening the accuracy and integrity of the museum’s physical access-control system.",
      "Used SQL queries and Excel to manage employee ID datasets and keep access-control records consistent across internal systems.",
      "Partnered with directors to improve MoMA’s internal cybersecurity web portal and harden identity and access workflows.",
    ],
    stack: ["SQL", "Access Control Systems", "Identity Data", "Cybersecurity"],
  },
  {
    id: "presidents-society",
    role: "President’s Society Ambassador",
    company: "LaGuardia Community College",
    location: "New York, NY",
    period: "September 2024 – May 2025",
    type: "Leadership",
    summary:
      "Represented high-achieving students at executive and professional networking events.",
    description:
      "Represented high-achieving students at executive and professional networking events.",
    highlights: [
      "Represented high-achieving students at executive networking events.",
      "Strengthened leadership, professional communication, and relationship-building skills.",
    ],
    stack: ["Leadership", "Public Speaking", "Networking", "Communication"],
  },
  {
    id: "mentor",
    role: "Student Success Mentor",
    company: "LaGuardia Community College",
    location: "New York, NY",
    period: "January 2023 – May 2024",
    type: "Part-time",
    summary:
      "Helped students navigate essential academic platforms and college resources.",
    description:
      "Helped students navigate essential academic platforms and college resources.",
    highlights: [
      "Facilitated studio hours for more than 80 students.",
      "Guided students through CUNYfirst, Microsoft 365, and Degree Works.",
    ],
    stack: ["Mentoring", "Student Support", "Microsoft 365", "Communication"],
  },
];

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="section-fade py-20 md:py-24 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">Experience</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-8">
          Where I&apos;ve been building
        </h2>

        <div className="relative">
          <div
            className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-periwinkle-400 via-periwinkle-200 to-transparent"
            aria-hidden
          />

          <ol className="space-y-4">
            {experiences.map((exp) => {
              const isOpen = openId === exp.id;

              return (
                <li key={exp.id} className="relative pl-10 sm:pl-12">
                  <span
                    className={`absolute left-0 top-5 sm:top-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center bg-soft transition-colors ${
                      isOpen
                        ? "border-periwinkle-400 bg-periwinkle-100"
                        : "border-periwinkle-300/70 bg-periwinkle-100"
                    }`}
                    aria-hidden
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isOpen ? "bg-periwinkle-400" : "bg-periwinkle-300"
                      }`}
                    />
                  </span>

                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                    aria-expanded={isOpen}
                    className={`w-full text-left glass-card rounded-2xl p-5 sm:p-6 transition-[border-color,box-shadow] duration-200 ${
                      isOpen
                        ? "shadow-soft border-periwinkle-300/45"
                        : "hover:border-periwinkle-300/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-periwinkle-400 mb-1.5">
                          {exp.type} · {exp.period}
                        </p>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900">
                          {exp.role}
                        </h3>
                        <p className="text-ink-700 font-medium text-sm mt-0.5">
                          {exp.company}
                          <span className="text-ink-300 font-normal"> · {exp.location}</span>
                        </p>
                      </div>
                      <span
                        className={`mt-1 shrink-0 w-7 h-7 rounded-full border border-periwinkle-200/70 flex items-center justify-center text-periwinkle-400 text-sm transition-transform duration-300 ${
                          isOpen ? "rotate-45 bg-periwinkle-100/60" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </div>

                    <p className="text-ink-500 text-sm leading-relaxed">
                      {exp.summary}
                    </p>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-4 mt-4 border-t border-periwinkle-200/50">
                          <p className="text-ink-700 text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          <ul className="space-y-2 mb-4">
                            {exp.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-ink-700"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-periwinkle-400 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-1.5">
                            {exp.stack.map((tech) => (
                              <span
                                key={tech}
                                className="glow-chip"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {!isOpen && (
                      <p className="mt-3 text-xs font-semibold text-periwinkle-400">
                        View details →
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
