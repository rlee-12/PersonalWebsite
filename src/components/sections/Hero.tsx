"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import LearningIndex from "@/components/ui/LearningIndex";
import Masthead from "@/components/ui/Masthead";
import TickerRibbon from "@/components/ui/TickerRibbon";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section id="top" className="grid-bg border-b border-border">
      <TickerRibbon />
      <Container className="pb-16 sm:pb-20">
        <Masthead />

        <div className="pt-12 sm:pt-16">
          <motion.div
            {...fadeUp(0)}
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Product · Markets · Systems
            </p>
            <span className="flex items-center gap-2 border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-up" />
              {site.status.label} {site.status.value}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 max-w-4xl font-display text-[clamp(2.9rem,7.5vw,5.2rem)] font-semibold leading-[1.04] tracking-tight text-fg"
          >
            Building products, studying markets.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-muted sm:text-2xl"
          >
            A working record of products, research, and lessons learned by
            shipping — from Cornell to consumer tech, fintech, and AI
            infrastructure.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              View selected work
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center border border-(--hairline) bg-surface px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg"
            >
              About me
            </a>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.34)} className="mt-14 sm:mt-16">
          <LearningIndex />
        </motion.div>

        <motion.p
          {...fadeUp(0.42)}
          className="mt-8 font-mono text-[11px] text-muted"
        >
          {"// scroll to explore"}
        </motion.p>
      </Container>
    </section>
  );
}
