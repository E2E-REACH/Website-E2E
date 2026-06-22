import type { Dict } from "@/lib/i18n";
import { Section, Kicker, Display, Em } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq({ t }: { t: Dict["faq"] }) {
  return (
    <Section id="faq" tone="paper">
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>{t.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="md" className="mt-7">
              {t.h} <Em>{t.hEm}</Em>
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-ink-soft">
              {t.sideNote}{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-marigold-ink underline underline-offset-4"
              >
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.05}>
            <Accordion multiple={false} className="border-t border-ink/15">
              {t.items.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-b border-ink/10"
                >
                  <AccordionTrigger className="gap-6 py-6 font-display text-xl font-medium text-ink hover:no-underline sm:text-2xl">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-ink-soft">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
