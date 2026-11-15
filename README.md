# JewMich / Chabad Ann Arbor — Phase 1 site

Static **Astro** site for Chabad House of Ann Arbor.

| Domain (at cutover) | Homepage |
|---|---|
| **JewMich.com** | Students — `/home/students` |
| **ChabadAnnArbor.com** | Community — `/home/community` |

One codebase. Forms stay as CTA links or vendor embeds (Zeffy / ChabadMS / PayPal). No custom form UI in Phase 1.

**Live preview (push to `main`):**  
https://avigoldschmidt.github.io/jewmich-phase1/

Also served via custom domain when Pages is configured: https://agoldschmidt.com/jewmich-phase1/

---

## Staff quick start

```bash
git clone https://github.com/avigoldschmidt/jewmich-phase1.git
cd jewmich-phase1
npm install
npm run dev          # http://localhost:4321
```

### Edit content

Most page copy lives in Markdown/MDX under:

```
src/content/
  home/          # student + community homes
  students/      # Shabbat, High Holidays, etc.
  community/
  youth/
  shared/        # about, visit, donate copy, …
  events/        # dated event cards
```

1. Edit the `.md` / `.mdx` file (title, description, body).
2. Commit on a branch, open a PR — or push to `main` when you want it live.
3. Within a few minutes, GitHub Actions rebuilds and updates the live URL above.

### What not to touch (yet)

| Path | Why |
|---|---|
| `src/data/actions.ts` | Form / embed URLs for RSVP & donate. Leave until forms migrate. |
| `src/components/**` | Fixed Phase 1 shell — ask before adding UI. |
| `public/_redirects`, `netlify.toml` | Legacy URL map; dual-domain cutover. |
| Prayer / High Holiday **times** | Do not invent — say “contact us” until staff confirm. |

Agent/editor rules: [`AGENTS.md`](./AGENTS.md).

---

## Local development

- **Node.js** 22.12+ (Astro 7)
- **npm** 10+

```bash
npm install
npm run build      # must succeed → dist/
npm run preview    # preview the production build
npm run dev        # hot reload
```

Useful paths locally:

| Path | Audience |
|---|---|
| `/home/students` | Student home |
| `/home/community` | Community home |
| `/donate` | Multi-method donate |
| `/students/shabbat` | CTA → legacy Shabbat form |

`/` redirects locally to `/home/students`. Host-based homepage selection is applied at the CDN when dual domains go live (below).

---

## Branches & deploy

| Branch | Role |
|---|---|
| **`main`** | Shippable site. Every push runs **Deploy GitHub Pages** and publishes the live preview. |
| `redesign` | Historical iteration branch; merge into `main` via PR #1 (or successor), then use `main` only. |

**How deploy works**

1. Push (or merge) to `main`.
2. Workflow `.github/workflows/deploy-pages.yml` runs `npm ci` → `npm run build` with `GITHUB_PAGES=true` (Astro `base` = `/jewmich-phase1`).
3. Artifact is published with `actions/deploy-pages`.
4. Site updates at https://avigoldschmidt.github.io/jewmich-phase1/

Repo → Settings → Pages should use **Source: GitHub Actions** (not the old `gh-pages` branch).

Manual re-run: Actions → “Deploy GitHub Pages” → Run workflow.

---

## Dual-domain cutover (future — keep for go-live)

Works on **Netlify** or **Cloudflare Pages** free tier.

Build command: `npm run build` · Publish directory: `dist`

### Attach both domains

1. Deploy this project once.
2. Add custom domains on the same project:
   - `jewmich.com` + `www.jewmich.com`
   - `chabadannarbor.com` + `www.chabadannarbor.com`
3. Point DNS (A/AAAA or CNAME) per the host’s instructions.
4. Confirm HTTPS for **both** apex domains at cutover.

### Netlify dual-home rewrite

`netlify.toml` rewrites `/` by `Host`:

- JewMich hosts → `/home/students` (200)
- ChabadAnnArbor hosts → `/home/community` (200)

`public/_redirects` also includes absolute-URL host rewrites and the legacy path 301 map.

### Cloudflare Pages dual-home rewrite

- `functions/_middleware.js` rewrites `/` by `Host` (same mapping as Netlify).
- `public/_routes.json` limits Functions to `/` so static assets stay static.
- `public/_redirects` carries the legacy path 301s into `dist/`.

When creating the Pages project, set build output to `dist` and keep the repo-root `functions/` directory.

### Redirect appendix

Old WordPress paths 301 to new routes (see `public/_redirects`). **Do not 301** active form processors (`/shabbat/`, `/form-process-*`, Gravity Forms pages) — landings link out to them.

---

## Donations

`/donate` stacks ChabadMS, Zeffy, PayPal, and a legacy payment link. Prefer existing jewmich.com vendors; no Givebutter in Phase 1.

## Stack

- Astro 7 (static) + MDX + Pagefind
- Content collections: `home`, `students`, `community`, `youth`, `shared`, `events`
- Type: Fraunces + Source Serif 4 + Source Sans 3 (self-hosted)
- Tokens: navy / paper / brass / maize
