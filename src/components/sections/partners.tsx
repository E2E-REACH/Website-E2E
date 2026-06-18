import { Network, ShieldCheck, MapPinned } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/lib/site";

const points = [
  {
    icon: Network,
    title: "One layer, many services",
    body: "Distribute and fulfil through a single trusted network instead of building your own field force.",
  },
  {
    icon: MapPinned,
    title: "Genuine last-mile reach",
    body: "Get to rural and underserved households you currently can't serve economically.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, built in",
    body: "Your offer arrives through someone the community already relies on — so uptake follows.",
  },
];

export function Partners() {
  return (
    <Section id="partners" tone="ground-deep">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow>For partners</Eyebrow>
          <SectionHeading>
            A ready-built last-mile distribution and fulfilment layer.
          </SectionHeading>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75 text-pretty">
            If you&apos;re a bank, insurer, health, energy or government partner,
            e2E Reach is the human layer you can&apos;t build alone — already in
            the community, already trusted, ready to carry your services.
          </p>
          <div className="mt-8">
            <CtaButton href={siteConfig.ctaSecondary.href}>
              {siteConfig.ctaSecondary.label}
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="flex flex-col gap-3">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-paper/10 bg-paper/[0.04] p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-marigold/15 text-marigold">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-paper">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-paper/70">
                      {p.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
