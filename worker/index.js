/**
 * Static site served from the ASSETS binding, with host-based routing:
 * russchenmedia.com (and www) serve the English site at the root, while
 * russchenmedia.nl serves Dutch at the root and English under /en/.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    const isCom = host === 'russchenmedia.com' || host === 'www.russchenmedia.com';

    // On the .com domain, serve the English homepage at the root.
    if (isCom && (url.pathname === '/' || url.pathname === '')) {
      const target = new URL(request.url);
      target.pathname = '/en/';
      return env.ASSETS.fetch(new Request(target, request));
    }

    return env.ASSETS.fetch(request);
  },
};
