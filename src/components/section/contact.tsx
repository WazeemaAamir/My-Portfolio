
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

const result = await res.json();

if (res.ok) {
  setStatus('Message sent successfully!');
  form.reset();
} else {
  console.error('API Error:', result);

  if (result.errors?.length > 0) {
    setStatus(result.errors[0].message);
  } else {
    setStatus(result.message || 'Failed to send message.');
  }
}
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('Unable to send message. Please try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-16 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100">
            Let's Work Together
          </h2>

          <p className="text-slate-400 leading-relaxed">
            I’m available for graphic design projects, logo design,
            website development, freelance projects, and creative
            collaborations.
          </p>

          <div className="space-y-5 text-slate-300">

            {/* Email */}
            <div>
              <span className="block text-xs text-slate-500 font-semibold uppercase mb-1">
                Email
              </span>

              <a
                href="mailto:wazeemaamir145@gmail.com"
                className="text-blue-400 hover:underline"
              >
                wazeemaamir145@gmail.com
              </a>
            </div>

            {/* Social Profiles */}
            <div>
              <span className="block text-xs text-slate-500 font-semibold uppercase">
                Social Profiles
              </span>

              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/WazeemaAamir"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/wazeema-amir/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <span className="block text-xs text-slate-500 font-semibold uppercase mb-2">
                Services
              </span>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-full text-slate-400">
                  Logo Design
                </span>

                <span className="px-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-full text-slate-400">
                  Graphic Design
                </span>

                <span className="px-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-full text-slate-400">
                  Website Design
                </span>

                <span className="px-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-full text-slate-400">
                  Web Development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-800"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-slate-300"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-slate-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 text-slate-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status */}
          {status && (
            <p
              className={`text-sm text-center mt-2 ${
                status.includes('successfully')
                  ? 'text-green-400'
                  : status === 'Sending...'
                  ? 'text-blue-400'
                  : 'text-red-400'
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
