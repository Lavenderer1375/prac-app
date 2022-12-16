import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-indigo-300 font-bold p-2">
          GROWING WITH DATA ANALYTICS.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 hover:cursor-pointer hover:text-emerald-300 ease-in duration-200">
          Grow with DATA!
        </h1>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible Financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:px-4 px-2 py-4 text-indigo-300"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-lg px-1 font-bold text-emerald-300">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
              </p>
              <button className="bg-emerald-300 text-indigo-800 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-indigo-600 hover:text-white ease-in duration-200">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
