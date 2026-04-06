import Hero from "../components/homepage/hero/Hero";
import About from "../components/homepage/about/About";
import Projects from "../components/homepage/projects/Projects";
import Contact from "../components/homepage/contacts/Contact";
import TechLogos from "../components/homepage/tech-logos/TechLogos";



export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Projects />
      <TechLogos />
      <Contact />
    </div>
  );
}
