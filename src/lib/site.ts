export const siteConfig = {
  name: "e2E Reach",
  nameExplainer: "e-commerce to Ecosystem",
  tagline: "Ecosystem commerce for India's last mile",
  contactEmail: "hello@e2ereach.com",
  // Platform-first: lead with partnership; the Champion path is secondary.
  // "Partner with us" sends people into the WBC portal (app.e2ereach.com).
  ctaPrimary: { label: "Partner with us", href: "https://app.e2ereach.com" },
  ctaSecondary: { label: "Explore the platform", href: "#platform" },
  ctaChampion: { label: "Join as a Champion", href: "#contact" },
  nav: [
    { label: "How it works", href: "#how" },
    { label: "Platform", href: "#platform" },
    { label: "Verticals", href: "#verticals" },
    { label: "Network", href: "#network" },
    { label: "Architecture", href: "#architecture" },
    { label: "Impact", href: "#impact" },
    { label: "Partners", href: "#partners" },
  ],
} as const;
