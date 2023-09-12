import React from "react";
import Mycard from "./Mycard.js";
import "./Imagecarousel.css";
const Imagecarousel = () => {
  const images = [
    {
      image: "https://images.pexels.com/photos/596115/pexels-photo-596115.jpeg",
      text : "Ready-to-eat Foods"
    },
    {
      image: "https://images.pexels.com/photos/270233/pexels-photo-270233.jpeg",
      text : "Ready-to-eat Foods"
    },
    {
      image: "https://images.pexels.com/photos/356016/pexels-photo-356016.jpeg",
      text : "Ready-to-eat Foods"
    },
    {
      image: "https://images.pexels.com/photos/356016/pexels-photo-356016.jpeg",
       text : "Ready-to-eat Foods"
    },
    {
      image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
       text : "Ready-to-eat Foods"
    },
    {
      image: "https://images.pexels.com/photos/356016/pexels-photo-356016.jpeg",
       text : "Ready-to-eat Foods"
    },
    {
      image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
       text : "Ready-to-eat Foods"
    },

  ];

  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <button
        className="pre-btn text-center flex justify-center items-center"
        onClick={btnpressprev}
      >
        <p className="text-center flex justify-center items-center mx-0 px-0 py-0 ">
          &lt;
        </p>
      </button>
      <button className="next-btn " onClick={btnpressnext}>
        <p className="text-center flex justify-center items-center mx-0 px-0 py-0">
          &gt;
        </p>
      </button>

      <div className="product-container text-center ">
        <div className="flex items-center justify-center ">
          {images.map((item, index) => {
            return <Mycard image={item.image} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Imagecarousel;
