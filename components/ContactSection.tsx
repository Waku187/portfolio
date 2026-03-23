"use client";

import { motion } from "framer-motion";
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
      className="relative z-10 py-28 px-6 overflow-hidden"
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
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

            <motion.a
              href="mailto:homelanderthard@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                boxShadow: "0 10px 30px -10px rgba(124,58,237,0.5)",
              }}
            >
              Send a Message
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Contact Links */}
          <div className="grid gap-4">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                className="group flex items-center justify-between p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div
                    className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: link.accent }}
                  >
                    <link.icon size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      {link.label}
                    </div>
                    <div className="text-base font-semibold text-slate-200">
                      {link.value}
                    </div>
                  </div>
                </div>
                <div className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all">
                  <ArrowRight size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
