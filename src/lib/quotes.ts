"use client";

import { useEffect, useState } from "react";

export type Quote = {
  symbol: string;
  label: string;
  price: number;
  changePct: number;
  spark: number[];
};

const REFRESH_MS = 60_000;

export function useQuotes() {
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

  return quotes;
}

export function formatPrice(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
