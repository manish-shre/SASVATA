import React from 'react'
import {assets} from "../assets/assets"
import Navbar from '../components/Navbar'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HeroSection: React.FC = () => {
  const logoRef = useScrollAnimation<HTMLImageElement>('scale-in', 0.2);
  const titleRef = useScrollAnimation<HTMLHeadingElement>('fade-in-up', 0.4);

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Navbar (fixed at top) */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Background Hero Image */}
      <img
        src={assets.heroimg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none select-none"
      />

      {/* Content Overlay */} 
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4 py-8 xs:px-6 xs:py-10 sm:px-8 sm:py-12 md:px-16 md:py-20 lg:px-24 lg:py-28 xl:px-32 xl:py-32 z-10">
        <img
          ref={logoRef}
          src={assets.logo}
          alt="Sasvata Logo"
          className="animate-on-scroll w-auto h-24 xs:w-26 xs:h-26 sm:w-40 sm:h-40 md:w-auto md:h-42 lg:w-auto lg:h-44 xl:w-auto xl:h-52 max-w-full mb-4 md:mb-6 smooth-hover"
        />
        <h1
          ref={titleRef}
          style={{ fontFamily: 'Ortica Linear, sans-serif' }}
          className="animate-on-scroll font-medium text-white text-5xl xs:text-3xl sm:text-4xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight md:leading-tight lg:leading-[1.1] drop-shadow-md"
        >
          <span>SASVATA</span>
          <br />
          <span>HOSPITALITY</span>
        </h1>
      </div>
    </div>
  )
}

export default HeroSection 