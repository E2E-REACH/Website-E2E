import {
  ScrollText,
  Landmark,
  HeartPulse,
  Scale,
  ShoppingBag,
  Sprout,
} from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const verticals = [
  {
    icon: ScrollText,
    title: "Government schemes & entitlements",
    body: "200+ welfare programmes, subsidies and entitlements — finally reaching the families they were written for, with assisted enrolment and documentation.",
    span: "sm:col-span-2 lg:col-span-2",
    feature: true,
  },
  {
    icon: Landmark,
    title: "Financial services",
    body: "Mutual funds, insurance, credit and savings — with the literacy to use them.",
    span: "lg:col-span-1",
  },
  {
    icon: HeartPulse,
    title: "Health services",
    body: "Telemedicine, health insurance and preventive care at the doorstep.",
    span: "lg:col-span-1",
  },
  {
    icon: Scale,
    title: "Legal services",
    body: "Documentation, advisory and dispute resolution made accessible.",
    span: "lg:col-span-1",
  },
  {
    icon: Sprout,
    title: "Supply-side aggregation",
    body: "Rural producers reach wider markets; bulk procurement for the network.",
    span: "lg:col-span-1",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace access via ONDC",
    body: "Community group-buying on open networks — volume pricing and consolidated logistics, inspired by the Pinduoduo model.",
    span: "sm:col-span-2 lg:col-span-2",
    feature: true,
  },
];

export function Sectors() {
  return (
    <Section id="verticals" tone="paper-dim">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="03">The verticals</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              Six ecosystems, <Em>one trusted doorstep.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              Each vertical runs on its own playbook — but arrives through the
              same trusted person. One relationship, the whole formal economy.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="ul"
        className="mt-16 grid auto-rows-[minmax(11rem,1fr)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        amount={0.08}
      >
        {verticals.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem
              key={s.title}
              as="li"
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-paper p-6 ring-1 ring-ink/10 transition-all duration-300 hover:ring-ink/25",
                s.span,
                s.feature && "bg-ground text-paper ring-ground",
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
                  s.feature
                    ? "size-14 bg-marigold text-ink"
                    : "size-12 bg-ground text-paper group-hover:bg-marigold group-hover:text-ink",
                )}
              >
                <Icon className={s.feature ? "size-6" : "size-5"} aria-hidden />
              </span>
              <div className="relative mt-6">
                <h3
                  className={cn(
                    "font-display font-medium",
                    s.feature ? "text-2xl text-paper sm:text-3xl" : "text-xl text-ink",
                  )}
                >
                  {s.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 leading-relaxed",
                    s.feature ? "max-w-md text-base text-paper/75" : "text-sm text-ink-soft",
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
