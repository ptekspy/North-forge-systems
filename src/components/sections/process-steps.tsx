const steps = [
  { title: "Discover", text: "We map the workflow bottleneck, current process pain, and success criteria." },
  { title: "Design", text: "We define the right internal tool or automation approach for your team." },
  { title: "Deliver", text: "We ship a practical solution, hand it over clearly, and outline next improvements." },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-strong)]">Step {index + 1}</p>
          <h3 className="mt-2 font-heading text-2xl text-[var(--color-primary)]">{step.title}</h3>
          <p className="mt-3 text-[var(--color-muted)]">{step.text}</p>
        </article>
      ))}
    </div>
  );
}
