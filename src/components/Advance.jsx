import React from 'react';
import tick from '../assets/tick.png';
import { ArrowRight } from 'lucide-react';

const Advance = () => {
  return (
    <div className='max-w-5xl mx-auto mt-10'>
      <div className="bg-[#0649E7] p-6 rounded-[25px] text-white relative">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">Advance</h2>
            <p className="text-sm">Top-tier support for serious job hunters:</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-bold">$150</span>
            <span className="text-lg">/week</span>
          </div>
        </div>
        
        <div className="border-[1px] border-[#BCBCBC] mt-4 mb-6 w-1/3"></div>
        
        <div className="flex flex-wrap mb-2">
          <div className="w-44 mb-3">
            <div className="flex items-center gap-2">
              <img src={tick} alt="tick-icon" className="w-5 h-5 flex-shrink-0" />
              <span className="text-[14px]">Everything in Plus</span>
            </div>
          </div>
          
          <div className="w-1/2 mb-3">
            <div className="flex items-center gap-2">
              <img src={tick} alt="tick-icon" className="w-5 h-5 flex-shrink-0" />
              <span className="text-[14px]">Custom Resumes & Cover Letters</span>
            </div>
          </div>
          
          <div className="w-1/3 mb-3">
            <div className="flex items-center gap-2">
              <img src={tick} alt="tick-icon" className="w-5 h-5 flex-shrink-0" />
              <span className="text-[14px]">20 fully customized applications/week</span>
            </div>
          </div>
          
          <div className="w-1/2 mb-3">
            <div className="flex items-center gap-2">
              <img src={tick} alt="tick-icon" className="w-5 h-5 flex-shrink-0" />
              <span className="text-[14px]">Help with complex job searches</span>
            </div>
          </div>
          
          <div className="w-full">
            <div className="flex items-center gap-2">
              <img src={tick} alt="tick-icon" className="w-5 h-5 flex-shrink-0" />
              <span className="text-[14px]">Access to senior resume experts, Founder & Exec Coaches</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 right-6">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium flex items-center gap-2">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advance;