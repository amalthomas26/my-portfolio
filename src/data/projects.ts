export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  pinned?: boolean;
  highlights?: string[];
  tagline?: string;
};

export const projects: Project[] = [
  {
    id: "blinkchat",
    title: "BlinkChat",
    tagline: "Production-grade real-time chat & WebRTC video calling platform",
    description:
      "Full-stack real-time chat application with WebRTC video/audio calling, self-hosted Coturn STUN/TURN on AWS EC2, typed Socket.IO v4 layer, JWT + Google OAuth + 2FA auth, and 3-container Docker Compose deployment behind Cloudflare CDN with GitHub Actions CI/CD.",
    highlights: [
      "WebRTC video/audio calling with 9-state FSM & adaptive resolution ladder (1080p → 720p → audio fallback)",
      "Self-hosted Coturn STUN/TURN on AWS EC2 with HMAC-SHA1 short-lived credential generation",
      "15-second mid-call reconnect recovery via RTCStats quality monitoring",
      "Typed Socket.IO v4 layer with JWT middleware, connection state recovery (2-min window) & presence tracking",
      "JWT + Google OAuth + 2FA + OTP email flow with per-route rate limiting (Helmet, express-rate-limit)",
      "Rich messaging: reactions, replies, forwarding, audio recording, group management & cursor-based search",
      "3-container Docker Compose (multi-stage frontend, backend, edge Nginx) behind Cloudflare CDN on AWS EC2",
    ],
    tech: ["React", "TypeScript", "Socket.IO", "WebRTC", "Node.js", "Express", "MongoDB", "Docker", "AWS EC2", "Nginx", "JWT"],
    github: "https://github.com/amalthomas26/blink-chat",
    live: "https://blink-chat.app",
    pinned: true,
  },
  {
    id: "traveller-api",
    title: "Traveller API",
    description:
      "Scalable REST API with jwt authentication, RBAC, rate limiting, TypeScript, custom logging and error handling, containerised with Docker.",
    tech: ["Node.js", "Express", "jwt", "typescript", "mongodb", "Docker"],
    github: "https://github.com/amalthomas26/traveller-api",
  },
  {
    id: "primepicks",
    title: "PrimePicks",
    description: "E-commerce frontend built with React + Vite, deployed on AWS Elastic Beanstalk.",
    tech: ["React", "vite", "aws elastic beanstalk"],
    github: "https://github.com/amalthomas26/ecommerce-primePicks-react",
  },
  {
    id: "ums-graphql",
    title: "UMS GraphQL API",
    description:
      "User management system with GraphQL API using Apollo Server, JWT auth, RBAC, and basic pagination.",
    tech: ["GraphQL", "Apollo Server", "typescript", "mongodb", "jwt"],
    github: "https://github.com/amalthomas26/ums-api",
  },
];

//designed the data model for growth, not the current ui