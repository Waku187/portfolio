"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Farm Management System",
    description:
      "A comprehensive platform for managing cattle, livestock, and farm inventory. Streamlines all aspects of farm operations with a clean, data-driven interface.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://cms-kappa-three.vercel.app/login",
    accent: "#7c3aed",
  },
  {
    num: "02",
    title: "Car Showcase & Rental",
    description:
      "A sleek platform to browse, discover, rent, and book cars. Features advanced search, rich car details, and a smooth booking experience.",
    tech: ["React", "Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    liveUrl: "https://car-showcase-dusky-six.vercel.app/",
    accent: "#06b6d4",
  },
  {
    num: "03",
    title: "Analytics Dashboard",
    description:
      "A clean, modern admin dashboard featuring intuitive UI for monitoring key metrics and navigating complex data at a glance.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://next-dash101.vercel.app/login",
    accent: "#a855f7",
  },
];

function SpotlightCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotRef.current) return;
    const rect = spotRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotRef.current.style.setProperty("--x", `${x}px`);
    spotRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative h-full"
    >
      <div
        ref={spotRef}
        className="relative h-full glass rounded-3xl p-8 lg:p-10 overflow-hidden border transition-colors duration-500 hover:bg-white/5"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${project.accent}15, transparent 40%)`,
        }}
      >
        {/* Project Number & Header */}
        <div className="flex justify-between items-start mb-8">
          <span
            className="text-5xl font-black opacity-10 font-mono tracking-tighter"
            style={{ color: project.accent }}
          >
            {project.num}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-white/10 hover:scale-110 transition-transform duration-300"
            style={{ color: project.accent }}
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Decorative corner glow */}
        <div
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: project.accent }}
        />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 right-0 w-1/2 h-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span
            className="font-mono text-sm"
            style={{ color: "rgba(139,92,246,1)" }}
          >
            02.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Selected Works
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(124,58,237,0.35), transparent)",
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <SpotlightCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
