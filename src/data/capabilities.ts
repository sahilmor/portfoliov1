import { CapabilitySpec } from "@/types";

export const capabilitiesData: CapabilitySpec[] = [
  {
    specNumber: "01",
    title: "Full-Cycle Web Application Architecture",
    focusArea: "High-Performance SaaS & Production Web Apps",
    deliverables: [
      "End-to-end architecture from data model to client-side state",
      "Robust TypeScript codebases with zero any assertions",
      "SSR, SSG, and ISR routing strategies for optimal latency",
      "Secure authentication, RBAC, and billing integration",
    ],
    techAlignment: ["Next.js", "React 19", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    specNumber: "02",
    title: "Design Systems & UI Engineering",
    focusArea: "Pixel-Exact Translation & Accessible Primitives",
    deliverables: [
      "Translating complex Figma specifications into semantic code",
      "Strict token architecture for colors, spacing, and typography",
      "Full WCAG 2.1 AA accessibility compliance across all components",
      "Interactive states, keyboard navigation, and focus management",
    ],
    techAlignment: ["Tailwind CSS", "Radix UI Primitives", "CSS Variables", "Figma"],
  },
  {
    specNumber: "03",
    title: "Performance Audits & Core Web Vitals",
    focusArea: "Sub-Second Latency & Bundle Minimization",
    deliverables: [
      "Sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS)",
      "Dynamic code splitting, asset optimization, and critical CSS inlining",
      "Rendering pipeline analysis and eliminating redundant re-renders",
      "Lighthouse 95+ scores across Performance, Accessibility, and SEO",
    ],
    techAlignment: ["Chrome DevTools", "Web Vitals API", "Next.js Analytics", "Webpack / Turbopack"],
  },
  {
    specNumber: "04",
    title: "Real-Time Collaboration & WebSockets",
    focusArea: "Multi-Tenant State Sync & Dynamic Workflows",
    deliverables: [
      "Bidirectional event streams via WebSockets and Socket.IO",
      "Optimistic UI updates with rollback state preservation",
      "Multi-tenant isolation and organization-level data scoping",
      "Resilient reconnect and offline-state handling",
    ],
    techAlignment: ["Socket.IO", "WebSockets", "MongoDB", "Express", "Node.js"],
  },
];
