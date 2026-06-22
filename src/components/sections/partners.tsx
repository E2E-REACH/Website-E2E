import { Handshake, TrendingUp, Lightbulb, ArrowUpRight } from "lucide-react";
import { Section, Kicker, Display, Lead, Em } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/lib/site";

const audiences = [
  {
    icon: Handshake,
    title: "Strategic partners",
    body: "Brands, financial institutions, healthcare networks and logistics providers — gain trusted deep-point-reach without building the last mile yourself.",
  },
  {
    icon: TrendingUp,
    title: "Impact investors",
    body: "Patient capital aligned with community-led growth and measurable outcomes — an asset-light model that doesn't depend on cash burn for unit economics.",
  },
  {
    icon: Lightbulb,
    title: "Ecosystem enablers",
    body: "Technology partners, training organisations and government programmes that can accelerate onboarding and capability-building across verticals.",
  },
];

export function Partners() {
  return (
    <Section id="partners" tone="paper-dim">
      <div className="grid grid-cols-1 items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker index="10">Partner with us</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="lg" className="mt-7">
              We&apos;re not just raising capital. We&apos;re building an{" "}
              <Em>ecosystem.</Em>
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <Lead className="text-base sm:text-lg">
              We offer partners a market-based asset — a living, trusted network
              that compounds in value as it grows.
            </Lead>
          </Reveal>
        </div>
      </div>

      <Stagger className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {audiences.map((a) => {
          const Icon = a.icon;
          return (
            <StaggerItem
              key={a.title}
              className="flex flex-col rounded-2xl bg-paper p-7 ring-1 ring-ink/10"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-ground text-paper">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                {a.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                {a.body}
              </p>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-medium text-ink sm:text-2xl">
            Also building in your region? Become a regional or category partner.
          </p>
          <CtaButton href={`mailto:${siteConfig.contactEmail}`} variant="ghost-dark">
            {siteConfig.contactEmail}
            <ArrowUpRight aria-hidden />
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
