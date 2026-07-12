import { Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-on-background border-t border-outline-variant full-width">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-gutter px-margin-mobile md:px-margin-desktop py-10 md:py-12 max-w-max-width mx-auto">
        <div className="col-span-1">
          <Logo className="mb-4" />
          <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant">
            © 2026 Meatfolk. Crafted by Farmers.
          </p>
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-6 md:gap-x-8 gap-y-4 md:justify-end items-start">
          <a
            href="https://instagram.com/meatfolk.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary rounded flex items-center gap-1"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}