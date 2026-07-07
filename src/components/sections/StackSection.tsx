import {
  Braces,
  Database,
  GitBranch,
  Globe,
  PenTool,
  Smartphone,
  SquareTerminal,
  TrendingUp,
} from "lucide-react";
import { tools } from "@/data/site";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const meta: Record<string, { icon: typeof Braces; caption: string }> = {
  Swift: { icon: Smartphone, caption: "iOS product development" },
  "Next.js": { icon: Globe, caption: "Web apps and sites" },
  TypeScript: { icon: Braces, caption: "Typed application code" },
  Supabase: { icon: Database, caption: "Auth, data, and storage" },
  Figma: { icon: PenTool, caption: "Design and prototyping" },
  Cursor: { icon: SquareTerminal, caption: "AI-assisted engineering" },
  GitHub: { icon: GitBranch, caption: "Version control and shipping" },
  "Market Research": { icon: TrendingUp, caption: "Sizing and positioning" },
};

export default function StackSection() {
  return (
    <section id="stack" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            index="03"
            eyebrow="Stack"
            title="Tools I work with"
            description="Technologies and capabilities I'm actively learning and building with."
          />
        </Reveal>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {tools.map((tool, i) => {
            const m = meta[tool] ?? { icon: Braces, caption: "" };
            const Icon = m.icon;
            return (
              <Reveal key={tool} delay={(i % 4) * 0.05}>
                <li className="card-hover panel h-full p-4">
                  <Icon size={18} className="text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-fg">{tool}</p>
                  {m.caption && (
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {m.caption}
                    </p>
                  )}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
