export interface Project {
  id: string;
  title: string;
  category: 'web' | 'design'; // Project type identify karne ke liye
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string; // Live website ya Design Image/Gallery link
}

export const projectsData: Project[] = [
  {
    id: 'apexbuild',
    title: 'ApexBuild Web Platform',
    category: 'web',
    description:
      'Modern, high-performance web platform built with Next.js, TypeScript, and Tailwind CSS, deployed seamlessly on Vercel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://apexbuild-website.vercel.app/',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'web',
    description:
      'Clean and modern portfolio website designed to showcase web development and creative design projects.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://warda-portfolio-three.vercel.app/',
  },

// 2. Logo & Branding Projects (Name ke mutabiq Images Attached)
  {
    id: 'modern-business-logo',
    title: 'Modern Business Logo',
    category: 'design',
    description:
      'Professional minimalist logo concept created for a modern business brand with a clean and memorable visual identity.',
    techStack: ['Logo Design', 'Branding', 'Canva', 'Photopea'],
    // Modern Minimal Corporate Logo Branding Preview
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
    // Elegant Premium Gold/Black Luxury Logo Style
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
    // Minimalist Clean Vector Geometry Logos
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
    // Social Media Posts & Brand Mockups
     demoUrl:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
  },
];