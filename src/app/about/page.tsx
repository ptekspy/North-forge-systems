import type { Metadata } from "next";
import { BookingCtaBand } from "@/components/marketing/booking-cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "NorthForge Systems is a founder-led software company focused on practical systems for manufacturing operations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NorthForge Systems"
        summary="NorthForge is a founder-led software company that builds practical internal tools, automation, and operational systems for manufacturing SMEs."
      />
      <SectionWrapper>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Founder-led company, practical delivery">
            <p>
              NorthForge Systems is a founder-led software and automation
              company led directly by Patrick Kenneally. He brings deep hands-on
              experience delivering internal tools, automation, dashboards,
              integrations, and operational systems.
            </p>
            <p>
              The emphasis is straightforward: understand how work actually
              moves through a business, where friction and admin build up, and
              deliver better systems end to end with clear ownership and
              practical accountability.
            </p>
          </Card>
          <Card title="Built for manufacturing SMEs">
            <p>
              NorthForge works with manufacturing businesses where spreadsheets,
              inboxes, and manual admin have become the default operating
              system.
            </p>
            <p>
              Based in Bradford, West Yorkshire, NorthForge is grounded in a
              region full of practical manufacturing businesses that need better
              workflow tools, stronger reporting, and clearer operational
              systems without unnecessary complexity.
            </p>
          </Card>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <h2 className="text-4xl md:text-5xl">How we work</h2>
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-[var(--color-muted)]">
              <p>
                NorthForge combines founder-led direction with the delivery
                mindset of a focused software team: clear scope, direct
                communication, practical systems, and sensible handover.
              </p>
              <p>
                The work is not about technology for its own sake. It is about
                improving process clarity, reducing admin, strengthening
                reporting, and building practical systems that real teams can
                use day to day.
              </p>
              <p>
                Where it makes sense, that can also include practical AI
                integrations, AI-assisted workflows, or agent-supported tools.
                But the starting point is always the workflow problem, not the
                hype.
              </p>
              <p>
                If you want practical modernisation without fluff, book a
                discovery call and we will identify the highest-value workflow
                to improve first.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
              Why teams engage NorthForge
            </p>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]"
                />
                <span>
                  Founder-led direction with direct senior involvement from
                  Patrick Kenneally.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]"
                />
                <span>
                  Focused on operational systems that support real manufacturing
                  teams.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]"
                />
                <span>
                  Delivery shaped like a focused software team: accountable,
                  direct, and commercially grounded.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]"
                />
                <span>
                  Most engagements begin with one clearly scoped workflow
                  improvement.
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Button href={siteConfig.calendlyUrl} variant="secondary">
                Book a Discovery Call
              </Button>
            </div>
          </aside>
        </div>
      </SectionWrapper>
      <BookingCtaBand />
    </>
  );
}
