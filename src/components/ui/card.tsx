import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-heading text-2xl text-[var(--color-primary)]">{title}</h3>
      <div className="mt-4 space-y-3 text-[15px] leading-7 text-[var(--color-muted)]">{children}</div>
    </article>
  );
}
