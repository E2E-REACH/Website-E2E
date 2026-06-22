import { Mail } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { Wordmark } from "@/components/ui/wordmark";
import { siteConfig } from "@/lib/site";

export function SiteFooter({
  t,
  nav,
}: {
  t: Dict["footer"];
  nav: Dict["nav"];
}) {
  const year = new Date().getFullYear();
  const items = [
    { href: "#how", label: nav.how },
    { href: "#platform", label: nav.platform },
    { href: "#verticals", label: nav.verticals },
    { href: "#network", label: nav.network },
    { href: "#architecture", label: nav.architecture },
    { href: "#impact", label: nav.impact },
    { href: "#partners", label: nav.partners },
  ];
  return (
    <footer className="bg-ground-deep px-5 py-16 text-paper sm:px-8">
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark tone="light" className="text-2xl" />
          <p className="mt-5 text-sm leading-relaxed text-paper/65">{t.explainer}</p>
          <p className="mt-5 font-display text-lg italic text-paper/80">
            {t.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-paper/45">
            {t.explore}
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded text-sm text-paper/75 transition-colors hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-paper/45">
            {t.getInTouch}
          </h2>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-4 inline-flex items-center gap-2 rounded text-sm text-paper/80 transition-colors hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
          >
            <Mail className="size-4" aria-hidden />
            {siteConfig.contactEmail}
          </a>
          <p className="mt-4 max-w-[22ch] text-sm text-paper/55">
            {t.getInTouchNote}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-[88rem] flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} e2E Reach. {t.rights}</p>
        <p className="font-mono">{t.bottomTag}</p>
      </div>
    </footer>
  );
}
