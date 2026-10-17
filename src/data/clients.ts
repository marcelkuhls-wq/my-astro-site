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
 * Kunden als Textzeile („Projekte u. a. für …“) – nur Namen, deren Projekte öffentlich
 * auf der Website stehen. Über die Projekt-IDs zeigt jede Leistungsseite nur die Kunden,
 * für die es dort auch ein Projekt gibt (Leistung oder „alsoServices“ des Projekts).
 */
export const clientDirectory: { name: string; projects: string[] }[] = [
  { name: 'Everllence', projects: ['everllence-maritime-event'] },
  { name: 'Armand de Brignac', projects: ['armand-de-brignac-elbphilharmonie'] },
  { name: 'Dein Dental', projects: ['dein-dental', 'dein-dental-buxtehude'] },
  { name: 'gamesright × HSV', projects: ['gamesright-hsv'] },
  { name: 'gamesright', projects: ['gamesright-gruender'] },
  { name: 'Garner Hotel (IHG)', projects: ['garner-hotel-opening'] },
  { name: 'Weiss Immobilien', projects: ['weiss-immobilien', 'weiss-immobilien-team'] },
  { name: 'Lindbergh', projects: ['lindbergh-opening'] },
  { name: 'Stadermann', projects: ['stadermann'] },
  { name: 'Bar Tabac', projects: ['bar-tabac'] },
  { name: 'Lippe Personal', projects: ['lippe-personal-office-opening'] },
  { name: 'Adam & Eve', projects: ['adam-eve-20-jahre'] },
  { name: 'Buying Labs', projects: ['buying-labs-weihnachtsfeier'] },
  { name: 'Select Hotel', projects: ['select-hotel-klagenfurt'] },
  { name: 'Tiedemann Immobilien', projects: ['altbau-dachgeschoss-sanierung'] },
  { name: 'Four Elements', projects: ['four-elements-pilates'] },
];

/** Alle Namen (ohne Leistungsfilter) */
export const clientNames: string[] = clientDirectory.filter((c) => c.name !== 'gamesright').map((c) => c.name);

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
