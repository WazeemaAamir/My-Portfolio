import React from 'react';
import { Scissors, Sparkles, Gem, MessageSquare } from 'lucide-react';

export default function Experience() {
  const features = [
    {
      icon: <Scissors className="w-6 h-6 text-neutral-900" />,
      title: "Bespoke Designs",
      description: "Thoughtfully designed pieces with attention to detail."
    },
    {
      icon: <Gem className="w-6 h-6 text-neutral-900" />,
      title: "Premium Fabrics",
      description: "Selected fabrics chosen for comfort, quality and elegance."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-neutral-900" />,
      title: "Artisan Craftsmanship",
      description: "Intricate embroidery and embellishment inspired by Pakistani heritage."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-neutral-900" />,
      title: "Personalized Service",
      description: "Order directly through WhatsApp for assistance with your selection."
    }
  ];

  return (
    <section className="py-24 px-6 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-2 block">
            Exclusivity Guaranteed
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-950">
            The Noor Ul Lamsa Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-stone-50 p-8 border border-stone-200/80 flex flex-col items-start">
              <div className="p-3 bg-white border border-stone-200 mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-neutral-950 mb-2 font-normal">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}