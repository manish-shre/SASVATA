import React from "react";
import bg from "../assets/bg.png";
import HeroSection from "../components/HeroSection";
import Info from "../components/Info";
import Upcommingprojects from "../components/Upcommingprojects";
import Slider from "../components/Slider";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <HeroSection />
      <Info />
      <Upcommingprojects />
      <Slider />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home; 