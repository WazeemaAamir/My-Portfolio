export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 'apexbuild',
    title: 'ApexBuild Web Platform',
    description: 'Modern, high-performance web platform built with Next.js, TypeScript, and Tailwind CSS, deployed seamlessly on Vercel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://apexbuild-website.vercel.app/',
  },
  {
    id: 'ecommerce-engine',
    title: 'E-Commerce Microservices Engine',
    description: 'High-throughput e-commerce platform built with Next.js App Router, Prisma ORM, Redis caching, and Stripe payment integration.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
];