import React from 'react';

const IPhoneMockup = ({ children }) => (
  <div className="relative mx-auto w-[238px] select-none">
    {/* Side buttons */}
    <div className="absolute -left-[5px] top-[88px]  w-[5px] h-6  bg-slate-700 rounded-l-full" />
    <div className="absolute -left-[5px] top-[124px] w-[5px] h-10 bg-slate-700 rounded-l-full" />
    <div className="absolute -left-[5px] top-[170px] w-[5px] h-10 bg-slate-700 rounded-l-full" />
    <div className="absolute -right-[5px] top-[128px] w-[5px] h-14 bg-slate-700 rounded-r-full" />

    {/* Phone frame */}
    <div className="w-[238px] h-[488px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-[9px] shadow-2xl ring-1 ring-white/10">
      {/* Screen — no CSS notch, the screenshots carry their own Dynamic Island */}
      <div className="relative h-full rounded-[2.4rem] overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

export default IPhoneMockup;
