import React from 'react';
import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export default function Policies() {
  return (
    <section className="py-20 px-6 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-900 font-semibold mb-2 block">
            Boutique Guarantees
          </span>
          <h2 className="text-3xl font-serif text-neutral-950">Shipping, Exchange & Privacy Policies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-stone-200/80 text-center shadow-sm">
            <Truck className="w-6 h-6 mx-auto text-neutral-900 mb-4" />
            <h3 className="font-serif text-lg text-neutral-950 mb-2 font-normal">Worldwide Shipping</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">{SITE_CONFIG.policies.shipping}</p>
          </div>

          <div className="p-8 bg-white border border-stone-200/80 text-center shadow-sm">
            <RefreshCw className="w-6 h-6 mx-auto text-neutral-900 mb-4" />
            <h3 className="font-serif text-lg text-neutral-950 mb-2 font-normal">Exchanges & Quality</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">{SITE_CONFIG.policies.exchange}</p>
          </div>

          <div className="p-8 bg-white border border-stone-200/80 text-center shadow-sm">
            <ShieldCheck className="w-6 h-6 mx-auto text-neutral-900 mb-4" />
            <h3 className="font-serif text-lg text-neutral-950 mb-2 font-normal">Client Privacy</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">{SITE_CONFIG.policies.privacy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}