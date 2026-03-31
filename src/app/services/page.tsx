import { Metadata } from "next";
import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Workflow automation, internal tools, and reporting systems for manufacturing SMEs.",
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
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Workflow Automation">
            <p><strong>Focus:</strong> Simplifying repetitive steps, approvals, and handoffs.</p>
            <p><strong>Typical examples:</strong> approval routing, reporting packs, customer update triggers.</p>
            <p><strong>Outcome:</strong> Less inbox traffic and faster operational flow.</p>
          </Card>
          <Card title="Internal Tools">
            <p><strong>Focus:</strong> Building internal systems around your existing process.</p>
            <p><strong>Typical examples:</strong> quote-to-job tracking, production job boards, status portals.</p>
            <p><strong>Outcome:</strong> Better consistency and fewer spreadsheet workarounds.</p>
          </Card>
          <Card title="Dashboards & Reporting">
            <p><strong>Focus:</strong> Creating reliable visibility for operational and commercial decisions.</p>
            <p><strong>Typical examples:</strong> live WIP tracking, overdue job reporting, margin and throughput summaries.</p>
            <p><strong>Outcome:</strong> Clearer decisions without manual spreadsheet wrangling.</p>
          </Card>
          <Card title="Integration & System Improvement">
            <p><strong>Focus:</strong> Connecting your core systems so information flows cleanly.</p>
            <p><strong>Typical examples:</strong> syncing quote, order, and production data across tools.</p>
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
