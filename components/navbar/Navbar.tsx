"use client";

import { ThemeSwitcher } from "@/providers/theme-switcher";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 transition-all duration-300">
      <div className="glass-card max-w-5xl mx-auto rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <GradientText className="text-xl md:text-2xl font-bold">
            Hassan3xl
          </GradientText>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pl-2 border-l border-border">
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-4 right-4 glass p-6 rounded-xl flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
