import { Bike, GraduationCap, TrendingUp, ArrowUpRight } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { Photo } from "@/components/ui/photo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const meta = [
  { rung: "01", icon: Bike, peak: false, indent: "" },
  { rung: "02", icon: GraduationCap, peak: false, indent: "lg:pl-12" },
  { rung: "03", icon: TrendingUp, peak: true, indent: "lg:pl-24" },
];

export function Champions({ t, cta }: { t: Dict["network"]; cta: Dict["cta"] }) {
  return (
    <Section id="network" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker index="04">{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              {t.h} <Em>{t.hEm}</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">{t.lead}</Lead>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.05}>
        <Photo
          src="/images/network-champions.jpg"
          alt={t.photoAlt}
          className="mt-12 aspect-[16/9] w-full ring-1 ring-ink/10 lg:aspect-[21/9]"
          sizes="100vw"
          position="center 35%"
        />
      </Reveal>

      <Stagger as="ol" className="mt-14">
        {t.personas.map((p, i) => {
          const m = meta[i];
          const Icon = m.icon;
          return (
            <StaggerItem
              key={m.rung}
              as="li"
              className={cn(
                "group relative grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/15 py-8 sm:gap-x-10",
                m.indent,
              )}
            >
              <div className="flex flex-col items-start gap-4">
                <span className="font-display text-5xl font-medium leading-none text-ground/25 sm:text-6xl">
                  {m.rung}
                </span>
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full",
                    m.peak ? "bg-marigold text-ink" : "bg-ground text-paper",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </span>
              </div>
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-12 border-t border-ink/15 pt-8">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft/60">
            {t.recruitedLabel}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
            {t.recruitedFrom.map((r) => (
              <span
                key={r}
                className="rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink"
              >
                {r}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href={siteConfig.ctaChampion.href} variant="ghost-dark">
              {cta.champion}
              <ArrowUpRight aria-hidden />
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
