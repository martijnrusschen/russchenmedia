# Russchen Media

Marketing site for Russchen Media: websites, apps & webhosting.

Built with [Astro](https://astro.build/) and deployed as a static site to GitHub
Pages (custom domain `russchenmedia.nl`, behind Cloudflare).

## Local development

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Requires Node 22+ (see `.nvmrc`).

## Project structure

```
public/            static assets served as-is (CNAME, favicon, images)
src/
  data/            content as typed TS (site, services, projects, clients)
  components/       Hero, Services, FeaturedWork, Hosting, Contact, Footer, Icon
  layouts/Base.astro
  pages/            index.astro, 404.astro
  styles/global.css design tokens + base styles
.github/workflows/deploy.yml   builds and deploys to GitHub Pages on push
legacy/            the previous Jekyll site, kept for reference
```

## Editing content

Most copy lives in `src/data/`:

- `site.ts` — name, tagline, intro, contact details.
- `services.ts` — the three service cards.
- `projects.ts` — featured work (add objects to grow the portfolio).
- `clients.ts` — curated hosting headliners and the total-sites stat.

## Deployment

Hosted on **Cloudflare Pages** (build from Git): build command `npm run build`,
output directory `dist`. Config lives in `wrangler.toml`; security and cache
headers in `public/_headers`. The Node version comes from `.nvmrc`.

One-time setup in the Cloudflare dashboard:

1. Workers & Pages → Create → Pages → Connect to Git → this repo.
2. Production branch `master`, framework preset **Astro** (build `npm run build`,
   output `dist`).
3. After the first deploy: Custom domains → add `russchenmedia.nl` (Cloudflare
   updates DNS automatically).

A GitHub Actions workflow (`.github/workflows/deploy.yml`) can still publish to
GitHub Pages as a fallback; remove it once the Cloudflare Pages cutover is
confirmed.
