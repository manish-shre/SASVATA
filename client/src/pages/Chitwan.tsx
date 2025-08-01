import React from "react";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import Chitwanhero from "../components/Chitwanhero";
import Chitwandetails from "../components/Chitwandetails";

const Chitwan: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.bg})` }}
    >
      <Chitwanhero/>
      <Chitwandetails/>
      <Footer/>
    </div>
  );
};

export default Chitwan;  