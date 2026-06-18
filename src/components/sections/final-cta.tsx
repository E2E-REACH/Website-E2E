import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="become"
      className="relative isolate scroll-mt-20 overflow-x-clip bg-ground px-5 py-24 text-paper sm:px-8 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(110% 120% at 50% 0%, var(--ground-light) 0%, var(--ground) 45%, var(--ground-deep) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-node-grid opacity-40" />

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-marigold">
            e-commerce → Ecosystem
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Your community already trusts you.{" "}
            <span className="text-marigold">Turn that trust into a livelihood.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/80 text-pretty">
            Become a Well-being Champion — bring essential services to your
            neighbours&apos; doorstep, earn a real income, and grow into a
            business of your own.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href={siteConfig.ctaPrimary.href}>
              {siteConfig.ctaPrimary.label}
              <ArrowRight aria-hidden />
            </CtaButton>
            <CtaButton href={siteConfig.ctaSecondary.href} variant="ghost-light">
              {siteConfig.ctaSecondary.label}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
