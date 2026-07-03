"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MaskLine } from "./Motion";
import HeroField from "./HeroField";
import { identity } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex items-center overflow-hidden bg-paper px-5 pb-24 pt-32 sm:px-8 lg:min-h-[92vh]">
      <HeroField />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label text-emerald"
          >
            {identity.kicker}
          </motion.p>

          <h1 className="mt-5 font-serif text-[clamp(3rem,8.5vw,6.8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            <MaskLine immediate delay={0.05}>
              {identity.firstName}
            </MaskLine>
            <MaskLine immediate delay={0.13} className="italic text-emerald">
              {identity.lastName}
            </MaskLine>
          </h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-graphite"
          >
            {identity.positioning}
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <a
              href="#connect"
              className="group inline-flex items-center gap-2 bg-emerald px-6 py-3.5 text-paper transition-colors duration-300 hover:bg-emerald-deep"
            >
              <span className="label text-[0.68rem]">Connect</span>
            </a>
            <Link
              href="/about"
              className="label border-b border-line pb-1 text-graphite transition-colors duration-300 hover:border-emerald hover:text-emerald"
            >
              Read her profile
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
