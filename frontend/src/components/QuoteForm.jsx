import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { productTypes } from '../mock/mock';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

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
      await axios.post(`${API}/quotes`, form);
      setDone(true);
      toast({ title: 'Quote request sent!', description: 'Our team will contact you shortly with pricing.' });
      setForm({ name: '', phone: '', email: '', city: '', product: productTypes[0], message: '' });
      setTimeout(() => setDone(false), 4000);
    } catch (err) {
      toast({ title: 'Something went wrong', description: 'Please try again or reach us on WhatsApp.' });
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
      <button type="submit" disabled={submitting} className="w-full bg-brand-gold text-[color:var(--bmart-ink)] font-bold py-3.5 rounded-md hover:bg-[color:var(--bmart-gold-dark)] transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
        {done ? (<><CheckCircle2 size={20} /> Request Sent</>) : submitting ? 'Sending...' : (<><Send size={18} /> Send Request</>)}
      </button>
      <p className="text-xs text-gray-500 text-center">By submitting, you agree to be contacted by BMART regarding your enquiry.</p>
    </form>
  );
};

export default QuoteForm;
