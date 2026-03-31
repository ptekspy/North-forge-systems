import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function BookingCtaBand() {
  return (
    <SectionWrapper className="bg-[var(--color-primary)] text-white">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-heading text-3xl">Ready to remove one operational bottleneck?</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            Book a practical, no-fluff discovery call to map your next workflow improvement.
          </p>
        </div>
        <Button href={siteConfig.calendlyUrl} variant="secondary">
          Book a Discovery Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
