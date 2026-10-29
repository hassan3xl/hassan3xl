import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/30 mt-16 sm:mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-tight text-foreground">
            Hassan Saidu
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Systems & Full-Stack Engineer • Founder of Mercanest
          </p>
          <p className="text-[11px] text-muted-foreground/70">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-3 text-xs">
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link
              href="/#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="hover:text-foreground transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <a
              href="https://github.com/hassan3xl"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1 font-mono text-[11px]"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.linkedin.com/in/hassan-saidu-318a2a229"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1 font-mono text-[11px]"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <span className="text-border">•</span>
            <a
              href="mailto:contact@hassansaidu.me"
              className="hover:text-foreground transition-colors flex items-center gap-1 font-mono text-[11px]"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
