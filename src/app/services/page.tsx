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
        summary="NorthForge delivers practical software systems that reduce admin, improve visibility, and support smoother manufacturing operations."
      />
      <SectionWrapper>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Workflow Automation">
            <p><strong>What it is:</strong> Simplifying admin-heavy process steps and automating repeatable tasks.</p>
            <p><strong>Who it helps:</strong> Teams delayed by approvals, inbox handoffs, and manual updates.</p>
            <p><strong>Typical examples:</strong> Quoting approvals, job update flows, customer status communications.</p>
          </Card>
          <Card title="Internal Tools">
            <p><strong>What it is:</strong> Bespoke internal systems for quoting, job tracking, and operational coordination.</p>
            <p><strong>Who it helps:</strong> Businesses relying on fragile spreadsheet-based workflows.</p>
            <p><strong>Typical examples:</strong> Quote-to-job tracking, shop-floor status capture, operational portals.</p>
          </Card>
          <Card title="Dashboards & Reporting">
            <p><strong>What it is:</strong> Reporting and dashboard tools built around operational decision-making.</p>
            <p><strong>Who it helps:</strong> Teams who need clear visibility without manual spreadsheet consolidation.</p>
            <p><strong>Typical examples:</strong> Production dashboards, KPI summaries, admin performance reporting.</p>
          </Card>
          <Card title="Integration & System Improvement">
            <p><strong>What it is:</strong> Improving data flow between existing tools and reducing duplicated admin effort.</p>
            <p><strong>Who it helps:</strong> Businesses with disconnected software and unclear handoffs.</p>
            <p><strong>Typical examples:</strong> Tool-to-tool data sync, status handoff automation, process simplification.</p>
          </Card>
        </div>
        <div className="mt-8"><Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button></div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
