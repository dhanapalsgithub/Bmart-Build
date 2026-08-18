import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { company, categories } from '../mock/mock';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={company.logo} alt="BMART" className="h-16 w-auto object-contain bg-white rounded-lg p-2 mb-4" />
          <p className="text-sm leading-relaxed text-gray-400">
            BMART is your one-stop construction material supplier serving Trichy, Perambalur, Madurai and all of Tamil Nadu with quality products and reliable delivery.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-[color:var(--bmart-ink)] transition-colors"><Instagram size={18} /></a>
            <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-[color:var(--bmart-ink)] transition-colors"><Facebook size={18} /></a>
            <a href={company.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-[color:var(--bmart-ink)] transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-brand-gold transition-colors">Products</Link></li>
            <li><Link to="/branches" className="hover:text-brand-gold transition-colors">Branches</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-5">Categories</h4>
          <ul className="space-y-3 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}><Link to="/products" className="hover:text-brand-gold transition-colors">{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-5">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3"><MapPin size={18} className="text-brand-gold mt-0.5 shrink-0" /> <span>{company.hq}</span></li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-brand-gold shrink-0" /> <a href={`tel:${company.phone.replace(/\s/g,'')}`} className="hover:text-brand-gold">{company.phone}</a></li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-brand-gold shrink-0" /> <a href={`mailto:${company.email}`} className="hover:text-brand-gold break-all">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <span>&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span>Built by <span className="brand-gold font-semibold">Billing Pro</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
