"use client";

import { ThemeSwitcher } from "@/providers/theme-switcher";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex fixed top-0 w-full items-center z-50 justify-between px-4 py-4 bg-background border-b border-border">
      <Link href="/" className="text-2xl font-bold text-primary">
        Hassan3xl
      </Link>
      <div className="flex text-primary gap-2">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
