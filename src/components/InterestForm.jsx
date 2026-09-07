import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const TYPES = ["Team Registration", "Sponsorship", "Festival Booth", "Volunteering", "General Updates"];

// 2027 expression of interest capture.
export default function InterestForm() {
  const [form, setForm] = useState({ name: "", email: "", team_name: "", interest_type: TYPES[0], message: "" });
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setState("saving");
    setError("");
    try {
      await base44.entities.InterestSubmission.create({ ...form, edition: "2027" });
      setState("done");
    } catch {
      setState("idle");
      setError("Something went wrong. Please try again, or email us at admin@sgsearegatta.com.");
    }
  };

  if (state === "done") {
    return (
      <div className="glass-blaze rounded-3xl p-8 sm:p-12 text-center">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-white">You're on the list for 2027</h3>
        <p className="mt-2 text-foreground/70 max-w-md mx-auto">
          Thank you — we'll be in touch as soon as registration and partnership details for the next edition are confirmed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" required>
          <input required value={form.name} onChange={set("name")} className={INPUT} autoComplete="name" />
        </Field>
        <Field label="Email" required>
          <input required type="email" value={form.email} onChange={set("email")} className={INPUT} autoComplete="email" />
        </Field>
        <Field label="Team, club or organisation">
          <input value={form.team_name} onChange={set("team_name")} className={INPUT} />
        </Field>
        <Field label="I'm interested in" required>
          <select required value={form.interest_type} onChange={set("interest_type")} className={INPUT}>
            {TYPES.map((t) => <option key={t} value={t} className="bg-card">{t}</option>)}
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Anything else we should know?">
          <textarea rows={3} value={form.message} onChange={set("message")} className={`${INPUT} resize-none`} />
        </Field>
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={state === "saving"}
        className="mt-6 inline-flex items-center gap-2 gradient-blaze text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {state === "saving" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {state === "saving" ? "Sending..." : "Register My Interest"}
      </button>
    </form>
  );
}

const INPUT =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}