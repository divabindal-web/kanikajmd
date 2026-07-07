import { Reveal, MaskLine, Magnetic } from "./Motion";
import { ArrowUpRight, SocialIcon } from "./Icons";
import { linkedin, identity } from "@/lib/content";
import { portraitPhoto } from "@/lib/images";

export default function LinkedInLatest() {
  const hasExcerpt = linkedin.featuredExcerpt.trim().length > 0;
  const postHref = linkedin.postUrl || linkedin.activity;

  return (
    <section className="relative overflow-hidden bg-emerald px-5 py-16 text-paper sm:px-8 md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/[0.05] blur-2xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <SocialIcon name="linkedin" className="h-4 w-4 text-paper/80" />
              <span className="label text-paper/70">Latest from LinkedIn</span>
            </div>

            <h2 className="mt-5 font-serif text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.02] tracking-tight text-paper">
              <MaskLine>The conversation</MaskLine>
              <MaskLine delay={0.08} className="italic">
                continues daily.
              </MaskLine>
            </h2>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-paper/70">
                Notes on real estate, leadership and building Square Yards,
                straight from {identity.firstName.split(" ")[0]}. Her newest
                post is always one click away.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Magnetic>
                  <a
                    href={postHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-paper px-6 py-4 text-emerald transition-colors duration-300 hover:bg-mist"
                  >
                    <span className="label">Read her latest post</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Magnetic>
                <a
                  href={linkedin.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-paper/30 px-6 py-4 text-paper transition-colors duration-300 hover:bg-paper hover:text-emerald"
                >
                  <span className="label">Follow on LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Designed post card, always rendered */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <a
                href={postHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-paper/25 bg-paper text-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3.5 border-b border-line px-6 py-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={portraitPhoto}
                    alt={identity.name}
                    className="h-11 w-11 rounded-full border border-line object-cover"
                  />
                  <div>
                    <p className="font-serif text-lg font-medium leading-none text-ink">
                      {identity.name}
                    </p>
                    <p className="mt-1.5 text-xs text-muted">{identity.title}</p>
                  </div>
                  <SocialIcon
                    name="linkedin"
                    className="ml-auto h-5 w-5 shrink-0 text-emerald"
                  />
                </div>

                <div className="px-6 py-6">
                  {hasExcerpt ? (
                    <>
                      <p className="font-serif text-xl font-medium italic leading-snug text-ink">
                        &ldquo;{linkedin.featuredExcerpt}&rdquo;
                      </p>
                      {linkedin.featuredDate && (
                        <p className="label mt-4 text-muted">
                          {linkedin.featuredDate}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-[0.95rem] leading-relaxed text-graphite">
                      Real numbers, hard lessons and the story of building
                      India&rsquo;s largest real estate marketplace, written as
                      it happens.
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-line px-6 py-4">
                  <span className="label text-emerald">
                    View post on LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
