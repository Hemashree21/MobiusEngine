import { Heart, Users, Star } from 'lucide-react';
import React from 'react';
import trust from "../assets/trust.png";
import avatar from "../assets/avatar.png";
import star from "../assets/star.png"

const Choose = ({ title = "Why Choose Us?", features = [] }) => {
  // Default features if none are provided
  const defaultFeatures = [
    {
      id: 1,
      icon: trust,
      title: "Tried, Tested, Trusted",
      description: "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back."
    },
    {
      id: 2,
      icon: avatar,
      title: "Real People, Real Help",
      description: "A hands-on team that actually cares — guiding you through every twist in your career path."
    },
    {
      id: 3,
      icon: star,
      title: "Beat the Line",
      description: "We search, shortlist, and apply for you, so your name shows up first — every single day."
    }
  ];

  // Use provided features or default ones
  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <div className="w-full py-20">
      <div className="max-w-6xl bg-[#F8FAFF] mx-auto p-[46.6px] rounded-[35px] pr-18">
        
        {/* Section Title */}
        <h2 className="text-[31px] ml-5 font-bold text-blue-900 mb-8">{title}</h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-5">
          {displayFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-[25px] border border-[#022183] flex flex-col items-start"
            >
              <img src={feature.icon} alt="icon" className='mb-8 h-[55px] w-[55px]'/>
              <h3 className="text-lg font-semibold text-[#022183] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#022183] text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;