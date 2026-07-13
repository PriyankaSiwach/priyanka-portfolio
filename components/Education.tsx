import { ExternalLink } from "lucide-react";

const queensCoursework = [
  "Data Structures",
  "Object-Oriented Programming",
  "Algorithmic Problem Solving",
  "Computer Organization & Assembly",
  "Cloud Computing",
  "AI, LLMs & Agents",
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-fade py-16 md:py-20 relative overflow-hidden min-h-[calc(100svh-3.5rem)]"
    >
      <div className="section-wash" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">Education</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-6">
          Academic background
        </h2>

        <div className="space-y-4">
          <article className="glass-card rounded-2xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900 leading-snug">
                  Queens College, City University of New York
                </h3>
                <p className="text-ink-700 font-medium text-sm mt-1">
                  Computer Science BS
                </p>
                <p
                  className="font-mono text-[10px] uppercase tracking-widest font-bold mt-1.5"
                  style={{ color: "#6F70B5" }}
                >
                  Expected May 2027 · New York, NY
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-periwinkle-200/50 bg-periwinkle-100/35">
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-300">
                  GPA
                </span>
                <span className="font-display text-sm font-bold" style={{ color: "#6F70B5" }}>
                  3.7/4.0
                </span>
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg border border-periwinkle-200/50 bg-periwinkle-100/30">
                <span className="font-display text-xs font-semibold text-ink-900">
                  Dean&apos;s List
                </span>
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg border border-periwinkle-200/50 bg-periwinkle-100/30">
                <span className="font-display text-xs font-semibold text-ink-900">
                  Honors Student
                </span>
              </span>
            </div>

            <div className="pt-4 border-t border-periwinkle-200/35">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-300 mb-2.5 font-semibold">
                Relevant coursework
              </p>
              <div className="flex flex-wrap gap-1.5">
                {queensCoursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md font-mono text-[11px] text-ink-500 border border-periwinkle-200/40 bg-periwinkle-100/25"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="glass-card rounded-2xl p-5 sm:p-6">
            <div className="mb-4">
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900 leading-snug">
                LaGuardia Community College
              </h3>
              <p className="text-ink-700 font-medium text-sm mt-1">
                Associate Degree
              </p>
              <p className="text-ink-700 text-sm mt-0.5">Associate in Science</p>
              <p
                className="font-mono text-[10px] uppercase tracking-widest font-bold mt-1.5"
                style={{ color: "#6F70B5" }}
              >
                June 2024 · New York, NY
              </p>

              <a
                href="/Associates.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg text-xs font-semibold text-periwinkle-400 border border-periwinkle-300/55 bg-transparent hover:border-periwinkle-400 hover:bg-periwinkle-100/30 transition-colors duration-200"
              >
                View Associate Degree PDF
                <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              </a>
            </div>

            <div className="pt-3 border-t border-periwinkle-200/35">
              <p className="text-sm text-ink-700 leading-relaxed">
                <span className="font-semibold text-ink-900">
                  President&apos;s Society Ambassador
                </span>
                <span className="text-periwinkle-300 mx-2" aria-hidden>
                  ·
                </span>
                <span className="font-semibold text-ink-900">Student Success Mentor</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
