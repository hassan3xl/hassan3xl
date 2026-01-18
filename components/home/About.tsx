"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";

export function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python"];

  return (
    <section id="about" className="py-24 relative">
      <Reveal width="100%">
        <h2 className="text-4xl font-bold mb-16 text-center">
          About <GradientText>Me</GradientText>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal direction="right">
          <div className="glass-card p-10 h-full rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer with expertise in building modern web
              applications. With a keen eye for design and a love for clean
              code, I create digital experiences that are both beautiful and
              functional.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.2}>
          <div className="glass-card p-10 h-full rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full" />
              What I Do
            </h3>

            <div className="space-y-8">
              <div className="group">
                <h4 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  Frontend Development
                </h4>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Creating responsive, interactive user interfaces with React,
                  Next.js, and modern CSS frameworks like Tailwind.
                </p>
              </div>

              <div className="group">
                <h4 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  Backend Development
                </h4>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Building robust APIs and server-side applications with
                  Node.js, Express, and databases.
                </p>
              </div>

              <div className="group">
                <h4 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  UI/UX Design
                </h4>
                <p className="text-muted-foreground/80 leading-relaxed">
                  Designing intuitive interfaces with attention to user
                  experience, accessibility, and visual aesthetics.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
