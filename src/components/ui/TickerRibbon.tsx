"use client";

import { formatPrice, useQuotes } from "@/lib/quotes";

export default function TickerRibbon() {
  const quotes = useQuotes();

  if (!quotes || quotes.length === 0) {
    return <div className="h-[37px] border-b border-border" aria-hidden="true" />;
  }

  const items = [...quotes, ...quotes];

  return (
    <div
      className="marquee w-full overflow-hidden border-b border-border bg-surface"
      aria-label="Live market data"
    >
      <div className="marquee-track items-stretch py-2.5">
        {items.map((quote, i) => {
          const up = quote.changePct >= 0;
          return (
            <span
              key={`${quote.symbol}-${i}`}
              className="flex shrink-0 items-center gap-2 border-r border-border px-6 font-mono text-xs"
              aria-hidden={i >= quotes.length}
            >
              <span className="font-semibold tracking-wide text-fg">
                {quote.label}
              </span>
              <span className="text-muted">{formatPrice(quote.price)}</span>
              <span className={up ? "text-up" : "text-down"}>
                {up ? "+" : "−"}
                {Math.abs(quote.changePct).toFixed(2)}%
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
