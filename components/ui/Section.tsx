import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({
  children,
  id,
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
