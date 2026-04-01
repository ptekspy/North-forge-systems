import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-bg)] shadow-sm hover:border-[#1a2b3a] hover:bg-[#1a2b3a]",
  secondary:
    "border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-primary)] shadow-sm hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-strong)]",
  ghost:
    "border border-slate-300 bg-white text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
