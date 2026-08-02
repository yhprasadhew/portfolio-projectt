"use client";

import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub, FaDocker, FaNodeJs } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiExpress, 
  SiMongodb, 
  SiPrisma, 
  SiPostman, 
  SiVercel 
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const iconMap = {
  FaReact,
  FaJs,
  FaGithub,
  FaDocker,
  FaNodeJs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostman,
  SiVercel,
  BiLogoPostgresql
};

export default function SkillCard({ skill }) {
  const IconComponent = iconMap[skill.icon] || null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
      }}
      className="card-glow group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 backdrop-blur-sm transition-all duration-300"
    >
      <div className="flex items-center gap-3.5">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-slate-850 border border-slate-800/80 ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
          {IconComponent ? <IconComponent size={22} /> : null}
        </div>
        <div>
          <h3 className="font-semibold text-slate-100 text-sm tracking-wide">{skill.name}</h3>
          <span className="text-[10px] font-medium text-emerald-400/80 uppercase tracking-widest">
            {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
          </span>
        </div>
      </div>

      {/* Progress slider bar showing level on hover */}
      <div className="mt-4">
        <div className="flex justify-between text-[10px] text-slate-400 font-medium mb-1">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-800/60 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
