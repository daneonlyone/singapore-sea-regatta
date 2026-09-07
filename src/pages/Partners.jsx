import { useEffect, useState } from "react";
import { Mail, Handshake, Megaphone, HeartHandshake, Users } from "lucide-react";
import { base44 } from "@/api/base44Client";
import usePageMeta from "@/hooks/use-page-meta";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PartnersSection from "@/components/PartnersSection";
import PlaceholderPanel from "@/components/PlaceholderPanel";

const WHY = [
  { icon: Megaphone, title: "Brand at Marina Bay", body: "Two days of visibility across the race course, festival zone and our digital channels." },
  { icon: Users, title: "Reach an active community", body: "Thousands of athletes, supporters and families with a genuine interest in health and sport." },
  { icon: HeartHandshake, title: "Purpose, not just logos", body: "Every edition backs a health or community cause — your support is measurable impact." }
];

export default function Partners() {
  usePageMeta({
    title: "Partners & Sponsorship",
    description: "Meet the sponsors and community organisations powering Singapore Sea Regatta — and find out how to partner with us for the next edition."
  });

  const [sponsors, setSponsors] = useState(null);

  useEffect(() => {
    base44.entities.Sponsor.list("order", 200).then(setSponsors).catch(() => setSponsors([]));
  }, []);

  return (
    <div>
      <section id="hero" className="relative pt-32 pb-10 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Partners & Sponsorship</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black">
              Powered by a <span className="text-gradient-ignite">community</span>
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70">
              From our title sponsor to grassroots community supporters — these are the organisations that make Singapore Sea Regatta possible.
            </p>
          </Reveal>
        </div>
      </section>

      {sponsors === null ? null : sponsors.length === 0 ? (
        <div className="mx-auto max-w-7xl px-6 py-16">
          <PlaceholderPanel icon={Handshake} title="Partner line-up coming soon" body="Our next-edition partners will be announced here." />
        </div>
      ) : (
        <PartnersSection sponsors={sponsors} />
      )}

      {/* PARTNER WITH US */}
      <section id="partner-with-us" className="relative py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            align="center"
            eyebrow="Partner With Us"
            title="Join the next edition"
            description="Sponsorship, festival booths and in-kind support packages are available for the 2027 regatta. We'll tailor something to your goals."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="glass card-lift rounded-2xl p-6 h-full">
                  <w.icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 glass-blaze rounded-3xl p-8 sm:p-12 text-center">
              <Handshake className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white">Let's talk partnership</h3>
              <p className="mt-2 text-foreground/70 max-w-lg mx-auto">
                Tell us a little about your organisation and we'll send across the 2027 sponsorship deck.
              </p>
              <a
                href="mailto:admin@sgsearegatta.com?subject=SSR%202027%20Partnership%20Enquiry"
                className="mt-6 inline-flex items-center gap-2 gradient-blaze text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                admin@sgsearegatta.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}