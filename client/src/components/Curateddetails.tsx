import { Link } from "react-router-dom";
import ktmlogo from "../assets/ktmlogo.png";
import Bojusimg from "../assets/Bojusimg.png";
import curatedimg2 from "../assets/curatedimg2.png";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Curateddetails = () => {
  const section1ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-left', 0.2);
  const section1ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-right', 0.3);
  const section2ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-left', 0.2);
  const section2ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-right', 0.3);
  const section3ContentRef = useScrollAnimation<HTMLDivElement>('fade-in-left', 0.2);
  const section3ImageRef = useScrollAnimation<HTMLImageElement>('fade-in-right', 0.3);

  return (
    <div>
      {/* First section */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-8 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full mt-12 md:mt-25 lg:mt-25">
        <div ref={section1ContentRef} className="animate-on-scroll flex-1 min-w-0">
          <Link to="" className="block">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={ktmlogo}
                alt="Bojus Logo"
                className="h-28 sm:h-20 md:h-40 lg:h-45 w-auto object-contain mb-4 smooth-hover"
              />
            </div>
          </Link>

          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-black text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Sasvata Curated Experiences: Unveiling the Soul of Kathmandu Valley
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            At Sasvata, we craft exclusive, immersive experiences that reveal
            the timeless allure of Kathmandu Valley, encompassing the cultural
            jewels of Kathmandu, Bhaktapur, and Patan. Our meticulously curated
            journeys are designed to showcase the finest offerings of this
            vibrant region, weaving together its rich heritage, living
            traditions, and breathtaking landscapes. By collaborating closely
            with local artisans, historians, and communities through thoughtful
            partnerships, we create bespoke experiences tailored to the
            discerning traveler's preferences and schedule, ensuring every
            moment resonates with authenticity and elegance.
          </div>
        </div>
        {/* Image section */}
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            ref={section1ImageRef}
            src={Bojusimg}
            alt="Trekking illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
      </div>

      {/* Second secttion */}
      <div className="max-w-[91%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-6 lg:px-8 w-full py-12 lg:py-25">
        <div className="flex-1 flex justify-center items-center">
          <img
            ref={section2ImageRef}
            src={curatedimg2}
            alt="lakhe illustration"
            className="animate-on-scroll max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl w-130 h-auto smooth-hover"
          />
        </div>

        {/* right content section */}
        <div ref={section2ContentRef} className="animate-on-scroll flex-1 min-0">
          <div className="max-w-7xl font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
            Our Philosophy
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Kathmandu Valley is a living tapestry of ancient traditions, sacred
            sites, and vibrant communities, yet many of its stories and cultural
            treasures remain untold, quietly preserved by artisans and locals.
            From the intricate woodcarvings of Bhaktapur's Durbar Square to the
            vibrant festivals of Patan and the spiritual serenity of Kathmandu's
            ancient stupas, this region holds a depth of heritage at risk of
            fading in the modern era. Inspired by a passion to honor and share
            these legacies, Sasvata was founded to bring these hidden narratives
            to life. We believe in preserving the valley's cultural heartbeat by
            connecting travelers with its artisans, storytellers, and guardians
            of tradition, fostering meaningful encounters that enrich both
            visitor and host.
          </div>

          {/* right content section */}
          <div className="flex-1 min-0">
            <div className="max-w-7xl font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
              Curated for Today's Traveler
            </div>
            <div
              className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              In an age where travelers seek authentic, self-researched
              experiences, Sasvata stands apart by offering tailored journeys
              that blend personal discovery with unparalleled access to
              Kathmandu Valley's soul. Whether it's a private workshop with a
              Newari metalworker in Patan, a guided exploration of Bhaktapur's
              pottery traditions, or a meditative evening at a hidden Kathmandu
              monastery, each experience is crafted to align with your time and
              interests. We document every journey in evocative narratives,
              capturing the charm and stories behind each encounter to share the
              valley's essence with the world.
            </div>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-8 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full pb-12 lg:pb-0">
        <div ref={section3ContentRef} className="animate-on-scroll flex-1 min-w-0">
          {/* 1st Left content section */}
          <div className="flex-1 min-0">
            <div className="max-w-7xl font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
              Faces of a Living Heritage
            </div>
            <div
              className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kathmandu Valley's cultural mosaic spanning the Newari artistry of
              Bhaktapur, the sacred craftsmanship of Patan, and the spiritual
              vibrancy of Kathmandu reflects a profound appreciation for beauty,
              balance, and tradition. Local artisans and communities continue to
              breathe life into these legacies, adapting their crafts to the
              modern world while preserving their ancestral roots. Through
              intimate collaborations, Sasvata creates rare, meaningful
              experiences that invite travelers to connect with the valley's
              living heritage. Each journey is a personal invitation to uncover
              the heart of Nepal, forging real connections that keep these
              stories alive for generations to come.
            </div>
          </div>

          {/* right content section */}
          <div className="flex-1 min-0">
            <div className="max-w-7xl font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
              Discover Their Stories with Sasvata
            </div>
            <div
              className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sasvata Curated Experiences opens a door to the authentic, untold
              beauty of Kathmandu Valley, offering travelers a chance to engage
              with its culture in a way never before tailored in Nepal. Let us
              guide you to the heart of this extraordinary region, where every
              step is a story, and every encounter is a legacy preserved.
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            ref={section3ImageRef}
            src={Bojusimg}
            alt="Trekking illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
      </div>
    </div>
  );
};

export default Curateddetails;
