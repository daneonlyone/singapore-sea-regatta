import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Head Above Water 2026", to: "/head-above-water-2026" },
  { label: "Race Info", to: "/race-information" },
  { label: "SSR Festival", to: "/ssr-festival" },
  { label: "Athlete Perks & Merch", to: "/athlete-perks-merch" }
];

const PREV_YEARS = [
  { year: "2024", name: "Pink Wave", to: "/pink-wave-2024", color: "#EC4899", glow: "rgba(236,72,153,0.35)" },
  { year: "2025", name: "Rise Above The Waves", to: "/rise-above-the-waves-2025", color: "#00B4D8", glow: "rgba(0,180,216,0.35)" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevOpen, setPrevOpen] = useState(false);
  const [mobilePrev, setMobilePrev] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMobilePrev(false); }, [loc.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-5 h-16 transition-all duration-500",
            scrolled ? "glass-strong shadow-2xl shadow-black/40" : "glass"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Logo height={34} className="transition-transform duration-500 group-hover:scale-105" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <NavItem key={item.to} item={item} active={loc.pathname === item.to} />
            ))}

            {/* Previous Years dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPrevOpen(true)}
              onMouseLeave={() => setPrevOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  loc.pathname.includes("pink-wave") || loc.pathname.includes("rise-above")
                    ? "text-white" : "text-foreground/70 hover:text-white"
                )}
              >
                Previous Years
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", prevOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "absolute right-0 top-full pt-3 transition-all duration-300",
                  prevOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                <div className="glass-strong rounded-xl p-2 w-72 shadow-2xl shadow-black/60">
                  <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-muted-foreground">Archived Editions</div>
                  {PREV_YEARS.map((y) => (
                    <Link
                      key={y.year}
                      to={y.to}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <span
                        className="w-1.5 h-10 rounded-full"
                        style={{ background: y.color, boxShadow: `0 0 12px ${y.glow}` }}
                      />
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">{y.name}</div>
                        <div className="text-muted-foreground text-xs">Singapore Sea Regatta {y.year}</div>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">{y.year}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className={cn("px-3 py-2 rounded-lg text-sm font-medium transition-colors", loc.pathname === "/about" ? "text-white" : "text-foreground/70 hover:text-white")}>About SSR</Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/race-information"
              className="hidden sm:inline-flex items-center gap-1.5 gradient-blaze text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Race Information
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <ThemeToggle />
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 z-40 transition-all duration-400",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div className={cn(
          "absolute right-0 top-0 h-full w-[88%] max-w-sm glass-strong p-6 pt-24 flex flex-col gap-1 transition-transform duration-400",
          open ? "translate-x-0" : "translate-x-full"
        )}>
          <Link to="/" className="mobile-nav-item">Home</Link>
          <Link to="/head-above-water-2026" className="mobile-nav-item">Head Above Water 2026</Link>
          <Link to="/race-information" className="mobile-nav-item">Race Info</Link>
          <Link to="/ssr-festival" className="mobile-nav-item">SSR Festival</Link>
          <Link to="/athlete-perks-merch" className="mobile-nav-item">Athlete Perks & Merch</Link>
          <Link to="/about" className="mobile-nav-item">About SSR</Link>

          <button
            className="mobile-nav-item flex items-center justify-between"
            onClick={() => setMobilePrev(!mobilePrev)}
          >
            Previous Years
            <ChevronDown className={cn("w-4 h-4 transition-transform", mobilePrev && "rotate-180")} />
          </button>
          <div className={cn("overflow-hidden transition-all duration-300", mobilePrev ? "max-h-60" : "max-h-0")}>
            <div className="pl-4 flex flex-col gap-1">
              {PREV_YEARS.map((y) => (
                <Link key={y.year} to={y.to} className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg hover:bg-white/5">
                  <span className="w-1 h-8 rounded-full" style={{ background: y.color }} />
                  <div>
                    <div className="text-white text-sm font-medium">{y.name}</div>
                    <div className="text-muted-foreground text-xs">{y.year} Archive</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/race-information" className="mt-4 gradient-blaze text-white text-center font-semibold px-4 py-3.5 rounded-xl">
            View Race Information
          </Link>
        </div>
      </div>
    </header>
  );
}

const HAW_PATHS = ["/head-above-water-2026", "/race-information", "/ssr-festival", "/athlete-perks-merch"];

function NavItem({ item, active }) {
  const purple = HAW_PATHS.includes(item.to);
  const glow = purple ? "rgba(155,147,255,0.55)" : "rgba(255,92,0,0.55)";
  const tint = purple ? "rgba(155,147,255,0.08)" : "rgba(255,92,0,0.08)";
  const line = purple ? "linear-gradient(90deg, #9b93ff, #6d63e6)" : "linear-gradient(90deg, #FF5C00, #D62828)";
  return (
    <Link
      to={item.to}
      className={cn(
        "group relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
        active ? "text-white" : "text-foreground/70 hover:text-white"
      )}
    >
      <span
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 20px -4px ${glow}`, background: tint }}
      />
      <span className="relative">{item.label}</span>
      {active && <span className="absolute inset-x-3 -bottom-px h-px" style={{ background: line }} />}
    </Link>
  );
}