// components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  // Grouped skills for better visual hierarchy
  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TailwindCSS", "Bootstrap"],
    "Backend": ["Node.js", "Express", "BetterAuth", "Prisma", "Axios"],
    "Database": ["PostgreSQL", "MongoDB", "Mongoose", "Firebase"],
    "DevOps & Tools": ["Docker", "Git", "GitHub", "Render", "Vercel"],
    "Exploring": ["AWS", "Appwrite", "Go", "TypeScript"]
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background glow - matches Hero */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"
        style={{ marginRight: "calc(50% - 50vw)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-emerald-400 text-xs tracking-widest uppercase mb-3">
          --- Who I Am ---
        </p>
         <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">Me</span>
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Bio */}
          <motion.p variants={item} className="text-gray-300 leading-relaxed text-lg">
            I&apos;m a <span className="text-emerald-300 font-medium">self-taught full-stack developer</span> focused
              on building real-world, production-grade applications — not just
              tutorials or toy projects.
          </motion.p>

          <motion.p variants={item} className="text-gray-400 leading-relaxed">
            My focus is on the <span className="text-emerald-400">backend architecture</span> — authentication flows, 
            role-based access control, payment integrations, and database design — while delivering polished, 
            responsive frontends with modern frameworks.
          </motion.p>

          <motion.p variants={item} className="text-gray-400 leading-relaxed">
            When I&apos;m not coding, I&apos;m exploring new tools, contributing to open source, or deepening my knowledge 
            of systems design and algorithms.
          </motion.p>

          {/* Skills Section */}
          <motion.div variants={item} className="pt-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Technical Toolkit
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <h4 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gray-800/80 border border-gray-700 
                                 text-gray-300 hover:border-emerald-600/50 hover:text-emerald-300 
                                 transition-colors cursor-default"
                        title={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA / Contact hint */}
          <motion.div 
            variants={item}
            className="pt-4 flex justify-center"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 
                       transition-colors group"
            >
              Let&apos;s build something together
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}