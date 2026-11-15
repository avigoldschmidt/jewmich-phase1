import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

/** GitHub Pages project site: https://avigoldschmidt.github.io/jewmich-phase1/ */
const githubPages = process.env.GITHUB_PAGES === 'true';

const base = githubPages ? '/jewmich-phase1' : '/';

// https://astro.build/config
export default defineConfig({
  site: githubPages
    ? 'https://avigoldschmidt.github.io'
    : 'https://www.jewmich.com',
  base,
  integrations: [mdx()],
});
