import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Facebook, WhatsApp, Instagram } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="w-full flex justify-center items-center h-30 px-2 bg-transparent">
      <div className="relative w-[90%] h-13 flex items-center justify-between">
        {/* Background and shadow only for desktop/tablet */}
        <div className="hidden md:block absolute inset-0 bg-white/70 shadow-lg rounded-full z-0"></div>
        {/* Desktop Menu (centered) */}
        <div style={{ fontFamily: 'Ortica Linear, sans-serif' }} className="hidden md:flex justify-center items-center text-[16px]  font-medium box-border relative z-10 gap-10 w-full">
          <HashLink
            smooth
            to="/#projects"
            className="no-underline text-black hover:text-hover transition-all duration-300 transform hover:scale-105 smooth-hover"
          >
            Projects
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="no-underline text-black hover:text-hover transition-all duration-300 transform hover:scale-105 smooth-hover"
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="no-underline text-black hover:text-hover transition-all duration-300 transform hover:scale-105 smooth-hover"
          >
            Contact
          </HashLink>
        </div>
        {/* Hamburger Icon (Mobile Only, right aligned) */}
        <button
          className="md:hidden flex items-center focus:outline-none z-20 ml-auto smooth-hover text-[#161515]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile Fullscreen Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white/100 flex flex-col items-start justify-start px-8 pt-20 z-50 transition-all duration-500 ease-in-out">
            <button
              className="absolute top-6 right-6 text-5xl text-red-800 focus:outline-none smooth-hover"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            
            {/* Main Navigation Links */}
            <div className="w-full mb-8">
              <HashLink
                smooth
                to="/"
                className="block text-2xl font-medium text-green-500 mb-8 hover:text-green-600 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </HashLink>
              <HashLink
                smooth
                to="/#projects"
                className="block text-2xl font-medium text-black mb-8 hover:text-gray-600 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </HashLink>
              <HashLink
                smooth
                to="/#about"
                className="block text-2xl font-medium text-black mb-8 hover:text-gray-600 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                className="block text-2xl font-medium text-black mb-8 hover:text-gray-600 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </HashLink>
            </div>


            {/* Social Media Icons */}
            <div className="w-full flex justify-center mb-8">
              <div className="flex space-x-6">
                <a href="#" className="text-black hover:text-gray-600 transition-colors duration-300">
                  <Facebook sx={{ fontSize: 32 }} />
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors duration-300">
                  <WhatsApp sx={{ fontSize: 32 }} />
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors duration-300">
                  <Instagram sx={{ fontSize: 32 }} />
                </a>
              </div>
            </div>

            {/* Separator Line */}
            <div className="w-full h-px bg-gray-300 mb-8"></div>

            {/* Legal and Policy Links */}
            <div className="w-full">
              <div className="flex flex-wrap justify-center gap-6 mb-4">
                <a href="#" className="text-base font-medium text-black hover:text-gray-600 transition-colors duration-300">
                  FAQs
                </a>
                <a href="#" className="text-base font-medium text-black hover:text-gray-600 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-base font-medium text-black hover:text-gray-600 transition-colors duration-300">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 