import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
}

export const GradientText = ({
  children,
  className,
  from = "from-primary",
  via = "via-purple-500",
  to = "to-pink-600",
  animate = false,
}: GradientTextProps) => {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r font-bold tracking-tight pb-1",
        from,
        via,
        to,
        animate && "animate-gradient-x bg-[length:200%_auto]",
        className,
      )}
    >
      {children}
    </span>
  );
};
