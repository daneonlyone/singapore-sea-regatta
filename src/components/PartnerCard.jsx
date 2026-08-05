import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

// Single partner tile. `featured` renders the larger title-sponsor treatment.
export default function PartnerCard({ sponsor, featured = false }) {
  const Wrapper = sponsor.website ? "a" : "div";
  const linkProps = sponsor.website
    ? { href: sponsor.website, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={cn(
        "group relative block rounded-2xl text-center overflow-hidden transition-all duration-400 hover:-translate-y-1",
        featured ? "glass-blaze px-8 py-10" : "glass px-5 py-6 hover:border-primary/40"
      )}
    >
      <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {sponsor.role && (
        <div className={cn(
          "mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary",
          featured && "text-xs"
        )}>
          {sponsor.role}
        </div>
      )}

      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          className={cn("mx-auto w-full", featured ? "h-20 max-w-[240px]" : "h-12 max-w-[160px]")}
          fittingType="fit" />
      ) : (
        <div className={cn(
          "font-heading font-bold text-white leading-snug",
          featured ? "text-2xl sm:text-3xl" : "text-sm"
        )}>
          {sponsor.name}
        </div>
      )}
    </Wrapper>
  );
}