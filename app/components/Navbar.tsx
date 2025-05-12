"use client";
import React, { useState } from "react";
import { MdOutlineBubbleChart } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full mx-auto rounded-2xl shadow-2xl my-auto px-5 bg-white">
      <nav className="flex flex-wrap items-center justify-between py-4 relative z-30">
        <div className="flex items-center text-blue-600 font-extrabold text-4xl mx-5 gap-2">
          <h1>Washify</h1>
          <MdOutlineBubbleChart />
        </div>

        <button
          className="block md:hidden text-3xl text-blue-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <ul
          className={`flex-col md:flex-row md:flex md:items-center md:gap-8 w-full md:w-auto fixed md:relative top-0 left-0 md:top-auto md:left-auto bg-blue-100 md:bg-transparent shadow-md md:shadow-none rounded-b-xl md:rounded-none transition-transform duration-300 ease-in-out z-20 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[calc(100vh_-_64px)] px-4 py-6"
              : "max-h-0 p-0"
          } md:max-h-full`}
        >
          {isMobileMenuOpen && (
            <li className="md:hidden flex justify-end mb-2">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-blue-600 text-3xl focus:outline-none"
              >
                <HiX />
              </button>
            </li>
          )}

          {["Home", "How it works", "Services", "Locations", "Contact Us"].map(
            (item) => (
              <li
                key={item}
                className="p-4 text-lg font-semibold text-blue-900 hover:text-blue-600 cursor-pointer text-center md:text-left transition-colors duration-200"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
