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
  'Engel & Völkers',
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
export const logos: { name: string; file: string; scale?: number }[] = [
  { name: 'Engel & Völkers', file: 'engel-voelkers.png', scale: 0.8 },
  { name: 'Armand de Brignac', file: 'armand-de-brignac.png', scale: 1.5 },
  { name: 'Garner Hotels (IHG)', file: 'garner-hotels.png', scale: 1.05 },
  { name: 'Dein Dental', file: 'dein-dental.png', scale: 1.5 },
  { name: 'gamesright', file: 'gamesright.png', scale: 0.85 },
  { name: 'Lindbergh', file: 'lindbergh.png', scale: 0.75 },
  { name: 'Weiss Immobilien', file: 'weiss-immobilien.png', scale: 0.5 },
  { name: 'Software Service Stadermann', file: 'stadermann.png', scale: 0.8 },
  { name: 'Lippe Personal', file: 'lippe-personal.png', scale: 1.2 },
  { name: 'Select Hotels', file: 'select-hotels.png', scale: 1.1 },
  { name: 'Adam & Eve Beautylounge', file: 'adam-eve-beautylounge.png', scale: 1.1 },
];
