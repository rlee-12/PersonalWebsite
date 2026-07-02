import { contact } from "@/data/site";
import Container from "@/components/layout/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-surface/40 py-16 sm:py-24">
      <Container>
        <SectionHeader index="08" eyebrow="Contact" title="Get in touch" />
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
          {contact.message}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {contact.links.map((link) => (
            <ExternalLink
              key={link.label}
              href={link.href}
              label={link.label}
              description={link.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
