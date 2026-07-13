"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const contacts = [
  {
    id: "email",
    label: "Email",
    href: "mailto:priyankasiwach214@gmail.com",
    external: false,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanka-siwach",
    external: true,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/PriyankaSiwach",
    external: true,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };

    const onPointer = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !btnRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (reduceMotion || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      offset.current = {
        x: Math.max(-10, Math.min(10, x * 0.12)),
        y: Math.max(-10, Math.min(10, y * 0.12)),
      };
      setMagnet({ ...offset.current });
    },
    [reduceMotion]
  );

  const handleLeave = useCallback(() => {
    offset.current = { x: 0, y: 0 };
    setMagnet({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="contact"
      className="section-fade py-20 md:py-28 relative overflow-hidden min-h-[calc(100svh-3.5rem)]"
    >
      <div className="section-wash" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">Contact</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="text-center">
          <p className="font-display text-xl sm:text-2xl md:text-[1.75rem] font-bold text-ink-900 leading-snug max-w-lg mx-auto mb-3">
            Have an idea, role, or project worth discussing?
          </p>
          <p className="font-sans text-ink-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-12 md:mb-14">
            I&apos;m always interested in meaningful work involving software, AI, and
            product development.
          </p>

          <div className="relative flex flex-col items-center">
            {/* Radial glow */}
            <div
              className="pointer-events-none absolute top-[100px] sm:top-[115px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(111,112,181,0.28) 0%, rgba(192,201,238,0.12) 42%, transparent 70%)",
              }}
              aria-hidden
            />

            <div
              className="relative z-10"
              style={{
                transform: reduceMotion
                  ? undefined
                  : `translate(${magnet.x}px, ${magnet.y}px)`,
                transition: reduceMotion
                  ? undefined
                  : "transform 0.18s ease-out",
              }}
            >
              <button
                ref={btnRef}
                type="button"
                aria-expanded={open}
                aria-controls="contact-menu"
                aria-label={open ? "Close contact options" : "Open contact options"}
                onClick={() => setOpen((v) => !v)}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="contact-orb group relative w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] rounded-full flex flex-col items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle-400 focus-visible:ring-offset-4 focus-visible:ring-offset-soft"
              >
                <span className="contact-orb-border" aria-hidden />
                <span className="contact-orb-fill" aria-hidden />

                <span className="relative z-10 font-display text-xl sm:text-2xl font-bold tracking-tight">
                  Let&apos;s Connect
                </span>
                <span className="relative z-10 mt-1.5 text-xs sm:text-sm text-white/85 font-medium flex items-center gap-1.5">
                  Start a conversation
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      open ? "rotate-45" : "group-hover:rotate-45"
                    } motion-reduce:transition-none`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </button>
            </div>

            <div
              ref={menuRef}
              id="contact-menu"
              role="menu"
              aria-hidden={!open}
              className={`w-full max-w-sm mt-8 md:mt-10 transition-all duration-300 ease-out ${
                open
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              } motion-reduce:transition-none motion-reduce:translate-y-0`}
            >
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                {contacts.map((item, i) => (
                  <a
                    key={item.id}
                    role="menuitem"
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    tabIndex={open ? 0 : -1}
                    className="contact-option glass-card rounded-xl px-4 py-3.5 flex items-center justify-center gap-2.5 text-sm font-semibold text-ink-700 hover:text-periwinkle-400 hover:border-periwinkle-300/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle-400"
                    style={{
                      transitionDelay: open && !reduceMotion ? `${i * 45}ms` : "0ms",
                    }}
                  >
                    <span className="text-periwinkle-400" aria-hidden>
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
