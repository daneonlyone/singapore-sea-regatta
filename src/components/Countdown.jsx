import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

// Live countdown to 5 September 2026, Singapore time (UTC+8).
const TARGET = new Date("2026-09-05T00:00:00+08:00").getTime();

function getRemaining() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, done: false };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (t.done) {
    return (
      <Reveal className="text-center">
        <div className="glass-blaze inline-block rounded-2xl px-8 py-6">
          <span className="text-2xl font-heading font-black text-gradient-ignite">The regatta has begun.</span>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {UNITS.map(({ key, label }) => (
          <div
            key={key}
            className="flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/30 w-[72px] h-[72px] sm:w-[96px] sm:h-[96px]"
          >
            <span
              className="font-heading font-black text-3xl sm:text-4xl leading-none tabular-nums"
              style={{ color: "#403B72" }}
            >
              {String(t[key]).padStart(2, "0")}
            </span>
            <span
              className="mt-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: "#0066FF" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}