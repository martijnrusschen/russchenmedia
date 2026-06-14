export interface Project {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  image: string;
  logo?: string;
  role: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'IntervalCoach',
    subtitle: 'AI-trainingscoach voor wielrenners, hardlopers en triatleten',
    description:
      'Een AI-platform dat dagelijkse trainingen aanpast op basis van herstel- en leefdata. Bouw, ontwerp en doorontwikkeling, van iOS-app tot webdashboard.',
    url: 'https://intervalcoach.app',
    image: '/images/intervalcoach-dashboard.png',
    logo: '/images/intervalcoach-logo.svg',
    role: 'Concept, ontwerp & ontwikkeling',
    featured: true,
  },
];
