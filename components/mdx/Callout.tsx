import React from "react";
import { cn } from "@/lib/utils";
import { Info, AlertTriangle, Lightbulb, XCircle } from "lucide-react";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip" | "error";
  className?: string;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  error: XCircle,
};

const styles = {
  info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-900/50 dark:text-blue-200",
  warning: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-200",
  tip: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-200",
  error: "bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-950/30 dark:border-rose-900/50 dark:text-rose-200",
};

export function Callout({ children, type = "info", className }: CalloutProps) {
  const Icon = icons[type];
  
  return (
    <div className={cn("my-6 flex items-start gap-4 rounded-lg border p-4", styles[type], className)}>
      <Icon className="mt-0.5 size-5 shrink-0" />
      <div className="prose-p:m-0">{children}</div>
    </div>
  );
}
