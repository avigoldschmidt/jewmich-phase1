# AGENTS.md — Phase 1 jewmich facelift shell

This repository is the **source of truth** for the public Astro preview until it moves to Chabad-owned GitHub and real domains (JM-9).

**Ship path:** `main` deploys live to GitHub Pages on every push. Prefer PRs into `main`; do not keep long-lived parallel “preview” branches once redesign is merged.

## Allowed edits (Phase 1)

- Content in `src/content/**` (MD/MDX frontmatter + body)
- Copy tweaks inside existing pages under `src/pages/**` when paired with content
- Approved fixed components only (see below)
- Action entries in `src/data/actions.ts` (URLs and labels for forms / embeds) — staff should leave alone until forms migrate
- Redirect map entries in `public/_redirects` and `netlify.toml` when migrating old URLs

## Fixed component set — do not add without review

`SiteHeader` · `SiteFooter` · `AudienceSwitcher` · `Hero` · `Prose` · `CtaLink` · `EmbedFrame` · `DonateMethods` · `PageMeta` · `TaskList` · `Notice` · `EventList` · `ActionPanel`

## Hard rules

1. **No new form components** — registration is CTA gateway via `actions.ts` (`kind: "link"`) or vendor embed (`kind: "embed"` / `EmbedFrame`) only. Reserve `kind: "form"` for a later phase.
2. **No Givebutter**, no in-Astro Gravity Forms / Ninja Forms clones, no phone-lookup RSVP UI.
3. **Do not invent** prayer / High Holiday times. Prefer “contact us for current times” until staff confirm.
4. **Chai Club ≠ membership** — keep soft distinguishing copy until policy is confirmed; do not claim “no membership charge.”
5. **No U-M logos / Block M.** Student wording (“at Michigan”, “University of Michigan students”) is fine.
6. **Fonts:** Fraunces (display) + Source Serif 4 (body) + Source Sans 3 (UI), self-hosted via Fontsource only (no Inter / Roboto / Arial / system UI stacks as brand type).
7. **No purple gradient theme.** Stick to navy / paper / brass / maize tokens in `src/styles/global.css`.
8. **No production secrets** in the repo. Embeds use public vendor URLs only.
9. Prefer **existing vendors** already on jewmich.com (Zeffy, ChabadMS, PayPal) over new ones.
10. One task per branch; preview before merge; protect `main` once Chabad owns the repo.
11. **Never 301** live WordPress form processors (`/form-process-*`) or public form URLs that still accept POSTs. Link to them from `actions.ts` instead.

## Domains

| Host | `/` serves |
|---|---|
| JewMich.com (+ www) | `/home/students` |
| ChabadAnnArbor.com (+ www) | `/home/community` |

See README for Netlify vs Cloudflare dual-domain cutover notes (future). Preview today: https://avigoldschmidt.github.io/jewmich-phase1/

## Content collections

`home` · `students` · `community` · `youth` · `shared` · `events`

Required frontmatter: `title`, `description`, `audience`. Optional: `hero`, `notice`, `tasks`, `actions` (action ids), `legacyPaths`, `heroImage`, `registration`, `draft`.

Events: `title`, `audience` (`students` | `community` | `both`), `when`, `href`, `expires` (ISO date — dropped at build and soft-hidden client-side after expiry).
