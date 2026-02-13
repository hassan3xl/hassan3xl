"use client";

import React, { useState } from "react";
import {
  Download,
  ExternalLink,
  FileText,
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowRight,
  BookOpen,
  Briefcase,
  Code,
  Award,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";

const ResumePage = () => {
  const [activeSection, setActiveSection] = useState("all");

  const resumeSections = [
    { id: "all", label: "All" },
    { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
    { id: "education", label: "Education", icon: <BookOpen size={16} /> },
    { id: "skills", label: "Skills", icon: <Code size={16} /> },
    { id: "projects", label: "Projects", icon: <Award size={16} /> },
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Django", level: 90 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Remix", level: 70 },
    { name: "Express", level: 75 },
    { name: "Flask", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git", level: 80 },
  ];

  const shouldShowSection = (sectionId: string) => {
    return activeSection === "all" || activeSection === sectionId;
  };

  return (
    <div className="min-h-screen">
      <Section className="pt-8 md:pt-16">
        {/* Page Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional <GradientText>Resume</GradientText>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-white to-zinc-500 rounded-full mb-6" />
              <p className="text-muted-foreground max-w-2xl text-lg">
                My qualifications, experience, and skills in software
                development.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <a
                href="/hassan3xl-resume.pdf"
                download="Hassan_Saidu_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 glass-card rounded-xl hover:border-primary/50 transition-all font-medium"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 glass-card rounded-xl hover:border-primary/50 transition-all font-medium"
              >
                <FileText size={18} />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Resume Filter Tabs */}
        <Reveal delay={0.1}>
          <div className="mb-12 overflow-x-auto">
            <div className="inline-flex glass-card rounded-xl p-1.5 min-w-full md:min-w-0">
              {resumeSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all font-medium ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Resume Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Contact & Skills */}
          <div className="md:col-span-1 space-y-8">
            {/* Contact Information */}
            <Reveal delay={0.2}>
              <div className="glass-card rounded-3xl p-6 border-white/5">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Mail size={18} className="text-primary" />
                  Contact
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Email</p>
                      <a
                        href="mailto:saiduhassanhussaine@gmail.com"
                        className="text-foreground hover:text-primary transition-colors text-sm"
                      >
                        saiduhassanhussaine@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-zinc-500/10 text-zinc-400">
                      <Github size={16} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">GitHub</p>
                      <a
                        href="https://github.com/hassan3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors text-sm"
                      >
                        github.com/hassan3xl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-zinc-600/10 text-zinc-300">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/hassan3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors text-sm"
                      >
                        linkedin.com/in/hassan3xl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-zinc-500/10 text-zinc-400">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Phone</p>
                      <a
                        href="tel:+2349160807885"
                        className="text-foreground hover:text-primary transition-colors text-sm"
                      >
                        +234 916 080 7885
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-zinc-600/10 text-zinc-300">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Location</p>
                      <span className="text-foreground text-sm">
                        Nigeria (Remote Available)
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Skills Section */}
            {shouldShowSection("skills") && (
              <Reveal delay={0.3}>
                <div className="glass-card rounded-3xl p-6 border-white/5">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Code size={18} className="text-primary" />
                    Technical Skills
                  </h2>
                  <ul className="space-y-4">
                    {skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-zinc-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-white to-zinc-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column - Experience, Education & Projects */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Section */}
            {shouldShowSection("experience") && (
              <Reveal delay={0.2}>
                <div className="glass-card rounded-3xl p-6 md:p-8 border-white/5">
                  <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    Professional Experience
                  </h2>
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-zinc-700">
                      <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                      <h3 className="text-lg font-bold mb-1">
                        Freelance Developer
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        2023 - Present
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Developed custom web applications for clients using
                        Django and React, ensuring performance, scalability, and
                        user satisfaction.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Implemented RESTful APIs with Django Rest Framework
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Created responsive UI components with React and
                          Tailwind CSS
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Optimized application performance and security
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Managed client relationships and project delivery
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-8 border-l-2 border-zinc-700">
                      <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-zinc-500" />
                      <h3 className="text-lg font-bold mb-1">
                        Intern - Software Development
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Summer 2024
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Worked on building and optimizing APIs with Django Rest
                        Framework and integrated them with React frontends.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Developed API endpoints for data retrieval and
                          manipulation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Implemented JWT authentication for secure access
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          Created reusable React components for the frontend
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Education Section */}
            {shouldShowSection("education") && (
              <Reveal delay={0.3}>
                <div className="glass-card rounded-3xl p-6 md:p-8 border-white/5">
                  <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <BookOpen size={18} className="text-primary" />
                    Education
                  </h2>
                  <div className="relative pl-8 border-l-2 border-zinc-700">
                    <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                    <h3 className="text-lg font-bold mb-1">
                      Bachelor's Degree in Computer Science
                    </h3>
                    <p className="text-foreground mb-1">
                      Modibbo Adam University, Yola
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      2022 - Present
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Focusing on software engineering principles, algorithms,
                      and modern web development technologies.
                    </p>
                    <div>
                      <span className="text-sm font-medium">
                        Relevant Coursework:
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">
                        Data Structures, Algorithms, Database Systems, Web
                        Development, Operating Systems
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Projects Section */}
            {shouldShowSection("projects") && (
              <Reveal delay={0.4}>
                <div className="glass-card rounded-3xl p-6 md:p-8 border-white/5">
                  <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Award size={18} className="text-primary" />
                    Notable Projects
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "eBuy",
                        description:
                          "A multi-vendor e-commerce marketplace where independent sellers list, manage, and sell products to a shared customer base — featuring vendor dashboards, secure checkout, and real-time order tracking.",
                        tech: [
                          "Python",
                          "Django",
                          "Next.js",
                          "Express",
                          "TypeScript",
                        ],
                      },
                      {
                        title: "WorkN",
                        description:
                          "A collaborative workspace platform for teams to manage projects, track tasks, and communicate in real time — designed to streamline remote and hybrid workflows.",
                        tech: ["Python", "Django", "Next.js", "TypeScript"],
                      },
                      {
                        title: "SubSync",
                        description:
                          "A subscription management dashboard that helps users track, organize, and control all their recurring services in one place — with renewal reminders, spending insights, and one-click cancellation.",
                        tech: ["Express", "Next.js", "TypeScript"],
                      },
                    ].map((project, index) => (
                      <div
                        key={project.title}
                        className="group p-4 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
                      >
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:border-primary/50 transition-all font-medium"
                    >
                      View All Projects
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ResumePage;
