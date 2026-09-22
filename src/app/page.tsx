'use client';

import { useState } from 'react';
import Image from 'next/image';
import SkillsSection from '@/components/section/skills';
import ProjectsSection from '@/components/section/projects';
import ContactSection from '@/components/section/contact';

export default function HomePage() {
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <section className="container mx-auto px-6 py-20 text-center space-y-6 flex flex-col items-center">
        
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/10 mb-2">
          <Image
            src="/profile.jpg"
            alt="Wazeem Aamir"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold tracking-wide">
          Available for Full-Stack Roles
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          Full-Stack Software Engineer
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Building scalable distributed systems, modern web platforms, and robust RESTful APIs with Next.js, TypeScript, and Node.js.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setShowResume(true)}
            className="px-6 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium rounded-lg transition"
          >
            View Resume
          </button>
          <a
            href="/resume.jpeg"
            download="Resume.jpeg"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {showResume && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Resume Preview</h3>
              <button
                onClick={() => setShowResume(false)}
                className="text-slate-400 hover:text-white text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full h-[70vh] overflow-auto rounded-lg">
              <Image
                src="/resume.jpeg"
                alt="Resume"
                width={1200}
                height={1600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}