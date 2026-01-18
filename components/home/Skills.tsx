"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 -z-10 transform origin-left" />

      <div className="max-w-6xl mx-auto px-4">
        <Reveal width="100%">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Skills & <GradientText>Technologies</GradientText>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: "⚛️",
              title: "Frontend",
              desc: "React, Next.js, Vue, Tailwind CSS",
            },
            {
              icon: "🔧",
              title: "Backend",
              desc: "Node.js, Express, Python, REST APIs",
            },
            {
              icon: "💾",
              title: "Database",
              desc: "MongoDB, PostgreSQL, MySQL, Redis",
            },
            { icon: "🛠️", title: "Tools", desc: "Git, Docker, AWS, CI/CD" },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} direction="up">
              <div className="text-center p-8 glass-card rounded-xl hover:bg-background/80 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-lg text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
