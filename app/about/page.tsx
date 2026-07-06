import type { Metadata } from "next";
import HeroField from "@/components/HeroField";
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
      <header className="relative overflow-hidden bg-paper px-5 pb-8 pt-28 sm:px-8 sm:pt-36">
        <HeroField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="label text-emerald">Profile</span>
            <span className="h-px w-8 bg-line" />
            <span className="label text-muted">The operator</span>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(3.2rem,9vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
            About<span className="text-emerald">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            Founder-operator, Wharton alumna and CFA Level 2 candidate, with a
            life that runs from boardrooms to the bottom of the Red Sea.
          </p>
        </div>
      </header>
      <AboutSpread page />
      <ConnectSection />
    </>
  );
}
