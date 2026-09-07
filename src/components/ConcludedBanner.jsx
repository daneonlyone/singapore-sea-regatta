import { Link } from "react-router-dom";
import { Flag, ArrowUpRight } from "lucide-react";

// Subtle honesty banner shown on pages whose content is now a historical record.
export default function ConcludedBanner({ year = "2026", label = "edition" }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24">
      <div className="glass card-lift rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2.5 flex-1">
          <Flag className="w-4 h-4 text-primary shrink-0" />
          <p className="text-sm text-foreground/80">
            <span className="font-semibold text-white">{year} {label} — concluded.</span>{" "}
            This page remains available as a record of the {year} event.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          <Link
            to="/results-2026"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-3.5 py-2 rounded-lg gradient-blaze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View Results & Recap <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white px-3.5 py-2 rounded-lg border border-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}