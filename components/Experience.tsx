"use client";

import { useState } from "react";

const experiences = [
  {
    id: "ain",
    role: "AI Product Manager Intern",
    company: "AIN Ventures",
    location: "New York, NY",
    period: "June 2026 – Present",
    type: "Internship",
    summary:
      "Building Brain, AIN’s internal AI platform for startup sourcing and pitch deck analysis.",
    description:
      "Work on Brain, AIN Ventures’ internal AI platform for startup sourcing, pitch deck analysis, and investment research.",
    highlights: [
      "Defined product requirements for Brain, AIN’s internal AI tool for startup sourcing and pitch deck analysis.",
      "Designed AI-driven workflows to rank startup opportunities, extract key deck insights, and accelerate VC deal review.",
      "Collaborated with engineers to convert analyst needs into technical specifications for AI deal retrieval and memo generation.",
    ],
    stack: ["AI Product Management", "LLM Workflows", "Product Requirements", "Startup Analysis"],
  },
  {
    id: "founder",
    role: "Founder",
    company: "Applyfy & ChefCoach",
    location: "New York, NY",
    period: "2024 – Present",
    type: "Founder",
    summary:
      "Building Applyfy, a live AI job-prep platform, and ChefCoach, an iOS app for AI fridge scanning and recipes.",
    description:
      "Founded and shipped two consumer products end to end — from product design and full-stack engineering to launch and iteration.",
    highlights: [
      "Built Applyfy (applyfy.net), an AI-powered resume improvement and job-prep platform using Next.js, TypeScript, and OpenAI.",
      "Shipped ChefCoach to the App Store — an iOS app that scans fridge contents and suggests personalized recipes with React, Node.js, and Capacitor.",
      "Owned product, engineering, and go-to-market across both apps, including auth, subscriptions, and live deployments.",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "React", "Node.js", "iOS", "Product"],
  },
  {
    id: "moma",
    role: "Cybersecurity & IT Intern",
    company: "Museum of Modern Art (MoMA)",
    location: "New York, NY",
    period: "March 2024 – May 2024",
    type: "Internship",
    summary:
      "Supported MoMA’s cybersecurity systems, access control, and employee-data workflows.",
    description:
      "Supported MoMA’s internal cybersecurity systems, access-control operations, and employee-data workflows.",
    highlights: [
      "Worked with directors to improve MoMA’s internal cybersecurity web portal and strengthen security workflows.",
      "Used SQL queries and Excel to manage employee ID records and support access-control operations.",
    ],
    stack: ["Cybersecurity", "SQL", "Access Control", "IT Operations"],
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
                        : "border-periwinkle-300/70 bg-white"
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
