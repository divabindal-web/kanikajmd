import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import MoreLink from "./MoreLink";
import { awards } from "@/lib/content";
import { portraitPhoto, heroPhoto } from "@/lib/images";

type Item = { title: string; meta: string; blurb?: string; href: string };

const FEATURED_IMAGES = [portraitPhoto, heroPhoto];
const FEATURED_POS = ["object-[center_62%]", "object-[center_12%]"];

/* Large photo award, home page only */
function FeaturedAward({ a, img, pos }: { a: Item; img: string; pos: string }) {
  return (
    <Reveal>
      <a
        href={a.href}
        className="group relative block aspect-[4/5] overflow-hidden border border-line bg-ink sm:aspect-[16/11]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className={`photo-grade absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${pos}`}
        />
        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-8 text-paper sm:p-9">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="label text-paper/80">{a.meta}</span>
              <h3 className="mt-3 font-serif text-3xl font-medium leading-[1.08] tracking-tight text-paper sm:text-4xl">
                {a.title}
              </h3>
              {a.blurb && (
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-paper/70">
                  {a.blurb}
                </p>
              )}
            </div>
            <ArrowUpRight className="mb-1.5 h-5 w-5 shrink-0 text-paper/80 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>
    </Reveal>
  );
}

/* Colour-blocked award tiles for the /awards page */
const TONES = [
  {
    card: "bg-emerald border-emerald",
    title: "text-paper",
    sub: "text-paper/70",
    meta: "text-paper/70",
    ghost: "text-white/[0.08]",
    arrow: "text-paper",
  },
  {
    card: "bg-paper border-line hover:border-emerald",
    title: "text-ink group-hover:text-emerald",
    sub: "text-muted",
    meta: "text-muted",
    ghost: "text-emerald/[0.07]",
    arrow: "text-emerald",
  },
  {
    card: "bg-ink border-ink",
    title: "text-paper",
    sub: "text-paper/60",
    meta: "text-paper/60",
    ghost: "text-white/[0.07]",
    arrow: "text-paper",
  },
  {
    card: "bg-paper border-line hover:border-emerald",
    title: "text-ink group-hover:text-emerald",
    sub: "text-muted",
    meta: "text-muted",
    ghost: "text-emerald/[0.07]",
    arrow: "text-emerald",
  },
];

function AwardTile({ a, i }: { a: Item; i: number }) {
  const t = TONES[i % TONES.length];
  return (
    <Reveal delay={(i % 3) * 0.05}>
      <a
        href={a.href}
        className={`group relative flex min-h-[230px] flex-col justify-between overflow-hidden border p-8 transition-all duration-500 hover:-translate-y-1 ${t.card}`}
      >
        <span
          className={`pointer-events-none absolute -right-3 -top-6 font-serif text-[7rem] font-medium leading-none transition-transform duration-500 group-hover:scale-105 ${t.ghost}`}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <div className="relative flex items-center justify-between">
          <span className={`label ${t.meta}`}>{a.meta}</span>
          <ArrowUpRight
            className={`h-4 w-4 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 ${t.arrow}`}
          />
        </div>
        <div className="relative mt-10">
          <h3
            className={`font-serif text-2xl font-medium leading-[1.12] tracking-tight transition-colors duration-500 sm:text-[1.7rem] ${t.title}`}
          >
            {a.title}
          </h3>
          {a.blurb && (
            <p className={`mt-2.5 text-sm leading-relaxed ${t.sub}`}>{a.blurb}</p>
          )}
        </div>
      </a>
    </Reveal>
  );
}

/* Full /awards grid */
export function AwardsList({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a, i) => (
        <AwardTile key={a.href} a={a} i={i} />
      ))}
    </div>
  );
}

export default function AwardsSection() {
  const featured = awards.slice(0, 2);
  return (
    <section id="awards" className="bg-mist px-5 py-14 sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <span className="label text-emerald">Awards</span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-none tracking-tight text-ink sm:text-4xl">
              Recognition
            </h2>
          </div>
          <MoreLink href="/awards" label="All Awards" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((a, i) => (
            <FeaturedAward key={a.href} a={a} img={FEATURED_IMAGES[i]} pos={FEATURED_POS[i]} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awards.slice(2, 5).map((a, i) => (
            <AwardTile key={a.href} a={a} i={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
