'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowDown, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  images: string[];
  description: string;
  tag?: string;
  isBestSeller?: boolean;
}

export default function BestSellers() {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBestSellers() {
      try {
        const res = await fetch('/api/products');
        const data: Product[] = await res.json();
        // Strictly cap at 3 products to avoid clutter & repetition
        setBestSellers(data.filter(p => p.isBestSeller).slice(0, 3));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadBestSellers();
  }, []);

  const handleWhatsApp = (title: string, price: string) => {
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.name}, I am interested in your featured Best Seller: *${title}* (${price}). Please share ordering details.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center bg-neutral-950 text-amber-200">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-neutral-950 text-stone-100 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-amber-300 font-semibold block mb-2">
              Curated Highlights
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-100">
              Best Sellers
            </h2>
          </div>
          <a
            href="#collections"
            className="mt-4 md:mt-0 text-xs uppercase tracking-[0.2em] text-amber-200/90 hover:text-stone-100 inline-flex items-center gap-2 transition-colors border border-amber-400/30 px-5 py-2.5 bg-neutral-900/60"
          >
            View All Collections <ArrowDown className="w-3.5 h-3.5 text-amber-300" />
          </a>
        </div>

        {/* Displaying EXACTLY 3 featured product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 group hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-96 overflow-hidden bg-neutral-950">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-amber-400 text-neutral-950 text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 shadow-md">
                  Best Seller
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 block mb-1">
                    {item.category} Couture
                  </span>
                  <h3 className="text-lg font-serif text-stone-100 mb-2 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-amber-200 mb-4 font-mono">
                    {item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleWhatsApp(item.title, item.price)}
                  className="w-full py-3 bg-stone-100 text-neutral-950 text-[10px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-800" />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}