import { getCollection, type CollectionEntry } from 'astro:content';
import type { ServiceId } from '../data/services';

export type Project = CollectionEntry<'work'>;
export type Article = CollectionEntry<'journal'>;

export async function getProjects(filter?: { service?: ServiceId; featured?: boolean }) {
  const all = await getCollection('work', ({ data }) => !data.draft);
  return all
    .filter((p) =>
      filter?.service ? p.data.service === filter.service || p.data.alsoServices.includes(filter.service) : true,
    )
    .filter((p) => (filter?.featured ? p.data.featured : true))
    .sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export async function getArticles() {
  const all = await getCollection('journal', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
