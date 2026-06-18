import { ArrowRight, RotateCw } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const loop = [
  "More Champions join",
  "Deeper trust & coverage",
  "More services taken up",
  "More sector partners distribute through e2E",
  "More earning per Champion",
];

export function Flywheel() {
  return (
    <Section id="flywheel" tone="paper">
      <Reveal>
        <Eyebrow>The flywheel</Eyebrow>
        <SectionHeading>Trust compounds — and that&apos;s the moat.</SectionHeading>
      </Reveal>

      <Reveal delay={0.1}>
        <ol className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3">
          {loop.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="flex items-center gap-2.5 rounded-full bg-ground-soft px-4 py-2.5 text-sm font-medium text-ground">
                <span className="font-mono text-xs text-ground/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </span>
              {i < loop.length - 1 ? (
                <ArrowRight className="size-4 shrink-0 text-ground/40" aria-hidden />
              ) : (
                <span className="flex items-center gap-1.5 rounded-full border border-marigold/40 bg-marigold-soft/50 px-3 py-2 font-mono text-xs uppercase tracking-wide text-marigold-ink">
                  <RotateCw className="size-3.5" aria-hidden />
                  loops back
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
          One trusted person carrying many services beats a dozen single-purpose
          agents. Every new Champion deepens trust, every service builds on the
          last — and that trust is the one thing competitors can&apos;t simply buy.
        </p>
      </Reveal>
    </Section>
  );
}
