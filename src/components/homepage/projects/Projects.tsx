"use client";

import { motion } from "framer-motion";
import { projects } from "@/src/data/projects";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12 } 
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-0 w-[600px] h-[500px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-medium tracking-[3px] uppercase mb-3">
            SELECTED WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Real-world applications I&apos;ve built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-zinc-900 border border-zinc-800 hover:border-teal-700/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Project Title & Links */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex gap-4 text-gray-400">
                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400 transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}

                  {/* Live Demo Link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400 transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <p className="text-teal-400 text-xs uppercase tracking-widest mb-3">Key Features</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-teal-500/70 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-800 border border-zinc-700 text-teal-300/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}