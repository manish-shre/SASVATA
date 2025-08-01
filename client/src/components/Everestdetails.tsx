import React from "react";
import { Link } from "react-router-dom";
import phakdingimg from "../assets/phakdingimg.png";
import { assets } from "../assets/assets";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Everestdetails = () => {
  const section1ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-left', 0.2);
  const section1ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-right', 0.3);
  const section2ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-left', 0.2);
  const section2ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-right', 0.3);

  return (
    <div>
      {/* First section */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-8 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full py-12 md:py-25 lg:py-25">
        <div ref={section1ContentRef} className="animate-on-scroll flex-1 min-w-0">
          <Link to="" className="block">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={assets.phakdinglogo}
                alt="Phakding Logo"
                className="h-30 sm:h-20 md:h-42 lg:h-45 w-auto object-contain mb-4 smooth-hover"
              />
            </div>
          </Link>

          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-black text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Phakding Lodge: Where Everest Adventures Begin
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nestled in the heart of the Khumbu Valley, Phakding Lodge serves as
            the gateway to the legendary Everest Base Camp trek, offering an
            unforgettable first impression for adventurers embarking on this
            iconic two-week journey. Our lodge is more than a place to rest—it's
            a vibrant celebration of Himalayan hiking culture, seamlessly
            blending authentic local hospitality, nourishing cuisine, and
            thoughtful preparation for the exhilarating trail ahead.
          </div>
        </div>
        {/* Image section */}
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            ref={section1ImageRef}
            src={assets.everestlodgeimg}
            alt="Trekking illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
      </div>

      {/* Second secttion */}
      <div className="max-w-[91%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-6 lg:px-8 w-full py-0 lg:pt-0">
        <div className="flex-1 flex justify-center items-center">
          <img
            ref={section2ImageRef}
            src={phakdingimg}
            alt="Phakding illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
        <div ref={section2ContentRef} className="animate-on-scroll flex-1 min-0">
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            At Phakding Lodge, we are dedicated to crafting an immersive
            experience that honors the spirit of the Everest region. Our
            carefully curated environment reflects the rich traditions of the
            Himalayas, from warm Sherpa-inspired interiors to locally sourced,
            wholesome meals designed to fuel your body and soul. Each dish is
            crafted to provide optimal nutrition, ensuring you're energized and
            ready for the challenges of high-altitude trekking. Our
            recovery-focused amenities, including cozy lounges and rejuvenating
            spaces, help you recharge after a day on the trail.<br></br>
            <br></br>
            We take pride in preparing our guests for the journey ahead with
            informative features, including expert-led briefings on trail
            conditions, altitude awareness, and cultural insights to deepen your
            connection to the region. Our knowledgeable staff is committed to
            ensuring you feel confident, inspired, and fully equipped for the
            adventure.<br></br>
            <br></br>
            Central to our mission is the wellbeing of the true heroes of the
            Everest region—the guides who make these journeys possible. Phakding
            Lodge is a sanctuary for these remarkable individuals, offering
            exceptional facilities, comfortable accommodations, and dedicated
            spaces for rest and entertainment. We believe that by honoring our
            guides, we elevate the entire trekking experience, fostering a sense
            of community and mutual respect.<br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everestdetails;
