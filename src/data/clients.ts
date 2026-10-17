/**
 * Kundenlogos. Beispiel:
 *
 *   import Hafenwerk from '../assets/clients/hafenwerk.svg';
 *   export const clients: Client[] = [{ name: 'Hafenwerk GmbH', logo: Hafenwerk }];
 *
 * SVGs am besten einfarbig (currentColor), dann passen sie sich dem Design an.
 */
export interface Client {
  name: string;
  logo?: any;
}

export const clients: Client[] = [];

/**
 * Kunden als Textzeile („Projekte u. a. für …“) – nur Namen, deren Projekte
 * bereits öffentlich auf der Website stehen. Keine Logos, daher keine Freigabe nötig.
 */
export const clientNames: string[] = [
  'Everllence',
  'Armand de Brignac',
  'Dein Dental',
  'gamesright × HSV',
  'Garner Hotel (IHG)',
  'Weiss Immobilien',
  'Lindbergh',
  'Stadermann',
  'Bar Tabac',
  'Lippe Personal',
  'Adam & Eve',
  'Select Hotel',
  'Tiedemann Immobilien',
  'Four Elements',
];

/** Veröffentlichungen mit Bildnachweis „© Marcel Kuhls“ – nur mit Link zum Beleg. */
export const press: { outlet: string; href: string; note: string }[] = [
  {
    outlet: 'Hamburger Abendblatt',
    href: 'https://www.abendblatt.de/sport/article409967645/hamburger-milliarden-klage-gegen-tipico-anhoerung-startet.html',
    note: 'Portrait der gamesright-Gründer, 11.09.2025',
  },
];

/** Kundenlogos (einfarbig, public/logos/) – nur bekanntere Marken. scale gleicht die optische Größe aus. */
export const logos: { name: string; file: string; scale?: number; w: number; h: number }[] = [
  { name: 'Everllence', file: 'everllence.webp', scale: 0.9, w: 438, h: 72 },
  { name: 'Garner Hotels (IHG)', file: 'garner-hotels.webp', scale: 1.05, w: 212, h: 72 },
  { name: 'Dein Dental', file: 'dein-dental.webp', scale: 1.5, w: 59, h: 72 },
  { name: 'gamesright', file: 'gamesright.webp', scale: 0.85, w: 391, h: 72 },
  { name: 'Lindbergh', file: 'lindbergh.webp', scale: 0.75, w: 800, h: 72 },
  { name: 'Weiss Immobilien', file: 'weiss-immobilien.webp', scale: 0.5, w: 900, h: 51 },
  { name: 'Tiedemann Immobilien', file: 'tiedemann-immobilien.webp', scale: 1.4, w: 201, h: 72 },
  { name: 'Software Service Stadermann', file: 'stadermann.webp', scale: 0.8, w: 510, h: 72 },
  { name: 'Lippe Personal', file: 'lippe-personal.webp', scale: 1.2, w: 268, h: 72 },
  { name: 'Select Hotels', file: 'select-hotels.webp', scale: 1.1, w: 302, h: 72 },
  { name: 'Adam & Eve Beautylounge', file: 'adam-eve-beautylounge.webp', scale: 1.1, w: 209, h: 72 },
];
