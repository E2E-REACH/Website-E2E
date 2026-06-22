import { Mail } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ground-deep px-5 py-16 text-paper sm:px-8">
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark tone="light" className="text-2xl" />
          <p className="mt-5 text-sm leading-relaxed text-paper/65">
            <span className="font-mono">e</span>-commerce{" "}
            <span className="font-mono text-marigold">2</span> (to){" "}
            <span className="font-mono">E</span>cosystem — building India&apos;s
            trusted last-mile ecosystem for commerce, finance, health and
            livelihoods.
          </p>
          <p className="mt-5 font-display text-lg italic text-paper/80">
            Ecosystem commerce for India&apos;s last mile.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-paper/45">
            Explore
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {siteConfig.nav.map((item) => (
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
            Get in touch
          </h2>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-4 inline-flex items-center gap-2 rounded text-sm text-paper/80 transition-colors hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
          >
            <Mail className="size-4" aria-hidden />
            {siteConfig.contactEmail}
          </a>
          <p className="mt-4 max-w-[22ch] text-sm text-paper/55">
            For partnership, investment and ecosystem enablement.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-[88rem] flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} e2E Reach. All rights reserved.</p>
        <p className="font-mono">Community connect is a market-based asset.</p>
      </div>
    </footer>
  );
}
