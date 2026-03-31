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
            <p><strong>What it is:</strong> Process simplification and admin automation.</p>
            <p><strong>Who it helps:</strong> Teams stuck in approval and inbox delays.</p>
            <p><strong>Problems solved:</strong> Quoting bottlenecks, repetitive updates, and manual handoffs.</p>
          </Card>
          <Card title="Internal Tools">
            <p><strong>What it is:</strong> Bespoke internal systems for quoting, job tracking, and operations.</p>
            <p><strong>Who it helps:</strong> Businesses with fragmented tools and spreadsheets.</p>
            <p><strong>Problems solved:</strong> Disconnected information and poor workflow consistency.</p>
          </Card>
          <Card title="Dashboards & Reporting">
            <p><strong>What it is:</strong> Operational and production dashboards that surface useful metrics.</p>
            <p><strong>Who it helps:</strong> Leaders who need reliable visibility without spreadsheet wrangling.</p>
            <p><strong>Problems solved:</strong> Fragile reporting and delayed decision-making.</p>
          </Card>
          <Card title="Integration & System Improvement">
            <p><strong>What it is:</strong> Connecting core business tools and improving data flow.</p>
            <p><strong>Who it helps:</strong> Teams duplicating admin across disconnected systems.</p>
            <p><strong>Problems solved:</strong> Manual transfers, duplication, and process confusion.</p>
          </Card>
        </div>
        <div className="mt-8"><Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button></div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
