import {
  HeartPulse,
  Landmark,
  Wrench,
  Sun,
  ScrollText,
  BookOpen,
} from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const sectors = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    body: "Telehealth consults, diagnostics and follow-ups, brought to the doorstep — care that used to mean a day's travel.",
    span: "sm:col-span-2 lg:col-span-2",
    feature: true,
  },
  {
    icon: Landmark,
    title: "Financial services & literacy",
    body: "Savings, credit, insurance — and the literacy to use them well.",
    span: "lg:col-span-1",
  },
  {
    icon: Wrench,
    title: "Household services",
    body: "Everyday services, coordinated and fulfilled through one trusted person.",
    span: "lg:col-span-1",
  },
  {
    icon: Sun,
    title: "Renewable energy",
    body: "Clean-energy products like solar — sold, installed and supported locally.",
    span: "lg:col-span-1",
  },
  {
    icon: BookOpen,
    title: "Awareness & education",
    body: "Camps and sessions that build knowledge, confidence and uptake.",
    span: "lg:col-span-1",
  },
  {
    icon: ScrollText,
    title: "Government schemes & entitlements",
    body: "Eligibility checks and applications, so the benefits people are owed actually reach them.",
    span: "sm:col-span-2 lg:col-span-2",
    feature: true,
  },
];

export function Sectors() {
  return (
    <Section id="sectors" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="05">What we carry</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              Many services. <Em>One trusted person</Em> to deliver them.
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              A single Champion can carry all of these — which is exactly why the
              model works where a dozen single-purpose agents can&apos;t.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="ul"
        className="mt-16 grid auto-rows-[minmax(11rem,1fr)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        amount={0.08}
      >
        {sectors.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem
              key={s.title}
              as="li"
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-paper p-6 ring-1 ring-ink/10 transition-all duration-300 hover:ring-ink/25",
                s.span,
                s.feature && "bg-ground-soft/40",
              )}
            >
              {/* hover spotlight */}
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
                  "relative flex items-center justify-center rounded-full bg-ground text-paper transition-colors group-hover:bg-marigold group-hover:text-ink",
                  s.feature ? "size-14" : "size-12",
                )}
              >
                <Icon className={s.feature ? "size-6" : "size-5"} aria-hidden />
              </span>
              <div className="relative mt-6">
                <h3
                  className={cn(
                    "font-display font-medium text-ink",
                    s.feature ? "text-2xl sm:text-3xl" : "text-xl",
                  )}
                >
                  {s.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 leading-relaxed text-ink-soft",
                    s.feature ? "max-w-md text-base" : "text-sm",
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
