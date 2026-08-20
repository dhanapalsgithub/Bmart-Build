import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye } from 'lucide-react';
import { warehouseImage, bestPractices, stats } from '../mock/mock';
import { PageHero } from './Products';

const About = () => {
  return (
    <div>
      <PageHero title="About BMART" crumb="About" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={warehouseImage} alt="BMART" className="rounded-2xl shadow-xl w-full h-[420px] object-cover" />
          <div>
            <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase brand-gold mb-3">Our Story</span>
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
                  <CheckCircle2 size={18} className="brand-gold shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black brand-gold mb-1">{s.value}</div>
              <div className="text-gray-300 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[{ icon: Target, t: 'Premium Mission', d: 'To be South India’s most reliable single source for quality building materials, delivered on time at fair prices.' }, 
            { icon: Eye, t: 'Premium Vision', d: 'To become one of the most trusted and preferred building materials brands, delivering quality, innovation, and value to every construction project we serve.' }
          ].map((v) => (
            <div key={v.t} className="bg-white rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center mb-5">
                <v.icon size={26} className="text-[color:var(--bmart-ink)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{v.t}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Updated Background Image Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="http://googleusercontent.com/image_collection/image_retrieval/10624322521642648415" 
            alt="construction team" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[rgba(20,20,22,0.8)]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Let's Build Something Great Together</h2>
          <p className="text-gray-300 mb-8">Reach out for project quotations, wholesale pricing, and bulk-order rates.</p>
          <Link to="/contact" className="inline-block bg-brand-gold text-[color:var(--bmart-ink)] font-bold px-8 py-4 rounded-md hover:bg-[color:var(--bmart-gold-dark)] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;