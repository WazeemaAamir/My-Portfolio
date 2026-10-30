export interface Skill {
  name: string;
  category: string;
  level: number;
}

export const skillsData: Skill[] = [
  // Web Development
  { name: 'HTML', category: 'Web Development', level: 90 },
  { name: 'CSS', category: 'Web Development', level: 85 },
  { name: 'JavaScript', category: 'Programming', level: 80 },
  { name: 'TypeScript', category: 'Programming', level: 75 },
  { name: 'React.js', category: 'Frontend', level: 85 },
  { name: 'Next.js', category: 'Frontend', level: 80 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 85 },
  { name: 'Node.js / Express', category: 'Backend', level: 88 },
  { name: 'REST & GraphQL APIs', category: 'Backend', level: 85 },
  { name: 'PostgreSQL / Prisma', category: 'Database', level: 82 },
  { name: 'MongoDB', category: 'Database', level: 80 },
  { name: 'Docker / CI/CD', category: 'DevOps', level: 75 },

  // Graphic Design
  { name: 'Logo Design', category: 'Graphic Design', level: 90 },
  { name: 'Brand Identity', category: 'Graphic Design', level: 85 },
  { name: 'Canva', category: 'Graphic Design', level: 95 },
  { name: 'Photopea', category: 'Graphic Design', level: 85 },
  { name: 'Photoshop', category: 'Graphic Design', level: 75 },
  { name: 'Business Card Design', category: 'Graphic Design', level: 90 },
  { name: 'Social Media Design', category: 'Graphic Design', level: 90 },
  { name: 'Poster & Banner Design', category: 'Graphic Design', level: 90 },
  { name: 'Wedding & Event Design', category: 'Graphic Design', level: 85 },
];