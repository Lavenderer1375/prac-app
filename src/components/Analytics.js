import React from "react";
import Laptop from "../assets/tamas-katona-cztb3Es0u7I-unsplash.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto md:px-4 my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-emerald-300 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Enim elit incididunt ipsum nisi sint exercitation excepteur. Et do
            ad sunt eu occaecat tempor occaecat dolore cillum proident amet est
            cillum. Culpa tempor est excepteur cupidatat deserunt quis dolore do
            enim proident eu. Ipsum ut est tempor voluptate elit sit sunt nulla
            do amet.
          </p>
          <button className="bg-emerald-300 text-indigo-800 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-indigo-600 hover:text-white ease-in duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
