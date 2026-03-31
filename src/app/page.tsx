import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

const painPoints = [
  "Disconnected spreadsheets across teams",
  "Email-heavy approvals and internal handoffs",
  "Fragile reporting with poor operational visibility",
  "Manual admin and duplicated data entry",
  "Workflow bottlenecks slowing quoting and delivery",
];

const workflowExamples = [
  "Quote-to-job tracking from enquiry through delivery",
  "Production status dashboards for daily operational visibility",
  "Reporting and admin automation that removes repetitive updates",
  "Stock and reorder visibility tools for planning and purchasing",
  "Approval and handoff workflows across office and shop-floor teams",
  "Customer order and status update workflows",
];

export default function HomePage() {
  return (
    <>
      <SectionWrapper className="pt-18 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-strong)]">NorthForge Systems</p>
        <h1 className="mt-4 max-w-4xl font-heading text-5xl leading-tight md:text-7xl">Software and automation for manufacturing SMEs.</h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--color-muted)]">
          We replace spreadsheet, email, and admin-heavy workflows with practical internal tools, dashboards, and operational systems.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button>
          <Button href="/workflow-sprint" variant="ghost">View Workflow Sprint</Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl">Where operational friction shows up</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {painPoints.map((point) => (
            <li key={point} className="rounded-lg border border-slate-200 bg-white p-4 text-[var(--color-muted)]">{point}</li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl">Typical workflows we improve</h2>
        <p className="mt-4 max-w-3xl text-[var(--color-muted)]">
          We focus on practical workflow improvements that remove bottlenecks, improve visibility, and reduce admin effort for manufacturing teams.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {workflowExamples.map((example) => (
            <li key={example} className="rounded-lg border border-slate-200 bg-white p-4 text-[var(--color-muted)]">{example}</li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl">Services built for real manufacturing workflows</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Workflow Automation"><p>Simplify approvals, quoting, and repetitive admin steps so work keeps moving.</p></Card>
          <Card title="Internal Tools"><p>Create quoting systems, job tracking tools, and operational portals your team will use.</p></Card>
          <Card title="Dashboards & Reporting"><p>Get clear production and admin visibility with reporting designed for daily decisions.</p></Card>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl">Offer Spotlight: Manufacturing Workflow Sprint</h2>
        <p className="mt-4 max-w-3xl text-[var(--color-muted)]">
          A fixed-scope project to replace one messy spreadsheet, email, or admin-heavy workflow with a practical internal software solution.
        </p>
        <div className="mt-6"><Button href="/workflow-sprint" variant="primary">See the Workflow Sprint</Button></div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl">Grounded, local, and delivery-focused</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card title="A practical specialist partner">
            <p>Founder-led by Patrick Kenneally, NorthForge is based in Bradford and works directly with manufacturing SMEs across West Yorkshire and the wider North.</p>
          </Card>
          <Card title="Clear scope and direct delivery">
            <p>Engagements are fixed-scope where possible, commercially practical, and focused on useful outcomes rather than consultancy theatre.</p>
          </Card>
        </div>
        <div className="mt-8"><Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button></div>
      </SectionWrapper>

      <BookingCtaBand />
    </>
  );
}
