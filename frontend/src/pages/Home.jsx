import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Truck, ShieldCheck, Clock, Sparkles, ChevronDown, MapPin } from 'lucide-react';
import { stats, categories, bestPractices, reviews, faqs, heroVideo, heroPoster, warehouseImage, qualityImage, company } from '../mock/mock';
import QuoteForm from '../components/QuoteForm';

const SectionTitle = ({ eyebrow, title, center, light }) => (
  <div className={`${center ? 'text-center' : ''} mb-12`}>
    {eyebrow && <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase brand-gold mb-3">{eyebrow}</span>}
    <h2 className={`text-3xl md:text-4xl font-extrabold gold-underline ${center ? 'center' : ''} ${light ? 'text-white' : 'text-gray-900'} inline-block`}>{title}</h2>
  </div>
);

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src={heroVideo}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,20,22,0.92)] via-[rgba(20,20,22,0.75)] to-[rgba(20,20,22,0.35)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl animate-fadeup">
            <span className="inline-flex items-center gap-2 bg-brand-gold text-[color:var(--bmart-ink)] font-bold text-sm px-4 py-1.5 rounded-full mb-6"><Sparkles size={15} /> Trusted since {company.since}</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-6">
              The Best Building Materials Supplier in <span className="brand-gold">Tamil Nadu</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              BMART supplies contractors, developers and homeowners across Trichy, Perambalur, Madurai and all major districts — with 15,000+ products and fast, reliable delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="bg-brand-gold text-[color:var(--bmart-ink)] font-bold px-8 py-4 rounded-md hover:bg-[color:var(--bmart-gold-dark)] transition-colors flex items-center gap-2">Request a Quote <ArrowRight size={18} /></a>
              <Link to="/products" className="bg-white/10 backdrop-blur border border-white/30 text-white font-bold px-8 py-4 rounded-md hover:bg-white/20 transition-colors">Explore Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black brand-gold mb-1">{s.value}</div>
              <div className="text-gray-300 text-sm md:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle eyebrow="Who We Are" title="Serving Tamil Nadu with Quality Materials" />
            <p className="text-gray-600 leading-relaxed mb-5">
              BMART is a leading construction material supplier based in Tiruchirappalli (Trichy). We supply contractors, builders, developers, facility teams, retailers and homeowners across Tamil Nadu — with a special focus on Perambalur, Madurai and Trichy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our range includes cement, blocks, electrical supplies, plumbing materials, hardware, sanitary ware, tiles and ceramics, bathroom and kitchen fittings, plywood, timber, hand tools, power tools, paints, waterproofing materials and safety equipment from established brands.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {bestPractices.map((b) => (
                <div key={b} className="flex items-center gap-2 text-gray-800 font-medium"><CheckCircle2 size={18} className="brand-gold shrink-0" /> {b}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={warehouseImage} alt="BMART warehouse" className="rounded-2xl shadow-2xl w-full h-[420px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-[color:var(--bmart-ink)] rounded-xl p-6 shadow-xl hidden sm:block">
              <div className="text-3xl font-black">10+</div>
              <div className="font-semibold text-sm">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="What We Supply" title="Building Materials & Construction Products" center />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <Link to="/products" key={c.id} className="group relative rounded-xl overflow-hidden card-hover bg-white">
                <div className="aspect-square overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,20,22,0.85)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{c.name}</h3>
                  <span className="text-brand-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">View <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="relative py-24">
        <div className="absolute inset-0"><img src={qualityImage} alt="quality" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[rgba(20,20,22,0.85)]" /></div>
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-3 text-center mb-4">
            <SectionTitle eyebrow="Our Promise" title="Committed to Quality Products" center light />
            <p className="text-gray-300 max-w-2xl mx-auto -mt-4">Every item we supply meets high standards of durability, performance and reliability — supporting the success of your projects.</p>
          </div>
          {[{ icon: ShieldCheck, t: 'Quality Assured', d: 'Materials sourced from established, reliable brands.' }, { icon: Truck, t: 'On-Time Delivery', d: 'Coordinated logistics across Tamil Nadu.' }, { icon: Clock, t: 'Fast Quotations', d: 'Quick project and wholesale pricing.' }].map((f) => (
            <div key={f.t} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center card-hover">
              <div className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center mx-auto mb-4"><f.icon size={26} className="text-[color:var(--bmart-ink)]" /></div>
              <h3 className="text-white font-bold text-xl mb-2">{f.t}</h3>
              <p className="text-gray-300 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Testimonials" title="What Our Customers Say" center />
          <div className="flex items-center justify-center gap-2 -mt-6 mb-10">
            {[1,2,3,4,5].map((i) => <Star key={i} size={20} className={i <= 4 ? 'fill-[color:var(--bmart-gold)] text-[color:var(--bmart-gold)]' : 'text-[color:var(--bmart-gold)]'} />)}
            <span className="font-bold text-gray-800 ml-2">4.3/5</span>
            <span className="text-gray-500">from 147+ reviews</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-7 card-hover border border-gray-100">
                <div className="flex gap-1 mb-4">{[1,2,3,4,5].map((i) => <Star key={i} size={16} className="fill-[color:var(--bmart-gold)] text-[color:var(--bmart-gold)]" />)}</div>
                <p className="text-gray-600 leading-relaxed mb-6">“{r.text}”</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-gold flex items-center justify-center font-black text-[color:var(--bmart-ink)]">{r.name.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-gray-900">{r.name}</div>
                    <div className="text-sm text-gray-500">{r.role} • {r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + FAQ */}
      <section id="quote" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle eyebrow="Request a Quote" title="Ready to Build? Let's Work Together" />
            <p className="text-gray-600 mb-8">Send us your requirement and our team will get back with competitive pricing and availability. For faster response, reach us on WhatsApp.</p>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between text-left px-5 py-4 font-semibold text-gray-900">
                    {f.q}
                    <ChevronDown size={20} className={`shrink-0 transition-transform brand-gold ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Get Your Free Quote</h3>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <MapPin size={40} className="text-[color:var(--bmart-ink)]" />
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-[color:var(--bmart-ink)]">One-Stop Shop for All Building Materials</h3>
              <p className="text-[color:var(--bmart-ink)]/80 font-medium">Serving Trichy, Perambalur, Madurai & all of Tamil Nadu.</p>
            </div>
          </div>
          <Link to="/branches" className="bg-brand-charcoal text-white font-bold px-8 py-4 rounded-md hover:bg-black transition-colors whitespace-nowrap">Visit Our Branches</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
