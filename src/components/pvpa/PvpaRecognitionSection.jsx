import { Award, ExternalLink, CalendarCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";
import usePvpaContent, { PVPA_URL } from "@/components/pvpa/usePvpaContent";

const GOLD = "#FFB700";
const LAVENDER = "#9b93ff";

const REASONS = [
{
  t: "A true cross-sector partnership",
  d: "The City of Good award recognises partnerships that bring diverse strengths together — here, a healthcare group, a sporting federation, corporate partners and community organisations working as one."
},
{
  t: "Sport channelled into social good",
  d: "Head Above Water turned two days of elite dragon boat racing at Marina Bay into a national platform for dementia awareness and caregiver support."
},
{
  t: "Community at the centre",
  d: "Beyond the race lanes, the SSR Festival brought healthcare institutions, caregivers and the public together to learn, connect and build a more dementia-friendly Singapore."
}];


// PVPA 2026 recognition — celebratory gold treatment inside the HAW purple theme.
export default function PvpaRecognitionSection() {
  const content = usePvpaContent();

  return (
    <section id="recognition" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div
            className="relative rounded-[2rem] overflow-hidden border p-8 sm:p-12"
            style={{ background: "rgba(37,3,45,0.6)", borderColor: "rgba(255,183,0,0.28)", boxShadow: "0 0 60px -30px rgba(255,183,0,0.4)" }}>

            {/* Decorative gold glow */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,183,0,0.18), transparent 70%)" }}
              aria-hidden="true" />


            <div className="relative grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] border"
                  style={{ color: GOLD, borderColor: "rgba(255,183,0,0.45)", background: "rgba(255,183,0,0.08)" }}>

                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  {content.eyebrow}
                </span>

                <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white leading-[1.1]">
                  {content.title}
                </h2>

                <p className="mt-5 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                  {content.description}
                </p>

                <div
                  className="mt-6 rounded-2xl px-5 py-4 flex items-start gap-3 border"
                  style={{ background: "rgba(255,183,0,0.06)", borderColor: "rgba(255,183,0,0.22)" }}>

                  <CalendarCheck className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GOLD }} aria-hidden="true" />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                    Winners are announced at the PVPA 2026 award ceremony on <strong className="text-white">7 October 2026</strong>, graced by the President of the Republic of Singapore.
                  </p>
                </div>

                <a
                  href={PVPA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl border transition-all hover:-translate-y-0.5"
                  style={{ color: GOLD, borderColor: "rgba(255,183,0,0.45)", background: "rgba(255,183,0,0.08)" }}>

                  About the PVPA
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="lg:col-span-5 space-y-4">
                {content.image &&
                <div className="rounded-2xl overflow-hidden border mb-6" style={{ borderColor: "rgba(255,183,0,0.25)" }}>
                    <Image
                    src={content.image}
                    alt="IHH Healthcare × Singapore Sea Regatta recognised at the President's Volunteerism & Philanthropy Awards 2026"
                    className="w-full aspect-[4/3]"
                    fittingType="fill"
                    focalPointX={typeof content.image_focal_x === "number" ? content.image_focal_x : 0.5}
                    focalPointY={typeof content.image_focal_y === "number" ? content.image_focal_y : 0.5} />

                  </div>
                }
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: LAVENDER }}>
                  Why we were shortlisted
                </p>
                {REASONS.map((r, i) =>
                <Reveal key={r.t} delay={i * 100}>
                    <div className="rounded-2xl p-5 border" style={{ background: "rgba(37,3,45,0.65)", borderColor: "rgba(155,147,255,0.2)" }}>
                      <h3 className="font-semibold text-white text-sm">{r.t}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{r.d}</p>
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}