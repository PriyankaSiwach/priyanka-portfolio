export default function About() {
  return (
    <section id="about" className="section-fade py-24 md:py-28 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">About</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
              Turning AI curiosity into{" "}
              <span className="text-gradient">real products</span>
            </h2>
          </div>

          <div className="space-y-5 text-ink-500 leading-relaxed font-sans text-[1.02rem]">
            <p>
              I&apos;m a Computer Science student focused on understanding AI deeply—not
              just using it, but learning how intelligent systems are designed,
              evaluated, and improved.
            </p>
            <p>
              I apply that knowledge by building AI-powered products, working with
              real startup data at{" "}
              <span className="text-ink-700 font-medium">AIN Ventures</span>, and
              developing cloud-based applications such as{" "}
              <span className="text-ink-700 font-medium">ChefCoach</span> and{" "}
              <span className="text-ink-700 font-medium">Applyfy</span>.
            </p>
            <p>
              My goal is to become an engineer who can turn complex AI ideas into
              practical, reliable products that people actually use.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                { label: "Queens College CUNY", detail: "B.S. Computer Science" },
                { label: "New York, NY", detail: "Open to opportunities" },
                { label: "AWS Certified", detail: "SAA + Cloud Practitioner" },
                { label: "Focus areas", detail: "AI · Product · Cloud" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="glass-card rounded-xl px-4 py-3.5"
                >
                  <p className="text-sm font-semibold text-ink-900">{fact.label}</p>
                  <p className="font-mono text-xs text-ink-300 mt-1">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
