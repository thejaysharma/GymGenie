import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      id="home"
      className="w-full h-screen bg-white flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-screen-xl m-auto mt-14">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left mb-5">
            Get
            <span className="tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              fit
            </span>
            with
            <span className="font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              AI
            </span>
          </h1>
          <p className="text-2xl font-bold text-center md:text-left mb-5">
            Introducing GymGenie: tailored workout routines for{" "}
            <span className="tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              you
            </span>
          </p>
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center md:text-left mb-5">
              ✨ Just Released ✨
            </p>
            <p className="text-2xl font-bold text-center md:text-left mb-5">
              <span className="tracking-tight underline text-sky-700">
                <button>GymGenie MealPlan 🥗</button>
              </span>
              <br />
              Supercharge your personalized workout with AI-powered meal plans
              tailored to your fitness goals
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-center md:text-left mb-5">
              <span className="tracking-tight underline text-[#10b981]">
                <button>MacroTracker ✏️</button>
              </span>
              <br />
              Effortlessly enter your food and snacks and get an instant
              analysis of calories, protein, carbohydrates, and fats
            </p>
          </div>
          <p>
            <span>10000{" "}</span>
            workout routines generated so far.
          </p>
          <p className="flex pt-2 text-center text-slate-600 md:text-left mb-5">
            No credit card required.
          </p>
          <button className="mt-5 bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 text-white border-0 hover:bg-gradient-to-r hover:from-purple-700 hover:via-purple-700 hover:to-indigo-700 py-3 px-6 font-bold rounded-md transition duration-150 ease-in-out">
            <Link to="/signup">Get started</Link>
          </button>
        </div>
        <div className="flex items-center justify-center text-center">
          <span className="text-9xl text-center">🧞‍♂️</span>
        </div>
      </div>
    </div>
  );
}
