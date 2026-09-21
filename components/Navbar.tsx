"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About", section: "about" },
  { href: "#projects", label: "Projects", section: "projects" },
  { href: "#experience", label: "Experience", section: "experience" },
  { href: "#credentials", label: "Certifications", section: "credentials" },
  { href: "#education", label: "Education", section: "education" },
  { href: "#contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks.map((l) => l.section);
    const ACTIVATION_OFFSET = 96;
    let frame = 0;

    const updateActive = () => {
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= ACTIVATION_OFFSET) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const resolveHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const linkClass = (section: string, mobile = false) => {
    const active = isHome && activeSection === section;
    if (mobile) {
      return `py-3 px-3 rounded-lg text-sm font-medium transition-colors duration-200 border-l-2 ${
        active
          ? "text-periwinkle-400 border-periwinkle-400 bg-transparent"
          : "text-ink-500 border-transparent hover:text-periwinkle-400"
      }`;
    }
    return `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? "text-periwinkle-400"
        : "text-ink-500 hover:text-ink-900"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-blur border-b nav-enter transition-[background-color,border-color] duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#0B0D14]/80 border-periwinkle-200/40"
          : "bg-[#0B0D14]/45 border-periwinkle-200/20"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href={isHome ? "#home" : "/"}
          className="flex items-center gap-2.5 group shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ps.png"
            alt="Priyanka Siwach"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-periwinkle-200/45 group-hover:border-periwinkle-400/35 transition-colors"
          />
          <span className="font-display font-semibold text-ink-900 text-sm tracking-tight hidden sm:block">
            Priyanka Siwach
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = isHome && activeSection === link.section;
            return (
              <Link
                key={link.section}
                href={resolveHref(link.href)}
                onClick={() => setActiveSection(link.section)}
                className={linkClass(link.section)}
              >
                {link.label}
                <span
                  className={`absolute left-3 right-3 bottom-0.5 h-px rounded-full bg-periwinkle-400 transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-periwinkle-100/40"
        >
          <span className={`block h-0.5 w-5 bg-periwinkle-400 transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-periwinkle-400 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-periwinkle-400 transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden nav-blur bg-[#0B0D14]/95 border-t border-periwinkle-200/30 px-5 py-4">
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.section}
                href={resolveHref(link.href)}
                onClick={() => {
                  setActiveSection(link.section);
                  setMobileOpen(false);
                }}
                className={linkClass(link.section, true)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
