'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('An error occurred.');
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-16 border-t border-slate-800">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100">Let's Talk</h2>
          <p className="text-slate-400 leading-relaxed">
            I am currently open for Full-Stack / Backend Engineering opportunities, freelance projects, and technical collaborations.
          </p>

          <div className="space-y-4 text-slate-300">
            <div>
              <span className="block text-xs text-slate-500 font-semibold uppercase">Email</span>
              <a href="mailto:wazeemaamir145@gmail.com" className="text-blue-400 hover:underline">
                wazeemaamir145@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-xs text-slate-500 font-semibold uppercase">Social Profiles</span>
              <div className="flex gap-4 mt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                  GitHub ↗
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-300">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
          >
            Send Message
          </button>

          {status && <p className="text-sm text-center text-blue-400 mt-2">{status}</p>}
        </form>

      </div>
    </section>
  );
}