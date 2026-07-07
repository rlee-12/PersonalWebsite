import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/site";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="grid-bg border-t border-border py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeader index="06" eyebrow="Contact" title="Get in touch" />
        </Reveal>
        <Reveal>
          <p className="mb-10 max-w-2xl font-display text-xl leading-relaxed text-fg sm:text-2xl">
            {contact.message}
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contact.links.map((link, i) => {
            const external = link.href.startsWith("http");
            return (
              <Reveal key={link.label} delay={i * 0.05}>
                <a
                  href={link.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card-hover panel group flex h-full items-start justify-between p-5"
                >
                  <div>
                    <p className="text-sm font-semibold text-fg group-hover:text-accent">
                      {link.label}
                    </p>
                    {link.description && (
                      <p className="mt-1 break-all text-xs text-muted">
                        {link.description}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
