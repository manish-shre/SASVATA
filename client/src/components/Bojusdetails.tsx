import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Bojusdetails = () => {
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
                src={assets.Bojus}
                alt="Bojus Logo"
                className="h-16 sm:h-20 md:h-26 lg:h-25 w-auto object-contain mb-4 smooth-hover"
              />
            </div>
          </Link>
       
          <div
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="max-w-7xl font-semibold mb-2 sm:mb-4 text-black text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            A Sanctuary of rest and rejuvenation on the iconic Everest Trail
          </div>
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            After the exhilarating ascent to Namche Bazaar on the second day of the Everest trek, a well-deserved pause beckons. By day three, spirits soar as trekkers embark on a scenic acclimatization hike to Syangboche, where Sagarmatha National Park unveils its awe-inspiring vistas and sensory delights. Here, amidst the pristine beauty of the Himalayas, Boju's by Sasvata awaits—a haven crafted to elevate the trekker's rest into an unforgettable experience of refined rejuvenation. At Boju's by Sasvata, every detail is curated to harmonize luxury with the raw beauty of the Everest region, ensuring a restful interlude that elevates your trek into a transformative odyssey.
          </div>
        </div>
            {/* Image section */}
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            ref={section1ImageRef}
            src={assets.Bojusimg}
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
            src={assets.phakdingimg}
            alt="Phakding illustration"
            className="animate-on-scroll w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto smooth-hover"
          />
        </div>
        <div ref={section2ContentRef} className="animate-on-scroll flex-1 min-0">
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nestled in the enchanting environs of Syangboche, a captivating day hike from Namche, this extraordinary destination offers more than breathtaking views. Home to the world's highest airport, the innovative Sagarmatha Next where Everest's waste is transformed through sustainable artistry and the iconic Panorama House and Everest View Hotel, Syangboche gifts hikers their first majestic glimpse of Everest. Yet, it is Boju's by Sasvata that sets this journey apart, offering an exclusive rest experience unparalleled in the region, where elegance meets the wild heart of the Himalayas.
          </div>
          {/* Icon and title section */}
          {/* First icon */}
          <div className="flex items-center gap-3 mt-4 smooth-hover">
            <span className="bg-white w-12 h-12 flex  items-center justify-center rounded-full shrink-0 shadow-md">
              <img src={assets.icon1} alt="Amenities Icon" className="w-6 h-6 object-contain" />
            </span>
            <span className="text-base">
              <span className="font-bold">Therapeutic Hot Springs: </span>
              <span className="font-normal text-sm sm:text-base md:text-lg lg:text-lg">Immerse in soothing, mineral-rich waters to revitalize weary muscles, preparing you for the adventures ahead.</span>
            </span>
          </div>

        {/* Second icon */}
          <div className="flex items-center gap-3 mt-4 smooth-hover">
            <span className="bg-white w-12 h-12 flex  items-center justify-center rounded-full shrink-0 shadow-md">
              <img src={assets.icon2} alt="Amenities Icon" className="w-6 h-6 object-contain" />
            </span>
            <span className="text-base">
              <span className="font-bold">Cozy Fireplace & Foot Massage: </span>
              <span className="font-normal text-sm sm:text-base md:text-lg lg:text-lg"> Unwind by a crackling fire as expert hands restore your inner vitality with a rejuvenating foot massage, a moment of pure tranquility.</span>
            </span>
          </div>

       {/* Third icon */}
       <div className="flex items-center gap-3 mt-4 smooth-hover">
            <span className="bg-white w-12 h-12 flex  items-center justify-center rounded-full shrink-0 shadow-md">
              <img src={assets.icon3} alt="Amenities Icon" className="w-6 h-6 object-contain" />
            </span>
            <span className="text-base">
              <span className="font-bold">Nutritious Beverages & Sherpa Fusion Desserts: </span>
              <span className="font-normal text-sm sm:text-base md:text-lg lg:text-lg"> Savor artfully crafted, nutrient-rich drinks and exquisite Sherpa-inspired desserts, designed to re-energize both body and soul.</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bojusdetails;