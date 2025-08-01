import React from "react";
import {assets} from "../assets/assets"
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Info: React.FC = () => {
  const logoRef = useScrollAnimation<HTMLImageElement>('scale-in', 0.1);
  const textRef = useScrollAnimation<HTMLDivElement>('fade-in-up', 0.3);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden py-12 md:py-25 lg:py-25">
      {/* infobg.png overlay with 10% opacity */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <img
          src="/src/assets/infobg.png"
          alt="Info Background"
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] object-cover object-center -translate-y-40"
        />
      </div> */}
      {/* Content (logo and text) */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 w-[90%] mx-auto ">
        <img 
          ref={logoRef}
          src={assets.Voithlogo} 
          alt="VOITH Logo" 
          className="animate-on-scroll w-44 h-44 sm:w-65 sm:h-65 md:w-78 md:h-78 lg:w-86 lg:h-86 object-contain smooth-hover" 
        />
        <div
          ref={textRef}
          className="animate-on-scroll max-w-full font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Rooted in the Sanskrit word for eternal, the word "Sāśvata" embodies the value of timelessness and everlasting.
          Established in 2022 under the Vaidya's Organisation of Industries and Trading Houses (VOITH, founded 1967), Sāśvata Hospitality is a tribute to Nepal's vibrant mega-biodiversity and rich cultural heritage. Sāśvata Hospitality aspires to craft immersive, elegant experiences that seamlessly blend Nepali hospitality with timeless elegance.
        </div>
      </div>
    </div>
  );
};

export default Info; 