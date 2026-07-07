import type { Metadata } from "next";
import HeroField from "@/components/HeroField";
import { VideoCard, type Video } from "@/components/Videos";
import { ArrowUpRight, PlayIcon } from "@/components/Icons";
import { Reveal } from "@/components/Motion";
import ConnectSection from "@/components/ConnectSection";
import { videos, youtubeChannel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Talks, interviews and podcasts with Kanika Gupta Shori, Co-Founder and COO of Square Yards.",
};

/* Full-width horizontal feature, used when a group has a single item */
function FeatureStrip({ v, cta }: { v: Video; cta: string }) {
  return (
    <Reveal>
      <a
        href={`https://www.youtube.com/watch?v=${v.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-emerald lg:grid-cols-12"
      >
        <div className="relative lg:col-span-7">
          <div className="relative aspect-video h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
              alt={v.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/25 transition-colors duration-300 group-hover:bg-ink/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink transition-transform duration-300 group-hover:scale-110">
                <PlayIcon className="ml-0.5 h-5 w-5" />
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 lg:col-span-5 sm:p-10">
          <span className="label text-emerald/80">{v.tag}</span>
          <h3 className="font-serif text-2xl font-medium leading-[1.15] tracking-tight text-paper sm:text-3xl">
            {v.title}
          </h3>
          <span className="label mt-2 inline-flex items-center gap-2 text-paper">
            {cta}
            <ArrowUpRight className="h-3.5 w-3.5 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

function GroupHeader({ label, count }: { label: string; count: number }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="label text-emerald">{label}</span>
      <span className="h-px flex-1 bg-white/10" />
      <span className="label text-paper/40">{String(count).padStart(2, "0")}</span>
    </div>
  );
}

function Group({ items, cta }: { items: Video[]; cta: string }) {
  if (items.length === 1) return <FeatureStrip v={items[0]} cta={cta} />;
  return (
    <div
      className={`grid gap-8 ${
        items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((v) => (
        <VideoCard key={v.id} v={v} />
      ))}
    </div>
  );
}

export default function VideosPage() {
  const vids = videos.filter((v) => v.kind !== "podcast");
  const podcasts = videos.filter((v) => v.kind === "podcast");
  return (
    <>
      <header className="relative overflow-hidden bg-paper px-5 pb-12 pt-28 sm:px-8 sm:pt-36">
        <HeroField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="label text-emerald">Videos</span>
            <span className="h-px w-8 bg-line" />
            <span className="label text-muted">
              {vids.length} videos, {podcasts.length} podcast
              {podcasts.length === 1 ? "" : "s"}
            </span>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(3.2rem,9vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
            In conversation<span className="text-emerald">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            Talks, interviews and podcasts. Watch the full collection on her
            YouTube channel.
          </p>
        </div>
      </header>

      <section className="bg-ink px-5 py-14 text-paper sm:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <GroupHeader label="Videos" count={vids.length} />
          <Group items={vids} cta="Watch now" />

          {podcasts.length > 0 && (
            <div className="mt-14">
              <GroupHeader label="Podcasts" count={podcasts.length} />
              <Group items={podcasts} cta="Listen now" />
            </div>
          )}

          <div className="mt-12">
            <a
              href={youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 transition-colors hover:border-emerald"
            >
              <span className="label text-paper">Watch all on YouTube</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}
