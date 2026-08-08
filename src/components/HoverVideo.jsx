import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// Autoplays (muted) when scrolled into view; hover reveals play/pause + mute controls.
export default function HoverVideo({ src, poster, className = "" }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [unplayable, setUnplayable] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => { if (el.readyState >= 2 && el.videoWidth === 0) setUnplayable(true); };
    check();
    const timer = setInterval(check, 1000);
    setTimeout(() => clearInterval(timer), 6000);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); clearInterval(timer); };
  }, []);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    el.paused ? el.play().catch(() => {}) : el.pause();
  };

  const toggleMute = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <div className={`group/video relative ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={(e) => setUnplayable(e.currentTarget.videoWidth === 0)}
        onError={() => setUnplayable(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {unplayable && poster && (
        <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover z-10" />
      )}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}