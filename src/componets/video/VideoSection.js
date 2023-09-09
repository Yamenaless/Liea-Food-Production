import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full h-[600px]  relative">
      <div className="max-w-[1900px]  object-none p-10 mx-auto h-full rounded-3xl">
        <video
          autoPlay
          muted
          loop
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          className="px-0 py-0 m-0 w-full bg-white h-full   object-none  rounded-3xl  top-0 left-0"
        />
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
      </div>
    </div>
  );
};

export default VideoSection;
