"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ElectricBorder from "@/components/ElectricBorder";

const stats = [
  { number: "50+", label: "Projects Built" },
  { number: "7+", label: "Years Coding" },
  { number: "∞", label: "Lines Written" },
];

export default function AboutSection() {

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-2/3 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-4 mb-10 lg:mb-16"
        >
          <span
            className="font-mono text-sm"
            style={{ color: "rgba(139,92,246,1)" }}
          >
            01.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(124,58,237,0.35), transparent)",
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              {/* Subtle ambient glow */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-25 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  filter: "blur(30px)",
                }}
              />
              {/* ElectricBorder wraps the photo */}
              <ElectricBorder
                color="#7c3aed"
                speed={0.9}
                chaos={0.1}
                borderRadius={16}
                className="float"
              >
                <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/wall1.png"
                    alt="Wakung'uma Nyambe III"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(3,0,20,0.55) 0%, transparent 60%)",
                    }}
                  />
                </div>
              </ElectricBorder>
              {/* Floating label */}
              <motion.div
                className="float absolute -bottom-5 -right-5 glass rounded-xl px-4 py-2.5 text-sm font-semibold text-white border"
                style={{ borderColor: "rgba(255,255,255,0.1)", zIndex: 10 }}
              >
                💻 Software Engineer
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5 order-2 md:order-1"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: "rgba(203,213,225,1)" }}
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient font-semibold">
                Wakung&apos;uma Nyambe III
              </span>
              , a full-stack developer with a passion for building modern,
              scalable web and mobile applications that feel as good as they look.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(100,116,139,1)" }}
            >
              I work across the entire stack — crafting pixel-perfect UIs with
              React and Next.js, and architecting efficient back-end services.
              I enjoy the challenge of turning ideas into clean, purposeful code
              that solves real problems.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(100,116,139,1)" }}
            >
              When I&apos;m not coding, I&apos;m exploring new technologies and
              constantly pushing my skills to new heights.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 pt-4">
              {stats.map(({ number, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 text-center group hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {number}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "rgba(100,116,139,1)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
