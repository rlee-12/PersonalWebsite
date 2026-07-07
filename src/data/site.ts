export const siteUrl = "https://ryanyichenlee.vercel.app";

export const site = {
  name: "Ryan Lee",
  headline: "Building products, studying markets, and learning by shipping.",
  tagline:
    "Cornell University student interested in consumer technology, startups, investing and financial markets.",
  status: { label: "Currently building", value: "Taurus" },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Reading", href: "#reading" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

/**
 * The "Personal Building Index" hero chart. Purely editorial — bump the
 * series and stats as you ship things.
 */
export const learningIndex = {
  label: "Personal Building Index",
  value: "148.2",
  change: "+38.4%",
  period: "YTD",
  series: [
    100, 100.6, 102.3, 101.8, 104.5, 104.1, 103.2, 106.8, 107.4, 106.9, 110.2,
    109.5, 108.1, 108.6, 112.3, 113.9, 113.2, 116.7, 115.8, 114.2, 117.5,
    119.1, 118.6, 122.4, 121.2, 124.8, 126.3, 125.4, 123.9, 127.6, 130.1,
    129.4, 133.2, 132.5, 136.8, 135.1, 139.7, 141.4, 140.2, 144.9, 143.8,
    148.2,
  ],
  stats: [
    { label: "Projects", value: "3" },
    { label: "Books read", value: "4" },
    { label: "Tools in stack", value: "8" },
  ],
};

/** Quick identity cards shown in the About section. */
export const aboutCards = [
  {
    title: "Cornell University",
    detail: "Class of 2029",
  },
  {
    title: "Product Builder",
    detail: "Shipping my first iOS product",
  },
  {
    title: "Fintech + AI Infrastructure",
    detail: "Where software meets financial systems",
  },
  {
    title: "Markets & Investing",
    detail: "Studying for the SIE, watching equities daily",
  },
];

export const about = `I'm a Cornell University student interested in startups, consumer technology, investing, and financial markets. I recently began building software more seriously and am currently working toward launching my first iOS product. I'm early in the process, but I learn quickly, work hard, and enjoy turning unfamiliar problems into things I can actually build.`;

export type EducationEntry = {
  school: string;
  degree?: string;
  classYear: string;
  details?: string[];
};

export const education: EducationEntry = {
  school: "Cornell University",
  classYear: "Class of 2029",
  details: [],
};

export type Project = {
  name: string;
  description: string;
  status: string;
  tools: string[];
  href?: string;
  /** Which UI preview mockup the card renders. */
  preview: "habits" | "ledger" | "passport";
};

export const projects: Project[] = [
  {
    name: "Taurus",
    description:
      "An iOS self-improvement app that helps users build habits across six areas of life, measure overall progress, and advance through ranks.",
    status: "Preparing for launch",
    tools: ["Swift", "Supabase", "Figma"],
    preview: "habits",
  },
  {
    name: "Finance Tracker",
    description:
      "An early concept for private transaction tracking, receipt capture and simplified bill splitting.",
    status: "Research",
    tools: ["Concept", "Fintech"],
    preview: "ledger",
  },
  {
    name: "AI Agent Passport",
    description:
      "An early concept for securely connecting AI agents with identity, permissions, payments and commerce.",
    status: "Research",
    tools: ["Concept", "AI Infrastructure"],
    preview: "passport",
  },
];

export const tools = [
  "Swift",
  "Next.js",
  "TypeScript",
  "Supabase",
  "Figma",
  "Cursor",
  "GitHub",
  "Market Research",
];

export type CurrentlyItem = {
  label: string;
  value: string;
};

export const currently: CurrentlyItem[] = [
  { label: "Building", value: "Taurus" },
  { label: "Studying", value: "Securities Industry Essentials exam" },
  { label: "Learning", value: "Swift, Supabase and product distribution" },
  { label: "Exploring", value: "Investing, fintech and AI infrastructure" },
];

export type Book = {
  title: string;
  author: string;
  status: "reading" | "queued" | "finished";
  category?: string;
  note?: string;
  /** 0-100, shown as a progress bar for "reading" books */
  progress?: number;
  /** e.g. 4.5 — shown as "★ 4.5/5" */
  rating?: number;
};

export const books: Book[] = [
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    status: "reading",
    category: "Fiction",
    progress: 3,
    note: "About 40 pages in",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "finished",
    category: "Self-improvement",
    rating: 5,
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    status: "finished",
    category: "Self-improvement",
    rating: 4,
  },
  {
    title: "Outliers",
    author: "Malcolm Gladwell",
    status: "finished",
    category: "Psychology",
    rating: 4,
  },
];

export type ReadingStat = {
  label: string;
  value: string;
};

export const readingStats: ReadingStat[] = [
  { label: "Books this year", value: "4" },
  { label: "Currently reading", value: "1" },
  { label: "Recently finished", value: "3" },
  { label: "Favorite topic", value: "Self-improvement" },
];

/**
 * Symbols shown in the live market ticker.
 * `symbol` is a Yahoo Finance ticker (indices start with ^, e.g. ^GSPC).
 * `label` is what visitors see. Edit this list to add/remove companies.
 */
export const tickerSymbols = [
  { symbol: "^GSPC", label: "S&P 500" },
  { symbol: "^IXIC", label: "NASDAQ" },
  { symbol: "NVDA", label: "NVDA" },
  { symbol: "AAPL", label: "AAPL" },
  { symbol: "TSLA", label: "TSLA" },
  { symbol: "MSFT", label: "MSFT" },
  { symbol: "AMZN", label: "AMZN" },
  { symbol: "GOOGL", label: "GOOGL" },
];

export type Interest = {
  title: string;
  description: string;
  tags?: string[];
};

export const interests: Interest[] = [
  {
    title: "Brazilian Jiu-Jitsu",
    description:
      "Training and learning fundamentals on the mat — discipline, problem-solving under pressure, and showing up consistently.",
    tags: ["BJJ", "Grappling"],
  },
  {
    title: "Boxing & MMA",
    description:
      "Follow boxing and MMA closely — UFC cards, technique, and the business of combat sports.",
    tags: ["Boxing", "MMA", "UFC"],
  },
];

export type ContactLink = {
  label: string;
  href: string;
  description?: string;
};

export const contact = {
  message:
    "I'm always interested in meeting people who are building ambitious things.",
  links: [
    {
      label: "Email",
      href: "mailto:ryl37@cornell.com",
      description: "ryl37@cornell.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ryan-lee-a13bab280/",
      description: "Professional network",
    },
    {
      label: "GitHub",
      href: "https://github.com/yourusername",
      description: "Code and projects",
    },
    {
      label: "X",
      href: "https://x.com/ryanyichen",
      description: "@ryanyichen",
    },
  ] satisfies ContactLink[],
};
