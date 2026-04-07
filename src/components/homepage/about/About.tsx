"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, education } from "@/src/data/toolkit&edu";

// Converts array into alternating left/right timeline nodes
function buildTimelineNodes<T>(arr: T[]) {
  return arr.map((item, i) => ({
    item,
    side: i % 2 === 0 ? "left" : ("right" as "left" | "right"),
  }));
}

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function SkillCard({ category, items }: { category: string; items: string[] }) {
  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 w-full">
      <p className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-3">
        {category}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs rounded-lg bg-gray-800/80 border border-gray-700
                       text-gray-300 hover:border-emerald-500/50 hover:text-emerald-300
                       transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function EduCard({
  degree,
  institution,
  period,
  note,
  badge,
}: (typeof education)[0]) {
  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 w-full">
      <div className="flex items-start justify-between gap-2 mb-1">
        <p className="text-gray-100 font-semibold text-sm leading-snug">
          {degree}
        </p>
        <span
          className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border font-medium ${
            badge === "Ongoing"
              ? "border-emerald-600/40 text-emerald-400 bg-emerald-500/10"
              : "border-gray-600/40 text-gray-400 bg-gray-700/30"
          }`}
        >
          {badge}
        </span>
      </div>
      <p className="text-emerald-400 text-xs font-medium mb-1">{institution}</p>
      <p className="text-gray-500 text-xs">{period}</p>
      {note && <p className="text-gray-500 text-xs mt-1">{note}</p>}
    </div>
  );
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────

function Timeline({ activeTab }: { activeTab: "skills" | "education" }) {
  const nodes =
    activeTab === "skills"
      ? buildTimelineNodes(skills)
      : buildTimelineNodes(education);

  return (
    <div className="relative flex flex-col items-center">
      {/* Vertical spine */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-700" />

      <div className="w-full flex flex-col gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-10"
          >
            {nodes.map(({ item, side }, i) => (
              <div key={i} className="relative flex items-center w-full">
                {/* LEFT SIDE */}
                <div className="w-[calc(50%-20px)] pr-4 flex justify-end">
                  {side === "left" && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="w-full max-w-xs"
                    >
                      {activeTab === "skills" ? (
                        <SkillCard {...(item as (typeof skills)[0])} />
                      ) : (
                        <EduCard {...(item as (typeof education)[0])} />
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Center dot */}
                <div className="relative z-10 flex-shrink-0 w-10 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-gray-900 border-2 border-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.35)]" />
                </div>

                {/* RIGHT SIDE */}
                <div className="w-[calc(50%-20px)] pl-4 flex justify-start">
                  {side === "right" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="w-full max-w-xs"
                    >
                      {activeTab === "skills" ? (
                        <SkillCard {...(item as (typeof skills)[0])} />
                      ) : (
                        <EduCard {...(item as (typeof education)[0])} />
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── EXPANDABLE TEXT COMPONENT ──────────────────────────────────────────────────

function ExpandableText({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex flex-col items-start w-full">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : "3.2rem" }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden relative w-full"
      >
        <div className="w-full space-y-3 pb-2">{children}</div>

        {/* Fade gradient when collapsed */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[rgb(14,19,29)] to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>
      </motion.div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors inline-flex items-center gap-1.5 ml-auto"
      >
        {isExpanded ? "Show less" : "Read more"}
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>
    </div>
  );
}

// ─── BIO SECTION ─────────────────────────────────────────────────────────────

function BioSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-5 mb-16"
    >
      {/* Journey */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
        <p className="text-xs text-emerald-400 uppercase tracking-widest font-medium mb-3">
          My journey
        </p>

        <ExpandableText>
          <p className="text-gray-300 leading-relaxed text-[15px]">
            I started coding around{" "}
            <span className="text-emerald-300 font-medium">2021</span>, inspired
            by my cousin who used to build beautiful websites. Watching him
            create things from scratch made me curious — I wanted to understand
            how it all worked behind the scenes. That curiosity pushed me to
            start learning on my own.
          </p>

          <p className="text-gray-400 leading-relaxed text-[15px]">
            I began with the basics — HTML, CSS, and JavaScript — and later
            joined a{" "}
            <span className="text-emerald-300">Programming Hero bootcamp</span>{" "}
            to structure my learning. But I didn’t stop there. I learned how to
            read documentation, debug problems, and build things independently —
            which helped me grow beyond tutorials.
          </p>

          <p className="text-gray-400 leading-relaxed text-[15px]">
            Over time, I moved from frontend into{" "}
            <span className="text-emerald-400">full-stack development</span>,
            where I found my real interest in backend systems — authentication,
            role-based access control, APIs, and database design. I enjoy
            building complete applications that solve real problems, not just
            demo projects.
          </p>

          <div className="mt-1 border-l-2 border-emerald-500/60 pl-4 py-1">
            <p className="text-gray-400 italic text-sm">
              “I don’t just follow tutorials — I learn, break things, fix them,
              and build something real.”
            </p>
          </div>
        </ExpandableText>
      </div>

      {/* Work I enjoy */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
        <p className="text-xs text-emerald-400 uppercase tracking-widest font-medium mb-3">
          The work I enjoy
        </p>

        <ExpandableText>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            I enjoy building systems where things actually matter — where{" "}
            <span className="text-gray-300">
              security, performance, and reliability
            </span>{" "}
            are not optional, but required. I’m especially drawn to
            backend-heavy problems like authentication flows, access control,
            and designing clean APIs that scale properly.
          </p>

          <p className="text-gray-400 leading-relaxed text-[15px]">
            I get the most satisfaction when I take a messy requirement — like a
            multi-role system or a payment flow — and turn it into something
            clean, predictable, and production-ready. One of the things I enjoy
            most is debugging real-world issues where the problem isn’t obvious
            at first, but solving it improves the entire system.
          </p>

          <p className="text-gray-400 leading-relaxed text-[15px]">
            Whether it’s building{" "}
            <span className="text-emerald-300">role-based dashboards</span>,
            secure authentication systems, or full-stack applications with real
            users, I like working on features that feel “alive” — not just demo
            projects.
          </p>
        </ExpandableText>
      </div>

      {/* Hobbies */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
        <p className="text-xs text-emerald-400 uppercase tracking-widest font-medium mb-3">
          Beyond the screen
        </p>

        <ExpandableText>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            When I’m not coding, I like to step away from the screen and explore
            things that keep my curiosity alive. I enjoy{" "}
            <span className="text-gray-300">cricket</span>, diving into{" "}
            <span className="text-gray-300">conspiracy theories</span>, and
            reading about{" "}
            <span className="text-gray-300">
              lost civilizations and ancient history
            </span>
            . I’ve always been fascinated by how much of the past is still
            unknown.
          </p>

          <p className="text-gray-400 leading-relaxed text-[15px]">
            I also play games like <span className="text-emerald-300">CS2</span>
            , <span className="text-emerald-300">Team Fortress 2</span>, and{" "}
            <span className="text-emerald-300">Conqueror’s Blade</span> — they
            help me relax and also sharpen my focus and decision-making. For me,
            stepping away from code is often where the best ideas come from.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "🏏 Cricket",
              "🧠 Conspiracies",
              "🏛️ Lost Civilizations",
              "🎮 Gaming",
            ].map((h) => (
              <span
                key={h}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 bg-gray-800/50"
              >
                {h}
              </span>
            ))}
          </div>
        </ExpandableText>
      </div>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-emerald-400 text-xs tracking-widest uppercase mb-3">
          --- Who I Am ---
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">
            Me
          </span>
        </motion.h2>

        {/* Bio cards */}
        <BioSection />

        {/* ── SWITCHER ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-900 border border-gray-800 p-1 gap-1">
            {(["skills", "education"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-emerald-400 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 capitalize">
                  {tab === "skills" ? "Technical Toolkit" : "Education"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <Timeline activeTab={activeTab} />

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            Let&apos;s build something together
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
