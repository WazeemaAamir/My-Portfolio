'use client';

import React, { useState } from 'react';
import { Ruler, X, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export default function SizeGuideModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCustomMeasurementInquiry = () => {
    const text = encodeURIComponent(`Hello ${SITE_CONFIG.name}, I would like to inquire about Bespoke Custom Measurements for my outfit.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-700 hover:text-amber-800 transition font-medium"
      >
        <Ruler className="w-4 h-4" /> Size & Custom Guide
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white max-w-2xl w-full p-8 border border-stone-300 relative shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-neutral-900 p-2 hover:bg-stone-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-serif text-neutral-950 mb-2">Size & Measurement Chart</h2>
            <p className="text-xs text-stone-600 font-light mb-6">Standard size measurements for Ready to Wear Pret lines (in inches).</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-xs text-stone-800 border-collapse">
                <thead>
                  <tr className="border-b border-stone-300 bg-stone-100 text-neutral-950 uppercase tracking-widest text-[10px]">
                    <th className="p-3">Size</th>
                    <th className="p-3">Chest</th>
                    <th className="p-3">Waist</th>
                    <th className="p-3">Hips</th>
                    <th className="p-3">Shoulder</th>
                  </tr>
                </thead>
                <tbody>
                  {SITE_CONFIG.sizeGuide.pret.map((row, idx) => (
                    <tr key={idx} className="border-b border-stone-200">
                      <td className="p-3 font-semibold">{row.size}</td>
                      <td className="p-3">{row.chest}</td>
                      <td className="p-3">{row.waist}</td>
                      <td className="p-3">{row.hips}</td>
                      <td className="p-3">{row.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 mb-6">
              <h4 className="text-xs font-semibold text-neutral-950 uppercase tracking-wider mb-1">Need Custom Sizing or Bridal Measurements?</h4>
              <p className="text-xs text-stone-600 font-light">We offer complete made-to-measure services for Bridal and Formal wear.</p>
            </div>

            <button
              onClick={handleCustomMeasurementInquiry}
              className="w-full py-3 bg-neutral-950 text-stone-100 text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-emerald-900 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Inquire Custom Measurements
            </button>
          </div>
        </div>
      )}
    </>
  );
}