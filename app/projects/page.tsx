"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Github,
  Search,
  Filter,
  Star,
  GitFork,
  ExternalLink,
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Layers,
} from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language?: string;
  html_url: string;
  homepage?: string;
  topics?: string[];
  updated_at?: string;
}

const FALLBACK_FEATURED = [
  {
    id: 101,
    name: "mercanest",
    description:
      "Enterprise inventory management and multi-merchant digital storefront platform built with Python, Django, Celery, and Next.js.",
    stargazers_count: 5,
    forks_count: 1,
    watchers_count: 5,
    language: "Python",
    html_url: "https://github.com/hassan3xl",
    homepage: "https://mercanest.com",
    topics: ["django", "celery", "postgresql", "nextjs"],
  },
  {
    id: 102,
    name: "multi-tenant-isolation-framework",
    description:
      "Undergraduate research thesis framework enforcing compute and storage isolation across multi-tenant web applications.",
    stargazers_count: 3,
    forks_count: 0,
    watchers_count: 3,
    language: "Python",
    html_url: "https://github.com/hassan3xl",
    topics: ["systems", "isolation", "security", "python"],
  },
  {
    id: 103,
    name: "powerwatch-esp32",
    description:
      "ESP32-based smart electrical energy monitoring and telemetry system with streaming WebSocket alert feeds.",
    stargazers_count: 4,
    forks_count: 1,
    watchers_count: 4,
    language: "C++",
    html_url: "https://github.com/hassan3xl",
    topics: ["esp32", "iot", "websockets", "telemetry"],
  },
  {
    id: 104,
    name: "workn-workspace",
    description:
      "Real-time collaborative workspace platform with project boards, task management, and communication feeds.",
    stargazers_count: 2,
    forks_count: 0,
    watchers_count: 2,
    language: "TypeScript",
    html_url: "https://github.com/hassan3xl",
    homepage: "https://workn.qstack.com.ng",
    topics: ["django", "nextjs", "redis", "typescript"],
  },
  {
    id: 105,
    name: "ebuy-marketplace",
    description:
      "Multi-vendor e-commerce marketplace featuring vendor dashboards, order tracking, and automated fulfillment workflows.",
    stargazers_count: 3,
    forks_count: 0,
    watchers_count: 3,
    language: "Python",
    html_url: "https://github.com/hassan3xl",
    homepage: "https://ebuy.qstack.com.ng",
    topics: ["django", "react", "nextjs", "ecommerce"],
  },
];

const PROJECT_TECHS = [
  "All",
  "Python",
  "TypeScript",
  "JavaScript",
  "C++",
  "Django",
];

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_FEATURED);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.github.com/users/hassan3xl/repos?sort=updated&per_page=50",
        );
        if (res.ok) {
          const data: GitHubRepo[] = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Filter out forks or keep interesting ones
            setRepos(data);
          }
        }
      } catch (err) {
        console.warn("Using fallback repo data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech =
      selectedTech === "All" ||
      repo.language?.toLowerCase() === selectedTech.toLowerCase() ||
      repo.topics?.some(
        (t) => t.toLowerCase() === selectedTech.toLowerCase(),
      );
    return matchesSearch && matchesTech;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
      {/* Back button & Header */}
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to overview
        </Link>

        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Repositories & Systems
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Projects & Open Source Work
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive catalog of applications, distributed tools, firmware
            prototypes, and academic frameworks authored or maintained by Hassan Saidu.
          </p>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search repositories by name or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-secondary/40 border border-border/70 rounded-xl focus:border-foreground focus:outline-none transition-colors"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-muted-foreground shrink-0 hidden sm:block" />
          <div className="flex flex-wrap gap-1">
            {PROJECT_TECHS.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  selectedTech === tech
                    ? "bg-foreground text-background font-semibold"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/40"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRepos.map((repo) => (
          <div
            key={repo.id}
            className="group p-5 rounded-2xl border border-border/70 bg-card/40 hover:bg-card/80 hover:border-zinc-700/60 dark:hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {repo.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                      title="Live deployment"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                    title="View GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed line-clamp-3">
                {repo.description || "Production system and codebase authored by Hassan Saidu."}
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-3">
                {repo.language && (
                  <span className="flex items-center gap-1.5 text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks_count}
                </span>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                Inspect
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="p-6 rounded-2xl border border-border/70 bg-secondary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold text-sm text-foreground">
            Continuous GitHub Activity
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Visit my GitHub profile to explore active pull requests, commit history,
            and research notes.
          </p>
        </div>
        <a
          href="https://github.com/hassan3xl"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-foreground text-background hover:opacity-90 transition-opacity shrink-0"
        >
          <Github className="w-3.5 h-3.5" />
          <span>Follow @hassan3xl</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
