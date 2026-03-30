import React from 'react';

/**
 * Small pill label above section titles — gives a clean, premium feel.
 * dark=true for sections with a dark background (Pricing).
 */
const SectionTag = ({ label, dark = false }) => (
  <div className="flex justify-center mb-4">
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-widest uppercase rounded-full px-3 py-1 border ${
      dark
        ? 'text-violet-300 bg-violet-500/10 border-violet-500/20'
        : 'text-violet-600 bg-violet-50 border-violet-100'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full inline-block ${dark ? 'bg-violet-400' : 'bg-violet-500'}`} />
      {label}
    </span>
  </div>
);

export default SectionTag;
