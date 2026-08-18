import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { company } from '../mock/mock';
import { PageHero } from './Products';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  const info = [
    { icon: MapPin, label: 'Head Office', value: company.hq },
    { icon: Phone, label: 'Call Us', value: company.phone, href: `tel:${company.phone.replace(/\s/g,'')}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 8:00 PM' },
  ];
  return (
    <div>
      <PageHero title="Contact Us" crumb="Contact" />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase brand-gold mb-3">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">We'd Love to Hear From You</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Have a question or need a quote? Reach out and our team will respond quickly. For the fastest response, message us on WhatsApp.</p>
            <div className="space-y-5 mb-8">
              {info.map((it) => (
                <div key={it.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center shrink-0"><it.icon size={22} className="text-[color:var(--bmart-ink)]" /></div>
                  <div>
                    <div className="text-sm text-gray-500 font-semibold">{it.label}</div>
                    {it.href ? <a href={it.href} className="text-gray-900 font-bold hover:text-[color:var(--bmart-gold-dark)] break-all">{it.value}</a> : <div className="text-gray-900 font-bold">{it.value}</div>}
                  </div>
                </div>
              ))}
            </div>
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-md hover:bg-[#1eb955] transition-colors mb-8"><MessageCircle size={20} /> Chat on WhatsApp</a>
            <div className="flex gap-3">
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href={company.social.youtube} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Request a Quote</h3>
            <QuoteForm />
          </div>
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe title="BMART Location" src="https://www.google.com/maps?q=Tiruchirappalli%2C%20Tamil%20Nadu&output=embed" className="w-full h-[380px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
