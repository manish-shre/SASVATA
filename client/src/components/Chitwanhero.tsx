
import React from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Chitwanhero = () => {
  const heroRef = useScrollAnimation<HTMLImageElement>('fade-in-up', 0.1);

  return (
    <div className="w-full max-h-[80vh] overflow-hidden relative">
      <img
        ref={heroRef}
        src={assets.postcardslider}
        alt="Hero"
        className="animate-on-scroll w-full h-auto pointer-events-none smooth-hover"
        style={{ maxHeight: '80vh' }}
      />
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default Chitwanhero;