"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Learn = () => {
  return (
    <section className="min-h-[400px] flex items-center justify-center my-20 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-3xl shadow-xl w-full max-w-5xl p-8 gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <DotLottieReact
            src="/doubt.lottie"
            loop
            autoplay
            className="w-64 h-64 md:w-80 md:h-80"
            aria-label="Animation showing a person with a question"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-4xl font-extrabold mb-6 drop-shadow-md">
            Hard time deciding what’s best for you?
          </h1>
          <p className="text-lg mb-8 drop-shadow-sm">
            Discover tailored learning paths to help you make confident
            decisions.
          </p>
          <button
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            type="button"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Learn;
