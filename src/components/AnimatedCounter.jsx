import { useEffect, useRef, useState } from "react";

// Animated number counter that triggers when scrolled into view.
export default function AnimatedCounter({ value = 0, suffix = "", duration = 1600, className = "" }) {
  const ref = useRef(null);
  // Starts at the real value so the number is never "0" without JS,
  // for screen readers, or on slow connections.
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Only count up for elements still below the fold — otherwise the already
    // correct number would visibly reset to zero.
    const belowFold = el.getBoundingClientRect().top > window.innerHeight;
    if (reduce || !belowFold) {
      setDisplay(value);
      started.current = true;
      return;
    }
    setDisplay(0);

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(value * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && run(), { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}