import React from "react";
import contact from "../assets/contact.png";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact: React.FC = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>('fade-in-up', 0.1);
  const imageRef = useScrollAnimation<HTMLImageElement>('fade-in-left', 0.2);
  const contentRef = useScrollAnimation<HTMLDivElement>('fade-in-right', 0.3);

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-0 "
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="text-center w-full">
        <h1
          ref={titleRef}
          className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal my-12 sm:my-10 md:my-25 lg:my-25"
          style={{ fontFamily: "'Brittany Signature', cursive" }}
        >
          Connect with Us
        </h1>
      </div>

      {/* Connect Us sections */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-24 px-2 sm:px-4 md:px-6 lg:px-8 w-full ">
      <div className="flex-1 flex justify-center items-center">
          <img
            ref={imageRef}
            src={contact}
            alt="Phakding illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>

        {/* Right: Content */}
        <div ref={contentRef} className="animate-on-scroll flex-1 max-w-2xl sm:max-w-3xl md:max-w-4xl w-full">
          <div
            className="text-[20px] md:text-4xl font-regular mb-4 sm:mb-6 md:mb-8 whitespace-nowrap"
            style={{ fontFamily: "'Brittany Signature', cursive" }}
          >
            SASVATA
          </div>
          <div
            className="font-medium text-black text-lg text-[16px] md:text-[28px] lg:text-[26px] mb-4 sm:mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Two paths diverge where dreams take flight, <br></br>
            One holds the spark that shapes the night.<br></br> 
            We've walked its ways, felt moments rare, <br></br>
            Unique, alive, beyond compare.<br></br>
            Come join the journey, take our hand,<br></br>
            For lifetimes' wonders, bold and grand.<br></br>
          </div>
          <form className="mt-4 sm:mt-6">
            <label
              className="block text-black font-semibold mb-2 text-base sm:text-lg md:text-[24px]"
              htmlFor="email"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border-b border-black bg-transparent py-2 px-1 mb-4 sm:mb-6 focus:outline-none placeholder-fade text-base sm:text-lg md:text-[22px] smooth-hover"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              type="submit"
              className="w-full bg-white border border-gray-300 rounded-full py-2 sm:py-3 text-[#232325] font-medium text-base sm:text-lg md:text-[24px] shadow-sm hover:bg-green-50 transition-all duration-300 transform hover:scale-105 smooth-hover"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We Will Reach Out To You
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact; 