/** Prefix internal paths with Astro `base` (needed for GitHub Pages project sites). */
export function withBase(path: string): string {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}
