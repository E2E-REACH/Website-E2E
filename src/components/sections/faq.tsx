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
    q: "What exactly is e2E Reach?",
    a: "An ecosystem platform — not a store or an app — that carries commerce, finance, healthcare and government schemes to the last mile through a trusted, human-led network. Many formal services run on top of one community-rooted distribution layer.",
  },
  {
    q: "How is this different from a gig or delivery platform?",
    a: "Gig platforms optimise for transactions; we build for trust and depth. A single Champion holds a long-term relationship with 200–500 households across many services — relationship capital, not one-off deliveries.",
  },
  {
    q: "How do you maintain trust, privacy and regulatory compliance?",
    a: "By design. The platform is engineered to integrate with India's digital public infrastructure, embeds RBI/SEBI/IRDA/GST rules as configurable policy, is built to be DPDP-compliant with consent management, and uses a permissioned-blockchain trust layer with audit trails and vKYC checks.",
  },
  {
    q: "How do you scale without owning inventory or employees?",
    a: "An asset-light, hub-and-spoke model: a lean central hub, regional partners who activate existing community networks, and Champions who invest time and relationships — not capital. Unit economics are proven at district level before expanding.",
  },
  {
    q: "Who becomes a Well-being Champion — and is there a joining fee?",
    a: "Trusted local people — mostly women — recruited from existing networks such as ASHA and Anganwadi workers, women's cooperatives, Heartfulness volunteers and ex-armed-forces. No degree or prior experience is required. [PLACEHOLDER: state the intended joining-fee policy. TODO: confirm before launch.]",
  },
  {
    q: "How can our organisation partner with e2E Reach?",
    a: "As a strategic partner (brands, financial, healthcare, logistics), an impact investor, or an ecosystem enabler (technology, training, government programmes). Write to information@e2ereach.com to start a conversation.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="paper">
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>FAQ</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <Display as="h2" size="md" className="mt-7">
              Questions, <Em>answered.</Em>
            </Display>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-ink-soft">
              Still curious? Write to us at{" "}
              <a
                href="mailto:information@e2ereach.com"
                className="text-marigold-ink underline underline-offset-4"
              >
                information@e2ereach.com
              </a>
              .
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
