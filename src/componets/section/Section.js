// import './section.css'

const Section = () => {
  return (
    <div className="flex w-full flex-col relative items-center py-12 px-0 ">
      <div className="blurry-images">
        <img
          className="mx-auto  inset-y-0  z-20 absolute top-auto left-auto right-[0%] inline-block max-w-[40%]  px-0  "
          src="https://uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/644a5010dbadfe0b2f1e47f8_right-leaf.png"
          alt="blurry-right"
        />

        <img
          className="mx-auto  inset-y-0  z-20 absolute top-auto left-0 bottom-auto right-auto block  max-w-[40%]  px-0 "
          src="https://uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/6449459085c47539ad11cb77_Blurry%20Olive.png"
          alt="blurry-right"
        />
      </div>

      <div className="rounded-full  text-center w-[300px] py-2 bg-[#cd8c5d] ">
        <h1 className="text-xl font-Montserrat font-bold text-white">
          Quality Made With Love
        </h1>
      </div>

      <div className="text-center  flex flex-col justify-center items-center  text-[#023731]">
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-Montserrat font-bold  mb-8 mt-4">
          Enjoy Delicious Meals
          <br />
          With Liea® Foods
        </h1>
        <div className="w-full text-black  font-thin text-center flex justify-center items-center">
          <p className="text-xl max-w-[900px] ">
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
