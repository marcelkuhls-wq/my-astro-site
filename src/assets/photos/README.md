# Fotos

Hier kommen die echten Bilder hin. Der Dateiname muss der Bild-ID entsprechen:

    home-hero.jpg        → Startseite, großes Titelbild
    eb-hero.jpg          → Employer Branding, Titelbild
    work-konferenz-1.jpg → Case Study "Jahreskonferenz", Bild 1

Alle IDs mit Motiv- und Formatbeschreibung stehen in `src/data/photos.ts`
(und für Case Studies in `src/content/work/*.md`).

Empfehlung für den Export: JPG, sRGB, lange Kante ca. 3000 px, Qualität 85–90.
Astro erzeugt daraus automatisch AVIF- und WebP-Versionen in allen Größen.
