import { cn } from "@/lib/utils";

// SSR brand mark — a paddle-water glyph. Used where the logo image is unavailable.
export default function BrandMark({ className, size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={cn("shrink-0", className)}
      aria-label="Singapore Sea Regatta"
    >
      <defs>
        <linearGradient id="ssr-blaze" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB700" />
          <stop offset="55%" stopColor="#FF5C00" />
          <stop offset="100%" stopColor="#D62828" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="#0A0A0A" stroke="rgba(255,255,255,0.08)" />
      {/* paddle blade */}
      <path d="M22 52 Q50 22 78 52 Q50 68 22 52 Z" fill="url(#ssr-blaze)" />
      {/* water line */}
      <path d="M14 66 Q26 60 38 66 T62 66 T86 66" stroke="#FF5C00" strokeWidth="2.5" fill="none" opacity="0.7" />
      <path d="M14 74 Q26 68 38 74 T62 74 T86 74" stroke="#FFB700" strokeWidth="2" fill="none" opacity="0.45" />
    </svg>
  );
}