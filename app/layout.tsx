import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-muted/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
