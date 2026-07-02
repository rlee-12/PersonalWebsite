import { about } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <SectionHeader index="01" eyebrow="About" title="Who I am" />
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {about}
        </p>
      </Container>
    </section>
  );
}
