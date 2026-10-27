import { getEntry, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type CollectionName = 'home' | 'students' | 'community' | 'youth' | 'shared';

export async function loadPage<C extends CollectionName>(
  collection: C,
  id: string,
) {
  const entry = await getEntry(collection, id);
  if (!entry) {
    throw new Error(`Missing content entry: ${collection}/${id}`);
  }
  const rendered = await render(entry);
  return { entry: entry as CollectionEntry<C>, ...rendered };
}
