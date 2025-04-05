"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 my-5 md:static md:my-0 flex flex-col md:flex-row w-full h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transition-transform transform translate-y-4 md:translate-y-0">
      <ul className="flex flex-wrap items-center justify-evenly w-full">
        {[
          {
            icon: (
              <FaHome className="scale-150 md:scale-225 text-white transition-transform duration-200 hover:scale-125 shadow-md" />
            ),
            label: "Home",
          },
          {
            icon: (
              <CiSearch className="scale-150 md:scale-225 text-white transition-transform duration-200 hover:scale-125 shadow-md" />
            ),
            label: "Prices",
          },
          {
            icon: (
              <DotLottieReact
                src="/Plus.json"
                loop
                autoplay
                className="w-auto h-16 transition-transform duration-200 hover:scale-110"
              />
            ),
            label: "Book Now",
          },
          {
            icon: (
              <MdHistory className="scale-150 md:scale-225 text-white transition-transform duration-200 hover:scale-125 shadow-md" />
            ),
            label: "History",
          },
          {
            icon: (
              <CgProfile className="scale-150 md:scale-225 text-white transition-transform duration-200 hover:scale-125 shadow-md" />
            ),
            label: "Profile",
          },
        ].map((item, index) => (
          <li key={index} className="flex flex-col items-center gap-1 m-2">
            {index === 2 ? ( // Check if it's the "Book Now" item
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md transition-transform duration-200 hover:shadow-xl">
                {item.icon}
              </div>
            ) : (
              <div className="flex items-center justify-center w-12 h-12">
                {item.icon}
              </div>
            )}
            <h1 className="text-lg font-semibold md:text-xl text-white text-center transition-colors duration-200 hover:text-yellow-300">
              {item.label}
            </h1>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
