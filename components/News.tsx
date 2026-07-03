import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { news } from "@/lib/content";

type Item = { title: string; href: string };

function FeaturedNews({ item }: { item: Item }) {
  return (
    <Reveal>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border-t-2 border-emerald pt-7"
      >
        <div className="flex items-center gap-3">
          <span className="label text-emerald">Featured</span>
          <span className="h-px w-8 bg-line" />
          <span className="label text-muted">Latest coverage</span>
        </div>
        <div className="mt-6 flex items-start justify-between gap-8">
          <h3 className="max-w-4xl font-serif text-[clamp(1.9rem,4.6vw,3.5rem)] font-medium leading-[1.04] tracking-tight text-ink transition-colors duration-500 group-hover:text-emerald">
            {item.title}
          </h3>
          <span className="mt-1 hidden shrink-0 sm:block">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-emerald transition-all duration-500 group-hover:rotate-45 group-hover:border-emerald group-hover:bg-emerald group-hover:text-paper">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}

function NewsRow({ item, n }: { item: Item; n: number }) {
  return (
    <Reveal>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-5 overflow-hidden border-t border-line py-6 sm:gap-8"
      >
        <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-emerald/[0.05] transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
        <span className="relative z-10 font-serif text-3xl font-medium leading-none text-emerald/25 transition-colors duration-500 group-hover:text-emerald sm:text-4xl">
          {String(n).padStart(2, "0")}
        </span>
        <span className="relative z-10 flex-1 font-serif text-xl font-medium leading-snug tracking-tight text-ink transition-all duration-500 group-hover:translate-x-1 group-hover:text-emerald sm:text-2xl">
          {item.title}
        </span>
        <ArrowUpRight className="relative z-10 h-4 w-4 shrink-0 -translate-x-2 text-emerald opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    </Reveal>
  );
}

export function NewsList({ items }: { items: Item[] }) {
  const [lead, ...rest] = items;
  return (
    <div>
      <FeaturedNews item={lead} />
      <div className="mt-12 border-b border-line">
        {rest.map((item, i) => (
          <NewsRow key={item.href} item={item} n={i + 2} />
        ))}
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="news" className="bg-paper px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="label text-emerald">News</span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-tight text-ink sm:text-5xl">
              In the press
            </h2>
          </div>
          <MoreLink href="/news" label="All News" />
        </div>
        <NewsList items={news.slice(0, 5)} />
      </div>
    </section>
  );
}
