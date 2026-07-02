import { currently } from "@/data/site";
import Container from "@/components/layout/Container";
import BorderedCard from "@/components/ui/BorderedCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CurrentlySection() {
  return (
    <section
      id="currently"
      className="border-y border-border bg-surface/40 py-16 sm:py-24"
    >
      <Container>
        <SectionHeader index="06" eyebrow="Currently" title="Right now" />
        <div className="grid gap-4 sm:grid-cols-2">
          {currently.map((item) => (
            <BorderedCard key={item.label}>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {item.label}
              </p>
              <p className="mt-2 text-base font-medium leading-relaxed text-fg">
                {item.value}
              </p>
            </BorderedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
