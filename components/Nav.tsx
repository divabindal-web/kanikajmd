"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, socials, identity } from "@/lib/content";
import { SocialIcon } from "./Icons";
import { Magnetic } from "./Motion";
import ConnectModal from "./ConnectModal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[75] transition-all duration-500 ${
          scrolled && !menuOpen
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[70px]">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="whitespace-nowrap font-serif text-xl font-medium leading-none tracking-tight text-ink sm:text-[1.65rem]"
          >
            {identity.firstName} <span className="italic text-emerald">{identity.lastName}</span>
          </Link>

          <div className="flex items-center gap-7">
            <ul className="hidden items-center gap-7 md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="label text-graphite transition-colors duration-300 hover:text-emerald"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Magnetic>
              <button
                onClick={() => setConnectOpen(true)}
                className="hidden border border-emerald px-4 py-2 text-emerald transition-colors duration-300 hover:bg-emerald hover:text-paper md:block"
              >
                <span className="label text-[0.68rem]">Connect</span>
              </button>
            </Magnetic>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative z-[95] flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
            >
              <span
                className={`h-px w-6 origin-center transition-all duration-300 ${
                  menuOpen ? "translate-y-[3.5px] rotate-45 bg-paper" : "bg-ink"
                }`}
              />
              <span
                className={`h-px w-6 origin-center transition-all duration-300 ${
                  menuOpen ? "-translate-y-[3.5px] -rotate-45 bg-paper" : "bg-ink"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-1 flex-col justify-center px-7">
              <ul className="space-y-1">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: EASE }}
                    className="border-b border-white/10 py-4"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-4xl text-paper transition-colors hover:text-emerald"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
                onClick={() => {
                  setMenuOpen(false);
                  setConnectOpen(true);
                }}
                className="mt-9 w-fit border border-white/30 px-6 py-3 text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                <span className="label">Connect</span>
              </motion.button>
            </div>

            <div className="flex gap-5 px-7 pb-10">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/55 transition-colors hover:text-emerald"
                >
                  <SocialIcon name={s.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConnectModal open={connectOpen} onClose={() => setConnectOpen(false)} />
    </>
  );
}
