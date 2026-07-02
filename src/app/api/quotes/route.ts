import { NextResponse } from "next/server";
import { tickerSymbols } from "@/data/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export type Quote = {
  symbol: string;
  label: string;
  price: number;
  changePct: number;
};

async function fetchQuote(
  symbol: string,
  label: string,
): Promise<Quote | null> {
  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
        symbol,
      )}`,
      {
        headers: { "User-Agent": "Mozilla/5.0" },
        cache: "no-store",
      },
    );
    if (!res.ok) return null;

    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta;
    if (!meta) return null;

    const price = meta.regularMarketPrice;
    const prev = meta.chartPreviousClose ?? meta.previousClose;
    if (typeof price !== "number" || typeof prev !== "number") return null;

    const changePct = prev ? ((price - prev) / prev) * 100 : 0;
    return { symbol, label, price, changePct };
  } catch {
    return null;
  }
}

export async function GET() {
  const quotes = await Promise.all(
    tickerSymbols.map(({ symbol, label }) => fetchQuote(symbol, label)),
  );

  return NextResponse.json(quotes.filter((q): q is Quote => q !== null), {
    headers: { "Cache-Control": "no-store" },
  });
}
