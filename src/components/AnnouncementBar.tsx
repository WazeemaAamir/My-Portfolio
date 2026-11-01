'use client';

import React from 'react';
import { SITE_CONFIG } from '../config/site';

export default function AnnouncementBar() {
  return (
    <div className="bg-neutral-950 text-amber-200 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase py-2 px-4 text-center font-medium border-b border-neutral-800">
      Complimentary Worldwide Shipping Inquiries via WhatsApp &bull; Contact: {SITE_CONFIG.whatsappFormatted}
    </div>
  );
}