import React from "react";
import "./Mycard.css";
const Mycard = (props) => {
  return (
    <div className="mycard text-center flex items-center justify-center">
      <h1 className="text-orange-600" >{props.text}</h1>

      <img  src={props.image}  alt="alt"/>
    </div>
  );
};

export default Mycard;
