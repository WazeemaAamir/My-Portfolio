'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  categoryFilter: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'SHOP NOW',
    title: 'LUXURY PRET',
    subtitle: 'Timeless Pakistani Elegance',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=80',
    categoryFilter: 'Pret',
  },
  {
    id: 2,
    eyebrow: 'DISCOVER COUTURE',
    title: 'BRIDAL COUTURE',
    subtitle: 'Heirloom Craftsmanship & Zardozi Artistry',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80',
    categoryFilter: 'Bridal',
  },
  {
    id: 3,
    eyebrow: 'NEW COLLECTION',
    title: 'FORMAL WEAR',
    subtitle: 'Ethereal Organza & Silk Ensembles',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1920&q=80',
    categoryFilter: 'Formal',
  },
  {
    id: 4,
    eyebrow: 'ATELIER EDITION',
    title: 'SHAWLS & DUPATTAS',
    subtitle: 'Hand-Embellished Heritage Drapery',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1920&q=80',
    categoryFilter: 'Bespoke',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const activeSlide = HERO_SLIDES[currentSlide];

  const handleShopNow = (category: string) => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategories = () => {
    const element = document.getElementById('categories') || document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full pt-[105px] bg-neutral-950 overflow-hidden">
      {/* Edge-to-Edge Banner Container (470px to 550px Desktop Height) */}
      <div className="relative w-full h-[470px] sm:h-[500px] md:h-[550px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 bg-neutral-950">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-10000"
              />
              {/* Gradient overlay for bottom-left text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
            </div>

            {/* Bottom-Left Content Placement */}
            <div className="absolute bottom-12 left-6 md:left-16 z-20 max-w-xl text-left">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-amber-200/90 font-semibold mb-2 block">
                {slide.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-stone-100 font-normal tracking-tight mb-2 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xs sm:text-sm text-stone-300 font-light tracking-widest uppercase mb-6">
                {slide.subtitle}
              </p>
              <button
                onClick={() => handleShopNow(slide.categoryFilter)}
                className="inline-flex items-center gap-2 bg-stone-100 text-neutral-950 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-amber-200 transition-colors shadow-lg"
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}

        {/* Manual Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-stone-100/70 hover:text-stone-100 bg-black/20 hover:bg-black/50 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-stone-100/70 hover:text-stone-100 bg-black/20 hover:bg-black/50 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 right-8 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-amber-200' : 'w-2 bg-stone-400/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Circular Scroll Button */}
      <div className="relative z-30 flex justify-center -mt-6 pb-4">
        <button
          onClick={scrollToCategories}
          className="w-12 h-12 bg-white text-neutral-950 rounded-full flex items-center justify-center shadow-xl hover:bg-amber-200 transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to categories"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}