import type { Locale } from './config';

export interface LegalSection {
  heading: string;
  body: string[]; // may contain inline <a> markup
}

export interface LegalDoc {
  navLabel: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const email = 'info@russchenmedia.nl';
const mail = `<a href="mailto:${email}">${email}</a>`;

export const privacy: Record<Locale, LegalDoc> = {
  nl: {
    navLabel: 'Privacy',
    title: 'Privacyverklaring',
    updated: 'Laatst bijgewerkt: 14 juni 2026',
    intro:
      'Russchen Media respecteert je privacy en verwerkt persoonsgegevens alleen waar dat nodig is. Hieronder lees je welke gegevens we verwerken en waarom.',
    sections: [
      {
        heading: 'Verwerkingsverantwoordelijke',
        body: [
          `Russchen Media, gevestigd in Assen, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring. Vragen? Mail naar ${mail}.`,
        ],
      },
      {
        heading: 'Contactformulier',
        body: [
          'Gebruik je het contactformulier, dan verwerken we je naam, e-mailadres en bericht, uitsluitend om je vraag te beantwoorden. Het versturen verloopt via Web3Forms, dat het bericht namens ons aflevert. We bewaren berichten zolang nodig is om je vraag af te handelen.',
        ],
      },
      {
        heading: 'Statistieken',
        body: [
          'We meten websitebezoek met Cloudflare Web Analytics. Dit werkt zonder cookies en zonder dat er persoonlijke profielen worden opgebouwd.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'Deze site plaatst geen tracking- of marketingcookies. We bewaren alleen lokaal je themavoorkeur (licht of donker) in je browser; die gegevens worden nergens naartoe gestuurd.',
        ],
      },
      {
        heading: 'Hosting',
        body: ['De website wordt gehost via Cloudflare.'],
      },
      {
        heading: 'Je rechten',
        body: [
          `Je hebt recht op inzage, correctie of verwijdering van je persoonsgegevens. Stuur daarvoor een bericht naar ${mail}.`,
        ],
      },
    ],
  },

  en: {
    navLabel: 'Privacy',
    title: 'Privacy statement',
    updated: 'Last updated: 14 June 2026',
    intro:
      'Russchen Media respects your privacy and only processes personal data where necessary. Below you can read which data we process and why.',
    sections: [
      {
        heading: 'Data controller',
        body: [
          `Russchen Media, based in Assen (the Netherlands), is responsible for the processing of personal data described in this statement. Questions? Email ${mail}.`,
        ],
      },
      {
        heading: 'Contact form',
        body: [
          'If you use the contact form, we process your name, email address and message solely to answer your question. Submissions are handled by Web3Forms, which delivers the message on our behalf. We keep messages for as long as needed to handle your request.',
        ],
      },
      {
        heading: 'Analytics',
        body: [
          'We measure site visits with Cloudflare Web Analytics. It works without cookies and without building personal profiles.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'This site sets no tracking or marketing cookies. We only store your theme preference (light or dark) locally in your browser; that data is never sent anywhere.',
        ],
      },
      {
        heading: 'Hosting',
        body: ['The website is hosted on Cloudflare.'],
      },
      {
        heading: 'Your rights',
        body: [
          `You have the right to access, correct or delete your personal data. To do so, email ${mail}.`,
        ],
      },
    ],
  },
};
