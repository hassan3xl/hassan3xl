import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  animate?: boolean;
}

export const GradientText = ({
  children,
  className,
  from = "from-foreground",
  to = "to-muted-foreground",
}: GradientTextProps) => {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r inline-block font-semibold tracking-tight",
        from,
        to,
        className,
      )}
    >
      {children}
    </span>
  );
};
