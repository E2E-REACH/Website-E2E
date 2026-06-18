# Architecture

This document describes how the e2E Reach landing page is put together: the
rendering model, the design-token system, component conventions, the signature
visual, and the accessibility/animation strategy.

---

## 1. Rendering model

- **Next.js App Router**, statically rendered. The whole page prerenders to
  static HTML at build time (`○ (Static)` in the build output) — there is no
  server runtime, database, or API.
- [`src/app/page.tsx`](./src/app/page.tsx) is a **server component** that simply
  composes the section components in document order. Most sections are server
  components too.
- **Client components** are used only where interactivity or browser APIs are
  required, marked with `"use client"`:
  - [`site-nav.tsx`](./src/components/sections/site-nav.tsx) — scroll state +
    mobile menu (Sheet).
  - [`reveal.tsx`](./src/components/ui/reveal.tsx) — scroll-triggered animation.
  - shadcn primitives that wrap Base UI (`accordion`, `sheet`, `button`).
- Server sections freely render the client `Reveal` wrapper and client
  primitives — the client boundary is pushed as deep as possible so the page
  ships minimal JS.

---

## 2. Design tokens & theming

Tailwind v4 is configured **CSS-first** (no `tailwind.config.js`). Everything
lives in [`src/app/globals.css`](./src/app/globals.css):

1. **Raw brand tokens** are defined as CSS custom properties on `:root`
   (`--ground`, `--marigold`, `--paper`, `--ink`, …).
2. The shadcn **semantic tokens** (`--primary`, `--background`, `--ring`, …) are
   remapped onto the brand palette, so any shadcn primitive inherits the brand
   automatically.
3. `@theme inline { … }` exposes the brand tokens as **Tailwind utilities** —
   `bg-ground`, `text-marigold`, `ring-line`, `font-display`, `font-mono`, etc.

This means components never hardcode hex values; they use semantic utilities,
and the palette can be retuned in one file.

**Fonts** are loaded once in [`layout.tsx`](./src/app/layout.tsx) via `next/font`
(self-hosted, no layout shift) and bound to CSS variables
(`--font-bricolage`, `--font-hanken`, `--font-space-mono`) that `@theme` maps to
`font-display` / `font-sans` / `font-mono`.

### Color roles

`--ground` (deep teal) dominates and anchors the page; `--paper` carries
content; `--marigold` punctuates (CTAs, the wordmark `2`, key figures, live
nodes). For text on light surfaces, `--marigold-ink` (`#8F580A`) is used instead
of raw marigold to meet WCAG AA contrast.

### Band rhythm

Sections alternate surfaces to create rhythm and to make the two dark "feature"
bands (Earnings, Partners) and the closing CTA land with weight:

```
hero(ground) → gap(paper) → how(paper-dim) → champions(paper)
 → earnings(GROUND) → sectors(paper) → impact(paper-dim) → flywheel(paper)
 → partners(GROUND-DEEP) → faq(paper) → final-cta(GROUND) → footer(GROUND-DEEP)
```

---

## 3. Shared primitives

[`src/components/ui/section.tsx`](./src/components/ui/section.tsx) provides the
layout grammar every section reuses:

- **`<Section tone>`** — sets the surface (`paper | paper-dim | ground |
  ground-deep`), padding, max-width container, and a `data-tone` attribute.
- **`data-tone`** drives tone-aware styling elsewhere via Tailwind's `in-data-*`
  variant — e.g. an eyebrow renders `text-marigold-ink` on light bands and
  `text-marigold` on dark ones, with no per-call props.
- **`<Eyebrow num?>`** — mono uppercase label with the node-dot motif; pass `num`
  only where the content is a genuine sequence.
- **`<SectionHeading>` / `<Lead>`** — consistent display heading + lead paragraph.

Other shared bits:

- **`<CtaButton variant size>`** — the brand CTA (anchor). Variants: `primary`
  (marigold), `ghost-light` (for dark surfaces), `ghost-dark` (for light).
- **`<Wordmark tone>`** — the typographic `e2E` lockup that encodes the brand
  story (small `e`, marigold `2`, large `E`).
- **`<Reveal>`** — see §5.

Nav links and CTA targets are centralized in
[`src/lib/site.ts`](./src/lib/site.ts) so the nav, mobile menu, and footer stay
in sync.

---

## 4. The signature element — trust network

[`trust-network.tsx`](./src/components/trust-network.tsx) is the one bold,
on-brief moment. It encodes the ecosystem left-to-right:

```
village households  →  Well-being Champions  →  service sectors
   (paper dots)         (glowing marigold)        (sage nodes)
```

Implementation notes:

- **Lightweight SVG**, not canvas/3D. All node coordinates and links are
  **deterministic constants** (no randomness), so server and client render
  identically — no hydration mismatch.
- Motion is **pure CSS** (`@keyframes node-pulse`, `ring-expand`,
  `signal-travel`) defined in `globals.css`. The Champion nodes pulse and emit
  expanding rings; marigold "signal" gradients travel along a few links to
  suggest value/trust flowing.
- A mono **legend** (Communities · Champions · Services) makes the encoding
  legible rather than abstract.
- The node-dot motif is echoed elsewhere via the `.bg-node-grid` utility (hero
  and final CTA backgrounds).

---

## 5. Animation & motion strategy

- Scroll reveals use [`Reveal`](./src/components/ui/reveal.tsx) — a thin
  `motion` wrapper that fades/translates content in once on scroll
  (`whileInView`, `once: true`). Used sparingly (section intros and card
  groups), never on every element, to avoid the over-animated "AI" look.
- **Reduced motion is respected two ways**:
  1. A global `@media (prefers-reduced-motion: reduce)` rule in `globals.css`
     neutralizes CSS animations/transitions (covers the trust-network and any
     CSS motion).
  2. `Reveal` reads `useReducedMotion()` and renders content in its **final
     state with no animation** — because Framer animates via JS and would
     otherwise bypass the CSS rule.

---

## 6. Accessibility

- Semantic landmarks: `<header>`, `<nav aria-label>`, `<main>`, `<section>` with
  ids, `<footer>`; headings nest correctly (`h1` in hero, `h2` per section).
- **Visible keyboard focus** everywhere via `focus-visible:ring-*` utilities on
  links, buttons, and the accordion.
- Icon-only controls (hamburger, social links) have `aria-label`s; decorative
  icons/SVG layers are `aria-hidden`.
- The trust-network SVG has `role="img"` + a descriptive `aria-label`.
- Color contrast: `--marigold-ink` is used for marigold text on light surfaces.
- Mobile menu uses the Base UI Dialog (Sheet) — focus trap, `Esc`, and overlay
  dismissal handled by the primitive.

---

## 7. Conventions

- **One component per section** under `components/sections/`, named for the
  section. The section's `id` matches its nav anchor (`#how-it-works`, etc.);
  `scroll-mt-20` offsets the sticky nav.
- Content (copy, figures, lists) lives as typed arrays at the top of each
  section file for easy editing.
- Sentence case, active voice, second person ("you", "your community").
- **Numbering only encodes real sequences** — the four-actor flow (`01–04`),
  the persona ladder rungs, and the flywheel loop. Nothing else is numbered.
- **No invented facts.** Statistics, testimonials, coverage, and unconfirmed
  policies are `[PLACEHOLDER]` + `{/* TODO */}`; income figures are labelled
  illustrative. See [`CONTENT_TODO.md`](./CONTENT_TODO.md).
