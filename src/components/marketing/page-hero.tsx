import { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  summary: string;
  children?: ReactNode;
};

export function PageHero({ title, summary, children }: PageHeroProps) {
  return (
    <section className="bg-[var(--color-primary)] px-6 py-16 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-heading text-4xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-200">{summary}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
