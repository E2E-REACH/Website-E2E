import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { CtaButton } from "@/components/ui/cta-button";
import { TrustNetwork } from "@/components/trust-network";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-x-clip bg-ground text-paper"
    >
      {/* Depth: a warm radial lift behind the network + a deep base */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 18%, var(--ground-light) 0%, var(--ground) 42%, var(--ground-deep) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-node-grid opacity-[0.5]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-32 lg:pb-24">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-3 py-1 font-mono text-xs tracking-wide text-marigold uppercase">
              e-commerce
              <ArrowRight className="size-3.5" aria-hidden />
              Ecosystem
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Your community already trusts you.{" "}
              <span className="text-marigold">Turn that trust into a livelihood.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80 text-pretty">
              e2E Reach makes you a Well-being Champion — bringing healthcare,
              finance, clean energy, and government schemes to your neighbours&apos;
              doorstep, and paying you a real income to do it.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href={siteConfig.ctaPrimary.href}>
                {siteConfig.ctaPrimary.label}
                <ArrowRight aria-hidden />
              </CtaButton>
              <CtaButton href={siteConfig.ctaSecondary.href} variant="ghost-light">
                {siteConfig.ctaSecondary.label}
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md border-l-2 border-marigold/50 pl-4 text-sm leading-relaxed text-paper/65">
              <span className="font-semibold text-paper/85">e2E</span> — the small{" "}
              <span className="font-mono">e</span> is e-commerce, the{" "}
              <span className="font-mono text-marigold">2</span> reads as “to”, and the
              big <span className="font-mono">E</span> is Ecosystem. We start as a
              commerce rail into the last mile and grow into a full ecosystem of
              services.
            </p>
          </Reveal>
        </div>

        {/* Signature visual */}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-paper/[0.03] blur-2xl"
          />
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[36rem] lg:aspect-[5/4]">
            <TrustNetwork />
          </div>

          {/* Legend — makes the encoding legible */}
          <ul className="mx-auto mt-2 flex max-w-[36rem] items-center justify-between gap-2 px-2 font-mono text-[0.68rem] uppercase tracking-wide text-paper/55">
            <li className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-paper/60" aria-hidden />
              Communities
            </li>
            <li className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-marigold" aria-hidden />
              Champions
            </li>
            <li className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-ground-soft" aria-hidden />
              Services
            </li>
          </ul>
        </div>
      </div>

      {/* Soft transition into the next (paper) section */}
      <div
        aria-hidden
        className="h-10 w-full bg-gradient-to-b from-transparent to-paper sm:h-14"
      />
    </section>
  );
}
