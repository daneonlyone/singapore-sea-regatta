import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Mail, MapPin, ArrowRight } from "lucide-react";
import { SOCIALS } from "@/components/socials";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Image } from "@/components/ui/image";

const ABOUT_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/dcf6bf66e_generated_60c2473b.png";

export default function AboutSSR() {
  const [team, setTeam] = useState([]);

  useEffect(() => { base44.entities.TeamMember.list("order", 50).then(setTeam).catch(() => {}); }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={ABOUT_IMG} className="w-full h-full object-cover" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pb-16 pt-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">The Master Brand</span>
            <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black">About SSR</h1>
            <p className="mt-4 max-w-xl text-lg text-gradient-ignite font-heading font-bold">Paddle With A Purpose</p>
          </Reveal>
        </div>
      </section>

      {/* WHAT IS SSR */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="What is SSR"
                title={<>Sport with a <span className="text-gradient-ignite">heartbeat</span></>}
                description="The Singapore Sea Regatta (SSR) is the nation's premier international dragon boat event, bringing together athletes and communities from around the world in a celebration of sport, resilience and unity."
              />
              <Reveal delay={200}>
                <p className="mt-6 text-foreground/70 leading-relaxed">
                  Born on the waters of Marina Bay, SSR uses the raw power and teamwork of dragon boat racing to champion health and community causes — from breast cancer awareness to mental health and dementia support. Every stroke carries purpose.
                </p>
              </Reveal>
            </div>
            <Reveal>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image src={ABOUT_IMG} className="w-full h-full object-cover" fittingType="fill" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass rounded-3xl p-8 h-full">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  To unite athletes, healthcare institutions, corporate partners and the public through world-class dragon boat racing — channelling the energy of sport into meaningful health advocacy and social impact.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="glass rounded-3xl p-8 h-full">
                <Eye className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  To establish Singapore Sea Regatta as a permanent global benchmark in sporting excellence and community purpose — a movement where every edition leaves a lasting legacy on and off the water.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SSR STORY */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading align="center" eyebrow="The SSR Story" title="Three editions, one current" />
          <div className="mt-12 space-y-8">
            {[
              { y: "2024", n: "Pink Wave", c: "#EC4899", d: "The inaugural edition championed breast cancer awareness, uniting survivors, athletes and the community in a wave of solidarity." },
              { y: "2025", n: "Rise Above The Waves", c: "#00B4D8", d: "The second edition rallied behind mental health awareness, with panel talks, wellness activations and outreach supporting youth resilience." },
              { y: "2026", n: "Head Above Water", c: "#FF5C00", d: "Timed with World Alzheimer's Month, the 2026 edition shines a spotlight on dementia awareness and caregiver support.", current: true }
            ].map((e, i) => (
              <Reveal key={e.y} delay={i * 120}>
                <div className={`glass rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center gap-6 ${e.current ? "glass-blaze" : ""}`}>
                  <div className="font-heading font-black text-5xl sm:text-6xl shrink-0" style={{ color: e.c }}>{e.y}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{e.n}</h3>
                      {e.current && <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full gradient-blaze text-white">Current</span>}
                    </div>
                    <p className="mt-2 text-foreground/70 leading-relaxed">{e.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="The Organising Team" title="The people behind the paddles" description="A warm, dedicated team bringing SSR to life — roles shown as editable CMS entries." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={i * 80}>
                <div className="glass rounded-2xl p-6 text-center h-full hover:border-primary/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-ember/10 mx-auto mb-4 flex items-center justify-center font-heading font-bold text-white text-xl">
                    {m.role?.[0] || "?"}
                  </div>
                  <h4 className="font-bold text-white text-sm">{m.role}</h4>
                  <p className="text-xs text-primary mt-0.5">{m.name}</p>
                  {m.bio && <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{m.bio}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="Get In Touch" title="Let's connect" />
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <Reveal>
              <div className="glass rounded-2xl p-6 text-center h-full">
                <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-white">Email</h4>
                <a href="mailto:race@sgsearegatta.com" className="text-sm text-muted-foreground hover:text-white transition-colors">race@sgsearegatta.com</a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass rounded-2xl p-6 text-center h-full">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-white">Venue</h4>
                <p className="text-sm text-muted-foreground">Bayfront Event Space, Marina Bay</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="glass rounded-2xl p-6 text-center h-full">
                <Heart className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-white">Social</h4>
                <div className="flex items-center justify-center gap-2 mt-2">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-foreground/70 hover:text-white hover:border-primary/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Link to="/head-above-water-2026" className="inline-flex items-center gap-2 gradient-blaze text-white font-semibold px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all">
                Explore Head Above Water 2026 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}