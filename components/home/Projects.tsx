"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const FeaturedProject = [
  {
    id: 1,
    link: "https://flowstack-gamma.vercel.app/",
    title: "FlowStack",
    description:
      "A project management and collaboration app design with django for the backend and next js and typescript for the frontend",
    techStack: [
      { id: 1, label: "Django", value: "django" },
      { id: 2, label: "Next.js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
      { id: 4, label: "Python", value: "python" },
    ],
    color: "from-zinc-700 to-zinc-400",
  },
  {
    id: 2,
    link: "https://flowstack-gamma.vercel.app/",
    title: "SubsManager",
    description:
      "A subscription management platform with admin privileges, allowing users to subscribe to various services seamlessly.",
    techStack: [
      { id: 1, label: "Express", value: "express" },
      { id: 2, label: "Next.js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
    ],
    color: "from-zinc-600 to-zinc-300",
  },
  {
    id: 3,
    link: "https://ebuy-frontend.vercel.app/",
    title: "Ebuy Store",
    description:
      "An e-commerce microservice application designed with Django and Express for the backend, and Next.js for the frontend.",
    techStack: [
      { id: 1, label: "Django", value: "django" },
      { id: 2, label: "Next.js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
      { id: 4, label: "Python", value: "python" },
      { id: 5, label: "Express", value: "express" },
    ],
    color: "from-zinc-800 to-zinc-500",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/10">
      <Reveal width="100%">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-zinc-500 rounded-full" />
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FeaturedProject.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.1}>
            <div className="glass-card rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col h-full border-white/5">
              <div
                className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Button
                      size="icon"
                      className="rounded-full h-12 w-12 bg-white text-black hover:bg-white/90"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((t) => (
                    <span
                      key={t.id}
                      className="text-xs px-3 py-1 bg-white/5 text-foreground/80 rounded-full font-medium border border-white/5"
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="flex rounded-md bg-white/5 p-2 flex-col items-center mt-20">
        <Link href="/projects" className="">
          View All Projects
        </Link>
      </div>
    </Section>
  );
}
