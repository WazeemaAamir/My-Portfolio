export interface Project {
  id: string;
  title: string;
  category: 'web' | 'design';
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 'apexbuild',
    title: 'ApexBuild Web Platform',
    category: 'web',
    description:
      'Modern, high-performance web platform built with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://apexbuild-website.vercel.app/',
  },
  {
    id: 'ecommerce-engine',
    title: 'E-Commerce Microservices Engine',
    category: 'web',
    description:
      'High-throughput e-commerce platform built with Next.js App Router, Prisma ORM, Redis caching, and Stripe payment integration.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'web',
    description:
      'Clean and modern portfolio website designed to showcase web development and creative design projects.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Branding'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://warda-portfolio-three.vercel.app/',
  },
  {
    id: 'Maison Lumière',
    title: 'Maison Lumière',
    category: 'web',
    description:
      'Modern, high-performance web platform built with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    demoUrl: 'https://next-js-website-deve-pzb6.bolt.host//',
  },
  {
    id: 'modern-business-logo',
    title: 'Modern Business Logo',
    category: 'design',
    description:
      'Professional minimalist logo concept created for a modern business brand with a clean and memorable visual identity.',
    techStack: ['Logo Design', 'Branding', 'Canva', 'Photopea'],
    demoUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'luxury-brand-logo',
    title: 'Luxury Brand Logo',
    category: 'design',
    description:
      'Elegant logo design focused on premium branding, typography, and a sophisticated visual identity.',
    techStack: ['Logo Design', 'Brand Identity', 'Canva', 'Photoshop'],
    demoUrl:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'minimalist-logo',
    title: 'Minimalist Logo Collection',
    category: 'design',
    description:
      'A collection of clean and versatile minimalist logo concepts designed for different business and personal brands.',
    techStack: ['Logo Design', 'Vector Design', 'Branding', 'Photopea'],
    demoUrl:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'social-media-branding',
    title: 'Social Media Branding',
    category: 'design',
    description:
      'Complete visual branding concepts including logo, social media graphics, and consistent brand elements.',
    techStack: ['Graphic Design', 'Logo Design', 'Canva', 'Social Media Design'],
    demoUrl:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
  },
];