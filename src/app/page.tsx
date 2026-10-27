import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProjectIndex from "@/components/sections/ProjectIndex";
import Experience from "@/components/sections/Experience";
import Capabilities from "@/components/sections/Capabilities";
import AboutPhilosophy from "@/components/sections/AboutPhilosophy";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-carbon text-bone selection:bg-vermilion selection:text-bone">
      <Header />
      <main>
        <Hero />
        <ProjectIndex />
        <Experience />
        <Capabilities />
        <AboutPhilosophy />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
