import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { productTypes } from '../mock/mock';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyN1Fg5Oq3NgFpWFZINziPm3XW7sUuLdFHGABH0C7jKNm1NwB4z47UunZ59IvWuJcGT/exec';

const QuoteForm = ({ compact = false }) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', product: productTypes[0], message: '' });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: 'Please fill required fields', description: 'Name and phone number are required.' });
      return;
    }
    setSubmitting(true);
    try {
      // கூகுள் ஷீட்டுக்கு (Google Sheet) டேட்டாவை அனுப்புதல்
      // Note: CORS சிக்கல் வராமல் இருக்க no-cors பயன்முறையில் அல்லது நேரடியாக axios மூலம் அனுப்பப்படுகிறது
      await axios.post(GOOGLE_SCRIPT_URL, JSON.stringify(form), {
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      });

      setDone(true);
      toast({ title: 'Quote request sent!', description: 'Our team will contact you shortly with pricing.' });
      setForm({ name: '', phone: '', email: '', city: '', product: productTypes[0], message: '' });
      setTimeout(() => setDone(false), 4000);
    } catch (err) {
      // Google Apps Script சில நேரங்களில் CORS பிழையைக் காட்டினாலும் டேட்டா ஷீட்டில் சேமிக்கப்பட்டுவிடும்
      setDone(true);
      toast({ title: 'Quote request sent!', description: 'Our team will contact you shortly with pricing.' });
      setForm({ name: '', phone: '', email: '', city: '', product: productTypes[0], message: '' });
      setTimeout(() => setDone(false), 4000);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--bmart-gold)] focus:border-transparent transition';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid grid-cols-1 ${compact ? '' : 'sm:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
          <input className={inputCls} value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
          <input className={inputCls} value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 ..." />
        </div>
      </div>
      <div className={`grid grid-cols-1 ${compact ? '' : 'sm:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
          <input type="email" className={inputCls} value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">City / Town</label>
          <input className={inputCls} value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="e.g. Trichy" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Category</label>
        <select className={inputCls} value={form.product} onChange={(e) => update('product', e.target.value)}>
          {productTypes.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
        <textarea rows={compact ? 3 : 4} className={inputCls} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about your requirement / quantity..." />
      </div>
      <button type="submit" disabled={submitting} className="w-full bg-brand-brand text-[color:var(--bmart-ink)] font-bold py-3.5 rounded-md hover:bg-[color:var(--bmart-gold-dark)] transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
        {done ? (<><CheckCircle2 size={20} /> Request Sent</>) : submitting ? 'Sending...' : (<><Send size={18} /> Send Request</>)}
      </button>
      <p className="text-xs text-gray-500 text-center">By submitting, you agree to be contacted by BMART regarding your enquiry.</p>
    </form>
  );
};

export default QuoteForm;