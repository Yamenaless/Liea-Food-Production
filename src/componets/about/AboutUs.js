import React from "react";

const AboutUs = () => {
  return (
    <section className="text-black py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">



        <div className="md:w-1/2 rounded-3xl  h-[700px]">
          <div className="h-full flex justify-center rounded-3xl items-center  ">
            <img
              src="https://uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/6446fea9b2c500ba55dbd2ed_Green-olive.jpg" // Replace with your image URL
              alt="Company Logo"
              className="w-[500px] object-cover md:w-[500px] sm:w-[500px]  opacity-95 md:h-full rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* text section  */}
        <div className="md:w-1/2 ml-4 md:ml-9 sm:mt-5 ">
            <p className="text-3xl font-IBM text-orange-400 mb-3 mt-5">About us</p>
            <h1 className="text-5xl lg:w-[600px]  md:w-[400px] w-[400px] text-green-950 md:text-6xl lg:text-6xl font-bold mb-8">
            Enjoy Delicious Meals Made With love by Liea® Foods
            </h1>
          <p className="text-lg md:text-xl font-Roboto max-w-3xl">
            At Liea® we offer high-quality food products to our customers across
            the world. Our mission is to design, research, and manufacture
            innovative food products that cater to the needs and desires of our
            customers. Our commitment to providing the best value products to
            our customers is unwavering, and we take pride in our work.
          </p>
        </div>



      </div>
    </section>
  );
};

export default AboutUs;
