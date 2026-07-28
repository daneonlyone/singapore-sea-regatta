import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

// Consistent section heading with eyebrow, title, and optional description.
export default function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  return (
    <Reveal className={cn(align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-2 mb-4", align === "center" && "justify-center")}>
          <span className="w-8 h-px gradient-blaze" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05]">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">{description}</p>}
    </Reveal>
  );
}