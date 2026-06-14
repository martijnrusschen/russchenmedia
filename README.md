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

Pushing to `main` triggers the GitHub Actions workflow, which builds the site
and publishes `dist/` to GitHub Pages. In the repo: Settings → Pages → Source =
"GitHub Actions" must be enabled once.
