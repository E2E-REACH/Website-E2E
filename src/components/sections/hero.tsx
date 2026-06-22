import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { CtaButton } from "@/components/ui/cta-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MovingGlow } from "@/components/ui/moving-glow";
import { Photo } from "@/components/ui/photo";
import { RoughText } from "@/components/ui/rough-text";
import { Reveal, RevealMask } from "@/components/ui/reveal";
import { Em } from "@/components/ui/section";

const signals = [
  { v: "900M", l: "underserved Indians" },
  { v: "800M+", l: "mobile users, yet unreached" },
  { v: "200+", l: "welfare schemes to deliver" },
  { v: "Last-mile", l: "built on India's digital rails" },
];

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

      <div className="mx-auto grid w-full max-w-[88rem] flex-1 grid-cols-1 items-center gap-12 px-5 pt-28 pb-10 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:pt-32">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-paper/70">
              <span className="text-marigold">Ecosystem commerce</span>
              <span className="h-px w-10 bg-paper/30" aria-hidden />
              India&apos;s last mile
            </p>
          </Reveal>

          <h1 className="font-display mt-7 max-w-[15ch] text-[clamp(2.7rem,6.6vw,5.6rem)] font-medium leading-[1.0] text-balance">
            <RevealMask delay={0.05}>India&apos;s last mile,</RevealMask>
            <RevealMask delay={0.13} className="text-marigold">
              <Em>finally within reach.</Em>
            </RevealMask>
          </h1>

          <Reveal delay={0.28} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-paper/80 text-pretty">
              e2E Reach brings banking, healthcare, insurance and government
              schemes to India&apos;s villages and small towns — carried to the
              doorstep by a trusted local person the community already knows,
              mostly women. One network; the whole formal economy.
            </p>
          </Reveal>

          <Reveal delay={0.38}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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

        {/* Signature photo (desktop) */}
        <Reveal delay={0.2} className="hidden lg:block">
          <Photo
            src="/images/hero-champion.jpg"
            alt="A Well-being Champion shows a tablet to a rural family at their doorstep in the warm evening light."
            className="aspect-[4/5] w-full ring-1 ring-paper/15"
            sizes="(max-width: 1024px) 0px, 45vw"
            priority
            position="center"
          />
        </Reveal>
      </div>

      {/* Institutional credibility strip */}
      <div className="mx-auto w-full max-w-[88rem] px-5 pb-8 sm:px-8">
        <Reveal delay={0.5}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border-t border-paper/12 lg:grid-cols-4">
            {signals.map((s) => (
              <div key={s.l} className="py-5 lg:px-6 lg:first:pl-0">
                <dt className="font-display text-2xl font-medium text-paper sm:text-3xl">
                  {s.v === "900M" ? (
                    <RoughText type="circle">900M</RoughText>
                  ) : (
                    s.v
                  )}
                </dt>
                <dd className="mt-1 text-sm text-paper/60">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
