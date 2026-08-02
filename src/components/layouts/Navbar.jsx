"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  return (
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
      <span className="text-slate-950 font-black tracking-tight text-base">YP</span>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_LINKS.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-slate-950/70 backdrop-blur-md border-slate-800/80 shadow-lg shadow-black/50"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <Logo />
            <div>
              <h1 className="text-sm font-bold tracking-wide text-white">
                YH PRASAD<span className="text-emerald-400">.</span>
              </h1>
              <p className="text-xs text-slate-400 font-medium">Software Engineer</p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-slate-800/60 rounded-full p-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  active === item.href.replace("#", "")
                    ? "text-emerald-400 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {active === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Github */}
            <a
              href="https://github.com/yhprasadhew"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex w-9 h-9 rounded-full bg-slate-900/60 border border-slate-800/80 items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yh-prasad-35b570268"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex w-9 h-9 rounded-full bg-slate-900/60 border border-slate-800/80 items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>

            {/* Email */}
            <a
              href="mailto:yhprasadhew@gmail.com"
              className="hidden lg:flex w-9 h-9 rounded-full bg-slate-900/60 border border-slate-800/80 items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden sm:flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-md shadow-emerald-400/10 hover:shadow-emerald-400/20 transition-all duration-300"
            >
              <Download size={14} />
              <span>Resume</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white transition-all bg-slate-900/40"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 overflow-hidden"
            >
              <div className="bg-slate-950/95 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-4 shadow-2xl">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        active === item.href.replace("#", "")
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="h-px bg-slate-800 my-2" />
                  <div className="flex items-center justify-between px-2 pt-1">
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/yhprasadhew"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href="https://linkedin.com/in/yh-prasad-35b570268"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white"
                      >
                        <FaLinkedin size={18} />
                      </a>
                      <a
                        href="mailto:yhprasadhew@gmail.com"
                        className="text-slate-400 hover:text-white"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      className="flex items-center gap-1.5 bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
                    >
                      <Download size={12} />
                      <span>Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}