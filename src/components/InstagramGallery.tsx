import React from 'react';
import { SITE_CONFIG } from '../config/site';

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramGallery() {
  const brandLookbook = [
    {
      img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
      caption: "Raw silk hand-embellished couture details."
    },
    {
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
      caption: "Royal velvet zardozi bridal artistry."
    },
    {
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
      caption: "Ethereal organza formals for modern celebrations."
    },
    {
      img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
      caption: "Bespoke heritage silhouette craftsmanship."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-900 font-semibold mb-2 block">
          Editorial Journal
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-950 mb-3">
          Follow Our Journey
        </h2>
        <p className="text-xs text-stone-600 font-light mb-6">
          Explore behind-the-scenes atelier craftsmanship, fabric details, and latest lookbooks on{' '}
          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-neutral-950 underline hover:text-amber-800 transition"
          >
            {SITE_CONFIG.socials.instagramHandle}
          </a>
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neutral-950 text-stone-100 px-7 py-3 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-neutral-800 transition shadow-sm border border-neutral-900"
          >
            <InstagramIcon className="w-4 h-4 text-amber-200" />
            <span>Follow {SITE_CONFIG.socials.instagramHandle}</span>
          </a>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brandLookbook.map((item, idx) => (
            <a
              key={idx}
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-64 md:h-80 overflow-hidden bg-stone-100 group block"
            >
              <img
                src={item.img}
                alt={`Noor Ul Lamsa Instagram Lookbook ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-stone-100 text-center">
                <InstagramIcon className="w-6 h-6 mb-2 text-amber-200" />
                <span className="text-[10px] font-light tracking-widest uppercase mb-2">
                  {SITE_CONFIG.socials.instagramHandle}
                </span>
                <p className="text-xs font-serif italic text-stone-200 line-clamp-2">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}