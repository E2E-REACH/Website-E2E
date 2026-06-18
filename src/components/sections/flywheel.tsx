import { ArrowRight, RotateCw } from "lucide-react";
import { Section, Kicker, Display, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const loop = [
  "More Champions join",
  "Deeper trust & coverage",
  "More services taken up",
  "More partners distribute through e2E",
  "More earning per Champion",
];

export function Flywheel() {
  return (
    <Section id="flywheel" tone="paper">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker index="07">Why it compounds</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              Trust compounds — and that&apos;s the <Em>moat.</Em>
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
              One trusted person carrying many services beats a dozen
              single-purpose agents. Every Champion deepens trust, every service
              builds on the last — and that trust is the one thing competitors
              can&apos;t simply buy.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-2">
          <Stagger as="ol" className="flex flex-col gap-3" amount={0.1}>
            {loop.map((step, i) => (
              <StaggerItem
                as="li"
                key={step}
                className="flex items-center gap-4 border-b border-ink/10 pb-3"
              >
                <span className="font-mono text-sm tabular-nums text-marigold-ink">
                  0{i + 1}
                </span>
                <span className="flex-1 font-display text-xl font-medium text-ink sm:text-2xl">
                  {step}
                </span>
                {i < loop.length - 1 ? (
                  <ArrowRight className="size-4 shrink-0 text-ink-soft/40" aria-hidden />
                ) : (
                  <RotateCw className="size-4 shrink-0 text-marigold-ink" aria-hidden />
                )}
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-5 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-marigold-ink">
              <RotateCw className="size-3.5" aria-hidden /> and it loops back
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
