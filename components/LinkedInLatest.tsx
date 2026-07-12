"use client";

import { useRef } from "react";
import { Reveal, MaskLine, Magnetic } from "./Motion";
import { ArrowUpRight, SocialIcon } from "./Icons";
import { linkedin, identity } from "@/lib/content";

type Post = { url: string; excerpt?: string; date?: string };

function toEmbedUrl(url: string): string | null {
  const m = url.match(/activity[:-](\d{10,})/);
  return m
    ? `https://www.linkedin.com/embed/feed/update/urn:li:activity:${m[1]}`
    : null;
}

/* One post: LinkedIn's real embed at its natural proportions */
function PostCard({ post }: { post: Post }) {
  const embed = toEmbedUrl(post.url);
  if (!embed) return null;
  return (
    <div className="w-[330px] shrink-0 snap-start sm:w-[370px]">
      <div className="overflow-hidden border border-paper/25 bg-paper shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
        <iframe
          src={embed}
          title="LinkedIn post by Kanika Gupta Shori"
          loading="lazy"
          className="h-[560px] w-full"
          allowFullScreen
        />
      </div>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-3 inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
      >
        <span className="label">Open on LinkedIn</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

/* Closing tile: browse everything */
function AllPostsTile() {
  return (
    <a
      href={linkedin.activity}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-[240px] shrink-0 snap-start flex-col items-start justify-between self-stretch border border-paper/25 bg-emerald-deep p-7 transition-colors duration-300 hover:bg-ink/40 sm:w-[260px]"
      style={{ minHeight: 560 }}
    >
      <SocialIcon name="linkedin" className="h-6 w-6 text-paper/70" />
      <div>
        <p className="font-serif text-3xl font-medium leading-[1.05] text-paper">
          Every post,
          <br />
          <span className="italic">one feed.</span>
        </p>
        <span className="label mt-6 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-paper">
          View all posts
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

export default function LinkedInLatest() {
  const posts = linkedin.posts.filter((p) => p.url.trim().length > 0);
  const feed = linkedin.feedEmbedUrl.trim();
  const railRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) =>
    railRef.current?.scrollBy({ left: dir * 395, behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-emerald px-5 py-16 text-paper sm:px-8 md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/[0.05] blur-2xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <SocialIcon name="linkedin" className="h-4 w-4 text-paper/80" />
              <span className="label text-paper/70">Latest from LinkedIn</span>
            </div>

            <h2 className="mt-5 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.02] tracking-tight text-paper">
              <MaskLine>The conversation</MaskLine>
              <MaskLine delay={0.08} className="italic">
                continues daily.
              </MaskLine>
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-paper/70">
                Notes on real estate, leadership and building Square Yards,
                straight from {identity.firstName.split(" ")[0]}. Scroll the
                posts, open the ones that pull you in.
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
                {!feed && posts.length > 1 && (
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

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              {feed ? (
                <div className="overflow-hidden border border-paper/25 bg-paper shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
                  <iframe
                    src={feed}
                    title="Latest LinkedIn posts"
                    loading="lazy"
                    className="h-[560px] w-full"
                  />
                </div>
              ) : (
                <div
                  ref={railRef}
                  className="flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, black 94%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, black 94%, transparent)",
                  }}
                >
                  {posts.map((p) => (
                    <PostCard key={p.url} post={p} />
                  ))}
                  <AllPostsTile />
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
