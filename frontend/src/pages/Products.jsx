import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { categories, company } from '../mock/mock';

const PageHero = ({ title, crumb }) => (
  <section className="bg-brand-charcoal relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E9A80C 0%, transparent 40%)' }} />
    <div className="relative max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{title}</h1>
      <div className="flex items-center gap-2 text-gray-400 text-sm"><Link to="/" className="hover:text-brand-gold">Home</Link> <span>/</span> <span className="brand-gold">{crumb}</span></div>
    </div>
  </section>
);

const Products = () => {
  const [query, setQuery] = useState('');
  const filtered = categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <PageHero title="Our Products" crumb="Products" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto mb-12 relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search product categories..." className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--bmart-gold)] focus:border-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((c) => (
              <div key={c.id} className="rounded-2xl overflow-hidden border border-gray-100 card-hover bg-white">
                <div className="h-56 overflow-hidden"><img src={c.img} alt={c.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{c.name}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{c.desc}</p>
                  <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi BMART, I want a quote for ' + c.name)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold brand-gold hover:gap-3 transition-all">Enquire Now <ArrowRight size={16} /></a>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-gray-500 py-10">No categories match your search.</p>}
        </div>
      </section>
      <section className="bg-brand-gold">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-[color:var(--bmart-ink)] mb-3">Can't find what you need?</h3>
          <p className="text-[color:var(--bmart-ink)]/80 mb-6">We stock 15,000+ products. Tell us your requirement and we'll source it.</p>
          <Link to="/contact" className="inline-block bg-brand-charcoal text-white font-bold px-8 py-4 rounded-md hover:bg-black transition-colors">Contact Our Team</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
export { PageHero };
