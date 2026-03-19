"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function smoothScroll(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled
            ? "w-[92%] max-w-3xl rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6"
            : "w-[92%] max-w-2xl rounded-2xl py-4 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white font-bold text-xl tracking-tight select-none"
          >
            <span className="text-gradient">WN</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8em", marginLeft: "2px" }}>
              III
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => smoothScroll(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(148,163,184,1)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(148,163,184,1)")
                }
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => smoothScroll("#contact")}
              className="px-5 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-1 transition-colors"
            style={{ color: "rgba(148,163,184,1)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-40 glass rounded-2xl p-3"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setMobileOpen(false);
                    smoothScroll(link.href);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: "rgba(203,213,225,1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgba(203,213,225,1)";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  smoothScroll("#contact");
                }}
                className="mt-1 w-full py-3 rounded-xl text-white text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
