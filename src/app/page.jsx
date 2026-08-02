import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}