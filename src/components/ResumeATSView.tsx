import React, { useState } from "react";
import { PERSONAL_DETAILS, EDUCATION, INTERNSHIPS, PROJECTS, CERTIFICATIONS, SKILL_GROUPS } from "../data";
import { Printer, X, Download, ShieldCheck, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

interface ResumeATSViewProps {
  onClose: () => void;
}

export const ResumeATSView: React.FC<ResumeATSViewProps> = ({ onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = async () => {
    const element = document.getElementById("ats-print-canvas");
    if (!element) return;
    
    setIsGenerating(true);
    
    try {
      // Small delay to ensure any rendering is complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      const dataUrl = await toPng(element, { 
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff'
      });
      
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgProps = pdf.getImageProperties(dataUrl);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`${PERSONAL_DETAILS.name.replace(/\s+/g, "_")}_Resume.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div id="ats-resume-overlay" className="fixed inset-0 z-50 overflow-y-auto bg-zinc-100 dark:bg-zinc-950 p-4 sm:p-6 md:p-10 flex flex-col items-center">
      
      {/* Interactive Control Header (Hidden during physical printing) */}
      <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 mb-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-sans text-zinc-850 dark:text-zinc-100">
              ATS-Optimized Resumes Mode
            </h4>
            <p className="text-[11px] font-sans text-zinc-400">
              Formatted with clean single-column spacing to bypass candidate parsing bots. Click <strong>Print</strong> to save as a physical PDF.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            id="print-resume-btn"
            onClick={handlePrint}
            disabled={isGenerating}
            className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-850 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 rounded-xl text-xs font-bold font-sans transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Printer className="w-4 h-4" />}
            <span>{isGenerating ? "Generating PDF..." : "Print / Save as PDF"}</span>
          </button>

          <button
            id="close-resume-btn"
            onClick={onClose}
            className="flex items-center space-x-1 px-3 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-xl text-xs font-semibold font-sans transition-all"
          >
            <X className="w-4 h-4" />
            <span>Exit Mode</span>
          </button>
        </div>
      </div>

      {/* The Actual Resume Sheet (optimized for print & screen parsing) */}
      <div 
        id="ats-print-canvas"
        className="w-full max-w-4xl bg-white text-black p-8 sm:p-12 md:p-16 rounded-xs shadow-xl border border-zinc-200 print:shadow-none print:border-none print:p-0 font-serif leading-relaxed"
      >
        
        {/* Header Block */}
        <div className="text-center space-y-2 border-b-2 border-black pb-5">
          <h1 className="text-3xl font-extrabold tracking-tight font-sans uppercase">
            {PERSONAL_DETAILS.name}
          </h1>
          <p className="text-sm font-medium italic font-sans text-zinc-700">
            {PERSONAL_DETAILS.roles.join("  |  ")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs font-mono font-medium text-zinc-600 pt-1">
            <span>{PERSONAL_DETAILS.location}</span>
            <span>•</span>
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="hover:underline">{PERSONAL_DETAILS.email}</a>
            <span>•</span>
            <span>+91 {PERSONAL_DETAILS.phoneRaw}</span>
            <span>•</span>
            <a href={PERSONAL_DETAILS.linkedin} className="hover:underline">LinkedIn</a>
            <span>•</span>
            <a href={PERSONAL_DETAILS.github} className="hover:underline">GitHub</a>
          </div>
        </div>

        {/* Section: Professional Summary */}
        <div className="mt-6 space-y-2">
          <h2 className="text-sm font-bold font-sans uppercase tracking-widest border-b border-zinc-400 pb-0.5">
            Professional Summary
          </h2>
          <p className="text-xs text-justify font-serif text-zinc-850 leading-relaxed font-light">
            {PERSONAL_DETAILS.bio}
          </p>
        </div>

        {/* Section: Education */}
        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-bold font-sans uppercase tracking-widest border-b border-zinc-400 pb-0.5">
            Education
          </h2>
          <div className="flex justify-between items-start text-xs font-serif text-zinc-850">
            <div>
              <p className="font-bold font-sans">{EDUCATION.institution}</p>
              <p className="italic text-zinc-700 mt-0.5">{EDUCATION.degree}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold font-sans">{EDUCATION.period}</p>
              <p className="font-mono text-[10px] text-zinc-600 mt-0.5">CGPA: {EDUCATION.gpa}</p>
            </div>
          </div>
        </div>

        {/* Section: Skills (ATS keywords density) */}
        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-bold font-sans uppercase tracking-widest border-b border-zinc-400 pb-0.5">
            Technical Competencies
          </h2>
          <div className="space-y-1.5 text-xs font-serif text-zinc-850">
            {SKILL_GROUPS.map((group) => (
              <p key={group.category} className="leading-relaxed">
                <strong className="font-sans font-semibold inline-block w-44">{group.category}:</strong>{" "}
                <span>{group.skills.map((s) => s.name).join(", ")}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Section: Internships */}
        <div className="mt-6 space-y-4">
          <h2 className="text-sm font-bold font-sans uppercase tracking-widest border-b border-zinc-400 pb-0.5">
            Professional Internships
          </h2>
          
          {INTERNSHIPS.map((intern) => (
            <div key={intern.id} className="space-y-1.5">
              <div className="flex justify-between items-start text-xs font-serif text-zinc-850">
                <div>
                  <span className="font-bold font-sans">{intern.role}</span>
                  <span className="text-zinc-600 font-sans font-medium"> — {intern.company}</span>
                </div>
                <span className="font-semibold font-sans">{intern.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-800 leading-normal">
                {intern.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section: Key Projects */}
        <div className="mt-6 space-y-4">
          <h2 className="text-sm font-bold font-sans uppercase tracking-widest border-b border-zinc-400 pb-0.5">
            Academic & Applied Projects
          </h2>

          {PROJECTS.slice(0, 6).map((proj) => (
            <div key={proj.id} className="space-y-1">
              <div className="flex justify-between items-start text-xs font-serif text-zinc-850">
                <span className="font-bold font-sans">{proj.title}</span>
                <span className="font-mono text-[10px] text-zinc-500">{proj.tech.join(", ")}</span>
              </div>
              <p className="text-xs text-zinc-700 italic">
                {proj.description}
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-[11px] text-zinc-850">
                {proj.features.slice(0, 2).map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section: Certifications */}
        <div className="mt-6 space-y-2">
          <h2 className="text-sm font-bold font-sans uppercase tracking-widest border-b border-zinc-400 pb-0.5">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-serif text-zinc-850 pt-1">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="flex justify-between items-center border-b border-dashed border-zinc-100 pb-0.5">
                <span className="font-medium">{cert.title}</span>
                <span className="font-mono text-[9px] text-zinc-500 ml-1">({cert.issuer})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
