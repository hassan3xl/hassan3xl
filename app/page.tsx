import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { ContactMe } from "@/components/contact/ContactMe";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}
