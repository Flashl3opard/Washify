// lib/utils.ts

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// `cn` is a common helper to combine Tailwind class names conditionally
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
