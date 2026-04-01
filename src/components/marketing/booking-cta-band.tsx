import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function BookingCtaBand() {
  return (
    <SectionWrapper className="bg-[linear-gradient(135deg,#233648_0%,#1d2f40_100%)] text-white">
      <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/10 bg-white/4 p-6 md:flex-row md:items-center md:p-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl">Ready to remove one operational bottleneck?</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-200">
            Book a practical, no-fluff discovery call to map your next workflow improvement.
          </p>
        </div>
        <Button href={siteConfig.calendlyUrl} variant="secondary" className="w-full sm:w-auto">
          Book a Discovery Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
