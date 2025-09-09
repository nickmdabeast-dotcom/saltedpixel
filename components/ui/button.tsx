"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "lg";
}

export function Button({ className, variant = "default", size = "sm", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white/20 text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
