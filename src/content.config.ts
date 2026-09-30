import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const serviceId = z.enum(['employer-branding', 'business', 'immobilien', 'events']);

const photoSpec = z.object({
  alt: z.string(),
  category: z.string(),
  format: z.string(),
  motif: z.string(),
  note: z.string().optional(),
  tone: z.enum(['light', 'mid', 'dark']).optional(),
});

const photoRef = z.object({
  /** Dateiname ohne Endung in src/assets/photos/ */
  id: z.string(),
  spec: photoSpec,
  position: z.string().optional(),
});

const galleryRow = z.object({
  layout: z.enum(['bleed', 'full', 'pair', 'offset', 'offset-r', 'trio', 'single-r']),
  images: z.array(photoRef).min(1).max(3),
});

/**
 * Case Studies: eine Markdown-Datei pro Projekt in src/content/work/.
 * Der Dateiname wird zur URL: kanzlei-am-hafen.md → /work/kanzlei-am-hafen
 *
 * Pflicht sind nur Titel, Kunde, Branche, Leistung, Location, Jahr, Kurzbeschreibung
 * und Titelbild. Alles andere ist optional – so kann ein Projekt als reines
 * Portfolio (wenig Text, viele Bilder) oder als ausführliche Case Study erscheinen.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    /** Hauptleistung – bestimmt, auf welcher Leistungsseite das Projekt erscheint */
    service: serviceId,
    /** Weitere Leistungen im Projekt, z. B. ["business"] */
    alsoServices: z.array(serviceId).default([]),
    location: z.string(),
    year: z.number().int(),
    /** Ein Satz Kontext: was und wofür. Erscheint auch in Übersichten. */
    summary: z.string(),
    /** Projektumfang, z. B. "2 Produktionstage, 3 Standorte" */
    scope: z.string().optional(),
    /** Wofür die Bilder eingesetzt werden */
    usage: z.array(z.string()).default([]),
    /** "Die Aufgabe" – Ausgangslage in 1–3 Sätzen */
    task: z.string().optional(),
    /** "Die Umsetzung" – wie produziert wurde */
    approach: z.string().optional(),
    /** "Im Einsatz" – wo die Bilder heute zu sehen sind */
    outcome: z.string().optional(),
    testimonial: z
      .object({ quote: z.string(), name: z.string(), role: z.string(), company: z.string() })
      .optional(),
    cover: photoRef,
    gallery: z.array(galleryRow).default([]),
    behindTheScenes: z.array(galleryRow).optional(),
    /** Auf der Startseite zeigen */
    featured: z.boolean().default(false),
    /** Sortierung – kleinere Zahl zuerst */
    order: z.number().default(100),
    /** Beispielprojekt – vor dem Livegang ersetzen oder löschen */
    placeholder: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/**
 * Journal: Fachartikel in src/content/journal/.
 * Erscheint erst auf der Website, wenn mindestens ein Artikel draft: false hat.
 */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Passende Leistung – wird am Artikelende verlinkt */
    service: serviceId.optional(),
    cover: photoRef.optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { work, journal };
