import React from 'react';
import { Globe } from 'lucide-react';

export default function InternationalShipping() {
  return (
    <section className="py-20 px-6 bg-neutral-950 text-stone-100 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <Globe className="w-8 h-8 mx-auto text-amber-200/80 mb-4" />
        <h2 className="text-2xl md:text-3xl font-serif mb-4 tracking-tight">
          From Pakistan to the World
        </h2>
        <p className="text-stone-300 text-sm font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Discover Noor Ul Lamsa from wherever you are. For international orders and delivery details, contact us directly on WhatsApp.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap text-xs font-semibold tracking-[0.25em] uppercase text-amber-200/90">
          <span>Pakistan</span>
          <span>&bull;</span>
          <span>UK</span>
          <span>&bull;</span>
          <span>USA</span>
          <span>&bull;</span>
          <span>UAE</span>
          <span>&bull;</span>
          <span>Canada</span>
        </div>
      </div>
    </section>
  );
}