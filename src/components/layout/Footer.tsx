import { site } from "@/data/site";
import Container from "@/components/layout/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex h-8 w-8 items-center justify-center border border-border bg-surface font-mono text-[11px] font-bold text-accent"
            aria-hidden="true"
          >
            RL
          </span>
          <p className="text-sm text-muted">
            © {year} {site.name} · Personal portfolio &amp; research
          </p>
        </div>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-up" />
            Online
          </span>
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
