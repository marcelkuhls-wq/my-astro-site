# Studio Kuhls – Website

Website für Studio Kuhls, Fotografie für Unternehmen in Hamburg.
Gebaut mit [Astro](https://astro.build) und Tailwind CSS. Statisch generiert, ohne Tracking, Schriften selbst gehostet.

## Starten

```bash
npm install
npm run dev       # Entwicklung: http://localhost:4321
npm run build     # fertige Website nach dist/
npm run preview   # Build lokal ansehen
```

## Eigene Fotos einsetzen

1. In **`src/data/photos.ts`** steht jeder Bildplatz mit ID, Format und Motivbeschreibung
   (in der Vorschau steht die ID unten links auf jedem Platzhalter).
2. Foto als JPG exportieren (sRGB, lange Kante ca. 3000 px) und **nach der ID benennen**, z. B. `home-hero.jpg`.
3. Datei nach **`src/assets/photos/`** legen. Fertig – Astro erzeugt AVIF/WebP in allen Größen.
4. Alt-Text in `photos.ts` an das echte Motiv anpassen.

Wenn alle Bilder da sind: in `src/config/site.ts` `showPlaceholderSpecs: false` setzen.

## Case Studies

Ein Projekt = eine Markdown-Datei in **`src/content/work/`**. Der Dateiname wird zur URL
(`hafencity-office.md` → `/work/hafencity-office`). Vorlage: `beispiel-karriereseite.md` zeigt alle Felder.

Pflicht: `title`, `client`, `industry`, `service`, `location`, `year`, `summary`, `cover`.
Alles andere ist optional – ohne Zusatzfelder erscheint das Projekt als reines Portfolio.

| Feld | Erscheint als |
| --- | --- |
| `summary` | Kontextsatz (auch in Übersichten: was + wofür) |
| `alsoServices` | weitere Leistungen, Projekt erscheint auch auf deren Seiten |
| `scope` | Umfang (z. B. Produktionstage, Standorte) |
| Markdown-Text | „Das Projekt“ – fließender Text |
| `task` / `approach` | „Die Aufgabe“ / „Die Umsetzung“ – zwischen den Bildern |
| `usage` / `outcome` | „Im Einsatz“ – Kanäle und ein, zwei Sätze |
| `testimonial` | Kundenstimme (nur echte, freigegebene Zitate) |
| `gallery` | Bildreihen: `bleed`, `full`, `pair`, `offset`, `offset-r`, `trio`, `single-r` |
| `behindTheScenes` | optional |
| `featured` / `order` | Startseite (max. 5) / Reihenfolge |

Die fünf `beispiel-*.md` sind Platzhalter (`placeholder: true`, nicht indexiert) – vor dem Livegang ersetzen oder löschen.

## Kundenstimmen & Kundenlogos

- Allgemeine Kundenstimmen: `src/data/testimonials.ts` (die erste erscheint auf der Startseite, optional mit Projektlink).
- Projektbezogene Stimmen: Feld `testimonial` in der Case Study.
- Logos: `src/data/clients.ts`, max. 10, am besten einfarbige SVGs.
- Ohne Einträge erscheint nichts (in der Vorschau ein markierter Platzhalter).

## Journal

Artikel als Markdown in **`src/content/journal/`**. Seite `/journal` und Footer-Link erscheinen
automatisch, sobald ein Artikel `draft: false` hat. Ein Entwurf mit Gliederung und weiteren
Themenideen liegt bereit: `employer-branding-shooting-planen.md`.

## CTA-System

Nur drei Formulierungen: **Projekt anfragen** (primär, → /kontakt) · **Projekte ansehen** (sekundär) ·
**Mehr erfahren** (Textlink, mit unsichtbarem Kontext für Screenreader über `context`).

## Vor dem Livegang

- [ ] `src/config/site.ts`: E-Mail, Telefon, Adresse, Social Links, Formular-Endpunkt
- [ ] `astro.config.mjs` und `public/robots.txt`: finale Domain
- [ ] Impressum und Datenschutz vervollständigen (grau markierte Stellen)
- [ ] Beispielprojekte ersetzen, Fotos einsetzen, `showPlaceholderSpecs: false`
- [ ] Kundenlogos in `src/data/clients.ts` (optional)
- [ ] Texte gegenlesen, insbesondere FAQ-Antworten zu Abläufen, Formaten und Lieferung
- [ ] Echte Kundenstimmen und Logos eintragen (nur mit Freigabe)

## Struktur

```
src/
  config/site.ts          Studio-Daten, Navigation
  data/photos.ts          Bildliste mit Motivbeschreibungen
  data/services.ts        Die vier Leistungen
  data/clients.ts         Kundenlogos
  content/work/           Case Studies (Markdown)
  content/journal/        Journal-Artikel (Markdown)
  data/testimonials.ts    Kundenstimmen
  components/
    layout/               Header, Footer, SEO
    media/                Photo (Bild/Platzhalter), Gallery (Bildkompositionen)
    sections/             PageHeader, Statement, ServiceFeature, ProjectGrid,
                          IndexList, UseLine, Process, Testimonial, Faq,
                          ServiceLinks, ClientLogos, Cta
    ui/                   ArrowLink, SectionLabel, ContactForm
  layouts/                BaseLayout, LegalLayout
  pages/                  Alle Seiten
  styles/global.css       Designsystem (Farben, Typo, Raster)
```

## Designsystem

- **Farben:** Paper `#f2f0eb`, Bone `#faf8f4`, Ink `#1b1b1a`, Black `#0c0c0c` – kein Akzent in der Fläche
- **Schrift:** Inter Tight (Headlines), Inter (Text), fünf Größen: `label`, `body`, `lead`, `h3`, `h2`, `display`
- **Raster:** 12 Spalten, Außenrand `--margin`, Spaltenabstand `--gutter`, Sektionsabstand `--section`
- **Bewegung:** Sprache aus der Fotografie, keine Dauerbewegung, respektiert „Bewegung reduzieren“:
  - Bilder „entwickeln“ sich beim Scrollen (Wisch von oben, Entsättigung → Farbe) – `data-reveal="image"`
  - Linien zeichnen sich von links – `data-reveal="line"` (SectionLabel, Ablauf)
  - Hero-Headlines steigen zeilenweise aus einer Maske – `.hero-lines` / `.line`
  - Projektbild wächst beim Klick ins Titelbild der Case Study (View Transitions, `transitionName`)
  - Panoramen minimal langsamer als die Seite (`<Photo drift />`, CSS Scroll-Timeline)
  - /work: Umschalter Raster / Index, im Index folgt ein Vorschaubild der Maus
