import { Metadata } from "next";
import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export const metadata: Metadata = {
  title: "About",
  description: "NorthForge Systems is a founder-led software company focused on practical systems for manufacturing operations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NorthForge Systems"
        summary="NorthForge is a founder-led software company that builds practical internal software and automation for manufacturing SMEs."
      />
      <SectionWrapper>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Founder-led and practical">
            <p>
              NorthForge Systems is led by Patrick Kenneally, a Senior Software Engineer focused on designing useful systems for real operational teams.
            </p>
            <p>
              The emphasis is straightforward: understand how work actually moves through a business, remove bottlenecks, and ship software that people use.
            </p>
          </Card>
          <Card title="Built for manufacturing SMEs">
            <p>
              We work with manufacturing businesses where spreadsheets, inboxes, and manual admin have become the default operating system.
            </p>
            <p>
              Our job is to replace that fragility with practical workflow tools, dashboards, and automation that improve control without adding complexity.
            </p>
          </Card>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl">How we work</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-[var(--color-muted)]">
          <p>
            We keep delivery direct and commercial: clear scope, clear communication, and systems built around your day-to-day operations.
          </p>
          <p>
            NorthForge is not a branding exercise or innovation theatre. We focus on software that removes delays, improves visibility, and reduces admin load where it matters.
          </p>
          <p>
            If you want practical modernisation without fluff, book a discovery call and we will identify the highest-value workflow to improve first.
          </p>
        </div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
