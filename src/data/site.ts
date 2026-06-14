export const site = {
  name: 'Russchen Media',
  url: 'https://russchenmedia.nl',
  email: 'info@russchenmedia.nl',
  phone: '06 23 883 880',
  phoneHref: '+31623883880',
  location: 'Assen',
  activeSince: '2010',
  experienceYears: '15+',
  twitter: '@russchenmedia',
  social: {
    github: 'https://github.com/martijnrusschen',
    personal: 'https://martijnrusschen.nl',
  },
  // Cloudflare Web Analytics beacon token. Leave empty to disable the beacon
  // (the site is also eligible for Cloudflare's automatic, codeless setup).
  cloudflareAnalyticsToken: '6240093bed2f4e2a998e04f9a633a9e4',
  // Web3Forms access key for the contact form. Leave empty to fall back to a
  // plain mailto button. Get a free key at https://web3forms.com.
  web3formsKey: 'a3c26d12-234b-4384-9640-122992b0b4e1',
} as const;
