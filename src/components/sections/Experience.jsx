"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { experienceData, educationData } from "@/data/experience";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section id="experience" className="relative py-24 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2 justify-center"
          >
            <span className="h-px w-8 bg-emerald-400" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">My Journey</span>
            <span className="h-px w-8 bg-emerald-400" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Experience & Education
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center bg-slate-900/60 border border-slate-800/80 rounded-full p-1.5 shadow-xl relative">
            <button
              onClick={() => setActiveTab("experience")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all z-10 ${
                activeTab === "experience" ? "text-slate-950" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeTab === "experience" && (
                <motion.span
                  layoutId="active-timeline-tab"
                  className="absolute inset-0 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/20"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <Briefcase size={14} className="relative z-10" />
              <span className="relative z-10">Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all z-10 ${
                activeTab === "education" ? "text-slate-950" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeTab === "education" && (
                <motion.span
                  layoutId="active-timeline-tab"
                  className="absolute inset-0 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/20"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <GraduationCap size={15} className="relative z-10" />
              <span className="relative z-10">Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="work-timeline"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative pl-6 sm:pl-8 border-l border-slate-800/80 space-y-12"
              >
                {/* Timeline vertical highlight line */}
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-400 to-transparent" />

                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Circle Node Icon */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-950/20 transition-all duration-300 shadow-lg">
                      <Briefcase size={14} />
                    </div>

                    {/* Timeline Card */}
                    <div className="card-glow rounded-2xl border border-slate-800/80 bg-slate-900/10 p-6 backdrop-blur-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
                            {item.role}
                          </h3>
                          <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5 mt-0.5">
                            <span className="text-emerald-400 font-bold">{item.company}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                            <span className="flex items-center gap-1 text-slate-400">
                              <MapPin size={11} /> {item.location}
                            </span>
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/60 border border-slate-800 px-3 py-1 text-[10px] font-semibold text-emerald-400 tracking-wide w-fit">
                          <Calendar size={11} /> {item.period}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-4">
                        {item.description}
                      </p>

                      {/* Accomplishments Highlights */}
                      <ul className="space-y-2">
                        {item.highlights.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <Award size={13} className="text-emerald-400/80 mt-0.5 shrink-0" />
                            <span className="leading-normal font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="edu-timeline"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative pl-6 sm:pl-8 border-l border-slate-800/80 space-y-12"
              >
                {/* Timeline vertical highlight line */}
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-cyan-400 via-emerald-500 to-transparent" />

                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Circle Node Icon */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-950/20 transition-all duration-300 shadow-lg">
                      <GraduationCap size={15} />
                    </div>

                    {/* Timeline Card */}
                    <div className="card-glow rounded-2xl border border-slate-800/80 bg-slate-900/10 p-6 backdrop-blur-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                            {item.degree}
                          </h3>
                          <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5 mt-0.5">
                            <span className="text-cyan-400 font-bold">{item.institution}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                            <span className="flex items-center gap-1 text-slate-400">
                              <MapPin size={11} /> {item.location}
                            </span>
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/60 border border-slate-800 px-3 py-1 text-[10px] font-semibold text-cyan-400 tracking-wide w-fit">
                          <Calendar size={11} /> {item.period}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
