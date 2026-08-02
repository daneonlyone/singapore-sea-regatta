import Reveal from "@/components/Reveal";

// Shared layout for legal pages: title, effective date, and titled sections.
export default function LegalPage({ title, intro, sections, effectiveDate }) {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Singapore Sea Regatta</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white">{title}</h1>
          <p className="mt-6 text-foreground/70 leading-relaxed">{intro}</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 60}>
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{s.heading}</h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, idx) =>
                    Array.isArray(p) ? (
                      <ul key={idx} className="space-y-2 pl-1">
                        {p.map((li) => (
                          <li key={li} className="flex gap-3 text-foreground/70 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full gradient-blaze shrink-0" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={idx} className="text-foreground/70 leading-relaxed">{p}</p>
                    )
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 pt-6 border-t border-white/10 text-sm text-muted-foreground">
            Effective date: {effectiveDate}
          </p>
        </Reveal>
      </div>
    </div>
  );
}