import React from 'react'
import logo from "../assets/logo.png"
import Button from '../ui/Button'
import CustomDropdown from '../ui/CustomDropdown'

const Header = () => {
  return (
      <div className='flex items-center justify-between px-4 md:px-[66px] py-[29.5px]'>
        
        {/* Logo */}
        <div>
          <img src={logo} alt="MobiusEngine" className='w-[194.3px] h-[39px]' />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-12 text-[19.43px] text-white cursor-pointer">
          <li className="list-none hover:font-semibold">Home</li>
          <li className="list-none hover:font-semibold">About Us</li>
          <li className="list-none hover:font-semibold">Plans</li>
          <li className="list-none hover:font-semibold">Testimonials</li>
          <li className="list-none hover:font-semibold">Privacy Policy</li>
          <li className="list-none">
            <CustomDropdown/>
          </li>
        </div>

        {/* Button */}
        <div className="ml-4">
          <Button>Get Started</Button>
        </div>
      </div>
  )
}

export default Header
