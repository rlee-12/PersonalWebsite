export const siteUrl = "https://ryanlee-portfolio.vercel.app";

export const site = {
  name: "Ryan Lee",
  headline: "Building products, studying markets, and learning by shipping.",
  tagline:
    "Cornell University student interested in consumer technology, startups, investing and financial markets.",
  status: { label: "Currently building", value: "Taurus" },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Reading", href: "#reading" },
  { label: "Interests", href: "#interests" },
  { label: "Currently", href: "#currently" },
  { label: "Contact", href: "#contact" },
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
};

export const projects: Project[] = [
  {
    name: "Taurus",
    description:
      "An iOS self-improvement app that helps users build habits across six areas of life, measure overall progress, and advance through ranks.",
    status: "Preparing for launch",
    tools: ["Swift", "Supabase", "Figma"],
  },
  {
    name: "Finance Tracker",
    description:
      "An early concept for private transaction tracking, receipt capture and simplified bill splitting.",
    status: "Research",
    tools: [],
  },
  {
    name: "AI Agent Passport",
    description:
      "An early concept for securely connecting AI agents with identity, permissions, payments and commerce.",
    status: "Research",
    tools: [],
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

/** Coins shown in the live market ticker (CoinGecko ids). */
/**
 * Symbols shown in the live market ticker.
 * `symbol` is a Yahoo Finance ticker (indices start with ^, e.g. ^GSPC).
 * `label` is what visitors see. Edit this list to add/remove companies.
 */
export const tickerSymbols = [
  { symbol: "^GSPC", label: "S&P 500" },
  { symbol: "NVDA", label: "NVIDIA" },
  { symbol: "AAPL", label: "Apple" },
  { symbol: "TSLA", label: "Tesla" },
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
