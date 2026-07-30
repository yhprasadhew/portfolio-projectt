"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const STATS = [
  { value: 1, suffix: "+", label: "Years of experience" },
  { value: 12, suffix: "", label: "Projects completed" },
  { value: 8, suffix: "", label: "Technologies mastered" },
  { value: 480, suffix: "+", label: "Code commits" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-sm font-semibold tracking-wider text-emerald-400 uppercase mb-3">
              Software Developer
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Hello I’m <br />
              <span className="text-emerald-400">YH Prasad</span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              I excel at crafting elegant digital experiences and I am proficient in modern web and mobile development technologies.
            </p>

            {/* CTA & Social Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-emerald-400/10"
              >
                <span>DOWNLOAD CV</span>
                <Download size={18} />
              </a>

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
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
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
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.svg>

              {/* Glowing Background Glow Effect */}
              <div className="absolute inset-4 rounded-full bg-emerald-500/10 blur-2xl -z-10" />

              {/* Profile Image Frame targeting /image1.jpeg */}
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

            </div>
          </motion.div>

        </div>

        {/* Live Counters Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 sm:mt-24 pt-8 border-t border-slate-800/60"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-[100px] leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}