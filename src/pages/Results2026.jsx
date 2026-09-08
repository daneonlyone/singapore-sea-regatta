import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Images, Users, Handshake, Ticket, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { base44 } from "@/api/base44Client";
import usePageMeta from "@/hooks/use-page-meta";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import PodiumCard from "@/components/PodiumCard";
import PlaceholderPanel from "@/components/PlaceholderPanel";
import ImpactSection from "@/components/ImpactSection";
import SkeletonGrid from "@/components/SkeletonGrid";
import { Image } from "@/components/ui/image";

const STAT_ICONS = { Athletes: Users, "Participating Teams": Trophy, "Community Partners": Handshake, "Festival Visitors": Ticket };
const FILTERS = ["All", "Special Races", "DB12", "DB22", "DB6"];

export default function Results2026() {
  usePageMeta({
    title: "2026 Results & Recap",
    description: "Champions, podiums and final numbers from Head Above Water — the 2026 Singapore Sea Regatta at Marina Bay."
  });

  return (
    <div className="haw-theme">
      <Results2026Inner />
    </div>
  );
}

function Results2026Inner() {
  const [results, setResults] = useState(null);
  const [stats, setStats] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    base44.entities.RaceResult.filter({ year: "2026" }, "order", 300).then(setResults).catch(() => setResults([]));
    base44.entities.Statistic.filter({ year: "2026" }, "order", 50).then(setStats).catch(() => {});
  }, []);

  const grouped = useMemo(() => {
    if (!results) return [];
    const shown = results.filter((r) => {
      if (filter === "All") return true;
      if (filter === "Special Races") return r.is_special;
      return r.boat === filter;
    });
    const map = {};
    shown.forEach((r) => { (map[r.category_name] = map[r.category_name] || []).push(r); });
    return Object.entries(map);
  }, [results, filter]);

  return (
    <div>
      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-12 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(37,3,45,0.75) 0%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-6">
              <Image
                src="https://media.base44.com/images/public/6a635ab4e57d550e514135e7/53dba10dd_White.png"
                alt="Head Above Water 2026 campaign logo"
                fittingType="fit"
                className="h-24 sm:h-28 lg:h-32 w-64"
              />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9b93ff" }}>
              5 – 6 September 2026 · Concluded
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black">
              Results &amp; <span className="text-gradient-ignite">Recap</span>
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70">
              Thank you for paddling with us. Two days of racing, a festival that never stopped moving, and a community that kept its head above water — here's how it all finished.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-2 btn-haw text-white font-semibold px-5 py-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Images className="w-4 h-4" aria-hidden="true" />
                Browse the Gallery
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL NUMBERS */}
      {stats.length > 0 && (
        <section id="final-numbers" className="relative py-20 scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Final Numbers" title="The 2026 edition in figures" />
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => {
                const Icon = STAT_ICONS[s.label] || Trophy;
                return (
                  <Reveal key={s.id} delay={i * 90}>
                    <div className="glass card-lift rounded-2xl p-6 text-center h-full">
                      <Icon className="w-6 h-6 text-primary mx-auto mb-3" aria-hidden="true" />
                      <div className="text-3xl sm:text-4xl font-heading font-black text-white">
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* PODIUMS */}
      <section id="podiums" className="relative py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Champions"
            title="Every podium, every category"
            description="Filter by boat class or jump straight to the signature showdowns."
          />

          {results && results.length > 0 && (
            <Reveal>
              <div className="mt-8 flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      filter === f ? "text-white shadow-lg" : "glass text-foreground/70 hover:text-white"
                    )}
                    style={filter === f ? { background: "linear-gradient(90deg, #25032d, #9b93ff)", boxShadow: "0 4px 18px rgba(155,147,255,0.35)" } : {}}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          <div className="mt-10">
            {results === null ? <SkeletonGrid count={6} /> : results.length === 0 ? (
              <PlaceholderPanel
                icon={Trophy}
                title="Results coming soon"
                body="Official timings and podium placings are being finalised with the race committee. They'll appear here as soon as they're confirmed."
              />
            ) : grouped.length === 0 ? (
              <PlaceholderPanel icon={Sparkles} title="No results in this filter" body="Try another boat class or view all categories." />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {grouped.map(([category, items], i) => (
                  <Reveal key={category} delay={i * 70}>
                    <PodiumCard category={category} results={items} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <ImpactSection year="2026" />
    </div>
  );
}