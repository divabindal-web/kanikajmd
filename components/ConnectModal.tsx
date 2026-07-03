"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Magnetic } from "./Motion";
import { SocialIcon, ArrowUpRight } from "./Icons";
import { socials, networkLinks, identity } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ConnectModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Connect with Kanika Gupta Shori"
            className="relative w-full max-w-lg border border-line bg-paper px-8 py-11 sm:px-11"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-emerald"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <p className="label text-emerald">Connect</p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-none tracking-tight text-ink">
              Let&rsquo;s talk.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {identity.title}. Reach out on any channel below.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <Magnetic key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 border border-line px-4 py-2.5 text-ink transition-colors duration-300 hover:border-emerald hover:bg-emerald hover:text-paper"
                  >
                    <SocialIcon name={s.name} className="h-4 w-4" />
                    <span className="label text-[0.68rem]">{s.label}</span>
                  </a>
                </Magnetic>
              ))}
            </div>

            <div className="mt-9 border-t border-line pt-6">
              <p className="label mb-4 text-muted">The Network</p>
              <ul className="space-y-2.5">
                {networkLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-serif text-xl text-ink transition-colors hover:text-emerald"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 text-emerald opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
