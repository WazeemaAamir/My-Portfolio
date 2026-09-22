'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          {/* Stylized WA Code Logo Badge */}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 text-sm tracking-tighter font-mono">
            &lt;WA/&gt;
          </div>
          <div>
            <span className="text-lg font-bold text-slate-100 block leading-tight">
              Wazeema Aamir
            </span>
            <span className="text-xs text-blue-400 font-medium block">
              Frontend Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center w-full py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}