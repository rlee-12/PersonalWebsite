import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import StatusBadge from "@/components/ui/StatusBadge";
import Ticker from "@/components/ui/Ticker";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-glow grid-bg relative overflow-hidden border-b border-border py-20 sm:py-28"
    >
      <div
        className="hero-orb -top-20 left-[10%] h-72 w-72"
        style={{ background: "var(--primary)" }}
        aria-hidden="true"
      />
      <div
        className="hero-orb -right-16 top-1/3 h-64 w-64"
        style={{ background: "var(--accent)", animationDelay: "-8s" }}
        aria-hidden="true"
      />
      <Container className="relative">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-widest text-primary">
          Portfolio · 2026
        </p>
        <h1 className="animate-fade-up-delay-1 mt-4 text-[clamp(2.75rem,9vw,5.25rem)] font-extrabold leading-[1.02] tracking-tight text-fg">
          {site.name}
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-xl font-medium leading-snug text-fg sm:text-2xl">
          {site.headline}
        </p>
        <p className="animate-fade-up-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {site.tagline}
        </p>
        <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <StatusBadge label={site.status.label} value={site.status.value} />
          <Ticker />
        </div>
      </Container>
    </section>
  );
}
