import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { news } from "@/lib/content";

type Item = { title: string; href: string };

function NewsRow({ item, i }: { item: Item; i: number }) {
  return (
    <Reveal>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-baseline gap-5 border-t border-line py-6 transition-colors sm:gap-7"
      >
        <span className="label shrink-0 pt-1 text-muted transition-colors duration-300 group-hover:text-emerald">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-serif text-xl font-medium leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-emerald sm:text-2xl">
          {item.title}
        </span>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-emerald opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    </Reveal>
  );
}

export function NewsList({ items }: { items: Item[] }) {
  return (
    <div className="border-b border-line">
      {items.map((item, i) => (
        <NewsRow key={item.href} item={item} i={i} />
      ))}
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="news" className="bg-paper px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="label text-emerald">News</span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-tight text-ink sm:text-5xl">
              In the press
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Features, interviews and market commentary across leading Indian
              and global publications.
            </p>
            <div className="mt-7">
              <MoreLink href="/news" label="All News" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <NewsList items={news.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}
