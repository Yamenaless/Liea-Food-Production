import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CategoriesLinks, CareersLinks } from "./links";

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
          <h3 className="text-xl text-[#0e2522] mb-2 font-extrabold">
            Categories
          </h3>
          <ul>
            {CategoriesLinks.map((item, index) => {
              return (
                <li key={index} className="hover:opacity-75 text-black">
                  <Link to={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h3 className="text-xl text-[#0e2522] mb-2 font-extrabold">
            Careers
          </h3>
          <ul>
            {CareersLinks.map((item, index) => {
              return (
                <li key={index} className="hover:opacity-75 text-black">
                  <Link to={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
          <h3 className="text-xl  text-[#0e2522] mb-2 font-extrabold">
            Company
          </h3>
          <ul>
            <li>
              <Link className="hover:opacity-75" to="/Alloy Group">
                Alloy Group
              </Link>
            </li>
            <li>
              <Link className="hover:opacity-75" to="/Contact us">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
