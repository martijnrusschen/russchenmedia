export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
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
];
