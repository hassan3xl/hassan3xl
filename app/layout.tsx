import type { Metadata } from "next";
// import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Share_Tech_Mono, JetBrains_Mono, Space_Mono } from "next/font/google";
// OCR-A style font - easily swappable by changing this one import
// Other options: Orbitron, VT323, Press_Start_2P, Major_Mono_Display
const primaryFont = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hassan Saidu | Full Stack Developer",
  description:
    "Portfolio of Hassan Saidu - Full Stack Developer & Designer specializing in React, Next.js, and Modern UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={primaryFont.className}>
      <body
        className="antialiased min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary"
        style={
          {
            "--font-primary": "var(--font-primary)",
            "--font-outfit": "var(--font-primary)",
          } as React.CSSProperties
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24 md:pt-28">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
