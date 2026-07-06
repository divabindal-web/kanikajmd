"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Ambient emerald dot field.
 * v2: dots drift on a slow sine wave even without the cursor, and the
 * cursor warps, brightens and slightly enlarges nearby dots.
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

    const SPACING = 34;
    const DOT = 1.3;
    const RADIUS = 150;
    const PUSH = 26;
    const BASE_ALPHA = 0.13;
    const DRIFT = 3.2; // ambient wave amplitude, px
    const SPEED = 0.00045; // ambient wave speed

    let w = 0;
    let h = 0;
    let dpr = 1;
    let dots: { bx: number; by: number; x: number; y: number; ph: number }[] =
      [];
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
          dots.push({ bx, by, x: bx, y: by, ph: (i * 7 + j * 13) * 0.35 });
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

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const t = now * SPEED;

      if (mouse.x > -9000) {
        const g = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          RADIUS * 1.7
        );
        g.addColorStop(0, "rgba(18,75,68,0.055)");
        g.addColorStop(1, "rgba(18,75,68,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      for (const d of dots) {
        // ambient home position drifts on a slow wave
        const hx = d.bx + Math.sin(t + d.ph) * DRIFT;
        const hy = d.by + Math.cos(t * 0.9 + d.ph * 1.3) * DRIFT;

        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        let tx = hx;
        let ty = hy;
        let near = 0;
        if (dist < RADIUS) {
          near = 1 - dist / RADIUS;
          tx = hx + (dx / dist) * near * PUSH;
          ty = hy + (dy / dist) * near * PUSH;
        }
        d.x += (tx - d.x) * 0.11;
        d.y += (ty - d.y) * 0.11;

        // breathing alpha, brighter near the cursor
        const breathe = 0.03 * Math.sin(t * 1.6 + d.ph);
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT + near * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(18,75,68,${Math.max(
          0.05,
          BASE_ALPHA + breathe + near * 0.5
        )})`;
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
