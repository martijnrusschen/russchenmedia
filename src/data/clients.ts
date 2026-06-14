export interface Client {
  domain: string;
  name: string;
  sector: string;
}

// Curated hosting headliners shown on the landing page.
export const clients: Client[] = [
  { domain: 'pizzeriaitaliagroningen.nl', name: 'Pizzeria Italia Groningen', sector: 'Horeca' },
  { domain: 'amicigroningen.nl', name: 'Amici Groningen', sector: 'Horeca' },
  { domain: 'runforestrun.nl', name: 'Run Forest Run', sector: 'Sportevenementen' },
  { domain: 'indiansummerultra.nl', name: 'Indian Summer Ultra', sector: 'Sportevenementen' },
  { domain: 'jbcycling.nl', name: 'JBcycling', sector: 'Wielrennen' },
  { domain: 'fietsverhuur-drenthe.nl', name: 'Fietsverhuur Drenthe', sector: 'Toerisme' },
  { domain: 'studio-hoogeveen.nl', name: 'Studio Hoogeveen', sector: 'Creatieve studio' },
  { domain: 'tieninhuis.nl', name: 'Tien in Huis', sector: 'Interieuradvies' },
];
