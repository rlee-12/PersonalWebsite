"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const email = contact.links.find((l) => l.label === "Email")?.href ?? "#contact";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = nav.map((item) => item.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-baseline gap-2 transition-opacity hover:opacity-75"
        >
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            {site.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            · Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg",
                  active === item.href && "text-accent",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mx-2">
            <ThemeToggle />
          </div>
          <a
            href={email}
            className="group inline-flex items-center gap-1.5 bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Get in touch
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border bg-surface text-fg"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-fg",
                    active === item.href && "text-accent",
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={email}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 bg-fg px-4 py-2.5 text-sm font-medium text-bg"
              >
                Get in touch
                <ArrowRight size={13} />
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
