import Link from "next/link";
import LightRays from "./LightRays";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
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
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Small Tag */}
        <p className="text-emerald-400 text-sm mb-4 tracking-widest uppercase">
          --- Full-Stack Developer ---
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building Scalable & Secure{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600">
            Web Applications
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I develop full-stack applications with authentication, role-based
          access, and payment systems using modern technologies like Next.js,
          Node.js, and PostgreSQL.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-lg bg-emerald-600/20 border border-emerald-700 text-emerald-300 hover:bg-emerald-600/30 transition-all duration-300"
          >
            View Projects
          </Link>

        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-emerald-500/15 blur-[130px] rounded-full" />
    </section>
  );
}
