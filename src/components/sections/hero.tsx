import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { CtaButton } from "@/components/ui/cta-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MovingGlow } from "@/components/ui/moving-glow";
import { Reveal, RevealMask } from "@/components/ui/reveal";
import { Em } from "@/components/ui/section";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-clip bg-ground text-paper"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(130% 100% at 82% 12%, var(--ground-light) 0%, var(--ground) 46%, var(--ground-deep) 100%)",
        }}
      />
      <AuroraBackground className="-z-[8]" />
      <div aria-hidden className="absolute inset-0 -z-[7] bg-node-grid opacity-30" />

      <div className="mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-center px-5 pt-28 pb-12 sm:px-8 lg:pt-32">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-paper/70">
            <span className="text-marigold">e-commerce</span>
            <span className="h-px w-10 bg-paper/30" aria-hidden />
            Ecosystem
          </p>
        </Reveal>

        <h1 className="font-display mt-7 max-w-[16ch] text-[clamp(2.7rem,7.4vw,6.1rem)] font-medium leading-[0.99] text-balance">
          <RevealMask delay={0.05}>Your community</RevealMask>
          <RevealMask delay={0.12}>already trusts you.</RevealMask>
          <RevealMask delay={0.2} className="text-marigold">
            <Em>Turn it into a livelihood.</Em>
          </RevealMask>
        </h1>

        <Reveal delay={0.3} className="mt-8 max-w-lg">
          <p className="text-lg leading-relaxed text-paper/80 text-pretty sm:text-xl">
            e2E Reach makes you a Well-being Champion — bringing healthcare,
            finance, clean energy, and government schemes to your neighbours&apos;
            doorstep, and paying you a real income to do it.
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

      {/* Footer rail: name story + scroll cue */}
      <div className="mx-auto w-full max-w-[88rem] px-5 pb-8 sm:px-8">
        <Reveal delay={0.5}>
          <div className="flex items-end justify-between gap-6 border-t border-paper/12 pt-5">
            <p className="max-w-md text-sm leading-relaxed text-paper/55">
              <span className="font-mono text-paper/80">e</span>-commerce{" "}
              <span className="font-mono text-marigold">2</span> (to){" "}
              <span className="font-mono text-paper/80">E</span>cosystem — a
              commerce rail into the last mile, growing into a full ecosystem of
              services.
            </p>
            <span className="hidden items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-paper/50 sm:flex">
              Scroll
              <ArrowDown className="size-3.5 animate-bounce" aria-hidden />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
