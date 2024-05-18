import { cn } from "@ui/lib/utils";
import { ReactNode } from "react";

export function MainContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
}
