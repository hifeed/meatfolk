"use client";

import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const WA_NUMBER = "6285286710316";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20Meatfolk,%20saya%20tertarik%20dengan%20produk%20daging%20Anda`;

export function Navigation() {
  return (
    <nav className="bg-surface dark:bg-on-background full-width top-0 z-50 sticky border-b border-outline-variant dark:border-on-surface-variant transition-colors duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-max-width mx-auto">
        <Logo href="/" />

        <div className="flex items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "bg-primary-container text-on-primary rounded-full px-6 py-2.5",
              "font-title-md text-sm md:text-base hover:bg-primary transition-colors duration-300",
              "shadow-sm inline-flex items-center justify-center"
            )}
          >
            Belanja Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}