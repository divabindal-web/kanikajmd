"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { MaskLine } from "./Motion";
import HeroField from "./HeroField";
import { identity, socials } from "@/lib/content";
import { heroPhoto } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;
const TILT = 7; // max tilt in degrees

function TiltPhoto() {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 140, damping: 16, mass: 0.5 });
  const sry = useSpring(ry, { stiffness: 140, damping: 16, mass: 0.5 });
  const glare = useTransform(
    [gx, gy],
    ([x, y]) =>
      `radial-gradient(320px circle at ${x}% ${y}%, rgba(255,255,255,0.16), rgba(255,255,255,0) 60%)`
  );

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 2 * TILT);
    rx.set(-(py - 0.5) * 2 * TILT);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  };

  return (
    <div style={{ perspective: "1100px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          reduce
            ? undefined
            : { rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }
        }
        className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-mist shadow-[0_30px_70px_-30px_rgba(21,23,26,0.35)]"
      >
        {/* idle sway: a slow revolve when the cursor is elsewhere */}
        <motion.div
          animate={reduce ? undefined : { rotateY: [-1.6, 1.6] }}
          transition={
            reduce
              ? undefined
              : {
                  duration: 9,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
          }
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroPhoto}
            alt={identity.name}
            animate={reduce ? undefined : { scale: [1.02, 1.06] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: 16,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }
            }
            className="photo-grade h-full w-full object-cover"
          />
        </motion.div>

        {/* cursor-tracked light sheen */}
        {!reduce && (
          <motion.div
            style={{ backgroundImage: glare }}
            className="pointer-events-none absolute inset-0"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-paper px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:min-h-[92vh] lg:pt-32"
    >
      <HeroField />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[inherit] lg:grid-cols-12 lg:gap-14">
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
              href={socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
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

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          style={reduce ? undefined : { y: photoY }}
          className="lg:col-span-5"
        >
          <TiltPhoto />
        </motion.div>
      </div>
    </section>
  );
}
