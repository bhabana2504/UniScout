import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
