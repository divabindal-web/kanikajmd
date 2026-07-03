import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { NewsList } from "@/components/News";
import ConnectSection from "@/components/ConnectSection";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Press, features and commentary from Kanika Gupta Shori on women leadership, technology and the Indian real estate market.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="News"
        title={
          <>
            In the <span className="italic text-emerald">press</span>
          </>
        }
        intro="Features, interviews and market commentary across leading Indian and global publications."
      />
      <section className="bg-paper px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <NewsList items={news} />
        </div>
      </section>
      <ConnectSection />
    </>
  );
}
