import { Trophy, Medal, Award } from "lucide-react";

const PLACE = {
  1: { icon: Trophy, label: "Champion", color: "#FFB700" },
  2: { icon: Medal, label: "2nd Place", color: "#C7CBD1" },
  3: { icon: Award, label: "3rd Place", color: "#CD7F32" }
};

// One race category with its podium finishers.
export default function PodiumCard({ category, results }) {
  const sorted = [...results].sort((a, b) => a.position - b.position);

  return (
    <div className="glass card-lift rounded-2xl overflow-hidden h-full flex flex-col">
      <div className="px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-2 flex-wrap">
          {sorted[0]?.boat && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded font-mono bg-primary/15 text-primary">{sorted[0].boat}</span>
          )}
          {sorted[0]?.division && (
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{sorted[0].division}</span>
          )}
        </div>
        <h3 className="mt-1.5 font-heading font-bold text-white leading-snug">{category}</h3>
      </div>
      <ul className="p-5 space-y-3 flex-1">
        {sorted.map((r) => {
          const meta = PLACE[r.position] || PLACE[3];
          const Icon = meta.icon;
          return (
            <li key={r.id} className="flex items-start gap-3">
              <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: meta.color }} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-widest" style={{ color: meta.color }}>{meta.label}</div>
                <div className="text-sm font-semibold text-white truncate">{r.team_name}</div>
                {r.country && <div className="text-xs text-muted-foreground">{r.country}</div>}
              </div>
              {r.time && <span className="font-mono text-xs text-foreground/70 shrink-0">{r.time}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}