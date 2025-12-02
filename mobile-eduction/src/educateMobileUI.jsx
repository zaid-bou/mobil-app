import React from "react";

export default function EducateMobileUI() {
  return (
    <>
      <style>{`
        .gradient-bg {
          background: linear-gradient(180deg, #FFE600 0%, #FFFFFF 100%);
          position: relative;
          overflow: hidden;
        }

        .wavy-line-img {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: auto;
          opacity: 0.6;
        }

        .btn-hover {
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .btn-hover:active {
          transform: translateY(0px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div
        className="gradient-bg relative flex flex-col items-center justify-center"
        style={{ width: "430px", height: "932px" }}
      >
        {/* Wavy Line Image */}
        <img src="/wavy-line.png" alt="" className="wavy-line-img" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center px-8">
          {/* Logo */}
          <div className="mb-12">
            <img
              src="/logo.png"
              alt="Educate Logo"
              className="w-48 h-48 object-contain"
            />
          </div>

          {/* EDUCATE Text */}
          <h1
            className="text-6xl font-black text-black mb-16 tracking-wider"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            EDUCATE.
          </h1>

          {/* Character */}
          <div className="mb-16">
            <img
              src="/student.png"
              alt="Student"
              className="w-48 h-auto object-contain"
            />
          </div>

          {/* Button */}
          <button className="btn-hover bg-white text-black text-2xl font-bold py-5 px-12 rounded-full flex items-center gap-4 border-4 border-black">
            Let's go
            <span className="text-3xl">»</span>
          </button>
        </div>
      </div>
    </>
  );
}
