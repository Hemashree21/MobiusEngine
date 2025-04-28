import { Play, ArrowRight } from "lucide-react";
import link2 from '../assets/link2.png';

// ReviewCard Component
const ReviewCard = () => {
  return (
    <div className="bg-[#0649E7] border-[1.51px] border-[#0649E7] rounded-[35px] w-[308px] h-[350px] flex flex-col">
      {/* Video Thumbnail with Play Button */}
      <div className="relative bg-gray-100 w-full h-[204px] rounded-[35px] flex items-center justify-center">
        <button className="bg-[#0649E7] rounded-full p-2 text-white">
          <Play size={20} />
        </button>
      </div>

      {/* Client Details */}
      <div className="mt-3 ml-6 mr-4">
        <p className="text-white text-[15.5px]">
          <span>Holly</span> is a <span className="font-semibold">senior executive</span> who got over <span className="font-semibold">10 job interviews</span> and an offer she accepted
        </p>
        
        {/* Arrow Button */}
        <div className="mt-2 flex justify-end">
          <button className="bg-white rounded-full h-[44px] w-[44px] flex items-center justify-center">
            <img src={link2} alt="link-icon" className="h-[10px] w-[10px]"/>
          </button>
        </div>
      </div>
    </div>
  );
};

// Review Page Component
const Review = () => {

  const clients = [
    { id: 1, name: "Holly", position: "senior executive", interviews: 10 },
    { id: 2, name: "Holly", position: "senior executive", interviews: 10 },
    { id: 3, name: "Holly", position: "senior executive", interviews: 10 }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-[#0649E7] text-[31px] mt-[60px] font-bold text-left mb-[88.6px]">
        What our clients have to say
      </h1>
      
      {/* Review Cards Container */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[41px]">
          {clients.map(client => (
            <ReviewCard key={client.id} clientInfo={client} />
          ))}
        </div>
      </div>
      
      {/* Bottom Buttons */}
      <div className="mt-[60px] flex flex-col md:flex-row justify-center items-center gap-16">
        <button className="border border-[#0649E7] text-[#0649E7] rounded-full px-6 py-3 flex items-center justify-center gap-1">
          More customer testimonials <img src={link2} alt="link" className="h-[10px] w-[10px]"/>
        </button>
        <button className="bg-[#0649E7] text-white rounded-full px-8 py-3 flex items-center">
          Get Started <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Review;