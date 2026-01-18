import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { ContactMe } from "@/components/contact/ContactMe";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
    </div>
  );
}
