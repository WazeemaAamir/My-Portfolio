'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-2 block">
            Client Guidance
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-950">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-stone-200/80 shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center text-sm sm:text-base font-serif text-neutral-900 font-normal"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-neutral-600 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}