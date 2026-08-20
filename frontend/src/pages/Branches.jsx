import React from 'react';
import { Phone, MapPin, Building2 } from 'lucide-react';
import { PageHero } from './Products';

const Branches = () => {
  // Trichy branch first, and all branches sharing the requested phone numbers
  const branches = [
    {
      id: 'trichy',
      city: 'Tiruchirappalli (Trichy)',
      tag: 'Branch',
      address: 'Main Road, Trichy, Tamil Nadu',
      phone: '7812806567, 71812826567',
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad',
      tag: 'Head Office',
      address: 'Head Office, Hyderabad, Telangana',
      phone: '7812806567, 71812826567',
    },
    {
      id: 'kerala',
      city: 'Kerala',
      tag: 'Regional Office',
      address: 'Regional Hub, Kochi, Kerala',
      phone: '7812806567, 71812826567',
    },
    {
      id: 'karnataka',
      city: 'Karnataka',
      tag: 'Regional Office',
      address: 'Regional Hub, Bengaluru, Karnataka',
      phone: '7812806567, 71812826567',
    },
  ];

  return (
    <div>
      <PageHero title="Our Branches" crumb="Branches" />
      
      {/* Branches Section with Office Background Image and Overlay */}
      <section 
        className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(75, 204, 224, 0.17), hsla(204, 48%, 45%, 0.92)), url('https://images.pexels.com/photos/16323434/pexels-photo-16323434.jpeg')` 
        }}
      >
        {/* Blinking Animation Styles */}
        <style>{`
          @keyframes blink-animation {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.08); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-blink {
            animation: blink-animation 1.5s infinite ease-in-out;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold tracking-[0.2em]  uppercase brand-white mb-3">Across South India</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Find a BMART Near You</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Serving Trichy, Tamil Nadu, Hyderabad, Kerala, Karnataka, and surrounding regions with dedicated supply and delivery teams.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b) => (
              <div 
                key={b.id} 
                className="rounded-2xl border border-gray-100 p-7 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-gold/50"
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Blinking Icon */}
                  <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center animate-blink">
                    <Building2 size={22} className="text-[color:var(--bmart-ink)]" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.tag === 'Head Office' ? 'bg-brand-charcoal text-white' : 'bg-brand-gold/20 text-[color:var(--bmart-gold-dark)]'}`}>
                    {b.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{b.city}</h3>
                <p className="text-gray-600 text-sm flex items-start gap-2 mb-2">
                  <MapPin size={16} className="brand-gold mt-0.5 shrink-0" /> {b.address}
                </p>
                <a href={`tel:${b.phone.replace(/[^0-9+]/g,'')}`} className="text-gray-700 text-sm flex items-center gap-2 hover:text-[color:var(--bmart-gold-dark)] font-medium transition-colors">
                  <Phone size={16} className="brand-gold shrink-0" /> {b.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
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