// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain on GitHub Pages (CNAME = russchenmedia.nl), so the site
// is served from the root — no `base` path needed.
export default defineConfig({
  site: 'https://russchenmedia.nl',
});
