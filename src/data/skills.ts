export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps';
  level: number;
}

export const skillsData: Skill[] = [
  { name: 'Next.js / React', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'Node.js / Express', category: 'Backend', level: 88 },
  { name: 'REST & GraphQL APIs', category: 'Backend', level: 85 },
  { name: 'PostgreSQL / Prisma', category: 'Database', level: 82 },
  { name: 'MongoDB', category: 'Database', level: 80 },
  { name: 'Docker / CI/CD', category: 'DevOps', level: 75 },
];