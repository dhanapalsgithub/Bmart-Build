import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { company } from '../mock/mock';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Branches', path: '/branches' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const goQuote = () => {
    if (location.pathname === '/') {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      {/* top strip */}
      <div className="hidden md:block bg-brand-charcoal text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <span className="text-gray-300">Trusted Construction Material Supplier across Tamil Nadu</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-[color:var(--bmart-gold)] transition-colors"><Phone size={14} /> {company.phone}</a>
            <a href={`mailto:${company.email}`} className="hover:text-[color:var(--bmart-gold)] transition-colors">{company.email}</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={company.logo} alt="BMART logo" className="h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`font-semibold text-[15px] tracking-wide transition-colors relative py-1 ${location.pathname === l.path ? 'text-[color:var(--bmart-gold)]' : 'text-gray-800 hover:text-[color:var(--bmart-gold)]'}`}
              >
                {l.name}
              </Link>
            ))}
            <button onClick={goQuote} className="bg-brand-gold text-[color:var(--bmart-ink)] font-bold px-6 py-2.5 rounded-md hover:bg-[color:var(--bmart-gold-dark)] transition-colors shadow-sm">
              Get a Quote
            </button>
          </nav>

          <button className="lg:hidden text-gray-800" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path} className={`py-3 font-semibold border-b border-gray-50 ${location.pathname === l.path ? 'text-[color:var(--bmart-gold)]' : 'text-gray-800'}`}>
                {l.name}
              </Link>
            ))}
            <button onClick={goQuote} className="mt-4 bg-brand-gold text-[color:var(--bmart-ink)] font-bold px-6 py-3 rounded-md">Get a Quote</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
