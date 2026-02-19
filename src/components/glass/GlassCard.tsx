import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/10 backdrop-blur-[16px] border border-white/20 shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
