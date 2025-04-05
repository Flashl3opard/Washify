"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 my-5 md:static md:my-0 flex flex-col md:flex-row w-full h-15 shadow-2xl rounded-2xl bg-white md:bg-transparent transform translate-y-4 md:translate-y-0">
      {" "}
      {/* Added translate-y-4 for mobile */}
      <ul className="flex flex-wrap items-center justify-evenly w-full">
        {[
          {
            icon: <FaHome className="scale-150 md:scale-200" />,
            label: "Home",
          },
          {
            icon: <CiSearch className="scale-150 md:scale-200" />,
            label: "Prices",
          },
          {
            icon: (
              <DotLottieReact
                src="/Plus.json"
                loop
                autoplay
                className="w-auto h-16"
              />
            ),
            label: "Book Now",
          },
          {
            icon: <MdHistory className="scale-150 md:scale-200" />,
            label: "History",
          },
          {
            icon: <CgProfile className="scale-150 md:scale-200" />,
            label: "Profile",
          },
        ].map((item, index) => (
          <li key={index} className="flex flex-col items-center gap-2 m-2">
            <div className="flex items-center justify-center w-12 h-12">
              {item.icon}
            </div>
            <h1 className="text-lg font-semibold md:text-xl text-center">
              {item.label}
            </h1>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
