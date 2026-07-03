import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { awards } from "@/lib/content";
import { portraitPhoto, heroPhoto } from "@/lib/images";

type Item = { title: string; meta: string; blurb?: string; href: string };

function Seal({ className = "h-6 w-6" }: { className?: string }) {
  const ticks = Array.from({ length: 16 });
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
      <circle cx="20" cy="20" r="8" />
      <circle cx="20" cy="20" r="3.4" />
      {ticks.map((_, i) => {
        const a = (i / ticks.length) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={20 + Math.cos(a) * 10}
            y1={20 + Math.sin(a) * 10}
            x2={20 + Math.cos(a) * 14.5}
            y2={20 + Math.sin(a) * 14.5}
          />
        );
      })}
    </svg>
  );
}

/* Editorial honour-roll list (used on the /awards page and as a home preview) */
export function AwardsList({ items }: { items: Item[] }) {
  return (
    <ul className="border-t border-line">
      {items.map((a) => (
        <Reveal key={a.href}>
          <li>
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden border-b border-line py-6 sm:gap-8 sm:py-7"
            >
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-emerald/[0.05] transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
              <span className="relative z-10 flex items-center gap-4">
                <span className="hidden text-emerald/50 transition-colors duration-500 group-hover:text-emerald sm:block">
                  <Seal className="h-7 w-7" />
                </span>
                <span className="w-[4.5rem] font-serif text-2xl font-medium leading-none text-emerald sm:w-24 sm:text-3xl">
                  {a.meta}
                </span>
              </span>
              <span className="relative z-10 font-serif text-xl font-medium leading-snug tracking-tight text-ink transition-all duration-500 group-hover:translate-x-1 group-hover:text-emerald sm:text-2xl">
                {a.title}
              </span>
              <ArrowUpRight className="relative z-10 h-4 w-4 shrink-0 -translate-x-2 text-emerald opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

const FEATURED_IMAGES = [portraitPhoto, heroPhoto];

function FeaturedAward({ a, img }: { a: Item; img: string }) {
  return (
    <Reveal>
      <a
        href={a.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[5/6] overflow-hidden border border-line sm:aspect-[4/5]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="duotone absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-emerald/60 transition-colors duration-500 group-hover:bg-emerald/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/35 to-emerald-deep/5" />
        <span className="pointer-events-none absolute -right-2 top-8 font-serif text-[7.5rem] font-medium leading-none text-white/10 sm:text-[9rem]">
          {a.meta}
        </span>
        <div className="relative flex h-full flex-col justify-between p-8 text-paper sm:p-10">
          <div className="flex items-center justify-between">
            <span className="label text-paper/90">{a.meta}</span>
            <Seal className="h-7 w-7 text-paper/80" />
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
  );
}

export default function AwardsSection() {
  const featured = awards.slice(0, 2);
  const more = awards.slice(2, 5);
  return (
    <section id="awards" className="bg-mist px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            <Seal className="hidden h-9 w-9 text-emerald sm:block" />
            <div>
              <span className="label text-emerald">Awards</span>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-none tracking-tight text-ink sm:text-5xl">
                Recognition
              </h2>
            </div>
          </div>
          <MoreLink href="/awards" label="All Awards" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((a, i) => (
            <FeaturedAward key={a.href} a={a} img={FEATURED_IMAGES[i]} />
          ))}
        </div>

        <div className="mt-6">
          <AwardsList items={more} />
        </div>
      </div>
    </section>
  );
}
