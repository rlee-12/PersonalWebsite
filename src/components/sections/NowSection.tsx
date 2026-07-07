import { currently, education, interests } from "@/data/site";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NowSection() {
  return (
    <section id="now" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            index="05"
            eyebrow="Now"
            title="What I'm focused on"
            description="A live snapshot — building, studying, and training."
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {currently.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="card-hover panel h-full p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-fg">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {interests.map((interest, i) => (
            <Reveal key={interest.title} delay={0.2 + i * 0.05}>
              <div className="card-hover panel h-full p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-display text-lg font-semibold text-fg">
                    {interest.title}
                  </p>
                  {interest.tags && (
                    <div className="flex gap-1.5">
                      {interest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border bg-bg px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {interest.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-8 font-mono text-xs text-muted">
            {education.school} · {education.classYear}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
