"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Ambient, low-opacity emerald dot field that gently warps and brightens
 * around the cursor. Sits behind the hero content, ignores pointer events.
 */
export default function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 36; // gap between dots
    const DOT = 1.35; // base dot radius
    const RADIUS = 140; // cursor influence radius
    const PUSH = 24; // how far dots slide from the cursor
    const BASE_ALPHA = 0.14; // resting opacity (subtle)

    let w = 0;
    let h = 0;
    let dpr = 1;
    let dots: { bx: number; by: number; x: number; y: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const bx = i * SPACING;
          const by = j * SPACING;
          dots.push({ bx, by, x: bx, y: by });
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = `rgba(18,75,68,${BASE_ALPHA})`;
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.bx, d.by, DOT, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      if (mouse.x > -9000) {
        const g = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          RADIUS * 1.7
        );
        g.addColorStop(0, "rgba(18,75,68,0.05)");
        g.addColorStop(1, "rgba(18,75,68,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        let tx = d.bx;
        let ty = d.by;
        let near = 0;
        if (dist < RADIUS) {
          near = 1 - dist / RADIUS;
          tx = d.bx + (dx / dist) * near * PUSH;
          ty = d.by + (dy / dist) * near * PUSH;
        }
        d.x += (tx - d.x) * 0.12;
        d.y += (ty - d.y) * 0.12;
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT + near * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(18,75,68,${BASE_ALPHA + near * 0.5})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();

    const ro = new ResizeObserver(() => {
      build();
      if (reduce) drawStatic();
    });
    ro.observe(parent);

    if (reduce) {
      drawStatic();
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
