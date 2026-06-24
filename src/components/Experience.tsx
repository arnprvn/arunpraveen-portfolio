import React, { useState, useRef } from "react";
import { INTERNSHIPS } from "../data";
import { Briefcase, Calendar, ChevronRight, Check, Award, MapPin } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(INTERNSHIPS[0]?.id || null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-sans">
            Professional Growth
          </h2>
          <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold font-sans text-zinc-900 dark:text-white tracking-tight">
            Industry Internships
          </h3>
          <div className="mt-4 h-1 w-12 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </div>

        {/* Timeline Grid (Split Screen Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Timeline Cards (Left side, column-span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 text-zinc-400 mb-2 pl-2">
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wide font-sans">Select to inspect responsibilities</span>
            </div>
            
            {INTERNSHIPS.map((internship, index) => {
              const isSelected = selectedId === internship.id;
              return (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: isSelected ? 0 : 4 }}
                  onClick={() => setSelectedId(internship.id)}
                  className={`p-5 rounded-2xl border cursor-pointer text-left transition-all ${
                    isSelected
                      ? "bg-zinc-950 border-zinc-950 text-white dark:bg-zinc-900 dark:border-zinc-800 shadow-lg shadow-zinc-950/10"
                      : "bg-zinc-50 hover:bg-zinc-100 border-zinc-200 dark:bg-zinc-900/10 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-800 text-zinc-800 dark:text-zinc-200"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`text-[10px] font-mono font-semibold tracking-wider uppercase ${isSelected ? "text-zinc-400" : "text-zinc-500"}`}>
                        {internship.period}
                      </span>
                      <h4 className={`text-base font-extrabold font-sans mt-1 ${isSelected ? "text-white" : "text-zinc-900 dark:text-zinc-100"}`}>
                        {internship.role}
                      </h4>
                      <p className={`text-sm font-semibold font-sans ${isSelected ? "text-zinc-300" : "text-zinc-500"}`}>
                        {internship.company}
                      </p>
                    </div>
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-zinc-800 text-white" : "bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-500"}`}>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "rotate-90" : "rotate-0"}`} />
                    </div>
                  </div>

                  {/* Skills tags preview */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {internship.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                          isSelected
                            ? "bg-zinc-800/80 text-zinc-300 border-zinc-700/50"
                            : "bg-white/80 text-zinc-600 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                    {internship.skills.length > 3 && (
                      <span className={`text-[9px] font-mono ${isSelected ? "text-zinc-400" : "text-zinc-500"}`}>
                        +{internship.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed View Panel (Right side, column-span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              {selectedId ? (
                (() => {
                  const item = INTERNSHIPS.find((intern) => intern.id === selectedId);
                  if (!item) return null;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.98, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs"
                    >
                      <div className="space-y-6">
                        {/* Header Details */}
                        <div className="border-b border-zinc-200/50 dark:border-zinc-800/50 pb-5">
                          <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </span>
                          <h4 className="text-xl sm:text-2xl font-extrabold font-sans text-zinc-900 dark:text-white mt-1.5 leading-tight">
                            {item.role}
                          </h4>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-zinc-500 dark:text-zinc-400">
                            <p className="font-semibold text-sm font-sans text-zinc-800 dark:text-zinc-200">
                              {item.company}
                            </p>
                            <span className="text-zinc-300 dark:text-zinc-700">|</span>
                            <span className="text-xs font-mono">Verified Internship</span>
                          </div>
                        </div>

                        {/* Bulleted list of responsibilities */}
                        <div className="space-y-4">
                          <h5 className="text-xs font-bold font-sans uppercase tracking-widest text-zinc-400">
                            Core Responsibilities & Learning Outcomes
                          </h5>
                          <ul className="space-y-3.5">
                            {item.responsibilities.map((resp, ri) => (
                              <li key={ri} className="flex items-start space-x-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light">
                                <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                                  <Check className="w-2.5 h-2.5" />
                                </div>
                                <span className="font-sans">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tool/Tech tags */}
                      <div className="mt-8 pt-5 border-t border-zinc-200/50 dark:border-zinc-800/50">
                        <h5 className="text-[10px] font-bold font-sans uppercase tracking-widest text-zinc-400 mb-3">
                          Tools & Technologies Applied
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-zinc-200/40 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-850 transition-colors"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })()
              ) : (
                <div className="flex-1 flex items-center justify-center p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-dashed border-zinc-300 dark:border-zinc-800">
                  <p className="text-zinc-400 font-sans text-sm">Select an internship timeline card to load metrics.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
