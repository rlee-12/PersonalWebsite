"use client";

import { useEffect, useState } from "react";
import type { Quote } from "@/app/api/quotes/route";

const REFRESH_MS = 60_000;

function formatPrice(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Ticker() {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const res = await fetch("/api/quotes");
        if (!res.ok) return;
        const data = (await res.json()) as Quote[];
        if (active && data.length > 0) setQuotes(data);
      } catch {
        // Network failure — keep previous quotes (or stay hidden).
      }
    };

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  if (!quotes || quotes.length === 0) return null;

  return (
    <div className="inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-1 rounded-md border border-border bg-surface/80 px-3 py-2 font-mono text-xs">
      <span className="flex items-center gap-1.5 uppercase tracking-widest text-muted">
        <span
          className="status-pulse h-1.5 w-1.5 rounded-full bg-accent"
          aria-hidden="true"
        />
        Live markets
      </span>
      {quotes.map((quote) => {
        const up = quote.changePct >= 0;
        return (
          <span key={quote.symbol} className="flex items-center gap-1.5">
            <span className="font-medium text-fg">{quote.label}</span>
            <span className="text-muted">{formatPrice(quote.price)}</span>
            <span className={up ? "text-emerald-500" : "text-red-400"}>
              {up ? "▲" : "▼"} {Math.abs(quote.changePct).toFixed(2)}%
            </span>
          </span>
        );
      })}
      <span className="hidden text-muted/70 sm:inline">· auto-updates</span>
    </div>
  );
}
