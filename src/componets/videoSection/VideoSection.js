import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full h-[600px]   relative">
      <div className="max-w-[1900px]  object-none p-10 mx-auto h-full ">
        <video
          autoPlay
          muted
          loop
          src="https://uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/6446fb12022a92a647030b8c_Liea CTA Video-transcode.mp4"
          className="px-0 py-0 m-0 w-full bg-white rounded-3xl h-full object-fill  top-0 left-0"
        />
           <div className="absolute inset-0 flex items-center justify-center ">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-semibold font-Montserrat mb-8">
              Enjoy Delicious Meals
              <br />
              With Liea® Foods
            </h1>
            <button className=" hover:bg-white outline-none font-Montserrat hover:text-green-900 text-white font-bold py-2 px-6 rounded-full text-lg shadow-md border border-white">
              Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
