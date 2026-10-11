"use client";

import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © 2026 {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p>
          <a
            href="#home"
            className="rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
