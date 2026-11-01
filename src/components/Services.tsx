import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "Bespoke Couture",
      desc: "Custom-designed outfits created according to your style and occasion."
    },
    {
      title: "Bridal Wear",
      desc: "Elegant bridal pieces with refined embroidery and embellishment."
    },
    {
      title: "Formal Wear",
      desc: "Sophisticated designs for weddings, celebrations and special occasions."
    },
    {
      title: "Custom Tailoring",
      desc: "Personalized measurements and styling assistance where available."
    }
  ];

  return (
    <section id="services" className="py-28 px-6 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-2 block">
            Couture Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-950">
            Our Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="p-8 bg-stone-50 border border-stone-200/60">
              <h3 className="text-xl font-serif text-neutral-900 mb-3 font-normal">
                {service.title}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}