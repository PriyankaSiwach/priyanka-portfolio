import { ExternalLink, GraduationCap, Award } from "lucide-react";

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
      className="section-fade py-20 md:py-24 relative overflow-hidden"
    >
      <div className="section-wash" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">Education</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-3">
            Academic background
          </h2>
          <p className="text-ink-500 text-sm sm:text-base max-w-xl leading-relaxed">
            Degrees, honors, and coursework that shape how I build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-7">
          {/* Queens College */}
          <a
            href="https://www.qc.cuny.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-card group rounded-2xl p-6 sm:p-7 flex flex-col h-full no-underline"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-periwinkle-200/55 bg-periwinkle-100/40 flex items-center justify-center text-periwinkle-400 shrink-0 group-hover:bg-periwinkle-100/70 transition-colors">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900 leading-snug group-hover:text-periwinkle-400 transition-colors duration-200">
                  Queens College, City University of New York
                </h3>
                <p className="text-ink-700 font-medium text-sm mt-1.5">
                  Computer Science BS
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest font-bold mt-2 text-periwinkle-400">
                  Expected May 2027 · New York, NY
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="glow-chip glow-chip-strong">
                <span className="text-[10px] uppercase tracking-wider opacity-70 font-semibold">
                  GPA
                </span>
                <span className="text-sm font-bold">3.7/4.0</span>
              </span>
              <span className="glow-chip glow-chip-strong text-xs">
                Dean&apos;s List
              </span>
              <span className="glow-chip glow-chip-strong text-xs">
                Honors Student
              </span>
            </div>

            <div className="mt-auto pt-5 border-t border-periwinkle-200/40">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-300 mb-3 font-semibold">
                Relevant coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {queensCoursework.map((course) => (
                  <span key={course} className="glow-chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </a>

          {/* LaGuardia */}
          <div className="interactive-card group rounded-2xl p-6 sm:p-7 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-periwinkle-200/55 bg-periwinkle-100/40 flex items-center justify-center text-periwinkle-400 shrink-0 group-hover:bg-periwinkle-100/70 transition-colors">
                <Award className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900 leading-snug group-hover:text-periwinkle-400 transition-colors duration-200">
                  LaGuardia Community College
                </h3>
                <p className="text-ink-700 font-medium text-sm mt-1.5">
                  Associate Degree
                </p>
                <p className="text-ink-700 text-sm mt-0.5">Associate in Science</p>
                <p className="font-mono text-[10px] uppercase tracking-widest font-bold mt-2 text-periwinkle-400">
                  June 2024 · New York, NY
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-300 mb-3 font-semibold">
                Leadership & roles
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="glow-chip glow-chip-strong text-xs">
                  President&apos;s Society Ambassador
                </span>
                <span className="glow-chip glow-chip-strong text-xs">
                  Student Success Mentor
                </span>
              </div>
            </div>

            <div className="mt-auto pt-5 border-t border-periwinkle-200/40">
              <a
                href="/Associates.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn"
              >
                View Associate Degree PDF
                <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
