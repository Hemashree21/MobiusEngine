import { ArrowRight, Check } from "lucide-react";
import tick from '../assets/tick.png'

// Reusable PlanCard component
const PlanCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`w-72 p-6 border-[2px] border-[#0649E7] rounded-[25px] flex flex-col h-[530px] ${isPopular ? 'bg-[#F8FAFF]' : ''}`}>
      {/* Card Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-[25px] text-[#0649E7] font-semibold">{title}</h3>
          {isPopular && (
            <span className="px-3 py-1 text-[#0649E7] border border-[#0649E7] text-xs rounded-full">
              Popular
            </span>
          )}
        </div>
        <div className="flex items-baseline">
          <span className="text-4xl font-semibold text-[#0649E7]">${price}</span>
          <span className="text-[#0649E7] font-semibold ml-1">/week</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#BCBCBC] mb-6"></div>

      {/* Features List */}
      <div className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
                <img src={tick} alt="tick" className="h-[15.5px] w-[15.5px] mt-1"/>
              <span className="ml-2 text-sm text-[#0649E7]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="bg-[#0649E7] text-white rounded-full px-8 py-3 flex items-center">
          Get Started <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

// Main Plans component
const Plans = () => {
  const plans = [
    {
      title: "April Promo",
      price: "35",
      isPopular: false,
      features: [
        <span>Curated jobs from 14+ listings, refreshed every 48 hours</span>,
        <span>Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)</span>,
        <span>Need more? Add extra apps for just $15 each</span>,
        <span>Your own dedicated application analyst</span>,
        <span>Personalized with up to 10 filters & 5 job titles</span>
      ]
    },
    {
      title: "Starter",
      price: "50",
      isPopular: true,
      features: [
        <span>All the perks of the Promo Plan, plus:</span>,
        <span>Resume review & story-focused feedback</span>,
        <span>Dedicated search specialist</span>,
        <span>Up to 50 job apps/week</span>,
        <span>Extra apps at $15 each</span>,
        <span>Analyst support within 6 hours (SLA/PST hours)</span>
      ]
    },
    {
      title: "Plus",
      price: "100",
      isPopular: false,
      features: [
        <span>Everything in Starter, with more muscle:</span>,
        <span>Up to 75 apps/week</span>,
        <span>Apply to 15 job titles</span>,
        <span>Analyst + full application team on Pacific hours</span>
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-[31px] font-bold text-left mb-20 text-[#0649E7]">Job Application Service Plans</h1>
      <div className="flex flex-wrap justify-between gap-[40px]">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;