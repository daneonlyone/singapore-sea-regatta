import { useState } from "react";
import { createPortal } from "react-dom";
import { Download, Expand, X } from "lucide-react";
import { Image } from "@/components/ui/image";

const MAP_SRC = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/8042604f4_festivalmap.jpeg";
const ALT = "SSR Festival site layout map at Bayfront Event Space";

export default function FestivalMap() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-8 max-w-2xl glass rounded-3xl p-3 sm:p-4">
        <button onClick={() => setOpen(true)} className="group relative block w-full overflow-hidden rounded-2xl" aria-label="Expand festival map">
          <Image src={MAP_SRC} originWidth={1024} originHeight={791} fittingType="fit" className="w-full rounded-2xl" alt={ALT} />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 glass-strong rounded-full px-3 py-1.5 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Expand className="w-3.5 h-3.5" /> Click to expand
          </span>
        </button>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-1.5 glass rounded-xl px-4 py-2 text-sm font-semibold text-white hover:border-white/20 transition-colors">
            <Expand className="w-4 h-4" /> Expand map
          </button>
          <a href={MAP_SRC} download="ssr-festival-map.jpg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 glass rounded-xl px-4 py-2 text-sm font-semibold text-white hover:border-white/20 transition-colors">
            <Download className="w-4 h-4" /> Download map
          </a>
        </div>
      </div>

      {open && createPortal(
        <div className="fixed inset-0 z-[100] bg-black/90 p-4 sm:p-8 overflow-auto" onClick={() => setOpen(false)}>
          <div className="min-h-full flex items-center justify-center">
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={MAP_SRC} alt={ALT} className="w-full rounded-2xl" />
              <div className="mt-4 flex justify-center gap-2">
                <a href={MAP_SRC} download="ssr-festival-map.jpg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 glass-strong rounded-xl px-4 py-2 text-sm font-semibold text-white">
                  <Download className="w-4 h-4" /> Download image
                </a>
                <button onClick={() => setOpen(false)} className="inline-flex items-center gap-1.5 glass-strong rounded-xl px-4 py-2 text-sm font-semibold text-white">
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}