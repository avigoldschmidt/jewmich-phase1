#!/usr/bin/env node
/**
 * Runs Astro against this project. If node_modules are missing or incomplete
 * (e.g. agent-store FUSE cannot host a full install), mirrors the project to a
 * local temp directory, installs there, runs the command, and copies dist back.
 *
 * On a normal disk (laptop, CI, Netlify, Cloudflare), a local `npm install`
 * satisfies the check and this script is a thin passthrough.
 */
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const command = args[0] ?? 'build';
const astroArgs = args.slice(1);

function hasAstro() {
  return existsSync(join(root, 'node_modules', 'astro', 'package.json'));
}

function run(cmd, cmdArgs, cwd) {
  const result = spawnSync(cmd, cmdArgs, {
    cwd,
    stdio: 'inherit',
    env: process.env,
    shell: process.platform === 'win32',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function copyProject(dest) {
  const skip = new Set(['node_modules', 'dist', '.astro', '.git']);
  for (const name of readdirSync(root)) {
    if (skip.has(name)) continue;
    cpSync(join(root, name), join(dest, name), { recursive: true });
  }
}

if (hasAstro()) {
  run('npx', ['astro', command, ...astroArgs], root);
  process.exit(0);
}

console.warn(
  '[jewmich] Local node_modules incomplete — using a temp mirror for Astro.',
);

const mirror = mkdtempSync(join(tmpdir(), 'jewmich-site-'));
try {
  copyProject(mirror);
  run('npm', ['ci', '--prefer-offline'], mirror);
  run('npx', ['astro', command, ...astroArgs], mirror);
  if (command === 'build' && existsSync(join(mirror, 'dist'))) {
    rmSync(join(root, 'dist'), { recursive: true, force: true });
    mkdirSync(join(root, 'dist'), { recursive: true });
    cpSync(join(mirror, 'dist'), join(root, 'dist'), { recursive: true });
    console.warn(`[jewmich] Copied dist/ back to ${join(root, 'dist')}`);
  }
} finally {
  rmSync(mirror, { recursive: true, force: true });
}
