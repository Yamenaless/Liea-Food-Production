import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CategoriesLinks, CareersLinks, copyrightInfoLinks } from "./footerLinks";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <hr className="mb-10 text-black " />
      <div className="container mx-auto flex flex-wrap justify-between px-10 sm:px-0">
        <Link to={"https://www.alloygroup.com.tr/"} target="_blank" className="flex items-center cursor-pointer  ">
          <img
            src={
              "//uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/644704eca74100e285d9219a_dark%20logo.svg"
            }
            className="h-32 w-32 mr-3"
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
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2017-{new Date().getFullYear()} Liea&reg; All rights reserved
        </p>
        <div className="mt-2">
          {
            copyrightInfoLinks.map((item , id) => (
              <Link  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-70 mx-2" to={item.link} key={item.id}>{item.text}{item.slash}</Link>
              
            ))
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
