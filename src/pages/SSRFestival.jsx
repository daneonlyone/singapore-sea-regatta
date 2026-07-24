import { useEffect, useMemo, useState } from "react";
import { Calendar, Clock, MapPin, Send, Sparkles, Music, Heart, Utensils, ShoppingBag, Baby } from "lucide-react";
import { cn } from "@/lib/utils";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/71427b403_generated_6f71a2fa.png";
const CAT_ICONS = { Performance: Music, Workshop: Sparkles, "Panel Talk": Heart, Wellness: Heart, Race: Calendar, Kids: Baby };

const FILTERS = ["All", "Performance", "Workshop", "Panel Talk", "Wellness", "Race"];

export default function SSRFestival() {
  const [programme, setProgramme] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => { base44.entities.FestivalProgramme.list("order", 200).then(setProgramme).catch(() => {}); }, []);
  useEffect(() => {
    const days = [...new Set(programme.map((p) => p.day))];
    if (days.length && !activeDay) setActiveDay(days[0]);
  }, [programme, activeDay]);

  const days = useMemo(() => [...new Set(programme.map((p) => p.day))], [programme]);
  const shown = useMemo(() => programme.filter((p) => p.day === activeDay && (filter === "All" || p.category === filter)), [programme, activeDay, filter]);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} className="w-full h-full object-cover" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pb-16 pt-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Head Above Water 2026</span>
            <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black">SSR Festival</h1>
            <p className="mt-4 max-w-xl text-foreground/70">Where energy meets purpose. Set against the Marina Bay skyline, the Festival Zone is the heart of SSR — food, retail, wellness, performances and so much more.</p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT FESTIVAL */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="About SSR Festival" title="The heartbeat of the regatta" description="Whether you're here to cheer, chill, or connect, there's something for everyone in this celebration of community, health and fun." />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Utensils, t: "Food & Beverage" },
              { icon: ShoppingBag, t: "Retail" },
              { icon: Heart, t: "Wellness & Recovery" },
              { icon: Music, t: "Performances" },
              { icon: Baby, t: "Kids & Community" },
              { icon: Sparkles, t: "Workshops" },
              { icon: Heart, t: "Educational Booths" },
              { icon: Calendar, t: "Panel Talks" }
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 50}>
                <div className="glass rounded-2xl p-5 text-center h-full">
                  <c.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xs font-medium text-foreground/80">{c.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FESTIVAL MAP */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Festival Map" title="Find your way around" />
          <Reveal>
            <div className="mt-8 glass rounded-3xl p-8 sm:p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold text-white">Festival map coming soon</h3>
                <p className="mt-2 text-sm text-muted-foreground">Expected release: August 2026</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMME */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Programme & Schedule" title="Two days of energy" />
          {days.length > 0 ? (
            <>
              <Reveal>
                <div className="mt-8 flex flex-wrap gap-2 items-center">
                  {days.map((d) => (
                    <button key={d} onClick={() => setActiveDay(d)} className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", activeDay === d ? "gradient-blaze text-white" : "glass text-foreground/70 hover:text-white")}>
                      {d}
                    </button>
                  ))}
                  <span className="mx-2 w-px h-6 bg-white/10" />
                  {FILTERS.map((f) => (
                    <button key={f} onClick={() => setFilter(f)} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-all", filter === f ? "bg-white/15 text-white" : "text-muted-foreground hover:text-white")}>
                      {f}
                    </button>
                  ))}
                </div>
              </Reveal>
              <div className="mt-8 relative pl-6 sm:pl-8">
                <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-ember to-transparent" />
                <div className="space-y-4">
                  {shown.map((p, i) => {
                    const Icon = CAT_ICONS[p.category] || Calendar;
                    return (
                      <Reveal key={p.id} delay={i * 60}>
                        <div className="relative">
                          <span className="absolute -left-[18px] sm:-left-[22px] top-5 w-3 h-3 rounded-full gradient-blaze ring-4 ring-background" />
                          <div className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors">
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="font-mono text-sm font-bold text-primary">{p.start_time}{p.end_time ? `–${p.end_time}` : ""}</span>
                              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-foreground/70">{p.category}</span>
                              {p.location && <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</span>}
                            </div>
                            <h4 className="mt-2 font-bold text-white flex items-center gap-2"><Icon className="w-4 h-4 text-primary" />{p.title}</h4>
                            {p.description && <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.description}</p>}
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <Reveal><ComingSoon label="Festival programme" date="August 2026" /></Reveal>
          )}
        </div>
      </section>

      {/* PARTNERS & BOOTHS */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Partners & Education Booths" title="Learn, discover, connect" description="Education booths from healthcare institutions, community partners and supporting organisations." />
          <Reveal>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Education Booths", "Retail Booths", "Food & Beverage"].map((t, i) => (
                <div key={t} className="glass rounded-2xl p-6">
                  <h4 className="font-bold text-white">{t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">Vendor directory to be announced. Expected release: August 2026.</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TELEGRAM CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="glass-blaze rounded-3xl p-8 sm:p-12 text-center">
              <Send className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Follow our Telegram channel</h3>
              <p className="mt-2 text-foreground/70 max-w-md mx-auto">For the latest deals and happenings at the IHH×SSR Festival.</p>
              <a href="https://t.me/SGSeaRegatta" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 gradient-blaze text-white font-semibold px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all">
                Join Telegram Channel <Send className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ComingSoon({ label, date }) {
  return (
    <div className="glass rounded-2xl p-10 text-center">
      <Sparkles className="w-10 h-10 text-primary mx-auto mb-4 animate-pulse" />
      <h3 className="text-xl font-bold text-white">{label}</h3>
      <p className="mt-2 text-sm text-muted-foreground">Coming soon · Expected release: {date}</p>
    </div>
  );
}