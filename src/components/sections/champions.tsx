import { Bike, GraduationCap, TrendingUp, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow, SectionHeading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const personas = [
  {
    rung: "01",
    icon: Bike,
    title: "Gig worker",
    earns: "Per task / commission",
    body: "Delivers services on demand — facilitates a telehealth consult, completes a government-scheme application, coordinates a household service, sells and installs a solar product.",
  },
  {
    rung: "02",
    icon: GraduationCap,
    title: "Knowledge provider",
    earns: "Per program + sponsorships",
    body: "Runs awareness and education sessions — financial-literacy camps, health awareness, scheme-eligibility drives — building standing as the person who explains things.",
  },
  {
    rung: "03",
    icon: TrendingUp,
    title: "Entrepreneur",
    earns: "Margin + recurring revenue",
    body: "Builds a small business on the platform's rails — a micro-distributorship, a team of sub-agents, a recurring services book that keeps paying.",
  },
];

export function Champions() {
  return (
    <Section id="champions" tone="paper">
      <Reveal>
        <Eyebrow>Meet the Well-being Champion</Eyebrow>
        <SectionHeading>
          A trusted neighbour — most often a woman — who your community already
          turns to.
        </SectionHeading>
        <Lead>
          Champions are local people who know their community and are known by
          it. We give them the tools, training and income to carry essential
          services the last mile. Most of our Champions are women — and the
          three ways they earn aren&apos;t separate jobs, they&apos;re rungs on a
          ladder you climb over time.
        </Lead>
      </Reveal>

      <Reveal delay={0.1}>
        <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-end md:gap-5">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <li key={p.rung} className="relative">
                {/* Rising ladder: each card sits a little higher than the last on md+ */}
                <div
                  className={cn(
                    "flex h-full flex-col rounded-2xl bg-paper p-6 ring-1 ring-line",
                    i === 1 && "md:mb-7",
                    i === 2 && "md:mb-14 md:bg-ground md:text-paper md:ring-ground",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-xl",
                        i === 2
                          ? "bg-marigold text-ink md:bg-marigold"
                          : "bg-ground-soft text-ground",
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "font-mono text-xs uppercase tracking-wide",
                        i === 2 ? "text-marigold md:text-marigold" : "text-ink-soft/60",
                      )}
                    >
                      Rung {p.rung}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                  <p
                    className={cn(
                      "mt-1 inline-flex items-center gap-1.5 font-mono text-xs",
                      i === 2 ? "text-marigold md:text-marigold" : "text-marigold-ink",
                    )}
                  >
                    <ArrowUpRight className="size-3.5" aria-hidden /> {p.earns}
                  </p>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed",
                      i === 2 ? "text-ink-soft md:text-paper/80" : "text-ink-soft",
                    )}
                  >
                    {p.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 max-w-3xl text-pretty text-base text-ink-soft">
          <span className="font-semibold text-ink">A Champion can hold up to
          three personas at once</span>{" "}
          — and typically grows through them over time. That progression, from a
          first paid task to running a small business, is the empowerment story.
        </p>
      </Reveal>
    </Section>
  );
}
