"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Palette } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (theme === "light" || theme === "dark") {
      document.documentElement.className = theme;
    } else if (theme === "blue" || theme === "purple") {
      document.documentElement.className = theme;
    }
  }, [theme]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const themes = [
    { key: "light", name: "Light", icon: <Sun className="mr-2 h-4 w-4" /> },
    { key: "dark", name: "Dark", icon: <Moon className="mr-2 h-4 w-4" /> },
    { key: "blue", name: "Blue", icon: <Palette className="mr-2 h-4 w-4" /> },
    {
      key: "purple",
      name: "Purple",
      icon: <Palette className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" aria-label="Change theme">
          <Palette className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.key}
            onClick={() => setTheme(t.key)}
            className={theme === t.key ? "font-semibold" : ""}
            aria-checked={theme === t.key}
          >
            {t.icon}
            {t.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
