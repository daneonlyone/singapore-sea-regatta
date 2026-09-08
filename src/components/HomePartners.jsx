import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import PartnersSection from "@/components/PartnersSection";

// Fetches sponsors only once mounted — kept inside LazySection so the
// homepage's below-fold partner data isn't requested on first paint.
export default function HomePartners() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    base44.entities.Sponsor.list("order", 100).then(setSponsors).catch(() => {});
  }, []);

  return (
    <PartnersSection
      sponsors={sponsors}
      cta={
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 gradient-blaze text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
        >
          Partner with us in 2027 <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      }
    />
  );
}