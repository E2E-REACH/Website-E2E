import {
  ScrollText,
  Landmark,
  HeartPulse,
  Scale,
  Sprout,
  ShoppingBag,
} from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const meta = [
  { icon: ScrollText, span: "sm:col-span-2 lg:col-span-2", feature: true },
  { icon: Landmark, span: "lg:col-span-1", feature: false },
  { icon: HeartPulse, span: "lg:col-span-1", feature: false },
  { icon: Scale, span: "lg:col-span-1", feature: false },
  { icon: Sprout, span: "lg:col-span-1", feature: false },
  { icon: ShoppingBag, span: "sm:col-span-2 lg:col-span-2", feature: true },
];

export function Sectors({ t }: { t: Dict["verticals"] }) {
  return (
    <Section id="verticals" tone="paper-dim">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="03">{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              {t.h} <Em>{t.hEm}</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">{t.lead}</Lead>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="ul"
        className="mt-16 grid auto-rows-[minmax(11rem,1fr)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        amount={0.08}
      >
        {t.items.map((s, i) => {
          const m = meta[i];
          const Icon = m.icon;
          return (
            <StaggerItem
              key={s.title}
              as="li"
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-paper p-6 ring-1 ring-ink/10 transition-all duration-300 hover:ring-ink/25",
                m.span,
                m.feature && "bg-ground text-paper ring-ground",
              )}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, var(--marigold) 0%, transparent 70%)",
                }}
              />
              <span
                className={cn(
                  "relative flex items-center justify-center rounded-full transition-colors",
                  m.feature
                    ? "size-14 bg-marigold text-ink"
                    : "size-12 bg-ground text-paper group-hover:bg-marigold group-hover:text-ink",
                )}
              >
                <Icon className={m.feature ? "size-6" : "size-5"} aria-hidden />
              </span>
              <div className="relative mt-6">
                <h3
                  className={cn(
                    "font-display font-medium",
                    m.feature ? "text-2xl text-paper sm:text-3xl" : "text-xl text-ink",
                  )}
                >
                  {s.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 leading-relaxed",
                    m.feature ? "max-w-md text-base text-paper/75" : "text-sm text-ink-soft",
                  )}
                >
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
