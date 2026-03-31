"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/content/navigation";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[var(--color-bg)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center">
          <Image src="/logos/northforge-logo-light.svg" alt="NorthForge Systems logo" width={170} height={44} />
        </Link>
        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded border border-slate-300 px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent-strong)]">
              {link.label}
            </Link>
          ))}
          <Button href={siteConfig.calendlyUrl} variant="secondary">
            Book a Call
          </Button>
        </nav>
      </div>
      {open ? (
        <nav className="space-y-2 border-t border-slate-200 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded px-2 py-2 text-sm font-medium text-[var(--color-primary)] hover:bg-slate-100"
            >
              {link.label}
            </Link>
          ))}
          <Button href={siteConfig.calendlyUrl} variant="secondary">
            Book a Call
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
