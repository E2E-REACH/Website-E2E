import {
  Fingerprint,
  Network,
  ShieldCheck,
  Blocks,
  Languages,
  Cpu,
} from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const rails = [
  {
    icon: Fingerprint,
    title: "India's digital public infrastructure",
    body: "Designed to integrate with Aadhaar, UPI and DigiLocker — the rails the country already runs on.",
    tags: ["Aadhaar", "UPI", "DigiLocker"],
  },
  {
    icon: Network,
    title: "Open networks",
    body: "ONDC for open commerce and the Account Aggregator framework for consented financial data flows.",
    tags: ["ONDC", "Account Aggregator"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance by design",
    body: "Regulatory rules embedded as configurable policy — with consent management built in from day one.",
    tags: ["RBI · SEBI · IRDA · GST", "DPDP"],
  },
  {
    icon: Blocks,
    title: "A trust layer",
    body: "A permissioned-blockchain design for tamper-evident records, end-to-end traceability and audit trails.",
    tags: ["Permissioned ledger", "Audit trails"],
  },
  {
    icon: Languages,
    title: "Assisted & vernacular",
    body: "No app literacy required — assisted journeys in local languages, with micro-ticket flows for rural markets.",
    tags: ["Low-literacy", "₹100–500 SIPs"],
  },
  {
    icon: Cpu,
    title: "AI + human trust",
    body: "Technology handles the back end; trusted humans own the front-end relationship. Both, not either.",
    tags: ["AI back end", "Human front end"],
  },
];

export function Architecture() {
  return (
    <Section id="architecture" tone="paper">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="06">The architecture</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              Built on India&apos;s own <Em>digital rails.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              A country-as-a-platform approach — engineered to plug into national
              infrastructure and meet its rules, so trust becomes the currency.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger
        as="ul"
        className="mt-16 grid grid-cols-1 gap-x-12 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3"
        amount={0.08}
      >
        {rails.map((r) => {
          const Icon = r.icon;
          return (
            <StaggerItem
              key={r.title}
              as="li"
              className="flex flex-col gap-4 border-b border-ink/10 py-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-ground-soft text-ground">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {r.body}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ground/[0.06] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-ground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
