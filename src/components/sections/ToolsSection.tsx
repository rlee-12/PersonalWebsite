import { tools } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="border-y border-border bg-surface/40 py-16 sm:py-24"
    >
      <Container>
        <SectionHeader
          index="04"
          eyebrow="Skills & Tech Stack"
          title="What I'm working with"
          description="Technologies and areas I'm actively learning — not claiming expert proficiency."
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {tools.map((tool, i) => (
            <li
              key={tool}
              className="card-hover group flex items-center gap-3 rounded-md border border-border bg-surface px-3 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-border bg-bg font-mono text-[10px] font-bold text-primary transition-colors group-hover:border-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-wide text-muted transition-colors group-hover:text-fg sm:text-sm">
                {tool}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
