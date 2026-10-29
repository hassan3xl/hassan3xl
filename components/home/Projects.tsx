"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight, Github, ExternalLink, Cpu, Shield, ShoppingCart, Layers, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectItem {
  id: string;
  title: string;
  role: string;
  category: "Ventures" | "Research" | "Hardware" | "Web Systems";
  icon: typeof Layers;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "mercanest",
    title: "Mercanest",
    role: "Founder & Lead Architect",
    category: "Ventures",
    icon: ShoppingCart,
    description:
      "A CAC-registered enterprise platform powering inventory management and multi-merchant digital storefronts for retail businesses across Nigeria.",
    highlights: [
      "Multi-tenant store catalog and stock synchronization",
      "Asynchronous background jobs with Celery & Redis",
      "High-throughput transactional billing and ledger records",
    ],
    techStack: ["Python", "Django", "Celery", "PostgreSQL", "Redis", "Next.js", "Docker"],
    liveUrl: "https://mercanest.com",
    githubUrl: "https://github.com/hassan3xl",
  },
  {
    id: "resource-isolation",
    title: "Multi-Tenant Resource Isolation Framework",
    role: "Undergraduate Thesis",
    category: "Research",
    icon: Shield,
    description:
      "A systems framework examining deterministic compute and storage isolation across multi-tenant web applications without virtualization overhead.",
    highlights: [
      "Dynamic tenant throttling and storage quotas",
      "Resource contention prevention in shared database clusters",
      "Benchmark metrics evaluating tenant throughput under burst load",
    ],
    techStack: ["Python", "Linux Architecture", "PostgreSQL", "Docker", "Security"],
    githubUrl: "https://github.com/hassan3xl",
  },
  {
    id: "powerwatch",
    title: "PowerWatch Smart Energy System",
    role: "Hardware & Firmware",
    category: "Hardware",
    icon: Cpu,
    description:
      "An ESP32-powered telemetry unit monitoring real-time voltage, current, and energy consumption with streaming alert feeds.",
    highlights: [
      "Firmware telemetry sampling with microsecond accuracy",
      "Real-time event streaming over WebSockets",
      "Low-power standby loops for remote solar installations",
    ],
    techStack: ["ESP32", "C++", "MicroPython", "WebSockets", "Python"],
    githubUrl: "https://github.com/hassan3xl",
  },
  {
    id: "workn",
    title: "WorkN Collaborative Workspace",
    role: "Full-Stack Engineer",
    category: "Web Systems",
    icon: Users,
    description:
      "A unified team platform combining real-time boards, task management, and communication streams designed for remote engineering teams.",
    highlights: [
      "Role-based access control and granular team permissions",
      "Event-driven updates for collaborative task assignments",
    ],
    techStack: ["Django", "DRF", "Next.js", "TypeScript", "Redis"],
    liveUrl: "https://workn.qstack.com.ng",
    githubUrl: "https://github.com/hassan3xl",
  },
  {
    id: "ebuy",
    title: "eBuy Marketplace",
    role: "Backend & Systems",
    category: "Web Systems",
    icon: Layers,
    description:
      "Multi-vendor marketplace providing automated vendor onboarding, merchant dashboards, and order fulfillment workflows.",
    highlights: [
      "Independent vendor management with automated payment splits",
      "Optimized query sets for complex product filtering and search",
    ],
    techStack: ["Django", "Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://ebuy.qstack.com.ng",
    githubUrl: "https://github.com/hassan3xl",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="border-t border-border/60">
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Featured Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Ventures, systems & prototypes
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            Browse all repositories
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 gap-6">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group p-6 sm:p-7 rounded-2xl border border-border/70 bg-card/40 hover:bg-card/90 hover:border-zinc-700/60 dark:hover:border-zinc-700 transition-all duration-200 space-y-4"
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/60">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1 sm:pt-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/60"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/80 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs text-muted-foreground">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-muted-foreground/60 font-mono">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-secondary/50 text-muted-foreground border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View all footer */}
        <div className="text-center pt-4">
          <Link href="/projects">
            <Button
              variant="outline"
              className="rounded-xl font-medium px-6 h-11 border-border/80 hover:bg-secondary/80 cursor-pointer gap-2"
            >
              View all 20+ projects & open source repos
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
