import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Nav() {
  const [ActiveNav, SetActiveNav] = useState("#");

  return (
    <div className="nav sticky top-0">
      <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="ml-5 text-3xl font-bold mr-5 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              GymGenie
            </h1>
            <ul className="hidden md:flex">
              <li className="p-5 text-gray-700 hover:bg-gray-200 hover:rounded-md cursor-pointer">
                <a
                  href="#home"
                  onClick={() => SetActiveNav("#home")}
                  className={ActiveNav === "#home" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li className="p-5  text-gray-700  hover:bg-gray-200 hover:rounded-md cursor-pointer">
                <a
                  href="#about"
                  onClick={() => SetActiveNav("#about")}
                  className={ActiveNav === "#about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li className="p-5 text-gray-700  hover:bg-gray-200 hover:rounded-md cursor-pointer">
                <a to="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4 hover:text-slate-600">
              <Link to="/login">Sign in</Link>
            </button>
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-bold">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
