import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSpread from "@/components/AboutSpread";
import ConnectSection from "@/components/ConnectSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kanika Gupta Shori, Co-Founder and COO of Square Yards. Wharton alumna, CFA Level 2 candidate, builder of India's largest real estate marketplace, traveller and PADI certified diver.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Profile"
        title={
          <>
            The <span className="italic text-emerald">operator</span>
          </>
        }
        intro="Founder-operator, Wharton alumna and CFA Level 2 candidate, with a life that runs from boardrooms to the bottom of the Red Sea."
      />
      <AboutSpread page />
      <ConnectSection />
    </>
  );
}
