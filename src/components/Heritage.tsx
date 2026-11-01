import React from 'react';
import { SITE_CONFIG } from '../config/site';

export default function Heritage() {
  return (
    <section id="about" className="py-28 px-6 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Editorial Image */}
        <div className="relative h-[480px] lg:h-[580px] w-full overflow-hidden bg-stone-100">
          <img 
            src="https://images.pexels.com/photos/7745929/pexels-photo-7745929.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800" 
            alt="Noor Ul Lamsa Craftsmanship" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-900 font-semibold mb-3">
            Our Heritage
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-950 mb-6 leading-tight">
            Where Tradition Meets Contemporary Luxury
          </h2>
          <p className="text-stone-700 text-base md:text-lg font-serif italic leading-relaxed mb-6">
            &ldquo;{SITE_CONFIG.name} is a Pakistani fashion brand inspired by the richness of traditional craftsmanship and the elegance of contemporary design. Our collections celebrate refined fabrics, intricate details and timeless silhouettes created for memorable occasions.&rdquo;
          </p>
          <div className="h-0.5 w-16 bg-amber-400/60 mt-2"></div>
        </div>

      </div>
    </section>
  );
}