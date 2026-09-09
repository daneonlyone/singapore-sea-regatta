import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkeletonGrid from "@/components/SkeletonGrid";
import PlaceholderPanel from "@/components/PlaceholderPanel";
import WixProductCard from "@/components/WixProductCard";
import usePageMeta from "@/hooks/use-page-meta";

export default function OfficialStore() {
  usePageMeta({
    title: "Official Store",
    description: "Shop the official Singapore Sea Regatta collection — jerseys, apparel and limited-edition merchandise, synced live from our online store."
  });

  const [products, setProducts] = useState(null);

  useEffect(() => {
    base44.entities.WixProduct.list("order", 200).then((r) => setProducts(r.filter((p) => p.visible))).catch(() => setProducts([]));
  }, []);

  return (
    <div className="haw-theme">
      <section id="hero" className="relative pt-32 pb-8 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(37,3,45,0.8) 0%, transparent 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9b93ff" }}>Singapore Sea Regatta</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black">Official Store</h1>
            <p className="mt-4 max-w-2xl text-foreground/70">
              Our full merchandise collection, straight from the official online store. Tap any item to view details and check out securely on sgsearegatta.com.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="products" className="relative py-14 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Shop"
            title="The collection"
            description="Prices, images and availability are kept in sync with our online store." />

          {products === null ?
            <div className="mt-10">
              <SkeletonGrid count={6} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" height="h-80" />
            </div> :
          products.length === 0 ?
            <div className="mt-10">
              <PlaceholderPanel icon={ShoppingBag} title="No products yet" body="Our store catalogue will appear here as soon as items are published." />
            </div> :
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p, i) =>
                <Reveal key={p.id} delay={i * 60}>
                  <WixProductCard product={p} />
                </Reveal>
              )}
            </div>
          }
        </div>
      </section>
    </div>
  );
}