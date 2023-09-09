import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <hr className="mb-10 text-black bg-black" />
      <div className="container mx-auto flex flex-wrap justify-between">
        <Link to={"/liea"} className="flex items-center">
          <img
            src={
              "//uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/63f3a6fc6498f4e353ff39d7_logo.svg"
            }
            className="h-18 mr-3"
            alt="Liea Logo"
          />
        </Link>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h3 className="text-xl mb-2 font-bold">Categories</h3>
          <ul>
            <li className="hover:text-white text-black">
              <a href="/canned-food">Canned Food For Cooking</a>
            </li>
            <li className="hover:text-white text-black">
              <a href="/legumes-grains">Legumes, Grains And Pulses</a>
            </li>
            <li className="hover:text-white text-black">
              <a href="/ready-to-eat">Ready-to-eat Foods</a>
            </li>
            <li className="hover:text-white text-black">
              <a href="/pasta-spaghetti">Pasta And Spaghetti</a>
            </li>
            <li className="hover:text-white text-black">
              <a href="/olive-oils">Olive & Vegetable Oils</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h3 className="text-xl mb-2 font-bold">Careers</h3>
          <ul>
            <li>
              <a href="/culture">Culture</a>
            </li>
            <li>
              <a href="/positions">Available Positions</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h3 className="text-xl mb-2 font-bold">Company</h3>
          <ul>
            <li>
              <a href="/Alloy Group">Alloy Group</a>
            </li>
            <li>
              <a href="/Contact us">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
