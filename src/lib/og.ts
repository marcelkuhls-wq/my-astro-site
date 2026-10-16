import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { photos } from '../data/photos';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', {
  eager: true,
});
const byId = new Map(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.[^.]+$/, ''), mod.default]),
);

/**
 * Vorschaubild (1200 × 630) für LinkedIn & Co. aus einem Foto der Website.
 * Akzeptiert einen Dateinamen (z. B. "meins-fenster-hafen") oder eine Slot-ID aus photos.ts.
 */
export async function ogImageFor(id?: string): Promise<string | undefined> {
  if (!id) return undefined;
  const src = byId.get(id) ?? (photos[id]?.file ? byId.get(photos[id].file!) : undefined);
  if (!src) return undefined;
  const img = await getImage({ src, width: 1200, height: 630, fit: 'cover', position: 'attention', format: 'jpg', quality: 82 });
  return img.src;
}
