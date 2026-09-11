import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { Toaster } from './components/ui/toaster';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoryDetail from './pages/CategoryDetail'; // அனைத்துப் பிரிவுகளுக்குமான பொதுவான சப்-கேட்டகிரி பக்கம்
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoryId" element={<CategoryDetail />} /> {/* டைனமிக் ரூட் - அனைத்துப் பிரிவுகளுக்கும் பொருந்தும் */}
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;