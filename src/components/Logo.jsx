import { cn } from "@/lib/utils";

const LOGO_URL = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/ebc72c78b_White.png";

// Official IHH × Singapore Sea Regatta logo lockup (white-on-black).
export default function Logo({ className, height = 40 }) {
  return (
    <img
      src={LOGO_URL}
      alt="IHH Healthcare — Singapore Sea Regatta"
      className={cn("h-auto w-auto", className)}
      style={{ height }}
    />
  );
}