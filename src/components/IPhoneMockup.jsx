import React from 'react';

const IPhoneMockup = ({ children }) => (
  <div className="relative mx-auto w-[238px] select-none">
    {/* Side buttons */}
    <div className="absolute -left-[5px] top-[88px]  w-[5px] h-6  bg-slate-700 rounded-l-full" />
    <div className="absolute -left-[5px] top-[124px] w-[5px] h-10 bg-slate-700 rounded-l-full" />
    <div className="absolute -left-[5px] top-[170px] w-[5px] h-10 bg-slate-700 rounded-l-full" />
    <div className="absolute -right-[5px] top-[128px] w-[5px] h-14 bg-slate-700 rounded-r-full" />

    {/* Frame */}
    <div className="w-[238px] h-[488px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-[9px] shadow-2xl ring-1 ring-white/10">
      <div className="relative h-full bg-white rounded-[2.4rem] overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[68px] h-[18px] bg-slate-900 rounded-full z-10" />
        {/* Screen content */}
        {children}
      </div>
    </div>
  </div>
);

export default IPhoneMockup;
