import React from 'react'
import Button from '../ui/Button'
import ebook from '../assets/ebook.png'
import book from '../assets/bookicon.png'
import { MoveRight } from 'lucide-react'
import linkicon from '../assets/link.png'

const Hero = () => {
  return (
    <div className="relative h-screen">
        <div className='flex gap-[140px] justify-center items-center mt-[120px]'>
            <div className='flex flex-col gap-[33px]'>
            <h1 className="text-[62px] font-semibold text-white leading-none" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">Land Job interviews</span>
                <span className="block"><span className='text-[#0649E7]'>10x</span> Faster</span>
            </h1>
                <p className='text-[15.5px] font-normal text-white'>Custom-built resumes that match your goals, keywords, and <br/> recruiter expectations.</p>
                <Button><span className='text-[16px]'>Get Started </span><MoveRight /></Button>
            </div>

            <div className="relative">
                <img src={ebook} alt="E-Book preview" className='w-[234px] h-[303px]'/>
            </div>
        </div>
        
        {/* Book icon with download text below */}
        <div className="absolute top-60 right-50 flex flex-col items-center">
            <div className="relative">
                <div className="bg-white/14 border border-white/30 backdrop-blur-md rounded-full w-[93.68px] h-[93.68px] flex items-center justify-center">
                    <img src={book} alt="Book icon" className="w-[48px] h-[47px]" />
                </div>
                <div className="absolute -bottom-0.5 right-15 w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center">
                    <img src={linkicon} alt="link-icon" />
                </div>
            </div>  
            
            <span className="text-white text-sm -ml-54">Download Free E-Book</span>
        </div>
    </div>
  )
}

export default Hero