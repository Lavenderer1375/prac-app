import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-indigo-300 text-3xl font-bold font[Poppins] hover:cursor-pointer">
        Builder
      </h1>
      <ul className="hidden sm:flex hover:cursor-pointer">
        <li className="p-4  hover:bg-indigo-300 hover:text-indigo-900 ease-in duration-200">
          Home
        </li>
        <li className="p-4  hover:bg-indigo-300 hover:text-indigo-900 ease-in duration-200">
          Company
        </li>
        <li className="p-4  hover:bg-indigo-300 hover:text-indigo-900 ease-in duration-200">
          Resources
        </li>
        <li className="p-4  hover:bg-indigo-300 hover:text-indigo-900 ease-in duration-200">
          About
        </li>
        <li className="p-4  hover:bg-indigo-300 hover:text-indigo-900 ease-in duration-200">
          Contact
        </li>
      </ul>
      <div
        onClick={navHandler}
        className="block  hover:cursor-pointer hover:bg-indigo-300 ease-in duration-200"
      >
        {!nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-indigo-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-emerald-300 m-4 text-3xl font-bold font[Poppins]">
          Builder
        </h1>
        <ul className="uppercase p-3">
          <li className="p-4 border-b border-b-emerald-300">Home</li>
          <li className="p-4 border-b border-b-emerald-300">Company</li>
          <li className="p-4 border-b border-b-emerald-300">Resources</li>
          <li className="p-4 border-b border-b-emerald-300">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
