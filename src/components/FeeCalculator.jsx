import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

const ATHLETE_FEE = 18;
const DB12_FEE = 350;
const DB22_FEE = 600;

const TEAM_TYPES = [
  { value: "standard", label: "Standard / Local Team" },
  { value: "international", label: "International Team" },
  { value: "youth", label: "Youth Team" },
  { value: "tertiary", label: "Tertiary Team" },
  { value: "adaptive", label: "Adaptive Team" }
];

const DEFAULT_NOTE =
  "Athlete fees are charged once per paddler regardless of the number of race categories entered. This calculator provides a maximum estimated registration cost.";

function compute({ teamType, paddlers, db12, db22, youthAthleteFee }) {
  let athleteCost = paddlers * ATHLETE_FEE;
  let db12Cost = db12 * DB12_FEE;
  let db22Cost = db22 * DB22_FEE;
  let note = DEFAULT_NOTE;

  if (teamType === "international") {
    db12Cost = Math.min(db12, 1) * DB12_FEE * 0.5 + Math.max(db12 - 1, 0) * DB12_FEE;
    db22Cost = Math.min(db22, 1) * DB22_FEE * 0.5 + Math.max(db22 - 1, 0) * DB22_FEE;
    note = "International teams receive 50% off 1 DB12 crew and 1 DB22 crew. Subsequent crews are charged at full price.";
  }

  if (teamType === "youth") {
    db12Cost = 0;
    db22Cost = 0;
    athleteCost = youthAthleteFee ? paddlers * ATHLETE_FEE : 0;
    note = "Youth teams have no crew fees. Athlete fees are optional if paddlers would like to receive the race jersey and goodie bag.";
  }

  if (teamType === "tertiary") {
    note = "Note: Tertiary race categories receive 50% off crew fees. This calculator provides a maximum estimated registration cost and does not include category-specific discounts.";
  }

  if (teamType === "adaptive") {
    athleteCost = paddlers * ATHLETE_FEE * 0.5;
    note = "Note: Adaptive paddlers receive 50% off athlete fees. Adaptive race categories also receive 50% off crew fees. This calculator provides a maximum estimated registration cost and does not include category-specific crew fee discounts.";
  }

  return { athleteCost, db12Cost, db22Cost, total: athleteCost + db12Cost + db22Cost, note };
}

const money = (n) => `SGD ${n.toLocaleString()}`;

export default function FeeCalculator() {
  const [teamType, setTeamType] = useState("standard");
  const [paddlers, setPaddlers] = useState(0);
  const [db12, setDb12] = useState(0);
  const [db22, setDb22] = useState(0);
  const [youthAthleteFee, setYouthAthleteFee] = useState(false);

  const r = useMemo(
    () => compute({ teamType, paddlers, db12, db22, youthAthleteFee }),
    [teamType, paddlers, db12, db22, youthAthleteFee]
  );

  const field = "w-full mt-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/60 transition-colors";

  return (
    <div className="glass rounded-2xl p-6 sm:p-8 grid lg:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-white">Registration Cost Estimator</h3>
        </div>

        <label className="block text-sm font-semibold text-foreground/80">
          Team Category
          <select value={teamType} onChange={(e) => setTeamType(e.target.value)} className={field}>
            {TEAM_TYPES.map((t) => (
              <option key={t.value} value={t.value} className="bg-[#141414]">{t.label}</option>
            ))}
          </select>
        </label>

        <NumField label="Number of paddlers" value={paddlers} onChange={setPaddlers} className={field} />
        <NumField label="Number of DB12 crews" value={db12} onChange={setDb12} className={field} />
        <NumField label="Number of DB22 crews" value={db22} onChange={setDb22} className={field} />

        {teamType === "youth" && (
          <label className="mt-4 flex items-start gap-2.5 text-sm text-foreground/80">
            <input
              type="checkbox"
              checked={youthAthleteFee}
              onChange={(e) => setYouthAthleteFee(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-primary"
            />
            Include optional athlete fee for race jersey and goodie bag
          </label>
        )}
      </div>

      <div className="flex flex-col">
        <div className="glass-blaze rounded-2xl p-6">
          <Row label="Athlete Fees" value={money(r.athleteCost)} />
          <Row label="DB12 Registration" value={money(r.db12Cost)} />
          <Row label="DB22 Registration" value={money(r.db22Cost)} />
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Maximum Estimated Cost</div>
            <div className="mt-1 text-3xl font-heading font-black text-gradient-ignite">{money(r.total)}</div>
          </div>
        </div>
        <p className="mt-4 text-xs text-foreground/70 leading-relaxed">{r.note}</p>
        <p className="mt-2 text-xs italic text-muted-foreground leading-relaxed">
          This calculator is intended as a guide only. Final fees are subject to category eligibility, discounts, and race organiser verification.
        </p>
      </div>
    </div>
  );
}

function NumField({ label, value, onChange, className }) {
  return (
    <label className="block mt-4 text-sm font-semibold text-foreground/80">
      {label}
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className={className}
      />
    </label>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}