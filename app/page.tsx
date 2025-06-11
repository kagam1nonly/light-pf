"use client";

import { useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import { Footer } from "@/components/footer";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function Home() {
  return (
    <main className="w-full px-10 py-10 min-h-[99vh]">
      <ScrollToTop />
      <div className="container mx-auto flex flex-col w-full px-20 pt-20 pb-7 relative">
        {/* Introduction Section */}
        <Hero />
        {/* About Section */}
        <About />
        {/* Projects Section */}
        <Projects />
        {/* Tech Stack Section */}
        <TechStack />
        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  );
}
