import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: props) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      {children}
    </section>
  );
}
//Create a section with default vertical spacing ,but allow developers to override or extexd the styling
