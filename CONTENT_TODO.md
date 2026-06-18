# Content TODO — replace before launch

This project must not present invented facts. Every item below is a clearly
marked `[PLACEHOLDER]` (with a `{/* TODO */}` comment) in the source. Replace
each with **real, verified, and — for quotes — consented** content before going
live. Income figures must remain labelled as illustrative potential, never as
guarantees.

## The gap — stat row
File: [`src/components/sections/the-gap.tsx`](./src/components/sections/the-gap.tsx)
- [ ] `[PLACEHOLDER]` — people in underserved & rural communities (+ source)
- [ ] `[PLACEHOLDER]` — without reliable access to essential services (+ source)
- [ ] `[PLACEHOLDER]` — single-purpose agents needed to cover one village (+ source)

## Earnings — figures
File: [`src/components/sections/earnings.tsx`](./src/components/sections/earnings.tsx)
- [ ] Confirm the earnings ranges (gigs / programs / entrepreneurial / blended
      ₹40,000–50,000) against real program data. Keep the "illustrative
      potential, not a guarantee" disclaimer.

## Impact — testimonial & stats band
File: [`src/components/sections/impact.tsx`](./src/components/sections/impact.tsx)
- [ ] `[PLACEHOLDER]` Champion testimonial — a real, consented quote
- [ ] `[PLACEHOLDER]` testimonial attribution — name, role, location
- [ ] `[PLACEHOLDER]` Champions onboarded
- [ ] `[PLACEHOLDER]` Share who are women
- [ ] `[PLACEHOLDER]` Households served
- [ ] `[PLACEHOLDER]` Villages reached

## FAQ — policy specifics
File: [`src/components/sections/faq.tsx`](./src/components/sections/faq.tsx)
- [ ] How and when do I get paid? — exact payout **method and timing**
- [ ] Is there a joining fee? — state the **intended policy** clearly (free / fee)
- [ ] Which areas are you live in? — real, current **coverage regions**

## Footer — contact & social
File: [`src/components/sections/site-footer.tsx`](./src/components/sections/site-footer.tsx)
- [ ] `[PLACEHOLDER: contact email]` — real contact email (`mailto:` href)
- [ ] Social link #1 (`href="#"`) — real profile URL + matching icon/label
- [ ] Social link #2 (`href="#"`) — real profile URL + matching icon/label

## Site-wide
- [ ] CTAs (`Become a Champion`, `Partner with us`) currently point to in-page
      anchors (`#become`, `#partners`). Wire them to a real form/route when the
      backend exists. Config: [`src/lib/site.ts`](./src/lib/site.ts).
- [ ] Add real social/OpenGraph metadata + share image in
      [`src/app/layout.tsx`](./src/app/layout.tsx).

---

To re-scan the codebase for anything outstanding:

```bash
grep -rn "PLACEHOLDER\|TODO" src/
```
