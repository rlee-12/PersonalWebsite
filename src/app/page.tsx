import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import CurrentlySection from "@/components/sections/CurrentlySection";
import EducationSection from "@/components/sections/EducationSection";
import Hero from "@/components/sections/Hero";
import InterestsSection from "@/components/sections/InterestsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ReadingSection from "@/components/sections/ReadingSection";
import ToolsSection from "@/components/sections/ToolsSection";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <ToolsSection />
      <ReadingSection />
      <CurrentlySection />
      <InterestsSection />
      <ContactSection />
    </main>
  );
}
