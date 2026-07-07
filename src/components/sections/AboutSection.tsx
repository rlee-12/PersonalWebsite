import { Building2, GraduationCap, LineChart, Cpu } from "lucide-react";
import { about, aboutCards } from "@/data/site";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = [GraduationCap, Building2, Cpu, LineChart];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader index="01" eyebrow="About" title="Who I am" />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="max-w-2xl font-display text-lg leading-relaxed text-fg sm:text-xl">
              {about}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutCards.map((card, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={card.title} delay={i * 0.06}>
                  <div className="card-hover panel h-full p-4">
                    <Icon size={18} className="text-accent" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold text-fg">
                      {card.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {card.detail}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
