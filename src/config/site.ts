/**
 * Zentrale Studio-Daten.
 */
export const site = {
  name: 'Studio Kuhls',
  legalName: 'Marcel Kuhls',
  founder: 'Marcel Kuhls',
  city: 'Hamburg',
  tagline: 'Fotografie für Unternehmen',

  email: 'kontakt@studio-kuhls.de',
  phone: '+49 176 28979148', // leer lassen, um die Telefonnummer auszublenden
  address: {
    street: 'Mühlenkamp 52',
    zip: '22303',
    city: 'Hamburg',
    country: 'DE',
  },

  social: {
    instagram: '', // TODO: z. B. 'https://www.instagram.com/studiokuhls'
    linkedin: '', // TODO
  },

  /**
   * Formular-Endpunkt (FormSubmit, AJAX). Leitet Anfragen per E-Mail an die Adresse weiter.
   * Beim allerersten Absenden schickt FormSubmit eine Aktivierungs-Mail an diese Adresse.
   * Leer = das Formular öffnet eine vorbefüllte E-Mail im Mailprogramm.
   */
  formEndpoint: 'https://formsubmit.co/ajax/kontakt@studio-kuhls.de',

  /**
   * Zeigt auf Bildplatzhaltern die Bildbeschreibung (Motiv, Format, Hinweise).
   * Vor dem Livegang auf false setzen, falls noch Platzhalter übrig sind.
   */
  showPlaceholderSpecs: false,
};

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Employer Branding', href: '/employer-branding' },
  { label: 'Business', href: '/business-fotografie' },
  { label: 'Immobilien', href: '/immobilienfotografie' },
  { label: 'Events', href: '/eventfotografie' },
  { label: 'About', href: '/about' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;
