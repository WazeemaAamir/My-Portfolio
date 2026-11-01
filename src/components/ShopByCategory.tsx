'use client';

import React from 'react';

export default function ShopByCategory() {
  const categories = [
    { name: "Pret", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80" },
    { name: "Bridal", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80" },
    { name: "Formal", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80" },
    { name: "Bespoke", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80" },
    { name: "Shawls & Dupattas", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-900 font-semibold mb-2 block">
            Curated Collections
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-950">
            Shop By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href="#collections"
              className="group relative h-72 md:h-96 overflow-hidden bg-stone-100 block"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs md:text-sm font-serif uppercase tracking-[0.2em] group-hover:text-amber-200 transition-colors">
                  {cat.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}