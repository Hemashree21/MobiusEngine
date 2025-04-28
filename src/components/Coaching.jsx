import React from 'react';
import { ArrowRight } from 'lucide-react';
import tick from '../assets/tick.png'

const PlanCard2 = ({ title, subtitle, price, features, buttonText }) => {
  return (
        <div className="w-[350px] max-w-md p-6 border-2 border-[#0649E7] rounded-3xl flex flex-col">
      {/* Card Header */}
      <div className="mb-8">
        <h3 className="text-2xl text-[#0649E7] font-bold mb-1">{title}</h3>
        <p className="text-sm text-[#0649E7] font-[500]">{subtitle}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-[#0649E7]">${price}</span>
          <span className="text-[#0649E7] ml-2">one time</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Features List */}
      <div className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
                <img src={tick} alt="tick-icon" />
              <span className="ml-2 text-sm text-[#0649E7]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="bg-[#0649E7] text-white rounded-full px-8 py-3 flex items-center justify-center font-medium">
          {buttonText} <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Page layout matching the image
const Coaching = () => {
  const resumeRebuildFeatures = [
    '3+ 30-min coaching',
    'Focused on storytelling, not just formatting',
    'Analyst + full application team on Pacific hours',
    'Tailored to your target industry, company, or role',
    'Direct work with our co-founder (ex-Google, JP Morgan)',
    'Executive coaching from UC Berkeley alum with 10+ yrs experience',
    'Resume Rebuild portfolio available upon request'
  ];

  const interviewPrepFeatures = [
    '2× 45-min live coaching with our co-founder',
    'Real-time, practical feedback',
    'Build clarity, empathy & executive presence',
    'For senior and leadership roles — technical & non-technical'
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16">

        <div className="border-t border-[#BCBCBC] mb-16 w-5xl"></div>
      <div className="text-left mb-16">
        <h1 className="text-[31px] font-semibold text-[#0649E7] mb-2">Resume Building & Coaching</h1>
        <p className="text-[#0649E7]  mb-1">Let's talk about where you're headed — and how your resume can get you there.</p>
        <p className="text-[#0649E7] ">Schedule a call to get started.</p>
      </div>

      <div className="max-w-3xl m-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <PlanCard2 
          title="Resume Rebuild"
          subtitle="Crafted for senior to VP-level professionals ready for their next big step."
          price="1000"
          features={resumeRebuildFeatures}
          buttonText="Get Started"
        />
        
        <PlanCard2 
          title="Interview Prep"
          subtitle="Two sessions to sharpen your story, confidence, and clarity — fast."
          price="500"
          features={interviewPrepFeatures}
          buttonText="Get Started"
        />
      </div>
    </div>
  );
};

export default Coaching;