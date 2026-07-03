import Link from "next/link";
import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import { bioShort, bioFull, highlights, quote, identity } from "@/lib/content";
import { portraitPhoto } from "@/lib/images";

export default function AboutSpread({ page = false }: { page?: boolean }) {
  const paras = page ? bioFull : bioShort;
  return (
    <section id="about" className="bg-paper px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {!page && (
          <div className="mb-12 flex items-center gap-4">
            <span className="label text-emerald">About</span>
            <span className="h-px w-14 bg-line" />
            <span className="label text-muted">The operator</span>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={portraitPhoto}
                alt={identity.name}
                className="photo-grade h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5">
              {paras.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-[1.02rem] leading-[1.75] text-graphite">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <ul className="mt-9 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center justify-center bg-paper px-4 py-5 text-center">
                    <span className="font-serif text-lg font-medium leading-tight text-ink">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <figure className="mt-9 border-l-2 border-emerald pl-6">
                <blockquote className="font-serif text-2xl font-medium italic leading-snug text-ink sm:text-[1.7rem]">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <figcaption className="label mt-3 text-muted">
                  {quote.attribution}
                </figcaption>
              </figure>
            </Reveal>

            {!page && (
              <Reveal delay={0.2}>
                <Link
                  href="/about"
                  className="group mt-9 inline-flex items-center gap-2 border-b border-line pb-1 transition-colors hover:border-emerald"
                >
                  <span className="label text-emerald">Read full profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-emerald transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
