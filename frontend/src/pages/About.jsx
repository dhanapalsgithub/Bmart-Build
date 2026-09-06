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
    <div>
      <PageHero title="About BMART" crumb="About" />
      
      {/* Brand Intro / Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl mb-16">
          <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#FF7A00] mb-3">Building Trust. Delivering Quality. Creating Value.</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">Built Around One Simple Belief</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Better materials lead to better construction. B MART is a modern building materials brand bringing quality building and construction materials together under one trusted destination, making the buying experience simpler, smarter and more reliable for every customer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From individual homeowners and contractors to builders, architects and large-scale projects, B MART offers a carefully selected range of construction products backed by genuine quality, competitive pricing, dependable supply and professional service.
          </p>
        </div>

        {/* Our Story / Regional Presence */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={warehouseImage} alt="BMART Warehouse" className="rounded-2xl shadow-xl w-full h-[420px] object-cover" />
          <div>
            <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#FF7A00] mb-3">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">Building Great Projects, One Step at a Time</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Based in Hyderabad with a strong presence in Tamil Nadu (Trichy), Kerala, and Karnataka, BMART has grown into a trusted construction material supplier serving contractors, developers, retailers, and homeowners across South India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We combine a wide inventory of 15,000+ products with coordinated logistics, competitive wholesale pricing, and dependable after-sales support.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {bestPractices.map((b) => (
                <div key={b} className="flex items-center gap-2 text-gray-800 font-medium">
                  <CheckCircle2 size={18} className="text-[#FF7A00] shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-charcoal bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#FF7A00] mb-1">{s.value}</div>
              <div className="text-gray-300 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why B Mart Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-[0.25em] uppercase text-[#FF7A00] mb-3">Why B Mart?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">The Edge We Bring To Your Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBmartItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00] mb-5">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-[#FF7A00] flex items-center justify-center mb-5 text-white">
              <Target size={26} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be South India’s most reliable single source for quality building materials, delivered on time at fair prices. We help people build with confidence.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-[#FF7A00] flex items-center justify-center mb-5 text-white">
              <Eye size={26} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become a trusted and preferred building materials brand, making quality construction materials accessible to more customers and projects while driving innovation and value.
            </p>
          </div>
        </div>
      </section>

      {/* Background Image / Call to Action Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg" 
            alt="construction team" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[rgba(20,20,22,0.85)]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Built on Quality. Driven by Trust.</h2>
          <p className="text-gray-300 mb-8">Reach out for project quotations, wholesale pricing, and bulk-order rates.</p>
          <Link to="/contact" className="inline-block bg-[#FF7A00] text-white font-bold px-8 py-4 rounded-md hover:bg-[#e56d00] transition-colors shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;