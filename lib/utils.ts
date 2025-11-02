import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Skills data
export const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Django", level: 90 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Remix", level: 70 },
  { name: "Express", level: 75 },
  { name: "Flask", level: 85 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git", level: 80 },
];
