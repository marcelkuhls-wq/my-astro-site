/**
 * Kundenstimmen – nur echte, freigegebene Zitate eintragen.
 * Solange die Liste leer ist, erscheint auf der Website nichts
 * (in der Vorschau mit showPlaceholderSpecs: ein markierter Platzhalter).
 *
 * Kundenstimmen zu einem bestimmten Projekt gehören direkt in die
 * Case Study (Feld "testimonial" in src/content/work/*.md).
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional: ID der Case Study, z. B. "hafencity-office" → verlinkt das Projekt */
  project?: string;
}

export const testimonials: Testimonial[] = [];
