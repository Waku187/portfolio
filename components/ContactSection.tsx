"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Waku187",
    href: "https://github.com/Waku187",
    accent: "#7c3aed",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Wakung'uma Nyambe III",
    href: "https://linkedin.com",
    accent: "#06b6d4",
  },
  {
    icon: Mail,
    label: "Email",
    value: "homelanderthard@gmail.com",
    href: "mailto:homelanderthard@gmail.com",
    accent: "#a855f7",
  },
];

export default function ContactSection() {

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.09) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="font-mono text-sm"
            style={{ color: "rgba(139,92,246,1)" }}
          >
            04.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get In Touch
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(124,58,237,0.35), transparent)",
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="space-y-6"
          >
            <h3
              className="text-3xl sm:text-4xl font-bold text-white leading-snug"
            >
              Let&apos;s build something{" "}
              <span className="text-gradient">great together.</span>
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(100,116,139,1)" }}
            >
              I&apos;m always open to new opportunities, collaborations, or
              just a friendly chat about tech. Whether you have a project in mind
              or want to connect — feel free to reach out!
            </p>
            <a
              href="mailto:homelanderthard@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:opacity-90 group glow-sm"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              }}
            >
              Say Hello
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl glass hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {/* Icon bubble */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${link.accent}14`,
                    border: `1px solid ${link.accent}30`,
                  }}
                >
                  <link.icon size={18} style={{ color: link.accent }} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div
                    className="text-xs font-medium mb-0.5 uppercase tracking-wide"
                    style={{ color: "rgba(71,85,105,1)" }}
                  >
                    {link.label}
                  </div>
                  <div
                    className="text-sm font-medium transition-colors duration-200 group-hover:text-white truncate"
                    style={{ color: "rgba(203,213,225,1)" }}
                  >
                    {link.value}
                  </div>
                </div>

                <ArrowRight
                  size={14}
                  className="ml-auto flex-shrink-0 opacity-30 group-hover:opacity-80 group-hover:translate-x-1 transition-all duration-200"
                  style={{ color: "rgba(203,213,225,1)" }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
