import React from 'react';
import { Truck, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageHero } from './Products';

const Services = () => {
  const services = [
    {
      id: 'material-supply',
      title: 'Material Supply',
      description: 'Complete Building Material Supply with quality-assured building and construction materials under one roof, from foundation to finishing.',
      icon: Truck,
      tag: 'Core Service',
    },
    {
      id: 'bulk-supply',
      title: 'Bulk Supply',
      description: 'Efficient bulk material procurement solutions for contractors, builders, developers, and large-volume project requirements.',
      icon: Building2,
      tag: 'Procurement',
    },
    {
      id: 'site-delivery',
      title: 'Site Delivery',
      description: 'Reliable, safe, and timely delivery of materials directly to your construction site to keep activities moving smoothly.',
      icon: Truck,
      tag: 'Logistics',
    },
    {
      id: 'project-contractor-supply',
      title: 'Project / Contractor Supply',
      description: 'End-to-end material supply support tailored to project schedules, ensuring you source the right products at the right time.',
      icon: Building2,
      tag: 'Contractors',
    },
    {
      id: 'wholesale-retail',
      title: 'Wholesale & Retail',
      description: 'Flexible wholesale and retail purchasing options offering competitive and transparent pricing for individual homes or large-scale builds.',
      icon: Truck,
      tag: 'Flexible Buying',
    },
    {
      id: 'quotation-support',
      title: 'Quotation Support',
      description: 'Detailed professional quotations based on your project requirements, helping you compare options and plan purchases effectively.',
      icon: CheckCircle2,
      tag: 'Planning',
    },
  ];

  return (
    <div>
      <PageHero title="Our Services" crumb="Services" />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-[0.25em] uppercase text-[#FF7A00] mb-3">
              Our Expertise 🚚
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Comprehensive Supply Solutions</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From foundation to finishing, we provide reliable material solutions tailored for residential, commercial, and large-scale projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const IconComponent = s.icon;
              return (
                <div 
                  key={s.id}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00]">
                        <IconComponent size={28} />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.description}</p>
                  </div>
                  <a 
                    href="https://wa.me/919360380276?text=Hi%20Bhart,%20I%20want%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7A00] hover:text-[#e56d00] transition-colors"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;