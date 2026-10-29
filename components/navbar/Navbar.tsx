"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/providers/theme-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/#about") return pathname === "/" && false;
    return pathname === href;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-3 sm:py-4 transition-all">
      <div className="max-w-5xl mx-auto glass rounded-2xl px-4 sm:px-5 py-2.5 flex items-center justify-between border border-border/70 shadow-xs">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-mono text-xs font-bold flex items-center justify-center transition-transform group-hover:scale-105">
            HS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
              Hassan Saidu
            </span>
            <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline-block">
              @hassan3xl
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  active
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Social quick links */}
          <div className="hidden sm:flex items-center gap-1 border-r border-border/60 pr-2 mr-1">
            <a
              href="https://github.com/hassan3xl"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-saidu-318a2a229"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <ThemeSwitcher />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 p-4 glass rounded-2xl border border-border/70 shadow-lg flex flex-col gap-1.5 animate-in fade-in-50 slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors font-medium flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-border/60 flex items-center justify-between px-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/hassan3xl"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-saidu-318a2a229"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
            <span className="font-mono text-[11px]">v2.0</span>
          </div>
        </div>
      )}
    </header>
  );
}
