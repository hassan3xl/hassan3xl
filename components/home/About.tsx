"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { Code2, Palette, Terminal, Cpu } from "lucide-react";

export function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python"];

  return (
    <Section id="about">
      <Reveal width="100%">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            About <GradientText animate>Me</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-zinc-500 rounded-full" />
        </div>
      </Reveal>
      {/* Who I Am - Full Width Card */}
      <Reveal>
        <div className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden group border-primary/10 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Who I Am</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate developer with expertise in building modern web
            applications. With a keen eye for design and a love for clean code,
            I create digital experiences that are both beautiful and functional.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-background/50 text-foreground/90 rounded-full text-sm font-medium border border-white/5 hover:border-primary/30 hover:bg-primary/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Skill Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal delay={0.1}>
          <div className="glass-card p-6 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group h-full">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Terminal className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-foreground">
                  Frontend Development
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Creating responsive, interactive user interfaces with React,
                  Next.js, and modern CSS frameworks like Tailwind.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card p-6 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group h-full">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-2xl bg-zinc-500/10 text-zinc-400 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-foreground">
                  Backend Development
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Building robust APIs and server-side applications with
                  Node.js, Express, and databases.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="glass-card p-6 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group h-full">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-2xl bg-zinc-600/10 text-zinc-300 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-foreground">
                  UI/UX Design
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Designing intuitive interfaces with attention to user
                  experience, accessibility, and visual aesthetics.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
