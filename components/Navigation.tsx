"use client";

import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { CLUB_URL } from "@/lib/links";

export function Navigation() {
  return (
    <nav className="bg-surface dark:bg-on-background full-width top-0 z-50 sticky border-b border-outline-variant dark:border-on-surface-variant transition-colors duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-max-width mx-auto">
        <Logo href="/" />

        <div className="flex items-center gap-4">
          <a
            href={CLUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "bg-club text-on-club rounded-full px-6 py-2.5",
              "font-title-md text-sm md:text-base hover:bg-club-hover transition-colors duration-300",
              "shadow-sm inline-flex items-center justify-center"
            )}
          >
            ORDER
          </a>
        </div>
      </div>
    </nav>
  );
}