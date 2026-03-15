"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32 relative border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          
          {/* Left: Contact Form CTA */}
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-foreground tracking-tight mb-8">
              CONTACT<span className="text-accent">.</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-sm">
              I'm always open to discussing product design work, backend system architecture, or cloud infrastructure projects.
            </p>
            <a 
              href="mailto:satyarajnandi@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-heading font-bold text-foreground hover:text-accent transition-colors group"
            >
              Get in touch
              <span className="p-3 md:p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" size={24} />
              </span>
            </a>
          </div>

          {/* Right: Links & Location */}
          <div className="flex flex-col md:items-end justify-end space-y-12">
            <div className="flex flex-col md:text-right space-y-4">
              <h4 className="font-mono text-accent text-sm tracking-widest uppercase mb-2">Location</h4>
              <p className="text-foreground text-xl">United States</p>
            </div>

            <div className="flex flex-col md:text-right space-y-4">
              <h4 className="font-mono text-accent text-sm tracking-widest uppercase mb-2">Socials</h4>
              <nav className="flex flex-col space-y-3">
                <a href="https://github.com/satyarajreddy" target="_blank" rel="noopener noreferrer" className="text-lg text-muted hover:text-foreground inline-flex items-center gap-2 group md:justify-end">
                  <span className="group-hover:-translate-x-1 transition-transform">GitHub</span> <Github size={18} className="opacity-50 group-hover:opacity-100" />
                </a>
                <a href="https://www.linkedin.com/in/satyarajreddy" target="_blank" rel="noopener noreferrer" className="text-lg text-muted hover:text-foreground inline-flex items-center gap-2 group md:justify-end">
                  <span className="group-hover:-translate-x-1 transition-transform">LinkedIn</span> <Linkedin size={18} className="opacity-50 group-hover:opacity-100" />
                </a>
                <a href="mailto:satyarajnandi@gmail.com" className="text-lg text-muted hover:text-foreground inline-flex items-center gap-2 group md:justify-end">
                  <span className="group-hover:-translate-x-1 transition-transform">Email</span> <Mail size={18} className="opacity-50 group-hover:opacity-100" />
                </a>
              </nav>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-muted/50 font-mono text-sm">
          <p>© {new Date().getFullYear()} Satyaraj Reddy Nandi.</p>
          <p className="mt-4 md:mt-0">Designed & Developed by Satyaraj Reddy Nandi</p>
        </div>
      </div>
      
      {/* Footer background glow overlay */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-[100%] blur-[120px] pointer-events-none" />
    </footer>
  );
}
