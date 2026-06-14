// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain on GitHub Pages (CNAME = russchenmedia.nl), so the site
// is served from the root, no `base` path needed.
export default defineConfig({
  site: 'https://russchenmedia.nl',
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    routing: {
      // Dutch stays at the root (/), English lives under /en/.
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'nl',
        locales: { nl: 'nl', en: 'en' },
      },
    }),
  ],
});
