export type ServiceId = 'employer-branding' | 'business' | 'immobilien' | 'events';

export interface Service {
  id: ServiceId;
  number: string;
  title: string;
  href: string;
  /** Ein Satz: was fotografiert wird und wofür */
  summary: string;
  /** Wofür die Bilder eingesetzt werden – kurz, für Listen */
  uses: string[];
}

export const services: Service[] = [
  {
    id: 'employer-branding',
    number: '01',
    title: 'Employer Branding',
    href: '/employer-branding',
    summary:
      'Echte Teams in ihrer echten Arbeitsumgebung – für Karriereseite, Recruiting und Unternehmenskommunikation.',
    uses: ['Karriereseite', 'Recruiting', 'LinkedIn', 'Kampagnen', 'Interne Kommunikation'],
  },
  {
    id: 'business',
    number: '02',
    title: 'Business & Corporate',
    href: '/business-fotografie',
    summary: 'Portraits, Führungsteams und Arbeitswelten – einheitlich für Website, Presse und Kommunikation.',
    uses: ['Website', 'Presse', 'LinkedIn', 'Geschäftsbericht'],
  },
  {
    id: 'immobilien',
    number: '03',
    title: 'Immobilien & Interior',
    href: '/immobilienfotografie',
    summary: 'Architektur und Räume für Immobilienmarketing, Hospitality und Projektkommunikation.',
    uses: ['Exposé', 'Immobilienportale', 'Website', 'Hospitality Marketing'],
  },
  {
    id: 'events',
    number: '04',
    title: 'Events',
    href: '/eventfotografie',
    summary: 'Dokumentarische Eventfotografie für PR, Social Media und interne Kommunikation.',
    uses: ['PR', 'LinkedIn', 'Event-Recap', 'Interne Kommunikation'],
  },
];

export const serviceById = (id: ServiceId) => services.find((s) => s.id === id)!;
export const otherServices = (id: ServiceId) => services.filter((s) => s.id !== id);

/** Einsatzbereiche über alle Leistungen – für die typografische Liste auf der Startseite */
export const allUses = [
  'Website',
  'Karriereseite',
  'Recruiting',
  'LinkedIn',
  'Social Media',
  'Presse',
  'Kampagnen',
  'Exposés',
  'Geschäftsbericht',
  'Event-Recaps',
  'Interne Kommunikation',
];
