import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        kicker="Awards"
        title={
          <>
            The <span className="italic text-emerald">honour roll</span>
          </>
        }
        intro="A decade of recognition for leadership, entrepreneurship and building in an industry that rarely made room."
      />
      <section className="bg-paper px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <AwardsList items={awards} />
        </div>
      </section>
      <ConnectSection />
    </>
  );
}
