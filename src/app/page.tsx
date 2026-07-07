import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import NowSection from "@/components/sections/NowSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ReadingSection from "@/components/sections/ReadingSection";
import StackSection from "@/components/sections/StackSection";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ReadingSection />
      <NowSection />
      <ContactSection />
    </main>
  );
}
