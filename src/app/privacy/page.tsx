import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for NorthForge Systems website and discovery call enquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        summary="How NorthForge Systems handles personal information submitted through contact enquiries and discovery call bookings."
      />
      <SectionWrapper>
        <div className="max-w-4xl space-y-8 text-[var(--color-muted)]">
          <section>
            <h2 className="text-3xl text-[var(--color-primary)]">Who we are</h2>
            <p className="mt-3">
              NorthForge Systems is a UK-based software company serving manufacturing SMEs. For privacy queries, contact us at{" "}
              <Link href={`mailto:${siteConfig.email}`} className="text-[var(--color-primary)] underline">{siteConfig.email}</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-[var(--color-primary)]">Information we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[var(--color-accent-strong)]">
              <li>Name, email address, company details, and message content when you contact us.</li>
              <li>Information you provide when booking a discovery call through Calendly.</li>
              <li>Basic website usage information such as page requests and browser/device data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl text-[var(--color-primary)]">How we use information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[var(--color-accent-strong)]">
              <li>To respond to enquiries and discuss potential projects.</li>
              <li>To arrange and run discovery calls.</li>
              <li>To improve website performance, quality, and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl text-[var(--color-primary)]">Calendly and third parties</h2>
            <p className="mt-3">
              We use Calendly for call scheduling. When you book a call, your information is processed by Calendly under their privacy terms in addition to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-[var(--color-primary)]">Data retention and your rights</h2>
            <p className="mt-3">
              We keep enquiry and project-related information only for as long as needed for communication, delivery, and legal/accounting obligations. You can request access, correction, or deletion of your personal data by emailing {siteConfig.email}.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-[var(--color-primary)]">Updates</h2>
            <p className="mt-3">This policy may be updated from time to time. Last updated: 31 March 2026.</p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}
