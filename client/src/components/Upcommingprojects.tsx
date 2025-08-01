import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Upcommingprojects: React.FC = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>('fade-in-up', 0.1);
  
  // First project refs
  const project1ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-left', 0.2);
  const project1ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-right', 0.3);
  
  // Second project refs
  const project2ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-left', 0.2);
  const project2ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-right', 0.3);
  
  // Third project refs
  const project3ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-left', 0.2);
  const project3ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-right', 0.3);
  
  // Fourth project refs
  const project4ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-left', 0.2);
  const project4ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-right', 0.3);

  return (
    <div
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center py-0 "
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="text-center w-full">
        <h1
          ref={titleRef}
          className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-12 md:mb-25 lg:mb-25"
          style={{ fontFamily: "'Brittany Signature', cursive" }}
        >
          Upcoming Projects
        </h1>
      </div>

      {/* first project */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-8 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full">
        {/* Left: Logo and Text Content */}
        <div ref={project1ContentRef} className="animate-on-scroll flex-1 min-w-0">
          <Link to="/bojus" className="block">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={assets.Bojus}
                alt="Bojus Logo"
                className="h-16 sm:h-20 md:h-26 lg:h-25 w-auto object-contain smooth-hover"
              />
            </div>
          </Link>
          <div
            style={{ fontFamily: "Safira March Personal Use" }}
            className="text-[12px] sm:text-[14px] md:text-[22px] lg:text-[22px] font-regular my-2 sm:my-4 md:my-6 whitespace-nowrap"
          >
            SYANGBOCHE REST HOUSE
          </div>
          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-red text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Syangboche, 3870 meters ASL
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nestled in the heart of Syangboche, on day three of the iconic
            Everest trek, Boju's welcomes you to a rejuvenating rest and
            recovery experience in the embrace of the world's highest peak.
            Operated by passionate young Nepalese, our sanctuary celebrates
            vibrant Sherpa hospitality, offering a wellness-focused retreat that
            blends relaxation and wholesome nutrition. Unwind with serene
            amenities, including a tranquil hot spring, a warm fireplace, and a
            restorative trekkers' sound therapy session, paired with nourishing
            culinary options designed to restore and invigorate. Boju's embodies
            the soul of the Himalayas, creating a cultural and wellness haven
            that captivates and inspires.
          </div>
          <Link to="/bojus" className="block">
            <div className="font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] text-black cursor-pointer inline-flex items-center gap-1 sm:gap-2 group pt-2 smooth-hover">
              See More
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            ref={project1ImageRef}
            src={assets.Bojusimg}
            alt="Trekking illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
      </div>

      {/* second project */}
      <div className="max-w-[91%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-6 lg:px-8 w-full py-12 lg:py-25">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            ref={project2ImageRef}
            src={assets.phakdingimg}
            alt="Phakding illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
        {/* Right: Logo and Text Content */}
        <div ref={project2ContentRef} className="animate-on-scroll flex-1 min-w-0">
          <Link to="/Everestlodge" className="block">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={assets.phakdinglogo}
                alt="Phakding Logo"
                className="h-30 sm:h-20 md:h-42 lg:h-45 w-auto object-contain smooth-hover"
              />
            </div>
          </Link>
          <div
            style={{ fontFamily: "Safira March Personal Use" }}
            className="text-[12px] sm:text-[14px] md:text-[22px] lg:text-[22px] font-regular my-2 sm:my-4 md:my-6 whitespace-nowrap"
          >
            SASVATA EVEREST LODGE
          </div>
          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-red text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Phakding, 2610 Meters ASL
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nestled along the iconic Everest Base Camp trail in the heart of
            Nepal's Khumbu region, the Sasvata Everest Lodge stands as a serene
            haven for trekkers and adventurers. Perched beside the glistening
            Dudh Koshi River, this lodge offers an unparalleled blend of natural
            beauty, cultural immersion, and modern comfort, all set against the
            majestic Himalayan backdrop.
          </div>
          <Link to="/Everestlodge" className="block">
            <div className="font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] text-black cursor-pointer inline-flex items-center gap-1 sm:gap-2 group pt-2 smooth-hover">
              See More
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Third project */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-8 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full pb-12 lg:pb-25">
        {/* Left: Logo and Text Content */}
        <div ref={project3ContentRef} className="animate-on-scroll flex-1 min-w-0">
          <Link to="/Curatedexperiences" className="block">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={assets.ktmlogo}
                alt="Curated Experiences Logo"
                className="h-28 sm:h-20 md:h-40 lg:h-45 w-auto object-contain smooth-hover"
              />
            </div>
          </Link>
          <div
            style={{ fontFamily: "Safira March Personal Use" }}
            className="text-[12px] sm:text-[14px] md:text-[22px] lg:text-[22px] font-regular my-2 sm:my-4 md:my-6 whitespace-nowrap"
          >
            SASVATA CURATED EXPERIENCES
          </div>
          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-red text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Kathmandu Valley, 1335 Meters ASL
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sāsvata Curated Experiences is an exclusive hospitality service that
            immerses you in the vibrant culture and heritage of Nepal's 2000
            year old capital city, Kathmandu- through curated experiences.
            Sāsvata crafts distinctive experiences that stand apart from
            traditional tours, offering travelers meaningful, content-rich
            alternatives tailored to their desire for authentic and immersive
            adventures.
          </div>
          <Link to="/Curatedexperiences" className="block">
            <div className="font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] text-black cursor-pointer inline-flex items-center gap-1 sm:gap-2 group pt-2 smooth-hover">
              See More
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            ref={project3ImageRef}
            src={assets.ktmimg}
            alt="Curated Experiences illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
      </div>

      {/* FORTH project */}
      <div className="max-w-[91%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-6 lg:px-8 w-full ">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            ref={project4ImageRef}
            src={assets.postcardimg}
            alt="Phakding illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
        {/* Right: Logo and Text Content */}
        <div ref={project4ContentRef} className="animate-on-scroll flex-1 min-w-0">
          <Link to="/chitwan" className="block">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={assets.postcardlogo}
                alt="Phakding Logo"
                className="h-30 sm:h-20 md:h-46 lg:h-48 w-auto object-contain smooth-hover"
              />
            </div>
          </Link>
          <div
            style={{ fontFamily: "Safira March Personal Use" }}
            className="text-[12px] sm:text-[14px] md:text-[22px] lg:text-[22px] font-regular my-2 sm:my-4 md:my-6 whitespace-nowrap"
          >
            SASVATA WILDLIFE RESORT
          </div>
          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-red text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Phakding, 2610 Meters ASL
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The SASVATA wildlife resort is nestled in the enchanted forests of
            Chitwan along the magical Rapti river. The resort has been created
            as a sensory experience that enraptures and quietens the soul. It
            has been designed to merge with the healing touch of the forest: the
            sounds of the river, the whisper of the wind, the dappling sunlight,
            and the chirping of birds.
          </div>
          <Link to="/chitwan" className="block">
            <div className="font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] text-black cursor-pointer inline-flex items-center gap-1 sm:gap-2 group pt-2 smooth-hover">
              See More
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upcommingprojects;
