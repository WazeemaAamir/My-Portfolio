import { skillsData } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-6 py-16 border-t border-slate-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills Matrix</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill) => (
          <div key={skill.name} className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">{skill.name}</span>
              <span className="text-xs px-2 py-1 bg-slate-800 text-blue-400 rounded-md">
                {skill.category}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}