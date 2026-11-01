'use client';

import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface ColorShade {
  id: number;
  name: string;
  hex: string;
  imageFileName: string;
}

const COLOR_SHADES: ColorShade[] = [
  { id: 1, name: "Dusty Pink", hex: "#D8A7B1", imageFileName: "dusty-pink.jpg" },
  { id: 2, name: "Light Green", hex: "#A8CD9F", imageFileName: "light-green.jpg" },
  { id: 3, name: "Sage Green", hex: "#87A96B", imageFileName: "sage-green.jpg" },
  { id: 4, name: "Dark Teal", hex: "#1D4E4E", imageFileName: "dark-teal.jpg" },
  { id: 5, name: "Mustard Yellow", hex: "#E1AD01", imageFileName: "mustard-yellow.jpg" },
  { id: 6, name: "Mauve Pink", hex: "#C8A2C8", imageFileName: "mauve-pink.jpg" },
  { id: 7, name: "Navy Blue", hex: "#000080", imageFileName: "navy-blue.jpg" },
  { id: 8, name: "Black", hex: "#1A1A1A", imageFileName: "black.jpg" },
  { id: 9, name: "Lavender Purple", hex: "#967BB6", imageFileName: "lavender-purple.jpg" },
];

export default function ProductGrid() {
  const handleWhatsAppOrder = (shadeName: string) => {
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.name},\n\nI want to order:\n*Western 2 Pcs - Premium Georgette*\nSelected Color Shade: *${shadeName}*\nPrice: Rs. 3500\n\nPlease confirm order and delivery timeline.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="collections" className="py-20 px-6 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-900 font-semibold mb-2 block">
          NOOR UL LAMSA Exclusive Catalog
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-neutral-950 mb-3">
          Western 2 Pcs — Premium Georgette
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm font-light mb-12 max-w-xl mx-auto leading-relaxed">
          Two-tone design with cream center panel, front bows with long ribbons, button details, and long flared skirt.
        </p>

        {/* 9 Clean Color Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {COLOR_SHADES.map((shade) => (
            <div 
              key={shade.id}
              className="bg-white border border-stone-200 p-8 flex flex-col items-center justify-between hover:border-neutral-400 transition-all shadow-sm group"
            >
              {/* Color Swatch Circle */}
              <div 
                className="w-24 h-24 rounded-full border-4 border-stone-100 shadow-inner mb-6 transform group-hover:scale-105 transition-transform" 
                style={{ backgroundColor: shade.hex }}
              />

              <div className="text-center mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-1">
                  Shade #{shade.id}
                </span>
                <h3 className="text-xl font-serif text-neutral-900 font-medium mb-1">
                  {shade.name}
                </h3>
                <p className="text-sm font-semibold text-neutral-950 font-mono">
                  Rs. 3500
                </p>
                <p className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock &bull; Stitched
                </p>
              </div>

              {/* Order Button */}
              <button
                onClick={() => handleWhatsAppOrder(shade.name)}
                className="w-full py-3 bg-neutral-950 text-stone-100 text-[10px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Order {shade.name}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Specs Bar */}
        <div className="bg-neutral-950 text-stone-100 p-8 flex flex-col sm:flex-row justify-between items-center text-left border border-neutral-900">
          <div>
            <h4 className="text-lg font-serif text-amber-200 uppercase tracking-widest">
              {SITE_CONFIG.name}
            </h4>
            <p className="text-xs text-stone-300 font-light mt-1">
              Western 2 Pcs &bull; Premium Georgette &bull; Fixed Price Rs. 3500
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <span className="text-xl font-bold font-mono text-stone-100">
              Rs. 3500
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}