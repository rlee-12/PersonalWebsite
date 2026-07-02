import type { Project } from "@/data/site";
import BorderedCard from "./BorderedCard";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-bold tracking-tight text-fg">
          {project.name}
        </h3>
        <span className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
          {project.status}
        </span>
      </div>
      <p className="mt-3 text-base leading-relaxed text-muted">
        {project.description}
      </p>
      {project.tools.length > 0 && (
        <p className="mt-4 font-mono text-xs text-muted">
          <span className="uppercase tracking-wider text-fg/70">Tools · </span>
          {project.tools.join(", ")}
        </p>
      )}
    </>
  );

  if (project.href) {
    return (
      <a href={project.href} className="block">
        <BorderedCard>{content}</BorderedCard>
      </a>
    );
  }

  return <BorderedCard>{content}</BorderedCard>;
}
