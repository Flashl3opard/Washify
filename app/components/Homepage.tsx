"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const steps = [
  { step: "STEP 1", title: "Pick Up", anim: "/anim2.lottie" },
  { step: "STEP 2", title: "Wash & Dry", anim: "/anim3.lottie" },
  { step: "STEP 3", title: "Fold", anim: "/anim4.lottie" },
  { step: "STEP 4", title: "Delivery", anim: "/anim6.lottie" },
];

const Homepage = () => {
  return (
    <div className="">
      <section>
        <div className="my-5  p-5 flex">
          <div className="w-1/2">
            <h1>20% Discount for 1 Month Subscription</h1>
            <h1>
              Laundry today or <br />
              Naked tomorrow.
            </h1>
            <p>
              Our laundry service will wash , dry and fold your laundry at an
              affordable price. Pickup and drop-off options available!
            </p>
            <button>How it works</button>
            <div className="flex">
              <h1>18K+ Happy Customers</h1>
              <h1>5+ Years of experience</h1>
            </div>
          </div>
          <div className="w-1/2 ">
            <img src="machine.png" alt="" className="scale-70" />
          </div>
        </div>
        <div className="">
          <div className="my-8 flex flex-col items-center bg-[#a5deee] py-10 px-4 text-center rounded-lg mx-4">
            <h1 className="text-[#21B7E2] text-3xl md:text-4xl font-semibold mb-2 tracking-wide">
              HOW IT WORKS
            </h1>
            <h2 className="text-[#263238] text-4xl md:text-6xl font-bold leading-tight">
              Get it done in 4 simple steps
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 px-4 pb-10">
            {steps.map(({ step, title, anim }, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl shadow-lg p-6 w-full sm:w-[45%] lg:w-[22%] min-w-[220px] transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <h1 className="text-md md:text-lg font-semibold text-gray-800 mb-1">
                  {step}
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
                <DotLottieReact
                  src={anim}
                  loop
                  autoplay
                  className="object-contain w-full h-40"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
