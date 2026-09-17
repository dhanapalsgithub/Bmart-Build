import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Truck, ShieldCheck, Clock, Sparkles, ChevronDown, MapPin, Target, Compass, Users } from 'lucide-react';
import { stats, bestPractices, reviews, faqs, warehouseImage, warehouseImage1, warehouseImage2, warehouseImage3, warehouseImage4, warehouseImage5, warehouseImage6, warehouseImage7, warehouseImage8, warehouseImage9, warehouseImage10, warehouseImage11, warehouseImage12, warehouseImage13, warehouseImage14, warehouseImage15, qualityImage } from '../mock/mock';
import QuoteForm from '../components/QuoteForm';

const SectionTitle = ({ eyebrow, title, center, light }) => (
  <div className={`${center ? 'text-center' : ''} mb-12`}>
    {eyebrow && <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase brand-gold mb-3">{eyebrow}</span>}
    <h2 className={`text-3xl md:text-4xl font-extrabold gold-underline ${center ? 'center' : ''} ${light ? 'text-white' : 'text-gray-900'} inline-block`}>{title}</h2>
  </div>
);

// Local public folder banner slider list (download1 to download8)
const heroSlides = [
  
  '/Slide/download4.svg',
  '/Slide/download6.png',
  '/Slide/download24.png',
  '/Slide/download23.png',
  '/Slide/download22.png',
  '/Slide/download18.png',
  '/Slide/download20.png',
  '/Slide/download2.png',
  '/Slide/download8.png',
  '/Slide/download21.png',
  '/Slide/download12.png',
  '/Slide/download1.png',
  '/Slide/download2.png',
  '/Slide/download3.png',
  '/Slide/download4.svg',
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval (every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Categories Data
  const categories = [
    { id: 1, name: 'Cement', img: warehouseImage },
    { id: 2, name: 'TMT Steels', img: warehouseImage1 },
    { id: 3, name: 'Structural Steels', img: warehouseImage2 },
    { id: 4, name: 'M-Sand / P-Sand', img: warehouseImage3 },
    { id: 5, name: 'Aggregates', img: warehouseImage4 },
    { id: 6, name: 'Bricks & Blocks', img: warehouseImage5 },
    { id: 7, name: 'Tiles', img: warehouseImage6 },
    { id: 8, name: 'Sanitaryware', img: warehouseImage7 },
    { id: 9, name: 'Plumbing Materials', img: warehouseImage8 },
    { id: 10, name: 'Electrical Materials', img: warehouseImage9 },
    { id: 11, name: 'Paints & Accessories', img: warehouseImage10 },
    { id: 12, name: 'Waterproofing Products', img: warehouseImage11 },
    { id: 13, name: 'Construction Chemicals', img: warehouseImage12 },
    { id: 14, name: 'Hardware & Tools', img: warehouseImage13 },
    { id: 15, name: 'Roofing Materials', img: warehouseImage14 },
    { id: 16, name: 'Bathroom & Kitchen Products', img: warehouseImage15 },
  ];

  return (
    <div>
      {/* GOBUILDMART STYLE HERO BANNER SLIDER */}
      <section className="relative min-h-[45vh] md:min-h-[45vh] flex items-center overflow-hidden bg-gray-900 group">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-155"
              alt={`Construction Material Banner ${currentSlide + 1}`}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,20,22,0.85)] via-[rgba(20,20,22,0.5)] to-transparent" />
        </div>

        {/* Content Box */}
        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 w-full z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-brand-gold text-[color:var(--bmart-ink)] font-bold text-sm px-4 py-1.5 rounded-full mb-4 shadow-md">
              <Sparkles size={15} /> Build Better. Build with Trust.
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.05] mb-4">
              The Best Building Materials Supplier in <span className="brand-gold">South India</span>
            </h1>
            <p className="text-base md:text-lg text-gray-100 mb-6 leading-relaxed">
              BMART supplies Civil Contractors, Builders, Architects, and Engineers with 15,000+ products, transparent pricing, and fast, reliable site delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="bg-brand-gold text-[color:var(--bmart-ink)] font-bold px-7 py-3.5 rounded-md hover:bg-[color:var(--bmart-gold-dark)] transition-colors flex items-center gap-2 shadow-lg">Request a Quote <ArrowRight size={18} /></a>
              <Link to="/products" className="bg-white/15 backdrop-blur border border-white/40 text-white font-bold px-7 py-3.5 rounded-md hover:bg-white/30 transition-colors">Explore Products</Link>
            </div>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-25">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
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

      {/* VISION & MISSION SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-[color:var(--bmart-gold)] flex items-center justify-center mb-6">
              <Compass size={28} />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase brand-gold mb-2 block">Our Vision</span>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Excellence in Construction Branding</h3>
            <p className="text-gray-600 leading-relaxed italic">
              “To become one of the most trusted and preferred building materials brands, delivering quality, innovation and value to every construction project we serve.”
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-[color:var(--bmart-gold)] flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase brand-gold mb-2 block">Our Mission</span>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Comprehensive Supply & Service</h3>
            <p className="text-gray-600 leading-relaxed italic">
              “To provide a comprehensive range of genuine, high-quality building materials at competitive prices, supported by professional service, dependable supply and on-time delivery.”
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle eyebrow="About B Mart" title="A Trusted Partner in Building Better Spaces" />
            <p className="text-gray-600 leading-relaxed mb-4">
              At B MART, we believe that every strong structure begins with the right materials, the right quality and the right partner. We bring together a comprehensive range of quality building and construction materials under one trusted brand.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From individual home builders to contractors, architects, builders and large-scale projects, we are committed to delivering genuine products, competitive pricing, dependable supply and professional service.
            </p>
            <div className="flex flex-col gap-3">
              {bestPractices.map((b) => (
                <div key={b} className="flex items-center gap-2 text-gray-800 font-medium">
                  <CheckCircle2 size={18} className="brand-gold shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={warehouseImage} alt="B MART warehouse" className="rounded-2xl shadow-2xl w-full h-[620px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-[color:var(--bmart-ink)] rounded-xl p-6 shadow-xl hidden sm:block">
              <div className="text-3xl font-black">10+</div>
              <div className="font-semibold text-sm">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="What We Supply" title="Building Materials & Construction Products" center />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <Link to="/products" key={c.id} className="group relative rounded-xl overflow-hidden card-hover bg-white shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(233, 233, 238, 0.85)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h3 className="text-white font-bold text-lg">{c.name}</h3> */}
                  <span className="text-brand-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">View <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHOLESALE & RETAIL SECTIONS */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Procurement Options" title="Wholesale & Retail Building Materials Supplier" center />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-brand-gold text-[color:var(--bmart-ink)] flex items-center justify-center font-black text-xl mb-6">R</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Retail Supply</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">Tailored procurement services and personalized assistance for individual house construction customers looking for dependable quality.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="brand-gold" /> Individual house construction</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="brand-gold" /> Transparent pricing & billing</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-brand-gold text-[color:var(--bmart-ink)] flex items-center justify-center font-black text-xl mb-6">W</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Wholesale Supply</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">Specialized contractor pricing, dealer packages, and priority fulfillment channels for volume builders and trade professionals.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="brand-gold" /> Contractors, Builders & Dealers</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="brand-gold" /> Dedicated project billing</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-brand-gold text-[color:var(--bmart-ink)] flex items-center justify-center font-black text-xl mb-6">B</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Project Supply</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">End-to-end material scheduling and logistical support engineered for large scale developments and industrial sites.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="brand-gold" /> Apartment / Commercial Projects</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="brand-gold" /> Industrial structure supply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE SECTION */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionTitle eyebrow="Who We Serve" title="Our Valued Target Audience" center light />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[
              'Individual House Owners',
              'Civil Contractors',
              'Builders & Developers',
              'Architects',
              'Civil Engineers',
              'Interior Designers',
              'Small Construction Companies',
              'Dealers & Resellers'
            ].map((audience, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center flex items-center justify-center gap-2 font-semibold">
                <Users size={18} className="brand-gold shrink-0" />
                <span>{audience}</span>
              </div>
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
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} className={i <= 4 ? 'fill-[color:var(--bmart-gold)] text-[color:var(--bmart-gold)]' : 'text-[color:var(--bmart-gold)]'} />)}
            <span className="font-bold text-gray-800 ml-2">4.3/5</span>
            <span className="text-gray-500">from 147+ reviews</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-7 card-hover border border-gray-100">
                <div className="flex gap-1 mb-4">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-[color:var(--bmart-gold)] text-[color:var(--bmart-gold)]" />)}</div>
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
            <p className="text-gray-600 mb-8">Send us your requirement and our team will get back with competitive pricing and availability.</p>
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
              <p className="text-[color:var(--bmart-ink)]/80 font-medium">Serving Tamil Nadu, Hyderabad, Kerala & all of South India.</p>
            </div>
          </div>
          <Link to="/branches" className="bg-brand-charcoal text-white font-bold px-8 py-4 rounded-md hover:bg-black transition-colors whitespace-nowrap">Visit Our Branches</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;