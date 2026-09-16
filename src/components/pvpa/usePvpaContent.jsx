import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";

export const PVPA_URL = "https://nvpc.org.sg/programmes/pvpa/";

// Editable via the SiteText block with key "pvpa_2026" — lets the team swap
// "Finalist" for "Winner" after the 7 October 2026 ceremony without a code change.
const DEFAULTS = {
  eyebrow: "PVPA 2026 · City of Good",
  title: "Named a Finalist at the President's Volunteerism & Philanthropy Awards",
  description:
    "IHH Healthcare × Singapore Sea Regatta has been named a Finalist in the City of Good category at the President's Volunteerism & Philanthropy Awards (PVPA) 2026, organised by the National Volunteer & Philanthropy Centre (NVPC)."
};

export default function usePvpaContent() {
  const [content, setContent] = useState(DEFAULTS);

  useEffect(() => {
    base44.entities.SiteText.filter({ key: "pvpa_2026" }).
      then((r) => r[0] && setContent({ ...DEFAULTS, ...stripEmpty(r[0]) })).
      catch(() => {});
  }, []);

  return content;
}

function stripEmpty(record) {
  return Object.fromEntries(Object.entries(record).filter(([, v]) => v !== null && v !== ""));
}