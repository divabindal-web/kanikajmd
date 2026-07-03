import Link from "next/link";
import { ArrowUpRight } from "./Icons";

export default function MoreLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex shrink-0 items-center gap-2 border-b border-line pb-1 transition-colors hover:border-emerald"
    >
      <span className="label text-emerald">{label}</span>
      <ArrowUpRight className="h-3.5 w-3.5 text-emerald transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
