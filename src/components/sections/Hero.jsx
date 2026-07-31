"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import { Download, Mail, Terminal, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const STATS = [
  { value: 1, suffix: "+", label: "Years of experience" },
  { value: 12, suffix: "", label: "Projects completed" },
  { value: 8, suffix: "", label: "Technologies mastered" },
  { value: 480, suffix: "+", label: "Code commits" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full pt-20 pb-6 flex flex-col justify-between overflow-hidden bg-slate-950"
    >
      {/* Subtle background grid for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 my-auto flex flex-col justify-center gap-8 lg:gap-12">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Terminal-style status tag */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06]">
              <Terminal size={13} className="text-emerald-400" strokeWidth={2.5} />
              <span className="font-mono text-xs tracking-wide text-emerald-400">
                role.current === &quot;Software Developer&quot;
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Hi, I&apos;m{" "}
              <span className="relative inline-block text-emerald-400">
                YH Prasad
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-emerald-400/30 rounded-full" />
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-6 leading-relaxed">
              I design and build fast, accessible products for the web and
              mobile — taking ideas from a blank editor to production with
              clean, maintainable code.
            </p>

            {/* CTA & Social Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-emerald-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  <span>Download CV</span>
                  <Download size={18} />
                </a>

                <a
                  href="mailto:yhprasadhew@gmail.com"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium px-2 py-3 transition-colors rounded-md"
                >
                  <span>Let&apos;s talk</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="hidden sm:block h-6 w-px bg-slate-800" />

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/yhprasadhew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/yh-prasad-35b570268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="mailto:yhprasadhew@gmail.com"
                  className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Avatar with Animated Dashed Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex items-center justify-center">
              {/* Rotating Continuous Dashed Circle Accent */}
              <motion.svg
                className="absolute inset-0 w-full h-full"
                fill="none"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="240"
                  stroke="#10B981"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="16 120 25 25"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.svg>

              {/* Glowing Background Effect */}
              <div className="absolute inset-4 rounded-full bg-emerald-500/10 blur-2xl -z-10" />

              {/* Profile Image Frame */}
              <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden border-2 border-slate-800/80 shadow-2xl">
                <Image
                  src="/image1.jpeg"
                  alt="YH Prasad"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Availability Badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-full px-3 py-1.5 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-slate-200">
                  Open to work
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Counters Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-slate-800/60 divide-y divide-slate-800/60 sm:divide-y-0 sm:divide-x bg-slate-900/30 backdrop-blur-sm overflow-hidden"
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center lg:items-start gap-1 px-4 sm:px-6 py-4 sm:py-5"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium text-center lg:text-left leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}