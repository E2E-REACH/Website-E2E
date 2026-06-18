# e2E Reach — landing page

Marketing landing page for **e2E Reach**, a human-powered platform that brings
essential services to underserved and rural communities through trusted local
people called **Well-being Champions (WBCs)**.

> **e2E** = _e-commerce **to** Ecosystem_ — the lowercase `e` is e-commerce, the
> `2` reads as "to", and the uppercase `E` is Ecosystem. We start as a commerce
> rail into the last mile and grow into a full ecosystem of services.

The page is conversion-focused and leads with the **Champion** story (primary
audience: prospective Well-being Champions), with dedicated sections lower down
for **sector partners** and **impact funders**.

This is the official marketing website for e2E — a standalone public landing
page presenting the brand, its offerings, and current market presence. It is
independent of the e2E platform and core services.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) with a custom token system |
| UI primitives | [shadcn/ui](https://ui.shadcn.com) (Base UI under the hood) — Button, Accordion, Card, Sheet |
| Animation | [`motion`](https://motion.dev) (Framer Motion) — scroll reveals only, reduced-motion aware |
| Icons | [`lucide-react`](https://lucide.dev) |
| Fonts | `next/font` self-hosting Bricolage Grotesque, Hanken Grotesk, Space Mono |

No database, auth, or CMS. It is a static, fast, accessible marketing site.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build (type-check + lint + static export)
npm run start        # serve the production build
npm run lint         # eslint
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # root layout, next/font setup, metadata
│   ├── page.tsx          # composes all sections in order
│   └── globals.css       # design tokens, Tailwind theme, keyframes
├── components/
│   ├── sections/         # one component per page section
│   │   ├── site-nav.tsx
│   │   ├── hero.tsx
│   │   ├── the-gap.tsx
│   │   ├── how-it-works.tsx
│   │   ├── champions.tsx
│   │   ├── earnings.tsx
│   │   ├── sectors.tsx
│   │   ├── impact.tsx
│   │   ├── flywheel.tsx
│   │   ├── partners.tsx
│   │   ├── faq.tsx
│   │   ├── final-cta.tsx
│   │   └── site-footer.tsx
│   ├── trust-network.tsx # signature animated SVG constellation
│   └── ui/               # shared + shadcn primitives
│       ├── section.tsx   # Section / Eyebrow / SectionHeading / Lead
│       ├── cta-button.tsx
│       ├── wordmark.tsx  # the e2E typographic wordmark
│       ├── reveal.tsx    # reduced-motion-aware scroll reveal
│       ├── button.tsx · accordion.tsx · card.tsx · sheet.tsx  (shadcn)
└── lib/
    ├── site.ts           # nav links + CTA config (single source of truth)
    └── utils.ts          # cn() helper
```

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the design system, conventions,
and rendering/animation strategy.

---

## Design system (quick reference)

Tokens live as CSS variables in [`src/app/globals.css`](./src/app/globals.css)
and are exposed to Tailwind via `@theme` (e.g. `bg-ground`, `text-marigold`).

| Token | Hex | Role |
| --- | --- | --- |
| `--ground` | `#16463A` | primary deep teal — anchors the page |
| `--ground-deep` | `#0E2F27` | gradient depth |
| `--marigold` | `#E8A33D` | accent — CTAs, highlights, live nodes |
| `--marigold-ink` | `#8F580A` | darkened marigold for text on light (AA) |
| `--clay` | `#B95B3C` | secondary accent (sparing) |
| `--paper` | `#FBF8F1` | warm off-white surface |
| `--paper-dim` | `#F1E9D9` | alternate surface |
| `--ink` | `#241F1A` | text |

Type: **Bricolage Grotesque** (display) · **Hanken Grotesk** (body) ·
**Space Mono** (figures, eyebrows, data labels).

---

## ⚠️ Before launch — replace placeholders

This is a real social-impact project; **the page contains no invented facts**.
Every statistic, testimonial, coverage area, and unconfirmed policy is a clearly
marked `[PLACEHOLDER]` with a `{/* TODO */}` comment. Income figures are labelled
illustrative potential, not guarantees.

See [`CONTENT_TODO.md`](./CONTENT_TODO.md) for the full checklist of items to
fill in before going live.

---

## Deployment

Any static/Node host works. The easiest is
[Vercel](https://vercel.com/new) (zero-config for Next.js):
push this repo and import it. `npm run build` must pass first.
