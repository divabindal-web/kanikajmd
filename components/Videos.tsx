import { Reveal } from "./Motion";
import { PlayIcon, ArrowUpRight } from "./Icons";
import { videos, youtubeChannel } from "@/lib/content";

type Video = { id: string; title: string; tag: string };

function VideoCard({ v }: { v: Video }) {
  return (
    <Reveal>
      <a
        href={`https://www.youtube.com/watch?v=${v.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative aspect-video w-full overflow-hidden border border-white/10">
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
        <span className="label mt-4 block text-emerald/80">{v.tag}</span>
        <h3 className="mt-2 font-serif text-xl font-medium leading-snug tracking-tight text-paper transition-colors duration-300 group-hover:text-emerald/90 sm:text-2xl">
          {v.title}
        </h3>
      </a>
    </Reveal>
  );
}

export function VideosList({ items }: { items: Video[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v) => (
        <VideoCard key={v.id} v={v} />
      ))}
    </div>
  );
}

function WatchAll() {
  return (
    <a
      href={youtubeChannel}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 transition-colors hover:border-emerald"
    >
      <span className="label text-paper">Watch all on YouTube</span>
      <ArrowUpRight className="h-3.5 w-3.5 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function VideosSection() {
  const [featured, ...rest] = videos;
  return (
    <section id="videos" className="bg-ink px-5 py-20 text-paper sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="label text-emerald">Videos</span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-tight text-paper sm:text-5xl">
              In conversation
            </h2>
          </div>
          <div className="hidden sm:block">
            <WatchAll />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden border border-white/10">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${featured.id}`}
                title={featured.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <span className="label mt-4 block text-emerald/80">{featured.tag}</span>
            <h3 className="mt-2 font-serif text-2xl font-medium leading-snug tracking-tight text-paper">
              {featured.title}
            </h3>
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-5">
            {rest.map((v) => (
              <VideoCard key={v.id} v={v} />
            ))}
          </div>
        </div>

        <div className="mt-12 sm:hidden">
          <WatchAll />
        </div>
      </div>
    </section>
  );
}
