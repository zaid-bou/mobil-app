import React from "react";
import "./EducationLevels.css"; // Custom CSS for gradient and wavy line

const EducationLevels = () => {
  return (
    <div className="relative flex flex-col items-center w-screen h-screen overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 education-gradient" />

      {/* Decorative wavy line on the left */}
      <div className="wavy-line" />

      {/* Logo */}
      <div className="mt-12 flex flex-col items-center z-10">
        <img
          src="/whitelogo.png"
          alt="Educate Logo"
          className="w-28 h-28 object-contain drop-shadow-md"
        />
      </div>

      {/* Title */}
      <h2 className="mt-8 text-5xl font-black text-black text-center">
        EDUCATION
        <br />
        LEVEL
      </h2>

      {/* Level Buttons */}
      <div className="mt-16 flex flex-col gap-8 w-full max-w-md px-8">
        <button className="flex items-center gap-4 px-6 py-4 bg-gray-400/80 hover:bg-gray-500 active:bg-gray-600 text-black text-3xl font-bold rounded-full shadow-lg transition-all duration-200 active:scale-95">
          <span className="text-4xl">1</span> First Year
        </button>
        <button className="flex items-center gap-4 px-6 py-4 bg-gray-400/80 hover:bg-gray-500 active:bg-gray-600 text-black text-3xl font-bold rounded-full shadow-lg transition-all duration-200 active:scale-95">
          <span className="text-4xl">2</span> Second Year
        </button>
        <button className="flex items-center gap-4 px-6 py-4 bg-gray-400/80 hover:bg-gray-500 active:bg-gray-600 text-black text-3xl font-bold rounded-full shadow-lg transition-all duration-200 active:scale-95">
          <span className="text-4xl">3</span> Third Year
        </button>
      </div>

      {/* Stick figure illustration */}
      <div className="mt-auto mb-12 flex justify-center">
        <img
          src="/stickfigure.png"
          alt="Student walking to education"
          className="w-48 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default EducationLevels;
