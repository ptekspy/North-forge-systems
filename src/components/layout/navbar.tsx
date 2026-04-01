"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/navigation";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-[var(--color-bg)]/94 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logos/northforge-systems-logo-icon.png"
            alt="NorthForge Systems logo icon"
            width={52}
            height={44}
            sizes="(max-width: 768px) 40px, 52px"
          />
          <Image
            src="/logos/northforge-systems-logo-text.png"
            alt="NorthForge Systems logo text"
            width={252}
            height={44}
            sizes="(max-width: 768px) 148px, 252px"
            className="hidden w-[148px] min-[380px]:block md:w-[210px] lg:w-[252px]"
            style={{ height: "auto" }}
          />
        </Link>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-[var(--color-primary)] shadow-sm md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-semibold tracking-[0.01em] transition-colors ${
                pathname === link.href
                  ? "bg-slate-100 text-[var(--color-primary)]"
                  : "text-slate-600 hover:text-[var(--color-primary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href={siteConfig.calendlyUrl} variant="secondary" className="ml-3">
            Book a Call
          </Button>
        </nav>
      </div>

      {open ? (
        <nav className="space-y-2 border-t border-slate-200 bg-white px-5 pb-5 pt-4 sm:px-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
                pathname === link.href
                  ? "bg-slate-100 text-[var(--color-primary)]"
                  : "text-[var(--color-primary)] hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href={siteConfig.calendlyUrl} variant="secondary" className="mt-2 w-full">
            Book a Call
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
