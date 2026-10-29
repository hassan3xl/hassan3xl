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
      className={cn("relative w-full py-14 md:py-20", className)}
      {...props}
    >
      {children}
    </section>
  );
};
