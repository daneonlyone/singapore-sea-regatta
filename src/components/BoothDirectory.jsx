import { GraduationCap, ShoppingBag, Utensils, HeartPulse } from "lucide-react";
import Reveal from "@/components/Reveal";

const GROUPS = [
  {
    title: "Educational Talks",
    icon: GraduationCap,
    items: ["IHH", "IGA", "NNI", "NNI Fund", "Brain Bank", "Yong En", "NTUC Health", "Dementia SG", "Thomson Medical", "MSF", "Easmed", "Red Cross", "PassionWave"]
  },
  {
    title: "Retail Booths",
    icon: ShoppingBag,
    items: ["Sanag", "Sunday Shades", "Airdry", "Aria", "Hornet", "Banana Boat", "Thunderwear", "Dr.ProBio"]
  },
  {
    title: "Food & Beverage",
    icon: Utensils,
    items: ["Polar Puff", "House of Seafood", "XO Cafe"]
  },
  {
    title: "Sports Recovery Zone",
    icon: HeartPulse,
    items: ["Parkway Rehab"]
  }
];

export default function BoothDirectory() {
  return (
    <div className="mt-8 grid sm:grid-cols-2 gap-4">
      {GROUPS.map((g, i) => (
        <Reveal key={g.title} delay={i * 60}>
          <div className="glass rounded-2xl p-6 h-full">
            <h4 className="font-bold text-white flex items-center gap-2">
              <g.icon className="w-4 h-4 text-primary" />
              {g.title}
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((n) => (
                <span key={n} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-foreground/85">{n}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}