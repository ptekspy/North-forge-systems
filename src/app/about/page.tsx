import { Metadata } from "next";
import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Founder-led software and automation partner for manufacturing SMEs in Bradford, West Yorkshire, and the North of England.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NorthForge Systems"
        summary="NorthForge Systems is a founder-led software company focused on practical workflow and operational systems for manufacturing SMEs."
      />
      <SectionWrapper>
        <div className="max-w-4xl space-y-5 text-lg text-[var(--color-muted)]">
          <p>
            NorthForge was founded by <strong className="text-[var(--color-primary)]">Patrick Kenneally</strong>, a senior software engineer focused on building useful internal systems that teams can rely on day to day.
          </p>
          <p>
            The work is grounded in operational reality: untangling spreadsheet-heavy processes, reducing manual admin, and giving teams clearer visibility across quoting, production, and reporting.
          </p>
          <p>
            The approach is direct and practical. We scope clearly, build around real workflows, and deliver software that helps businesses run better without unnecessary complexity.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl">How we work</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Company-first, founder-led"><p>You work directly with the founder while still getting a company-level delivery mindset.</p></Card>
          <Card title="Manufacturing focused"><p>We concentrate on the workflow and information problems that manufacturing SMEs face every week.</p></Card>
          <Card title="Useful software over fluff"><p>No hype language, no theatre—just practical systems that improve process clarity and execution.</p></Card>
        </div>
      </SectionWrapper>

      <BookingCtaBand />
    </>
  );
}
