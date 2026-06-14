export const defaultLocale = 'nl' as const;
export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  nl: 'Nederlands',
  en: 'English',
};

/** Resolve the active locale from the request URL (/en/... => 'en'). */
export function getLocale(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

/** Build a path for a locale: nl stays at root, en is prefixed with /en. */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

/** Home path for a locale. */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
