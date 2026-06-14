import type { Locale } from './config';

export interface ServiceCopy {
  title: string;
  description: string;
  icon: 'code' | 'app' | 'server';
}

export interface UICopy {
  meta: { title: string; description: string };
  nav: { services: string; work: string; hosting: string; about: string; contact: string; cta: string };
  hero: { tagline: string; intro: string; ctaPrimary: string; ctaSecondary: string };
  services: { eyebrow: string; title: string; lead: string; items: ServiceCopy[] };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[]; // may contain inline <a> markup
    cta: string;
    stats: { activeSince: string; experience: string; basedIn: string };
  };
  work: { eyebrow: string; title: string; roleLabel: string; visit: string };
  hosting: { eyebrow: string; title: string; lead: string };
  contact: { eyebrow: string; title: string; lead: string };
  footer: { backToTop: string };
  notFound: { code: string; title: string; lead: string; home: string };
}

export const ui: Record<Locale, UICopy> = {
  nl: {
    meta: {
      title: 'Russchen Media | Websites, apps & webhosting',
      description:
        'Russchen Media bouwt en beheert websites en apps, en verzorgt betrouwbare webhosting.',
    },
    nav: {
      services: 'Diensten',
      work: 'Werk',
      hosting: 'Hosting',
      about: 'Over mij',
      contact: 'Contact',
      cta: 'Neem contact op',
    },
    hero: {
      tagline: 'Websites, apps & webhosting.',
      intro:
        'Van idee tot livegang: ik ontwerp, bouw en host snelle, moderne websites en apps, en houd ze daarna draaiend.',
      ctaPrimary: 'Neem contact op',
      ctaSecondary: 'Bekijk werk',
    },
    services: {
      eyebrow: 'Wat ik doe',
      title: 'Van eerste idee tot draaiende site.',
      lead: 'Eén aanspreekpunt voor ontwerp, ontwikkeling én beheer, zodat je site snel, veilig en up-to-date blijft.',
      items: [
        {
          title: 'Webdevelopment',
          description:
            'Snelle, moderne websites op maat. Van eenvoudige bedrijfssite tot maatwerk, gebouwd met de nieuwste technieken.',
          icon: 'code',
        },
        {
          title: 'App-ontwikkeling met AI',
          description:
            'Web- en mobiele apps van concept tot livegang, inclusief slimme AI-functies. Zoals IntervalCoach, een AI-trainingsplatform voor sporters.',
          icon: 'app',
        },
        {
          title: 'Hosting & beveiliging',
          description:
            'Betrouwbare WordPress-hosting met updates, beveiliging en onderhoud, zodat je site snel en veilig blijft draaien.',
          icon: 'server',
        },
      ],
    },
    about: {
      eyebrow: 'Over mij',
      title: 'Sinds 2010 bouw ik aan het web.',
      paragraphs: [
        'Ik ben Martijn Russchen. Wat in 2010 begon met videoproducties, is uitgegroeid naar waar ik vandaag het liefst mee bezig ben: websites en apps bouwen, en ze daarna betrouwbaar hosten en onderhouden.',
        'Ik draag al jaren bij aan open source, waaronder <a href="https://github.com/Hacker0x01/react-datepicker" target="_blank" rel="noopener">react-datepicker</a> dat wereldwijd door talloze ontwikkelaars wordt gebruikt. Die ervaring breng ik mee naar elk project. <a href="https://intervalcoach.app" target="_blank" rel="noopener">IntervalCoach</a>, mijn eigen AI-trainingsplatform, ontstond uit mijn passie voor wielrennen en data en laat zien hoe ik AI inzet in echte producten.',
        'Beveiliging is mijn vak: met een achtergrond in security en jarenlange WordPress-ervaring houd ik sites veilig, snel en up-to-date.',
        'Je werkt rechtstreeks met mij samen: één vast aanspreekpunt dat meedenkt, van eerste idee tot livegang en alles daarna.',
      ],
      cta: 'Maak kennis',
      stats: { activeSince: 'Actief sinds', experience: 'Ervaring', basedIn: 'Gevestigd in' },
    },
    work: {
      eyebrow: 'Uitgelicht werk',
      title: 'Recente projecten.',
      roleLabel: 'Rol',
      visit: 'Bekijk',
    },
    hosting: {
      eyebrow: 'Hosting & beheer',
      title: 'Zorgeloos gehost en onderhouden.',
      lead: 'Een greep uit de sites die ik bouw, host en up-to-date houd, van horeca tot sportevenementen.',
    },
    contact: {
      eyebrow: 'Samenwerken?',
      title: 'Een nieuw project of een site die beter kan?',
      lead: 'Stuur een bericht. Ik denk graag mee over wat het beste werkt.',
    },
    footer: { backToTop: 'Terug naar boven' },
    notFound: {
      code: '404',
      title: 'Deze pagina bestaat niet.',
      lead: 'De link is mogelijk verouderd of verplaatst.',
      home: 'Terug naar home',
    },
  },

  en: {
    meta: {
      title: 'Russchen Media | Websites, apps & web hosting',
      description:
        'Russchen Media builds and maintains websites and apps, and provides reliable web hosting.',
    },
    nav: {
      services: 'Services',
      work: 'Work',
      hosting: 'Hosting',
      about: 'About',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      tagline: 'Websites, apps & web hosting.',
      intro:
        'From idea to launch: I design, build and host fast, modern websites and apps, and keep them running afterwards.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See work',
    },
    services: {
      eyebrow: 'What I do',
      title: 'From first idea to a site that runs.',
      lead: 'One point of contact for design, development and maintenance, so your site stays fast, secure and up to date.',
      items: [
        {
          title: 'Web development',
          description:
            'Fast, modern websites built to measure. From a simple business site to custom work, using the latest techniques.',
          icon: 'code',
        },
        {
          title: 'App development with AI',
          description:
            'Web and mobile apps from concept to launch, including smart AI features. Like IntervalCoach, an AI training platform for athletes.',
          icon: 'app',
        },
        {
          title: 'Hosting & security',
          description:
            'Reliable WordPress hosting with updates, security and maintenance, so your site stays fast and safe.',
          icon: 'server',
        },
      ],
    },
    about: {
      eyebrow: 'About me',
      title: "I've been building for the web since 2010.",
      paragraphs: [
        'I am Martijn Russchen. What started in 2010 with video production has grown into what I enjoy most today: building websites and apps, and then hosting and maintaining them reliably.',
        'I have contributed to open source for years, including <a href="https://github.com/Hacker0x01/react-datepicker" target="_blank" rel="noopener">react-datepicker</a>, used by countless developers worldwide. I bring that experience to every project. <a href="https://intervalcoach.app" target="_blank" rel="noopener">IntervalCoach</a>, my own AI training platform, grew out of my passion for cycling and data and shows how I put AI to work in real products.',
        'Security is my trade: with a background in security and years of WordPress experience, I keep sites safe, fast and up to date.',
        'You work directly with me: one dedicated point of contact who thinks along, from first idea to launch and everything after.',
      ],
      cta: 'Say hello',
      stats: { activeSince: 'Active since', experience: 'Experience', basedIn: 'Based in' },
    },
    work: {
      eyebrow: 'Featured work',
      title: 'Recent projects.',
      roleLabel: 'Role',
      visit: 'Visit',
    },
    hosting: {
      eyebrow: 'Hosting & maintenance',
      title: 'Hosted and maintained, worry-free.',
      lead: 'A selection of the sites I build, host and keep up to date, from hospitality to sports events.',
    },
    contact: {
      eyebrow: "Let's work together",
      title: 'A new project or a site that could be better?',
      lead: "Send a message. I'm happy to think along about what works best.",
    },
    footer: { backToTop: 'Back to top' },
    notFound: {
      code: '404',
      title: 'This page does not exist.',
      lead: 'The link may be outdated or moved.',
      home: 'Back to home',
    },
  },
};

export function useUI(locale: Locale): UICopy {
  return ui[locale];
}
