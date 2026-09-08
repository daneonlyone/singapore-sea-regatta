import { Link, useLocation } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

const SUGGESTIONS = [
  { label: "Home", to: "/" },
  { label: "2026 Results & Recap", to: "/results-2026" },
  { label: "Gallery", to: "/gallery" },
  { label: "About SSR", to: "/about-ssr" }
];

export default function PageNotFound() {
  const location = useLocation();

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-24">
      <div className="w-full max-w-xl text-center">
        <Compass className="w-10 h-10 text-primary mx-auto mb-6" aria-hidden="true" />
        <p className="font-heading font-black text-6xl sm:text-7xl text-gradient-ignite">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-white">Off course</h1>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          We couldn't find <span className="font-mono text-white">{location.pathname}</span>. It may have moved, or never existed — let's get you back on the water.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="glass card-lift rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-white inline-flex items-center gap-1.5"
            >
              {s.label}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}