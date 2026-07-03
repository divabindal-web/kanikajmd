import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import Numbers from "@/components/Numbers";
import AboutSpread from "@/components/AboutSpread";
import NewsSection from "@/components/News";
import AwardsSection from "@/components/Awards";
import VideosSection from "@/components/Videos";
import SquareYards from "@/components/SquareYards";
import ConnectSection from "@/components/ConnectSection";

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
      <SquareYards />
      <ConnectSection />
    </>
  );
}
