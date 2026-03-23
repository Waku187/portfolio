"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const revealRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotRef.current) return;
    const rect = spotRef.current.getBoundingClientRect();
    spotRef.current.style.setProperty(
      "--sx",
      `${e.clientX - rect.left}px`
    );
    spotRef.current.style.setProperty(
      "--sy",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <motion.div
      ref={revealRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
      transition={{ duration: 0.65, delay: index * 0.14, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Gradient border wrapper */}
      <div
        ref={spotRef}
        onMouseMove={handleMouseMove}
        className="h-full rounded-2xl p-px group hover:-translate-y-2 transition-transform duration-300 cursor-default"
        style={{
          background: `linear-gradient(135deg, ${project.accent}50, rgba(255,255,255,0.04) 60%, ${project.accent}20)`,
        }}
      >
        <div
          className="h-full rounded-[inherit] p-7 relative overflow-hidden flex flex-col"
          style={{ background: "#030014" }}
        >
          {/* Spotlight highlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(380px circle at var(--sx, 50%) var(--sy, 50%), ${project.accent}14 0%, transparent 55%)`,
            }}
          />

          {/* Big number */}
          <span
            className="text-7xl font-bold leading-none select-none mb-3"
            style={{ color: `${project.accent}18` }}
          >
            {project.num}
          </span>

          {/* Title */}
          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6 flex-1"
            style={{ color: "rgba(100,116,139,1)" }}
          >
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-medium"
                style={{
                  color: project.accent,
                  backgroundColor: `${project.accent}12`,
                  border: `1px solid ${project.accent}28`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2.5 group/link"
            style={{ color: project.accent }}
          >
            <ExternalLink
              size={14}
              className="group-hover/link:scale-110 transition-transform"
            />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {

  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/5 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 100px 0px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-3"
        >
          <span
            className="font-mono text-sm"
            style={{ color: "rgba(139,92,246,1)" }}
          >
            03.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Projects
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(124,58,237,0.35), transparent)",
            }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px 100px 0px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mb-14 ml-10"
          style={{ color: "rgba(100,116,139,1)" }}
        >
          A selection of things I&apos;ve built
        </motion.p>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <SpotlightCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
