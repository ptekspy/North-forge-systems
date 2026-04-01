import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/content/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[linear-gradient(135deg,#233648_0%,#1d2f40_100%)] px-5 py-14 text-slate-100 sm:px-6 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.85fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logos/northforge-systems-logo-dark-icon.png"
                alt="NorthForge Systems logo icon"
                width={52}
                height={44}
                sizes="(max-width: 768px) 40px, 52px"
              />
              <Image
                src="/logos/northforge-systems-logo-dark-text.png"
                alt="NorthForge Systems logo text"
                width={252}
                height={44}
                sizes="(max-width: 768px) 148px, 252px"
                className="hidden w-[148px] min-[380px]:block md:w-[210px] lg:w-[252px]"
                style={{ height: "auto" }}
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-slate-300">
              Founder-led software and automation for manufacturing SMEs.
            </p>
            <p className="mt-2 text-[15px] text-slate-300">
              Bradford, West Yorkshire
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl">Navigation</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl">Get Started</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href={siteConfig.calendlyUrl}
                  className="transition-colors hover:text-white"
                >
                  Book a Discovery Call
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </Link>
              </li>
              <li>
                <Link
                  href="/workflow-sprint"
                  className="transition-colors hover:text-white"
                >
                  Manufacturing Workflow Sprint
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} NorthForge Systems. Practical software and automation for
            manufacturing operations.
          </p>
          <p>Privacy-first enquiries and direct founder-led delivery.</p>
        </div>
      </div>
    </footer>
  );
}
