"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center py-12 md:py-20 relative overflow-hidden">
      {/* Dynamic Background - Subtle Dark */}

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <Reveal delay={0.1}>
          <div className="relative mb-6 md:mb-8 group">
            <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-b from-zinc-700 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 relative">
                <Image
                  src="/hassane.png"
                  fill
                  alt="Hassan Saidu"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main Heading */}
        <Reveal delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6 leading-[1.1]">
            Building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              Digital Future
            </span>
          </h1>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={0.3}>
          <p className="max-w-xl md:max-w-2xl text-base md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed mx-auto px-2">
            I'm{" "}
            <span className="font-semibold text-foreground">Hassan Saidu</span>,
            a Full Stack Developer transforming ideas into exceptional digital
            experiences. Specialized in Next.js, React, and Modern UI.
          </p>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={0.5}>
          <div className="flex gap-4 md:gap-6 justify-center items-center">
            {[
              {
                href: "https://github.com/hassan3xl",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/hassan3xl",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:contact@hassan3xl.com",
                icon: Mail,
                label: "Email",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-5 h-9 md:w-6 md:h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
