"use client";


import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiPrisma,
} from "react-icons/si";

import "./TechLogos.css";
import LogoLoop from "./LogoLoop";


const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiFirebase />, title: "Firebase" },
  { node: <SiPrisma />, title: "Prisma" },
];

export default function TechLogos() {
  return (
    <section className="tech-section">
      
      {/* Glow LEFT */}
      <div className="tech-glow tech-glow-left" />

      {/* Glow RIGHT */}
      <div className="tech-glow tech-glow-right" />

      <div className="tech-container">
        
        <p className="tech-title">
          Technologies I Work With
        </p>

        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={40}
          gap={50}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#020617"
        />
      </div>
    </section>
  );
}