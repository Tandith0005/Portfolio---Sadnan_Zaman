export const projects = [
  {
    id: "planora",
    title: "Planora",
    image: "/project1.png",
    description:
      "A full-stack event management platform with authentication, RBAC, and payment system.",
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
    features: [
      "JWT Authentication (Access + Refresh)",
      "Role-Based Access Control",
      "Stripe Payment Integration",
      "Event & Participant Management",
    ],
    challenges: [
      "Designing a scalable RBAC system for multi-tier user authorization.",
      "Handling JWT refresh token rotation without logging users out.",
      "Testing concurrent payment webhooks perfectly on a local environment.",
    ],
    improvements: [
      "Implement real-time notifications for event updates using WebSockets.",
      "Add a robust Redis caching layer to optimize frequent database queries.",
    ],
    github: "https://github.com/Tandith0005/Planora",
    live: "https://level-2-assignment-5-637q.onrender.com",
  },
  {
    id: "medistore",
    title: "MediStore",
    image: "/project2.png",
    description:
      "An e-commerce platform for managing and purchasing medical products.",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    features: ["User Authentication", "Product Management", "Cart System"],
    challenges: [
      "Managing complex shopping cart state synchronization across devices.",
      "Creating performant SQL queries for multi-parameter product filtering.",
    ],
    improvements: [
      "Integrate an automated prescription verification flow.",
      "Improve UI loading states and component accessibility.",
    ],
    github: "https://github.com/Tandith0005/MediStore",
    live: "https://level-2-assignment-4-blue.vercel.app",
  },
  {
    id: "antique-weapons",
    title: "Antique Weapons",
    image: "/project3.png",
    description:
      "A full-stack marketplace for buying, selling, and exchanging rare antique firearms, featuring a unique western-style bounty system.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "MongoDB"],
    features: [
      "User authentication with Firebase",
      "Buy, sell, and exchange antique weapons",
      "Wanted/Bounty job board with western-themed concept",
      "Fully responsive modern unique UI with smooth animations",
    ],
    challenges: [
      "Developing a responsive custom bounty board layout without heavy UI libraries.",
      "Writing efficient aggregation pipelines in MongoDB for complex marketplace searches.",
    ],
    improvements: [
      "Add live bid and auction functionality for extremely rare items.",
      "Migrate to Next.js for better SEO performance and server-side rendering.",
    ],
    github: "https://github.com/Tandith0005/ANTIQUE_WEAPONS",
    live: "https://antique-weapons-client.vercel.app",
  },
];
