import type { Locale } from '../i18n/config';

type Localized = Record<Locale, string>;

export interface Client {
  domain: string;
  name: string;
  sector: Localized;
}

const HORECA: Localized = { nl: 'Horeca', en: 'Hospitality' };
const SPORT: Localized = { nl: 'Sportevenementen', en: 'Sports events' };

// Curated hosting headliners shown on the landing page.
export const clients: Client[] = [
  { domain: 'pizzeriaitaliagroningen.nl', name: 'Pizzeria Italia Groningen', sector: HORECA },
  { domain: 'amicigroningen.nl', name: 'Amici Groningen', sector: HORECA },
  { domain: 'runforestrun.nl', name: 'Run Forest Run', sector: SPORT },
  { domain: 'indiansummerultra.nl', name: 'Indian Summer Ultra', sector: SPORT },
  { domain: 'jbcycling.nl', name: 'JBcycling', sector: { nl: 'Wielrennen', en: 'Cycling' } },
  { domain: 'fietsverhuur-drenthe.nl', name: 'Fietsverhuur Drenthe', sector: { nl: 'Toerisme', en: 'Tourism' } },
  { domain: 'studio-hoogeveen.nl', name: 'Studio Hoogeveen', sector: { nl: 'Creatieve studio', en: 'Creative studio' } },
  { domain: 'tieninhuis.nl', name: 'Tien in Huis', sector: { nl: 'Interieuradvies', en: 'Interior design' } },
];
