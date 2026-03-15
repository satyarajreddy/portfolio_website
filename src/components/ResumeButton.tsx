"use client";

import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeButton() {
  return (
    <motion.a 
      href="https://drive.google.com/file/d/1mZX5D7XlUPuROP__pJzieyCk84prHpUt/view"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 lg:right-12 lg:bottom-12 z-40 bg-white/5 backdrop-blur-md border border-white/10 text-accent font-mono text-sm uppercase tracking-widest px-6 py-4 rounded-full flex items-center space-x-3 hover:bg-white/10 transition-colors shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FileText size={18} />
      <span>Resume</span>
    </motion.a>
  );
}
