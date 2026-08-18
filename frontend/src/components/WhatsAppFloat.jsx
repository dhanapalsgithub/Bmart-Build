import React from 'react';
import { company } from '../mock/mock';

const WhatsAppFloat = () => {
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi BMART, I would like to enquire about building materials.')}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulsering hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white" aria-hidden="true">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.6-1.72a12.73 12.73 0 006.2 1.6h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0016.004 3.2zm0 23.3h-.01a10.5 10.5 0 01-5.35-1.47l-.38-.23-3.92 1.03 1.05-3.82-.25-.4a10.5 10.5 0 01-1.6-5.6c0-5.82 4.74-10.55 10.56-10.55 2.82 0 5.47 1.1 7.46 3.09a10.48 10.48 0 013.09 7.47c0 5.82-4.74 10.55-10.56 10.55zm5.79-7.9c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.62 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.79.66.75.24 1.44.2 1.98.12.6-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37z"/>
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
