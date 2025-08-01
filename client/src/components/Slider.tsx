import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Replace with your actual image imports or URLs
const images = [
    assets.bojusslider,
    assets.postcardslider,
    assets.ktmslider,
    assets.phakdingslider,
];

const logos = [
    assets.whitebojus,
    assets.whitepostcard,
    assets.whitektm,
    assets.whitephakding,
];

const buttonTexts = [
    "OPENING IN 2025",
    "OPENING IN 2026",
    "OPENING IN 2026",
    "OPENING IN 2027",
];

const Slider: React.FC = () => {
    const [current, setCurrent] = useState<number>(0);
    const [next, setNext] = useState<number>(1);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const sliderRef = useScrollAnimation<HTMLDivElement>('fade-in-up', 0.1);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (current + 1) % images.length;
            setNext(nextIndex);
            setIsTransitioning(true);
            
            // After transition completes, update the current image
            setTimeout(() => {
                setCurrent(nextIndex);
                setIsTransitioning(false);
            }, 500); // Transition duration
        }, 2000); // 2 seconds between slides
        
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div 
            ref={sliderRef}
            className="animate-on-scroll relative w-full h-auto sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] flex flex-col items-center justify-center overflow-hidden shadow-lg lg:my-25 md:my-25"
        >
            {/* Background Image - Current */}
            <div
                className="absolute inset-0 w-full h-full z-0 transition-opacity duration-500 ease-in-out"
                style={{
                    backgroundImage: `url(${images[current]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: isTransitioning ? 0 : 1,
                }}
            />
            
            {/* Background Image - Next */}
            <div
                className="absolute inset-0 w-full h-full z-0 transition-opacity duration-500 ease-in-out"
                style={{
                    backgroundImage: `url(${images[next]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: isTransitioning ? 1 : 0,
                }}
            />

            {/* Overlay Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 z-10">
                {/* Logo */}
                <img
                    src={logos[current]}
                    alt={`logo-${current}`}
                    className="w-auto h-26 sm:h-40 md:h-42 lg:h-72 xl:h-60 sm:mb-8 drop-shadow-lg mb-4 transition-all duration-500 ease-in-out smooth-hover"
                    style={{ opacity: isTransitioning ? 0 : 1 }}
                />
                {/* Glass Button */}
                <button
                    className="backdrop-blur-md bg-white/15 border border-white/30 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-medium shadow-lg hover:bg-white/40 hover:scale-105 transition-all duration-500 ease-in-out smooth-hover"
                    style={{ 
                        fontFamily: '"Inter", sans-serif',
                        opacity: isTransitioning ? 0 : 1 
                    }}
                >
                    {buttonTexts[current]}
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`block w-5 h-1 sm:w-8 md:w-10 rounded-full transition-all duration-300 smooth-hover ${idx === current ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
export default Slider; 