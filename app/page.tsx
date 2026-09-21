import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="section-enter" style={{ animationDelay: "0.15s" }}>
        <Hero />
      </div>
      <div className="section-enter" style={{ animationDelay: "0.35s" }}>
        <About />
      </div>
      <Skills />
      <SelectedWork />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
