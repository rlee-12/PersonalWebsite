# Ryan Lee — Personal Portfolio

A futuristic, blue-forward personal portfolio built with Next.js, TypeScript, and Tailwind CSS. All content is editable from a single data file — no database or CMS required.

## Prerequisites

- Node.js 20+
- npm

## Local setup

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server locally |
| `npm run lint` | Run ESLint |

## Editing content

All personal content lives in **`src/data/site.ts`**. Edit this file to update the site — no component changes needed for most updates.

### Site basics

```ts
export const site = {
  name: "Ryan Lee",
  headline: "...",
  tagline: "...",
  status: { label: "Currently building", value: "Taurus" },
};
```

### Projects

Add or edit entries in the `projects` array:

```ts
{
  name: "My Project",
  description: "What it does.",
  status: "In progress",
  tools: ["Swift", "Figma"],
  href: "https://optional-link.com", // optional
}
```

### Education

Update the `education` object. Add optional details (minors, honors):

```ts
export const education = {
  school: "Cornell University",
  degree: "B.S. Industrial and Labor Relations",
  classYear: "Class of 2029",
  details: ["School of ILR", "Minor in Business"],
};
```

### Books (Reading section)

Add to the `books` array with `status: "reading" | "queued" | "finished"`.

### Interests

Add hobbies or topics to the `interests` array (e.g. BJJ, boxing, MMA).

### Contact links

Replace placeholder URLs in `contact.links` with your real email, LinkedIn, GitHub, and X profiles.

### Site URL (for social previews)

Update `siteUrl` at the top of `site.ts` after deploying so Open Graph links resolve correctly.

## Adding a new section

1. Add content types and data to `src/data/site.ts`
2. Create a section component in `src/components/sections/`
3. Add a nav entry to the `nav` array in `site.ts`
4. Import and render the section in `src/app/page.tsx`

## Deploy to Vercel (free subdomain)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Connect your GitHub account and select the `portfolio` repository
   - Framework preset: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Rename your URL** (optional)
   - Vercel Dashboard → Project → Settings → Domains
   - Your site will be live at something like `https://portfolio-xyz.vercel.app`
   - Rename the project to get a cleaner subdomain (e.g. `ryanlee-portfolio.vercel.app`)

4. **Update metadata**
   - Set `siteUrl` in `src/data/site.ts` to your final Vercel URL
   - Commit and push — Vercel redeploys automatically on every push

## Custom domain (later)

When you're ready for a custom domain (e.g. `ryanlee.dev`):

1. Buy a domain from [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) or [Namecheap](https://www.namecheap.com/)
2. In Vercel → Project → **Domains** → add your domain
3. Follow Vercel's DNS instructions (usually a CNAME or A record)
4. SSL is provisioned automatically
5. Update `siteUrl` in `site.ts` to your custom domain

## Project structure

```
src/
├── app/              # Next.js App Router pages and layout
├── components/
│   ├── layout/       # Header, Footer, Container, ThemeToggle
│   ├── sections/     # Page sections (Hero, Projects, etc.)
│   └── ui/           # Reusable UI primitives
├── data/
│   └── site.ts       # ← Edit this to change content
├── lib/
│   └── utils.ts
└── providers/
    └── ThemeProvider.tsx
```

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide React](https://lucide.dev/) icons
- Dark mode with `localStorage` persistence
