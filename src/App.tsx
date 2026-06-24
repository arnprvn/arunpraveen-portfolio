import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { GitHubSection } from "./components/GitHubSection";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { ResumeATSView } from "./components/ResumeATSView";
import { PERSONAL_DETAILS } from "./data";
import { ArrowUp, Terminal, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isATSViewOpen, setIsATSViewOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Spy Observer to track current viewport section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["hero", "about", "skills", "experience", "projects", "certifications", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isATSViewOpen]);

  // Track scroll position to show "Scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("hero");
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
        
        {/* Navigation Bar */}
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          onOpenATSView={() => setIsATSViewOpen(true)}
          isATSViewOpen={isATSViewOpen}
        />

        {/* Portfolio Content Areas */}
        <main className="relative">
          <Hero onOpenATSView={() => setIsATSViewOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          
          {/* Dynamic GitHub Visualizer Dashboard */}
          <GitHubSection />
          
          <Certifications />
          <Contact onOpenATSView={() => setIsATSViewOpen(true)} />
        </main>

        {/* Footer */}
        <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900 py-12 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200/50 dark:border-zinc-900">
              
              {/* Branding Block */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white flex items-center justify-center">
                  <span className="text-white dark:text-zinc-950 font-mono font-bold text-sm">A</span>
                </div>
                <span className="text-md font-extrabold tracking-tight text-zinc-900 dark:text-white">
                  {PERSONAL_DETAILS.name}
                </span>
              </div>

              {/* Navigation Links Quick list */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
                <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Skills</a>
                <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Internships</a>
                <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
                <a href="#certifications" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Certifications</a>
              </div>

              {/* Connected Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  id="footer-linkedin"
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all hover:scale-105"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="footer-github"
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all hover:scale-105"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="footer-email"
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all hover:scale-105"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-zinc-400 font-sans">
              <p>© {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.</p>
              <p className="flex items-center space-x-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>Designed & Programmed with React & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </footer>

        {/* ATS-Optimized Sheet Overlay Modal */}
        <AnimatePresence>
          {isATSViewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResumeATSView onClose={() => setIsATSViewOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Scroll To Top Anchor (Apple layout polish) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              id="scroll-to-top-btn"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border border-zinc-850 dark:border-zinc-200/80 shadow-lg z-40 cursor-pointer hover:-translate-y-1 transition-all"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </ThemeProvider>
  );
}
