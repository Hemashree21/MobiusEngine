import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-20">
      <div className="bg-[#0649E7] rounded-2xl py-24 px-10 flex items-center justify-between">
        <div className="text-white">
          <h3 className="text-2xl">STILL HAVE</h3>
          <h3 className="text-2xl">DOUBTS?</h3>
        </div>
        
        <div className="text-white text-5xl font-bold">
          Contact us
        </div>
        
        <div className="bg-white rounded-full p-4 flex items-center justify-center">
          <ArrowRight className="text-[#0649E7]" size={36} />
        </div>
      </div>
    </div>
  );
};

export default Contact;