import { projects } from "@/data/site";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-border bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="02"
          eyebrow="Projects"
          title="Things I'm building"
          description="Products and concepts I'm working on or exploring."
        />
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
