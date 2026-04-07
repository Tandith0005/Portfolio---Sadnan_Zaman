"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/src/data/projects";
import type { MotionProps } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
} satisfies MotionProps["variants"];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} satisfies MotionProps["variants"];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-0 w-[600px] h-[500px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-zinc-900/80 border border-zinc-800 hover:border-teal-700/60 rounded-[20px] p-5 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-lg hover:shadow-[0_10px_40px_-20px_rgba(20,184,166,0.25)]"
            >
              {/* Project Image */}
              <Link href={`/projects/${project.id}`} className="block relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-zinc-800/80">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent pointer-events-none" />
              </Link>

              {/* Title & Links */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                  <Link href={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>

                <div className="flex gap-2 text-gray-400 bg-zinc-950/50 p-1 rounded-full border border-zinc-800">
                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400 hover:bg-zinc-800 p-1.5 rounded-full transition-all duration-200"
                      aria-label="View on GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                      className="hover:text-teal-400 hover:bg-zinc-800 p-1.5 rounded-full transition-all duration-200"
                      aria-label="Live Demo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description (Truncated/Small) */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* View Details Button */}
              <div className="flex-1" />
              <Link
                href={`/projects/${project.id}`}
                className="w-full text-center py-2.5 mb-5 rounded-xl bg-teal-500/10 text-teal-400 text-sm font-semibold hover:bg-teal-500 hover:text-zinc-950 transition-colors duration-300"
              >
                View Details
              </Link>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {project.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-950 border border-zinc-800 text-teal-300/80 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-950 border border-zinc-800 text-gray-500 cursor-default">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}