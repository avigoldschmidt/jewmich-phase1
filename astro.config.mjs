import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

/** GitHub Pages project site: https://avigoldschmidt.github.io/jewmich-phase1/ */
const githubPages = process.env.GITHUB_PAGES === 'true';

/** Optional override for PR previews, e.g. `/jewmich-phase1/pr/12` (no trailing slash). */
const baseFromEnv = process.env.BASE_URL?.replace(/\/$/, '');
const base = baseFromEnv || (githubPages ? '/jewmich-phase1' : '/');

// https://astro.build/config
export default defineConfig({
  site: githubPages || baseFromEnv
    ? 'https://avigoldschmidt.github.io'
    : 'https://www.jewmich.com',
  base,
  integrations: [mdx()],
});
