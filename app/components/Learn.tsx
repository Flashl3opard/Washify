"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Learn = () => {
  return (
    <section className="w-auto flex items-center justify-center my-20">
      <div className=" flex w-3/4 h-50 bg-blue-600 rounded-2xl justify-start items-start">
        <DotLottieReact
          src="doubt.lottie"
          loop
          autoplay
          className="object-cover w-auto h-auto scale-150 "
        />
      </div>
    </section>
  );
};

export default Learn;
