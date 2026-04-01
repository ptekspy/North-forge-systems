import { Metadata } from "next";
import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturing Workflow Sprint",
  description: "A fixed-scope engagement to solve one operational bottleneck with practical software, automation, integrations, dashboards, or selective AI-assisted workflow improvement.",
  alternates: { canonical: "/workflow-sprint" },
};

const useCases = [
  "Quote-to-job tracking from enquiry to shop floor",
  "Production status dashboards with WIP and delay visibility",
  "Reporting and admin automation for recurring operational updates",
  "Stock and reorder visibility tools for purchasing",
  "Order handoffs between commercial, operations, and production",
  "Customer order status visibility and communication workflows",
];

const sprintDeliverables = [
  "One clearly scoped workflow solution",
  "Practical internal software, automation, dashboard, integration, or selective AI-assisted workflow improvement",
  "Implementation guidance and handover notes",
  "Prioritised next-step recommendations",
];

export default function WorkflowSprintPage() {
  return (
    <>
      <PageHero
        title="Manufacturing Workflow Sprint"
        summary="A fixed-scope project designed to replace one messy spreadsheet, inbox-driven process, or admin-heavy workflow with a practical tool, dashboard, automation, integration, or selective AI-assisted operational improvement."
      >
        <Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button>
      </PageHero>
      <SectionWrapper>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="What it is">
            <p>One focused, fixed-scope engagement delivered with clear outcomes, direct senior involvement, and the delivery discipline of a specialist software company.</p>
          </Card>
          <Card title="Who it is for">
            <p>Manufacturing teams running critical workflows through spreadsheets, manual updates, disconnected tools, or repetitive admin that no longer scales cleanly.</p>
          </Card>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl md:text-5xl">Typical sprint use cases</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {useCases.map((useCase) => (
            <li key={useCase} className="rounded-2xl border border-slate-200 bg-white p-4 text-[15px] leading-7 text-[var(--color-primary)] shadow-sm">
              {useCase}
            </li>
          ))}
        </ul>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="text-4xl md:text-5xl">Delivery process</h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">A simple three-step process keeps momentum high and outcomes clear.</p>
        <div className="mt-8"><ProcessSteps /></div>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Why start here</p>
          <p className="mt-3 max-w-4xl text-[15px] leading-7 text-[var(--color-muted)]">
            The Workflow Sprint is designed as a sensible first step: one operational problem, one clear scope, and one practical improvement without turning the first engagement into a large open-ended project. It is the clearest way to test fit with NorthForge while keeping risk, scope, and communication under control.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl md:text-5xl">What you get</h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
          A Workflow Sprint is designed to leave you with a usable improvement, a clear handover, and a practical next step. Where AI is involved, it is only introduced when it supports the workflow clearly and keeps the solution grounded.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {sprintDeliverables.map((deliverable) => (
            <li key={deliverable} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span aria-hidden className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[15px] leading-7 text-[var(--color-primary)]">{deliverable}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button>
        </div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
