import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin, Users, Info, Ruler, FileText, ShoppingBag, Navigation, HelpCircle, Ticket } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/6c893ed46_generated_71914506.png";
const CAUSE_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/7f82390ed_generated_46f74eb8.png";

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

export default function HeadAboveWater2026() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_IMG} className="w-full h-full object-cover" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pt-28 pb-16">
          <Reveal>
            <span className="glass-blaze rounded-full px-4 py-1.5 text-xs font-semibold text-white">
              IHH Healthcare × Singapore Sea Regatta 2026
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-heading font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              <span className="text-white">Head</span><br />
              <span className="text-gradient-ignite">Above Water</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-lg text-foreground/70 leading-relaxed">
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
              <Link to="/race-information" className="inline-flex items-center gap-2 gradient-blaze text-white font-semibold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all">
                View Race Information <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ssr-festival" className="inline-flex items-center gap-2 glass text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/20 transition-all">
                Explore SSR Festival
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT THE 2026 EDITION */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The 2026 Edition"
                title={<>More than a race. <span className="text-gradient-ignite">A movement.</span></>}
                description="The IHH Healthcare × Singapore Sea Regatta unites global athletes, healthcare institutions and corporate partners in a celebration of sport, resilience and unity. Beyond fierce competition across all age categories, the regatta features a vibrant festival footprint — wellness activations, recovery zones, and the exclusive SSR Athlete Privilege Programme."
              />
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { n: "01", t: "International Racing", d: "Dragon boat crews competing across DB12, DB22 and DB6 categories over two days." },
                    { n: "02", t: "Public Festival", d: "Food, retail, wellness, performances and family-friendly activities at Marina Bay." },
                    { n: "03", t: "Health Advocacy", d: "Dementia awareness and caregiver support at the heart of the 2026 campaign." }
                  ].map((c) => (
                    <div key={c.n} className="glass rounded-2xl p-5">
                      <div className="font-mono text-sm text-primary mb-2">{c.n}</div>
                      <h4 className="font-bold text-white text-sm">{c.t}</h4>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{c.d}</p>
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
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="glass-strong rounded-3xl overflow-hidden">
                <Image src={CAUSE_IMG} className="w-full aspect-[4/3] object-cover" fittingType="fill" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Cause</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Dementia Awareness & Caregiver Support</h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-5 text-foreground/70 leading-relaxed">
                  As Singapore ages, dementia challenges entire families and communities. Through SSR 2026, we spark vital conversations, build empathy, and foster a truly dementia-friendly society.
                </p>
              </Reveal>
              <div className="mt-8 space-y-5">
                {[
                  { t: "Why awareness matters", d: "Dementia affects memory, thinking and behaviour. Early awareness leads to earlier support, better care, and stronger, more inclusive communities." },
                  { t: "The role of caregivers", d: "Caregivers are the unseen heroes providing daily strength. SSR 2026 honours their dedication and connects them with resources and community." },
                  { t: "Sport meets purpose", d: "By uniting athletes, healthcare organisations and communities, we channel the power of sport into social impact — on and off the water." },
                  { t: "World Alzheimer's Month", d: "Timed with September's global awareness month, the regatta amplifies the call for a dementia-friendly society." }
                ].map((b, i) => (
                  <Reveal key={b.t} delay={i * 100}>
                    <div className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors">
                      <h4 className="font-semibold text-white text-sm">{b.t}</h4>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
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
            <div className="glass-strong rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-5 items-center">
                <div className="md:col-span-2 relative aspect-square md:aspect-auto md:h-full min-h-[280px] bg-gradient-to-br from-primary/20 to-ember/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full gradient-blaze mx-auto flex items-center justify-center font-heading font-black text-3xl text-white">OYK</div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 sm:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Guest of Honour</span>
                  <h2 className="mt-3 text-3xl font-bold text-white">Mr Ong Ye Kung</h2>
                  <p className="text-foreground/70 font-medium">Minister for Health</p>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
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
          <SectionHeading
            align="center"
            eyebrow="2026 Quick Access"
            title="Everything you need, one tap away"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {QUICK_ACCESS.map((q, i) => (
              <Reveal key={q.label} delay={i * 60}>
                <Link to={q.to} className="group glass rounded-2xl p-5 sm:p-6 h-full flex flex-col items-start hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                  <q.icon className="w-6 h-6 text-primary mb-3" />
                  <span className="text-sm font-semibold text-white leading-snug">{q.label}</span>
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
    <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5">
      <Icon className="w-4 h-4 text-primary" />
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}