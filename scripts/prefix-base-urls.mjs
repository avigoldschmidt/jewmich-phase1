/**
 * Post-build: rewrite absolute same-origin href/src in dist HTML so they
 * include Astro `base` (needed for GitHub Pages /jewmich-phase1).
 *
 * Sätteri (Astro 7 default markdown) does not run rehype plugins, so MDX
 * body links like `/contact` would otherwise 404 on the project site.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const githubPages = process.env.GITHUB_PAGES === 'true';
const baseFromEnv = process.env.BASE_URL?.replace(/\/$/, '');
const base = baseFromEnv || (githubPages ? '/jewmich-phase1' : '/');
const normalized = base.replace(/\/$/, '');

if (!normalized) {
  process.exit(0);
}

const attrRe = /\b(href|src)=["'](\/[^"']*)["']/g;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

let filesChanged = 0;
let replacements = 0;

for (const file of walk(dist)) {
  const original = readFileSync(file, 'utf8');
  const next = original.replace(attrRe, (match, attr, value) => {
    if (value.startsWith('//')) return match;
    if (value === normalized || value.startsWith(`${normalized}/`)) return match;
    replacements += 1;
    return `${attr}="${normalized}${value}"`;
  });
  if (next !== original) {
    writeFileSync(file, next);
    filesChanged += 1;
  }
}

console.log(
  `[prefix-base-urls] base=${normalized} files=${filesChanged} replacements=${replacements}`,
);
