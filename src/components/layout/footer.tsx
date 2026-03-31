import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/content/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] px-6 py-14 text-slate-100 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <Image src="/logos/northforge-logo-dark.svg" alt="NorthForge Systems inverted logo" width={170} height={44} />
          <p className="mt-4 text-sm text-slate-300">
            Practical software and automation systems for manufacturing SMEs.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-xl">Navigation</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-xl">Get Started</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link href={siteConfig.calendlyUrl} className="hover:text-white">
                Book a Discovery Call
              </Link>
            </li>
            <li>
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </Link>
            </li>
            <li>
              <span>Privacy Policy (coming soon)</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
