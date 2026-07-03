import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { awards } from "@/lib/content";
import { portraitPhoto, heroPhoto } from "@/lib/images";

type Item = { title: string; meta: string; blurb?: string; href: string };

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

const FEATURED_IMAGES = [portraitPhoto, heroPhoto];

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
          {featured.map((a, i) => (
            <Reveal key={a.href}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[5/6] overflow-hidden border border-line sm:aspect-[4/5]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FEATURED_IMAGES[i]}
                  alt=""
                  aria-hidden="true"
                  className="duotone absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-emerald/60 transition-colors duration-500 group-hover:bg-emerald/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/35 to-emerald-deep/10" />
                <div className="relative flex h-full flex-col justify-between p-8 text-paper sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="label text-paper/90">{a.meta}</span>
                    <ArrowUpRight className="h-4 w-4 text-paper/90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-[2.7rem]">
                      {a.title}
                    </h3>
                    {a.blurb && (
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/80">
                        {a.blurb}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
