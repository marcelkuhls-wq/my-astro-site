/**
 * Kundenstimmen – nur echte Zitate, wörtlich (Kürzungen mit „…“ markiert).
 * Quelle der ersten Einträge: öffentliche Google-Bewertungen (5 Sterne).
 */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  /** z. B. "Google-Bewertung" */
  source?: string;
  /** Optional: ID der Case Study → verlinkt das Projekt */
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'felix-weiss',
    quote:
      'Wir fotografieren seit längerer Zeit hochwertige Immobilien in Hamburg mit Marcel Kuhls und sind sehr zufrieden. Einmal vom professionellen Auftreten gegenüber Eigentümern und auch in Bezug auf die Fotoqualität, die immer sehr gut ist. Zusätzlich arbeitet Marcel häufig mit Drohnenfotos, was für unser Auftreten sehr modern wirkt.',
    name: 'Felix Weiss',
    role: 'Geschäftsführer',
    company: 'Weiss Immobilien',
    source: 'Google-Bewertung',
    project: 'weiss-immobilien',
  },
  {
    id: 'till',
    quote:
      'Marcel hat uns bei der Aufnahme von Produktfotos und Employer Branding Thematiken unterstützt. Sehr professionell und mit einem guten ästhetischen Auge.',
    name: 'Till Stadermann',
    role: 'Geschäftsführender Gesellschafter',
    company: 'Software Service Stadermann GmbH',
    source: 'Google-Bewertung',
    project: 'stadermann',
  },
  {
    id: 'felix-lippe',
    quote:
      'Marcel hat bei uns die Lippe Personal Büroeinweihung fotografiert. … und er hat sich sehr gut mit unseren Gästen verstanden, was auch ein sehr wichtiger Punkt als Fotograf ist, um gute Bilder zu schießen.',
    name: 'Felix Lippe',
    company: 'Lippe Personal',
    source: 'Google-Bewertung',
  },
  {
    id: 'rabil-smith',
    quote:
      'Seine Zuverlässigkeit und die pünktliche Einhaltung von Deadlines machen ihn stets zur richtigen Wahl für uns.',
    name: 'Rabil Smith',
    source: 'Google-Bewertung',
  },
  {
    id: 'konstantin-tuludis',
    quote:
      'Die Arbeit mit Marcel ist immer hoch professionell und er arbeitet sehr präzise mit Leidenschaft. Die Ergebnisse sind wirklich immer sehr gut …',
    name: 'Konstantin Tuludis',
    role: 'Geschäftsführer',
    company: 'Voltpol GmbH',
    source: 'Google-Bewertung',
  },
];

export const testimonialById = (id: string) => testimonials.find((t) => t.id === id);
