import { Building2, Boxes, HeartHandshake, Home } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const actors = [
  {
    num: "01",
    icon: Building2,
    title: "Sector partners",
    body: "Formal services — banks, insurers, telehealth, solar, government — that want to reach the last mile.",
  },
  {
    num: "02",
    icon: Boxes,
    title: "e2E platform",
    body: "The rails: tools, training, payments and quality, turning many services into one simple offer.",
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
    <Section id="how-it-works" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="02">The model</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              One trusted person, <Em>carrying many services.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              Value moves left to right — from formal sectors, through our
              platform, to a Champion, and out to the community.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger className="mt-16 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
        {actors.map((a) => {
          const Icon = a.icon;
          return (
            <StaggerItem
              key={a.num}
              className={cn(
                "relative flex flex-col gap-5 border-b border-ink/10 px-0 py-8 sm:px-7 sm:[&:nth-child(odd)]:pl-0 lg:border-b-0 lg:border-r lg:border-ink/10 lg:px-7 lg:first:pl-0 lg:last:border-r-0",
                a.highlight && "lg:bg-ground/[0.03]",
              )}
            >
              {/* top accent for the Champion */}
              {a.highlight && (
                <span className="absolute left-0 top-[-1px] h-[2px] w-full bg-marigold lg:left-7 lg:w-[calc(100%-3.5rem)]" aria-hidden />
              )}
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-full",
                    a.highlight ? "bg-marigold text-ink" : "bg-ground-soft text-ground",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="font-mono text-sm tabular-nums text-ink-soft/50">
                  {a.num}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink">
                  {a.title}
                </h3>
                {a.highlight && (
                  <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-marigold-ink">
                    the heart of it
                  </span>
                )}
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Principle — as a large editorial statement */}
      <Reveal delay={0.1}>
        <figure className="mt-16 border-t border-ink/15 pt-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-marigold-ink">
            The principle
          </p>
          <blockquote className="mt-5 max-w-4xl font-display text-2xl font-medium leading-[1.2] text-ink text-balance sm:text-3xl lg:text-4xl">
            Income flows back to Champions — who keep the{" "}
            <Em className="text-marigold-ink">maximum possible share</Em> of the
            value the platform generates.
          </blockquote>
        </figure>
      </Reveal>
    </Section>
  );
}
