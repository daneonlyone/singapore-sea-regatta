import { Sparkles } from "lucide-react";

// Intentional-looking empty state for content the team populates later.
export default function PlaceholderPanel({ icon: Icon = Sparkles, title, body }) {
  return (
    <div className="glass rounded-2xl p-10 sm:p-14 text-center">
      <Icon className="w-9 h-9 text-primary mx-auto mb-4" aria-hidden="true" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {body && <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">{body}</p>}
    </div>
  );
}