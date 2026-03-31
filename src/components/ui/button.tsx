import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[#1a2b3a] border border-[var(--color-primary)]",
  secondary:
    "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent-strong)] border border-[var(--color-accent)]",
  ghost:
    "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
