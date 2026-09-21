export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14">
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-6 pt-10 pb-14 md:pt-12 md:pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-7 md:mb-8 hero-enter">
            <div
              className="absolute -inset-4 rounded-full blur-2xl hero-glow-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,173,224,0.45), transparent 70%)",
              }}
              aria-hidden
            />
            <div
              className="relative w-[168px] h-[168px] sm:w-[190px] sm:h-[190px] md:w-[202px] md:h-[202px] rounded-full overflow-hidden bg-periwinkle-100"
              style={{
                border: "3px solid rgba(168, 173, 224, 0.45)",
                boxShadow:
                  "0 0 40px rgba(168, 173, 224, 0.2), 0 8px 24px rgba(0, 0, 0, 0.45)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Priyanka Siwach"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-periwinkle-400 mb-4 hero-enter hero-enter-delay-1">
            Aspiring Software Engineer
          </p>

          <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight text-ink-900 mb-4 hero-enter hero-enter-delay-2">
            Priyanka <span className="text-gradient">Siwach</span>
          </h1>

          <p className="font-sans text-ink-500 text-[0.95rem] sm:text-base leading-relaxed max-w-md mb-8 md:mb-9 hero-enter hero-enter-delay-3">
            Computer Science student building AI-powered products and cloud applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-center mb-8 md:mb-9 hero-enter hero-enter-delay-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto sm:min-w-[168px]">
              Explore My Work
            </a>
            <a
              href="/PriyankaSiwach_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto sm:min-w-[168px]"
            >
              Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-sm sm:text-[0.95rem] font-display font-semibold text-ink-700 tracking-tight hero-enter hero-enter-delay-5">
            <span>AWS Certified</span>
            <span className="text-periwinkle-400 font-bold" aria-hidden>
              ·
            </span>
            <span>iOS App Live</span>
            <span className="text-periwinkle-400 font-bold" aria-hidden>
              ·
            </span>
            <span>Full-Stack Builder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
