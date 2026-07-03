import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { awards } from "@/lib/content";

type Item = { title: string; meta: string; href: string };

export function AwardsList({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => (
        <Reveal key={a.href}>
          <a
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-[188px] flex-col justify-between border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-emerald"
          >
            <div className="flex items-center justify-between">
              <span className="label text-emerald">{a.meta}</span>
              <ArrowUpRight className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-emerald" />
            </div>
            <h3 className="mt-10 font-serif text-2xl font-medium leading-[1.15] tracking-tight text-ink transition-colors duration-300 group-hover:text-emerald">
              {a.title}
            </h3>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export default function AwardsSection() {
  const featured = awards.slice(0, 2);
  return (
    <section id="awards" className="bg-mist px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="label text-emerald">Awards</span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-tight text-ink sm:text-5xl">
              Recognition
            </h2>
          </div>
          <MoreLink href="/awards" label="All Awards" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((a) => (
            <Reveal key={a.href}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[260px] flex-col justify-between border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-emerald sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="label text-emerald">{a.meta}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-emerald" />
                </div>
                <h3 className="mt-16 font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink transition-colors duration-300 group-hover:text-emerald sm:text-[2.6rem]">
                  {a.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
