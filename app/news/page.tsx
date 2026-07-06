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

export default function NewsPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-paper px-5 pb-10 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
        <HeroField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="label text-emerald">News</span>
            <span className="h-px w-8 bg-line" />
            <span className="label text-muted">{news.length} features</span>
          </div>
          <h1 className="mt-4 font-serif text-[clamp(2.6rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            In the <span className="italic text-emerald">press</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Features, interviews and market commentary across leading Indian and
            global publications.
          </p>
        </div>
      </header>

      <section className="bg-paper px-5 pb-16 sm:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-line">
            {news.map((item, i) => (
              <Reveal key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-baseline gap-6 overflow-hidden border-t border-line py-7 sm:gap-10 sm:py-8"
                >
                  <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-emerald/[0.05] transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
                  <span className="label relative z-10 w-8 shrink-0 text-emerald/60 transition-colors duration-500 group-hover:text-emerald">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 flex-1 font-serif text-xl font-medium leading-[1.2] tracking-tight text-ink transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald sm:text-3xl">
                    {item.title}
                  </span>
                  <span className="relative z-10 hidden shrink-0 sm:block">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-emerald transition-all duration-500 group-hover:rotate-45 group-hover:border-emerald group-hover:bg-emerald group-hover:text-paper">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}
