import { ReactNode } from "react";

export default function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <header className="bg-paper px-5 pt-36 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-7xl">
        <span className="label text-emerald">{kicker}</span>
        <h1 className="mt-5 font-serif text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {intro}
          </p>
        )}
        <div className="mt-12 h-px w-full bg-line" />
      </div>
    </header>
  );
}
