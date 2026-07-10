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

/* Real LinkedIn preview of one post */
function PostEmbed({ post }: { post: Post }) {
  const embed = toEmbedUrl(post.url);
  return (
    <div className="w-[310px] shrink-0 snap-start sm:w-[350px]">
      <div className="overflow-hidden border border-paper/25 bg-paper shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
        {embed ? (
          <iframe
            src={embed}
            title="LinkedIn post"
            loading="lazy"
            className="h-[430px] w-full"
            allowFullScreen
          />
        ) : (
          <div className="flex h-[430px] items-center justify-center p-6 text-center text-sm text-graphite">
            {post.excerpt || "View this post on LinkedIn"}
          </div>
        )}
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-t border-line px-5 py-3.5 text-emerald"
        >
          <span className="label">Open on LinkedIn</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function LinkedInLatest() {
  const posts = linkedin.posts.filter((p) => p.url.trim().length > 0);
  const feed = linkedin.feedEmbedUrl.trim();
  const railRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) =>
    railRef.current?.scrollBy({ left: dir * 370, behavior: "smooth" });

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

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              {feed ? (
                <div className="overflow-hidden border border-paper/25 bg-paper shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
                  <iframe
                    src={feed}
                    title="Latest LinkedIn posts"
                    loading="lazy"
                    className="h-[520px] w-full"
                  />
                </div>
              ) : (
                <div
                  ref={railRef}
                  className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {posts.map((p) => (
                    <PostEmbed key={p.url} post={p} />
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
