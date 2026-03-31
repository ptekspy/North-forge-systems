import { Metadata } from "next";
import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export const metadata: Metadata = {
  title: "About",
  description: "NorthForge Systems is a practical, founder-led software company focused on manufacturing operations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NorthForge Systems"
        summary="NorthForge is a founder-led software company focused on practical systems for manufacturing operations."
      />
      <SectionWrapper>
        <div className="max-w-3xl space-y-5 text-lg text-[var(--color-muted)]">
          <p>
            We combine experienced software engineering with no-nonsense systems thinking. The goal is always useful software that makes day-to-day operations clearer and easier to run.
          </p>
          <p>
            Instead of generic digital transformation language, we focus on workflow bottlenecks, reporting clarity, and reducing admin overhead in real manufacturing environments.
          </p>
          <p>
            NorthForge works best with teams who want direct communication, practical delivery, and systems that match how work is actually done.
          </p>
        </div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
