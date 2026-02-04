"use client";

import React, { useEffect, useState } from "react";
import {
  Github,
  Search,
  Filter,
  Star,
  GitFork,
  Eye,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";

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

interface PinnedRepo {
  owner: string;
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
}

const PROJECT_TECHS = [
  "All",
  "Python",
  "TypeScript",
  "JavaScript",
  "Django",
  "React",
];

const ProjectsPage = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [pinnedLoading, setPinnedLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  // Fetch pinned repos
  const fetchPinnedRepos = async () => {
    setPinnedLoading(true);
    try {
      const response = await fetch(
        "https://gh-pinned-repos.egoist.dev/?username=hassan3xl",
      );
      if (response.ok) {
        const data = await response.json();
        setPinnedRepos(data);
      }
    } catch (err) {
      console.error("Failed to fetch pinned repos");
    } finally {
      setPinnedLoading(false);
    }
  };

  // Fetch all repos
  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.github.com/users/hassan3xl/repos?sort=updated&per_page=50",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data: GitHubRepo[] = await response.json();
      setRepos(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPinnedRepos();
    fetchRepos();
  }, []);

  // Filter repos by search term and selected tech
  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTech =
      selectedTech === "All" ||
      repo.language?.toLowerCase() === selectedTech.toLowerCase() ||
      repo.topics?.some(
        (topic) => topic.toLowerCase() === selectedTech.toLowerCase(),
      );
    return matchesSearch && matchesTech;
  });

  return (
    <div className="min-h-screen">
      <Section className="pt-8 md:pt-16">
        {/* Page Header */}
        <Reveal>
          <div className="flex flex-col items-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              My <GradientText>Projects</GradientText>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-zinc-500 rounded-full mb-6" />
            <p className="text-muted-foreground text-center max-w-2xl text-lg">
              A collection of my development projects, including personal, open
              source, and client work. Browse through to see my technical
              capabilities and problem-solving approach.
            </p>
          </div>
        </Reveal>

        {/* Pinned Repositories Section */}
        <Reveal delay={0.1}>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Projects
            </h2>

            {pinnedLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="glass-card rounded-3xl p-6 animate-pulse"
                  >
                    <div className="h-6 bg-zinc-800 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-zinc-800 rounded w-full mb-2" />
                    <div className="h-4 bg-zinc-800 rounded w-2/3" />
                  </div>
                ))}
              </div>
            ) : pinnedRepos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pinnedRepos.map((repo, index) => (
                  <Reveal key={repo.repo} delay={index * 0.1}>
                    <a
                      href={`https://github.com/${repo.owner}/${repo.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card rounded-3xl p-6 block hover:border-primary/50 transition-all duration-300 group h-full border-white/5"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {repo.repo}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                        {repo.description || "No description available"}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {repo.language && (
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor:
                                  repo.languageColor || "#3178c6",
                              }}
                            />
                            <span>{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Star size={14} />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GitFork size={14} />
                          <span>{repo.forks}</span>
                        </div>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>

        {/* Search and Filter Controls */}
        <Reveal delay={0.2}>
          <div className="mb-10 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="relative min-w-48">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:border-primary/50 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {PROJECT_TECHS.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Reveal>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="glass-card rounded-3xl p-8 text-center border-red-500/20">
            <p className="text-red-400 text-lg mb-4">Error: {error}</p>
            <Button onClick={() => fetchRepos()} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        {/* All Projects Grid */}
        {!loading && !error && (
          <>
            <Reveal delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Github className="w-6 h-6" />
                All Repositories
                <span className="text-sm font-normal text-muted-foreground">
                  ({filteredRepos.length})
                </span>
              </h2>
            </Reveal>

            {filteredRepos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo, index) => (
                  <Reveal key={repo.id} delay={Math.min(index * 0.05, 0.5)}>
                    <div className="glass-card rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 group h-full border-white/5">
                      {/* Thumbnail */}
                      <div className="h-32 bg-gradient-to-br from-zinc-800/50 to-zinc-700/30 flex items-center justify-center relative overflow-hidden">
                        <Github className="w-10 h-10 text-muted-foreground/50" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">
                            {repo.name}
                          </h3>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                          {repo.description || "No description available"}
                        </p>

                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          {repo.language && (
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                              <span>{repo.language}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Star size={13} />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork size={13} />
                            <span>{repo.forks_count}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No projects found matching the criteria.
                </p>
              </div>
            )}
          </>
        )}

        {/* GitHub Profile Link */}
        {!loading && !error && repos.length > 0 && (
          <Reveal delay={0.4}>
            <div className="mt-16 text-center">
              <a
                href="https://github.com/hassan3xl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full hover:border-primary/50 transition-all duration-300 font-medium"
              >
                <Github className="w-5 h-5" />
                View More on GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        )}
      </Section>
    </div>
  );
};

export default ProjectsPage;
