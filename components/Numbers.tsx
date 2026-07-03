import { CountUp, Reveal } from "./Motion";
import { stats } from "@/lib/content";

export default function Numbers() {
  return (
    <section className="bg-emerald px-5 py-14 text-paper sm:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="label text-paper/70">By the Numbers</span>
          <span className="h-px flex-1 bg-white/15" />
          <span className="label text-paper/50">Square Yards</span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-5">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="border-t border-white/20 pt-4">
                <div className="num font-sans text-3xl font-light leading-none tracking-tight text-paper sm:text-[2.4rem]">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-2.5 text-[0.72rem] leading-snug text-paper/55">
                  {s.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="label mt-10 text-paper/45">
          Among the few Indian startups operating at EBITDA break-even
        </p>
      </div>
    </section>
  );
}
