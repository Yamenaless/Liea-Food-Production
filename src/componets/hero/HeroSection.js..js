import React from "react";
import './hero.css'

const HeroSection = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/6458c2c39039924ac9f2319a_Liea-hero-image.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-8">
              Enjoy Delicious Meals
              <br />
              With Liea® Foods
            </h1>
            <button className=" hover:bg-white outline-none hover:text-green-900 text-white font-bold py-2 px-6 rounded-full text-lg shadow-md border border-white">
              Our Products
            </button>
          </div>
        </div>
        <div className="power absolute h-[20%] top-auto bottom-[0%] left-[0%] right-[0%] bg-gradient-to-t from-white to-white-900 "></div>
      </div>
    </>
  );
};

export default HeroSection;
