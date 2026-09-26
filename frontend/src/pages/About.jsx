import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye, ShieldCheck, TrendingUp, Layers, HeartHandshake, ArrowRight } from 'lucide-react';
import { warehouseImage, bestPractices, stats } from '../mock/mock';
import { PageHero } from './Products';

const About = () => {
  const whyBmartItems = [
    {
      icon: ShieldCheck,
      title: 'Quality You Can Trust',
      description: 'We focus on genuine, reliable and quality-assured products for every build.'
    },
    {
      icon: TrendingUp,
      title: 'Value That Makes Sense',
      description: 'Competitive pricing designed to deliver maximum value for your investment.'
    },
    {
      icon: Layers,
      title: 'One Trusted Destination',
      description: 'A wide comprehensive range of materials, making construction procurement seamless.'
    },
    {
      icon: HeartHandshake,
      title: 'Service That Goes Further',
      description: 'Building long-term relationships through responsive support and dependable delivery.'
    }
  ];

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-[#FF7A00] selection:text-white">
      <PageHero title="About BMART" crumb="About" />
      
      {/* Brand Intro / Philosophy - Changed to a sleek left-aligned format with accent border */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#FF7A00] bg-[#FF7A00]/10 px-4 py-2 rounded-full mb-6">
                Building Trust &bull; Delivering Quality &bull; Creating Value
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
                Built Around One Simple Belief
              </h2>
            </div>
            <div className="lg:col-span-7 lg:border-l lg:border-gray-200 lg:pl-12 flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed text-lg sm:text-xl font-normal mb-6">
                Better materials lead to better construction. <strong className="font-bold text-gray-900">BMART</strong> brings quality building and construction materials together under one trusted destination, making the buying experience simpler, smarter, and more reliable.
              </p>
              <p className="text-gray-500 leading-relaxed text-base font-normal">
                From individual homeowners and contractors to builders, architects, and large-scale projects, BMART offers a carefully selected range of products backed by genuine quality, competitive pricing, and professional service.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story / Regional Presence */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
            <img 
              src={warehouseImage} 
              alt="BMART Warehouse" 
              className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          </div>

          <div className="flex flex-col text-left justify-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#FF7A00] mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Building Great Projects, One Step at a Time
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-4 font-normal">
              Based in Hyderabad with a strong presence in Tamil Nadu (Trichy), Kerala, and Karnataka, BMART has grown into a trusted construction material supplier serving contractors, developers, retailers, and homeowners across South India.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-8 font-normal">
              We combine a wide inventory of <span className="font-semibold text-gray-900">15,000+ products</span> with coordinated logistics, competitive wholesale pricing, and dependable support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
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
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why B Mart Section */}
      <section className="py-24 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#FF7A00] mb-3">
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
                  className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00] mb-6 group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                      <IconComp size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-normal">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50/60 rounded-3xl p-8 md:p-12 border border-gray-200/60 shadow-sm hover:border-[#FF7A00]/40 transition-all text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FF7A00] flex items-center justify-center mb-6 text-white shadow-lg shadow-[#FF7A00]/25">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">Our Mission</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
              To be South India’s most reliable single source for quality building materials, delivered on time at fair prices. We help people build with absolute confidence.
            </p>
          </div>

          <div className="bg-gray-50/60 rounded-3xl p-8 md:p-12 border border-gray-200/60 shadow-sm hover:border-[#FF7A00]/40 transition-all text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FF7A00] flex items-center justify-center mb-6 text-white shadow-lg shadow-[#FF7A00]/25">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-4">Our Vision</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
              To become a trusted and preferred building materials brand, making quality construction products accessible to more customers while driving constant innovation and value.
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            Built on Quality. Driven by Trust.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-normal mb-8 max-w-xl mx-auto leading-relaxed">
            Reach out for project quotations, wholesale pricing, and bulk-order rates tailored to your timeline.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-[#FF7A00] text-white font-bold text-base px-9 py-4 rounded-2xl hover:bg-[#e56d00] transition-all duration-200 shadow-xl shadow-[#FF7A00]/25 hover:scale-105"
          >
            <span>Contact Us</span>
            <ArrowRight size= {18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;