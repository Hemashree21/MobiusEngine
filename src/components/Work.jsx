import React from 'react';

const Work = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Intake Form",
    },
    {
      number: 2,
      title: "We do the search and curation for list of jobs",
    },
    {
      number: 3,
      title: "You approve, we do the tedious part (applying)",
    },
    {
      number: 4,
      title: "You get the interviews",
    }
  ];

  return (
    <div className="flex flex-col mx-auto px-4 -mt-32 mb-20 max-w-5xl">
      <h2 className="text-3xl font-bold mb-16 text-left w-full">
        <span className="text-blue-600">How we work?</span>
      </h2>

      <div className="flex flex-wrap justify-between">
        {steps.map((step, index) => (
          <div key={index} className="w-full md:w-1/4 mb-8 flex flex-col">
            <div className="w-[63.5px] h-[63.5px] rounded-full border-[1.51px] border-[#022183] flex items-center justify-center mb-4">
              <span className="text-[43.5px] font-normal">{step.number}</span>
            </div>
            <div className="border-[2px] border-[#0649E7] w-[165.5px] mb-[27px] hidden md:block"></div>
            <p className="text-[#0649E7] text-[20px] text-left font-medium">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;