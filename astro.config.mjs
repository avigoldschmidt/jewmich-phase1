import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const githubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: githubPages
    ? 'https://avigoldschmidt.github.io'
    : 'https://www.jewmich.com',
  base: githubPages ? '/jewmich-phase1' : '/',
  integrations: [mdx()],
});
