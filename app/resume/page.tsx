"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
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
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ResumePage = () => {
  const [activeSection, setActiveSection] = useState("all");

  // Resume section navigation
  const resumeSections = [
    { id: "all", label: "All" },
    { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
    { id: "education", label: "Education", icon: <BookOpen size={16} /> },
    { id: "skills", label: "Skills", icon: <Code size={16} /> },
    { id: "projects", label: "Projects", icon: <Award size={16} /> },
  ];

  // Skills data
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

  // Show section based on filter
  const shouldShowSection = (sectionId: any) => {
    return activeSection === "all" || activeSection === sectionId;
  };

  return (
    <div className="">
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-5xl px-6">
          {/* Resume Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Professional Resume
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              <p className="text-secondary max-w-2xl text-lg">
                My qualifications, experience, and skills in software
                development.
              </p>
            </div>
            <div className="flex flex-row gap-3 text-xs sm:text-sm">
              <a
                href="/hassan3xl-resume.pdf"
                download="Hassan_Saidu_Resume.pdf"
                className="flex items-center justify-center px-6 py-3 border text-primary rounded-md font-medium transition-colors gap-2"
              >
                <Download size={18} /> Download PDF
              </a>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center px-6 py-3 bg-transparent border text-primary rounded-md font-medium transition-colors gap-2"
              >
                <FileText size={18} /> Print Resume
              </button>
            </div>
          </div>

          {/* Resume Filter Tabs */}
          <div className="mb-12 overflow-x-auto">
            <div className="inline-flex backdrop-blur-sm btn-primary rounded-lg p-1 min-w-full md:min-w-0">
              {resumeSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-secondary text-primary"
                      : " hover:text-primary hover:bg-primary"
                  }`}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Contact & Skills */}
            <div className="md:col-span-1 space-y-8">
              {/* Contact Information */}
              <div className=" backdrop-blur-sm border border-input rounded-xl p-6">
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Mail size={18} className="mr-2 text-primary" /> Contact
                  Information
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail
                      size={16}
                      className="mr-2 mt-1 text-primary-foreground"
                    />
                    <div>
                      <p className="bg-background text-sm">Email</p>
                      <a
                        href="mailto:saiduhassanhussaine@gmail.com"
                        className="text-primary hover:text-sky-300 transition-colors"
                      >
                        saiduhassanhussaine@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Github
                      size={16}
                      className="mr-2 mt-1 text-primary-foreground"
                    />
                    <div>
                      <p className="text-primary-foreground text-sm">GitHub</p>
                      <a
                        href="https://github.com/hassan3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-sky-300 transition-colors"
                      >
                        github.com/hassan3xl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Linkedin
                      size={16}
                      className="mr-2 mt-1 text-primary-foreground"
                    />
                    <div>
                      <p className="text-primary-foreground text-sm">
                        LinkedIn
                      </p>
                      <a
                        href="https://linkedin.com/in/hassan3xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-sky-300 transition-colors"
                      >
                        linkedin.com/in/hassan3xl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone
                      size={16}
                      className="mr-2 mt-1 text-primary-foreground"
                    />
                    <div>
                      <p className="text-primary-foreground text-sm">Phone</p>
                      <a
                        href="tel:+2349160807885"
                        className="text-primary hover:text-sky-300 transition-colors"
                      >
                        +234 916 080 7885
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Skills Section */}
              {shouldShowSection("skills") && (
                <div className=" backdrop-blur-sm border border-input rounded-xl p-6">
                  <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <Code size={18} className="mr-2 text-primary" /> Technical
                    Skills
                  </h2>
                  <ul className="space-y-4">
                    {skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-primary-foreground text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Education Section - Mobile Only */}
              {shouldShowSection("education") && (
                <div className="md:hidden  backdrop-blur-sm border border-input rounded-xl p-6">
                  <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <BookOpen size={18} className="mr-2 text-primary" />{" "}
                    Education
                  </h2>
                  <div className="relative pl-6 border-l border-slate-700">
                    <div className="mb-4 relative">
                      <div className="absolute -left-9 top-0 h-4 w-4 rounded-full bg-primary"></div>
                      <h3 className="text-lg font-semibold text-primary">
                        Bachelor's Degree in Computer Science
                      </h3>
                      <p className="text-primary-foreground">
                        Modibbo Adam University, Yola
                      </p>
                      <p className="text-primary-foreground text-sm">
                        2022 - Present
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Experience, Education & Projects */}
            <div className="md:col-span-2 space-y-8">
              {/* Experience Section */}
              {shouldShowSection("experience") && (
                <div className=" backdrop-blur-sm border border-input rounded-xl p-6">
                  <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <Briefcase size={18} className="mr-2 text-primary" />{" "}
                    Professional Experience
                  </h2>
                  <div className="space-y-8 relative">
                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-700">
                      <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                      <h3 className="text-lg font-semibold text-primary">
                        Freelance Developer
                      </h3>
                      <p className="text-primary-foreground text-sm mb-2">
                        2023 - Present
                      </p>
                      <p className=" mb-3">
                        Developed custom web applications for clients using
                        Django and React, ensuring performance, scalability, and
                        user satisfaction.
                      </p>
                      <ul className="list-disc  pl-5 space-y-1">
                        <li>
                          Implemented RESTful APIs with Django Rest Framework
                        </li>
                        <li>
                          Created responsive UI components with React and
                          Tailwind CSS
                        </li>
                        <li>Optimized application performance and security</li>
                        <li>
                          Managed client relationships and project delivery
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-700">
                      <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                      <h3 className="text-lg font-semibold text-primary">
                        Intern - Software Development
                      </h3>
                      <p className="text-primary-foreground text-sm mb-2">
                        Summer 2024
                      </p>
                      <p className=" mb-3">
                        Worked on building and optimizing APIs with Django Rest
                        Framework and integrated them with React frontends for
                        user interfaces.
                      </p>
                      <ul className="list-disc  pl-5 space-y-1">
                        <li>
                          Developed API endpoints for data retrieval and
                          manipulation
                        </li>
                        <li>
                          Implemented JWT authentication for secure access
                        </li>
                        <li>
                          Created reusable React components for the frontend
                        </li>
                        <li>Participated in code reviews and team meetings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Education Section - Desktop */}
              {shouldShowSection("education") && (
                <div className="hidden md:block  backdrop-blur-sm border border-input rounded-xl p-6">
                  <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <BookOpen size={18} className="mr-2 text-primary" />{" "}
                    Education
                  </h2>
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-700">
                    <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold text-primary">
                      Bachelor's Degree in Computer Science
                    </h3>
                    <p className="text-primary-foreground">
                      Modibbo Adam University, Yola
                    </p>
                    <p className="text-primary-foreground text-sm mb-2">
                      2022 - Present
                    </p>
                    <p className="">
                      Focusing on software engineering principles, algorithms,
                      and modern web development technologies.
                    </p>
                    <div className="mt-3">
                      <span className="text-sm font-medium text-primary">
                        Relevant Coursework:
                      </span>
                      <p className=" text-sm mt-1">
                        Data Structures, Algorithms, Database Systems, Web
                        Development, Operating Systems
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Projects Section */}
              {shouldShowSection("projects") && (
                <div className=" backdrop-blur-sm border border-input rounded-xl p-6">
                  <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <Award size={18} className="mr-2 text-primary" /> Notable
                    Projects
                  </h2>
                  <div className="space-y-6">
                    <div className="group">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-primary transition-colors">
                        Mining Telegram Bot
                      </h3>
                      <p className=" mb-2">
                        A feature-rich bot for mining projects built with Django
                        and Python, incorporating blockchain integrations and
                        automated user rewards.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Python
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Django
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Telegram API
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Blockchain
                        </span>
                      </div>
                      <a
                        href="#"
                        className="text-primary hover:text-sky-300 transition-colors text-sm flex items-center"
                      >
                        View Project <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>

                    <div className="group">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-primary transition-colors">
                        MercaNest Telegram Marketplace
                      </h3>
                      <p className=" mb-2">
                        A marketplace where buyers and sellers can become
                        merchants, facilitating peer-to-peer transactions
                        through a Telegram interface.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Python
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Django
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          PostgreSQL
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Telegram API
                        </span>
                      </div>
                      <a
                        href="#"
                        className="text-primary hover:text-sky-300 transition-colors text-sm flex items-center"
                      >
                        View Project <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>

                    <div className="group">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-primary transition-colors">
                        Quantum Stack
                      </h3>
                      <p className=" mb-2">
                        A cutting-edge coding solution that brings ideas to
                        life, offering a wide range of services to tackle any
                        software challenge.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          React
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Django
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Tailwind
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          AWS
                        </span>
                      </div>
                      <a
                        href="#"
                        className="text-primary hover:text-sky-300 transition-colors text-sm flex items-center"
                      >
                        View Project <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>

                    <div className="group">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-primary transition-colors">
                        Portfolio Website
                      </h3>
                      <p className=" mb-2">
                        A personal portfolio website showcasing my skills and
                        projects, built with React and Tailwind CSS with a focus
                        on modern UI principles.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          React
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Tailwind CSS
                        </span>
                        <span className="text-xs px-2 py-1 bg-slate-700/70 text-slate-200 rounded-full">
                          Responsive Design
                        </span>
                      </div>
                      <Link
                        href="/projects"
                        className="text-primary hover:text-sky-300 transition-colors text-sm flex items-center"
                      >
                        View Project <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Link
                      href="/projects"
                      className="inline-flex items-center px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-primary rounded-md font-medium transition-colors"
                    >
                      View All Projects{" "}
                      <ExternalLink size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
