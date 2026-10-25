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
      id: "portfolio-website",
      title: "Portfolio Website",
      description: "Clean, geometric vector portfolio and modern emblem concepts crafted for business branding.",
      techStack: ["Illustrator", "Photoshop", "Branding"],
      githubUrl: "https://github.com",
      demoUrl: "https://warda-portfolio-three.vercel.app/",
    },
];