import { Metadata } from "next";
import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Workflow automation, internal tools, dashboards, integrations, and selective AI-assisted systems for manufacturing SMEs.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        summary="NorthForge delivers practical software systems that reduce admin, improve visibility, and streamline manufacturing operations."
      />
      <SectionWrapper>
        <div className="max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Practical capability mix</p>
          <p className="mt-3 text-lg leading-8 text-[var(--color-muted)]">
            NorthForge solves workflow problems with a sensible mix of software, automation, dashboards, integrations, and selective AI where it genuinely improves process clarity or reduces manual handling.
          </p>
        </div>
        <div className="mt-6 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">A practical AI example</p>
          <p className="mt-3 text-[15px] leading-7 text-[var(--color-muted)]">
            In the right workflow, that might mean using AI to review incoming emails, PDF order documents, or enquiry notes, pull out the key details, and route them into the right internal queue for quoting or follow-up with human oversight still in place.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card title="Workflow Automation">
            <p><strong>Focus:</strong> Simplifying repetitive steps, approvals, and handoffs.</p>
            <p><strong>Typical examples:</strong> approval routing, reporting packs, customer update triggers, and AI-assisted triage or document routing where it reduces admin.</p>
            <p><strong>Outcome:</strong> Less inbox traffic and faster operational flow.</p>
          </Card>
          <Card title="Internal Tools">
            <p><strong>Focus:</strong> Building internal systems around your existing process.</p>
            <p><strong>Typical examples:</strong> quote-to-job tracking, production job boards, status portals, and selective agent-supported internal workflows.</p>
            <p><strong>Outcome:</strong> Better consistency and fewer spreadsheet workarounds.</p>
          </Card>
          <Card title="Dashboards & Reporting">
            <p><strong>Focus:</strong> Creating reliable visibility for operational and commercial decisions.</p>
            <p><strong>Typical examples:</strong> live WIP tracking, overdue job reporting, margin and throughput summaries, plus AI-assisted summaries or exception reporting where useful.</p>
            <p><strong>Outcome:</strong> Clearer decisions without manual spreadsheet wrangling.</p>
          </Card>
          <Card title="Integration & System Improvement">
            <p><strong>Focus:</strong> Connecting your core systems so information flows cleanly.</p>
            <p><strong>Typical examples:</strong> syncing quote, order, and production data across tools, plus practical AI integrations where they reduce manual handling.</p>
            <p><strong>Outcome:</strong> Fewer duplicate updates and stronger data quality.</p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button>
          <Button href="/workflow-sprint" variant="ghost">View Workflow Sprint</Button>
        </div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
