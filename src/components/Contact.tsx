import React, { useState } from "react";
import { PERSONAL_DETAILS } from "../data";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, ExternalLink, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  onOpenATSView: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenATSView }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Simple validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setValidationError("All form fields are strictly required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    // Simulate API dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Clear success banner after delay
      setTimeout(() => setSuccess(false), 6000);
    }, 12000); // 1.2s dispatch simulation
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-sans">
            Get In Touch
          </h2>
          <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold font-sans text-zinc-900 dark:text-white tracking-tight">
            Let's Collaborate
          </h3>
          <div className="mt-4 h-1 w-12 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details (Left side, Column-span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold font-sans text-zinc-800 dark:text-zinc-200">
                  Direct Communications
                </h4>
                <p className="mt-1 text-xs text-zinc-400 leading-normal font-sans">
                  Feel free to reach out for internship opportunities, project collaborations, or technical consultations.
                </p>
              </div>

              {/* Detail cards */}
              <div className="space-y-4">
                {/* Email card */}
                <a
                  id="contact-email-card"
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs cursor-pointer group"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-850 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block leading-none mb-1">Email Address</span>
                    <span className="text-sm font-sans font-bold text-zinc-800 dark:text-zinc-200">{PERSONAL_DETAILS.email}</span>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  id="contact-phone-card"
                  href={`tel:${PERSONAL_DETAILS.phoneRaw}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs cursor-pointer group"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-850 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block leading-none mb-1">Phone Number</span>
                    <span className="text-sm font-sans font-bold text-zinc-800 dark:text-zinc-200">{PERSONAL_DETAILS.phone}</span>
                  </div>
                </a>

                {/* Location card */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-850 text-zinc-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block leading-none mb-1">Office Location</span>
                    <span className="text-sm font-sans font-bold text-zinc-800 dark:text-zinc-200">{PERSONAL_DETAILS.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Call-to-action */}
            <div className="mt-8 p-5 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 flex flex-col justify-between h-40">
              <div>
                <h5 className="font-bold font-sans text-sm">Need a copy of my Resume?</h5>
                <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500 leading-normal font-sans">
                  Generate and print a standard ATS-friendly PDF copy of my full qualifications list.
                </p>
              </div>
              <button
                id="contact-ats-view-btn"
                onClick={onOpenATSView}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white text-zinc-950 dark:bg-zinc-900 dark:text-white text-xs font-bold font-sans hover:opacity-90 transition-opacity"
              >
                <span>ATS Resume Console</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Form (Right side, Column-span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-bold font-sans text-zinc-500 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Arun Praveen"
                    className="w-full px-4 py-2.5 rounded-xl text-sm font-sans bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-2xs"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-xs font-bold font-sans text-zinc-500 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl text-sm font-sans bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="form-subject" className="text-xs font-bold font-sans text-zinc-500 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  id="form-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Internship / Project Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl text-sm font-sans bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-2xs"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="form-message" className="text-xs font-bold font-sans text-zinc-500 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl text-sm font-sans bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-2xs resize-none"
                />
              </div>

              {validationError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold">
                  {validationError}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <AnimatePresence mode="wait">
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Message sent successfully! I'll contact you soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="ml-auto flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm font-sans bg-zinc-950 hover:bg-zinc-850 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 transition-all shadow-md disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
