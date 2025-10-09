import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";

export default function ThemePage() {
  return (
    <div className="min-h-screen duration-300">
      <main className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-primary">My Portfolio</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-foreground/80">
            A modern portfolio built with Next.js, TypeScript, Tailwind v4, and
            shadcn/ui. Experience dynamic theming with seamless transitions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary">
              Get Started
            </Button>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary">
              Learn More
            </Button>
          </div>
        </section>

        {/* Theme System Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Theme System Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Available Themes Card */}
            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Available Themes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Light:</strong> Clean and bright default theme
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Dark:</strong> Deep black background for low-light
                    environments
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Blue:</strong> Cool and professional blue tones
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Purple:</strong> Creative and vibrant purple palette
                  </div>
                </li>
              </ul>
            </div>

            {/* Color Palette Card */}
            <div className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Color Palette
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-primary"></div>
                  <div>
                    <div className="font-semibold">Primary</div>
                    <div className="text-sm text-foreground/60">
                      Main accent color
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-secondary"></div>
                  <div>
                    <div className="font-semibold">Secondary</div>
                    <div className="text-sm text-foreground/60">
                      Supporting color
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-accent"></div>
                  <div>
                    <div className="font-semibold">Accent</div>
                    <div className="text-sm text-foreground/60">
                      Hover & highlights
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Interactive Examples
          </h2>

          <div className="bg-muted p-8 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-6">Buttons & Inputs</h3>

            {/* Buttons */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-foreground/80">
                Button Variants
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-primary text-primary-foreground hover:bg-primary">
                  Primary Button
                </Button>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary">
                  Secondary Button
                </Button>
                <Button className="bg-accent text-foreground hover:bg-accent">
                  Accent Button
                </Button>
                <Button className="border border-border bg-background hover:bg-accent">
                  Outline Button
                </Button>
              </div>
            </div>

            {/* Form Inputs */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground/80">
                Form Inputs
              </h4>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Text Input
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-md focus:ring-ring focus:border-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Input
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-md focus:ring-ring focus:border-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Text Area
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    rows={3}
                    className="w-full px-4 py-2 rounded-md focus:ring-ring focus:border-ring"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="bg-accent p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">How to Use Themes</h2>
          <div className="space-y-4 text-foreground/90">
            <p>
              <strong className="text-primary">Step 1:</strong> Click the theme
              selector in the navigation bar (top right corner).
            </p>
            <p>
              <strong className="text-primary">Step 2:</strong> Choose your
              preferred theme from the dropdown menu.
            </p>
            <p>
              <strong className="text-primary">Step 3:</strong> Watch as the
              entire application smoothly transitions to your selected theme.
            </p>
            <p className="pt-4 border-t border-border">
              <strong>Pro Tip:</strong> All themes maintain consistent contrast
              ratios for optimal readability and accessibility. The color system
              automatically adjusts hover states, input focus rings, and borders
              to match your chosen theme.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
