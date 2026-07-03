import { Marquee } from "./Motion";
import { pressNames } from "@/lib/content";

export default function FeaturedIn() {
  const items = (
    <>
      {pressNames.map((n) => (
        <span key={n} className="flex items-center">
          <span className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-[1.7rem]">
            {n}
          </span>
          <span className="mx-9 h-1.5 w-1.5 rounded-full bg-emerald/45" />
        </span>
      ))}
    </>
  );

  return (
    <section className="border-y border-line bg-mist py-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:gap-10 sm:px-8">
        <span className="label shrink-0 text-muted">Featured In</span>
        <div className="relative flex-1 overflow-hidden">
          <Marquee>{items}</Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-mist to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-mist to-transparent" />
        </div>
      </div>
    </section>
  );
}
