/**
 * BILDLISTE – alle Bildplätze der Website.
 *
 * So ersetzt du einen Platzhalter:
 *   1. Foto exportieren (JPG, lange Kante ca. 3000 px, sRGB)
 *   2. Datei nach der ID benennen, z. B. "home-hero.jpg"
 *   3. In src/assets/photos/ legen – fertig. Astro erzeugt automatisch
 *      AVIF/WebP in allen nötigen Größen.
 *
 * Alternativ mit `file` auf ein bereits vorhandenes Foto verweisen.
 * Den Alt-Text hier bei Bedarf an das echte Motiv anpassen.
 * Bilder für Case Studies stehen direkt in src/content/work/*.md.
 */
export interface PhotoSpec {
  /** Alt-Text für Screenreader und Google – beschreibt das echte Motiv */
  alt: string;
  category: string;
  format: string;
  /** Was auf dem Bild zu sehen sein sollte */
  motif: string;
  note?: string;
  /** Helligkeit des Platzhalters – nur für die Vorschau */
  tone?: 'light' | 'mid' | 'dark';
  /**
   * Optional: vorhandene Datei aus src/assets/photos/ verwenden (Name ohne Endung),
   * statt eine Datei mit der ID anzulegen. So kann ein Foto an mehreren Stellen stehen.
   */
  file?: string;
  /** Bildausschnitt, z. B. "50% 70%" – was beim Beschneiden sichtbar bleibt */
  position?: string;
}

export const photos: Record<string, PhotoSpec> = {
  /* ── Startseite ─────────────────────────────────────────────────────── */
  'home-hero': {
    alt: 'Vier Mitarbeitende eines Hamburger Maklerbüros gehen lachend im Gespräch durch eine Wohnstraße.',
    category: 'Business / Team',
    format: 'Querformat, sehr breit',
    motif: 'Weiss Immobilien – Team unterwegs',
    file: 'weiss-team-unterwegs',
    position: '50% 45%',
  },
  'home-eb': {
    alt: 'Mitarbeiterin erklärt einem Kollegen etwas am Bildschirm.',
    category: 'Employer Branding',
    format: 'Querformat 3:2',
    motif: 'Zusammenarbeit am Arbeitsplatz, zwei Personen, echte Situation.',
    note: 'Ruhige rechte Bildhälfte – der Text steht rechts daneben.',
  },
  'home-business-1': {
    alt: 'Portrait eines Mitarbeiters in beigem Sakko vor neutralem Hintergrund.',
    category: 'Business & Corporate',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien – Portrait',
    file: 'weiss-team-portrait-beige',
    position: '50% 30%',
  },
  'home-business-2': {
    alt: 'Portrait einer Mitarbeiterin mit Halstuch vor neutralem Hintergrund.',
    category: 'Business & Corporate',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien – Portrait',
    file: 'weiss-team-portrait-tuch',
    position: '50% 30%',
  },
  'home-immobilien': {
    alt: 'Heller Wohnraum mit Eichenparkett, Kücheninsel und bodentiefen Fenstern mit Blick über Hamburg.',
    category: 'Immobilien & Interior',
    format: 'Panorama 21:9 (Mobile: 4:3)',
    motif: 'Weiss Immobilien – Wohnraum',
    file: 'weiss-immobilien-wohnraum',
    position: '50% 58%',
  },
  'home-events-1': {
    alt: 'Gäste im Gespräch bei einer Jubiläumsfeier, rote Lichtakzente an den Säulen.',
    category: 'Events',
    format: 'Querformat 3:2',
    motif: 'Adam & Eve – Gäste',
    file: 'adam-eve-gaeste',
  },
  'home-events-2': {
    alt: 'Gastgeberin spricht lachend ins Mikrofon.',
    category: 'Events',
    format: 'Hochformat 4:5',
    motif: 'Adam & Eve – Moderation',
    file: 'adam-eve-moderation',
    position: '50% 35%',
  },
  'home-events-3': {
    alt: 'Cocktailglas mit aufgelegtem Vitamin-Shot.',
    category: 'Events · Detail',
    format: 'Quadrat 1:1',
    motif: 'Adam & Eve – Detail',
    file: 'adam-eve-cocktail',
    position: '50% 45%',
  },
  'home-eb-feature-1': {
    alt: 'Portrait eines Mitarbeiters in der Werkstatt.',
    category: 'Employer Branding',
    format: 'Hochformat 4:5',
    motif: 'Umgebungsportrait am echten Arbeitsplatz. Direkter, ruhiger Blick.',
    note: 'Steht auf dunklem Hintergrund.',
    tone: 'mid',
  },
  'home-eb-feature-2': {
    alt: 'Team bespricht ein Projekt an einem Stehtisch.',
    category: 'Employer Branding',
    format: 'Querformat 3:2',
    motif: 'Teamsituation mit Bewegung, mehrere Personen.',
    tone: 'mid',
  },
  'home-about': {
    alt: 'Marcel Kuhls, Fotograf und Gründer von Studio Kuhls.',
    category: 'About',
    format: 'Hochformat 4:5',
    motif: 'Portrait Marcel Kuhls',
    file: 'marcel-kuhls-portrait',
    position: '50% 30%',
  },

  /* ── Employer Branding ──────────────────────────────────────────────── */
  'eb-hero': {
    alt: 'Mitarbeitende im Gespräch in einem hellen Büro.',
    category: 'Employer Branding',
    format: 'Querformat 16:9 (Mobile: 4:5)',
    motif: 'Stärkstes Employer-Branding-Motiv: echte Interaktion, Gesichter, Arbeitsumgebung.',
    note: 'Motiv mittig halten, auf Mobile wird zum Hochformat beschnitten.',
    tone: 'mid',
  },
  'eb-situation-wide': {
    alt: 'Blick in eine Arbeitsumgebung mit mehreren Teams.',
    category: 'Employer Branding',
    format: 'Panorama 21:9',
    motif: 'Überblick: Wie sieht es hier aus? Menschen bei der Arbeit, Raum und Licht.',
    tone: 'dark',
  },
  'eb-situation-1': {
    alt: 'Zwei Kollegen arbeiten gemeinsam an einem Werkstück.',
    category: 'Employer Branding',
    format: 'Querformat 3:2',
    motif: 'Arbeitssituation mit Händen und Gesichtern.',
  },
  'eb-portrait-1': {
    alt: 'Portrait einer Mitarbeiterin an ihrem Arbeitsplatz.',
    category: 'Employer Branding · Portrait',
    format: 'Hochformat 4:5',
    motif: 'Umgebungsportrait, natürliches Licht.',
    tone: 'mid',
  },
  'eb-team-1': {
    alt: 'Kleines Team lacht gemeinsam während einer Pause.',
    category: 'Employer Branding · Team',
    format: 'Hochformat 4:5',
    motif: 'Team in informeller Situation – Küche, Pause, Flur.',
  },
  'eb-situation-2': {
    alt: 'Mitarbeiter im Kundengespräch.',
    category: 'Employer Branding',
    format: 'Querformat 3:2',
    motif: 'Arbeit mit Kunden oder Partnern.',
    tone: 'mid',
  },
  'eb-detail-1': {
    alt: 'Detail: Hände mit Werkzeug.',
    category: 'Employer Branding · Detail',
    format: 'Hochformat 3:4',
    motif: 'Detail aus dem Arbeitsalltag, das die Branche zeigt.',
    tone: 'dark',
  },
  'eb-portrait-2': {
    alt: 'Portrait eines Auszubildenden.',
    category: 'Employer Branding · Portrait',
    format: 'Hochformat 4:5',
    motif: 'Portrait für Recruiting-Kampagne.',
  },
  'eb-portrait-3': {
    alt: 'Portrait einer Teamleiterin.',
    category: 'Employer Branding · Portrait',
    format: 'Hochformat 4:5',
    motif: 'Zweites Portrait, gleiche Lichtsprache.',
    tone: 'mid',
  },
  'eb-behind': {
    alt: 'Marcel Kuhls fotografiert ein Team bei der Arbeit.',
    category: 'Behind the Scenes',
    format: 'Querformat 3:2',
    motif: 'Marcel bei der Arbeit im Unternehmen – zeigt, wie unaufgeregt das Shooting abläuft.',
    tone: 'mid',
  },

  /* ── Business ───────────────────────────────────────────────────────── */
  'business-hero': {
    alt: 'Vier Mitarbeitende eines Maklerbüros gehen lachend durch eine Hamburger Wohnstraße.',
    category: 'Business & Corporate',
    format: 'Querformat 16:9 (Mobile: 4:5)',
    motif: 'Weiss Immobilien – Team',
    file: 'weiss-team-unterwegs',
    position: '50% 45%',
  },
  'business-portrait-1': {
    alt: 'Businessportrait eines Mitarbeiters in dunklem Sakko.',
    category: 'Portrait',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien',
    file: 'weiss-team-portrait-dunkel',
    position: '50% 30%',
  },
  'business-portrait-2': {
    alt: 'Businessportrait einer Mitarbeiterin mit Halstuch.',
    category: 'Portrait',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien',
    file: 'weiss-team-portrait-tuch',
    position: '50% 30%',
  },
  'business-team': {
    alt: 'Mitarbeiterin bespricht sich lachend mit einem Kollegen am Schreibtisch.',
    category: 'Team',
    format: 'Querformat 3:2',
    motif: 'Weiss Immobilien',
    file: 'weiss-team-schreibtisch',
    position: '50% 30%',
  },
  'business-portrait-3': {
    alt: 'Mitarbeiter in kariertem Sakko sitzt lächelnd im Büro.',
    category: 'Portrait',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien',
    file: 'weiss-team-portrait-sitzend',
    position: '50% 30%',
  },
  'business-workspace': {
    alt: 'Teil des Teams sitzt entspannt auf einem Sofa im Büro.',
    category: 'Team',
    format: 'Panorama 21:9',
    motif: 'Weiss Immobilien – unterwegs',
    file: 'weiss-team-sofa',
    position: '50% 40%',
  },

  /* ── Immobilien ─────────────────────────────────────────────────────── */
  'immo-hero': {
    alt: 'Offener Wohn- und Essbereich mit ovalem Holztisch, Pendelleuchten und Küchenzeile.',
    category: 'Immobilien & Interior',
    format: 'Panorama 21:9 (Mobile: 4:5)',
    motif: 'Weiss Immobilien – Essbereich',
    file: 'weiss-immobilien-essbereich',
    position: '45% 62%',
  },
  'immo-interior-1': {
    alt: 'Wohnraum mit Parkett, Kücheninsel und Fensterfront mit Blick über die Stadt.',
    category: 'Interior',
    format: 'Querformat 16:9',
    motif: 'Weiss Immobilien – Wohnraum',
    file: 'weiss-immobilien-wohnraum',
    position: '50% 55%',
  },
  'immo-detail-1': {
    alt: 'Loggia mit Holzverkleidung und Rattansesseln, dahinter Hafen und Großmarkthalle.',
    category: 'Detail',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien – Loggia',
    file: 'weiss-immobilien-loggia',
    position: '62% 50%',
  },
  'immo-interior-2': {
    alt: 'Eingangshalle mit schwarzen Pendelleuchten, bepflanzter Wand und großer Glasfront.',
    category: 'Interior',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien – Eingangshalle',
    file: 'weiss-immobilien-eingang',
    position: '55% 50%',
  },
  'immo-architecture': {
    alt: 'Dach der Elbphilharmonie mit Blick über die Hamburger Innenstadt im Abendlicht.',
    category: 'Architektur',
    format: 'Panorama 21:9',
    motif: 'Elbphilharmonie – Skyline',
    file: 'armand-skyline',
    position: '50% 60%',
  },
  'immo-hotel': {
    alt: 'Hotellobby mit Sitzbereich und warmem Licht.',
    category: 'Hotel',
    format: 'Querformat 3:2',
    motif: 'Hotel oder Lobby, einladend, gern mit Gast in der Unschärfe.',
    tone: 'mid',
  },
  'immo-gastro': {
    alt: 'Gedeckter Tisch in einem Restaurant.',
    category: 'Gastronomie',
    format: 'Hochformat 4:5',
    motif: 'Restaurant-Interior oder Tischdetail.',
    tone: 'dark',
  },
  'immo-detail-2': {
    alt: 'Wohnhochhaus mit Glasfassade und Loggien vor blauem Himmel.',
    category: 'Architektur',
    format: 'Hochformat 4:5',
    motif: 'Weiss Immobilien – Fassade',
    file: 'weiss-immobilien-fassade',
    position: '48% 35%',
  },

  /* ── Events ─────────────────────────────────────────────────────────── */
  'events-hero': {
    alt: 'Gäste im Gespräch bei einer Jubiläumsfeier, rote Lichtakzente an den Säulen.',
    category: 'Events',
    format: 'Querformat 3:2 (Mobile: 4:5)',
    motif: 'Adam & Eve – Gäste',
    file: 'adam-eve-gaeste',
    position: '45% 50%',
  },
  'events-moment-1': {
    alt: 'Gastgeberin begrüßt lachend einen Gast.',
    category: 'Events',
    format: 'Hochformat 4:5',
    motif: 'Adam & Eve – Begrüßung',
    file: 'adam-eve-begruessung',
    position: '45% 35%',
  },
  'events-stage': {
    alt: 'Jubiläumswand mit der Aufschrift 20 Jahre Hamburgs Beauty Adresse.',
    category: 'Events · Branding',
    format: 'Querformat 3:2',
    motif: 'Adam & Eve – Jubiläumswand',
    file: 'adam-eve-jubilaeumswand',
  },
  'events-detail-1': {
    alt: 'Ein Beauty Shot wird in ein Cocktailglas gegossen.',
    category: 'Events · Detail',
    format: 'Hochformat 3:4',
    motif: 'Adam & Eve – Detail',
    file: 'adam-eve-beauty-shot',
  },
  'events-crowd': {
    alt: 'Rauchende Cocktails an der Bar im roten Licht.',
    category: 'Events · Atmosphäre',
    format: 'Querformat 16:9',
    motif: 'Adam & Eve – Bar',
    file: 'adam-eve-bar',
  },
  'events-detail-2': {
    alt: 'Zwei Flaschen alkoholfreier Aperitivo neben einem Aufsteller mit QR-Code.',
    category: 'Events · Detail',
    format: 'Hochformat 3:4',
    motif: 'Adam & Eve – Aperitivo',
    file: 'adam-eve-aperitivo',
    position: '50% 60%',
  },
  'events-moment-2': {
    alt: 'Zwei Gäste umarmen sich lachend auf der Terrasse.',
    category: 'Events',
    format: 'Quadrat 1:1',
    motif: 'Adam & Eve – Wiedersehen',
    file: 'adam-eve-wiedersehen',
    position: '50% 30%',
  },
  'events-location': {
    alt: 'Gast am Geländer der Dachterrasse der Elbphilharmonie.',
    category: 'Events · Location',
    format: 'Querformat 3:2',
    motif: 'Armand de Brignac – Dachterrasse',
    file: 'armand-dachterrasse-blick',
    position: '50% 55%',
  },
  'events-atmosphere': {
    alt: 'Zwei DJs legen im roten Licht auf.',
    category: 'Events · Atmosphäre',
    format: 'Panorama 21:9',
    motif: 'Armand de Brignac – DJs',
    file: 'armand-djs',
    position: '50% 45%',
  },

  /* ── About ──────────────────────────────────────────────────────────── */
  'about-portrait': {
    alt: 'Marcel Kuhls, Fotograf und Gründer von Studio Kuhls, in dunkelblauem Sakko vor einer hellen Betonwand.',
    category: 'About',
    format: 'Hochformat 4:5',
    motif: 'Portrait Marcel Kuhls',
    file: 'marcel-kuhls-portrait',
    position: '50% 30%',
  },
  'about-work-1': {
    alt: 'Marcel Kuhls mit Kamera auf der Plaza der Elbphilharmonie, gespiegelt in einer Glasfront.',
    category: 'Behind the Scenes',
    format: 'Querformat 3:2',
    motif: 'Marcel bei der Arbeit',
    file: 'marcel-kuhls-spiegelung',
    position: '35% 50%',
  },
  'about-work-2': {
    alt: 'Dach der Elbphilharmonie mit Spiegelung des Sonnenuntergangs.',
    category: 'Behind the Scenes',
    format: 'Hochformat 4:5',
    motif: 'Architekturdetail',
    file: 'armand-dach',
  },
};
