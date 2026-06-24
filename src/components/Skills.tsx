import React, { useState, useRef } from "react";
import { SKILL_GROUPS } from "../data";
import { Search, Code2, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { motion, useInView } from "motion/react";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewType, setViewType] = useState<"list" | "grid">("grid");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const categories = ["All", ...SKILL_GROUPS.map((g) => g.category)];

  // Filter skills based on tab and search
  const filteredGroups = SKILL_GROUPS.map((group) => {
    // If category active tab is set, filter group
    if (activeTab !== "All" && group.category !== activeTab) {
      return null;
    }

    const filteredSkills = group.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) {
      return null;
    }

    return {
      ...group,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof SKILL_GROUPS;

  const totalSkillsCount = SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200/50 dark:border-zinc-800/30 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-sans">
            Core Competencies
          </h2>
          <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold font-sans text-zinc-900 dark:text-white tracking-tight">
            Technical Arsenal
          </h3>
          <div className="mt-4 h-1 w-12 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </div>

        {/* Search, Filter Tabs and View Toggles */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-500" />
              <input
                id="skill-search-input"
                type="text"
                placeholder="Search technologies (e.g., Python, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-sans bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-xs"
              />
            </div>

            {/* View Toggles */}
            <div className="flex items-center space-x-2 bg-zinc-200/50 dark:bg-zinc-800/50 p-1 rounded-xl self-end md:self-auto">
              <button
                id="skill-view-grid-btn"
                onClick={() => setViewType("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewType === "grid"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
                title="Bento Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                id="skill-view-list-btn"
                onClick={() => setViewType("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewType === "list"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
                title="List View with Progress"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Categories Tab Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-cat-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-sans tracking-wide transition-all whitespace-nowrap ${
                  activeTab === cat
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-md shadow-zinc-950/5"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill rendering space */}
        {filteredGroups.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm">
              No skills found matching "{searchQuery}". Try searching for something else.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredGroups.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="space-y-5"
              >
                {/* Group Label */}
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-6 bg-zinc-900 dark:bg-white rounded-full" />
                  <h4 className="font-bold font-sans text-zinc-800 dark:text-zinc-200 text-lg uppercase tracking-wide">
                    {group.category}
                  </h4>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                    ({group.skills.length})
                  </span>
                </div>

                {/* Skill Items */}
                {viewType === "grid" ? (
                  // Grid View - Glowing dynamic badges
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="relative overflow-hidden group bg-white dark:bg-zinc-900/40 p-4 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/50 shadow-xs flex flex-col justify-between h-24 cursor-default transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
                      >
                        <span className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm">
                          {skill.name}
                        </span>
                        
                        <div className="w-full space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                            <span>Proficiency</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-zinc-900 dark:bg-white rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // List View - Full progress columns
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-zinc-900/20 p-6 sm:p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-sans font-semibold text-zinc-700 dark:text-zinc-300">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="h-full bg-zinc-900 dark:bg-white rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
