"use client";

import { useRef } from "react";
import { Reveal, MaskLine, Magnetic } from "./Motion";
import { ArrowUpRight, SocialIcon } from "./Icons";
import { linkedin, identity } from "@/lib/content";
import { portraitPhoto } from "@/lib/images";

type Post = { url: string; excerpt?: string; date?: string };

function PostCard({ post, n }: { post: Post; n: number }) {
  const hasExcerpt = (post.excerpt ?? "").trim().length > 0;
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-[300px] shrink-0 snap-start flex-col border border-paper/25 bg-paper text-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1 sm:w-[340px]"
    >
      <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitPhoto}
          alt={identity.name}
          className="h-10 w-10 rounded-full border border-line object-cover"
        />
        <div className="min-w-0">
          <p className="truncate font-serif text-base font-medium leading-none text-ink">
            {identity.name}
          </p>
          <p className="mt-1 truncate text-[11px] text-muted">{identity.title}</p>
        </div>
        <SocialIcon name="linkedin" className="ml-auto h-4 w-4 shrink-0 text-emerald" />
      </div>

      <div className="flex-1 px-5 py-5">
        {hasExcerpt ? (
          <p className="font-serif text-lg font-medium italic leading-snug text-ink">
            &ldquo;{post.excerpt}&rdquo;
          </p>
        ) : (
          <p className="text-sm leading-relaxed text-graphite">
            {n === 1
              ? "Her latest note on building India's largest real estate marketplace."
              : "Notes on real estate, leadership and Square Yards."}
          </p>
        )}
        {post.date && <p className="label mt-3 text-muted">{post.date}</p>}
      </div>

      <div className="flex items-center justify-between border-t border-line px-5 py-3.5">
        <span className="label text-emerald">View post</span>
        <ArrowUpRight className="h-4 w-4 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}

export default function LinkedInLatest() {
  const posts = linkedin.posts.filter((p) => p.url.trim().length > 0);
  const railRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    railRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-emerald px-5 py-16 text-paper sm:px-8 md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/[0.05] blur-2xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <SocialIcon name="linkedin" className="h-4 w-4 text-paper/80" />
              <span className="label text-paper/70">Latest from LinkedIn</span>
            </div>

            <h2 className="mt-5 font-serif text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.02] tracking-tight text-paper">
              <MaskLine>The conversation</MaskLine>
              <MaskLine delay={0.08} className="italic">
                continues daily.
              </MaskLine>
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-paper/70">
                Notes on real estate, leadership and building Square Yards,
                straight from {identity.firstName.split(" ")[0]}.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href={linkedin.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-paper px-6 py-4 text-emerald transition-colors duration-300 hover:bg-mist"
                  >
                    <span className="label">Follow on LinkedIn</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Magnetic>
                {posts.length > 1 && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => scrollBy(-1)}
                      aria-label="Previous posts"
                      className="flex h-11 w-11 items-center justify-center border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-emerald"
                    >
                      <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
                    </button>
                    <button
                      onClick={() => scrollBy(1)}
                      aria-label="Next posts"
                      className="flex h-11 w-11 items-center justify-center border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-emerald"
                    >
                      <ArrowUpRight className="h-4 w-4 rotate-45" />
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div
                ref={railRef}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {posts.map((p, i) => (
                  <PostCard key={p.url} post={p} n={i + 1} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
