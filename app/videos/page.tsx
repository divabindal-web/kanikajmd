import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        kicker="Videos"
        title={
          <>
            In <span className="italic text-emerald">conversation</span>
          </>
        }
        intro="Talks, interviews and features. Watch the full collection on her YouTube channel."
      />
      <section className="bg-ink px-5 py-16 text-paper sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <VideosList items={videos} />
          <div className="mt-14">
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
