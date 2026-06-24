import React, { useEffect, useState, useRef } from "react";
import { PERSONAL_DETAILS, EDUCATION, STATS } from "../data";
import { BookOpen, MapPin, Award, Calendar, CheckCircle, GraduationCap } from "lucide-react";
import { motion, useInView } from "motion/react";

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-sans"
          >
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold font-sans text-zinc-900 dark:text-white tracking-tight"
          >
            Sowing Tech, Reaping Intelligence
          </motion.h3>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-1 w-12 bg-zinc-900 dark:bg-white mx-auto rounded-full origin-left"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Biography Block (Bento Column-span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs"
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-sans text-zinc-800 dark:text-zinc-200">
                Driven Computer Science Student & Developer
              </h4>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light text-base">
                I am a results-oriented Computer Science and Engineering student at SNS College of Technology, graduating in 2027. My technical journey spans building end-to-end full stack web platforms, designing machine learning models, deploying IoT prototypes, and exploring modern ERP landscapes like <strong>Oracle Fusion HCM</strong>.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light text-base">
                I thrive on solving complex technical challenges. Through my active internships, I've had the privilege of contributing to real-world MERN Stack integrations, preprocessing large-scale datasets, and implementing algorithmic predictive modeling.
              </p>

              {/* Quick Details Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-5 h-5 text-zinc-400" />
                  <span className="text-sm font-sans">{PERSONAL_DETAILS.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400">
                  <GraduationCap className="w-5 h-5 text-zinc-400" />
                  <span className="text-sm font-sans">Graduation: June 2027</span>
                </div>
              </div>
            </div>

            {/* Quote banner */}
            <div className="mt-8 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/30 dark:border-zinc-800/30">
              <p className="italic text-xs font-mono text-zinc-500 dark:text-zinc-400">
                "Code is like agriculture; you prepare the ground (architecture), choose the best seeds (algorithms), nurse the growth (debugging), and harvest the results (user value)."
              </p>
            </div>
          </motion.div>

          {/* Education & Focus Block (Bento Column-span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-zinc-900 dark:text-white font-bold font-sans">
                <BookOpen className="w-5 h-5" />
                <span>Education Profile</span>
              </div>

              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800">
                  <div className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-white" />
                  <span className="text-[11px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                    {EDUCATION.period}
                  </span>
                  <h4 className="text-base font-bold font-sans text-zinc-800 dark:text-zinc-200 mt-1">
                    {EDUCATION.degree}
                  </h4>
                  <p className="text-sm font-sans text-zinc-500 dark:text-zinc-400 mt-1">
                    {EDUCATION.institution}
                  </p>
                  <div className="mt-2.5 inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-200/50 dark:bg-zinc-800/50 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                    CGPA: {EDUCATION.gpa}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-3">
                <h5 className="text-xs font-bold font-sans uppercase tracking-widest text-zinc-400">
                  Oracle & ERP Foundations
                </h5>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                  Active learner of <strong>Oracle Fusion HCM</strong> (Human Capital Management) cloud suites and AI frameworks, bridging core Computer Science with corporate enterprise applications.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                    Oracle Fusion HCM
                  </span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                    OCI Foundations
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Counter Badges Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <CounterCard key={i} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>

      </div>
    </section>
  );
};

interface CounterCardProps {
  stat: { value: string; label: string; description: string };
  index: number;
  isInView: boolean;
}

const CounterCard: React.FC<CounterCardProps> = ({ stat, index, isInView }) => {
  const [count, setCount] = useState<number | string>(0);

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part of the value
    const numericPart = parseFloat(stat.value);
    const suffix = stat.value.replace(/[0-9.]/g, "");

    if (isNaN(numericPart)) {
      setCount(stat.value);
      return;
    }

    let start = 0;
    const duration = 1500; // ms
    const stepTime = 30; // ms
    const steps = duration / stepTime;
    const increment = numericPart / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        // Render precise values like decimals correctly
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(
          numericPart % 1 === 0 
            ? Math.floor(start) + suffix 
            : start.toFixed(2) + suffix
        );
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-zinc-50/40 dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-zinc-800/50 text-center flex flex-col justify-center shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
    >
      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-900 dark:text-white leading-none">
        {count}
      </span>
      <span className="mt-2 text-xs font-bold font-sans text-zinc-800 dark:text-zinc-200 block uppercase tracking-wide">
        {stat.label}
      </span>
      <span className="mt-1 text-[10px] font-sans text-zinc-400 dark:text-zinc-500 leading-normal block">
        {stat.description}
      </span>
    </motion.div>
  );
};
