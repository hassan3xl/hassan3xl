"use client";

import { ThemeSwitcher } from "@/providers/theme-switcher";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex fixed top-0 w-full items-center z-50 justify-between px-6 py-4 bg-background shadow-sm">
      <Link href="/" className="text-2xl font-bold text-primary">
        Hassan3xl
      </Link>
      <div className="flex text-primary gap-2">
        <ThemeSwitcher />
        <div className="flex justify-center gap-2 ">
          <Link
            href="/resume"
            className="py-1 px-2 border hover:btn-primary rounded-md"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
