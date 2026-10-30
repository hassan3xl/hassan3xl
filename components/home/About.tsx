"use client";

import { Section } from "@/components/ui/Section";
import {
  Server,
  Layout,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Building2,
} from "lucide-react";

export function About() {
  const engineeringPillars = [
    {
      icon: Server,
      title: "Backend & Distributed Systems",
      desc: "Robust API design with Django & DRF, asynchronous task orchestration using Celery & Redis, relational modeling in PostgreSQL, and containerized deployment with Docker.",
    },
    {
      icon: Layout,
      title: "Full-Stack Web & Interfaces",
      desc: "Modern, responsive client applications using Next.js (App Router), React, TypeScript, and Tailwind CSS. Focused on zero-jank performance and strict accessibility.",
    },
    // {
    //   icon: Cpu,
    //   title: "Systems & Embedded Hardware",
    //   desc: "Hands-on experience with ESP32 microcontrollers, C/C++, IoT telemetry, and smart sensor metering. Passionate about embedded systems and drone avionics.",
    // },
  ];

  return (
    <Section id="about" className="border-t border-border/60">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Background & Focus
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {engineeringPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 rounded-2xl border border-border/70 bg-card/40 hover:bg-card/80 transition-colors space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-secondary/80 flex items-center justify-center text-foreground">
                <pillar.icon className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
