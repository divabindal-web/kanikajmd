import type { Metadata } from "next";
import HeroField from "@/components/HeroField";
import ConnectSection from "@/components/ConnectSection";
import { ArrowUpRight } from "@/components/Icons";
import { Reveal } from "@/components/Motion";
import { blogs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Personal essays by Kanika Gupta Shori on leadership, travel, family, women at work and life beyond the desk.",
};

type Blog = { title: string; tag: string; date: string; href: string };

const TONES = [
  {
    card: "bg-emerald border-emerald",
    title: "text-paper",
    meta: "text-paper/70",
    read: "text-paper",
    mark: "text-white/[0.08]",
  },
  {
    card: "bg-paper border-line hover:border-emerald",
    title: "text-ink group-hover:text-emerald",
    meta: "text-muted",
    read: "text-emerald",
    mark: "text-emerald/[0.07]",
  },
  {
    card: "bg-mist border-line hover:border-emerald",
    title: "text-ink group-hover:text-emerald",
    meta: "text-muted",
    read: "text-emerald",
    mark: "text-emerald/[0.08]",
  },
  {
    card: "bg-ink border-ink",
    title: "text-paper",
    meta: "text-paper/60",
    read: "text-paper",
    mark: "text-white/[0.07]",
  },
];

function EssayCard({ b, i, wide = false }: { b: Blog; i: number; wide?: boolean }) {
  const t = TONES[i % TONES.length];
  return (
    <Reveal delay={(i % 3) * 0.05} className={wide ? "sm:col-span-2" : ""}>
      <a
        href={b.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex h-full min-h-[250px] flex-col justify-between overflow-hidden border p-8 transition-all duration-500 hover:-translate-y-1 sm:p-9 ${t.card}`}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -right-4 -top-16 font-serif text-[11rem] font-medium italic leading-none ${t.mark}`}
        >
          &rdquo;
        </span>
        <div className="relative flex items-center justify-between gap-4">
          <span className={`label ${t.meta}`}>{b.tag}</span>
          <span className={`label ${t.meta}`}>{b.date}</span>
        </div>
        <div className="relative mt-10">
          <h2
            className={`font-serif font-medium italic leading-[1.12] tracking-tight transition-colors duration-500 ${
              wide
                ? "text-3xl sm:text-[2.6rem]"
                : "text-2xl sm:text-[1.75rem]"
            } ${t.title}`}
          >
            {b.title}
          </h2>
          <span
            className={`label mt-6 inline-flex items-center gap-2 ${t.read}`}
          >
            Read essay
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function BlogsPage() {
  const [lead, ...rest] = blogs;
  return (
    <>
      <header className="relative overflow-hidden bg-paper px-5 pb-12 pt-28 sm:px-8 sm:pt-36">
        <HeroField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="label text-emerald">Blogs</span>
            <span className="h-px w-8 bg-line" />
            <span className="label text-muted">{blogs.length} essays</span>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(3.2rem,9vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
            In her words<span className="text-emerald">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            Personal essays on leadership, travel, family and the things that
            outlast a quarter.
          </p>
        </div>
      </header>

      <section className="bg-paper px-5 pb-16 sm:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <EssayCard b={lead} i={0} wide />
            {rest.map((b, i) => (
              <EssayCard key={b.href} b={b} i={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}
