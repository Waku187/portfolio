"use client";

import { motion } from "framer-motion";

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
  return (
    <section
      id="skills"
      className="relative z-10 py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="font-mono text-sm"
            style={{ color: "rgba(139,92,246,1)" }}
          >
            03.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & Toolbox
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(124,58,237,0.35), transparent)",
            }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border group hover:bg-white/5 transition-colors duration-300"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: group.dot }}
                />
                <h3 className="text-lg font-bold text-white tracking-tight uppercase">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-400 text-sm font-medium flex items-center gap-2 group-hover:text-slate-200 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
