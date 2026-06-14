/**
 * Static site served from the ASSETS binding with host-based routing.
 *
 * Dutch lives on russchenmedia.nl, English on russchenmedia.com. The English
 * pages are built under /en/; the Worker serves them at the root of .com and
 * consolidates every other English URL onto .com so there is one canonical
 * English address.
 */
const COM = 'https://russchenmedia.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    const isCom = host === 'russchenmedia.com' || host === 'www.russchenmedia.com';
    const isNl = host === 'russchenmedia.nl' || host === 'www.russchenmedia.nl';

    if (isCom) {
      // English homepage at the .com root.
      if (url.pathname === '/' || url.pathname === '') {
        const target = new URL(request.url);
        target.pathname = '/en/';
        return env.ASSETS.fetch(new Request(target, request));
      }
      // No /en/ duplicate on .com: strip the prefix.
      if (url.pathname === '/en' || url.pathname.startsWith('/en/')) {
        const rest = url.pathname.replace(/^\/en/, '') || '/';
        return Response.redirect(COM + rest + url.search, 301);
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
