const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Swift"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["LLMs", "RAG", "AI Agents", "OpenAI API", "Vector Databases"],
  },
  {
    category: "Full-Stack & Cloud",
    skills: ["React", "Next.js", "Supabase", "AWS", "Vercel", "GitHub Actions"],
  },
  {
    category: "Product & Tools",
    skills: ["Product Roadmapping", "User Research", "Git", "Xcode", "Cursor", "Figma"],
  },
];

const exploring = ["AI Safety", "Multi-Agent Systems", "LangGraph", "MLOps"];

export default function Skills() {
  return (
    <section id="skills" className="section-fade py-20 md:py-24 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">Skills</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-5 flex flex-col min-h-[168px]"
            >
              <h3 className="font-display font-bold text-ink-900 text-sm mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-1.5 content-start">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md font-mono text-[11px] border border-periwinkle-200/40 text-ink-500 bg-periwinkle-100/25"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-1 py-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-periwinkle-400 whitespace-nowrap font-semibold">
            Currently Exploring
          </span>
          <span className="hidden sm:block w-px h-3 bg-periwinkle-200" aria-hidden />
          <p className="font-sans text-sm font-medium text-ink-700 leading-snug">
            {exploring.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
