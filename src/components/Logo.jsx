import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://media.base44.com/images/public/6a635ab4e57d550e514135e7/abd9745b8_White.png";

// Official IHH × Singapore Sea Regatta logo lockup (black background).
export default function Logo({ className, height = 40 }) {
  return (
    <Image
      src={LOGO_URL}
      alt="IHH Healthcare — Singapore Sea Regatta"
      fittingType="fit"
      className={cn("h-auto", className)}
      style={{ height }}
    />
  );
}