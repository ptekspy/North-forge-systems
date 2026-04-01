import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for NorthForge Systems covering website enquiries and Calendly bookings.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        summary="This policy explains what data NorthForge Systems collects through this website and how we use it."
      />
      <SectionWrapper className="bg-slate-50">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <div className="border-b border-slate-200 pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
              NorthForge Systems privacy notice
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
              <p>Applies to website enquiries and discovery call bookings.</p>
              <p className="font-medium text-[var(--color-primary)]">
                Last updated: 31 March 2026
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-8 text-[15px] leading-7 text-[var(--color-muted)]">
            <section className="space-y-3">
              <h2 className="text-3xl text-[var(--color-primary)]">
                Who we are
              </h2>
              <p>
                NorthForge Systems is a UK software and automation business
                focused on manufacturing SMEs. If you have privacy questions,
                contact{" "}
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-[var(--color-primary)] underline"
                >
                  {" "}
                  {siteConfig.email}
                </Link>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-3xl text-[var(--color-primary)]">
                What we collect
              </h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--color-accent-strong)]">
                <li>
                  Contact details and enquiry information you submit by email.
                </li>
                <li>
                  Booking details you provide when scheduling a discovery call
                  through Calendly.
                </li>
                <li>
                  Basic technical data such as browser and page access logs
                  collected by hosting infrastructure.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-3xl text-[var(--color-primary)]">
                How we use your data
              </h2>
              <ul className="list-disc space-y-2 pl-5 marker:text-[var(--color-accent-strong)]">
                <li>To respond to enquiries and discuss potential projects.</li>
                <li>To organise and run discovery calls.</li>
                <li>To operate, secure, and improve the website.</li>
              </ul>
              <p>
                We do not sell your data, and we only use it for legitimate
                business communication and service delivery.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-3xl text-[var(--color-primary)]">
                Calendly and third-party services
              </h2>
              <p>
                Discovery call bookings are handled through Calendly. When you
                book, your information is processed under Calendly&apos;s terms
                and privacy policy in addition to ours.
              </p>
              <p>
                We do not currently run third-party behavioural analytics on
                this site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-3xl text-[var(--color-primary)]">
                Data retention
              </h2>
              <p>
                We keep enquiry and booking information only as long as needed
                for communication, project evaluation, and normal business
                records, then delete it when no longer required.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-3xl text-[var(--color-primary)]">
                Your rights
              </h2>
              <p>
                If you want access to, correction of, or deletion of your
                personal data, email us at
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-[var(--color-primary)] underline"
                >
                  {" "}
                  {siteConfig.email}
                </Link>
                . We will respond as required under applicable UK data
                protection law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-3xl text-[var(--color-primary)]">
                Policy updates
              </h2>
              <p>This policy may be updated from time to time.</p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
