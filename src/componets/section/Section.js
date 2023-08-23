const Section = () => {
  return (
    <div className="flex w-full flex-col items-center  p-12 ">
      <div className="rounded-full  text-center w-[300px] py-2 bg-[#cd8c5d] ">
        <h1 className="text-xl font-Cabin font-bold text-white">
          Quality Made With Love
        </h1>
      </div>
      <div className="text-center  flex flex-col justify-center items-center  text-green-950">
        <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold mb-8 mt-4">
          Enjoy Delicious Meals
          <br />
          With Liea® Foods
        </h1>
        <div className="w-full text-black font-Roboto text-center flex justify-center items-center">
          <p className="text-xl  max-w-[900px]">
            At Liea® we offer high-quality food products to our customers across
            the world. Our mission is to design, research, and manufacture
            innovative food products that cater to the needs and desires of our
            customers. Our commitment to providing the best value products to
            our customers is unwavering, and we take pride in our work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
