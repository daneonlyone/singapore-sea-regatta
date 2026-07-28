import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Toggles between dark (default) and light accessibility mode.
// The class is applied to <html> and persisted to localStorage.
export default function ThemeToggle({ className = "" }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    const el = document.documentElement;
    el.classList.toggle("dark", !next);
    el.classList.toggle("light", next);
    try { localStorage.setItem("ssr-theme", next ? "light" : "dark"); } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      title={light ? "Switch to dark mode" : "Switch to light mode"}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg glass text-foreground/80 hover:text-foreground transition-colors ${className}`}
    >
      {light ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}