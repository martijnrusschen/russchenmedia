import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/config';
import intervalcoach from '../assets/projects/intervalcoach.png';
import pizzeria from '../assets/projects/pizzeria-italia.jpg';
import amici from '../assets/projects/amici.jpg';

type Localized = Record<Locale, string>;

export interface Project {
  title: string;
  url: string;
  image: ImageMetadata;
  logo?: string;
  featured?: boolean;
  subtitle: Localized;
  description: Localized;
  role: Localized;
}

export const projects: Project[] = [
  {
    title: 'IntervalCoach',
    url: 'https://intervalcoach.app',
    image: intervalcoach,
    logo: '/images/intervalcoach-logo.svg',
    featured: true,
    subtitle: {
      nl: 'AI-trainingscoach voor wielrenners, hardlopers en triatleten',
      en: 'AI training coach for cyclists, runners and triathletes',
    },
    description: {
      nl: 'Een AI-platform dat dagelijkse trainingen aanpast op basis van herstel- en leefdata. Bouw, ontwerp en doorontwikkeling, van iOS-app tot webdashboard.',
      en: 'An AI platform that adapts daily training to recovery and lifestyle data. Build, design and ongoing development, from iOS app to web dashboard.',
    },
    role: {
      nl: 'Concept, ontwerp & ontwikkeling',
      en: 'Concept, design & development',
    },
  },
  {
    title: 'Pizzeria Italia Groningen',
    url: 'https://pizzeriaitaliagroningen.nl',
    image: pizzeria,
    subtitle: {
      nl: 'Restaurantsite voor een pizzeria in Groningen',
      en: 'Restaurant site for a pizzeria in Groningen',
    },
    description: {
      nl: 'Een sfeervolle website met menukaart en online reserveren. Ontwerp, bouw en hosting in beheer.',
      en: 'An atmospheric website with menu and online reservations. Design, build and managed hosting.',
    },
    role: {
      nl: 'Ontwerp, bouw & hosting',
      en: 'Design, build & hosting',
    },
  },
  {
    title: 'Amici Groningen',
    url: 'https://amicigroningen.nl',
    image: amici,
    subtitle: {
      nl: 'Website voor een Italiaans restaurant in Groningen',
      en: 'Website for an Italian restaurant in Groningen',
    },
    description: {
      nl: 'Een stijlvolle site met menu en reserveringen, gebouwd en gehost in beheer.',
      en: 'A stylish site with menu and reservations, built and hosted under management.',
    },
    role: {
      nl: 'Ontwerp, bouw & hosting',
      en: 'Design, build & hosting',
    },
  },
];
