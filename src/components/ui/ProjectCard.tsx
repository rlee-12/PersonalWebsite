"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/site";

function HabitsPreview() {
  const areas = [
    { label: "Mind", w: "78%" },
    { label: "Body", w: "64%" },
    { label: "Craft", w: "86%" },
    { label: "Capital", w: "52%" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Overall progress
        </span>
        <span className="font-mono text-[10px] text-accent">Rank IV</span>
      </div>
      {areas.map((a) => (
        <div key={a.label}>
          <div className="mb-1 flex justify-between font-mono text-[10px] text-muted">
            <span>{a.label}</span>
            <span>{a.w}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: a.w }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function LedgerPreview() {
  const rows = [
    { name: "Groceries", amount: "−$42.18", down: true },
    { name: "Split · Dinner", amount: "+$18.50", down: false },
    { name: "Transit", amount: "−$2.90", down: true },
    { name: "Receipt captured", amount: "✓", down: false },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2 p-5">
      <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">
        This week
      </span>
      {rows.map((r) => (
        <div
          key={r.name}
          className="flex items-center justify-between border border-border bg-surface px-3 py-2"
        >
          <span className="text-xs text-fg">{r.name}</span>
          <span
            className={`font-mono text-xs ${r.down ? "text-down" : "text-up"}`}
          >
            {r.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

function PassportPreview() {
  const scopes = ["identity", "payments:limit $50", "commerce:read"];
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Agent credential
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-up">
          <span className="status-pulse h-1.5 w-1.5 rounded-full bg-up" />
          Verified
        </span>
      </div>
      <div className="border border-border bg-surface px-3 py-2 font-mono text-[11px] text-fg">
        agent:ryan/assistant-01
      </div>
      <div className="flex flex-wrap gap-1.5">
        {scopes.map((s) => (
          <span
            key={s}
            className="border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

const previews = {
  habits: HabitsPreview,
  ledger: LedgerPreview,
  passport: PassportPreview,
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduce = useReducedMotion();
  const Preview = previews[project.preview];

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="card-hover panel group grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="flex flex-col justify-between p-6 sm:p-7">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            No. {String(index + 1).padStart(2, "0")}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
              {project.name}
            </h3>
            <span className="border border-border bg-bg px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
              {project.status}
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>
        </div>
        {project.tools.length > 0 && (
          <p className="mt-6 font-mono text-xs text-muted">
            {project.tools.join(" · ")}
          </p>
        )}
      </div>
      <div className="hud-corners relative min-h-[220px] border-t border-border bg-bg/40 transition-colors group-hover:bg-bg/70 md:border-l md:border-t-0">
        <Preview />
      </div>
    </motion.article>
  );
}
