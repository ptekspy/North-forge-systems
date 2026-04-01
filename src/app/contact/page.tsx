import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a discovery call with NorthForge Systems to discuss workflow automation and internal tools.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        summary="If you are dealing with spreadsheet chaos, reporting friction, or admin-heavy operational workflows, let's talk."
      >
        <Button href={siteConfig.calendlyUrl} variant="secondary">Book a Discovery Call</Button>
      </PageHero>
      <SectionWrapper>
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
          The clearest next step is usually a short discovery call. If you would rather send context first, email works just as well.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card title="Book directly via Calendly">
            <p>The fastest route is to book a discovery call directly.</p>
            <div className="mt-3"><Button href={siteConfig.calendlyUrl} variant="secondary">Open Calendly</Button></div>
          </Card>
          <Card title="Prefer email?">
            <p>If you want to share context first, email us and we will come back with suitable next steps.</p>
            <p className="mt-3">
              <Link href={`mailto:${siteConfig.email}`} className="font-semibold text-[var(--color-primary)] underline">
                {siteConfig.email}
              </Link>
            </p>
          </Card>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Before we speak</p>
          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--color-muted)]">
            A brief note about the workflow, the teams involved, and where the current friction shows up is enough to make the first conversation useful.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
