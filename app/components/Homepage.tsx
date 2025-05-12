"use client";
import React from "react";

const Homepage = () => {
  return (
    <div className="">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-blue-400 text-white w-fit px-4 py-2 rounded-xl shadow">
            <h1 className="text-sm font-semibold">
              20% Discount for 1 Month Subscription
            </h1>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#00334C] leading-tight">
            Laundry today or <br /> Naked tomorrow.
          </h1>

          <p className="text-lg md:text-2xl text-[#00334C] w-full md:w-3/4">
            Our laundry service will wash, dry and fold your laundry at an
            affordable price. Pickup and drop-off options available!
          </p>

          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
            How it works
          </button>

          <div className="flex flex-col sm:flex-row gap-4 text-[#00334C] font-medium pt-2">
            <h2>✅ 18K+ Happy Customers</h2>
            <h2>🎉 5+ Years of Experience</h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="machine.png"
            alt="Laundry Machine"
            className="max-w-[90%] md:max-w-md scale-90 md:scale-100"
          />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
