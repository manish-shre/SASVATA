import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import blacklogo from "../assets/blacklogo.png";
import footerbg from "../assets/footerbg.png";
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Footer: React.FC = () => {
  const logoRef = useScrollAnimation<HTMLImageElement>('scale-in', 0.1);
  const contentRef = useScrollAnimation<HTMLDivElement>('fade-in-up', 0.2);
  const socialRef = useScrollAnimation<HTMLDivElement>('fade-in-up', 0.3);

  return (
    <footer className="relative pb-6 px-2 xs:px-4 sm:px-6 md:px-16 lg:px-24 text-black overflow-hidden font-inter w-full max-w-full mt-12 md:mt-25 lg:mt-25">
      {/* Top border line */}
      <div className="absolute h-[1px] bg-[#333333] w-[92%] mx-auto left-0 right-0" />
      {/* Footer background image: centered on mobile/tablet, right on desktop */}
      <img
        src={footerbg}
        alt="Footer background"
        className="absolute bottom-0 left-1/2 right-auto translate-x-[-50%] lg:left-auto lg:right-8 lg:translate-x-0 w-5/6 h-40 xs:h-50 sm:h-100 object-contain pointer-events-none select-none z-0"
        style={{ maxWidth: '600px', maxHeight: '220px' }}
      />
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 xs:gap-10 lg:gap-12 w-full max-w-[98%] mx-auto pt-8 xs:pt-10 pb-28 lg:pb-0">
        {/* Left: Logo, Address, Contact */}
        <div className="flex flex-col items-center lg:items-start min-w-[160px] xs:min-w-[200px] lg:justify-center flex-1 gap-4 xs:gap-6 lg:gap-10 w-full">
          <img
            ref={logoRef}
            src={blacklogo}
            alt="Sasvata Logo"
            className="animate-on-scroll h-18 xs:h-16 sm:h-28 smooth-hover"
          />
          {/* Address and Contact Side by Side on md+, stacked on mobile */}
          <div ref={contentRef} className="animate-on-scroll flex flex-col lg:flex-row gap-4 xs:gap-6 w-full items-center lg:items-start">
            {/* Registered Office Address */}
            <div className="min-w-[450px] xs:min-w-[300px] text-center lg:text-left">
              <h3 className="font-medium text-[20px] xs:text-[22px] sm:text-[20px] mb-2">
                Registered Office Address
              </h3>
              <p className="text-[16px] xs:text-[20px] leading-relaxed">
                Vaidya's Organization of Industries and Trading Houses
                <br />
                VOITH Complex, Ananda Nagar, Dhumbarahi
                <br />
                P.O. BOX: 233/2640, Kathmandu, Nepal
              </p>
            </div>
            {/* Contact */}
            <div className="min-w-[300px] xs:min-w-[300px] text-center lg:text-left">
            <h3 className="font-medium text-[20px] xs:text-[22px] sm:text-[20px] mb-2">
                Contact:
              </h3>
              <p className="text-[16px] xs:text-[20px] leading-relaxed">
                Tel : +977-1-4008801-05, Extn:{" "}
                <span className="font-semibold">117 / 406</span>
                <br />
                Marketing:{" "}
                <a
                  href="mailto:info@sasvatahospitality.com"
                  className="underline font-medium text-blue-500 smooth-hover"
                >
                  info@sasvata.com.np
                </a>
                <br />
                Sales:{" "}
                <a
                  href="mailto:sales@sasvatahospitality.com"
                  className="underline font-medium text-blue-500 smooth-hover"
                >
                  sales@sasvata.com.np
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Right: Social Icons and Copyright */}
        <div ref={socialRef} className="animate-on-scroll flex flex-col items-center lg:items-end min-w-[80px] xs:min-w-[100px] flex-1 justify-center mt-4 lg:mt-0 w-full pr-0 lg:pr-38">
          <div className="flex space-x-3 xs:space-x-4 mb-3 justify-center lg:justify-end">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 smooth-hover"
            >
              <InstagramIcon className="w-6 h-6 text-black" />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 smooth-hover"
            >
              <WhatsAppIcon className="w-6 h-6 text-black" />
            </a>
            <a
              href="https://www.gmail.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 smooth-hover"
            >
              <EmailOutlinedIcon className="w-6 h-6 text-black" />
            </a>
          </div>
          <span className="text-[12px] xs:text-xs text-black text-center block max-w-[160px] xs:max-w-[160px] md:max-w-none md:pb-20">
            ©2025, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer; 