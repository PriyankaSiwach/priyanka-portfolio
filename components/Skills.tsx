import { Code2, Layers, Cloud, Cpu, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Next.js", "FastAPI", "Node.js"],
  },
  {
    category: "Databases & Cloud",
    icon: Cloud,
    skills: ["Redis", "PostgreSQL", "AWS (EC2, S3, Lambda, API Gateway, DynamoDB)"],
  },
  {
    category: "Systems Concepts",
    icon: Cpu,
    skills: [
      "WAL",
      "LSM-trees",
      "Bloom filters",
      "compaction",
      "LRU caching",
      "rate limiting",
      "CRDTs",
      "Pub/Sub",
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "pytest", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-fade py-20 md:py-24 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">Skills</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-3">
            What I work with
          </h2>
          <p className="text-ink-500 text-sm sm:text-base max-w-xl leading-relaxed">
            Technical skills I use to build systems and ship products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-7">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className={`interactive-card group rounded-2xl p-6 sm:p-7 flex flex-col min-h-[200px] h-full ${
                  group.category === "Tools" ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl border border-periwinkle-200/50 bg-periwinkle-100/35 flex items-center justify-center text-periwinkle-400 group-hover:bg-periwinkle-100/65 transition-colors shrink-0">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <h3 className="font-display font-bold text-ink-900 text-sm sm:text-[0.95rem] group-hover:text-periwinkle-400 transition-colors duration-200">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 content-start flex-1">
                  {group.skills.map((skill) => (
                    <span key={skill} className="glow-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
