# Mohammed Amaan — Portfolio

Responsive single-page portfolio for Mohammed Amaan, second-year BTech student and aspiring software developer.

Stack: Next.js (App Router, TypeScript) · Tailwind CSS v4 · Motion · lucide-react · next-themes · Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Other commands

```bash
npm run build   # production build
npm start       # serve production build
npm run lint    # eslint
```

## Customise content

All editable content lives in `data/portfolio.ts`:

- `profile` — name, role, tagline, email, GitHub/LinkedIn, resume path
- `skillCategories` — only list what you can demo
- `projects` — problem/solution/features/lessons, `status: live | in-progress | code-only`, `repoUrl`, `demoUrl`
- `education`, `achievements`

Replace placeholders:

- `public/resume.pdf` — currently a placeholder PDF, replace with your real resume (keep the same filename so the download button keeps working).
- Email/socials in `data/portfolio.ts` — currently `hello@mohammedamaan.dev` / `https://github.com/` placeholders.
- Institution/branch/graduation year — marked TODO in the same file.
- Project screenshots — add to `public/projects/` and set `image` when ready (cards currently use typographic placeholders to avoid fake mockups).

## Deploy

Push to GitHub, then Import on [Vercel](https://vercel.com/new) (defaults work, no env vars needed for v1). Contact is `mailto:` + social links only — no backend or form service required.

## Structure

```
app/            layout (metadata, theme, nav/footer) + page (section composition)
components/     Navbar, Hero, About, Skills, Projects (+modal), Education, Contact, …
data/           portfolio.ts — single source of truth
public/         resume.pdf + future screenshots/avatar
```
