import React from 'react';
import { Phone, MapPin, Building2 } from 'lucide-react';
import { branches, company } from '../mock/mock';
import { PageHero } from './Products';

const Branches = () => {
  return (
    <div>
      <PageHero title="Our Branches" crumb="Branches" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase brand-gold mb-3">Across Tamil Nadu</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Find a BMART Near You</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Serving Trichy, Perambalur, Madurai and surrounding districts with dedicated supply and delivery teams.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b) => (
              <div key={b.id} className="rounded-2xl border border-gray-100 p-7 card-hover bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center"><Building2 size={22} className="text-[color:var(--bmart-ink)]" /></div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.tag === 'Head Office' ? 'bg-brand-charcoal text-white' : 'bg-brand-gold/20 text-[color:var(--bmart-gold-dark)]'}`}>{b.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{b.city}</h3>
                <p className="text-gray-600 text-sm flex items-start gap-2 mb-2"><MapPin size={16} className="brand-gold mt-0.5 shrink-0" /> {b.address}</p>
                <a href={`tel:${b.phone.replace(/\s/g,'')}`} className="text-gray-700 text-sm flex items-center gap-2 hover:text-[color:var(--bmart-gold-dark)] font-medium"><Phone size={16} className="brand-gold shrink-0" /> {b.phone}</a>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              title="BMART Trichy Location"
              src="https://www.google.com/maps?q=Tiruchirappalli%2C%20Tamil%20Nadu&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
