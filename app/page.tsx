import ContactMe from "@/components/contact/ContactMe";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
    title: "FlowStack",
    description:
      "a project management and collaboration app design with django for the backend and next js and typescript for the frontend",
    techStack: [
      { id: 1, label: "DJango", value: "django" },
      { id: 2, label: "Next Js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
      { id: 4, label: "Python", value: "python" },
    ],
  },
  {
    id: 3,
    link: "https://flowstack-gamma.vercel.app/",
    image: "/api/placeholder/600/400",
    title: "FlowStack",
    description:
      "a project management and collaboration app design with django for the backend and next js and typescript for the frontend",
    techStack: [
      { id: 1, label: "DJango", value: "django" },
      { id: 2, label: "Next Js", value: "next-js" },
      { id: 3, label: "TypeScript", value: "typescript" },
      { id: 4, label: "Python", value: "python" },
    ],
  },
];
export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <main className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20">
          <div className="mb-6">
            <div className="w-32 h-32 rounded-full bg-primary border-4 border-primary mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary">
                <Image
                  src="/hassane.jpg"
                  width={250}
                  height={250}
                  alt="Hassan Saidu"
                  className=" rounded-full object-cover"
                />
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Hassan Saidu</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-2">
            Full Stack Developer & Designer
          </p>

          <p className="max-w-2xl text-lg text-foreground/60 mb-8 leading-relaxed">
            I build beautiful, functional web applications with modern
            technologies. Passionate about creating seamless user experiences
            and writing clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-6">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button className="bg-secondary text-primary hover:bg-secondary text-lg px-8 py-6">
              <Link href="/projects">Contact Me</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2  gap-12 items-center">
            <div className="bg-muted p-8 h-full rounded-lg border border-border">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate developer with expertise in building modern web
                applications. With a keen eye for design and a love for clean
                code, I create digital experiences that are both beautiful and
                functional.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium">
                  Python
                </span>
              </div>
            </div>

            <div className="bg-muted p-8 h-full rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                What I Do
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-foreground/70">
                    Creating responsive, interactive user interfaces with React,
                    Next.js, and modern CSS frameworks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Backend Development
                  </h4>
                  <p className="text-foreground/70">
                    Building robust APIs and server-side applications with
                    Node.js, Express, and databases.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">UI/UX Design</h4>
                  <p className="text-foreground/70">
                    Designing intuitive interfaces with attention to user
                    experience and accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <h2 className="text-4xl text-primary font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {FeaturedProject.map((project) => (
              <div
                key={project.id}
                className="bg-muted rounded-lg border border-border overflow-hidden hover:border-primary transition-colors duration-300 group"
              >
                <div className="h-48 bg-primary/20 flex items-center justify-center">
                  <div className="text-6xl">
                    <Image
                      src={project.image}
                      alt="project image"
                      height={10}
                      width={10}
                    ></Image>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((t) => (
                      <span
                        key={t.id}
                        className="text-xs px-2 py-1 bg-secondary text-accent rounded-md"
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full">View Project</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-accent/50 -mx-4 px-4 md:mx-0 md:px-8 md:rounded-lg">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-semibold text-primary mb-2">Frontend</h3>
              <p className="text-sm text-foreground/70">
                React, Next.js, Vue, Tailwind CSS
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-semibold text-primary mb-2">Backend</h3>
              <p className="text-sm text-foreground/70">
                Node.js, Express, Python, REST APIs
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <div className="text-4xl mb-3">💾</div>
              <h3 className="font-semibold text-primary mb-2">Database</h3>
              <p className="text-sm text-foreground/70">
                MongoDB, PostgreSQL, MySQL, Redis
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <div className="text-4xl  mb-3">🛠️</div>
              <h3 className="font-semibold text-primary mb-2">Tools</h3>
              <p className="text-sm text-foreground/70">
                Git, Docker, AWS, CI/CD
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}
