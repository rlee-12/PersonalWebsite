"use client";

import { useEffect, useState } from "react";

function formatET(date: Date) {
  return (
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date) + " ET"
  );
}

export default function Masthead() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatET(new Date()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-between gap-4 border-b border-(--hairline) py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
      <span className="flex items-center gap-2">
        <span
          className="status-pulse h-1.5 w-1.5 rounded-full bg-up"
          aria-hidden="true"
        />
        Vol. I · No. 1 · {year}
      </span>
      <span className="hidden sm:block">Personal Portfolio &amp; Research</span>
      <span className="tabular-nums" suppressHydrationWarning>
        {time ?? "—:—:— ET"}
      </span>
    </div>
  );
}
