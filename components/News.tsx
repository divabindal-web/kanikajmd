import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { news } from "@/lib/content";

type Item = { title: string; href: string };

function NewsRow({ item, n }: { item: Item; n: number }) {
  return (
    <Reveal>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-5 overflow-hidden border-t border-line py-5 sm:gap-7"
      >
        <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-emerald/[0.05] transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
        <span className="relative z-10 font-serif text-2xl font-medium leading-none text-emerald/25 transition-colors duration-500 group-hover:text-emerald sm:text-3xl">
          {String(n).padStart(2, "0")}
        </span>
        <span className="relative z-10 flex-1 font-serif text-lg font-medium leading-snug tracking-tight text-ink transition-all duration-500 group-hover:translate-x-1 group-hover:text-emerald sm:text-xl">
          {item.title}
        </span>
        <ArrowUpRight className="relative z-10 h-4 w-4 shrink-0 -translate-x-2 text-emerald opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    </Reveal>
  );
}

export function NewsList({ items }: { items: Item[] }) {
  return (
    <div className="border-b border-line">
      {items.map((item, i) => (
        <NewsRow key={item.href} item={item} n={i + 1} />
      ))}
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="news" className="bg-paper px-5 py-14 sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="label text-emerald">News</span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-none tracking-tight text-ink sm:text-4xl">
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
