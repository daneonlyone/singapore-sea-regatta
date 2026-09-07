import { useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

// Feature callout: every pull-up completed at the regatta = $1 donated to our beneficiaries.
// Total count is stored as a Statistic record with year "<year>-pullups".
export default function PullUpChallenge({ year = "2026" }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    base44.entities.Statistic.filter({ year: `${year}-pullups` }, "order", 5).
      then((r) => setCount(r[0]?.value ?? 0)).
      catch(() => setCount(0));
  }, [year]);

  return (
    <Reveal>
      <div className="glass-blaze rounded-3xl p-8 sm:p-10 lg:p-12">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/25">
              <Dumbbell className="w-3 h-3" aria-hidden="true" /> Pull-Up Challenge
            </div>
            <div className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-heading font-black leading-none text-gradient-ignite">
              {count === null ? "—" : <AnimatedCounter value={count} />}
            </div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Pull-ups completed
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Every single rep put a dollar behind our beneficiaries.
            </h3>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              At the regatta, anyone could step up to the bar. For every pull-up completed, Singapore
              Sea Regatta and our donors pledged <span className="text-white font-semibold">$1</span> towards
              dementia awareness and caregiver support — turning raw effort on the shore into real funding
              for the people who need it.
            </p>
            {count > 0 && (
              <div className="mt-6 inline-flex items-baseline gap-2 glass rounded-xl px-5 py-3">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Raised through pull-ups</span>
                <span className="text-2xl font-heading font-black text-white">
                  SGD <AnimatedCounter value={count} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}