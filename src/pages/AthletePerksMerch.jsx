import { useEffect, useMemo, useState } from "react";
import { Search, MapPin, Clock, ExternalLink, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const PERK_CATS = ["All", "Fitness", "Recovery", "Food & Beverage", "Wellness", "Retail", "Lifestyle"];

export default function AthletePerksMerch() {
  return (
    <div className="haw-theme">
      {/* HERO */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(37,3,45,0.8) 0%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-6">
              <img src="https://media.base44.com/images/public/6a635ab4e57d550e514135e7/53dba10dd_White.png" alt="Head Above Water" style={{ height: 64, objectFit: "contain" }} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9b93ff", fontFamily: "Poppins, sans-serif" }}>Head Above Water 2026</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black">Athlete Perks &amp; Merchandise</h1>
            <p className="mt-4 max-w-2xl text-foreground/70" style={{ fontFamily: "Poppins, sans-serif" }}>Unlock September-long privileges with your SSR athlete card, and shop the official 2026 collection.</p>
          </Reveal>
        </div>
      </section>

      <Merchandise />
      <PrivilegeProgramme />
    </div>
  );
}

function PrivilegeProgramme() {
  const [partners, setPartners] = useState([]);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  useEffect(() => { base44.entities.PrivilegePartner.list("order", 200).then(setPartners).catch(() => {}); }, []);

  const filtered = useMemo(() => partners.filter((p) => {
    const q = query.toLowerCase();
    const matchQ = !q || (p.brand + p.offer + p.outlet).toLowerCase().includes(q);
    const matchC = cat === "All" || p.category === cat;
    return matchQ && matchC;
  }), [partners, query, cat]);

  return (
    <section id="perks" className="relative py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="SSR Athlete Privilege Programme" title="Your card. September unlocked." description="Every registered paddler receives an SSR athlete card that unlocks exclusive offers across fitness, recovery, food, wellness and lifestyle partners throughout September." />

        <Reveal>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search partners, offers, outlets..."
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {PERK_CATS.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-all", cat === c ? "text-white" : "glass text-foreground/70 hover:text-white")}
                style={cat === c ? { background: "linear-gradient(90deg, #25032d, #9b93ff)" } : {}}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "rgba(155,147,255,0.15)", color: "#9b93ff" }}>{p.category}</span>
                  {p.website && <a href={p.website} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><ExternalLink className="w-4 h-4" /></a>}
                </div>
                <h3 className="font-bold text-white text-lg">{p.brand}</h3>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{p.offer}</p>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  {p.outlet && <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{p.outlet}</div>}
                  {p.validity && <div className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{p.validity}</div>}
                </div>
                {p.terms && <p className="mt-3 text-[11px] text-muted-foreground/70 border-t border-white/5 pt-3">{p.terms}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Merchandise() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState({});

  useEffect(() => { base44.entities.Merchandise.list("order", 100).then(setItems).catch(() => {}); }, []);

  return (
    <section id="merch" className="relative py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Official SSR Merchandise" title="The 2026 collection" description="Premium race jerseys, apparel, accessories and limited-edition items — designed for athletes and supporters alike. Showcasing the official collection; items are not available for online purchase." />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((m, i) => {
            const imgs = m.images && m.images.length ? m.images : [];
            const idx = active[m.id] || 0;
            return (
              <Reveal key={m.id} delay={i * 60}>
                <div className="glass rounded-2xl overflow-hidden h-full flex flex-col group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center overflow-hidden">
                    {imgs.length ? (
                      <img src={imgs[idx]} alt={m.name} className="w-full h-full object-cover" />
                    ) : (
                      <ShoppingBag className="w-12 h-12 text-muted-foreground/40" />
                    )}
                    {imgs.length > 1 && (
                      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-2">
                        {imgs.map((_, j) => (
                          <button key={j} onClick={() => setActive({ ...active, [m.id]: j })} className={cn("w-1.5 h-1.5 rounded-full transition-all", idx === j ? "bg-primary w-4" : "bg-white/40")} />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: "#9b93ff" }}>{m.category}</span>
                    <h3 className="mt-1 font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>{m.name}</h3>
                    {m.description && <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">{m.description}</p>}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}