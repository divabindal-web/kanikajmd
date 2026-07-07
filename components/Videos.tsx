import { Reveal } from "./Motion";
import { PlayIcon, ArrowUpRight } from "./Icons";
import { videos, youtubeChannel } from "@/lib/content";

export type Video = { id: string; title: string; tag: string; kind?: string };

export function VideoCard({ v }: { v: Video }) {
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

function SideVideo({ v }: { v: Video }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${v.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5"
    >
      <div className="relative w-36 shrink-0 overflow-hidden border border-white/10 sm:w-40">
        <div className="aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
            alt={v.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-ink transition-transform duration-300 group-hover:scale-110">
            <PlayIcon className="ml-0.5 h-3.5 w-3.5" />
          </span>
        </span>
      </div>
      <div>
        <span className="label block text-emerald/80">{v.tag}</span>
        <h3 className="mt-1.5 font-serif text-lg font-medium leading-snug tracking-tight text-paper transition-colors duration-300 group-hover:text-emerald/90">
          {v.title}
        </h3>
      </div>
    </a>
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

export default function VideosSection() {
  const [featured, ...rest] = videos;
  return (
    <section id="videos" className="bg-ink px-5 py-14 text-paper sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <span className="label text-emerald">Videos</span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-none tracking-tight text-paper sm:text-4xl">
              In conversation
            </h2>
          </div>
        </div>

        <div className="grid gap-9 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <Reveal className="lg:col-span-8">
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
            <span className="label mt-4 block text-emerald/80">
              {featured.tag}
            </span>
            <h3 className="mt-2 font-serif text-2xl font-medium leading-snug tracking-tight text-paper">
              {featured.title}
            </h3>
          </Reveal>

          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="flex flex-col gap-7">
                {rest.map((v) => (
                  <SideVideo key={v.id} v={v} />
                ))}
              </div>
              <a
                href={youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/15 px-5 py-4 transition-colors duration-300 hover:border-emerald"
              >
                <span className="label text-paper">Watch all on YouTube</span>
                <ArrowUpRight className="h-4 w-4 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
