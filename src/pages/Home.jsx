import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Calendar, MapPin, Clock, ChevronDown, Users, Trophy, Handshake, Ticket } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import HoverVideo from "@/components/HoverVideo";
import AnimatedCounter from "@/components/AnimatedCounter";
import Countdown from "@/components/Countdown";
import PartnersSection from "@/components/PartnersSection";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/eebc986ff_generated_b13211d1.png";
const CAMPAIGN_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/08ff53ca4_Screenshot2026-08-02at91620PM.png";
const RACE_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/765c3e88c_generated_746c96de.png";
const FESTIVAL_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/71427b403_generated_6f71a2fa.png";

const STAT_ICONS = { Athletes: Users, "Participating Teams": Trophy, "Community Partners": Handshake, "Festival Visitors": Ticket };

export default function Home() {
  const [editions, setEditions] = useState([]);
  const [stats, setStats] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [statsText, setStatsText] = useState({
    eyebrow: "SSR At A Glance",
    title: "Making waves at Marina Bay",
    description: "This September, athletes, partners and the wider community come together for two unforgettable days of racing, purpose and connection."
  });

  useEffect(() => {
    base44.entities.EventYear.list("order", 50).then(setEditions).catch(() => {});
    base44.entities.Statistic.filter({ year: "2026" }, "order", 50).then(setStats).catch(() => {});
    base44.entities.Sponsor.list("order", 100).then(setSponsors).catch(() => {});
    base44.entities.SiteText.filter({ key: "home_stats" }).then((r) => r[0] && setStatsText(r[0])).catch(() => {});
  }, []);

  const current = editions.find((e) => e.is_current) || editions[0];
  const timeline = [...editions].sort((a, b) => a.order - b.order);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} className="w-full h-full object-cover" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pt-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Marina Bay · Singapore
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-heading font-black text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight">
              SINGAPORE<br />
              <span className="text-gradient-ignite">SEA REGATTA</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-xl sm:text-2xl font-heading font-semibold text-white">Paddle With A Purpose</p>
            <p className="mt-3 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed">
              Singapore's premier international dragon boat race and community festival — uniting sport, health and purpose at Marina Bay.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/head-above-water-2026" className="group btn-haw inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl hover:-translate-y-0.5">
                Explore Head Above Water 2026
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about-ssr" className="inline-flex items-center gap-2 glass text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/20 hover:-translate-y-0.5 transition-all">
                Discover Singapore Sea Regatta
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image src="https://media.base44.com/images/public/6a635ab4e57d550e514135e7/81415c754_Singapore_Sea_Regatta_2025-1077.jpg" className="w-full h-full object-cover" fittingType="fill" />
                </div>
                


                
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="The Master Brand"
                title={<>One regatta. <span className="text-gradient-ignite">Many currents.</span></>}
                description="Singapore Sea Regatta brings together dragon boat athletes, healthcare institutions, corporate partners, community organisations and members of the public — channelling the power of sport into health advocacy and social impact." />
              
              <Reveal delay={200}>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["Dragon boat athletes", "Healthcare institutions", "Corporate partners", "Community organisations"].map((t) =>
                  <div key={t} className="glass rounded-xl px-4 py-3 text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-blaze" />
                      {t}
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2026 FEATURE (dominant) ===== */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Current Edition · 2026</span>
              <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black">Head Above Water</h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative rounded-[2rem] overflow-hidden glass-blaze">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[420px] lg:min-h-[560px]">
                  <HoverVideo src="https://media.base44.com/videos/public/6a635ab4e57d550e514135e7/3bb71379b_0809.mp4" poster={CAMPAIGN_IMG} className="absolute inset-0" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
                  <div className="absolute top-6 left-6 glass-blaze rounded-full px-4 py-1.5 text-xs font-semibold text-white">
                    IHH Healthcare × Singapore Sea Regatta
                  </div>
                </div>

                <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Dementia Awareness & Caregiver Support</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">
                    Timed with World Alzheimer's Month, the 2026 edition shines a powerful spotlight on dementia awareness and the vital role of caregivers — uniting athletes, healthcare institutions and communities on the waters of Marina Bay.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <InfoTile icon={Calendar} label="Date" value="5 – 6 September 2026" />
                    <InfoTile icon={Clock} label="Time" value="0800H – 1900H" />
                    <InfoTile icon={MapPin} label="Venue" value="Bayfront Event Space" />
                    <InfoTile icon={Users} label="Cause" value="Dementia Awareness" />
                  </div>

                  <div className="mt-8">
                    <Countdown />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/head-above-water-2026" className="group btn-haw inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-xl hover:-translate-y-0.5">
                      Explore Head Above Water 2026 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/race-information" className="inline-flex items-center gap-2 glass text-white font-semibold px-5 py-3 rounded-xl hover:border-white/20 transition-all">
                      View Race Information
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== RACE + FESTIVAL ===== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            align="center"
            eyebrow="Two Experiences, One Event"
            title="The Race. The Festival."
            description="A high-octane international dragon boat competition meets a vibrant public celebration of community, health and culture." />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <DualPanel
              img={RACE_IMG}
              tag="Race"
              title="International Dragon Boat Competition"
              desc="Athletes and teams battle across DB12, DB22 and DB6 categories — special races, elite showdowns and high-energy competition on Marina Bay."
              to="/race-information"
              cta="View Race Information" />
            
            <DualPanel
              img={FESTIVAL_IMG}
              tag="Festival"
              title="A Celebration of Community"
              desc="Food, retail, wellness, performances, educational booths and family-friendly activities set against the stunning Marina Bay skyline."
              to="/ssr-festival"
              cta="Explore SSR Festival" />
            
          </div>
        </div>
      </section>

      {/* ===== IMPACT TIMELINE ===== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            align="center"
            eyebrow="Paddle With A Purpose"
            title={<>Three years. <span className="text-gradient-ignite">One mission.</span></>}
            description="Each edition channels the energy of dragon boat racing into a health or community cause — building a legacy of impact on and off the water." />
          
          <div className="mt-10 relative">
            {/* Oversized watermark year numerals */}
            <div className="absolute inset-x-0 -top-14 h-32 hidden md:grid grid-cols-3 gap-6 overflow-hidden pointer-events-none select-none" aria-hidden="true">
              {timeline.map((e) =>
              <span
                key={e.id}
                className="font-heading font-black leading-none text-[7rem] tracking-tighter opacity-20 translate-y-2"
                style={{ color: e.color_primary }}>
                
                  {e.year}
                </span>
              )}
            </div>
            {/* Connecting rule */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10 hidden md:block" />
            <div className="relative grid md:grid-cols-3 gap-6">
              {timeline.map((e, i) => {
                const isCurrent = e.is_current;
                const color = e.color_primary;
                return (
                  <Reveal key={e.id} delay={i * 150}>
                    <Link to={editionLink(e)} className="block group h-full">
                      <div
                        className="relative rounded-2xl p-6 h-full bg-[#080808] border transition-all duration-400 group-hover:-translate-y-1"
                        style={{ borderColor: isCurrent ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.12)" }}>
                        
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <span className="font-heading text-2xl font-bold" style={{ color }}>{e.year}</span>
                          {isCurrent ?
                          <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white text-black">Current</span> :

                          <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 text-foreground/70">Archive</span>
                          }
                        </div>
                        <h3 className="text-xl font-bold text-white">{e.campaign_short}</h3>
                        <p className="mt-2 text-sm text-foreground/70">{e.theme}</p>
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">{e.summary}</p>
                      </div>
                    </Link>
                  </Reveal>);

              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SSR AT A GLANCE ===== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            align="center"
            eyebrow={statsText.eyebrow}
            title={statsText.title}
            description={statsText.description} />
          
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => {
              const Icon = STAT_ICONS[s.label] || Trophy;
              return (
                <Reveal key={s.id} delay={i * 100}>
                  <div className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-colors h-full">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="text-4xl font-heading font-black text-white">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                  </div>
                </Reveal>);

            })}
          </div>
          
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <PartnersSection sponsors={sponsors} />
    </div>);

}

function InfoTile({ icon: Icon, label, value }) {
  return (
    <div className="glass rounded-xl p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
        <Icon className="w-3 h-3" /> {label}
      </div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </div>);

}

function DualPanel({ img, tag, title, desc, to, cta }) {
  return (
    <Reveal>
      <Link to={to} className="group block relative rounded-3xl overflow-hidden h-[440px]">
        <Image src={img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fittingType="fill" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">{tag}</span>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-foreground/70 max-w-md line-clamp-2">{desc}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-primary transition-colors">
            {cta} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </Reveal>);

}

function editionLink(e) {
  if (e.year === "2024") return "/pink-wave-2024";
  if (e.year === "2025") return "/rise-above-the-waves-2025";
  return "/head-above-water-2026";
}