import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { news } from "@/lib/content";

type Item = { title: string; href: string };

export function NewsRow({
  item,
  n,
  compact = false,
}: {
  item: Item;
  n: number;
  compact?: boolean;
}) {
  return (
    <Reveal>
      <a
        href={item.href}
        className={`group relative flex items-center gap-4 overflow-hidden border-t border-line sm:gap-6 ${
          compact ? "py-4" : "py-5"
        }`}
      >
        <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-emerald/[0.05] transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
        <span className="label relative z-10 w-6 shrink-0 text-emerald/60 transition-colors duration-500 group-hover:text-emerald">
          {String(n).padStart(2, "0")}
        </span>
        <span
          className={`relative z-10 flex-1 font-serif font-medium leading-snug tracking-tight text-ink transition-all duration-500 group-hover:translate-x-1 group-hover:text-emerald ${
            compact ? "text-lg" : "text-lg sm:text-xl"
          }`}
        >
          {item.title}
        </span>
        <ArrowUpRight className="relative z-10 h-4 w-4 shrink-0 -translate-x-2 text-emerald opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
      </a>
    </Reveal>
  );
}

export function NewsLead({ item }: { item: Item }) {
  return (
    <a
      href={item.href}
      className="group block border-t-2 border-emerald pt-6"
    >
      <div className="flex items-center gap-3">
        <span className="label text-emerald">Featured</span>
        <span className="h-px w-8 bg-line" />
        <span className="label text-muted">Latest coverage</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <h3 className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-medium leading-[1.08] tracking-tight text-ink transition-colors duration-500 group-hover:text-emerald">
          {item.title}
        </h3>
        <span className="mt-1 hidden shrink-0 sm:block">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-emerald transition-all duration-500 group-hover:rotate-45 group-hover:border-emerald group-hover:bg-emerald group-hover:text-paper">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </span>
      </div>
      <span className="label mt-6 inline-block border-b border-line pb-1 text-emerald transition-colors duration-300 group-hover:border-emerald">
        Read the feature
      </span>
    </a>
  );
}

export function NewsList({
  items,
  startIndex = 1,
}: {
  items: Item[];
  startIndex?: number;
}) {
  return (
    <div className="border-b border-line">
      {items.map((item, i) => (
        <NewsRow key={item.href} item={item} n={startIndex + i} />
      ))}
    </div>
  );
}

export default function NewsSection() {
  const [lead, ...rest] = news.slice(0, 5);
  return (
    <section id="news" className="bg-paper px-5 py-14 sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <span className="label text-emerald">News</span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-none tracking-tight text-ink sm:text-4xl">
              In the press
            </h2>
          </div>
          <MoreLink href="/news" label="All News" />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <NewsLead item={lead} />
          </div>
          <div className="lg:col-span-6">
            <div className="border-b border-line">
              {rest.map((item, i) => (
                <NewsRow key={item.href} item={item} n={i + 2} compact />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
