import { CountUp, Reveal } from "./Motion";
import { stats } from "@/lib/content";

export default function Numbers() {
  return (
    <section className="bg-emerald px-5 py-12 text-paper sm:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <span className="label text-paper/60">Square Yards by the numbers</span>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <div className="num font-serif text-4xl font-medium leading-none tracking-tight text-paper sm:text-5xl">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs leading-snug text-paper/55">
                  {s.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="label mt-8 text-paper/40">
          Among the few Indian startups operating at EBITDA break-even
        </p>
      </div>
    </section>
  );
}
