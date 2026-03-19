"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    dot: "#7c3aed",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "JavaScript",
      "D3.js",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    dot: "#06b6d4",
    skills: ["Node.js", "Spring Boot", "Express", "REST APIs", "NextAuth", "Prisma"],
  },
  {
    category: "Database & Mobile",
    dot: "#a855f7",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Kotlin (Android)"],
  },
  {
    category: "Tools & DevOps",
    dot: "#10b981",
    skills: ["Git", "GitHub", "Vercel", "Docker", "Linux", "Figma"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="font-mono text-sm"
            style={{ color: "rgba(139,92,246,1)" }}
          >
            02.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills &amp; Technologies
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(124,58,237,0.35), transparent)",
            }}
          />
        </motion.div>

        {/* Grid of skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 group"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${group.dot}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: group.dot,
                    boxShadow: `0 0 10px ${group.dot}90`,
                  }}
                />
                <h3
                  className="font-semibold text-sm text-white tracking-wide"
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: gi * 0.1 + si * 0.04 + 0.3,
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      color: group.dot,
                      backgroundColor: `${group.dot}14`,
                      border: `1px solid ${group.dot}28`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
