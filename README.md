# JewMich / Chabad Ann Arbor — Phase 1 site

Static **Astro** facelift shell for Chabad House of Ann Arbor.

- **JewMich.com** → student home (`/home/students`)
- **ChabadAnnArbor.com** → community home (`/home/community`)

One codebase. Forms stay as CTA gateways or vendor embeds (Zeffy / ChabadMS / PayPal). No custom form UI in Phase 1.

> **Source of truth:** this `site/` folder in the Project store until it is pushed to a Chabad-owned GitHub repository and connected to hosting (see JM-9).

## Requirements

- Node.js 22.12+ (Astro 7)
- npm 10+

## Local development

```bash
cd site
npm install
npm run build   # must succeed
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

`npm run build` / `dev` call `scripts/run-astro.mjs`. On a normal disk (after `npm install`) that is a thin Astro passthrough. If `node_modules` cannot be installed in-place (slow network filesystems), the script mirrors the project to a temp directory, runs `npm ci` + Astro there, and copies `dist/` back.

Useful paths:

| Path | Audience |
|---|---|
| `/home/students` | Student home |
| `/home/community` | Community home |
| `/donate` | Multi-method donate |
| `/students/shabbat` | CTA → legacy Shabbat form |

`/` redirects locally to `/home/students`. Host-based homepage selection is applied at the CDN/host (below).

```bash
npm run build    # output → dist/
npm run preview  # preview the production build
```

## Deploy

Build command: `npm run build`  
Publish directory: `dist`

Works on **Netlify** or **Cloudflare Pages** free tier.

### Attach both domains

1. Deploy this project once.
2. Add custom domains on the same project:
   - `jewmich.com` + `www.jewmich.com`
   - `chabadannarbor.com` + `www.chabadannarbor.com`
3. Point DNS (A/AAAA or CNAME) per the host’s instructions.
4. Confirm HTTPS for **both** apex domains at cutover (ChabadAnnArbor.com HTTPS was unchecked in Phase 1 planning).

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

## Redirect appendix

Old WordPress paths 301 to new routes (see `public/_redirects`):

| Old | New |
|---|---|
| `/studentcenter/` | `/home/students` |
| `/cong/` | `/home/community` |
| `/chs/` | `/youth` |
| `/visitingliving/`, `/visiting&living` | `/visit` |
| `/donation/` | `/donate` |
| `/highholidays` | `/events` (hub) |
| `/aboutus/` | `/about` |

**Do not 301** active form processors (`/shabbat/`, `/form-process-*`, Gravity Forms pages) into Astro landings — landings link out to them.

## Donations

`/donate` stacks:

1. **ChabadMS** iframe — `forms.chabadms.com` formid `8080`
2. **Zeffy** embed — src from live `/donatewithzeffy/` (staff: update if embed rotates)
3. **PayPal** — `paypal.com/fundraiser/charity/1619170`
4. **Payment** link — legacy `/payment/` for invoices/fees

## Agent / editor rules

See [`AGENTS.md`](./AGENTS.md). Prefer editing `src/content/**`. Do not add form components in Phase 1.

## Stack

- Astro 7 (static) + MDX
- Content collections: `home`, `students`, `community`, `youth`, `shared`
- Type: Fraunces + Source Serif 4
- Tokens: navy / paper / brass / maize (student accent only)
