/**
 * Kundenstimmen – nur echte Zitate, wörtlich und vollständig.
 * Quelle der ersten Einträge: öffentliche Google-Bewertungen (5 Sterne).
 */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  /** Wortgleiche Stelle im Zitat, die betont wird */
  highlight?: string;
  /** z. B. "Google-Bewertung" */
  source?: string;
  /** Optional: ID der Case Study → verlinkt das Projekt */
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'felix-weiss',
    highlight: 'professionellen Auftreten gegenüber Eigentümern',
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
    highlight: 'Employer Branding',
    quote:
      'Marcel hat uns bei der Aufnahme von Produktfotos und Employer Branding Thematiken unterstützt. Sehr professionell und mit einem guten ästhetischen Auge',
    name: 'Till Stadermann',
    role: 'Geschäftsführender Gesellschafter',
    company: 'Software Service Stadermann GmbH',
    source: 'Google-Bewertung',
    project: 'stadermann',
  },
  {
    id: 'felix-lippe',
    highlight: 'sehr gut mit unseren Gästen verstanden',
    quote:
      'Marcel hat bei uns die Lippe Personal Büroeinweihung fotografiert. Ich bin sehr zufrieden mit seiner Leistungen und den schönen Bildern. Besonders sehr auftreten mit Smoking war sehr professionell und er hat sich sehr gut mit unseren Gästen verstanden, was auch ein sehr wichtiger Punkt als Fotograf ist, um gute Bilder zu schießen. Ich empfehle Ihn gerne weiter!',
    name: 'Felix Lippe',
    company: 'Lippe Personal',
    source: 'Google-Bewertung',
    project: 'lippe-personal-office-opening',
  },
  {
    id: 'rabil-smith',
    quote:
      'Herr Kuhls überzeugt uns immer wieder mit seiner positiven Energie, seinem humorvollen Auftreten und seinem außergewöhnlichen Engagement. Seine Zuverlässigkeit und die pünktliche Einhaltung von Deadlines machen ihn stets zur richtigen Wahl für uns',
    name: 'Rabil Smith',
    source: 'Google-Bewertung',
  },
  {
    id: 'konstantin-tuludis',
    highlight: 'sehr präzise mit Leidenschaft',
    quote:
      'Die Arbeit mit Marcel ist immer hoch professionell und er arbeitet sehr präzise mit Leidenschaft. Die Ergebnisse sind wirklich immer sehr gut und Marcel ist menschlich auch einfach immer gut drauf. Es macht einfach Spaß mit ihm zu arbeiten. Danke für deine Mühe!',
    name: 'Konstantin Tuludis',
    role: 'Geschäftsführer',
    company: 'Voltpol GmbH',
    source: 'Google-Bewertung',
  },
];

export const testimonialById = (id: string) => testimonials.find((t) => t.id === id);

/** Zitat in Teile zerlegen: [davor, Betonung, danach] */
export function splitQuote(t: Pick<Testimonial, 'quote' | 'highlight'>): [string, string, string] {
  const i = t.highlight ? t.quote.indexOf(t.highlight) : -1;
  if (i < 0 || !t.highlight) return [t.quote, '', ''];
  return [t.quote.slice(0, i), t.highlight, t.quote.slice(i + t.highlight.length)];
}
