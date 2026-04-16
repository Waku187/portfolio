"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import RotatingText from "@/components/RotatingText";

/* ───────────────────────────────────────────────────────────
   OrbitalSystem – Central glowing orb + tech badges in orbit
──────────────────────────────────────────────────────────── */

const INNER = [
  { label: "⚛️  React", delay: 0 },
  { label: "🟦  TypeScript", delay: -(24 / 3) },
  { label: "🟩  Node.js", delay: -(48 / 3) },
];
const OUTER = [
  { label: "▲  Next.js", delay: 0 },
  { label: "🐘  PostgreSQL", delay: -(40 / 3) },
  { label: "🌊  Tailwind", delay: -(80 / 3) },
];

function OrbitalSystem() {
  return (
    <div
      className="relative select-none lg:scale-100"
      style={{ width: 480, height: 480, flexShrink: 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 310,
          height: 310,
          border: "1px dashed rgba(124,58,237,0.2)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 430,
          height: 430,
          border: "1px dashed rgba(6,182,212,0.14)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 10 }}
      >
        <div
          className="absolute -inset-8 rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(6,182,212,0.15) 60%, transparent 80%)",
          }}
        />
        <div
          style={{
            width: 144,
            height: 144,
            borderRadius: "50%",
            padding: "2px",
            background:
              "conic-gradient(from 0deg, #7c3aed, #a855f7, #06b6d4, #7c3aed)",
            animation: "spin-orb 8s linear infinite",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#030014",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
              animation: "spin-orb 8s linear infinite reverse",
              animationName: "spin-orb-counter, orb-glow",
              animationDuration: "8s, 3s",
              animationTimingFunction: "linear, ease-in-out",
              animationIterationCount: "infinite, infinite",
              animationDirection: "reverse, alternate",
            }}
          >
            <span
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              WN
            </span>
            <span
              style={{
                fontSize: "0.5rem",
                color: "rgba(100,116,139,0.8)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              III
            </span>
          </div>
        </div>
      </div>

      {INNER.map(({ label, delay }) => (
        <div
          key={label}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            animation: "pivot-cw 24s linear infinite",
            animationDelay: `${delay}s`,
            zIndex: 20,
          }}
        >
          <div
            style={{
              animation: "badge-inner-orbit 24s linear infinite",
              animationDelay: `${delay}s`,
              position: "absolute",
            }}
          >
            <div style={{ transform: "translateY(-50%)" }}>
              <span
                className="flex items-center whitespace-nowrap rounded-full text-xs font-semibold text-white"
                style={{
                  padding: "6px 14px",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {label}
              </span>
            </div>
          </div>
        </div>
      ))}

      {OUTER.map(({ label, delay }) => (
        <div
          key={label}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            animation: "pivot-ccw 40s linear infinite",
            animationDelay: `${delay}s`,
            zIndex: 20,
          }}
        >
          <div
            style={{
              animation: "badge-outer-orbit 40s linear infinite",
              animationDelay: `${delay}s`,
              position: "absolute",
            }}
          >
            <div style={{ transform: "translateY(-50%)" }}>
              <span
                className="flex items-center whitespace-nowrap rounded-full text-xs font-semibold text-white"
                style={{
                  padding: "6px 14px",
                  background: "rgba(6,182,212,0.1)",
                  border: "1px solid rgba(6,182,212,0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────────────────
   Sub-components for cleaner HeroSection
──────────────────────────────────────────────────────────── */

function HeroCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
    >
      <button
        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
          boxShadow: "0 0 28px rgba(124,58,237,0.45), 0 0 60px rgba(124,58,237,0.12)",
        }}
      >
        View My Work
        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 glass"
        style={{ color: "rgba(226,232,240,1)" }}
      >
        Get In Touch
      </button>
    </motion.div>
  );
}

function HeroSocials() {
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/Waku187" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:homelanderthard@gmail.com" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="flex items-center gap-6"
    >
      {socials.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-white transition-colors duration-300"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────
   Main HeroSection Component
──────────────────────────────────────────────────────────── */

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    containerRef.current.style.setProperty("--mx", `${x}%`);
    containerRef.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-dvh flex items-center overflow-hidden"
    >
      {/* ══ Background layer ══ */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px circle at var(--mx, 50%) var(--my, 50%), rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      >
        {/* Subtle spotlight that follows mouse */}
        <div
          className="absolute inset-0 opacity-40 lg:opacity-100"
          style={{
            background:
              "radial-gradient(800px circle at var(--mx, 50%) var(--my, 50%), rgba(124,58,237,0.07) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ══ Main content — Luxury Split ══ */}
      <motion.div 
        style={{ opacity, y, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 min-h-dvh flex flex-col lg:grid lg:grid-cols-2 items-center lg:justify-center justify-center gap-12 lg:gap-0 pt-16 lg:pt-0"
      >
        
        {/* ── LEFT COLUMN (Desktop) / TOP & BOTTOM (Mobile) ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1 relative lg:h-auto h-auto w-full">
          {/* Zone 1: Name & Title */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 lg:hidden bg-violet-600/5 blur-[80px] rounded-full pointer-events-none w-64 h-32" />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[11px] uppercase tracking-[0.4em] text-violet-400 font-bold mb-2 block">
                Software Engineer
              </span>
              <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white mb-4">
                WAKUNG&apos;UMA<br />
                <span className="text-gradient">NYAMBE III</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mb-6 h-10"
            >
              <div className="h-px w-8 bg-white/20" />
              <div className="text-lg sm:text-xl text-slate-400 font-medium">
                I build <RotatingText
                  texts={["Modern Web Apps", "Mobile Apps", "Scalable Systems", "Seamless UX", "Robust APIs", "Premium Designs"]}
                  splitBy="words"
                  auto={true}
                  rotationInterval={3000}
                  mainClassName="inline-flex text-white font-bold"
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-slate-400 text-sm sm:text-lg max-w-lg leading-relaxed mb-0 lg:mb-12 font-medium"
            >
              Turning visionary ideas into world-class digital realities. 
              Focused on performance, scalability, and exceptional experiences across web and mobile.
            </motion.p>
          </div>

          {/* Zone 3 Desktop: Buttons & Socials (Standard Column Flow) */}
          <div className="hidden lg:flex flex-col items-start w-full gap-8 mt-12">
            <HeroCTAs />
            <HeroSocials />
          </div>
        </div>

        {/* ── CENTRAL ZONE 2 (Mobile: Flow, Desktop: Right Column) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-center order-2 lg:order-2 relative z-10 w-full py-2 lg:py-0"
        >
          <div className="relative group scale-[0.6] sm:scale-85 lg:scale-100 lg:h-auto h-65 flex items-center justify-center">
            <div className="absolute -inset-10 lg:-inset-20 bg-violet-600/10 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none group-hover:bg-violet-600/15 transition-colors duration-700" />
            <OrbitalSystem />
          </div>
        </motion.div>

      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-200"
        style={{ color: "rgba(71,85,105,1)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(148,163,184,1)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(71,85,105,1)")}
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.button>
    </section>
  );
}
