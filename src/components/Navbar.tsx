import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Menu, X, Sun, Moon, Terminal, User, Briefcase, Code, Award, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_DETAILS } from "../data";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenATSView: () => void;
  isATSViewOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  setActiveSection, 
  onOpenATSView,
  isATSViewOpen
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: Terminal },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Internships", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Sparkles },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <motion.button
              id="nav-logo-btn"
              onClick={() => handleNavClick("hero")}
              className="flex items-center space-x-2 font-sans font-bold tracking-tight text-zinc-900 dark:text-white group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center transition-colors">
                <span className="text-white dark:text-zinc-950 text-base font-extrabold font-mono">A</span>
              </div>
              <span className="text-lg font-extrabold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                {PERSONAL_DETAILS.name}
              </span>
            </motion.button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-lg font-sans text-sm font-medium transition-all ${
                    isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Utility Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* ATS View Button */}
            <button
              id="ats-view-toggle-btn"
              onClick={onOpenATSView}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold font-sans tracking-wide transition-all uppercase ${
                isATSViewOpen
                  ? "bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-950 shadow-md shadow-zinc-950/10"
                  : "bg-transparent border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              ATS Resume Mode
            </button>

            {/* Theme Toggle Button */}
            <motion.button
              id="desktop-theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              whileTap={{ scale: 0.95 }}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Theme Toggle (Mobile inline) */}
            <button
              id="mobile-theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* ATS Mobile button */}
            <button
              id="mobile-ats-toggle-btn"
              onClick={onOpenATSView}
              className={`px-2 py-1.5 rounded-md border text-[10px] font-bold font-sans tracking-wide transition-all uppercase ${
                isATSViewOpen
                  ? "bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-950"
                  : "bg-transparent border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              }`}
            >
              ATS Mode
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-sans text-base font-medium transition-all ${
                      isActive
                        ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white font-semibold"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5 opacity-70" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
