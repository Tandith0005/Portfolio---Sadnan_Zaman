"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import LightRays from "./LightRays";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + slide in left content
      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 },
      );

      // Typing effect
      const tl = gsap.timeline({ repeat: -1 });
      const roles = [
        "a Web Developer",
        "a Full-Stack Developer",
        "a Backend Developer",
      ];

      // Start by deleting the initial text
      tl.to(textRef.current, {
        text: "",
        duration: 1.5,
        delay: 2,
        ease: "none",
      });

      roles.forEach((role) => {
        tl.to(textRef.current, { text: role, duration: 1.5, ease: "none" }).to(
          textRef.current,
          { text: "", duration: 1.5, delay: 2, ease: "none" },
        );
      });
      tl.to(textRef.current, {
        text: "Sadnan Zaman",
        duration: 1.5,
        ease: "none",
      });

      // Blob background morphing animation
      gsap.to(blobRef.current, {
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Blob background slow rotation
      gsap.to(blobRef.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
        transformOrigin: "center",
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-24 flex items-center justify-center px-6 overflow-hidden relative"
    >
      {/* Background Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#6ee7b7"
          raysSpeed={0.8}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={0.85}
        />
      </div>
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
        {/* Left Side: Text Content */}
        <div
          ref={leftContentRef}
          className="text-left opacity-0 flex-1 max-w-2xl px-4 md:px-0"
        >
          <p className="text-emerald-400 text-sm mb-4 tracking-widest uppercase font-medium">
            --- Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
            Hi, I&apos;m <br />
            <span
              ref={textRef}
              className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600 inline-block mt-2"
            >
              Sadnan Zaman
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl animate-pulse text-emerald-400 font-light ml-1 align-baseline">
              |
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            I develop full-stack applications with authentication, role-based
            access, and payment systems using modern technologies like Next.js,
            Node.js, and PostgreSQL.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-lg bg-emerald-600/20 border border-emerald-700 text-emerald-300 hover:bg-emerald-600/30 transition-all duration-300 font-medium"
            >
              View Projects
            </Link>
            <a
              href="/Sadnan_FullStack_Developer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-teal-800 text-teal-300 hover:bg-teal-900/30 hover:border-teal-500 transition-all duration-300 font-medium tracking-wide uppercase text-sm flex items-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Image with Blob */}
        <div className="flex-1 flex justify-center items-center relative w-full h-[400px] lg:h-[500px]">
          {/* Animated Blob Background */}
          <div
            ref={blobRef}
            className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-emerald-600/40 to-teal-400/20 shadow-[0_0_80px_rgba(16,185,129,0.25)] backdrop-blur-3xl border border-emerald-500/20"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          ></div>

          {/* Image */}
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] z-10 flex items-center justify-center cursor-pointer group">
            <Image
              src="/person.png"
              alt="Sadnan Zaman"
              width={450}
              height={450}
              className="object-cover rounded-full w-full h-full shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.03] border-4 border-emerald-500/20 bg-black/40"
              priority
            />
          </div>
        </div>
      </div>

      {/* Glow Effect from previous code */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-emerald-500/15 blur-[130px] rounded-full pointer-events-none" />
    </section>
  );
}
