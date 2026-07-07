import { projects } from "@/data/site";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-y border-border bg-surface/30 py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="Selected Work"
            title="Things I'm building"
            description="Products and concepts I'm working on or exploring."
          />
        </Reveal>
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
