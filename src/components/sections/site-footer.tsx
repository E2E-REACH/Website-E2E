import { Globe, AtSign, Mail } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ground-deep px-5 py-14 text-paper sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark tone="light" className="text-2xl" />
          <p className="mt-4 text-sm leading-relaxed text-paper/65">
            <span className="font-mono">e</span>-commerce{" "}
            <span className="font-mono text-marigold">to</span> Ecosystem — a
            human-powered platform bringing essential services to underserved and
            rural communities through trusted local Well-being Champions.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-paper/45">
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
          <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-paper/45">
            Get in touch
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-paper/75">
            <li>
              {/* TODO: replace with real contact email */}
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded transition-colors hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
              >
                <Mail className="size-4" aria-hidden />
                [PLACEHOLDER: contact email]
              </a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            {/* TODO: replace # with real social links */}
            {/* TODO: replace with real social profile (e.g. LinkedIn) */}
            <a
              href="#"
              aria-label="e2E Reach — social profile (placeholder)"
              className="flex size-9 items-center justify-center rounded-full bg-paper/10 text-paper/80 transition-colors hover:bg-paper/20 hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
            >
              <Globe className="size-4" aria-hidden />
            </a>
            {/* TODO: replace with real social profile (e.g. Instagram) */}
            <a
              href="#"
              aria-label="e2E Reach — social profile (placeholder)"
              className="flex size-9 items-center justify-center rounded-full bg-paper/10 text-paper/80 transition-colors hover:bg-paper/20 hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
            >
              <AtSign className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} e2E Reach. All rights reserved.</p>
        <p className="font-mono">Built for the last mile.</p>
      </div>
    </footer>
  );
}
