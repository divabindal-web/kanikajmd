import type { Metadata } from "next";
import HeroField from "@/components/HeroField";
import { AwardsList } from "@/components/Awards";
import ConnectSection from "@/components/ConnectSection";
import { awards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "Recognitions and honours awarded to Kanika Gupta Shori and Square Yards, from Women Icon of the Year to 40 Under 40.",
};

export default function AwardsPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-paper px-5 pb-10 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
        <HeroField />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="label text-emerald">Awards</span>
            <span className="h-px w-8 bg-line" />
            <span className="label text-muted">{awards.length} recognitions</span>
          </div>
          <h1 className="mt-4 font-serif text-[clamp(2.6rem,7vw,5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            The <span className="italic text-emerald">honour roll</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            A decade of recognition for leadership, entrepreneurship and building
            in an industry that rarely made room.
          </p>
        </div>
      </header>

      <section className="bg-paper px-5 pb-16 sm:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <AwardsList items={awards} />
        </div>
      </section>

      <ConnectSection />
    </>
  );
}
