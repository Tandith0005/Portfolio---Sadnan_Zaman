"use client";

import { navLinks } from "@/src/data/navLinks";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-emerald-900/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/#home"
          className="text-xl md:text-2xl font-bold tracking-tight flex items-center"
        >
          <span className="text-emerald-400 mr-1">&lt;</span>
          Tandith
          <span className="text-emerald-600 ml-1">/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative group hover:text-emerald-300 transition-colors duration-200"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Download CV */}
        <div className="hidden md:block">
          <a
            href="/Sadnan_FullStack_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg border border-emerald-800 text-emerald-300 hover:bg-emerald-900/30 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-emerald-300 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-emerald-300 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-emerald-300 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 border-b border-emerald-900/40`}
      >
        <div className="flex flex-col px-4 pb-4 pt-2 gap-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="text-gray-400 hover:text-emerald-300 transition-colors duration-200 text-sm py-1 border-b border-gray-800/50"
            >
              {label}
            </Link>
          ))}

          {/* Mobile CV */}
          <Link
            href="/cv.pdf"
            onClick={handleLinkClick}
            className="mt-2 text-sm px-4 py-2 rounded-lg border border-emerald-800 text-emerald-300 text-center hover:bg-emerald-900/30 transition-all duration-300"
          >
            Download CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
