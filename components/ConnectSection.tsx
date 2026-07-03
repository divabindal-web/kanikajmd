import { Reveal, MaskLine, Magnetic } from "./Motion";
import { SocialIcon } from "./Icons";
import { socials } from "@/lib/content";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-emerald px-5 py-24 text-paper sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <span className="label text-paper/60">Connect</span>
        <h2 className="mt-5 font-serif text-[clamp(2.6rem,7.5vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.02em] text-paper">
          <MaskLine delay={0.05}>Let&rsquo;s build something</MaskLine>
          <MaskLine delay={0.12} className="italic">
            worth keeping.
          </MaskLine>
        </h2>

        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-wrap gap-3">
            {socials.map((s) => (
              <Magnetic key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 border border-white/30 px-5 py-3 text-paper transition-colors duration-300 hover:bg-paper hover:text-emerald"
                >
                  <SocialIcon name={s.name} className="h-4 w-4" />
                  <span className="label text-[0.68rem]">{s.label}</span>
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
