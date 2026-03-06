import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqData from '../data/faqData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-2 border-slate-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-extrabold text-slate-900">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="faq" className="py-20 bg-white">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Questions fréquentes
          </h2>
          <p className="text-slate-500 mt-3">
            Tout ce que vous devez savoir avant d'embarquer.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <FAQItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
