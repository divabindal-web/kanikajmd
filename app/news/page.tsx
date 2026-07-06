import type { Metadata } from "next";
import HeroField from "@/components/HeroField";
import ConnectSection from "@/components/ConnectSection";
import { ArrowUpRight } from "@/components/Icons";
import { Reveal } from "@/components/Motion";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Press, features and commentary from Kanika Gupta Shori on women leadership, technology and the Indian real estate market.",
};

type Item = { title: string; tag?: string; href: string };

function PressRow({ item, n }: { item: Item; n: number }) {
  return (
    <Reveal>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid grid-cols-[2.2rem_1fr_auto] items-baseline gap-4 overflow-hidden border-t border-line py-6 sm:grid-cols-[2.6rem_6.5rem_1fr_auto] sm:gap-6 sm:py-7"
      >
        <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-emerald transition-transform duration-500 ease-editorial group-hover:scale-y-100" />
        <span className="label relative z-10 text-muted transition-colors duration-300 group-hover:text-paper/60">
          {String(n).padStart(2, "0")}
        </span>
        <span className="label relative z-10 hidden text-emerald transition-colors duration-300 group-hover:text-paper/70 sm:block">
          {item.tag ?? "Feature"}
        </span>
        <span className="relative z-10 font-serif text-xl font-medium leading-[1.18] tracking-tight text-ink transition-colors duration-300 group-hover:text-paper sm:text-2xl">
          {item.title}
        </span>
        <ArrowUpRight className="relative z-10 h-4 w-4 shrink-0 translate-y-0.5 text-emerald transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0 group-hover:text-paper" />
      </a>
    </Reveal>
  );
}

export default function NewsPage() {
  return (
    <>
      <section className="bg-paper px-5 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Sticky editorial rail */}
          <aside className="relative lg:col-span-4">
            <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 overflow-hidden">
              <HeroField />
            </div>
            <div className="relative lg:sticky lg:top-28">
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="label text-emerald">News</span>
                  <span className="h-px w-8 bg-line" />
                  <span className="label text-muted">{news.length} features</span>
                </div>
                <h1 className="mt-5 font-serif text-[clamp(4rem,10vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.03em] text-ink">
                  Press<span className="text-emerald">.</span>
                </h1>
                <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-muted">
                  Features, interviews and market commentary across leading
                  Indian and global publications.
                </p>
                <div className="mt-9 flex items-center justify-between border-t border-line pt-5">
                  <span className="label text-muted">Selected features</span>
                  <span className="label text-emerald">Ongoing</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Index */}
          <div className="lg:col-span-8">
            <div className="hidden grid-cols-[2.6rem_6.5rem_1fr_auto] gap-6 pb-4 sm:grid">
              <span className="label text-muted">No</span>
              <span className="label text-muted">Subject</span>
              <span className="label text-muted">Feature</span>
              <span />
            </div>
            <div className="border-b border-line">
              {news.map((item, i) => (
                <PressRow key={item.href} item={item} n={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}
