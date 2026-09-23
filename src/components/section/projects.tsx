import { projectsData } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-6 py-16 border-t border-slate-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Architecture Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative p-6 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between space-y-4 hover:border-blue-500/50 hover:bg-slate-900/80 transition duration-200"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-blue-950/60 text-blue-300 border border-blue-800/60 rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-800 text-sm font-medium z-10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition"
              >
                GitHub Code →
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Live Preview ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}