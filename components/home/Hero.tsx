"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Check,
  Copy,
  MapPin,
} from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "contact@hassansaidu.me";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-14 md:pt-10 md:pb-20">
      <div className="flex flex-col gap-6 sm:gap-8 max-w-3xl">
        {/* Top Status & Location Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono text-muted-foreground bg-secondary/60 border border-border/60 shrink-0">
            <MapPin className="w-3 h-3 shrink-0" />
            <span>Abuja, Nigeria (Remote)</span>
          </div>
        </div>

        {/* Profile Header & Main Heading */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1.5 min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Hassan Saidu
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground font-medium">
              Full-Stack Developer, Founder & CS Researcher
            </p>
          </div>

          <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-1 ring-border/80 shadow-md bg-secondary shrink-0">
            <Image
              src="/hassane.png"
              alt="Hassan Saidu"
              fill
              sizes="(max-width: 640px) 72px, 96px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Narrative Pitch */}
        <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-normal">
          I build backend-heavy, high-reliability web systems with{" "}
          <strong className="text-foreground font-semibold">
            Python/Django
          </strong>
          , <strong className="text-foreground font-semibold">Celery</strong>,
          and{" "}
          <strong className="text-foreground font-semibold">PostgreSQL</strong>,
          and ship clean, fast{" "}
          <strong className="text-foreground font-semibold">
            React/Next.js
          </strong>{" "}
          frontends on top. Founder of{" "}
          <a
            href="#projects"
            className="text-foreground font-semibold underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors"
          >
            Mercanest
          </a>{" "}
          and Computer Science graduate based in Abuja, Nigeria.
        </p>

        {/* Action Buttons - Fully Mobile Friendly */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
          {/* Primary 2-column grid on mobile, inline on desktop */}
          <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto sm:flex sm:items-center sm:gap-3">
            <Link href="/projects" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-xl font-medium px-4 sm:px-5 h-10 sm:h-11 gap-1.5 cursor-pointer shadow-xs text-xs sm:text-sm">
                View Work
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>

            <Link href="/resume" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-xl font-medium px-4 sm:px-5 h-10 sm:h-11 border-border/80 hover:bg-secondary/60 cursor-pointer text-xs sm:text-sm"
              >
                Resume
              </Button>
            </Link>
          </div>

          {/* Copy Email Button - Full width on mobile with truncation protection */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl border border-border/80 bg-secondary/40 hover:bg-secondary/80 text-xs font-mono text-muted-foreground hover:text-foreground transition-all cursor-pointer w-full sm:w-auto shrink-0 max-w-full overflow-hidden"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="text-emerald-500 font-medium">
                  Copied to clipboard
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social / Direct Connect Bar - Fluid wrap & concise handles */}
        <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground font-mono">
          <a
            href="https://github.com/hassan3xl"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors shrink-0"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/hassan3xl</span>
          </a>
          <span className="text-border hidden sm:inline">•</span>
          <a
            href="https://www.linkedin.com/in/hassan-saidu-318a2a229"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors shrink-0"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>linkedin.com/in/hassan-saidu</span>
          </a>
        </div>
      </div>
    </section>
  );
}
