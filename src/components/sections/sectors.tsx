import {
  HeartPulse,
  Landmark,
  Wrench,
  Sun,
  ScrollText,
  BookOpen,
} from "lucide-react";
import { Section, Eyebrow, SectionHeading, Lead } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const sectors = [
  { icon: HeartPulse, title: "Healthcare", body: "Telehealth consults, diagnostics and follow-ups, brought to the doorstep." },
  { icon: Landmark, title: "Financial services & literacy", body: "Savings, credit, insurance and the financial literacy to use them well." },
  { icon: Wrench, title: "Household services", body: "Everyday services coordinated and fulfilled through one trusted person." },
  { icon: Sun, title: "Renewable energy", body: "Clean-energy products like solar — sold, installed and supported locally." },
  { icon: ScrollText, title: "Government schemes & entitlements", body: "Eligibility checks and applications, so benefits actually reach people." },
  { icon: BookOpen, title: "Awareness & education", body: "Camps and sessions that build knowledge, confidence and uptake." },
];

export function Sectors() {
  return (
    <Section id="sectors" tone="paper">
      <Reveal>
        <Eyebrow>Sectors we cover</Eyebrow>
        <SectionHeading>Many services, one trusted person to deliver them.</SectionHeading>
        <Lead>
          A single Champion can carry all of these — which is exactly why the
          model works where a dozen single-purpose agents can&apos;t.
        </Lead>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="group flex flex-col rounded-2xl bg-paper p-6 ring-1 ring-line transition-colors hover:ring-ground/30"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-ground-soft text-ground transition-colors group-hover:bg-ground group-hover:text-paper">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
