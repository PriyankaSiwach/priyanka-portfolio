import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyanka Siwach — Computer Science Student",
  description:
    "Computer Science student at Queens College CUNY. AI PM Intern at AIN Ventures, founder of PS Technologies, AWS Certified.",
  keywords: [
    "Priyanka Siwach",
    "Computer Science Student",
    "Queens College",
    "AWS Certified",
    "New York",
  ],
  authors: [{ name: "Priyanka Siwach" }],
  openGraph: {
    title: "Priyanka Siwach — Computer Science Student",
    description: "CS student building with AI, product, and cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
