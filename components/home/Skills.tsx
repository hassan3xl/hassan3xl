"use client";

import { Section } from "@/components/ui/Section";
import { Terminal, Database, Code2, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Terminal;
  description: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Distributed Systems",
    icon: Database,
    description:
      "Designing resilient services, queue-based background workers, and relational schemas.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Celery",
      "PostgreSQL",
      "Redis",
      "FastAPI",
      "JWT Authentication",
      "RESTful API Design",
    ],
  },
  {
    title: "Frontend & UI Engineering",
    icon: Code2,
    description:
      "Building clean, accessible interfaces with zero layout shift and fast interactions.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "UI Component Architecture",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: Terminal,
    description:
      "Containerizing services, configuring reverse proxies, and maintaining production environments.",
    skills: [
      "Docker",
      "Linux / Bash",
      "Nginx",
      "Render",
      "Git & GitHub",
      "CI / CD Pipelines",
      "Multi-tenancy Isolation",
    ],
  },
  {
    title: "Embedded & IoT Prototyping",
    icon: Cpu,
    description:
      "Hardware telemetry, microcontroller programming, and real-time streaming protocols.",
    skills: [
      "ESP32",
      "C / C++",
      "MicroPython",
      "WebSockets",
      "Sensor Telemetry",
      "IoT Automation",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Technical Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Tools, technologies & engineering domains
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            My primary stack is built around Python and TypeScript, with a strong
            focus on reliability, scalable data flows, and maintainable architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl border border-border/70 bg-card/40 hover:bg-card/70 transition-colors space-y-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary/60 text-foreground/80 border border-border/40 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
