import React, { useState, useRef } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Search, Github, ExternalLink, SlidersHorizontal, Layers, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-ml", label: "AI & Machine Learning" },
    { id: "web", label: "Web & Full Stack" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "iot", label: "IoT & Hardware" }
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: string) => {
    if (catId === "all") return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === catId).length;
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200/50 dark:border-zinc-800/30 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-sans">
            My Creative Portfolio
          </h2>
          <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold font-sans text-zinc-900 dark:text-white tracking-tight">
            Featured Projects
          </h3>
          <div className="mt-4 h-1 w-12 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Project Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-500" />
              <input
                id="project-search-input"
                type="text"
                placeholder="Search projects by name or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-sans bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-xs"
              />
            </div>

            {/* Quick Count Badge */}
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-200/40 dark:bg-zinc-850 text-zinc-500 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Showing {filteredProjects.length} of {PROJECTS.length} entries</span>
            </div>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  id={`proj-cat-btn-${cat.id}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedId(null);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold font-sans tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-md shadow-zinc-950/5"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/25 text-white dark:bg-zinc-900/10 dark:text-zinc-950" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid Display */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto">
            <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm leading-relaxed">
              No projects found matching your filters. Try checking other categories or resetting the search string!
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isExpanded = expandedId === project.id;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border transition-all ${
                      isExpanded
                        ? "border-zinc-400 dark:border-zinc-700 md:col-span-2 lg:col-span-2 shadow-xl"
                        : "border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/5 hover:-translate-y-1"
                    }`}
                  >
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        {/* Upper Section (Category & Links) */}
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                            {categories.find((c) => c.id === project.category)?.label || project.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            {project.githubUrl && (
                              <a
                                id={`proj-github-${project.id}`}
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400 dark:hover:text-white transition-colors"
                                title="Repository Code"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Title and Description */}
                        <div>
                          <h4 className="text-lg font-bold font-sans text-zinc-900 dark:text-white tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                            {project.title}
                          </h4>
                          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                            {project.description}
                          </p>
                        </div>

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-800/50"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Expandable Features Block */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-3"
                            >
                              <h5 className="text-[10px] font-bold font-sans uppercase tracking-widest text-zinc-400">
                                Core Specifications & Features
                              </h5>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pb-2">
                                {project.features.map((feature, fi) => (
                                  <li key={fi} className="flex items-start space-x-2 text-xs font-sans text-zinc-600 dark:text-zinc-400 leading-normal">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Expand Button */}
                      <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                        <button
                          id={`proj-expand-btn-${project.id}`}
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center space-x-1.5 text-xs font-semibold font-sans text-zinc-800 dark:text-zinc-200 hover:opacity-80 transition-opacity"
                        >
                          <span>{isExpanded ? "Collapse Details" : "Inspect Key Features"}</span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-90" : "rotate-0"}`} />
                        </button>
                        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                          {project.features.length} Features
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};
