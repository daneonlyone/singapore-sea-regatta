import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Mail, MapPin, ArrowRight } from "lucide-react";
import { SOCIALS } from "@/components/socials";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Image } from "@/components/ui/image";

const DEFAULT_INTRO = "Imagine the thunderous roar of paddles slicing through water, the synchronized power of a dragon boat crew propelling their vessel forward with relentless determination. This is no ordinary race; it's a vibrant, adrenaline-charged celebration of strength, unity, and resilience. Welcome to the Singapore Sea Regatta, where the traditional sport of dragonboating transcends mere competition to become a dynamic platform for promoting crucial health messages. In SSR, the spirit of the dragonboat not only embodies physical fitness and teamwork but also serves as a beacon of hope and awareness for mental health, cancer prevention, and community well-being. Through the rhythmic harmony of paddling, SSR creates a powerful synergy, merging the thrill of the sport with life-saving health advocacy in an unparalleled, transformative experience.";

const ABOUT_IMG = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/dcf6bf66e_generated_60c2473b.png";

export default function AboutSSR() {
  const [team, setTeam] = useState([]);
  const [intro, setIntro] = useState(null);

  useEffect(() => {base44.entities.TeamMember.list("order", 50).then(setTeam).catch(() => {});}, []);
  useEffect(() => {base44.entities.SiteText.filter({ key: "about_what_is_ssr" }).then((r) => setIntro(r[0] || null)).catch(() => {});}, []);

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
                eyebrow={intro?.eyebrow || "What is SSR"}
                title={intro?.title || "Paddle with A Purpose"}
                description={intro?.description || DEFAULT_INTRO} />
              <Reveal delay={100}>
                <p className="mt-6 text-foreground/70 leading-relaxed">
                  Imagine the thunderous roar of paddles slicing through water, the synchronized power of a dragon boat crew propelling their vessel forward with relentless determination. This is no ordinary race; it’s a vibrant, adrenaline-charged celebration of strength, unity, and resilience. Welcome to the Singapore Sea Regatta, where the traditional sport of dragonboating transcends mere competition to become a dynamic platform for promoting crucial health messages. In SSR, the spirit of the dragonboat not only embodies physical fitness and teamwork but also serves as a beacon of hope and awareness for mental health, cancer prevention, and community well-being. Through the rhythmic harmony of paddling, SSR creates a powerful synergy, merging the thrill of the sport with life-saving health advocacy in an unparalleled, transformative experience.
                </p>
              </Reveal>
            </div>
            <Reveal>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image src="https://media.base44.com/images/public/6a635ab4e57d550e514135e7/09347cdea_DSC02625.JPG" className="w-full h-full object-cover" fittingType="fill" />
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
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading align="center" eyebrow="The SSR Story" title="Three editions, one current" />
          
          {/* Increased space between cards to match the larger, centered layout */}
          <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
            {[
            { y: "2024", n: "Pink Wave", c: "#EC4899", d: "The inaugural edition championed breast cancer awareness, uniting survivors, athletes and the community in a wave of solidarity." },
            { y: "2025", n: "Rise Above The Waves", c: "#00B4D8", d: "The second edition rallied behind mental health awareness, with panel talks, wellness activations and outreach supporting youth resilience." },
            { y: "2026", n: "Head Above Water", c: "#FF5C00", d: "Timed with World Alzheimer's Month, the 2026 edition shines a spotlight on dementia awareness and caregiver support.", current: true }].
            map((e, i) =>
            <Reveal key={e.y} delay={i * 120}>
                
                {/* 
                 Centered Card Container: 
                 Added flex-col, items-center, and text-center.
                 Increased internal padding (p-8 mobile, p-12 desktop).
                */}
                <div
                className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 flex flex-col items-center text-center transition-transform hover:-translate-y-1 ${
                e.current ? "glass-blaze border border-white/20 shadow-2xl" : "glass border border-white/5"}`
                }>
                
                  {/* Top Color Accent Bar (Balanced for centered layout) */}
                  <div
                  className="absolute left-0 top-0 right-0 h-2 sm:h-3"
                  style={{ backgroundColor: e.c }} />
                

                  {/* Year Typography (Centered & bottom margin added) */}
                  <div
                  className="font-heading font-black text-6xl sm:text-7xl tracking-tighter drop-shadow-md mb-4 sm:mb-6"
                  style={{ color: e.c }}>
                  
                    {e.y}
                  </div>

                  {/* Title & Badge (Centered grouping) */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5 sm:mb-6">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {e.n}
                    </h3>
                    {e.current &&
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white shadow-sm mt-2 sm:mt-0"
                    style={{ backgroundColor: e.c }}>
                    
                        Current
                      </span>
                  }
                  </div>
                  
                  {/* 
                   Description: 
                   Constrained max-width for easier reading.
                   Added pb-4/pb-8 for the requested extra space below the text.
                  */}
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto pb-4 sm:pb-8">
                    {e.d}
                  </p>
                  
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="The Organising Team" title="The people behind the paddles" description="A warm, dedicated team bringing SSR to life — roles shown as editable CMS entries." />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {team.map((m, i) =>
            <Reveal key={m.id} delay={i * 80} className="h-full">
                <TeamMemberCard member={m} />
              </Reveal>
            )}
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
                <a href="mailto:admin@sgsearegatta.com" className="text-sm text-muted-foreground hover:text-white transition-colors">admin@sgsearegatta.com</a>
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
                  {SOCIALS.map(({ icon: Icon, href, label }) =>
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-foreground/70 hover:text-white hover:border-primary/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </a>
                  )}
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
    </div>);

}