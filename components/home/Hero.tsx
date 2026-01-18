"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 opacity-30 animate-pulse delay-1000" />

      <div className="mb-8 relative z-10">
        <Reveal>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-pink-600 mx-auto mb-6">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-background relative">
              <Image
                src="/hassane.jpg"
                fill
                alt="Hassan Saidu"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <GradientText animate>Hassan Saidu</GradientText>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Full Stack Developer & Designer
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="max-w-2xl text-lg text-muted-foreground/80 mb-10 leading-relaxed mx-auto">
          I build beautiful, functional web applications with modern
          technologies. Passionate about creating seamless user experiences and
          writing clean, maintainable code.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="#projects">
            <Button size="lg" className="rounded-full px-8 text-lg h-12">
              View My Work <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/resume">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-lg h-12 bg-background/50 backdrop-blur-sm"
            >
              View My Resume
            </Button>
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/hassan3xl"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/hassan3xl"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:contact@hassan3xl.com"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
