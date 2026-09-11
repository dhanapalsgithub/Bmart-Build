import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { company } from '../mock/mock';

// Cement sub-categories data
const cementSubCategories = [
  {
    id: 'opc',
    name: 'Ordinary Portland Cement (OPC)',
    desc: 'High-grade OPC 53 and OPC 43 cement for high-strength structures and RCC works.',
    img: '/warehouse/cement.jpg',
    count: '25 products'
  },
  {
    id: 'ppc',
    name: 'Portland Pozzolana Cement (PPC)',
    desc: 'Durable PPC cement offering long-lasting resistance against chemical attacks.',
    img: '/warehouse/cement1.jpg',
    count: '30 products'
  },
  {
    id: 'white-cement',
    name: 'White Cement',
    desc: 'Premium white cement for decorative works, marble flooring, and wall finishes.',
    img: '/Product/product11.jpg',
    count: '34 products'
  }
];

const CementCategoryPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gray-900 relative overflow-hidden text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <Link to="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-amber-400">Products</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Cement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">Cement</h1>
          <p className="text-gray-400 text-sm">All types of Cement & Concrete Solution products</p>
        </div>
      </section>

      {/* Sub-categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cementSubCategories.map((sub) => (
              <div key={sub.id} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all bg-white flex flex-col justify-between">
                <div>
                  <div className="h-56 overflow-hidden bg-gray-100">
                    <img src={sub.img} alt={sub.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{sub.name}</h3>
                    <p className="text-amber-600 text-xs font-semibold mb-3">{sub.count}</p>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{sub.desc}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <a 
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi BMART, I want a quote for ' + sub.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700 hover:gap-3 transition-all text-sm"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CementCategoryPage;