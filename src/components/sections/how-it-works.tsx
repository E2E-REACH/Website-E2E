import { Building2, Boxes, HeartHandshake, Home, ArrowRight, ArrowDown } from "lucide-react";
import { Section, Eyebrow, SectionHeading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const actors = [
  {
    num: "01",
    icon: Building2,
    title: "Sector partners",
    body: "Formal services — banks, insurers, telehealth, solar, government schemes — that want to reach the last mile.",
  },
  {
    num: "02",
    icon: Boxes,
    title: "e2E platform",
    body: "The rails: tools, training, payments and quality — turning many services into one simple offer.",
  },
  {
    num: "03",
    icon: HeartHandshake,
    title: "Well-being Champion",
    body: "The trusted local human — mostly women — who carries every service to the doorstep.",
    highlight: true,
  },
  {
    num: "04",
    icon: Home,
    title: "Communities",
    body: "Rural and underserved households, served in their own language, where they live.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="paper-dim">
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
        <SectionHeading>One trusted person, carrying many services.</SectionHeading>
        <Lead>
          Value moves left to right — from formal sectors, through our platform,
          to a Champion, and out to the community. The Champion is the part
          nobody else can build.
        </Lead>
      </Reveal>

      {/* Flow: horizontal on lg, vertical stack on mobile */}
      <Reveal delay={0.1}>
        <ol className="mt-14 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {actors.map((a, i) => {
            const Icon = a.icon;
            const last = i === actors.length - 1;
            return (
              <li
                key={a.num}
                className="flex flex-col items-stretch lg:flex-1 lg:flex-row lg:items-center"
              >
                <div
                  className={cn(
                    "relative flex flex-1 flex-col rounded-2xl p-6 ring-1 transition-colors",
                    a.highlight
                      ? "bg-ground text-paper ring-ground shadow-lg shadow-ground/15 lg:scale-[1.04]"
                      : "bg-paper text-ink ring-line",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-xl",
                        a.highlight ? "bg-marigold text-ink" : "bg-ground-soft text-ground",
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "font-mono text-xs tabular-nums",
                        a.highlight ? "text-marigold" : "text-ink-soft/60",
                      )}
                    >
                      {a.num}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{a.title}</h3>
                  <p
                    className={cn(
                      "mt-1.5 text-sm leading-relaxed",
                      a.highlight ? "text-paper/80" : "text-ink-soft",
                    )}
                  >
                    {a.body}
                  </p>
                  {a.highlight && (
                    <span className="mt-3 inline-flex w-fit rounded-full bg-paper/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-marigold">
                      The heart of it
                    </span>
                  )}
                </div>

                {/* Connector */}
                {!last && (
                  <span
                    aria-hidden
                    className="flex shrink-0 items-center justify-center self-center py-1 text-ground/40 lg:px-1 lg:py-0"
                  >
                    <ArrowDown className="size-5 lg:hidden" />
                    <ArrowRight className="hidden size-5 lg:block" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Reveal>

      {/* Principle bar */}
      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-col items-start gap-2 rounded-2xl border border-marigold/40 bg-marigold-soft/50 px-6 py-5 sm:flex-row sm:items-center sm:gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-marigold-ink">
            The principle
          </span>
          <p className="text-base font-semibold text-ink sm:text-lg">
            Income flows back to Champions — who keep the maximum possible share
            of the value the platform generates.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
