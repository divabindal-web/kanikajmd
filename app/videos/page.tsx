import type { Metadata } from "next";
import HeroField from "@/components/HeroField";
import { VideosList } from "@/components/Videos";
import { ArrowUpRight } from "@/components/Icons";
import ConnectSection from "@/components/ConnectSection";
import { videos, youtubeChannel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Talks, interviews and features with Kanika Gupta Shori, Co-Founder and COO of Square Yards.",
};

export default function VideosPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-paper px-5 pb-12 pt-28 sm:px-8 sm:pt-36">
        <HeroField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="label text-emerald">Videos</span>
            <span className="h-px w-8 bg-line" />
            <span className="label text-muted">{videos.length} conversations</span>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(3.2rem,9vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
            In conversation<span className="text-emerald">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            Talks, interviews and features. Watch the full collection on her
            YouTube channel.
          </p>
        </div>
      </header>

      <section className="bg-ink px-5 py-14 text-paper sm:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <VideosList items={videos} />
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
