import { useEffect, useState } from "react";
import { HeartHandshake, Users, Handshake, Coins } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import PlaceholderPanel from "@/components/PlaceholderPanel";

const ICONS = {
  "Funds Raised": Coins,
  "Partners Engaged": Handshake,
  "Beneficiaries Reached": Users,
  "Caregivers Supported": HeartHandshake
};

// "Where your registration fees went" — closes the Paddle With A Purpose loop.
export default function ImpactSection({ year = "2026" }) {
  const [metrics, setMetrics] = useState(null);
  const [text, setText] = useState({
    eyebrow: "2026 Impact Report",
    title: "Where your paddling went",
    description: "Every registration, every booth visit and every cheer fed straight back into dementia awareness and caregiver support across Singapore."
  });

  useEffect(() => {
    base44.entities.Statistic.filter({ year: `${year}-impact` }, "order", 20).then(setMetrics).catch(() => setMetrics([]));
    base44.entities.SiteText.filter({ key: `impact_${year}` }).then((r) => r[0] && setText(r[0])).catch(() => {});
  }, [year]);

  return (
    <section id="impact" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading align="center" eyebrow={text.eyebrow} title={text.title} description={text.description} />

        <div className="mt-12">
          {metrics === null ? null : metrics.length === 0 ? (
            <PlaceholderPanel
              icon={HeartHandshake}
              title="Impact figures coming soon"
              body="Our final 2026 impact numbers are being verified with our healthcare and community partners. Check back shortly."
            />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m, i) => {
                const Icon = ICONS[m.label] || HeartHandshake;
                return (
                  <Reveal key={m.id} delay={i * 100}>
                    <div className="glass card-lift rounded-2xl p-6 text-center h-full">
                      <Icon className="w-6 h-6 text-primary mx-auto mb-3" aria-hidden="true" />
                      <div className="text-3xl sm:text-4xl font-heading font-black text-white">
                        <AnimatedCounter value={m.value} suffix={m.suffix} />
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}