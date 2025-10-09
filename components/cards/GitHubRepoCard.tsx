"use client";
import React from "react";
import {
  Star,
  GitFork,
  Eye,
  ExternalLink,
  Lock,
  Github,
  Calendar,
} from "lucide-react";
import GitHubRepoPr, { GitHubRepoProps } from "@/app/projects/page";

type GithubReposType = { repo: GitHubRepoProps };
const GitHubRepoCard = ({ repo }: GithubReposType) => {
  const {
    id,
    name,
    description,
    stargazers_count,
    forks_count,
    watchers_count,
    language,
    languageColor = "#3178c6",
    techStack = [],
    updatedAt,
    html_url,
    homepage,
    isPrivate = false,
  } = repo;

  const formatDate = (date: string) => {
    if (!date) return "";
    const d = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - d.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Updated today";
    if (diffDays === 1) return "Updated yesterday";
    if (diffDays < 7) return `Updated ${diffDays} days ago`;
    if (diffDays < 30) return `Updated ${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365)
      return `Updated ${Math.floor(diffDays / 30)} months ago`;
    return `Updated ${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <div
      key={id}
      className="group relative bg-background/70 border border-border rounded-2xl overflow-hidden 
      hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm 
      transition-all duration-300 hover:-translate-y-1"
    >
      {/* Top Glow Accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Repo Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <Github
          size={36}
          className="text-primary transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-primary transition-colors line-clamp-1">
            {name}
          </h3>

          {isPrivate && (
            <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
              <Lock size={12} /> Private
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-foreground/70 mb-4 text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {description || "No description available"}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-5 text-sm text-foreground/60">
          <div className="flex items-center gap-3">
            {language && (
              <div className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: languageColor }}
                />
                <span>{language}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <Star size={14} />
              <span>{stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitFork size={14} />
              <span>{forks_count}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye size={14} />
              <span>{watchers_count}</span>
            </div>
          </div>

          {updatedAt && (
            <div className="flex items-center gap-1 text-xs text-foreground/50">
              <Calendar size={13} />
              <span>{formatDate(updatedAt)}</span>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium text-sm flex items-center transition-colors"
          >
            View Repository
            <ExternalLink size={14} className="ml-1" />
          </a>

          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:bg-primary/90 px-3 py-1 rounded-md text-xs font-medium transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubRepoCard;
