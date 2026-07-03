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

const FEATURED_IMAGES = [portraitPhoto, heroPhoto];

/* Large photo award, magazine-cover treatment (no colour wash) */
function FeaturedAward({ a, img }: { a: Item; img: string }) {
  return (
    <Reveal>
      <a
        href={a.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[4/5] overflow-hidden border border-line bg-ink"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="photo-grade absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink/95 via-ink/45 to-transparent" />
        <span className="pointer-events-none absolute -right-2 top-10 font-serif text-[6.5rem] font-medium leading-none text-white/10 sm:text-[8rem]">
          {a.meta}
        </span>
        <div className="relative flex h-full flex-col justify-between p-8 text-paper sm:p-10">
          <div className="flex items-center justify-between">
            <span className="label text-paper/90">{a.meta}</span>
            <Seal className="h-7 w-7 text-paper/85" />
          </div>
          <div>
            <h3 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-[2.6rem]">
              {a.title}
            </h3>
            {a.blurb && (
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/75">
                {a.blurb}
              </p>
            )}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

/* Graphic award card with a large seal watermark */
function AwardCard({ a }: { a: Item }) {
  return (
    <Reveal>
      <a
        href={a.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex min-h-[210px] flex-col justify-between overflow-hidden border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-emerald sm:min-h-[240px] sm:p-9"
      >
        <span className="pointer-events-none absolute -right-8 -top-8 text-emerald/[0.06] transition-all duration-500 group-hover:rotate-12 group-hover:text-emerald/10">
          <Seal className="h-44 w-44" />
        </span>
        <div className="relative flex items-center justify-between">
          <span className="text-emerald">
            <Seal className="h-8 w-8" />
          </span>
          <span className="label text-muted">{a.meta}</span>
        </div>
        <div className="relative flex items-end justify-between gap-4">
          <h3 className="font-serif text-2xl font-medium leading-[1.12] tracking-tight text-ink transition-colors duration-500 group-hover:text-emerald sm:text-[1.8rem]">
            {a.title}
          </h3>
          <ArrowUpRight className="mb-1 h-4 w-4 shrink-0 -translate-x-1 text-emerald opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
      </a>
    </Reveal>
  );
}

/* Full awards layout: two photo features + a graphic card grid. */
export function AwardsList({ items }: { items: Item[] }) {
  const featured = items.slice(0, 2);
  const rest = items.slice(2);
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((a, i) => (
          <FeaturedAward key={a.href} a={a} img={FEATURED_IMAGES[i]} />
        ))}
      </div>
      {rest.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {rest.map((a) => (
            <AwardCard key={a.href} a={a} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AwardsSection() {
  const featured = awards.slice(0, 2);
  return (
    <section id="awards" className="bg-mist px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            <Seal className="hidden h-9 w-9 text-emerald sm:block" />
            <div>
              <span className="label text-emerald">Awards</span>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-none tracking-tight text-ink sm:text-4xl">
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
      </div>
    </section>
  );
}
