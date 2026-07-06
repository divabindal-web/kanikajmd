import Link from "next/link";
import { SocialIcon } from "./Icons";
import { socials, identity } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <Link
          href="/"
          className="whitespace-nowrap font-serif text-xl font-medium tracking-tight text-ink"
        >
          {identity.firstName}{" "}
          <span className="italic text-emerald">{identity.lastName}</span>
        </Link>

        <div className="flex items-center gap-5">
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

        <p className="text-xs text-muted">
          © Square Yards Consulting Private Limited | 2025
        </p>
      </div>
    </footer>
  );
}
