import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { company } from '../mock/mock';
import { PageHero } from './Products';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  // All branch options with Trichy as default
  const branches = [
    {
      id: 'trichy',
      name: 'Trichy Branch',
      label: 'Trichy Branch',
      address: 'Tiruchirappalli, Tamil Nadu',
      mapQuery: 'Tiruchirappalli, Tamil Nadu',
    },
    {
      id: 'kerala-karnataka',
      name: 'Kerala & Karnataka',
      label: 'Kerala & Karnataka Regional Offices',
      address: 'Regional Offices (Kerala & Karnataka)',
      mapQuery: 'Kerala',
    },
    {
      id: 'head-office',
      name: 'Head Office',
      label: 'Hyderabad Head Office',
      address: 'Hyderabad, Telangana',
      mapQuery: 'Hyderabad, Telangana',
    },
  ];

  // Default state is Trichy Branch
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const info = [
    {
      icon: Phone,
      label: 'Call Us',
      value: company.phone,
      href: `tel:${company.phone?.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon – Sat: 9:00 AM – 8:00 PM',
    },
  ];

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const branch = branches.find((b) => b.id === e.target.value);
    if (branch) setSelectedBranch(branch);
  };

  return (
    <div>
      <PageHero title="Contact Us" crumb="Contact" />

      {/* Contact Section */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(179, 172, 172, 0.93), rgba(254, 255, 246, 0.62)), url('https://media.istockphoto.com/id/2148431500/photo/portrait-of-a-smiling-and-happy-young-indian-man-in-a-white-shirt-and-shorts-standing-near-an.jpg?s=1024x1024&w=is&k=20&c=Ukiqw4AvCglS66cbapwWLQ8GReEbTXI1pt5jYA0yoaU=')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase brand-gold mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              We'd Love to Hear From You
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a question or need a quote? Reach out and our team will respond quickly. For the fastest response, message us on WhatsApp.
            </p>

            {/* Other Branches Dropdown */}
            <div className="mb-6">
              <label htmlFor="branch-select" className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                Select Other Branches
              </label>
              <select
                id="branch-select"
                value={selectedBranch.id}
                onChange={handleBranchChange}
                className="w-full md:w-80 px-4 py-2.5 rounded-lg text-sm font-bold bg-white text-gray-900 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold cursor-pointer"
              >
                {branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-5 mb-8">
              {/* Active Branch Display */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-[color:var(--bmart-ink)]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold">
                    {selectedBranch.name}
                  </div>
                  <div className="text-gray-900 font-bold">
                    {selectedBranch.address}
                  </div>
                </div>
              </div>

              {/* Standard Info Details */}
              {info.map((it) => (
                <div key={it.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center shrink-0">
                    <it.icon size={22} className="text-[color:var(--bmart-ink)]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-semibold">{it.label}</div>
                    {it.href ? (
                      <a
                        href={it.href}
                        className="text-gray-900 font-bold hover:text-[color:var(--bmart-gold-dark)] break-all"
                      >
                        {it.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 font-bold">{it.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-md hover:bg-[#1eb955] transition-colors mb-8 shadow-sm"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>

            <div className="flex gap-3">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={company.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Request a Quote</h3>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Map Section Updates Dynamically */}
      <section className="pb-16 bg-white pt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              title={`${selectedBranch.name} Location`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                selectedBranch.mapQuery
              )}&output=embed`}
              className="w-full h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;