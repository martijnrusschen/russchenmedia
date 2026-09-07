/**
 * Static site served from the ASSETS binding with host-based routing.
 *
 * Dutch lives on russchenmedia.nl, English on russchenmedia.com. English pages
 * are built under /en/; on .com the Worker serves them at the root (so /privacy
 * on .com maps to /en/privacy), and consolidates every /en/ URL onto .com so
 * each language has a single canonical address.
 */
const COM = 'https://russchenmedia.com';
const NL = 'https://russchenmedia.nl';

// Shared, non-localized files that must be served as-is on every host.
function isSharedAsset(pathname) {
  return (
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/icon-') ||
    pathname === '/favicon.ico' ||
    pathname === '/apple-touch-icon.png' ||
    pathname === '/robots.txt' ||
    pathname === '/site.webmanifest' ||
    /\.[a-z0-9]+$/i.test(pathname)
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    const isCom = host === 'russchenmedia.com' || host === 'www.russchenmedia.com';
    const isNl = host === 'russchenmedia.nl' || host === 'www.russchenmedia.nl';

    // One address per page: www.* collapses onto the apex domain, and page URLs
    // always carry a trailing slash (matching the canonical tags and sitemap).
    // Without this, Google indexes www.* and /path as alternates of each other.
    if (isCom || isNl) {
      const origin = isCom ? COM : NL;
      const path = isSharedAsset(url.pathname) || url.pathname.endsWith('/') ? url.pathname : url.pathname + '/';
      if (host.startsWith('www.') || path !== url.pathname) {
        return Response.redirect(origin + path + url.search, 301);
      }
    }

    if (isCom) {
      // No /en/ duplicate on .com: strip the prefix.
      if (url.pathname === '/en' || url.pathname.startsWith('/en/')) {
        const rest = url.pathname.replace(/^\/en/, '') || '/';
        return Response.redirect(COM + rest + url.search, 301);
      }
      // Shared assets pass through; localized pages map to /en/*.
      if (!isSharedAsset(url.pathname)) {
        const target = new URL(request.url);
        target.pathname = '/en' + (url.pathname === '/' ? '/' : url.pathname);
        return env.ASSETS.fetch(new Request(target, request));
      }
      return env.ASSETS.fetch(request);
    }

    if (isNl) {
      // English is canonical on .com, so move .nl/en/* there.
      if (url.pathname === '/en' || url.pathname.startsWith('/en/')) {
        const rest = url.pathname.replace(/^\/en/, '') || '/';
        return Response.redirect(COM + rest + url.search, 301);
      }
      return env.ASSETS.fetch(request);
    }

    return env.ASSETS.fetch(request);
  },
};
