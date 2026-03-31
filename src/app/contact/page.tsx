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
        <div className="grid gap-4 md:grid-cols-2">
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
      </SectionWrapper>
    </>
  );
}
