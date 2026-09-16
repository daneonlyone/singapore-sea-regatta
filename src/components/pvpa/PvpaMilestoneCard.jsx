import { Award, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import usePvpaContent, { PVPA_URL } from "@/components/pvpa/usePvpaContent";

const GOLD = "#FFB700";

// Compact PVPA recognition milestone for the impact area.
export default function PvpaMilestoneCard() {
  const content = usePvpaContent();

  return (
    <Reveal>
      <a
        href={PVPA_URL}
        target="_blank"
        rel="noreferrer"
        className="group card-lift block rounded-2xl p-6 sm:p-8 border"
        style={{ background: "rgba(255,183,0,0.05)", borderColor: "rgba(255,183,0,0.25)" }}>

        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div
            className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border"
            style={{ background: "rgba(255,183,0,0.1)", borderColor: "rgba(255,183,0,0.3)" }}>

            <Award className="w-6 h-6" style={{ color: GOLD }} aria-hidden="true" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
              National Recognition · {content.eyebrow}
            </span>
            <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-white leading-snug">{content.title}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              {content.description}
            </p>
          </div>
          <ExternalLink
            className="w-4 h-4 shrink-0 hidden sm:block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            style={{ color: GOLD }}
            aria-hidden="true" />

        </div>
      </a>
    </Reveal>);

}