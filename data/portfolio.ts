export const profile = {
  name: "Mohammed Amaan",
  role: "Second-year BTech student & aspiring software developer",
  // TODO: replace with your preferred professional tagline
  tagline:
    "I build clean, responsive web apps with React, Next.js and modern JavaScript — currently learning full-stack development.",
  // TODO: replace with real contact + social URLs
  email: "hello@mohammedamaan.dev",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resumePath: "/resume.pdf",
  location: "India",
  // Set to a file in /public when ready, e.g. "/avatar.jpg". Leave null to use initials avatar.
  avatar: null as string | null,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java (basics)"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express (learning)", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB (basics)", "PostgreSQL (basics)"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code", "Vercel", "npm", "Figma (basics)"],
  },
];

export type ProjectStatus = "live" | "in-progress" | "code-only";

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  lessons: string[];
  stack: string[];
  status: ProjectStatus;
  repoUrl?: string;
  demoUrl?: string;
  // Path under /public when screenshots are added
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    name: "Personal Portfolio Website",
    shortDescription:
      "Responsive single-page portfolio with dark/light theme, project showcase and contact section.",
    problem:
      "A traditional resume alone makes it hard for recruiters and collaborators to see what a student can actually build.",
    solution:
      "A fast, accessible Next.js site that centralises skills, projects, education and contact links in one professional page.",
    features: [
      "Responsive single-page layout with anchor navigation",
      "Dark/light theme with system preference + persistence",
      "Project cards with detail modal (problem, solution, lessons)",
      "Accessible semantic HTML and keyboard-friendly navigation",
    ],
    lessons: [
      "Tailwind v4 theming with CSS variables and class-based dark mode",
      "Designing for readability: spacing, contrast and restrained motion",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "live",
    // TODO: point at the real repo + deployed URL
    repoUrl: "https://github.com/",
    demoUrl: undefined,
  },
  {
    slug: "student-productivity-dashboard",
    name: "Student Productivity Dashboard",
    shortDescription:
      "Task, timetable and study-goal tracker designed for college routines. UI prototype in progress.",
    problem:
      "Students juggle classes, assignments and self-study across scattered notes and apps.",
    solution:
      "A single dashboard for tasks, weekly timetable and focused study sessions, stored locally for speed and privacy.",
    features: [
      "Task list with priorities and due dates",
      "Weekly class timetable view",
      "Study timer with daily goal tracking (planned)",
      "LocalStorage persistence, no login required",
    ],
    lessons: [
      "Modelling data with TypeScript types before building UI",
      "Keeping state simple and maintainable without a backend",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    status: "in-progress",
    repoUrl: "https://github.com/",
    demoUrl: undefined,
  },
  {
    slug: "ai-notes-assistant",
    name: "AI-Powered Notes Assistant",
    shortDescription:
      "Concept-stage assistant to summarise and quiz from study notes. API key handling and scope TBD.",
    problem:
      "Long lecture notes are hard to revise; students need quick summaries and self-tests.",
    solution:
      "Planned: paste notes, get a concise summary plus generated practice questions. Exploring secure, low-cost LLM options.",
    features: [
      "Notes input with summarisation (planned)",
      "Auto-generated revision questions (planned)",
      "Copy/export summary (planned)",
    ],
    lessons: [
      "Validating the idea first: prompt quality matters more than UI polish",
      "Never exposing API keys in client-side code",
    ],
    stack: ["Next.js", "TypeScript", "REST API (TBD)"],
    status: "in-progress",
    repoUrl: undefined,
    demoUrl: undefined,
  },
];

export const education = {
  degree: "B.Tech",
  // TODO: fill in institution, branch and expected graduation year once verified
  institution: "Your University — update in data/portfolio.ts",
  branch: "Branch — update (e.g. Computer Science)",
  year: "Second year",
  expectedGraduation: "20XX — update",
  notes:
    "Focused on programming fundamentals, web development and data structures. Coursework and details to be verified and updated.",
};

export const achievements: string[] = [
  // TODO: replace with genuine, verifiable items only
  "Building a public portfolio and documenting projects on GitHub.",
  "Learning full-stack development: Next.js, REST APIs and databases.",
  "Open to internships and peer collaborations.",
];
