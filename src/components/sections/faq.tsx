import { Section, Kicker, Display, Em } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who can become a Champion?",
    a: "Any local person who is known and trusted in their community — and is ready to learn. Most of our Champions are women. What matters is your relationships and your willingness, not your background.",
  },
  {
    q: "Do I need a degree or experience?",
    a: "No. There is no degree or prior experience requirement. We train you on the services, the tools and the way of working — you start with what you complete, and grow from there.",
  },
  {
    q: "How and when do I get paid?",
    a: "You earn per task and commission as a gig worker, per program as a knowledge provider, and margin plus recurring revenue as an entrepreneur. [PLACEHOLDER: exact payout method and timing — e.g. weekly bank transfer. TODO: confirm payout policy.]",
  },
  {
    q: "Is there a joining fee?",
    a: "[PLACEHOLDER: state the intended joining-fee policy clearly here. TODO: confirm whether onboarding is free or has a fee, and document it before launch.]",
  },
  {
    q: "What support and training do I get?",
    a: "You get the platform's tools, structured training, payment support, and ongoing help — so you're never carrying a service to your community without backing.",
  },
  {
    q: "Which areas are you live in?",
    a: "[PLACEHOLDER: list the regions/states where e2E Reach is currently operating. TODO: replace with real, current coverage.]",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="paper">
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>Questions</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="md" className="mt-7">
              Things Champions <Em>ask us.</Em>
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-ink-soft">
              Don&apos;t see your question? Reach out — we&apos;d rather you ask
              than wonder.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.05}>
            <Accordion multiple={false} className="border-t border-ink/15">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-b border-ink/10"
                >
                  <AccordionTrigger className="gap-6 py-6 font-display text-xl font-medium text-ink hover:no-underline data-[panel-open]:text-marigold-ink sm:text-2xl">
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
