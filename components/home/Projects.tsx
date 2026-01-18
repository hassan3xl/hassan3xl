"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const FeaturedProject = [
  {
    id: 1,
    link: "https://flowstack-gamma.vercel.app/",
    image: "https://placehold.co/600x400",
    title: "FlowStack",
    description:
      "A project management and collaboration app design with django for the backend and next js and typescript for the frontend",
    techStack: [
      { id: 1, label: "DJango", value: "django" },
      { id: 2, label: "Next Js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
      { id: 4, label: "Python", value: "python" },
    ],
  },
  {
    id: 2,
    link: "https://flowstack-gamma.vercel.app/",
    image: "/api/placeholder/600/400",
    title: "SubsManager",
    description:
      "a subscription management with admin previlage where users can go and subscribe to their any of our services, ",
    techStack: [
      { id: 1, label: "Express", value: "express" },
      { id: 2, label: "Next Js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
    ],
  },
  {
    id: 3,
    link: "https://ebuy-frontend.vercel.app/",
    image: "/api/placeholder/600/400",
    title: "Ebuy Store",
    description:
      "an ecomerce microservice application design with django and express for the backend and next js and typescript for the frontend",
    techStack: [
      { id: 1, label: "DJango", value: "django" },
      { id: 2, label: "Next Js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
      { id: 4, label: "Python", value: "python" },
      { id: 5, label: "Express", value: "express" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <Reveal width="100%">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured <GradientText>Projects</GradientText>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {FeaturedProject.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.1}>
            <div className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-primary/10 transition-colors" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((t) => (
                    <span
                      key={t.id}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md font-medium"
                    >
                      {t.label}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                    View Project <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
