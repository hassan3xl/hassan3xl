"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Check,
  Copy,
  Terminal,
  MapPin,
  Sparkles,
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
    <section className="pt-6 pb-14 md:pt-10 md:pb-20">
      <div className="flex flex-col gap-8 max-w-3xl">
        {/* Top Status & Location Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for roles & projects
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-muted-foreground bg-secondary/60 border border-border/60">
            <MapPin className="w-3 h-3" />
            Abuja, Nigeria (Remote)
          </div>
        </div>

        {/* Profile Header & Main Heading */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Hassan Saidu
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              Full-Stack Developer, Founder & CS Researcher
            </p>
          </div>

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-1 ring-border/80 shadow-md bg-secondary shrink-0">
            <Image
              src="/hassane.png"
              alt="Hassan Saidu"
              fill
              sizes="(max-width: 640px) 80px, 96px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Narrative Pitch */}
        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-normal">
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
          and final-year Computer Science student researching multi-tenant
          resource isolation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link href="/projects">
            <Button className="rounded-xl font-medium px-5 h-11 gap-2 cursor-pointer shadow-xs">
              View Work
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <Link href="/resume">
            <Button
              variant="outline"
              className="rounded-xl font-medium px-5 h-11 border-border/80 hover:bg-secondary/60 cursor-pointer"
            >
              Resume & Experience
            </Button>
          </Link>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 h-11 px-4 rounded-xl border border-border/80 bg-secondary/40 hover:bg-secondary/80 text-xs font-mono text-muted-foreground hover:text-foreground transition-all cursor-pointer"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-medium">
                  Copied to clipboard
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social / Direct Connect Bar */}
        <div className="pt-2 flex items-center gap-4 text-xs text-muted-foreground font-mono">
          <a
            href="https://github.com/hassan3xl"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            github.com/hassan3xl
          </a>
          <span className="text-border">•</span>
          <a
            href="https://www.linkedin.com/in/hassan-saidu-318a2a229"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            www.linkedin.com/in/hassan-saidu-318a2a229
          </a>
        </div>
      </div>
    </section>
  );
}
