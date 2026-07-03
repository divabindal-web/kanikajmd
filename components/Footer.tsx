import Link from "next/link";
import { SocialIcon, ArrowUpRight } from "./Icons";
import { socials, networkLinks, identity } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-tight text-ink"
            >
              {identity.firstName}{" "}
              <span className="italic text-emerald">{identity.lastName}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {identity.title}.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="label mb-4 text-muted">Network</p>
              <ul className="space-y-2.5">
                {networkLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-graphite transition-colors duration-300 hover:text-emerald"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 text-emerald opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label mb-4 text-muted">Connect</p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-graphite transition-colors duration-300 hover:text-emerald"
                  >
                    <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © Square Yards Consulting Private Limited | 2025
          </p>
          <p className="label text-muted">{identity.name}</p>
        </div>
      </div>
    </footer>
  );
}
