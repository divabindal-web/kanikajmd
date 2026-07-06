import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import Numbers from "@/components/Numbers";
import AboutSpread from "@/components/AboutSpread";
import NewsSection from "@/components/News";
import AwardsSection from "@/components/Awards";
import VideosSection from "@/components/Videos";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <Numbers />
      <AboutSpread />
      <NewsSection />
      <AwardsSection />
      <VideosSection />
    </>
  );
}
