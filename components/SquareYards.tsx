import { Reveal } from "./Motion";
import { SocialIcon, ArrowUpRight } from "./Icons";
import { squareYardsShort, squareYardsSocials, networkLinks } from "@/lib/content";

export default function SquareYards() {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <span className="label text-emerald">The Company</span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-none tracking-tight text-ink sm:text-5xl">
            Square <span className="italic text-emerald">Yards</span>
          </h2>
          <p className="mt-4 text-sm text-muted">
            India&rsquo;s largest primary residential platform
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="text-[1.02rem] leading-[1.75] text-graphite">
              {squareYardsShort}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex items-center gap-4 border-t border-line pt-7">
              <span className="label text-muted">Follow</span>
              <div className="flex gap-4">
                {squareYardsSocials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Square Yards on ${s.label}`}
                    className="text-graphite transition-colors duration-300 hover:text-emerald"
                  >
                    <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              {networkLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-300 hover:text-emerald"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 text-emerald opacity-60 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
