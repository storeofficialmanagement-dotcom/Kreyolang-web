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
      <div className="relative h-full bg-black rounded-[2.4rem] overflow-hidden">

        {/* Screenshot content (fills entire frame, status bar will be covered) */}
        <div className="absolute inset-0">
          {children}
        </div>

        {/* Status bar mask — covers the screenshot's own status bar/notch */}
        <div className="absolute top-0 left-0 right-0 h-[54px] bg-gradient-to-b from-black via-black/95 to-transparent z-20 rounded-t-[2.4rem]" />

        {/* Dynamic Island */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-30
                        w-[88px] h-[26px] bg-black rounded-full
                        ring-[0.5px] ring-white/10" />
      </div>
    </div>
  </div>
);

export default IPhoneMockup;
