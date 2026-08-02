"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Code2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      className="card-glow flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-sm transition-all duration-300"
    >
      <div>
        {/* Modern visual banner instead of generic placeholder */}
        <div className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6 overflow-hidden`}>
          <div className="absolute inset-0 bg-slate-950/20 backdrop-brightness-75" />
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative z-10 p-4 rounded-full bg-slate-950/40 border border-white/10 backdrop-blur-md text-white shadow-xl"
          >
            <Code2 size={36} className="text-emerald-400" />
          </motion.div>
          
          {/* Featured Badge */}
          {project.featured && (
            <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 text-slate-950 text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase shadow-lg">
              Featured
            </span>
          )}
        </div>

        {/* Info Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-wide">
            {project.title}
          </h3>
          <p className="mt-2.5 text-xs text-slate-400 leading-relaxed font-medium">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-800/50 border border-slate-800/80 px-2 py-1 text-[10px] font-semibold text-slate-300 tracking-wide hover:border-emerald-500/20 hover:text-emerald-400 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex gap-4 p-6 pt-0 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 font-semibold transition-colors duration-200"
        >
          <FaGithub size={14} />
          <span>Repository</span>
        </a>
        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 font-semibold transition-colors duration-200"
          >
            <FaExternalLinkAlt size={12} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
