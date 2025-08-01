import React from "react";
import bg from "../assets/bg.png";
import Footer from "../components/Footer";
import Everestlodgehero from "../components/Everestlodgehero";
import Everestdetails from "../components/Everestdetails";

const Everestlodge: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Everestlodgehero/>
      <Everestdetails/>
      <Footer/>
    </div>
  );
};

export default Everestlodge;  