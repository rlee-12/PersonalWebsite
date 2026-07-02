import { site } from "@/data/site";
import Container from "@/components/layout/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grid-bg border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary font-mono text-xs font-bold text-white"
            aria-hidden="true"
          >
            RL
          </span>
          <p className="text-sm text-muted">
            © {year} {site.name}
          </p>
        </div>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-primary"
        >
          Back to top
        </a>
      </Container>
    </footer>
  );
}
