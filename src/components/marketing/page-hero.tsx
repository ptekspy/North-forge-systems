import { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  summary: string;
  children?: ReactNode;
};

export function PageHero({ title, summary, children }: PageHeroProps) {
  return (
    <section className="bg-[linear-gradient(135deg,#233648_0%,#1d2f40_100%)] px-5 py-14 text-white sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{summary}</p>
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
