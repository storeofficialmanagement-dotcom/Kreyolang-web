import React from 'react';

const FeatureCard = ({ icon, title, description, color }) => {
  const colorClasses = {
    amber:   { bg: 'bg-amber-100',   text: 'text-amber-600' },
    purple:  { bg: 'bg-purple-100',  text: 'text-purple-600' },
    indigo:  { bg: 'bg-indigo-100',  text: 'text-indigo-600' },
    rose:    { bg: 'bg-rose-100',    text: 'text-rose-600' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    cyan:    { bg: 'bg-cyan-100',    text: 'text-cyan-600' },
  }[color];

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl border-2 border-b-[6px] border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className={`p-6 rounded-2xl mb-6 ${colorClasses.bg} ${colorClasses.text} shadow-sm`}>
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold mb-4 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
