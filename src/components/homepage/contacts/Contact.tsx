"use client";

import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/Tandith0005",
    handle: "@Tandith0005",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sadnanzaman/",
    handle: "Sadnan Zaman",
  },
  {
    icon: <HiOutlineMail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:tandith0005@gmail.com",
    handle: "tandith0005@gmail.com",
  },
  {
    icon: <FaDiscord className="w-5 h-5" />,
    label: "Discord",
    href: "https://discord.com/users/793803998876401695",
    handle: "Sadnan Zaman",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden">

      {/* Glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"
        style={{ marginRight: "calc(50% - 50vw)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"
        style={{ marginRight: "calc(50% - 50vw)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-emerald-400 text-xs tracking-widest uppercase mb-3">
            --- Get In Touch ---
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I&apos;m open to freelance projects, full-time roles, and
            interesting collaborations. If you have something in mind, don&apos;t
            hesitate to reach out.
          </p>
        </motion.div>

        {/* Social cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {socials.map(({ icon, label, href, handle }) => (
            <motion.a
              key={label}
              variants={item}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-6 py-4 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-emerald-700/60 hover:bg-emerald-900/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <span className="font-medium text-gray-200">{label}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm group-hover:text-emerald-400 transition-colors duration-300">
                  {handle}
                </span>
                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-gray-600 text-sm mt-16"
        >
          Built with Next.js & Tailwind CSS &mdash; &copy; {new Date().getFullYear()}
        </motion.p>

      </div>
    </section>
  );
}