import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const githubPages = process.env.GITHUB_PAGES === 'true';
/** Preview under /jewmich-phase1/redesign/ when REDESIGN_PREVIEW=true */
const redesignPreview = process.env.REDESIGN_PREVIEW === 'true';

const base = githubPages
  ? redesignPreview
    ? '/jewmich-phase1/redesign'
    : '/jewmich-phase1'
  : '/';

// https://astro.build/config
export default defineConfig({
  site: githubPages
    ? 'https://avigoldschmidt.github.io'
    : 'https://www.jewmich.com',
  base,
  integrations: [mdx()],
});
