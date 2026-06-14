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
      // English is canonical on russchenmedia.com, so map built /en/ URLs to
      // their .com addresses in the sitemap.
      serialize(item) {
        const prefix = 'https://russchenmedia.nl/en/';
        if (item.url.startsWith(prefix)) {
          return { ...item, url: 'https://russchenmedia.com/' + item.url.slice(prefix.length) };
        }
        return item;
      },
    }),
  ],
});
