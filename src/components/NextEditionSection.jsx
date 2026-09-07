import { CalendarHeart } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import InterestForm from "@/components/InterestForm";

// "See you in 2027" expression-of-interest block.
export default function NextEditionSection() {
  return (
    <section id="next-edition" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          align="center"
          eyebrow="See You In 2027"
          title={<>The bay will be <span className="text-gradient-ignite">waiting.</span></>}
          description="Registration for the next edition opens in the new year. Tell us what you're interested in and we'll make sure you hear first — crews, sponsors, booth partners and volunteers all welcome."
        />
        <Reveal className="mt-10" delay={120}>
          <div className="flex items-center justify-center gap-2 mb-6 text-sm text-muted-foreground">
            <CalendarHeart className="w-4 h-4 text-primary" aria-hidden="true" />
            Marina Bay · September 2027
          </div>
          <InterestForm />
        </Reveal>
      </div>
    </section>
  );
}