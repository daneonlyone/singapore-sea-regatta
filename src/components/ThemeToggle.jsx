import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative inline-flex items-center h-9 w-[62px] rounded-full glass px-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 left-1 h-7 w-7 rounded-full gradient-blaze shadow-md transition-transform duration-300",
          isDark ? "translate-x-0" : "translate-x-[26px]"
        )}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-[7px]">
        <Moon aria-hidden="true" className={cn("w-[15px] h-[15px] transition-colors", isDark ? "text-white" : "text-muted-foreground")} />
        <Sun aria-hidden="true" className={cn("w-[15px] h-[15px] transition-colors", isDark ? "text-muted-foreground" : "text-white")} />
      </span>
      <span className="sr-only">{isDark ? "Dark mode enabled" : "Light mode enabled"}</span>
    </button>
  );
}