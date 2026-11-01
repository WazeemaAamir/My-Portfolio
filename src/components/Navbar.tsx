'use client';

import React, { useState } from 'react';
import { Menu, X, MessageCircle, Search, Heart, User, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface NavbarProps {
  wishlistCount?: number;
  onOpenWishlist?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSelectCategory?: (category: string) => void;
}

export default function Navbar({ 
  wishlistCount = 0, 
  onOpenWishlist, 
  searchQuery = '', 
  onSearchChange,
  onSelectCategory
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleWhatsAppInquiry = (topic?: string) => {
    const text = topic 
      ? `Hello ${SITE_CONFIG.name}, I am inquiring about your ${topic} collection.`
      : `Hello ${SITE_CONFIG.name}, I would like to make an inquiry.`;
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleCategoryClick = (categoryName: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
    
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-all">
      {/* Announcement Bar */}
      <div className="bg-neutral-950 text-amber-200 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase py-1.5 px-4 text-center font-medium border-b border-neutral-900">
        Complimentary Worldwide Shipping Inquiries via WhatsApp &bull; Contact: {SITE_CONFIG.whatsappFormatted}
      </div>
      
      {/* Header Bar */}
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
        
        {/* Mobile Toggle */}
        <div className="flex items-center lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-neutral-900 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex items-center">
          <a href="#hero" className="flex flex-col items-start">
            <span className="text-base md:text-lg font-serif tracking-[0.22em] uppercase text-neutral-950 font-medium leading-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[7px] uppercase tracking-[0.3em] text-neutral-500 font-light leading-none">
              Haute Couture &bull; Pakistan
            </span>
          </a>
        </div>

        {/* Clickable Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-[10px] font-medium tracking-[0.18em] uppercase text-neutral-800">
          <button 
            onClick={() => handleCategoryClick('New In')} 
            className="hover:text-amber-800 transition-colors py-1 uppercase"
          >
            New In
          </button>

          <button 
            onClick={() => handleCategoryClick('Women')} 
            className="hover:text-amber-800 transition-colors py-1 uppercase"
          >
            Women
          </button>

          {/* Clickable Luxury Pret */}
          <button 
            onClick={() => handleCategoryClick('Pret')} 
            className="hover:text-amber-800 transition-colors py-1 uppercase font-semibold text-neutral-950"
          >
            Luxury Pret
          </button>

          {/* Clickable Bridal Couture */}
          <button 
            onClick={() => handleCategoryClick('Bridal')} 
            className="hover:text-amber-800 transition-colors py-1 uppercase font-semibold text-neutral-950"
          >
            Bridal Couture
          </button>

          {/* Clickable Formal Wear */}
          <button 
            onClick={() => handleCategoryClick('Formal')} 
            className="hover:text-amber-800 transition-colors py-1 uppercase font-semibold text-neutral-950"
          >
            Formal Wear
          </button>

          {/* Clickable Bespoke */}
          <button 
            onClick={() => handleCategoryClick('Bespoke')} 
            className="hover:text-amber-800 transition-colors py-1 uppercase font-semibold text-neutral-950"
          >
            Bespoke
          </button>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-3 text-neutral-900">
          <button 
            onClick={() => setSearchBarOpen(!searchBarOpen)} 
            className="p-1 hover:text-amber-800 transition" 
            title="Search Collections"
          >
            <Search className="w-4 h-4" />
          </button>

          {onOpenWishlist && (
            <button
              onClick={onOpenWishlist}
              className="relative p-1 hover:text-amber-800 transition"
              title="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-950 text-stone-100 text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono">
                  {wishlistCount}
                </span>
              )}
            </button>
          )}

          <button 
            onClick={() => handleWhatsAppInquiry()}
            className="p-1 hover:text-emerald-700 transition hidden sm:inline-flex"
            title="Contact Account / WhatsApp"
          >
            <User className="w-4 h-4" />
          </button>

          <button 
            onClick={() => handleWhatsAppInquiry()}
            className="hidden sm:inline-flex items-center gap-1.5 bg-neutral-950 text-stone-100 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] hover:bg-neutral-800 transition-all"
          >
            <MessageCircle className="w-3 h-3 text-emerald-400" />
            <span>Order</span>
          </button>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {searchBarOpen && onSearchChange && (
        <div className="bg-stone-50 border-t border-stone-200 py-2.5 px-6 shadow-inner">
          <div className="max-w-xl mx-auto flex items-center gap-2">
            <Search className="w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search catalog by title, fabric, or color..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full text-xs bg-transparent focus:outline-none font-light text-neutral-900"
              autoFocus
            />
            <button 
              onClick={() => { setSearchBarOpen(false); onSearchChange(''); }}
              className="text-xs text-stone-500 hover:text-neutral-900 uppercase tracking-widest px-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Clickable Mobile Drawer Links */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 text-center shadow-lg">
          <button 
            onClick={() => handleCategoryClick('New In')} 
            className="block w-full text-neutral-900 uppercase tracking-widest text-xs font-medium"
          >
            New In
          </button>
          <button 
            onClick={() => handleCategoryClick('Women')} 
            className="block w-full text-neutral-900 uppercase tracking-widest text-xs font-medium"
          >
            Women
          </button>
          <button 
            onClick={() => handleCategoryClick('Pret')} 
            className="block w-full text-amber-900 uppercase tracking-widest text-xs font-semibold"
          >
            Luxury Pret
          </button>
          <button 
            onClick={() => handleCategoryClick('Bridal')} 
            className="block w-full text-amber-900 uppercase tracking-widest text-xs font-semibold"
          >
            Bridal Couture
          </button>
          <button 
            onClick={() => handleCategoryClick('Formal')} 
            className="block w-full text-amber-900 uppercase tracking-widest text-xs font-semibold"
          >
            Formal Wear
          </button>
          <button 
            onClick={() => handleCategoryClick('Bespoke')} 
            className="block w-full text-amber-900 uppercase tracking-widest text-xs font-semibold"
          >
            Bespoke
          </button>

          <button
            onClick={() => { setIsOpen(false); handleWhatsAppInquiry(); }}
            className="w-full mt-4 bg-neutral-950 text-white py-2.5 text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> Order on WhatsApp
          </button>
        </div>
      )}
    </header>
  );
}