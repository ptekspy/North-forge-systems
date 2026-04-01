import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

const painPoints = [
  "Disconnected spreadsheets across teams",
  "Email-heavy workflows and approval delays",
  "Fragile reporting with poor operational visibility",
  "Manual admin and duplicated data entry",
  "Workflow bottlenecks that slow delivery",
];

const improvedWorkflows = [
  {
    title: "Quote-to-job tracking",
    detail: "Track jobs from initial enquiry through quote approval, planning, and production handover without spreadsheet chasing.",
  },
  {
    title: "Production status dashboards",
    detail: "Give planners and team leads a live view of WIP, blocked jobs, and overdue work across the shop floor.",
  },
  {
    title: "Reporting and admin automation",
    detail: "Automate recurring operational reports and admin updates so teams spend less time compiling and rekeying data.",
  },
  {
    title: "Stock and reorder visibility",
    detail: "Surface low-stock risk and reorder needs earlier so purchasing decisions are based on current operational demand.",
  },
  {
    title: "Approvals and internal handoffs",
    detail: "Replace inbox bottlenecks with clear approval flows between commercial, operations, and production teams.",
  },
  {
    title: "Customer order and status visibility",
    detail: "Provide clear order status updates so account and customer teams can communicate confidently and consistently.",
  },
];

const trustPoints = [
  "Founder-led delivery from Patrick Kenneally, founder and systems builder",
  "Based in Bradford, West Yorkshire",
  "Focused on software and automation for manufacturing SMEs",
  "Selective AI-assisted workflows and integrations where they reduce repetitive admin",
  "Practical fixed-scope delivery with direct communication",
];

export default function HomePage() {
  return (
    <>
      <SectionWrapper className="pt-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">NorthForge Systems</p>
        <h1 className="mt-4 max-w-5xl font-heading text-5xl leading-tight md:text-7xl">Software and automation for manufacturing SMEs.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
          We replace spreadsheet, email, and admin-heavy workflows with practical internal tools, dashboards, and operational systems.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button>
          <Button href="/workflow-sprint" variant="ghost">View Workflow Sprint</Button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
          <li className="rounded-full border border-slate-200 bg-white px-4 py-2">Founder-led delivery</li>
          <li className="rounded-full border border-slate-200 bg-white px-4 py-2">Bradford, West Yorkshire</li>
          <li className="rounded-full border border-slate-200 bg-white px-4 py-2">Built for manufacturing SMEs</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl md:text-5xl">Where operational friction shows up</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {painPoints.map((point) => (
            <li key={point} className="rounded-2xl border border-slate-200 bg-white p-5 text-[15px] font-medium leading-7 text-[var(--color-primary)] shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl">Typical workflows we improve</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
          These are the types of day-to-day operational workflows we are typically asked to fix for manufacturing teams.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {improvedWorkflows.map((workflow) => (
            <li key={workflow.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-[var(--color-primary)]">{workflow.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[var(--color-muted)]">{workflow.detail}</p>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl">Services built for real manufacturing workflows</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card title="Workflow Automation"><p>Simplify approvals, quoting, repetitive admin, and AI-assisted workflow steps where they create real operational value.</p></Card>
          <Card title="Internal Tools"><p>Create quoting systems, job tracking tools, operational portals, and selective agent-supported internal tools your team will actually use.</p></Card>
          <Card title="Dashboards & Reporting"><p>Get clear production visibility, stronger reporting, and AI-assisted summaries where they support better daily decisions.</p></Card>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl md:text-5xl">Built for practical delivery</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card title="A grounded partner for manufacturers">
            <ul className="space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Start with a clear first step">
            <p>
              Most new engagements begin with our Manufacturing Workflow Sprint: one focused project to replace one bottleneck with a practical tool, dashboard, automation, integration, or selective AI-assisted process improvement.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/workflow-sprint" variant="primary">See the Workflow Sprint</Button>
              <Button href={siteConfig.calendlyUrl} variant="ghost">Book a Discovery Call</Button>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      <BookingCtaBand />
    </>
  );
}
