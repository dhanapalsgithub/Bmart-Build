import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Truck, Headphones } from 'lucide-react';
import { categories, company } from '../mock/mock';

const PageHero = ({ title, crumb }) => (
  <section className="bg-gray-900 relative overflow-hidden text-white">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E9A80C 0%, transparent 40%)' }} />
    <div className="relative max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-black mb-3">{title}</h1>
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Link to="/" className="hover:text-amber-400">Home</Link> 
        <span>/</span> 
        <span className="text-amber-400 font-medium">{crumb}</span>
      </div>
    </div>
  </section>
);

const Products = () => {
  const [query, setQuery] = useState('');
  
  const filtered = categories.filter((c) => 
    c.name.toLowerCase().includes(query.toLowerCase()) || 
    c.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero title="Shop Building Materials" crumb="Shop" />
      
      {/* Trust Badges Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="text-amber-500 w-8 h-8" />
            <div className="text-left">
              <h4 className="font-bold text-gray-900">100% Verified Products</h4>
              <p className="text-xs text-gray-500">Quality assured construction materials</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Truck className="text-amber-500 w-8 h-8" />
            <div className="text-left">
              <h4 className="font-bold text-gray-900">Coordinated Site Delivery</h4>
              <p className="text-xs text-gray-500">Fast transport to your project location</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Headphones className="text-amber-500 w-8 h-8" />
            <div className="text-left">
              <h4 className="font-bold text-gray-900">Bulk & Project Quotes</h4>
              <p className="text-xs text-gray-500">Wholesale pricing for contractors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Shop Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Explore Categories</h2>
            <p className="text-gray-600">Find everything you need for construction, from foundation to finishing.</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12 relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              placeholder="Search cement, steel, blocks, tiles..." 
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
            />
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((c) => (
              <div key={c.id} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all bg-white flex flex-col justify-between">
                {/* Clickable Card wrapping Image and Content to go to Sub-category */}
                <Link to={`/products/${c.id}`} className="block group">
                  <div className="h-52 w-full bg-white flex items-center justify-center p-4 overflow-hidden">
                    <img 
                      src={c.img} 
                      alt={c.name} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{c.name}</h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{c.desc}</p>
                  </div>
                </Link>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gray-100 pt-4">
                  <a 
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi BMART, I want a quote for ' + c.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700 hover:gap-3 transition-all text-sm"
                  >
                    Request Quote <ArrowRight size={16} />
                  </a>
                  <Link to="/contact" className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-3 py-1.5 rounded-lg transition-colors">
                    Bulk Order
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-10">No categories match your search.</p>
          )}
        </div>
      </section>

      {/* Bulk Quote Banner */}
      <section className="bg-amber-400">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Looking for Custom Project Quotations?</h3>
          <p className="text-gray-900 font-medium mb-6">We supply 15,000+ construction materials with transparent pricing and reliable site delivery.</p>
          <Link to="/contact" className="inline-block bg-gray-900 text-white font-bold px-8 py-4 rounded-md hover:bg-black transition-colors shadow-md">
            Request Bulk Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
export { PageHero };