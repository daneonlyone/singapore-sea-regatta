import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PartnerCard from "@/components/PartnerCard";

const TIER_ORDER = [
  "Title Sponsor",
  "Event Organiser",
  "Official Partners",
  "Corporate Sponsors",
  "Presenting Partner – Premier Women's Race",
  "Fun Race Sponsors",
  "Community Partners",
  "Supporting Organisations",
  "Other Sponsors"
];

export default function PartnersSection({ sponsors }) {
  const tiers = TIER_ORDER
    .map((tier) => ({ tier, items: sponsors.filter((s) => s.tier === tier) }))
    .filter((t) => t.items.length);

  const title = tiers.find((t) => t.tier === "Title Sponsor");
  const rest = tiers.filter((t) => t.tier !== "Title Sponsor");

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Our Partners"
          title={<>Powered by a <span className="text-gradient-ignite">community</span></>}
          description="From title sponsor to community supporters — the organisations propelling Singapore Sea Regatta forward." />

        {title && (
          <Reveal className="mt-14">
            <div className="mx-auto max-w-xl text-center">
              <TierLabel>Title Sponsor</TierLabel>
              <div className="mt-5 grid gap-4">
                {title.items.map((s) => (
                  <PartnerCard key={s.id} sponsor={s} featured />
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-16 space-y-14">
          {rest.map((t, i) => (
            <Reveal key={t.tier} delay={i * 80}>
              <TierLabel>{t.tier}</TierLabel>
              <div className="mt-5 flex flex-wrap justify-center gap-3 sm:gap-4">
                {t.items.map((s) => (
                  <div key={s.id} className="w-[calc(50%-0.5rem)] sm:w-56">
                    <PartnerCard sponsor={s} />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TierLabel({ children }) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/60" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">{children}</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  );
}