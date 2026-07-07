import { Reveal, MaskLine, Magnetic } from "./Motion";
import { ArrowUpRight, SocialIcon } from "./Icons";
import { linkedin, identity } from "@/lib/content";

/* Turns a normal LinkedIn post link into its official embed URL */
function toEmbedUrl(url: string): string | null {
  const m = url.match(/activity[:-](\d{10,})/);
  return m
    ? `https://www.linkedin.com/embed/feed/update/urn:li:activity:${m[1]}`
    : null;
}

export default function LinkedInLatest() {
  const embed = linkedin.postUrl ? toEmbedUrl(linkedin.postUrl) : null;
  const hasExcerpt = linkedin.featuredExcerpt.trim().length > 0;

  return (
    <section className="relative overflow-hidden bg-emerald px-5 py-16 text-paper sm:px-8 md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/[0.05] blur-2xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className={embed ? "lg:col-span-6" : "lg:col-span-7"}>
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

            {!embed && hasExcerpt ? (
              <Reveal delay={0.12}>
                <figure className="mt-7 border-l-2 border-paper/40 pl-5">
                  <blockquote className="max-w-xl font-serif text-xl font-medium italic leading-snug text-paper/90">
                    &ldquo;{linkedin.featuredExcerpt}&rdquo;
                  </blockquote>
                  {linkedin.featuredDate && (
                    <figcaption className="label mt-3 text-paper/50">
                      {linkedin.featuredDate}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ) : (
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-paper/70">
                  Notes on real estate, leadership and building Square Yards,
                  straight from {identity.firstName.split(" ")[0]}. Her newest
                  post is always one click away.
                </p>
              </Reveal>
            )}

            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Magnetic>
                  <a
                    href={linkedin.postUrl || linkedin.activity}
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

          {embed && (
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.1}>
                <div className="overflow-hidden border border-paper/25 bg-paper shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
                  <iframe
                    src={embed}
                    title="Latest LinkedIn post"
                    loading="lazy"
                    className="h-[540px] w-full"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
