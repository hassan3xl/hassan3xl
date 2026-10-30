import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Hassan Saidu — Systems & Full-Stack Engineer",
  description:
    "Founder of Mercanest. Computer Science graduate based in Abuja, Nigeria. Building backend-heavy web systems with Python/Django, Celery, and clean Next.js frontends.",
  keywords: [
    "Hassan Saidu",
    "hassan3xl",
    "Mercanest",
    "Full Stack Developer",
    "Python",
    "Django",
    "Next.js",
    "Systems Engineer",
  ],
  authors: [{ name: "Hassan Saidu", url: "https://github.com/hassan3xl" }],
  openGraph: {
    title: "Hassan Saidu — Systems & Full-Stack Engineer",
    description:
      "Founder of Mercanest. Computer Science graduate based in Abuja, Nigeria building high-reliability platforms with Python/Django, Celery, and modern React/Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(regs) {
                    for (var r of regs) r.unregister();
                  });
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-zinc-800 selection:text-white">
        <ThemeProvider defaultTheme="dark">
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 md:pt-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
