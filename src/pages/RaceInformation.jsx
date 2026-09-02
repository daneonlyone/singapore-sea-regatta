import { useEffect, useMemo, useState } from "react";
import { Calendar, Clock, FileText, Download, ChevronDown, CheckCircle2, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FeeCalculator from "@/components/FeeCalculator";

const TIMELINE = [
  { month: "February", items: [{ d: "15", t: "Expression of Interest Opens" }, { d: "17", t: "Expression of Interest Closes" }] },
  { month: "May", items: [{ d: "1", t: "Expression of Interest Closes" }] },
  { month: "June", items: [{ d: "1", t: "Race Registration Opens" }] },
  { month: "July", items: [{ d: "4", t: "Race Registration Closes" }, { d: "13", t: "Crew List Submission Opens" }, { d: "26", t: "Jersey Size (Round 1) Collection Closes" }] },
  { month: "August", items: [{ d: "9", t: "Jersey Size (Round 2) Collection Closes" }, { d: "9", t: "Crew List Submission Closes" }, { d: "11", t: "Payment Opens" }, { d: "18", t: "Payment Closes" }, { d: "29", t: "Team Managers' Briefing" }] },
  { month: "September", items: [{ d: "5", t: "Race Day 1" }, { d: "6", t: "Race Day 2" }, { d: "6", t: "After Party" }] }
];

const TABS = ["Day 1", "Day 2", "Morning", "Afternoon", "DB12", "DB22", "DB6", "Open", "Women", "Mixed", "Invitational"];

export default function RaceInformation() {
  return (
    <div className="haw-theme">
      <RaceInformationInner />
    </div>
  );
}

function RaceInformationInner() {
  const [cats, setCats] = useState([]);
  const [fees, setFees] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [active, setActive] = useState("Day 1");
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    base44.entities.RaceCategory.list("order", 200).then(setCats).catch(() => {});
    base44.entities.RaceFee.list("order", 50).then(setFees).catch(() => {});
    base44.entities.SpecialRace.list("order", 50).then(setSpecials).catch(() => {});
    base44.entities.Faq.list("order", 50).then(setFaqs).catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    return cats.filter((c) => {
      if (["Day 1", "Day 2"].includes(active)) return c.day === active;
      if (["Morning", "Afternoon"].includes(active)) return c.session === active;
      if (["DB12", "DB22", "DB6"].includes(active)) return c.boat === active;
      if (["Open", "Women", "Mixed"].includes(active)) return (c.division || "").includes(active);
      if (active === "Invitational") return (c.division || "").includes("Invitational");
      return true;
    });
  }, [cats, active]);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach((c) => {
      const key = `${c.day} · ${c.session}`;
      (g[key] = g[key] || []).push(c);
    });
    return Object.entries(g);
  }, [filtered]);

  return (
    <div>
      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-12 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(37,3,45,0.7) 0%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <img src="https://media.base44.com/images/public/6a635ab4e57d550e514135e7/53dba10dd_White.png" alt="Head Above Water" className="h-24 sm:h-28 lg:h-32 object-contain" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9b93ff", fontFamily: "Poppins, sans-serif" }}>2026 · Head Above Water</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black">Race Information</h1>
            <p className="mt-4 max-w-2xl text-foreground/70" style={{ fontFamily: "Poppins, sans-serif" }}>Everything athletes and team managers need — timelines, categories, fees, special races, registration and FAQs.</p>
          </Reveal>
        </div>
      </section>

      {/* STICKY SUB-NAV */}
      {/* <StickyNav /> */}

      {/* EVENT TIMELINE */}
      <Section id="timeline" eyebrow="Event Timeline" title="Key dates at a glance">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIMELINE.map((m, i) => (
            <Reveal key={m.month} delay={i * 100}>
              <div className="glass rounded-2xl p-5 h-full">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <h3 className="font-heading font-bold text-white">{m.month}</h3>
                </div>
                <ul className="space-y-3">
                  {m.items.map((it) => (
                    <li key={it.t} className="flex gap-3">
                      <span className="font-mono text-sm font-bold text-primary min-w-[42px]">{it.d}</span>
                      <span className="text-sm text-foreground/75 leading-snug">{it.t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* RACE CATEGORIES */}
      <Section id="categories" eyebrow="Race Categories" title="Find your race" description="Filter by day, session, boat class or division. Categories are subject to change depending on final registration numbers.">
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", active === t ? "text-white shadow-lg" : "glass text-foreground/70 hover:text-white")}
                style={active === t ? { background: "linear-gradient(90deg, #25032d, #9b93ff)", boxShadow: "0 4px 18px rgba(155,147,255,0.35)" } : {}}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="space-y-8">
          {grouped.length === 0 && (
            <div className="glass rounded-2xl p-8 text-center text-muted-foreground">No categories match this filter.</div>
          )}
          {grouped.map(([group, items], gi) => (
            <Reveal key={group} delay={gi * 80}>
              <div className="glass rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <h3 className="font-heading font-bold text-white">{group}</h3>
                  <span className="ml-auto text-xs font-mono text-muted-foreground">{items.length} races</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                  {items.map((c) => (
                    <div key={c.id} className="bg-card p-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono" style={{ background: "rgba(155,147,255,0.15)", color: "#9b93ff" }}>{c.boat}</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{c.division}</span>
                      </div>
                      <div className="text-sm text-white font-medium leading-snug">{c.name}</div>
                      {c.start_time && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                          <Clock className="w-3 h-3" /> {c.start_time}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* RACE FEES */}
      <Section id="fees" eyebrow="Race Fees" title="Transparent pricing" description="All prices are inclusive of GST where applicable.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fees.map((f, i) => {
            return (
              <Reveal key={f.id} delay={i * 80}>
                <div className="glass card-lift rounded-2xl p-6 h-full flex flex-col">
                  <h3 className="font-bold text-white">{f.label}</h3>
                  <div className="mt-3 text-3xl font-heading font-black text-gradient-ignite">{f.amount}</div>
                  <div className="text-sm text-muted-foreground">{f.unit}</div>
                  {f.note && <p className="mt-3 text-xs text-foreground/70 leading-relaxed">{f.note}</p>}
                  {f.includes_gst && (
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Inclusive of GST
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8">
          <FeeCalculator />
        </div>
      </Section>

      {/* SPECIAL RACES */}
      <Section id="special-races" eyebrow="Special Races" title="The signature showdowns" description="Tap a card to read the full story.">
        <div className="grid md:grid-cols-2 gap-4">
          {specials.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <div className="glass rounded-2xl overflow-hidden h-full">
                <button
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                  onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: s.accent_color }}>{s.subtitle}</span>
                    <h3 className="mt-1 text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 text-muted-foreground shrink-0 transition-transform", expanded === s.id && "rotate-180")} />
                </button>
                <div className={cn("grid transition-all duration-300", expanded === s.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-foreground/70 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* QUICK LINKS */}
      <Section id="quick-links" eyebrow="Quick Links" title="Everything in one place">
        <div>
          <Reveal delay={120}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <RegButton label="SDBA Registration Portal" href="https://registration.sdba.org.sg" />
              <RegButton label="Registration Guide" href="https://docs.google.com/document/d/1C7Ilsd4aR3ZKhTwIpNeLOpcWrc42HOugzB4tMfd9D_s/edit?usp=sharing" />
              <RegButton label="Race Bulletin" href="https://docs.google.com/document/d/11GQwQWs28MSUgxf9_x90xVLc2JTETUOxrDdrYnEY1-0/edit?usp=sharing" />
              <RegButton label="Team Managers' Briefing" href="#" />
              <RegButton label="2026 Race Schedule" href="https://media.base44.com/files/public/6a635ab4e57d550e514135e7/687d5855d_2026SSRRaceScheduleTentative-Asof30Jul.pdf" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="Frequently Asked Questions" title="Answers, fast">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.id} delay={i * 60}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                  onClick={() => setExpanded(`faq-${f.id}` === expanded ? null : `faq-${f.id}`)}
                >
                  <span className="font-semibold text-white text-sm">{f.question}</span>
                  <ChevronDown className={cn("w-5 h-5 text-muted-foreground shrink-0 transition-transform", expanded === `faq-${f.id}` && "rotate-180")} />
                </button>
                <div className={cn("grid transition-all duration-300", expanded === `faq-${f.id}` ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-foreground/70 leading-relaxed">{f.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-20 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function StickyNav() {
  const items = [
    { id: "timeline", label: "Timeline" },
    { id: "categories", label: "Categories" },
    { id: "fees", label: "Fees" },
    { id: "special-races", label: "Special Races" },
    { id: "registration", label: "Registration" },
    { id: "documents", label: "Documents" },
    { id: "faq", label: "FAQ" }
  ];
  return (
    <div className="sticky top-20 z-30 -mx-6 px-6 py-3 mb-4 backdrop-blur-md bg-background/60 border-y border-white/5">
      <div className="mx-auto max-w-7xl flex flex-wrap gap-1.5">
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`} className="px-3 py-1.5 rounded-lg text-xs font-medium text-foreground/70 hover:text-white hover:bg-white/5 transition-colors">
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function RegButton({ label, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="glass rounded-xl p-5 flex items-center justify-between gap-3 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
      <span className="text-sm font-semibold text-white">{label}</span>
      <Download className="w-4 h-4 text-primary" />
    </a>
  );
}

function DocCard({ icon: Icon, title, body }) {
  return (
    <div className="glass rounded-2xl p-6 h-full">
      <Icon className="w-6 h-6 text-primary mb-3" />
      <h4 className="font-bold text-white">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}