import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const QUICK = [
  { label: "Head Above Water 2026", to: "/head-above-water-2026" },
  { label: "Race Information", to: "/race-information" },
  { label: "SSR Festival", to: "/ssr-festival" },
  { label: "Athlete Perks & Merch", to: "/athlete-perks-merch" },
  { label: "About SSR", to: "/about" }
];

const PREV = [
  { label: "Pink Wave 2024", to: "/pink-wave-2024" },
  { label: "Rise Above The Waves 2025", to: "/rise-above-the-waves-2025" }
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/singapore-sea-regatta/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sgsearegatta" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/people/Singapore-Sea-Regatta/61581244293472/" },
  { icon: Send, label: "Telegram", href: "https://t.me/s/SGSeaRegatta" }
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-black">
      <div className="absolute inset-x-0 top-0 h-px gradient-ignite opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center">
              <Logo height={44} />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Singapore's premier international dragon boat race and community festival — uniting sport, health and purpose at Marina Bay.
            </p>
            <p className="mt-4 text-gradient-ignite font-heading font-bold text-sm">Paddle With A Purpose</p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-foreground/70 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Previous years */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Previous Years</h4>
            <ul className="space-y-2.5">
              {PREV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-foreground/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Current Edition</h4>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-medium">5 – 6 September 2026</div>
                  <div>Bayfront Event Space, Marina Bay</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:race@sgsearegatta.com" className="hover:text-white transition-colors">race@sgsearegatta.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/70 hover:text-white hover:border-primary/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Singapore Sea Regatta. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}