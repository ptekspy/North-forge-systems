import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-heading text-2xl text-[var(--color-primary)]">{title}</h3>
      <div className="mt-3 space-y-2 text-[var(--color-muted)]">{children}</div>
    </article>
  );
}
