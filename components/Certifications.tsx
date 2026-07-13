"use client";

import { useState } from "react";
import Link from "next/link";

const awsCerts = [
  {
    id: "saa",
    name: "AWS Solutions Architect – Associate",
    shortName: "SAA-C03",
    issuer: "Amazon Web Services",
    issued: "2026",
    description:
      "Design and deploy scalable, highly available systems on AWS across core services and architecture patterns.",
    badge: "/aws-saa.png",
  },
  {
    id: "clf",
    name: "AWS Cloud Practitioner",
    shortName: "CLF-C02",
    issuer: "Amazon Web Services",
    issued: "2025",
    description:
      "Foundational understanding of AWS Cloud concepts, core services, pricing, security, and architecture principles.",
    badge: "/aws-clf.png",
  },
];

const leadershipCert = {
  id: "presidents-society",
  name: "President’s Society Ambassador",
  shortName: "PSA",
  issuer: "LaGuardia Community College",
  issued: "2023 – 2024",
  description:
    "Selected to represent high-achieving students at executive and professional networking events, building leadership and communication skills.",
  // File: public/presidents-society.png
  badge: "/presidents-society.png",
};

function BadgeSlot({
  shortName,
  badge,
  alt,
}: {
  shortName: string;
  badge: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);
  const accent = "#6F70B5";

  return (
    <div
      className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl border shrink-0 overflow-hidden flex flex-col items-center justify-center gap-0.5 bg-white"
      style={{
        borderColor: failed ? `${accent}70` : `${accent}55`,
        borderStyle: failed ? "dashed" : "solid",
        background: failed ? `${accent}12` : "#fff",
      }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={badge}
          src={badge}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain p-1"
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <span className="font-mono text-[9px] font-bold tracking-wide" style={{ color: accent }}>
            {shortName}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-wider text-ink-300">
            Badge
          </span>
        </>
      )}
    </div>
  );
}

function CertCard({
  cert,
}: {
  cert: {
    id: string;
    name: string;
    shortName: string;
    issuer: string;
    issued: string;
    description: string;
    badge: string;
  };
}) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 transition-[border-color,box-shadow] duration-200 hover:shadow-soft h-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0 pr-2">
          <p
            className="font-mono text-[10px] uppercase tracking-widest mb-1.5 font-bold"
            style={{ color: "#6F70B5" }}
          >
            {cert.issuer} · {cert.issued}
          </p>
          <h3 className="font-display text-lg font-bold text-ink-900 leading-snug">
            {cert.name}
          </h3>
        </div>

        <BadgeSlot
          shortName={cert.shortName}
          badge={cert.badge}
          alt={`${cert.name} badge`}
        />
      </div>

      <p className="text-ink-500 text-sm leading-relaxed">{cert.description}</p>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="credentials" className="section-fade py-20 md:py-24 relative overflow-hidden">
      <div className="section-wash" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label">Certifications</span>
          <div className="flex-1 glow-line opacity-40" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900">
            Certifications I&apos;ve earned
          </h2>
          <Link
            href="/certifications"
            className="font-mono text-xs tracking-widest uppercase text-periwinkle-400 hover:text-periwinkle-500 transition-colors inline-flex items-center gap-1.5"
          >
            View details
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {awsCerts.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <div className="w-full sm:w-1/2 sm:max-w-xl">
            <CertCard cert={leadershipCert} />
          </div>
        </div>
      </div>
    </section>
  );
}
