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
  description: "A fixed-scope engagement to solve one operational bottleneck with practical software or automation.",
  alternates: { canonical: "/workflow-sprint" },
};

const useCases = [
  "Quote-to-job tracking",
  "Production status tracking",
  "Admin automation",
  "Reporting automation",
  "Stock visibility tools",
  "Order and customer update workflows",
];

const outcomes = [
  "One clearly scoped workflow solution",
  "Practical internal software or automation",
  "Documentation and handover for your team",
  "Clear next steps for future improvements",
];

export default function WorkflowSprintPage() {
  return (
    <>
      <PageHero
        title="Manufacturing Workflow Sprint"
        summary="A fixed-scope project designed to solve one operational bottleneck quickly with a practical internal tool, dashboard, or automation."
      >
        <Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button>
      </PageHero>
      <SectionWrapper>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="What it is"><p>A focused engagement to replace one fragile workflow with a dependable internal system.</p></Card>
          <Card title="Who it is for"><p>Manufacturing businesses held together by spreadsheets, manual updates, and disconnected tools.</p></Card>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl">Common use cases</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {useCases.map((useCase) => (
            <li key={useCase} className="rounded-lg border border-slate-200 bg-white p-4 text-[var(--color-muted)]">{useCase}</li>
          ))}
        </ul>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="text-4xl">Delivery process</h2>
        <p className="mt-3 max-w-2xl text-[var(--color-muted)]">Simple three-step delivery keeps momentum high and outcomes clear.</p>
        <div className="mt-8"><ProcessSteps /></div>
      </SectionWrapper>
      <SectionWrapper className="bg-slate-50">
        <h2 className="text-4xl">What you get</h2>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-[var(--color-muted)] marker:text-[var(--color-accent-strong)]">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <div className="mt-8"><Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button></div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
