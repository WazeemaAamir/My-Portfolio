'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const handleNewsletterWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello ${SITE_CONFIG.name}, please subscribe me to your VIP private newsletter list for upcoming luxury collections.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleContactWhatsApp = () => {
    const text = encodeURIComponent(`Hello ${SITE_CONFIG.name}, I have a general inquiry.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-neutral-950 text-stone-400 pt-24 pb-12 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Newsletter & VIP List Subscription */}
        <div className="mb-20 text-center max-w-2xl mx-auto border-b border-neutral-900 pb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/80 font-semibold mb-2 block">
            Atelier Newsletter
          </span>
          <h2 className="text-3xl font-serif text-stone-100 mb-4">
            Join Our Private List
          </h2>
          <p className="text-stone-400 text-xs font-light mb-6">
            Receive exclusive previews of new luxury pret and bridal collections directly via WhatsApp.
          </p>
          <form onSubmit={handleNewsletterWhatsApp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="text" 
              placeholder="Enter your mobile or WhatsApp..." 
              required 
              className="bg-neutral-900 border border-neutral-800 text-xs px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-400/50 w-full sm:w-72"
            />
            <button
              type="submit"
              className="bg-emerald-800 text-stone-100 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-emerald-700 transition-all border border-emerald-700/60"
            >
              Subscribe via WhatsApp
            </button>
          </form>
        </div>

        {/* Organized Multi-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 border-b border-neutral-900 text-xs">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-base font-serif text-stone-100 tracking-[0.2em] uppercase mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="font-light leading-relaxed text-stone-400 mb-4">
              &ldquo;Pakistani luxury fashion inspired by heritage, craftsmanship and timeless elegance.&rdquo;
            </p>
            <p className="text-amber-200/70 uppercase tracking-widest font-mono">
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col space-y-2.5 uppercase tracking-[0.2em]">
            <span className="text-stone-200 font-semibold mb-2">Explore</span>
            <a href="#collections" className="hover:text-stone-100 transition-colors">Luxury Pret</a>
            <a href="#collections" className="hover:text-stone-100 transition-colors">Bridal Couture</a>
            <a href="#collections" className="hover:text-stone-100 transition-colors">Formal Wear</a>
            <a href="#collections" className="hover:text-stone-100 transition-colors">Bespoke Atelier</a>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col space-y-2.5 uppercase tracking-[0.2em]">
            <span className="text-stone-200 font-semibold mb-2">Customer Care</span>
            <a href="#contact" onClick={handleContactWhatsApp} className="hover:text-stone-100 transition-colors">Shipping Information</a>
            <a href="#contact" onClick={handleContactWhatsApp} className="hover:text-stone-100 transition-colors">Exchanges &amp; Returns</a>
            <a href="#contact" onClick={handleContactWhatsApp} className="hover:text-stone-100 transition-colors">Privacy Policy</a>
            <a href="#contact" onClick={handleContactWhatsApp} className="hover:text-stone-100 transition-colors">International Inquiries</a>
          </div>

          {/* Socials & Contact */}
          <div>
            <span className="text-stone-200 uppercase tracking-[0.2em] font-semibold mb-3 block">
              Connect
            </span>
            <p className="text-stone-300 font-mono mb-2">
              WhatsApp: <a href={`tel:${SITE_CONFIG.whatsappNumber}`} className="hover:underline">{SITE_CONFIG.whatsappFormatted}</a>
            </p>
            <p className="text-stone-300 font-mono mb-4">
              Instagram:{' '}
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="text-amber-200 hover:underline">
                {SITE_CONFIG.socials.instagramHandle}
              </a>
            </p>
            <div className="flex gap-4 text-stone-400">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-amber-200 transition-colors flex items-center gap-1.5 uppercase tracking-wider text-[11px]" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-amber-200 transition-colors flex items-center gap-1.5 uppercase tracking-wider text-[11px]" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 text-center text-[10px] uppercase tracking-[0.25em] font-light text-neutral-500">
          © 2026 {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}