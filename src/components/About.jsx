import React from 'react';
import aboutbg from '../assets/about-bg.png';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import link2 from "../assets/link2.png";

const About = () => {
  const teamMembers = [
    {
      name: "Ashwin",
      image: about1,
      bio: "Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.",
      additionalInfo: "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams."
    },
    {
      name: "Nicole",
      image: about2,
      bio: "is an executive coach at Mobius specializing in resume builds and career advisory.",
      additionalInfo: "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has helped new the precise positioning opens doors. She takes a tailored approach to each client, leveraging data analysis to craft and execute that truly match their skills and potential."
    }
  ];

  return (
    <div className="w-full">
      <div 
        className="w-full bg-cover bg-center min-h-screen flex flex-col items-center py-16 px-4" 
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="container max-w-5xl">
          <h2 className="text-white text-[31px] font-medium mb-16 mx-4">About Us</h2>
          
          <div className="p-8 mx-28 rounded-lg">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-[82px] mb-12 last:mb-0">
                <div className="relative flex-shrink-0 mb-6 md:mb-0">
                  <div className="rounded-full overflow-hidden h-[207px] w-[207px] bg-white">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="bg-white/15 border absolute -bottom-0.5 right-0 border-white backdrop-blur-md rounded-full w-[62.17px] h-[62.17px] flex items-center justify-center">
                    <span className='text-3xl font-bold text-white'>in</span>
                  </div>
                </div>
                
                <div className="md:ml-6 text-white">
                  <p className="text-[14px] leading-relaxed">
                    <strong>{member.name}</strong> {member.bio}
                  </p>
                  <p className="text-[14px] mt-2 leading-relaxed">
                    {member.additionalInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className='flex w-full'>
          <div className='w-3/7'></div>
          <div className="mt-10 text-white text-left text-[14px] ml-5">
            <span className="cursor-pointer mb-4 inline-flex items-center">
            Learn more about our Board of Advisors
            <img src={link2} alt="link-icon" className="ml-2" />
            </span>
            <br/>
            <button className="cursor-pointer inline-flex items-center">
            Follow us on your LinkedIn page
            <img src={link2} alt="link-icon" className="ml-2" />
            </button>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;