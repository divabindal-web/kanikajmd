import type { Metadata } from "next";
import HeroField from "@/components/HeroField";
import { NewsLead, NewsRow } from "@/components/News";
import ConnectSection from "@/components/ConnectSection";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Press, features and commentary from Kanika Gupta Shori on women leadership, technology and the Indian real estate market.",
};

export default function NewsPage() {
  const [lead, ...rest] = news;
  const mid = Math.ceil(rest.length / 2);
  const colA = rest.slice(0, mid);
  const colB = rest.slice(mid);
  return (
    <>
      <header className="relative overflow-hidden bg-paper px-5 pb-10 pt-32 sm:px-8 sm:pb-12 sm:pt-40">
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

      <section className="bg-paper px-5 pb-14 sm:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <NewsLead item={lead} />

          <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
            <div className="border-b border-line">
              {colA.map((item, i) => (
                <NewsRow key={item.href} item={item} n={i + 2} />
              ))}
            </div>
            <div className="border-b border-line">
              {colB.map((item, i) => (
                <NewsRow key={item.href} item={item} n={mid + i + 2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}
