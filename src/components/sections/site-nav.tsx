"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Wordmark } from "@/components/ui/wordmark";
import { CtaButton } from "@/components/ui/cta-button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-ground/92 supports-backdrop-filter:bg-ground/80 backdrop-blur-md border-b border-paper/10"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
          aria-label="e2E Reach — home"
        >
          <Wordmark tone="light" className="text-2xl" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper/70 transition-colors hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CtaButton
            href={siteConfig.ctaPrimary.href}
            size="md"
            className="hidden sm:inline-flex"
          >
            {siteConfig.ctaPrimary.label}
          </CtaButton>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-paper hover:bg-paper/10 hover:text-paper lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[82%] max-w-sm border-paper/10 bg-ground text-paper"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex items-center px-5 pt-5">
                <Wordmark tone="light" className="text-2xl" />
              </div>
              <ul className="mt-4 flex flex-col px-3">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <SheetClose
                      render={
                        <a
                          href={item.href}
                          className="block rounded-lg px-3 py-3 text-lg font-medium text-paper/85 transition-colors hover:bg-paper/10 hover:text-paper outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
                        >
                          {item.label}
                        </a>
                      }
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 p-5">
                <CtaButton href={siteConfig.ctaPrimary.href} className="w-full">
                  {siteConfig.ctaPrimary.label}
                </CtaButton>
                <CtaButton
                  href={siteConfig.ctaSecondary.href}
                  variant="ghost-light"
                  className="w-full"
                >
                  {siteConfig.ctaSecondary.label}
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
