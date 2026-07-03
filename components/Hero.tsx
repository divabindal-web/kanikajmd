"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MaskLine } from "./Motion";
import { identity, heroImage } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-paper px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:min-h-[92vh] lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Type */}
        <div className="lg:col-span-7">
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="label text-emerald"
          >
            {identity.kicker}
          </motion.p>

          <h1 className="mt-5 font-serif text-[clamp(3rem,8.5vw,6.6rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
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

        {/* Photo */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt={identity.name}
              onError={(e) => {
                const t = e.currentTarget;
                if (!t.dataset.fallback) {
                  t.dataset.fallback = "1";
                  t.src = "/kanika-portrait.jpg";
                }
              }}
              className="photo-grade h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
