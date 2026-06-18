import { Network, ShieldCheck, MapPinned } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/lib/site";

const points = [
  { icon: Network, title: "One layer, many services", body: "Distribute and fulfil through a single trusted network instead of building your own field force." },
  { icon: MapPinned, title: "Genuine last-mile reach", body: "Get to rural and underserved households you currently can't serve economically." },
  { icon: ShieldCheck, title: "Trust, built in", body: "Your offer arrives through someone the community already relies on — so uptake follows." },
];

export function Partners() {
  return (
    <Section id="partners" tone="ground">
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker>For partners</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7 text-paper">
              A ready-built last-mile <Em className="text-marigold">distribution layer.</Em>
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <Lead className="mt-6 text-paper/75">
              If you&apos;re a bank, insurer, health, energy or government partner,
              e2E Reach is the human layer you can&apos;t build alone — already in
              the community, already trusted, ready to carry your services.
            </Lead>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9">
              <CtaButton href={siteConfig.ctaSecondary.href}>
                {siteConfig.ctaSecondary.label}
              </CtaButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <Stagger as="ul" className="border-t border-paper/15">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem
                  as="li"
                  key={p.title}
                  className="flex gap-5 border-b border-paper/10 py-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-marigold/15 text-marigold">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-paper">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/70">
                      {p.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
