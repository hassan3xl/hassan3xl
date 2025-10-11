"use client";

import React, { useEffect, useState } from "react";
import { Github, Search, Filter } from "lucide-react";
import { InputField } from "@/components/input/InputField";
import Loader from "@/components/Loader";
import GitHubRepoCard from "@/components/cards/GitHubRepoCard";
import { Button } from "@/components/ui/button";

type TectStack = {};
export interface GitHubRepoProps {
  id: string;
  name: string;
  description?: string;
  stars: number;
  forks: number;
  watchers: number;
  language?: string;
  languageColor?: string;
  topics?: string[];
  updatedAt: string;
  url: string;
  isPrivate?: boolean;
  stargazers_count: string;
  forks_count: string;
  watchers_count: string;
  techStack: TectStack;
  html_url: string;
  homepage: string;
}

const PROJECT_TECHS = ["All", "django", "react", "nextjs"]; // extend as needed

const ProjectsPage = () => {
  const [repos, setRepos] = useState<GitHubRepoProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  // Fetch repos, fix setTimeout usage
  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      // optional delay for demo
      await new Promise((res) => setTimeout(res, 1200));

      const response = await fetch(
        "https://api.github.com/users/hassan3xl/repos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data: GitHubRepoProps[] = await response.json();
      setRepos(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Filter repos by search term and selected tech
  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTech =
      selectedTech === "All" ||
      repo.topics?.some(
        (topic: any) => topic.toLowerCase() === selectedTech.toLowerCase()
      ) ||
      repo.language?.toLowerCase() === selectedTech.toLowerCase();

    return matchesSearch && matchesTech;
  });

  return (
    <div className="">
      <main className="pt-24 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="mb-12 max-w-3xl">
            <h1 className="text-3xl md:text-4xl text-primary font-bold  mb-4">
              Projects & Work
            </h1>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-secondary text-lg">
              A collection of my development projects, including personal, open
              source, and client work. Browse through to see my technical
              capabilities and problem-solving approach.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-12 flex bg-background flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <InputField
                field="input"
                type="input"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Search projects..."
                icon={Search}
              />
            </div>
            <div className="relative min-w-48">
              <InputField
                field="select"
                type="input"
                onChange={(e) => setSelectedTech(e.target.value)}
                value={selectedTech}
                placeholder="Filter projects"
                icon={Filter}
                options={PROJECT_TECHS.map((tech) => ({
                  label: tech,
                  value: tech,
                }))}
              />
            </div>
          </div>

          {/* Loading State */}
          {loading && <Loader />}

          {/* Error State */}
          {error && (
            <div className="bg-accent border border-red-700 rounded-lg p-6 text-center">
              <p className="text-primary text-lg">Error: {error}</p>
              <Button
                className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-md  font-medium"
                onClick={() => fetchRepos()}
              >
                Try Again
              </Button>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && filteredRepos.length > 0 && (
            <div className="grid bg-background md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.slice(0, 9).map((repo) => (
                <GitHubRepoCard repo={repo} key={repo.id} />
              ))}
            </div>
          )}

          {/* No Projects Found */}
          {!loading && !error && filteredRepos.length === 0 && (
            <p className="text-center text-secondary text-lg">
              No projects found matching the criteria.
            </p>
          )}

          {/* GitHub Profile Link */}
          {!loading && !error && repos.length > 0 && (
            <div className="mt-12 text-center">
              <a
                href="https://github.com/hassan3xl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent text-primary rounded-lg  transition-colors"
              >
                <Github size={18} className="mr-2" /> View More on GitHub
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
