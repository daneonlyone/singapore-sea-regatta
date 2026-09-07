import { Link } from "react-router-dom";
import { Trophy, Images, HeartHandshake, ArrowRight } from "lucide-react";

const LINKS = [
  { to: "/results-2026", icon: Trophy, label: "Results & Recap", note: "Champions across every category" },
  { to: "/gallery", icon: Images, label: "Photo & Video Gallery", note: "Relive two days at Marina Bay" },
  { to: "/results-2026#impact", icon: HeartHandshake, label: "Our 2026 Impact", note: "Where your paddling went" }
];

// Post-event replacement for the pre-event countdown.
export default function RecapPanel() {
  return (
    <div className="glass-blaze rounded-2xl p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Event Concluded · 6 September 2026</span>
      </div>
      <h4 className="font-heading font-bold text-white text-lg">That's a wrap on Head Above Water</h4>
      <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
        Two days, one bay, and a whole community keeping its head above water. Here's how it unfolded.
      </p>

      <div className="mt-5 space-y-2">
        {LINKS.map(({ to, icon: Icon, label, note }) => (
          <Link
            key={to}
            to={to}
            className="group flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Icon className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-white">{label}</span>
              <span className="block text-xs text-muted-foreground truncate">{note}</span>
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}