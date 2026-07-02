import { interests } from "@/data/site";
import Container from "@/components/layout/Container";
import BorderedCard from "@/components/ui/BorderedCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function InterestsSection() {
  return (
    <section id="interests" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="07"
          eyebrow="Interests"
          title="Outside of work"
          description="Sports and hobbies that keep me grounded."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {interests.map((interest) => (
            <BorderedCard key={interest.title}>
              <h3 className="text-lg font-bold text-fg">{interest.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {interest.description}
              </p>
              {interest.tags && interest.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {interest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </BorderedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
