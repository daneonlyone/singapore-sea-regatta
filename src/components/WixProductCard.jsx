import { ExternalLink } from "lucide-react";
import { Image } from "@/components/ui/image";

// Single synced Wix store product — links out to the Wix product page to buy.
export default function WixProductCard({ product }) {
  return (
    <a
      href={product.product_url}
      target="_blank"
      rel="noreferrer"
      className="glass card-lift rounded-2xl overflow-hidden h-full flex flex-col group"
    >
      <div className="relative aspect-square bg-white/5 overflow-hidden">
        <Image
          src={product.main_image}
          alt={product.name}
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          fittingType="fill"
        />
        {product.ribbon &&
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white" style={{ background: "linear-gradient(90deg, #9b93ff, #6d63e6)" }}>
            {product.ribbon}
          </span>
        }
        {!product.in_stock &&
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/70 text-white/80">
            Sold Out
          </span>
        }
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-white leading-snug">{product.name}</h3>
        {product.price_formatted &&
          <div className="mt-1.5 text-sm font-semibold text-white">{product.price_formatted}</div>
        }
        {product.description &&
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>
        }
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-primary transition-colors">
          View on store
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
}