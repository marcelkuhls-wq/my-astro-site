/**
 * Zentrale Studio-Daten.
 */
export const site = {
  name: 'Studio Kuhls',
  legalName: 'Marcel Kuhls',
  /** Name des Gewerbes (Studio Kuhls ist die Marke dafür) */
  businessName: 'Marcel Kuhls Photography',
  /** USt-IdNr. „DE…“ – leer lassen, wenn keine vorhanden */
  vatId: '',
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

  /** Google Analytics 4 – Mess-ID „G-…“ eintragen; leer = kein Tracking, kein Cookie-Banner */
  analytics: {
    ga4: '',
  },

  /** Google-Unternehmensprofil – Bewertungsübersicht */
  google: {
    url: 'https://www.google.com/maps?cid=2829761485552863488',
    rating: '5,0',
    count: 18,
  },

  social: {
    instagram: '', // TODO: z. B. 'https://www.instagram.com/studiokuhls'
    linkedin: 'https://www.linkedin.com/company/studio-kuhls',
  },

  /**
   * Kontaktformular über Web3Forms (Konto: kontakt@studio-kuhls.de, app.web3forms.com).
   * Der Access Key ist öffentlich und darf im Code stehen.
   * Leer lassen = das Formular öffnet eine vorbefüllte E-Mail im Mailprogramm.
   */
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: '5348b19e-1879-4429-99a3-ad606b8582e4',

  /**
   * Zeigt auf Bildplatzhaltern die Bildbeschreibung (Motiv, Format, Hinweise).
   * Vor dem Livegang auf false setzen, falls noch Platzhalter übrig sind.
   */
  showPlaceholderSpecs: false,
};

export const nav = [
  { label: 'Projekte', href: '/work' },
  { label: 'Employer Branding', href: '/employer-branding' },
  { label: 'Business', href: '/business-fotografie' },
  { label: 'Immobilien', href: '/immobilienfotografie' },
  { label: 'Events', href: '/eventfotografie' },
  { label: 'Journal', href: '/journal' },
  { label: 'Über mich', href: '/about' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;
