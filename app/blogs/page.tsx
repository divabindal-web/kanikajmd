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

/* Lead essay: emerald feature spread with a giant outlined monogram */
function LeadEssay({ b }: { b: Blog }) {
  const monogram = b.title.trim().charAt(0).toUpperCase();
  return (
    <Reveal>
      <a
        href={b.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden bg-emerald text-paper"
      >
        <span
          aria-hidden="true"
          style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.22)", color: "transparent" }}
          className="pointer-events-none absolute -right-6 -top-16 select-none font-serif text-[16rem] font-medium leading-none transition-transform duration-700 group-hover:scale-105 sm:-right-2 sm:text-[22rem]"
        >
          {monogram}
        </span>
        <div className="relative flex min-h-[320px] flex-col justify-between p-8 sm:min-h-[380px] sm:p-12">
          <div className="flex items-center gap-4">
            <span className="label bg-paper px-3 py-1.5 text-emerald">
              Latest essay
            </span>
            <span className="label text-paper/70">{b.tag}</span>
            <span className="h-px w-8 bg-paper/30" />
            <span className="label text-paper/70">{b.date}</span>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.03] tracking-tight text-paper">
              {b.title}
            </h2>
            <span className="label mt-7 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-paper transition-colors duration-300 group-hover:border-paper">
              Read essay
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

/* Index rows: numeral, meta, big upright serif title, inversion on hover */
function EssayRow({ b, n }: { b: Blog; n: number }) {
  return (
    <Reveal>
      <a
        href={b.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid grid-cols-[3rem_1fr_auto] items-center gap-5 overflow-hidden border-t border-line py-7 sm:grid-cols-[5rem_9rem_1fr_auto] sm:gap-8 sm:py-9"
      >
        <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-emerald transition-transform duration-500 ease-editorial group-hover:scale-y-100" />

        <span className="relative z-10 font-serif text-3xl font-medium leading-none text-emerald/30 transition-colors duration-300 group-hover:text-paper/40 sm:text-5xl">
          {String(n).padStart(2, "0")}
        </span>

        <span className="relative z-10 hidden flex-col gap-1.5 sm:flex">
          <span className="label text-emerald transition-colors duration-300 group-hover:text-paper/70">
            {b.tag}
          </span>
          <span className="label text-muted transition-colors duration-300 group-hover:text-paper/50">
            {b.date}
          </span>
        </span>

        <span className="relative z-10 font-serif text-xl font-medium leading-[1.15] tracking-tight text-ink transition-colors duration-300 group-hover:text-paper sm:text-[1.75rem]">
          {b.title}
        </span>

        <span className="relative z-10 hidden shrink-0 sm:block">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-emerald transition-all duration-500 group-hover:rotate-45 group-hover:border-paper/50 group-hover:text-paper">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </span>
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
          <LeadEssay b={lead} />

          <div className="mt-14 hidden grid-cols-[5rem_9rem_1fr_auto] gap-8 pb-4 sm:grid">
            <span className="label text-muted">No</span>
            <span className="label text-muted">Subject</span>
            <span className="label text-muted">Essay</span>
            <span />
          </div>
          <div className="border-b border-line sm:mt-0 mt-12">
            {rest.map((b, i) => (
              <EssayRow key={b.href} b={b} n={i + 2} />
            ))}
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}
