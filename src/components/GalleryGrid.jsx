import { Play } from "lucide-react";
import { Image } from "@/components/ui/image";

// Masonry-ish media grid. Videos open in a new tab; photos are decorative tiles.
export default function GalleryGrid({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {items.map((it) => {
        const isVideo = it.media_type === "Video" && it.video_url;
        const Wrapper = isVideo ? "a" : "div";
        const props = isVideo ? { href: it.video_url, target: "_blank", rel: "noreferrer" } : {};
        return (
          <Wrapper
            key={it.id}
            {...props}
            className="group relative block aspect-square rounded-2xl overflow-hidden border border-white/10 card-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Image
              src={it.image}
              alt={it.title || `${it.category} — Singapore Sea Regatta ${it.year}`}
              className="w-full h-full"
              fittingType="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            {isVideo && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full glass-strong flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" aria-hidden="true" />
                </span>
              </span>
            )}
            <div className="absolute bottom-0 inset-x-0 p-3">
              <span className="block text-[10px] uppercase tracking-widest text-primary">{it.category}</span>
              {it.title && <span className="block text-xs font-semibold text-white leading-snug line-clamp-2">{it.title}</span>}
              {it.credit && <span className="block mt-0.5 text-[10px] text-white/50">📷 {it.credit}</span>}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}