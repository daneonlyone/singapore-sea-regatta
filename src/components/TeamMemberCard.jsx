import { Image } from "@/components/ui/image";

// Square photo card for an organising team member.
export default function TeamMemberCard({ member }) {
  return (
    <div className="glass rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/30 transition-colors">
      <div className="relative aspect-square w-full bg-gradient-to-br from-primary/20 to-ember/10">
        {member.photo ?
        <Image src={member.photo} className="w-full h-full" fittingType="fill" alt={member.name} /> :
        <div className="absolute inset-0 flex items-center justify-center font-heading font-black text-white/70 text-4xl">
            {member.name?.[0] || "?"}
          </div>
        }
      </div>
      <div className="p-5 text-center flex-1 flex flex-col">
        <h4 className="font-bold text-white text-base leading-tight">{member.name}</h4>
        <p className="mt-1 text-xs uppercase tracking-widest text-primary">{member.role}</p>
        {member.bio && <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{member.bio}</p>}
      </div>
    </div>);

}