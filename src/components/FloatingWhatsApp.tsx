'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export default function FloatingWhatsApp() {
  const handleFloatingClick = () => {
    const message = encodeURIComponent(`Hello ${SITE_CONFIG.name}, I would like to make an inquiry.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleFloatingClick}
      className="fixed bottom-6 right-6 z-50 bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center group"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs uppercase tracking-widest pl-0 group-hover:pl-2 font-medium">
        Order on WhatsApp
      </span>
    </button>
  );
}