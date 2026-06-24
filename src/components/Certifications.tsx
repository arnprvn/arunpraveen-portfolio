import React, { useState, useRef } from "react";
import { CERTIFICATIONS } from "../data";
import { Award, ShieldCheck, Search, SlidersHorizontal, ExternalLink } from "lucide-react";
import { motion, useInView } from "motion/react";

export const Certifications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const filteredCertifications = CERTIFICATIONS.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to determine brand color classes for certifications
  const getBrandStyle = (issuer: string) => {
    const i = issuer.toLowerCase();
    if (i.includes("oracle")) {
      return "border-amber-200 bg-amber-500/5 text-amber-600 dark:border-amber-900/40 dark:bg-amber-950/10 dark:text-amber-400";
    }
    if (i.includes("google")) {
      return "border-blue-200 bg-blue-500/5 text-blue-600 dark:border-blue-900/40 dark:bg-blue-950/10 dark:text-blue-400";
    }
    if (i.includes("aws") || i.includes("amazon")) {
      return "border-orange-200 bg-orange-500/5 text-orange-600 dark:border-orange-900/40 dark:bg-orange-950/10 dark:text-orange-400";
    }
    if (i.includes("cisco")) {
      return "border-teal-200 bg-teal-500/5 text-teal-600 dark:border-teal-900/40 dark:bg-teal-950/10 dark:text-teal-400";
    }
    if (i.includes("deloitte")) {
      return "border-green-200 bg-green-500/5 text-green-600 dark:border-green-900/40 dark:bg-green-950/10 dark:text-green-400";
    }
    return "border-zinc-200 bg-zinc-500/5 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-400";
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200/50 dark:border-zinc-800/30 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-sans">
            Verified Credentials
          </h2>
          <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold font-sans text-zinc-900 dark:text-white tracking-tight">
            Professional Certifications
          </h3>
          <div className="mt-4 h-1 w-12 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </div>

        {/* Search controls */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-500" />
            <input
              id="cert-search-input"
              type="text"
              placeholder="Filter certifications (e.g., Oracle, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-sans bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Grid Display */}
        {filteredCertifications.length === 0 ? (
          <div className="text-center py-12 p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 max-w-md mx-auto">
            <p className="text-zinc-500 dark:text-zinc-400 font-sans text-sm">
              No certifications found matching "{searchQuery}".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all flex flex-col justify-between h-48 cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-2 rounded-xl border ${getBrandStyle(cert.issuer)}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-800/50 text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-bold font-sans text-zinc-900 dark:text-white tracking-tight line-clamp-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs font-semibold font-sans text-zinc-500 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                  <span>Authorized Certificate</span>
                  <span className="opacity-80">Skill Validation</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
