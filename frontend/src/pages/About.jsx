import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye, ShieldCheck, TrendingUp, Layers, HeartHandshake } from 'lucide-react';
import { warehouseImage, bestPractices, stats } from '../mock/mock';
import { PageHero } from './Products';

const About = () => {
  const whyBmartItems = [
    {
      icon: ShieldCheck,
      title: 'Quality You Can Trust',
      description: 'We focus on genuine, reliable and quality-assured products.'
    },
    {
      icon: TrendingUp,
      title: 'Value That Makes Sense',
      description: 'Competitive pricing designed to deliver better value for every purchase.'
    },
    {
      icon: Layers,
      title: 'One Trusted Destination',
      description: 'A wide range of building materials, making construction procurement easier.'
    },
    {
      icon: HeartHandshake,
      title: 'Service That Goes Further',
      description: 'We believe great service does not end with a sale. We build long-term relationships through responsive support and dependable delivery.'
    }
  ];

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-[#FF7A00] selection:text-white">
      <PageHero title="About BMART" crumb="About" />
      
      {/* Brand Intro / Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#FF7A00] bg-[#FF7A00]/10 px-3.5 py-1.5 rounded-full mb-4">
            Building Trust &bull; Delivering Quality &bull; Creating Value
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
            Built Around One Simple Belief
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-normal mb-6">
            Better materials lead to better construction. <strong className="font-semibold text-re-900">BMART</strong> is a modern building materials brand bringing quality building and construction materials together under one trusted destination, making the buying experience simpler, smarter, and more reliable for every customer.
          </p>
          <p className="text-gray-500 leading-relaxed text-base max-w-3xl mx-auto">
            From individual homeowners and contractors to builders, architects, and large-scale projects, B MART offers a carefully selected range of construction products backed by genuine quality, competitive pricing, dependable supply, and professional service.
          </p>
        </div>

        {/* Our Story / Regional Presence */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={warehouseImage} 
              alt="BMART Warehouse" 
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
          </div>

          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-2">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-snug">
              Building Great Projects, One Step at a Time
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              Based in Hyderabad with a strong presence in Tamil Nadu (Trichy), Kerala, and Karnataka, BMART has grown into a trusted construction material supplier serving contractors, developers, retailers, and homeowners across South India.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              We combine a wide inventory of <span className="font-semibold text-gray-900">15,000+ products</span> with coordinated logistics, competitive wholesale pricing, and dependable after-sales support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
              {bestPractices.map((b) => (
                <div key={b} className="flex items-center gap-3 text-gray-800 font-semibold text-sm">
                  <CheckCircle2 size={18} className="text-[#FF7A00] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-[#FF7A00] tracking-tight mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                {s.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why B Mart Section */}
      <section className="py-24 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#FF7A00] mb-2">
              Why BMart?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              The Edge We Bring To Your Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyBmartItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00] mb-6">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50/70 rounded-2xl p-8 md:p-10 border border-gray-200/60 shadow-sm hover:border-[#FF7A00]/30 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#FF7A00] flex items-center justify-center mb-6 text-white shadow-md shadow-[#FF7A00]/20">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">Our Mission</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To be South India’s most reliable single source for quality building materials, delivered on time at fair prices. We help people build with confidence.
            </p>
          </div>

          <div className="bg-gray-50/70 rounded-2xl p-8 md:p-10 border border-gray-200/60 shadow-sm hover:border-[#FF7A00]/30 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-[#FF7A00] flex items-center justify-center mb-6 text-white shadow-md shadow-[#FF7A00]/20">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">Our Vision</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To become a trusted and preferred building materials brand, making quality construction materials accessible to more customers and projects while driving innovation and value.
            </p>
          </div>
        </div>
      </section>

      {/* Background Image / Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg" 
            alt="construction team" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Built on Quality. Driven by Trust.
          </h2>
          <p className="text-gray-300 text-lg font-light mb-8 max-w-xl mx-auto">
            Reach out for project quotations, wholesale pricing, and bulk-order rates tailored to your timeline.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-[#FF7A00] text-white font-bold text-base px-9 py-4 rounded-xl hover:bg-[#e56d00] transition-all duration-200 shadow-xl shadow-[#FF7A00]/20 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;