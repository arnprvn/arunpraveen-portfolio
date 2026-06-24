import React, { useState, useEffect } from "react";
import { PERSONAL_DETAILS } from "../data";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenATSView: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenATSView }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = PERSONAL_DETAILS.roles;

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait before starting delete
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Wait before starting next typing
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-radial from-zinc-50 via-zinc-100 to-zinc-150 dark:from-zinc-900 dark:via-zinc-950 dark:to-black"
    >
      {/* Decorative Grids and Light Rings */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-zinc-300/40 dark:bg-zinc-800/20 blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-zinc-400/30 dark:bg-zinc-900/10 blur-3xl" />
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Info */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-zinc-200/60 dark:bg-zinc-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-300/30 dark:border-zinc-800/30 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-zinc-700 dark:text-zinc-300 animate-pulse" />
              <span className="text-xs font-semibold font-sans uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                Welcome to My Creative Space
              </span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sans tracking-tight text-zinc-900 dark:text-white leading-[1.1]"
              >
                Hi, I'm <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">{PERSONAL_DETAILS.name}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-12 flex items-center"
              >
                <p className="text-xl sm:text-2xl font-semibold font-sans text-zinc-600 dark:text-zinc-300 flex items-center">
                  <span className="text-zinc-900 dark:text-zinc-100 mr-2 font-mono">&gt;</span>
                  <span>{currentText}</span>
                  <span className="w-1.5 h-6 ml-1 bg-zinc-900 dark:bg-white animate-blink" />
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg font-sans text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-light"
            >
              {PERSONAL_DETAILS.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                id="hero-view-work-btn"
                onClick={() => handleScrollTo("projects")}
                className="flex items-center space-x-2 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 px-6 py-3 rounded-xl font-semibold text-sm font-sans transition-all shadow-md shadow-zinc-950/10 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-ats-mode-btn"
                onClick={onOpenATSView}
                className="flex items-center space-x-2 bg-white/80 hover:bg-white dark:bg-zinc-900/50 dark:hover:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-xl font-semibold text-sm font-sans transition-all backdrop-blur-sm hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>ATS Resume PDF</span>
              </button>
            </motion.div>

            {/* Socials Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center space-x-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 w-fit"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-sans">
                Connect:
              </span>
              <a
                id="hero-linkedin-link"
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-105 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                id="hero-github-link"
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-105 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Interactive Dynamic Interactive Mock-up (Bento/Card-style profile block) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="relative w-full max-w-sm"
            >
              {/* Outer glass container */}
              <div className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-zinc-800/40 p-6 shadow-2xl shadow-zinc-950/10">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between border-b border-zinc-200/50 dark:border-zinc-800/50 pb-4 mb-5">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    profile.json
                  </div>
                </div>

                {/* Profile Image Row */}
                <div className="flex justify-center mb-5">
                  <div className="relative w-24 h-24 rounded-full p-1 border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm">
                    <img 
                      src="https://github.com/arnprvn.png" 
                      alt="Arun Praveen SJ" 
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-zinc-800 rounded-full"></div>
                  </div>
                </div>

                {/* Main Code Snippet / Stats Block */}
                <div className="space-y-4 font-mono text-xs text-zinc-600 dark:text-zinc-300">
                  <div className="space-y-1">
                    <p className="text-zinc-400 dark:text-zinc-500">// Personal Metadata</p>
                    <p>
                      <span className="text-purple-500 dark:text-purple-400">const</span> developer = {"{"}
                    </p>
                    <p className="pl-4">
                      name: <span className="text-emerald-500 dark:text-emerald-400">"{PERSONAL_DETAILS.name}"</span>,
                    </p>
                    <p className="pl-4">
                      location: <span className="text-emerald-500 dark:text-emerald-400">"Coimbatore, India"</span>,
                    </p>
                    <p className="pl-4">
                      academicYear: <span className="text-amber-500">2027</span>,
                    </p>
                    <p className="pl-4 flex flex-wrap items-center">
                      expertise: <span className="text-emerald-500 dark:text-emerald-400">["MERN", "AI/ML", "IoT"]</span>
                    </p>
                    <p>{"};"}</p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-2">
                    <p className="text-zinc-400 dark:text-zinc-500">// Current Engagement</p>
                    <div className="p-3.5 rounded-xl bg-zinc-100/50 dark:bg-zinc-950/50 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex flex-col items-center justify-center font-bold">
                        <span className="text-[10px] font-sans leading-none">B.E</span>
                        <span className="text-[9px] font-mono leading-none mt-0.5">CSE</span>
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm">
                          SNS College of Tech
                        </h4>
                        <p className="font-sans text-[11px] text-zinc-400">
                          B.E. Computer Science, CGPA: 7.48
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic interactive indicator */}
                  <div className="pt-2 flex justify-between items-center text-[10px]">
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-zinc-400 dark:text-zinc-500 font-sans font-medium">Ready to Collaborate</span>
                    </div>
                    <span className="text-zinc-400 dark:text-zinc-500">v1.2.0</span>
                  </div>

                </div>
              </div>

              {/* Backing stylized details card for bento contrast */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-radial from-zinc-200 to-transparent dark:from-zinc-800/20 -z-10 rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
