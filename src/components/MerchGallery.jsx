import { useRef, useState } from "react";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

// Swipeable image gallery for a merchandise card.
export default function MerchGallery({ images = [], alt }) {
  const [idx, setIdx] = useState(0);
  const [drag, setDrag] = useState(0);
  const startX = useRef(null);

  const count = images.length;
  const go = (n) => setIdx(Math.min(Math.max(n, 0), count - 1));

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => {
    if (startX.current === null || count < 2) return;
    setDrag(e.touches[0].clientX - startX.current);
  };
  const onTouchEnd = (e) => {
    if (startX.current === null || count < 2) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? idx + 1 : idx - 1);
    startX.current = null;
    setDrag(0);
  };

  if (!count) {
    return (
      <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
        <ShoppingBag className="w-12 h-12 text-muted-foreground/40" />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-square bg-gradient-to-br from-zinc-900 to-black overflow-hidden touch-pan-y select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex h-full w-full"
        style={{
          transform: `translate3d(calc(${-idx * 100}% + ${drag}px), 0, 0)`,
          transition: drag ? "none" : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform"
        }}
      >
        {images.map((src, j) => (
          <Image key={j} src={src} alt={alt} className="w-full h-full shrink-0" fittingType="fill" />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(idx - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(idx + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-2">
            {images.map((_, j) => (
              <button
                key={j}
                type="button"
                aria-label={`Image ${j + 1}`}
                onClick={() => setIdx(j)}
                className={cn("h-1.5 rounded-full transition-all", idx === j ? "bg-primary w-4" : "bg-white/40 w-1.5")}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}