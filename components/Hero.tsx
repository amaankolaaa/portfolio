"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" aria-labelledby="hero-heading" className="py-16 sm:py-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"
      >
        <div
          aria-hidden
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-2xl font-bold text-accent"
        >
          MA
        </div>
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-medium text-muted">{profile.role}</p>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Hi, I&apos;m {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            {profile.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-semibold transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
