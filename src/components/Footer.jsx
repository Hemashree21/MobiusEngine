import React from 'react';
import { Linkedin } from 'lucide-react';
import logo from "../assets/logo-blue.png"

const Footer = () => {
  return (
    <footer className="w-full mt-32">
      {/* Main Footer */}
      <div className="px-24 py-8">
        {/* Logo and contact info section */}
        <div className="mb-8">
          {/* Logo */}
          <div className="mb-10">
            <img 
              src={logo} 
              alt="MobiusEngine Logo" 
              className="h-10" 
            />
          </div>
          
          {/* Divider */}
          <div className="border-t border-[#BCBCBC] mb-8 w-1/3"></div>
          
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Address */}
            <div>
              <h4 className="text-sm font-semibold underline text-[#0649E7] mb-2">Address</h4>
              <p className="text-sm text-[#0649E7]">
                1875 Mission St Ste 103 #450<br />
                San Francisco, CA 94103
              </p>
            </div>
            
            {/* Email */}
            <div>
              <h4 className="text-sm font-semibold text-[#0649E7] underline mb-2">Email</h4>
              <a href="mailto:finance@mobiusengine.ai" className="text-sm text-[#0649E7] hover:underline">
                finance@mobiusengine.ai
              </a>
            </div>
            
            {/* Telephone */}
            <div>
              <h4 className="text-sm font-semibold text-[#0649E7] underline mb-2">Telephone</h4>
              <a href="tel:650-889-6026" className="text-sm text-[#0649E7] hover:underline">
                650-889-6026
              </a>
            </div>
            
            {/* Socials */}
            <div>
              <h4 className="text-sm font-semibold text-[#0649E7] underline mb-2">Socials</h4>
              <div className="flex space-x-2">
                <a href="#" className="border-[1.5px] border-[#0649E7] h-10 w-10 flex justify-center items-center rounded-full p-2" aria-label="LinkedIn">
                  <span className='text-[20px] font-bold text-[#0649E7]'>in</span>
                </a>
                <a href="#" className="border-[1.5px] border-[#0649E7] h-10 w-10 flex justify-center items-center rounded-full p-2" aria-label="LinkedIn">
                  <span className='text-[20px] font-bold text-[#0649E7]'>in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="bg-[#0649E7] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2023 Mobiusservices LLC</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;