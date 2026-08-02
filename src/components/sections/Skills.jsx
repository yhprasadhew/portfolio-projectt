"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((d) => d.category)];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skillsData.flatMap((d) => d.items);
    }
    return skillsData.find((d) => d.category === activeCategory)?.items || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="relative py-24 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="h-px w-8 bg-emerald-400" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Technical Skills
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === category
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="active-skill-tab"
                  className="absolute inset-0 rounded-xl bg-emerald-500/[0.04] pointer-events-none"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {category === "Backend & Databases" ? "Backend" : category === "Tools & Deployments" ? "Tools" : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}