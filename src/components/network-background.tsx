"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Hub {
  x: number;
  y: number;
}

export const NETWORK_HUBS: Hub[] = [
  { x: 0.08, y: 0.22 },
  { x: 0.5, y: 0.06 },
  { x: 0.92, y: 0.22 },
  { x: 0.92, y: 0.82 },
  { x: 0.5, y: 0.97 },
  { x: 0.08, y: 0.82 },
];

const HUBS = NETWORK_HUBS;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function NetworkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context: CanvasRenderingContext2D = ctx;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let rafId = 0;
    let running = false;
    let lineColor = "oklch(0.6 0 0)";
    let accentColor = "oklch(0.53 0.22 264)";

    function readColors() {
      const styles = getComputedStyle(document.documentElement);
      lineColor = styles.getPropertyValue("--foreground").trim() || lineColor;
      accentColor = styles.getPropertyValue("--accent-solid").trim() || accentColor;
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 640 ? 22 : width < 1024 ? 34 : 46;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    }

    function hubPos(hub: Hub) {
      return { x: hub.x * width, y: hub.y * height };
    }

    function drawStatic() {
      readColors();
      resize();
      context.clearRect(0, 0, width, height);
      drawHubLoop(0);
      for (const p of particles) drawDot(p.x, p.y, 1.1, lineColor, 0.25);
    }

    function drawDot(x: number, y: number, r: number, color: string, alpha: number) {
      context.globalAlpha = alpha;
      context.fillStyle = color;
      context.beginPath();
      context.arc(x, y, r, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 1;
    }

    function drawHubLoop(t: number) {
      const pts = HUBS.map(hubPos);
      context.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const b = pts[(i + 1) % pts.length];
        context.strokeStyle = lineColor;
        context.globalAlpha = 0.12;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
        context.globalAlpha = 1;

        const phase = i / pts.length;
        const progress = (t * 0.00012 + phase) % 1;
        const px = a.x + (b.x - a.x) * progress;
        const py = a.y + (b.y - a.y) * progress;
        drawDot(px, py, 2.2, accentColor, 0.8);
      }
    }

    function frame(t: number) {
      if (!running) return;
      context.clearRect(0, 0, width, height);

      drawHubLoop(t);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        drawDot(p1.x, p1.y, 1.1, lineColor, 0.35);
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist) {
            context.globalAlpha = (1 - dist / maxDist) * 0.15;
            context.strokeStyle = lineColor;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      }

      rafId = requestAnimationFrame(frame);
    }

    function start() {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    readColors();
    resize();

    if (reduceMotionQuery.matches) {
      drawStatic();
    } else {
      start();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduceMotionQuery.matches) return;
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (reduceMotionQuery.matches) return;
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (reduceMotionQuery.matches) drawStatic();
      }, 150);
    };
    window.addEventListener("resize", onResize);

    const onMotionChange = () => {
      if (reduceMotionQuery.matches) {
        stop();
        drawStatic();
      } else {
        start();
      }
    };
    reduceMotionQuery.addEventListener("change", onMotionChange);

    const themeObserver = new MutationObserver(() => {
      readColors();
      if (reduceMotionQuery.matches) drawStatic();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      stop();
      io.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      reduceMotionQuery.removeEventListener("change", onMotionChange);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
