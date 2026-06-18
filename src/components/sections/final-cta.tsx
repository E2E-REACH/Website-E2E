import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealMask } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { MovingGlow } from "@/components/ui/moving-glow";
import { Em } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="become"
      className="relative isolate scroll-mt-24 overflow-clip bg-ground-deep px-5 py-28 text-paper sm:px-8 sm:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 130% at 50% 0%, var(--ground-light) 0%, var(--ground) 42%, var(--ground-deep) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-node-grid opacity-30" />

      <div className="mx-auto max-w-[80rem]">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-paper/60">
            <span className="text-marigold">e-commerce</span>
            <span className="h-px w-10 bg-paper/30" aria-hidden />
            Ecosystem
          </p>
        </Reveal>

        <h2 className="font-display mt-8 max-w-[18ch] text-[clamp(2.6rem,8vw,6.4rem)] font-medium leading-[0.98] text-balance">
          <RevealMask delay={0.05}>Your community</RevealMask>
          <RevealMask delay={0.12}>already trusts you.</RevealMask>
          <RevealMask delay={0.2} className="text-marigold">
            <Em>Turn it into a livelihood.</Em>
          </RevealMask>
        </h2>

        <Reveal delay={0.3}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/80 text-pretty">
            Become a Well-being Champion — bring essential services to your
            neighbours&apos; doorstep, earn a real income, and grow into a
            business of your own.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MovingGlow>
              <CtaButton href={siteConfig.ctaPrimary.href} className="w-full">
                {siteConfig.ctaPrimary.label}
                <ArrowUpRight aria-hidden />
              </CtaButton>
            </MovingGlow>
            <CtaButton href={siteConfig.ctaSecondary.href} variant="ghost-light">
              {siteConfig.ctaSecondary.label}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
