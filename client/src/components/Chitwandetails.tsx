import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Chitwandetails = () => {
  const section1ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-left', 0.2);
  const section1ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-right', 0.3);
  const section2ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-left', 0.2);
  const section2ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-right', 0.3);
  const rhinoRef = useScrollAnimation<HTMLImageElement>('scale-in', 0.4);

  return (
    <div>
      {/* First section */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-8 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full mt-12 md:mt-25 lg:mt-25">
        <div ref={section1ContentRef} className="animate-on-scroll flex-1 min-w-0">
          <Link to="" className="block">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={assets.postcardlogo}
                alt="Phakding Logo"
                className="h-30 sm:h-20 md:h-42 lg:h-45 w-auto object-contain mb-4 smooth-hover"
              />
            </div>
          </Link>

          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-black text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            The Postcard Hotel on Rapti River, Nepal- by Sasvata Wildlife
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nestled in the verdant embrace of Meghauli, Sasvata Wildlife Resort
            stands as a testament to the timeless harmony between humanity and
            the natural world. In Nepal, where every temple is adorned with
            intricate animal carvings symbolizing nature's sacred role, this
            delicate coexistence faces the risk of fading. Sasvata is dedicated
            to preserving this profound connection, offering a sanctuary where
            the essence of nature and human spirit intertwine with elegance and
            purpose.
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
      <div className="max-w-[91%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-6 lg:px-8 w-full pt-12 lg:pt-25">
        <div className="flex-1 flex justify-center items-center">
          <img
            ref={section2ImageRef}
            src={assets.tiger}
            alt="Phakding illustration"
            className="animate-on-scroll max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto w-130 smooth-hover"
          />
        </div>
        <div ref={section2ContentRef} className="animate-on-scroll flex-1 min-0">
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            In a visionary partnership with The Postcard Hotel, an ascendant
            luminary in boutique luxury with exceptional properties across South
            Asia, Sasvata Wildlife Resort elevates the wildlife experience to
            new heights. Renowned for its expertise in curating immersive
            wildlife journeys for a devoted community of discerning travelers,
            The Postcard Hotel shares our ambition to showcase South Asia's
            unparalleled biodiversity to the world. Together, we champion
            Chitwan—aptly named the "Heart of the Jungle" in Sanskrit—as a
            soul-stirring destination for heart-led travelers. Sasvata Wildlife
            Resort invites you to rediscover the timeless bond between humanity
            and nature, enveloped in sophistication and the untamed beauty of
            one of the world's most biodiverse regions.
          </div>
        </div>
      </div>

      {/* Rhyno image */}
      <div className="flex justify-center items-center my-12 sm:my-16 md:my-20">
        <img
          ref={rhinoRef}
          src={assets.rhyno}
          alt="Rhyno"
          className="animate-on-scroll rounded-2xl w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-400 h-auto smooth-hover"
        />
      </div>
    </div>
  );
};

export default Chitwandetails;
