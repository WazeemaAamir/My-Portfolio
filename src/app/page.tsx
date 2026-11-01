'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ShopByCategory from '../components/ShopByCategory';
import BestSellers from '../components/BestSellers';
import ProductGrid from '../components/ProductGrid';
import Heritage from '../components/Heritage';
import Experience from '../components/Experience';
import Services from '../components/Services';
import InternationalShipping from '../components/InternationalShipping';
import InstagramGallery from '../components/InstagramGallery';
import Policies from '../components/PolicyFaq';
import FaqAccordion from '../components/FaqAccordion';
import Footer from '../components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const handleToggleWishlist = (id: number) => {
    setWishlistIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 antialiased selection:bg-neutral-950 selection:text-amber-200">
      <Navbar 
        wishlistCount={wishlistIds.length} 
        onOpenWishlist={() => setWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <ShopByCategory />
      <BestSellers />
      <ProductGrid      />
      <Heritage />
      <Experience />
      <Services />
      <InternationalShipping />
      <InstagramGallery />
      <Policies />
      <FaqAccordion />
      <Footer />
    </div>
  );
}