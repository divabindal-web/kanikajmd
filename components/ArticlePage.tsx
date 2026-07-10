import Link from "next/link";
import HeroField from "./HeroField";
import ConnectSection from "./ConnectSection";
import { ArrowUpRight } from "./Icons";
import { getArticleBody } from "@/lib/articles";

type Item = { title: string; tag?: string; meta?: string; date?: string; href: string };

export default function ArticlePage({
  section,
  sectionLabel,
  backHref,
  backLabel,
  item,
  slug,
}: {
  section: "news" | "awards" | "blogs";
  sectionLabel: string;
  backHref: string;
  backLabel: string;
  item: Item;
  slug: string;
}) {
  const body = getArticleBody(section, slug);
  const metaBits = [item.tag ?? item.meta, item.date].filter(Boolean);

  return (
    <>
      <header className="relative overflow-hidden bg-paper px-5 pb-10 pt-28 sm:px-8 sm:pt-36">
        <HeroField />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label text-emerald">{sectionLabel}</span>
            {metaBits.map((m) => (
              <span key={m} className="flex items-center gap-3">
                <span className="h-px w-6 bg-line" />
                <span className="label text-muted">{m}</span>
              </span>
            ))}
          </div>
          <h1 className="mt-6 font-serif text-[clamp(2rem,5.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink">
            {item.title}
          </h1>
        </div>
      </header>

      <article className="bg-paper px-5 pb-16 sm:px-8 md:pb-20">
        <div className="mx-auto max-w-3xl">
          {body ? (
            <div className="space-y-6 border-t border-line pt-10">
              {body.paras.map((p, i) => (
                <p
                  key={i}
                  className={`text-[1.05rem] leading-[1.85] text-graphite ${
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-emerald"
                      : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          ) : (
            <div className="border-t border-line pt-10">
              <p className="text-[1.05rem] leading-[1.85] text-graphite">
                The full text of this piece is being restored from the archive
                and will appear here shortly.
              </p>
            </div>
          )}

          <div className="mt-12 border-t border-line pt-7">
            <Link
              href={backHref}
              className="group inline-flex items-center gap-2 border-b border-line pb-1 transition-colors hover:border-emerald"
            >
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-[135deg] text-emerald" />
              <span className="label text-emerald">{backLabel}</span>
            </Link>
          </div>
        </div>
      </article>

      <ConnectSection />
    </>
  );
}
