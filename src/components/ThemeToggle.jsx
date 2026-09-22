import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

// Light/dark switch — always visible in the header on every breakpoint.
export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLight}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={cn(
        "inline-flex items-center justify-center w-10 h-10 rounded-xl glass text-foreground/80",
        "hover:text-primary hover:border-primary/40 transition-colors",
        className
      )}
    >
      {isLight ? <Moon className="w-[18px] h-[18px]" aria-hidden="true" /> : <Sun className="w-[18px] h-[18px]" aria-hidden="true" />}
    </button>
  );
}