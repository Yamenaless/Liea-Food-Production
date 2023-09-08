import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full h-[500px] px-20 py-10 flex justify-center items-center relative">
        <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover rounded-3xl  top-0 left-0"
      >
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" // Replace with the path to your video file
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>
  );
};

export default VideoSection;
