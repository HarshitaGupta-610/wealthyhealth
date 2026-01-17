import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#0a1a3f] text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT: Intro */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            WealthyHealth
          </h1>

          <p className="text-xl mt-4 text-gray-200">
            Adding Healthy Years to Your Life —  
            <span className="font-semibold"> One Small Habit at a Time.</span>
          </p>

          <p className="mt-6 text-gray-300 text-lg">
            A preventive-health platform that empowers India's next generation  
            to increase <span className="font-semibold">Health-Adjusted Life Expectancy (HALE)</span>  
            through simple, daily, self-driven actions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/features"
              className="bg-white text-[#0a1a3f] px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
            >
              Explore Platform
            </Link>

            <Link
              to="/login"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0a1a3f] transition"
            >
              Start Your Journey
            </Link>
          </div>
        </div>

        {/* RIGHT: Logo Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Images/Logo.png"
            alt="WealthyHealth Logo"
            className="w-72 md:w-96 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
