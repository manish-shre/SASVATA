import React from "react";
import bg from "../assets/bg.png";
import Footer from "../components/Footer";
import Bojushero from "../components/Bojushero";
import Bojusdetails from "../components/Bojusdetails"

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Bojushero/>
      <Bojusdetails/>
   
      <Footer/>
    </div>
  );
};

export default Home;  