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
