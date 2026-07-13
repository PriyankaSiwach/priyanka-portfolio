import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const certifications = [
  {
    id: "saa",
    name: "AWS Solutions Architect – Associate",
    shortName: "SAA-C03",
    issuer: "Amazon Web Services",
    issued: "2024",
    expires: "2027",
    color: "#898AC4",
    description:
      "Validates the ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS. Covers EC2, S3, VPC, IAM, RDS, DynamoDB, Lambda, and core cloud architecture patterns.",
    skills: ["Cloud Architecture", "VPC & Networking", "IAM & Security", "S3 / RDS / DynamoDB", "Lambda & Serverless", "Load Balancing & Auto Scaling"],
    verifyLink: "#",
    badgePath: "/badges/aws-saa.png",
  },
  {
    id: "clf",
    name: "AWS Cloud Practitioner",
    shortName: "CLF-C02",
    issuer: "Amazon Web Services",
    issued: "2023",
    expires: "2026",
    color: "#A2AADB",
    description:
      "Foundational certification validating overall understanding of the AWS Cloud, including core services, pricing, support, and architectural principles. The starting point for the AWS certification path.",
    skills: ["AWS Core Services", "Cloud Concepts", "Billing & Pricing", "Security Fundamentals", "Architecture Best Practices"],
    verifyLink: "#",
    badgePath: "/badges/aws-clf.png",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-soft">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-ink-300 hover:text-periwinkle-400 transition-colors mb-12">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="section-label block mb-4">Certifications</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 leading-tight">
            My{" "}
            <span className="text-gradient">Credentials</span>
          </h1>
          <p className="text-ink-500 text-lg mt-4 max-w-2xl">
            Industry certifications I've earned. Click the verification link on each card to confirm authenticity.
          </p>
        </div>

        {/* Certification cards */}
        <div className="space-y-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-soft transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">

                {/* Badge placeholder */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div
                    className="w-32 h-32 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
                    style={{ borderColor: `${cert.color}40`, background: `${cert.color}0A` }}
                  >
                    {/*
                      Replace the placeholder below with:
                      <Image src={cert.badgePath} alt={cert.name} width={128} height={128} className="rounded-xl object-contain p-2" />
                    */}
                    <span className="text-4xl">☁️</span>
                    <span className="font-mono text-xs font-bold" style={{ color: cert.color }}>{cert.shortName}</span>
                    <span className="font-mono text-xs text-ink-300">Badge here</span>
                  </div>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-lg border transition-all duration-200 hover:shadow-card"
                    style={{ borderColor: `${cert.color}40`, color: cert.color, background: `${cert.color}0A` }}
                  >
                    Verify ↗
                  </a>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: cert.color }}>
                        {cert.issuer}
                      </p>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-ink-900">{cert.name}</h2>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="font-mono text-xs text-ink-300">Issued {cert.issued}</p>
                      <p className="font-mono text-xs text-ink-300">Expires {cert.expires}</p>
                    </div>
                  </div>

                  {/* Mobile dates */}
                  <div className="flex gap-4 mb-4 sm:hidden">
                    <p className="font-mono text-xs text-ink-300">Issued {cert.issued}</p>
                    <p className="font-mono text-xs text-ink-300">Expires {cert.expires}</p>
                  </div>

                  <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${cert.color}30, transparent)` }} />

                  <p className="text-ink-500 leading-relaxed mb-6 text-sm">{cert.description}</p>

                  {/* Skills covered */}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-ink-300 mb-3">Topics covered</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg font-mono text-xs border"
                          style={{ borderColor: `${cert.color}28`, color: `${cert.color}BB`, background: `${cert.color}08` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-10 glass-card rounded-2xl p-8 border border-dashed border-periwinkle-200/60 text-center">
          <div className="w-12 h-12 rounded-full bg-periwinkle-100 border border-periwinkle-200/50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-5 h-5 text-periwinkle-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-display font-semibold text-ink-900 mb-1">More coming soon</p>
          <p className="font-mono text-xs text-ink-300">Currently working toward additional AWS and AI certifications.</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
