import { useEffect, useMemo, useState } from "react";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils";
import { base44 } from "@/api/base44Client";
import usePageMeta from "@/hooks/use-page-meta";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import PlaceholderPanel from "@/components/PlaceholderPanel";
import SkeletonGrid from "@/components/SkeletonGrid";

const CATS = ["All", "Races", "Festival", "Winners", "Candid"];

export default function Gallery() {
  usePageMeta({
    title: "Gallery",
    description: "Photos and videos from every Singapore Sea Regatta edition — racing, festival moments, champions and candid shots from Marina Bay.",
    image: "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/81415c754_Singapore_Sea_Regatta_2025-1077.jpg"
  });

  const [items, setItems] = useState(null);
  const [year, setYear] = useState("All");
  const [cat, setCat] = useState("All");

  useEffect(() => {
    base44.entities.GalleryItem.list("order", 500).then(setItems).catch(() => setItems([]));
  }, []);

  const years = useMemo(() => {
    if (!items) return [];
    return ["All", ...[...new Set(items.map((i) => i.year))].sort((a, b) => b.localeCompare(a))];
  }, [items]);

  const shown = useMemo(() => {
    if (!items) return [];
    return items.filter((i) => (year === "All" || i.year === year) && (cat === "All" || i.category === cat));
  }, [items, year, cat]);

  return (
    <div>
      <section id="hero" className="relative pt-32 pb-10 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Relive The Regatta</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black">Gallery</h1>
            <p className="mt-4 max-w-2xl text-foreground/70">
              Every sprint, every drumbeat, every celebration on the shore — captured across our editions at Marina Bay.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="media" className="relative pb-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Photos & Videos" title="Browse by edition and moment" />

          {items && items.length > 0 && (
            <Reveal>
              <div className="mt-8 space-y-3">
                <FilterRow label="Edition" options={years} value={year} onChange={setYear} />
                <FilterRow label="Moment" options={CATS} value={cat} onChange={setCat} />
              </div>
            </Reveal>
          )}

          <div className="mt-10">
            {items === null ? <SkeletonGrid count={9} height="h-56" /> : items.length === 0 ? (
              <PlaceholderPanel
                icon={Images}
                title="Gallery coming soon"
                body="Our photographers are working through thousands of frames from the 2026 edition. Photos and race videos will land here shortly."
              />
            ) : shown.length === 0 ? (
              <PlaceholderPanel icon={Images} title="Nothing here yet" body="No media matches this combination — try another edition or moment." />
            ) : (
              <GalleryGrid items={shown} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterRow({ label, options, value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground w-16">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={cn(
            "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            value === o ? "gradient-blaze text-white shadow-lg shadow-primary/25" : "glass text-foreground/70 hover:text-white"
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}