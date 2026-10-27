import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "zenith",
    number: "01",
    title: "Zenith",
    role: "Full-Stack Architect & Lead Frontend",
    techStack: ["Next.js", "Express", "Socket.IO", "MongoDB", "Stripe"],
    year: "2025 - 2026",
    summary:
      "Multi-tenant project-management SaaS built in a Turborepo monorepo. Features real-time collaborative Kanban boards, granular role-based access control, automated billing pipelines, and sub-100ms state synchronization.",
    impactMetric: "Multi-tenant architecture serving active organizations",
    liveUrl: "https://zenithtasks.space",
    githubUrl: "https://github.com/sahilmor/zenith",
    featured: true,
    category: "Web Application",
  },
  {
    id: "test-explorer",
    number: "02",
    title: "Test Explorer",
    role: "Sole Creator & Frontend Lead",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    year: "2025",
    summary:
      "B2B assessment and analytics platform digitizing examination workflows for schools. Features interactive test runners, automated grading engines, and real-time student performance visualization dashboards.",
    impactMetric: "Live in production across 4 schools and 50+ students",
    liveUrl: "https://testexplorer.space",
    githubUrl: "https://github.com/sahilmor/test-explorer",
    featured: true,
    category: "Web Application",
  },
  {
    id: "nomadx",
    number: "03",
    title: "NomadX",
    role: "Frontend Engineer & UI Designer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs"],
    year: "2025",
    summary:
      "AI-assisted itinerary and travel planning web platform. Synthesizes multi-factor flight, lodging, and activity constraints into structured day-by-day itineraries with interactive map waypoints.",
    impactMetric: "Dynamic route calculation with zero-layout-shift UI",
    githubUrl: "https://github.com/sahilmor/NomadX",
    featured: true,
    category: "Creative Frontend",
  },
  {
    id: "prime-tv",
    number: "04",
    title: "Prime.tv",
    role: "Frontend Developer",
    techStack: ["React.js", "REST APIs", "Tailwind CSS"],
    year: "2024",
    summary:
      "High-speed cinematic streaming catalog interface. Engineered with responsive grid viewports, instant debounced search queries, and optimized media playback cards.",
    impactMetric: "Sub-second catalog browsing across thousands of titles",
    liveUrl: "https://prime-tv-two.vercel.app",
    featured: false,
    category: "Performance",
  },
];
