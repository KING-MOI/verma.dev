export interface Project {
  name: string;
  tagline: string;
  description: string;
  language: string;
  repo: string;
}

export const projects: Project[] = [
  {
    name: "nightowl",
    tagline: "macOS menu bar app",
    description:
      "Lives in the menu bar and dims, warms and schedules your displays after dark.",
    language: "Swift",
    repo: "https://github.com/adityaverma/nightowl",
  },
  {
    name: "envault",
    tagline: "secrets for your shell",
    description:
      "Encrypts .env files at rest and injects them into a single command, so secrets never sit in plain text on disk.",
    language: "Rust",
    repo: "https://github.com/adityaverma/envault",
  },
  {
    name: "branchmaid",
    tagline: "tidy up stale git branches",
    description:
      "Finds merged and abandoned branches, local and remote, and cleans them up after you confirm.",
    language: "TypeScript",
    repo: "https://github.com/adityaverma/branchmaid",
  },
  {
    name: "tokentally",
    tagline: "know what your agents cost",
    description:
      "Reads LLM usage logs and reports tokens and spend per model, per project and per day.",
    language: "Python",
    repo: "https://github.com/adityaverma/tokentally",
  },
];
