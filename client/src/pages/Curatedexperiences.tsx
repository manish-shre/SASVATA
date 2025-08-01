import React from "react";
import bg from "../assets/bg.png";
import Footer from "../components/Footer";
import Curatedhero from "../components/Curatedhero";
import Curateddetails from "../components/Curateddetails";

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Curatedhero/>
      <Curateddetails/>
      <Footer/>
    </div>
  );
};

export default Home;  