import Link from "next/link";
import { Reveal } from "./Motion";
import { ArrowUpRight } from "./Icons";
import { bioShort, bioFull, highlights, quote, identity } from "@/lib/content";
import { portraitPhoto } from "@/lib/images";

export default function AboutSpread({ page = false }: { page?: boolean }) {
  const paras = page ? bioFull : bioShort;
  return (
    <section id="about" className="bg-paper px-5 py-14 sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        {!page && (
          <div className="mb-10 flex items-center gap-4">
            <span className="label text-emerald">About</span>
            <span className="h-px w-14 bg-line" />
            <span className="label text-muted">The operator</span>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-line lg:sticky lg:top-24">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={portraitPhoto}
                alt={identity.name}
                className="photo-grade h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-4">
              {paras.map((p, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="text-[1rem] leading-[1.7] text-graphite">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {highlights.map((h) => (
                  <span
                    key={h}
                    className="border border-line px-4 py-2 font-serif text-base font-medium leading-none text-ink"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <figure className="mt-7 border-l-2 border-emerald pl-5">
                <blockquote className="font-serif text-xl font-medium italic leading-snug text-ink sm:text-2xl">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <figcaption className="label mt-2.5 text-muted">
                  {quote.attribution}
                </figcaption>
              </figure>
            </Reveal>

            {!page && (
              <Reveal delay={0.16}>
                <Link
                  href="/about"
                  className="group mt-7 inline-flex items-center gap-2 border-b border-line pb-1 transition-colors hover:border-emerald"
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
