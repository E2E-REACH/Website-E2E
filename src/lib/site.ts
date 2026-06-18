export const siteConfig = {
  name: "e2E Reach",
  nameExplainer: "e-commerce to Ecosystem",
  // Both CTAs point to anchors for now — no backend yet.
  ctaPrimary: { label: "Become a Champion", href: "#become" },
  ctaSecondary: { label: "Partner with us", href: "#partners" },
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Champions", href: "#champions" },
    { label: "Earnings", href: "#earnings" },
    { label: "Sectors", href: "#sectors" },
    { label: "Impact", href: "#impact" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
