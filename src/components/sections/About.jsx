"use client";

import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function About() {
  const infoItems = [
    { icon: <User size={16} className="text-emerald-400" />, label: "Name", value: "YH Prasad" },
    { icon: <Briefcase size={16} className="text-emerald-400" />, label: "Role", value: "Full Stack Developer" },
    { icon: <MapPin size={16} className="text-emerald-400" />, label: "Location", value: "Sri Lanka" },
    { icon: <GraduationCap size={16} className="text-emerald-400" />, label: "Education", value: "Software Eng. Undergrad" },
    { icon: <Calendar size={16} className="text-emerald-400" />, label: "Availability", value: "Open to Opportunities" },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="h-px w-8 bg-emerald-400" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Get to Know Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About Me
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Quick Info Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 card-glow rounded-2xl border border-slate-800 bg-slate-900/30 p-6 flex flex-col justify-center backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800/80 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-emerald-400 inline-block" />
              Developer Summary
            </h3>
            
            <div className="space-y-4">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-800/40 last:border-0">
                  <div className="flex items-center gap-2.5 text-slate-400">
                    {item.icon}
                    <span className="text-xs font-semibold uppercase tracking-wider">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-200 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Description Paragraphs Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-6 text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                I am a passionate <strong className="text-emerald-400 font-bold">Software Engineering undergraduate</strong> with a strong drive for crafting modern, highly functional web applications. My programming journey revolves around translating abstract user concepts into clean, maintainable, and high-performance production code.
              </p>
              
              <p>
                Specializing in full-stack JavaScript ecosystems, I focus on frameworks like <strong className="text-slate-200 font-bold">React</strong> and <strong className="text-slate-200 font-bold">Next.js</strong> for frontend experiences, paired with database scaling on <strong className="text-slate-200 font-bold">PostgreSQL</strong> and <strong className="text-slate-200 font-bold">MongoDB</strong>. I always prioritize responsive layouts, robust accessibility, and clean code principles.
              </p>
              
              <p>
                Outside of academics, I continuously seek challenging environments, contributing to open-source systems, polishing developer operations skills, and researching artificial intelligence frameworks to engineer next-generation web products.
              </p>
            </div>
            
            {/* Quick highlight cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl border border-slate-800/40 bg-slate-900/10">
                <div className="text-2xl font-bold text-emerald-400">Agile</div>
                <div className="text-xs text-slate-400 mt-1">SCRUM workflows and fast software sprints</div>
              </div>
              <div className="p-4 rounded-xl border border-slate-800/40 bg-slate-900/10">
                <div className="text-2xl font-bold text-cyan-400">Clean</div>
                <div className="text-xs text-slate-400 mt-1">Focus on modular architecture and testing</div>
              </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}