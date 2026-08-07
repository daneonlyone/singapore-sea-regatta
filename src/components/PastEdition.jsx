import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Trophy, Users, Heart, ArrowLeft } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Image } from "@/components/ui/image";

// Reusable retrospective layout for archived editions. Styled per-edition via the EventYear record.
export default function PastEdition({ year }) {
  const [edition, setEdition] = useState(null);
  const [sponsors, setSponsors] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    base44.entities.Statistic.filter({ year }, "order", 50).then(setStats).catch(() => {});
    base44.entities.EventYear.list("order", 50).then((all) => {
      setEdition(all.find((e) => e.year === year) || all[0]);
    }).catch(() => {});
    base44.entities.Sponsor.list("order", 100).then(setSponsors).catch(() => {});
  }, [year]);

  if (!edition) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-white/10 border-t-primary rounded-full animate-spin" /></div>;

  const accent = edition.color_primary || "#FF5C00";
  const accent2 = edition.color_secondary || "#D62828";

  return (
    <div style={{ ["--accent"]: accent, ["--accent2"]: accent2 }}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-2">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors">
            <ArrowLeft className="w-3 h-3" /> Home
            <span className="text-white/20">/</span>
            <span className="text-muted-foreground">Previous Years</span>
            <span className="text-white/20">/</span>
            <span style={{ color: accent }}>{edition.year} Archive</span>
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {edition.hero_image && <Image src={edition.hero_image} className="w-full h-full object-cover" fittingType="fill" />}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
              {edition.year} Archive
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-heading font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white">
              {edition.campaign_short}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg" style={{ color: accent }}>{edition.theme}</p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-6 flex flex-wrap gap-4">
              {edition.date_range && <HeroFact icon={Calendar} label="Date" value={edition.date_range} accent={accent} />}
              {edition.venue && <HeroFact icon={MapPin} label="Venue" value={edition.venue} accent={accent} />}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Campaign Overview" title={<>A chapter in the <span style={{ color: accent }}>SSR story</span></>} description={edition.summary} />
            </div>
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Trophy, t: "Race Highlights", d: `International dragon boat racing at ${edition.venue || "Marina Bay"}.` },
                  { icon: Heart, t: edition.cause || "Community Cause", d: edition.theme },
                  { icon: Users, t: "Community", d: "Athletes, healthcare partners and the public united." },
                  { icon: Calendar, t: "Key Moments", d: "Opening ceremony, special races and the after party." }
                ].map((c) => (
                  <div key={c.t} className="glass rounded-2xl p-5">
                    <c.icon className="w-5 h-5 mb-2" style={{ color: accent }} />
                    <h4 className="font-bold text-white text-sm">{c.t}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="Impact" title="By the numbers" />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl font-heading font-black" style={{ color: accent }}>
                    {s.value?.toLocaleString()}{s.suffix || ""}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground"></p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Photo & Video Highlights" title="Moments from the water" />
          <Reveal>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map((n) => (
                <div key={n} className="aspect-[4/3] rounded-2xl glass overflow-hidden flex items-center justify-center group hover:border-primary/30 transition-colors">
                  <Image src={edition.hero_image} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" fittingType="fill" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-white/50">Gallery coming soon</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      {sponsors.length > 0 && (
        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading align="center" eyebrow="Selected Partners" title="Who made it possible" />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {sponsors.slice(0, 8).map((s) => (
                <div key={s.id} className="glass rounded-xl px-5 py-3 text-sm font-medium text-foreground/80">{s.name}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA to current */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="glass-blaze rounded-3xl p-8 sm:p-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Current Edition</span>
              <h3 className="mt-3 text-3xl font-bold text-white">Head Above Water 2026</h3>
              <p className="mt-2 text-foreground/70 max-w-md mx-auto">The Singapore Sea Regatta continues. Join us at the next edition.</p>
              <Link to="/head-above-water-2026" className="mt-6 inline-flex items-center gap-2 gradient-blaze text-white font-semibold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all">
                Explore Head Above Water 2026 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function HeroFact({ icon: Icon, label, value, accent }) {
  return (
    <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5">
      <Icon className="w-4 h-4" style={{ color: accent }} />
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}