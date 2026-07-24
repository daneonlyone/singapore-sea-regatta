import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin, Users, Info, Ruler, FileText, ShoppingBag, Navigation, HelpCircle, Ticket } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const HERO_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/6c893ed46_generated_71914506.png";
const CAUSE_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/7f82390ed_generated_46f74eb8.png";
const HAW_LOGO_WHITE = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/ddb791c92_White.png";
const HAW_LOGO_LILAC = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/d26da6ee7_Lilac.png";

const QUICK_ACCESS = [
  { label: "Race Information", to: "/race-information", icon: Info },
  { label: "Race Categories", to: "/race-information#categories", icon: Ruler },
  { label: "Race Fees", to: "/race-information#fees", icon: Ticket },
  { label: "Race Bulletin", to: "/race-information#documents", icon: FileText },
  { label: "SSR Festival", to: "/ssr-festival", icon: Users },
  { label: "Athlete Privilege Programme", to: "/athlete-perks-merch#perks", icon: Users },
  { label: "Official Merchandise", to: "/athlete-perks-merch#merch", icon: ShoppingBag },
  { label: "Getting to the Venue", to: "/race-information#travel", icon: Navigation },
  { label: "Frequently Asked Questions", to: "/race-information#faq", icon: HelpCircle }
];

// HAW brand colours
const PLUM = "#25032d";
const LAVENDER = "#9b93ff";

export default function HeadAboveWater2026() {
  return (
    <div style={{ "--haw-plum": PLUM, "--haw-lavender": LAVENDER }}>
      {/* HERO — plum cinematic */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} className="w-full h-full object-cover" fittingType="fill" />
          {/* Moonlit Plum overlay matching brand */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(37,3,45,0.85) 0%, rgba(37,3,45,0.6) 50%, #050505 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(37,3,45,0.9) 0%, transparent 70%)" }} />
        </div>

        {/* Decorative star sparks matching brand aesthetic */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute top-[22%] left-[38%] text-white/30 text-2xl">✦</span>
          <span className="absolute top-[18%] right-[28%] text-white/20 text-lg">✦</span>
          <span className="absolute bottom-[30%] left-[20%] text-white/15 text-xl">✦</span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pt-28 pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white border" style={{ borderColor: "rgba(155,147,255,0.4)", background: "rgba(37,3,45,0.7)" }}>
              IHH Healthcare × Singapore Sea Regatta 2026
            </span>
          </Reveal>

          {/* Title */}
          <Reveal delay={100}>
            <h1 className="mt-6 font-heading font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white">
              Head<br />
              <span style={{ color: "#9b93ff" }}>Above Water</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-2 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(155,147,255,0.85)", fontFamily: "Poppins, sans-serif" }}>
              Feel the electric roar as crews smash through the surf — a high-octane charge to champion dementia awareness and caregiver support.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-4">
              <HeroFact icon={Calendar} label="Date" value="5 – 6 September 2026" />
              <HeroFact icon={Clock} label="Time" value="0800H – 1900H" />
              <HeroFact icon={MapPin} label="Venue" value="Bayfront Event Space, Marina Bay" />
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/race-information"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all text-white"
                style={{ background: `linear-gradient(90deg, ${LAVENDER} 0%, #7b6ff0 100%)`, boxShadow: `0 4px 24px rgba(155,147,255,0.35)` }}>
                View Race Information <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ssr-festival"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl hover:border-white/20 transition-all text-white glass">
                Explore SSR Festival
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT THE 2026 EDITION */}
      <section className="relative py-24" style={{ background: "linear-gradient(to bottom, #050505, rgba(37,3,45,0.3), #050505)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The 2026 Edition"
                title={<>More than a race. <span style={{ color: LAVENDER }}>A movement.</span></>}
                description="The IHH Healthcare × Singapore Sea Regatta unites global athletes, healthcare institutions and corporate partners in a celebration of sport, resilience and unity."
              />
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Poppins, sans-serif" }}>
                Beyond fierce competition across all age categories, the regatta features a vibrant festival footprint — wellness activations, recovery zones, and the exclusive SSR Athlete Privilege Programme.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { n: "01", t: "International Racing", d: "Dragon boat crews competing across DB12, DB22 and DB6 categories over two days." },
                    { n: "02", t: "Public Festival", d: "Food, retail, wellness, performances and family-friendly activities at Marina Bay." },
                    { n: "03", t: "Health Advocacy", d: "Dementia awareness and caregiver support at the heart of the 2026 campaign." }
                  ].map((c) => (
                    <div key={c.n} className="rounded-2xl p-5 border" style={{ background: "rgba(37,3,45,0.55)", borderColor: "rgba(155,147,255,0.2)" }}>
                      <div className="text-sm font-bold mb-2 font-mono" style={{ color: LAVENDER }}>{c.n}</div>
                      <h4 className="font-bold text-white text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{c.t}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Poppins, sans-serif" }}>{c.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CAUSE */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={CAUSE_IMG} className="w-full h-full object-cover" fittingType="fill" />
          <div className="absolute inset-0" style={{ background: "rgba(37,3,45,0.9)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(155,147,255,0.25)" }}>
                <Image src={CAUSE_IMG} className="w-full aspect-[4/3] object-cover" fittingType="fill" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: LAVENDER, fontFamily: "Poppins, sans-serif" }}>Our Cause</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">Dementia Awareness &amp; Caregiver Support</h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-5 leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Poppins, sans-serif" }}>
                  As Singapore ages, dementia challenges entire families and communities. Through SSR 2026, we spark vital conversations, build empathy, and foster a truly dementia-friendly society.
                </p>
              </Reveal>
              <div className="mt-8 space-y-4">
                {[
                  { t: "Why awareness matters", d: "Dementia affects memory, thinking and behaviour. Early awareness leads to earlier support, better care, and stronger, more inclusive communities." },
                  { t: "The role of caregivers", d: "Caregivers are the unseen heroes providing daily strength. SSR 2026 honours their dedication and connects them with resources and community." },
                  { t: "Sport meets purpose", d: "By uniting athletes, healthcare organisations and communities, we channel the power of sport into social impact — on and off the water." },
                  { t: "World Alzheimer's Month", d: "Timed with September's global awareness month, the regatta amplifies the call for a dementia-friendly society." }
                ].map((b, i) => (
                  <Reveal key={b.t} delay={i * 100}>
                    <div className="rounded-2xl p-5 border hover:border-opacity-60 transition-colors" style={{ background: "rgba(37,3,45,0.6)", borderColor: "rgba(155,147,255,0.2)" }}>
                      <h4 className="font-semibold text-white text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{b.t}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Poppins, sans-serif" }}>{b.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUEST OF HONOUR */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border" style={{ background: "rgba(37,3,45,0.7)", borderColor: "rgba(155,147,255,0.25)" }}>
              <div className="grid md:grid-cols-5 items-center">
                <div className="md:col-span-2 relative aspect-square md:aspect-auto md:h-full min-h-[280px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(37,3,45,0.9), rgba(155,147,255,0.15))" }}>
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center font-heading font-black text-3xl text-white" style={{ background: `linear-gradient(135deg, ${PLUM}, ${LAVENDER})` }}>OYK</div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 sm:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: LAVENDER, fontFamily: "Poppins, sans-serif" }}>Guest of Honour</span>
                  <h2 className="mt-3 text-3xl font-bold text-white">Mr Ong Ye Kung</h2>
                  <p className="font-medium" style={{ color: LAVENDER, fontFamily: "Poppins, sans-serif" }}>Minister for Health</p>
                  <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Poppins, sans-serif" }}>
                    We are honoured to welcome Minister Ong Ye Kung, who graces the opening ceremony and paddles in the Minister's Cup alongside healthcare workers. His participation symbolises solidarity with patients and their families, reinforcing the shared commitment to health and community.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="2026 Quick Access" title="Everything you need, one tap away" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {QUICK_ACCESS.map((q, i) => (
              <Reveal key={q.label} delay={i * 60}>
                <Link to={q.to} className="group rounded-2xl p-5 sm:p-6 h-full flex flex-col items-start hover:-translate-y-1 transition-all duration-300 border" style={{ background: "rgba(37,3,45,0.45)", borderColor: "rgba(155,147,255,0.2)" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(155,147,255,0.5)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(155,147,255,0.2)"}>
                  <q.icon className="w-6 h-6 mb-3" style={{ color: LAVENDER }} />
                  <span className="text-sm font-semibold text-white leading-snug" style={{ fontFamily: "Poppins, sans-serif" }}>{q.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroFact({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl px-4 py-2.5 flex items-center gap-2.5 border" style={{ background: "rgba(37,3,45,0.65)", borderColor: "rgba(155,147,255,0.3)" }}>
      <Icon className="w-4 h-4" style={{ color: "#9b93ff" }} />
      <div>
        <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(155,147,255,0.7)", fontFamily: "Poppins, sans-serif" }}>{label}</div>
        <div className="text-sm font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>{value}</div>
      </div>
    </div>
  );
}