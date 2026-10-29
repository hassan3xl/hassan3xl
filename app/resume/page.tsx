"use client";

import React from "react";
import Link from "next/link";
import {
  Download,
  Printer,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  FolderGit2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      {/* Top Navigation & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to overview
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/hassan3xl-resume.pdf"
            download="Hassan_Saidu_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition-opacity shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>

          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            className="text-xs h-8 rounded-lg gap-1.5 border-border/70"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </Button>
        </div>
      </div>

      {/* Resume Document Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Hassan Saidu
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-medium mt-1">
            Full-Stack & Systems Engineer • Founder of Mercanest
          </p>
        </div>

        <p className="text-sm text-foreground/80 leading-relaxed max-w-3xl">
          Systems-focused developer with 4+ years of programming experience,
          specializing in Python/Django backend architectures, Celery background
          queues, and performant React/Next.js interfaces. Final-year Computer
          Science student at Modibbo Adama University with practical experience
          in multi-tenancy, database optimization, and IoT hardware.
        </p>

        {/* Quick Contact Line */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-muted-foreground pt-1">
          <a
            href="mailto:contact@hassansaidu.me"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            contact@hassansaidu.me
          </a>
          <a
            href="https://github.com/hassan3xl"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            github.com/hassan3xl
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-saidu-318a2a229"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            www.linkedin.com/in/hassan-saidu-318a2a229
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Abuja, Nigeria (Remote)
          </span>
        </div>
      </div>

      {/* Experience Section */}
      <section className="space-y-6 pt-4 border-t border-border/60">
        <div className="flex items-center gap-2 text-foreground">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs font-mono text-muted-foreground">
            Experience & Ventures
          </h2>
        </div>

        <div className="space-y-8">
          {/* Mercanest */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-semibold text-base text-foreground">
                Founder & Lead Engineer —{" "}
                <span className="font-normal text-muted-foreground">
                  Mercanest
                </span>
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                Jan 2024 – Present
              </span>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              CAC-Registered IT Business • Abuja, Nigeria
            </p>
            <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-foreground/80 leading-relaxed pt-1">
              <li>
                Architected and deployed a multi-tenant inventory and storefront
                management engine serving retail and multi-merchant businesses.
              </li>
              <li>
                Engineered asynchronous transaction processing, stock alerts,
                and email dispatch using Celery with Redis as the message
                broker.
              </li>
              <li>
                Designed normalized PostgreSQL schemas with compound indexes to
                ensure sub-50ms query latency on high-frequency catalog
                searches.
              </li>
              <li>
                Created modern, responsive web management consoles using Next.js
                (App Router), TypeScript, and Tailwind CSS.
              </li>
            </ul>
          </div>

          {/* Freelance */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-semibold text-base text-foreground">
                Freelance Full-Stack & Systems Developer —{" "}
                <span className="font-normal text-muted-foreground">
                  Self-employed
                </span>
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                2023 – Present
              </span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-foreground/80 leading-relaxed pt-1">
              <li>
                Engineered custom RESTful backends using Django REST Framework
                and FastAPI with role-based JWT authentication and rate
                limiting.
              </li>
              <li>
                Shipped collaborative web tools (WorkN, eBuy) with real-time
                state updates, vendor management flows, and responsive UI.
              </li>
              <li>
                Configured Docker containers, Nginx reverse proxies, and
                automated deployments on Linux cloud servers (Render,
                DigitalOcean).
              </li>
            </ul>
          </div>

          {/* Internship */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-semibold text-base text-foreground">
                Software Development Intern —{" "}
                <span className="font-normal text-muted-foreground">
                  Engineering Team
                </span>
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                Summer 2024
              </span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-foreground/80 leading-relaxed pt-1">
              <li>
                Collaborated on backend API development with Django REST
                Framework, optimizing database ORM lookups and serialization
                overhead.
              </li>
              <li>
                Implemented comprehensive unit tests and automated test suites
                improving overall code coverage and regression prevention.
              </li>
              <li>
                Created reusable React UI components integrated with REST
                endpoints.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6 pt-4 border-t border-border/60">
        <div className="flex items-center gap-2 text-foreground">
          <GraduationCap className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs font-mono text-muted-foreground">
            Education
          </h2>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-semibold text-base text-foreground">
              Bachelor of Science (B.Sc.) in Computer Science
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              2022 – Expected 2026
            </span>
          </div>
          <p className="text-xs font-mono text-muted-foreground">
            Modibbo Adama University (MAU), Yola, Nigeria • Final Year
          </p>
          <div className="pt-1 space-y-1 text-xs sm:text-sm text-foreground/80">
            <p>
              <strong className="text-foreground font-medium">
                Undergraduate Thesis:
              </strong>{" "}
              <em>Multi-Tenant Resource Isolation Framework</em> — Designing
              compute, storage, and quota enforcement mechanisms across shared
              multi-tenant environments.
            </p>
            <p className="text-muted-foreground text-xs">
              Relevant Coursework: Distributed Systems, Database Management
              Systems, Operating Systems, Data Structures & Algorithms, Network
              Security.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Competencies Matrix */}
      <section className="space-y-6 pt-4 border-t border-border/60">
        <div className="flex items-center gap-2 text-foreground">
          <Code2 className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs font-mono text-muted-foreground">
            Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-border/70 bg-card/40 space-y-1.5">
            <p className="font-semibold text-foreground text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Backend & Architecture
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Python, Django, Django REST Framework, Celery, FastAPI,
              PostgreSQL, Redis, RESTful APIs, JWT Authentication, Microservices
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border/70 bg-card/40 space-y-1.5">
            <p className="font-semibold text-foreground text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Frontend & Web
            </p>
            <p className="text-foreground/80 leading-relaxed">
              TypeScript, JavaScript (ES6+), React, Next.js (App Router),
              Tailwind CSS, HTML5/CSS3, Responsive UI, State Management
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border/70 bg-card/40 space-y-1.5">
            <p className="font-semibold text-foreground text-xs font-mono uppercase tracking-wider text-muted-foreground">
              DevOps & Infrastructure
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Docker, Linux / Bash Scripting, Nginx Reverse Proxy, Git & GitHub,
              Render, CI/CD Workflows, Multi-tenant Isolation
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border/70 bg-card/40 space-y-1.5">
            <p className="font-semibold text-foreground text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Hardware & Embedded
            </p>
            <p className="text-foreground/80 leading-relaxed">
              ESP32 Microcontrollers, C / C++, MicroPython, Sensor Telemetry,
              WebSockets, Drone Avionics Exploration
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="space-y-6 pt-4 border-t border-border/60">
        <div className="flex items-center gap-2 text-foreground">
          <FolderGit2 className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs font-mono text-muted-foreground">
            Key Projects & Systems
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Mercanest Platform",
              stack: "Python · Django · Celery · PostgreSQL · Redis · Next.js",
              description:
                "CAC-registered multi-merchant store and inventory platform with asynchronous order fulfillment and ledger accounting.",
            },
            {
              title: "Multi-Tenant Resource Isolation Framework",
              stack: "Python · Linux cgroups · PostgreSQL · Docker",
              description:
                "Undergraduate research thesis exploring deterministic quota allocation and isolation across shared server instances.",
            },
            {
              title: "PowerWatch Smart Energy System",
              stack: "ESP32 · C++ · MicroPython · WebSockets · Python",
              description:
                "IoT telemetry hardware prototype providing real-time electrical parameter sampling and anomaly alerts.",
            },
            {
              title: "WorkN Collaborative Platform",
              stack: "Django · DRF · Next.js · TypeScript · Redis",
              description:
                "Real-time team workspace with synchronous task updates, board organization, and granular permissions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-border/60 bg-card/30 space-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-semibold text-sm text-foreground">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-muted-foreground">
                  {item.stack}
                </span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
