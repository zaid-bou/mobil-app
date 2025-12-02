import React from "react";

const EducateSplash = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-yellow-300 to-yellow-100 flex flex-col items-center justify-between">
      {/* Decorative wavy line on the left */}
      <svg
        className="absolute left-0 top-0 h-full w-24 opacity-20"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M10,50 Q50,250 30,450 Q60,650 20,900"
          stroke="black"
          strokeWidth="8"
          fill="none"
        />
      </svg>

      {/* Logo + Title */}
      <div className="flex flex-col items-center mt-16">
        <img
          src="/logo0.png"
          alt="Educate Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
        <h1 className="text-6xl md:text-7xl font-black text-black mt-6 tracking-wider">
          EDUCATE.
        </h1>
      </div>

      {/* Student with laptop */}
      <div className="flex-1 flex items-center justify-center px-8">
        <img
          src="/student.png"
          alt="Student learning"
          className="max-w-full max-h-64 object-contain"
        />
      </div>

      {/* Let's Go Button */}
      <button className="mb-20 px-10 py-5 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black text-4xl font-bold rounded-full shadow-2xl transition-all duration-200 active:scale-95 flex items-center gap-3">
        Let's go
        <span className="text-5xl font-bold">»</span>
      </button>
    </div>
  );
};

export default EducateSplash;
