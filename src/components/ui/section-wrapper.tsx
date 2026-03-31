import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`px-6 py-16 md:px-10 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
