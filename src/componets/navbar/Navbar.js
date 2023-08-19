import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="w-full h-[120px] mr-0 ml-0 absolute border-b-2 border-slate-300">
      <nav className="max-w-[1800px] mx-auto px-20 h-full flex justify-between items-center">
        {/* =========== LOGO START HERE =========== */}
        <div>
          <a href={"/home"}>
            <img
              src="//uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/63f3a6fc6498f4e353ff39d7_logo.svg"
              alt="logo"
            ></img>
          </a>
        </div>
        {/* =========== LOGO END HERE =========== */}

        {/* =========== LINKS START HERE =========== */}
        <div className="links">
          <ul className="flex cursor-pointer space-x-8 text-xl text-white">
            <Link to={"/liea"}>Home</Link>
            <Link to={"/liea#products"}>Products</Link>
            <Link to={"/liea#LieaAbout"}>About us</Link>
          </ul>
        </div>
        {/* =========== LINKS END HERE =========== */}

        {/* =========== BUTTONS START HERE =========== */}
        <div className="buttons space-x-2 text-xl text-white flex justify-center items-center  ">
          <button className=" text-center rounded-full backdrop-blur-sm bg-white/20 px-4 py-1">
            Contact us
          </button>
          <button className=" text-center bg-green-900 p-1 px-4 rounded-full">
            AR
          </button>
        </div>
        {/* =========== BUTTONS END HERE =========== */}
      </nav>
    </div>
  );
};

export default Navbar;
