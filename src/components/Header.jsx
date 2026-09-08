import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Head Above Water 2026", to: "/head-above-water-2026" },
  { label: "Race Information", to: "/race-information" },
  { label: "SSR Festival", to: "/ssr-festival" },
  { label: "Results & Recap", to: "/results-2026" },
  { label: "Gallery", to: "/gallery" }
];

// Secondary destinations — grouped so every page stays reachable on desktop.
const MORE = [
  { label: "About SSR", to: "/about-ssr", note: "Our story, mission and team" },
  { label: "Athlete Perks & Merch", to: "/athlete-perks-merch", note: "Privileges and official merchandise" },
  { label: "Partners & Sponsorship", to: "/partners", note: "Partner with us in 2027" }
];

const PREV_YEARS = [
  { year: "2025", name: "Rise Above The Waves", to: "/rise-above-the-waves-2025", color: "#00B4D8" },
  { year: "2024", name: "Pink Wave", to: "/pink-wave-2024", color: "#EC4899" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobilePrev, setMobilePrev] = useState(false);
  const toggleRef = useRef(null);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMobilePrev(false); }, [loc.pathname]);

  // Escape closes the mobile menu and returns focus to the toggle button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-5 h-16 transition-all duration-500",
            scrolled ? "glass-strong shadow-2xl shadow-black/40" : "glass"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Singapore Sea Regatta — home">
            <Logo height={34} className="transition-transform duration-500 group-hover:scale-105" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Main">
            {NAV.map((item) => (
              <NavItem key={item.to} item={item} active={loc.pathname === item.to} />
            ))}

            <div className="relative group">
              <button className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-white transition-colors">
                More
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200">
                <div className="glass-strong rounded-xl p-2 w-72 shadow-2xl shadow-black/50">
                  {MORE.map((m) => (
                    <Link key={m.to} to={m.to} className="block py-2.5 px-3 rounded-lg hover:bg-white/5">
                      <div className="text-white text-sm font-medium">{m.label}</div>
                      <div className="text-muted-foreground text-xs">{m.note}</div>
                    </Link>
                  ))}

                  <div className="mt-2 pt-2 border-t border-white/10">
                    <div className="px-3 pb-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Previous Editions</div>
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
              </div>
            </div>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/results-2026"
              className="hidden sm:inline-flex items-center gap-1.5 gradient-blaze text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              2026 Results &amp; Recap
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              ref={toggleRef}
              className="lg:hidden p-2 text-white"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "lg:hidden fixed inset-0 top-0 z-40 transition-all duration-400",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <nav
          aria-label="Mobile"
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm glass-strong p-6 pt-24 flex flex-col gap-1 overflow-y-auto transition-transform duration-400",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="mobile-nav-item" tabIndex={open ? 0 : -1}>{item.label}</Link>
          ))}
          {MORE.map((m) => (
            <Link key={m.to} to={m.to} className="mobile-nav-item" tabIndex={open ? 0 : -1}>{m.label}</Link>
          ))}

          <button
            className="mobile-nav-item flex items-center justify-between"
            onClick={() => setMobilePrev(!mobilePrev)}
            aria-expanded={mobilePrev}
            tabIndex={open ? 0 : -1}
          >
            Previous Editions
            <ChevronDown className={cn("w-4 h-4 transition-transform", mobilePrev && "rotate-180")} />
          </button>
          <div className={cn("overflow-hidden transition-all duration-300", mobilePrev ? "max-h-60" : "max-h-0")}>
            <div className="pl-4 flex flex-col gap-1">
              {PREV_YEARS.map((y) => (
                <Link key={y.year} to={y.to} className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg hover:bg-white/5" tabIndex={open && mobilePrev ? 0 : -1}>
                  <span className="w-1 h-8 rounded-full" style={{ background: y.color }} />
                  <div>
                    <div className="text-white text-sm font-medium">{y.name}</div>
                    <div className="text-muted-foreground text-xs">{y.year} Archive</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/results-2026" className="mt-4 gradient-blaze text-white text-center font-semibold px-4 py-3.5 rounded-xl" tabIndex={open ? 0 : -1}>
            2026 Results &amp; Recap
          </Link>
        </nav>
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
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap",
        active ? "text-white" : "text-foreground/70 hover:text-white"
      )}
    >
      <span
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 20px -4px ${glow}`, background: tint }}
      />
      <span className="relative">{item.label}</span>
      {active && <span className="absolute inset-x-2.5 -bottom-px h-px" style={{ background: line }} />}
    </Link>
  );
}